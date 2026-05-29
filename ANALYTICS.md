# Analytics (GA4)

This site uses **Google Analytics 4 (GA4)** via **direct `gtag.js`**.

## 1) Create GA4 Measurement ID

1. Open Google Analytics → Admin.
2. Create a **Property** (if you don’t have one already).
3. Under **Data collection and modification** → **Data streams** → **Web**.
4. Enter your website URL (e.g. `https://nookly.app`) and a stream name.
5. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`).

## 2) Configure locally / in CI

Create an env file from the template:

- Copy `.env.example` to `.env` (or set these env vars in your deploy environment)

Required:
- `VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX`

Optional:
- `VITE_GA4_DEBUG=true` (enables GA4 DebugView by sending `debug_mode: true` on events)

## 3) What we track

- `play_store_click`
- `app_store_click`
- `cta_click`
- `waitlist_open`
- `waitlist_submit`
- `scroll_depth`
- `time_on_page`

Every event includes attribution where available:
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
- `referrer_host`

