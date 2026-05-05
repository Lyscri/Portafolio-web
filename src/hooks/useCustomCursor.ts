import { useState, useEffect } from 'react'

interface CursorPosition {
  x: number
  y: number
}

const LERP_FACTOR = 0.15

export function useCustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let target = { x: 0, y: 0 }
    let current = { x: 0, y: 0 }
    let animFrame: number

    const handleMouseMove = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      current.x += (target.x - current.x) * LERP_FACTOR
      current.y += (target.y - current.y) * LERP_FACTOR
      setPosition({ x: current.x, y: current.y })
      animFrame = requestAnimationFrame(animate)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(
        target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') !== null ||
          target.closest('button') !== null
      )
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    animFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return { position, isHovering }
}
