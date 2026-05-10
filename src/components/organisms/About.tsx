import { SectionTitle } from '@/components/atoms/SectionTitle'
import { MetricCard } from '@/components/molecules/MetricCard'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { METRICS } from '@/constants/navigation'
import profileImage from '@/assets/images/profile.jpg'

export function About() {
  const { ref: metricsRef, isVisible } = useScrollAnimation({ threshold: 0.2 })
  
  const titleRef = useScrollReveal({ origin: 'bottom', delay: 100 })
  const imageRef = useScrollReveal({ origin: 'left', delay: 300, distance: '30px' })
  const textRef = useScrollReveal({ origin: 'right', delay: 500, distance: '30px' })

  return (
    <section id="about" className="pt-32 pb-16 bg-[#0A0A0A] flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div ref={titleRef as React.RefObject<HTMLDivElement>}>
          <div className="flex flex-col items-center text-center w-full">
            <SectionTitle label="" title="Quién soy" />
            <p className="text-[#A3A3A3] text-center max-w-2xl mt-8 mb-16">
              Desarrollador Fullstack con enfoque en TypeScript.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div ref={imageRef as React.RefObject<HTMLDivElement>} className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-[#1F1F1F] bg-[#111111] flex items-center justify-center">
                <img
                  src={profileImage}
                  alt="Felix Felipe"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#E8000D]/30 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Text */}
          <div ref={textRef as React.RefObject<HTMLDivElement>} className="flex flex-col gap-6">
            <div className="space-y-4 text-[#A3A3A3] leading-relaxed">
              <p className="text-white text-lg font-medium">
                Desarrollador Fullstack apasionado por construir experiencias digitales de alto impacto.
              </p>
              <p>
                Soy <span className="text-white font-medium">Felix Felipe</span>, desarrollador Full Stack especializado en el ecosistema <span className="text-white font-medium">TypeScript</span>. Mi enfoque no está solo en escribir código, sino en construir soluciones web que aporten un valor real y tangible.
              </p>
              <p>
                Me apasiona el desarrollo de arquitecturas <span className="text-[#E8000D] font-medium">multi-tenant</span> y sistemas <span className="text-[#E8000D] font-medium">SaaS</span>. Encuentro en estos retos el equilibrio perfecto entre la complejidad técnica y el impacto directo en el usuario final.
              </p>
              <p>
                Mi mayor motivación es transformar procesos complejos en <span className="text-white italic">herramientas digitales intuitivas</span>. Creo firmemente que la tecnología bien aplicada tiene el poder de simplificar la vida de las personas y potenciar la forma en que trabajamos.
              </p>
              <p>
                Especializado en el ecosistema TypeScript, desde APIs con HonoJS y NestJS
                hasta interfaces con React y NextJS, pasando por bases de datos relacionales.
              </p>
            </div>

            {/* Metrics */}
            <div
              ref={metricsRef as React.RefObject<HTMLDivElement>}
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
          </div>
        </div>
      </div>
    </section>
  )
}

