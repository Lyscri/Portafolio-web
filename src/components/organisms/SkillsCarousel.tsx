import { useRef } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { SkillItem } from '@/components/molecules/SkillItem'
import { SKILLS } from '@/constants/skills'

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
        className="flex gap-4 w-max"
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
  const half = Math.ceil(SKILLS.length / 2)
  const rowOne = SKILLS.slice(0, half)
  const rowTwo = SKILLS.slice(half)

  return (
    <section id="skills" className="py-24 bg-[#111111]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto"
        >
          <SectionTitle label="// tecnologías" title="Mi Stack" />
          <p className="text-[#A3A3A3] max-w-2xl mx-auto text-center -mt-8 mb-12">
            Las tecnologías con las que construyo soluciones día a día.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-6 mt-4">
        {/* Row 1 — left to right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />
          <MarqueeRow skills={rowOne} />
        </div>

        {/* Row 2 — right to left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />
          <MarqueeRow skills={rowTwo} reverse />
        </div>
      </div>
    </section>
  )
}
