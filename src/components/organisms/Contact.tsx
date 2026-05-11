import { Mail } from 'lucide-react'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { SocialIcon } from '@/components/atoms/SocialIcon'
import { Button } from '@/components/atoms/Button'
import { SOCIAL_LINKS } from '@/constants/navigation'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Contact() {
  const headerRef = useScrollReveal({ origin: 'bottom', delay: 100 })
  const contentRef = useScrollReveal({ origin: 'bottom', delay: 300 })

  return (
    <section id="contact" style={{ paddingTop: '100px', paddingBottom: '128px' }} className="bg-[#0A0A0A] flex flex-col items-center justify-center">
       <div className="w-full max-w-4xl mx-auto px-6 text-center">
         <div ref={headerRef as React.RefObject<HTMLDivElement>}>
            <div className="flex flex-col items-center text-center w-full">
              <SectionTitle label="" title="Trabajemos juntos" />
              <p className="text-[#A3A3A3] text-center max-w-2xl mt-8 mb-16 text-lg leading-relaxed">
                Disponible para proyectos freelance, posiciones full-time o simplemente
                para hablar sobre tecnología. ¡Conectemos!
              </p>
            </div>
         </div>

         <div
           ref={contentRef as React.RefObject<HTMLDivElement>}
           className="flex flex-col items-center gap-10"
         >
           <a href="mailto:felixrafaelff1109@gmail.com">
             <Button size="lg">
               <Mail className="w-5 h-5" />
               Enviar email
             </Button>
           </a>

           <div className="flex items-center gap-4 flex-wrap justify-center">
             {SOCIAL_LINKS.map((link) => (
               <a
                 key={link.label}
                 href={link.href}
                 target={link.href.startsWith('mailto') ? undefined : '_blank'}
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-[#0A0A0A] border border-[#1F1F1F] hover:border-[#E8000D] text-[#A3A3A3] hover:text-[#E8000D] px-5 py-3 rounded-xl transition-all duration-300 font-mono text-sm group"
               >
                 <SocialIcon name={link.icon} />
                 {link.label}
               </a>
             ))}
           </div>
         </div>
       </div>
    </section>
  )
}

