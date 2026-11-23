import { useEffect, useRef, useState } from 'react'

// 요소가 화면에 처음 들어온 순간 true가 되고, 그 뒤로는 계속 true예요.
export function useInView({ threshold = 0.25, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  // IntersectionObserver가 없는 오래된 브라우저에서는 처음부터 보이게 둬요.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || inView) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [inView, threshold, rootMargin])

  return [ref, inView]
}
