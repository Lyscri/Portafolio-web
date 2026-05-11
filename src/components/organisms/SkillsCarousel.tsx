import { useRef } from 'react'
import { motion } from 'framer-motion'
import { SkillItem } from '@/components/molecules/SkillItem'
import { SKILLS } from '@/constants/skills'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const MARQUEE_DURATION = 30

interface MarqueeRowProps {
  skills: typeof SKILLS
  reverse?: boolean
}

function MarqueeRow({ skills, reverse = false }: MarqueeRowProps) {
  const doubled = [...skills, ...skills, ...skills, ...skills]

  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-20 w-max"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{
          duration: MARQUEE_DURATION,
          repeat: Infinity,
          ease: 'linear',
        }}
        whileHover={{ animationPlayState: 'paused' }}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((skill, i) => (
          <SkillItem key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  )
}

export function SkillsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const revealRef = useScrollReveal({ origin: 'bottom', delay: 200 })
  const half = Math.ceil(SKILLS.length / 2)
  const rowOne = SKILLS.slice(0, half)
  const rowTwo = SKILLS.slice(half)

  return (
    <section id="skills" className="pt-8 pb-32 overflow-x-hidden flex flex-col items-center justify-center" ref={containerRef}>
      <div ref={revealRef as React.RefObject<HTMLDivElement>} className="flex flex-col gap-8 w-full">
        {/* Row 1 — left to right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <MarqueeRow skills={rowOne} />
        </div>

        {/* Row 2 — right to left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <MarqueeRow skills={rowTwo} reverse />
        </div>
      </div>
    </section>
  )
}

