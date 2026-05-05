import { useState, useEffect, useRef } from 'react'

const ANIMATION_DURATION_MS = 2000
const FRAME_RATE = 60

export function useCounter(target: number, isActive: boolean) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number>(null)

  useEffect(() => {
    if (!isActive) return

    const totalFrames = (ANIMATION_DURATION_MS / 1000) * FRAME_RATE
    const increment = target / totalFrames
    let current = 0

    const animate = () => {
      current += increment
      if (current >= target) {
        setCount(target)
        return
      }
      setCount(Math.floor(current))
      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [target, isActive])

  return count
}
