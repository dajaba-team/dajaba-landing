import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

// 사용자가 OS에서 '동작 줄이기'를 켜 두었으면 true
export function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(QUERY).matches,
  )

  useEffect(() => {
    const media = window.matchMedia(QUERY)
    const onChange = () => setReduced(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return reduced
}
