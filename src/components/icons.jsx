// 장식용 아이콘이라 모두 aria-hidden 처리했어요.

export function GrabIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 11.5V9a2 2 0 0 0-4 0v1.4" />
      <path d="M14 10V8a2 2 0 0 0-4 0v2" />
      <path d="M10 9.9V9a2 2 0 0 0-4 0v5" />
      <path d="M6 14a2 2 0 0 0-4 0" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
    </svg>
  )
}

export function CheckCircleIcon({ size = 24, color = '#0046FF' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ flex: 'none' }}>
      <circle cx="12" cy="12" r="11" fill={color} />
      <path
        d="M7 12.5l3.2 3L17 9"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
