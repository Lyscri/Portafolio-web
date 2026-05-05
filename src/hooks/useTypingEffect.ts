import { useState, useEffect, useRef } from 'react'

interface UseTypingEffectOptions {
  speed?: number
  deleteSpeed?: number
  pauseAfter?: number
}

export function useTypingEffect(
  texts: string[],
  options: UseTypingEffectOptions = {}
) {
  const { speed = 25, pauseAfter = 400 } = options
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    if (currentLineIndex >= texts.length) {
      setIsComplete(true)
      return
    }

    const currentText = texts[currentLineIndex]

    if (currentCharIndex < currentText.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines(prev => {
          const updated = [...prev]
          updated[currentLineIndex] = currentText.slice(0, currentCharIndex + 1)
          return updated
        })
        setCurrentCharIndex(prev => prev + 1)
      }, speed)
    } else {
      timeoutRef.current = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }, pauseAfter)
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentLineIndex, currentCharIndex, texts, speed, pauseAfter])

  return { displayedLines, isComplete, currentLineIndex }
}
