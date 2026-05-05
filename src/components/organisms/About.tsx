import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { TodoPlaceholder } from '@/components/atoms/TodoPlaceholder'
import { MetricCard } from '@/components/molecules/MetricCard'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { METRICS } from '@/constants/navigation'

const FADE_IN_UP = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...FADE_IN_UP}>
  <div className="flex flex-col items-center text-center w-full mb-12">
    <SectionTitle label="// sobre mí" title="Quién soy" />
    <p className="text-[#A3A3A3] text-center max-w-2xl mt-4">
      Desarrollador Fullstack con enfoque en TypeScript — construyendo desde
      APIs hasta interfaces de usuario.
    </p>
  </div>
</motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            {...FADE_IN_UP}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-[#1F1F1F] bg-[#111111] flex flex-col items-center justify-center gap-4">
                {/* REEMPLAZA: src/assets/images/profile.jpg */}
                <div className="w-20 h-20 rounded-full bg-[#E8000D]/10 border border-[#E8000D]/30 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#E8000D] font-mono">FF</span>
                </div>
                <TodoPlaceholder message="Foto: src/assets/images/profile.jpg" />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#E8000D]/30 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            {...FADE_IN_UP}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4 text-[#A3A3A3] leading-relaxed">
              <p className="text-white text-lg font-medium">
                Desarrollador Fullstack apasionado por construir experiencias digitales de alto impacto.
              </p>
              {/* REEMPLAZA con tu autobiografía extendida */}
              <p>
                TU_AUTOBIOGRAFÍA_EXTENDIDA_AQUÍ — Cuéntanos sobre tu trayectoria,
                lo que te apasiona del desarrollo, tus valores como profesional y
                qué tipo de proyectos buscas.
              </p>
              <p>
                Especializado en el ecosistema TypeScript, desde APIs con HonoJS y NestJS
                hasta interfaces con React y NextJS, pasando por bases de datos relacionales.
              </p>
            </div>

            {/* Metrics */}
            <div
              ref={ref as React.RefObject<HTMLDivElement>}
              className="grid grid-cols-3 gap-4 mt-4"
            >
              {METRICS.map((metric, i) => (
                <MetricCard
                  key={metric.label}
                  metric={metric}
                  isVisible={isVisible}
                  index={i}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
