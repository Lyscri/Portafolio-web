import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

interface ScrollRevealOptions {
  delay?: number
  duration?: number
  easing?: string
  distance?: string
  origin?: 'top' | 'bottom' | 'left' | 'right'
  opacity?: number
  scale?: number
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const elementRef = useRef<HTMLElement | null>(null)
  const hasAnimated = useRef(false)

  const {
    delay = 0,
    duration = 1400, // Duración un poco más larga para mayor suavidad
    easing = 'outCubic', // Easing más suave que 'outExpo'
    distance = '20px', // Distancia más sutil
    origin = 'bottom',
    opacity = 0,
    scale = 1,
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Set initial state
    element.style.opacity = opacity.toString()
    
    let translateX = '0px'
    let translateY = '0px'

    if (origin === 'top') translateY = `-${distance}`
    if (origin === 'bottom') translateY = distance
    if (origin === 'left') translateX = `-${distance}`
    if (origin === 'right') translateX = distance

    element.style.transform = `translate(${translateX}, ${translateY}) scale(${scale})`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            
            animate(element, {
              opacity: [opacity, 1],
              translateX: [translateX, 0],
              translateY: [translateY, 0],
              scale: [scale, 1],
              delay,
              duration,
              ease: easing,
            })

            observer.unobserve(element)
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Comienza un poco antes de que sea totalmente visible
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [delay, duration, easing, distance, origin, opacity, scale])

  return elementRef
}



