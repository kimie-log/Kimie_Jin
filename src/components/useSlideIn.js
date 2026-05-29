import { useState, useEffect, useRef } from 'react'

export function useSlideIn(isFirst = false) {
  const [visible, setVisible] = useState(isFirst)
  const ref = useRef(null)

  useEffect(() => {
    if (isFirst) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isFirst])

  return { ref, visible }
}
