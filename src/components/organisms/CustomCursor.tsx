import { motion } from 'framer-motion'
import { useCustomCursor } from '@/hooks/useCustomCursor'

export function CustomCursor() {
  const { position, isHovering } = useCustomCursor()

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-[#E8000D] mix-blend-difference"
        animate={{
          x: position.x - (isHovering ? 16 : 5),
          y: position.y - (isHovering ? 16 : 5),
          width: isHovering ? 32 : 10,
          height: isHovering ? 32 : 10,
          opacity: isHovering ? 0.6 : 1,
        }}
        transition={{ type: 'tween', duration: 0 }}
      />
      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border border-[#E8000D]/40"
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          width: 36,
          height: 36,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 28 }}
      />
    </>
  )
}
