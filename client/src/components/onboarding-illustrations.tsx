import { useId } from "react";

const A = "#8b5cf6";
const D = "#6d28d9";
const L = "#c4b5fd";
const H = "#f43f5e";
const SURFACE = "#181126";

type IllProps = { className?: string };

export function IllBrowse({ className }: IllProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} width="300" height="240" viewBox="0 0 300 280" aria-hidden>
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="55%">
          <stop offset="0" stopColor={A} stopOpacity="0.34" />
          <stop offset="1" stopColor={A} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-av2`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={A} />
          <stop offset="1" stopColor={D} />
        </linearGradient>
        <linearGradient id={`${id}-card`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a1230" />
          <stop offset="1" stopColor="#0f0a1c" />
        </linearGradient>
      </defs>
      <circle cx="150" cy="140" r="140" fill={`url(#${id}-glow)`} />
      <g transform="translate(70 28)">
        <rect width="160" height="224" rx="18" fill={SURFACE} stroke={A} strokeOpacity="0.5" strokeWidth="1.5" />
        <circle cx="28" cy="32" r="18" fill={`url(#${id}-av2)`} />
        <text x="28" y="38" textAnchor="middle" fontFamily="Manrope" fontSize="16" fontWeight="700" fill="#fff">J</text>
        <text x="54" y="29" fontFamily="Manrope" fontSize="13" fontWeight="700" fill="#e9dfff">Jasmine, 34</text>
        <rect x="12" y="62" width="136" height="78" rx="10" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.18" />
        <text fontFamily="Manrope" fontSize="10.5" fill="rgba(255,255,255,0.85)" fontWeight="500">
          <tspan x="20" y="80">Quiet evenings,</tspan>
          <tspan x="20" y="96">late conversations,</tspan>
          <tspan x="20" y="112">honesty over small talk.</tspan>
        </text>
        <g transform="translate(140 200)">
          <circle r="22" fill={H} fillOpacity="0.22" />
          <circle r="17" fill={H} stroke="#fff" strokeOpacity="0.22" strokeWidth="1.2" />
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="#fff"
            transform="scale(0.7) translate(-12 -12)"
          />
        </g>
      </g>
    </svg>
  );
}

export function IllAnonymous({ className }: IllProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} width="280" height="240" viewBox="0 0 280 280" aria-hidden>
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor={A} stopOpacity="0.34" />
          <stop offset="1" stopColor={A} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-av`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={L} stopOpacity="0.85" />
          <stop offset="1" stopColor={D} stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={`${id}-veil`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={D} stopOpacity="0.95" />
          <stop offset="1" stopColor={A} stopOpacity="0.4" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <circle cx="140" cy="120" r="78" />
        </clipPath>
      </defs>
      <circle cx="140" cy="140" r="140" fill={`url(#${id}-glow)`} />
      <circle cx="140" cy="120" r="78" fill={`url(#${id}-av)`} />
      <g clipPath={`url(#${id}-clip)`}>
        <circle cx="140" cy="105" r="26" fill="#fff" fillOpacity="0.92" />
        <ellipse cx="140" cy="190" rx="56" ry="40" fill="#fff" fillOpacity="0.92" />
        <rect x="62" y="92" width="156" height="34" fill={`url(#${id}-veil)`} />
      </g>
      <circle cx="140" cy="120" r="78" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.5" />
      <g transform="translate(50 220)">
        <rect width="180" height="44" rx="14" fill={SURFACE} stroke={A} strokeOpacity="0.25" />
        <text x="46" y="22" fontFamily="Manrope" fontSize="11" fontWeight="600" fill="#fff" letterSpacing="1">HIDDEN</text>
        <text x="46" y="34" fontFamily="Manrope" fontSize="10" fill="rgba(255,255,255,0.55)">until you choose</text>
      </g>
    </svg>
  );
}

export function IllGames({ className }: IllProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} width="300" height="240" viewBox="0 0 300 280" aria-hidden>
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="55%">
          <stop offset="0" stopColor={A} stopOpacity="0.38" />
          <stop offset="1" stopColor={A} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-c2`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={L} />
          <stop offset="1" stopColor={A} />
        </linearGradient>
        <linearGradient id={`${id}-c3`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={A} />
          <stop offset="1" stopColor={D} />
        </linearGradient>
      </defs>
      <circle cx="150" cy="140" r="140" fill={`url(#${id}-glow)`} />
      <g transform="translate(60 70) rotate(-10 70 80)">
        <rect width="140" height="160" rx="18" fill={`url(#${id}-c2)`} stroke="#fff" strokeOpacity="0.18" strokeWidth="1" />
        <text x="14" y="34" fontFamily="Manrope" fontSize="9" fontWeight="700" fill="#fff" fillOpacity="0.8" letterSpacing="2">TRUTH OR THRILL</text>
      </g>
      <g transform="translate(116 96) rotate(10 70 80)">
        <rect width="140" height="160" rx="18" fill={`url(#${id}-c3)`} stroke="#fff" strokeOpacity="0.2" strokeWidth="1" />
        <text x="14" y="34" fontFamily="Manrope" fontSize="9" fontWeight="700" fill="#fff" fillOpacity="0.8" letterSpacing="2">WOULD YOU RATHER</text>
      </g>
      <g transform="translate(150 32)">
        <circle r="14" fill={H} fillOpacity="0.25" />
        <path
          d="M 0 6 C -6 1, -11 -2, -11 -7 C -11 -12, -6 -13, -3 -9 C -1 -11, 0 -11, 0 -11 C 0 -11, 1 -11, 3 -9 C 6 -13, 11 -12, 11 -7 C 11 -2, 6 1, 0 6 Z"
          fill={H}
        />
      </g>
    </svg>
  );
}

export function IllLocked({ className }: IllProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} width="280" height="240" viewBox="0 0 280 280" aria-hidden>
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor={A} stopOpacity="0.36" />
          <stop offset="1" stopColor={A} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-phone`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#221638" />
          <stop offset="1" stopColor="#0f0a1c" />
        </linearGradient>
        <linearGradient id={`${id}-lock`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={L} />
          <stop offset="1" stopColor={D} />
        </linearGradient>
      </defs>
      <circle cx="140" cy="140" r="140" fill={`url(#${id}-glow)`} />
      <g transform="translate(80 36)">
        <rect x="0" y="0" width="120" height="220" rx="22" fill={`url(#${id}-phone)`} stroke={A} strokeOpacity="0.4" strokeWidth="1.5" />
        <text x="60" y="36" textAnchor="middle" fontFamily="Manrope" fontSize="11" fontWeight="800" fill={L} opacity="0.5">nookly</text>
        <g transform="translate(60 92)">
          <circle r="26" fill={A} fillOpacity="0.22" />
          <g transform="translate(-13 -13)">
            <rect x="0" y="10" width="26" height="20" rx="4" fill={`url(#${id}-lock)`} />
            <path d="M 4 10 V 6 A 9 9 0 0 1 22 6 V 10" fill="none" stroke={L} strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>
        <g transform="translate(60 168)">
          <circle cx="-24" cy="0" r="5" fill={A} />
          <circle cx="-8" cy="0" r="5" fill={A} />
          <circle cx="8" cy="0" r="5" fill={A} />
          <circle cx="24" cy="0" r="5" fill="#fff" fillOpacity="0.15" stroke={A} strokeOpacity="0.4" strokeWidth="1" />
        </g>
      </g>
    </svg>
  );
}
