type UtmKey = "utm_source" | "utm_medium" | "utm_campaign" | "utm_content" | "utm_term";

export type Attribution = Partial<Record<UtmKey, string>> & {
  referrer_host?: string;
};

type TrackParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    __NOOKLY_GA4_MEASUREMENT_ID__?: string;
    __NOOKLY_GA4_DEBUG__?: boolean;
  }
}

const UTM_KEYS: UtmKey[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

const STORAGE_FIRST_TOUCH = "nookly_attrib_first";
const STORAGE_LAST_TOUCH = "nookly_attrib_last";

function safeParseJson<T>(value: string | null): T | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function getReferrerHost(): string | undefined {
  const ref = document.referrer;
  if (!ref) return undefined;
  try {
    return new URL(ref).host || undefined;
  } catch {
    return undefined;
  }
}

function readUtmFromUrl(): Partial<Record<UtmKey, string>> {
  const params = new URLSearchParams(window.location.search);
  const next: Partial<Record<UtmKey, string>> = {};
  for (const key of UTM_KEYS) {
    const v = params.get(key);
    if (v) next[key] = v;
  }
  return next;
}

function mergeAttribution(base: Attribution, patch: Attribution): Attribution {
  const next: Attribution = { ...base };
  for (const key of UTM_KEYS) {
    if (patch[key]) next[key] = patch[key];
  }
  if (patch.referrer_host) next.referrer_host = patch.referrer_host;
  return next;
}

export function captureAttributionFromCurrentPage(): Attribution {
  const patch: Attribution = { ...readUtmFromUrl() };
  const refHost = getReferrerHost();
  if (refHost) patch.referrer_host = refHost;

  const existingFirst = safeParseJson<Attribution>(localStorage.getItem(STORAGE_FIRST_TOUCH));
  const existingLast = safeParseJson<Attribution>(sessionStorage.getItem(STORAGE_LAST_TOUCH));

  const last = mergeAttribution(existingLast || {}, patch);
  sessionStorage.setItem(STORAGE_LAST_TOUCH, JSON.stringify(last));

  if (!existingFirst) {
    const first = mergeAttribution({}, patch);
    localStorage.setItem(STORAGE_FIRST_TOUCH, JSON.stringify(first));
    return first;
  }

  return existingFirst;
}

export function getAttribution(mode: "last" | "first" = "last"): Attribution {
  const stored =
    mode === "first"
      ? safeParseJson<Attribution>(localStorage.getItem(STORAGE_FIRST_TOUCH))
      : safeParseJson<Attribution>(sessionStorage.getItem(STORAGE_LAST_TOUCH));
  return stored || {};
}

export function withUtm(url: string, mode: "last" | "first" = "last"): string {
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    // relative url
    u = new URL(url, window.location.origin);
  }

  const attrib = getAttribution(mode);
  for (const key of UTM_KEYS) {
    const v = attrib[key];
    if (v && !u.searchParams.get(key)) u.searchParams.set(key, v);
  }
  return u.toString();
}

export function track(eventName: string, params: TrackParams = {}, opts?: { mode?: "last" | "first" }) {
  const gtag = window.gtag;
  if (!gtag) return;

  const attrib = getAttribution(opts?.mode ?? "last");
  const payload: TrackParams = {
    ...attrib,
    ...params,
  };

  if (window.__NOOKLY_GA4_DEBUG__) {
    payload.debug_mode = true;
  }

  gtag("event", eventName, payload);
}

export function trackPageView(path?: string) {
  const gtag = window.gtag;
  if (!gtag) return;
  const p = path ?? window.location.pathname + window.location.search;
  gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: p,
    page_title: document.title,
    ...getAttribution("last"),
    ...(window.__NOOKLY_GA4_DEBUG__ ? { debug_mode: true } : {}),
  });
}

export function startScrollDepthTracking(options?: { thresholds?: number[] }) {
  const thresholds = (options?.thresholds ?? [25, 50, 75, 90]).slice().sort((a, b) => a - b);
  const fired = new Set<number>();

  function getPercent(): number {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop || 0;
    const viewport = window.innerHeight || doc.clientHeight || 0;
    const full = doc.scrollHeight || 0;
    const denom = Math.max(1, full - viewport);
    const pct = Math.floor((scrollTop / denom) * 100);
    return Math.max(0, Math.min(100, pct));
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      ticking = false;
      const pct = getPercent();
      for (const t of thresholds) {
        if (!fired.has(t) && pct >= t) {
          fired.add(t);
          track("scroll_depth", { percent: t });
        }
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  // fire once in case user lands mid-page (anchors)
  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
}

export function startTimeOnPageTracking() {
  const start = Date.now();
  let sent = false;

  function send(reason: "hidden" | "unload") {
    if (sent) return;
    sent = true;
    const seconds = Math.max(0, Math.round((Date.now() - start) / 1000));
    track("time_on_page", { seconds, reason });
  }

  function onVisibilityChange() {
    if (document.visibilityState === "hidden") {
      send("hidden");
    }
  }

  window.addEventListener("visibilitychange", onVisibilityChange);
  window.addEventListener("beforeunload", () => send("unload"));
  window.addEventListener("pagehide", () => send("unload"));

  return () => {
    window.removeEventListener("visibilitychange", onVisibilityChange);
  };
}

