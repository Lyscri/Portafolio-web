import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { SocialIcon } from '@/components/atoms/SocialIcon'
import { Button } from '@/components/atoms/Button'
import { SOCIAL_LINKS } from '@/constants/navigation'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#111111] flex flex-col items-center justify-center">
       <div className="w-full max-w-4xl mx-auto px-6 text-center">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           <div className="flex flex-col items-center text-center w-full">
             <SectionTitle label="" title="Trabajemos juntos" glitch />
             <p className="text-[#A3A3A3] text-center max-w-2xl mt-4 mb-16 text-lg leading-relaxed">
               Disponible para proyectos freelance, posiciones full-time o simplemente
               para hablar sobre tecnología. ¡Conectemos!
             </p>
           </div>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="flex flex-col items-center gap-8"
         >
           <a href="mailto:felixrafaelff1109@gmail.com">
             <Button size="lg">
               <Mail className="w-5 h-5" />
               Enviar email
             </Button>
           </a>

           <div className="flex items-center gap-4 flex-wrap justify-center">
             {SOCIAL_LINKS.map((link, i) => (
               <motion.a
                 key={link.label}
                 href={link.href}
                 target={link.href.startsWith('mailto') ? undefined : '_blank'}
                 rel="noopener noreferrer"
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                 whileHover={{ scale: 1.1, y: -2 }}
                 className="flex items-center gap-2 bg-[#0A0A0A] border border-[#1F1F1F] hover:border-[#E8000D] text-[#A3A3A3] hover:text-[#E8000D] px-5 py-3 rounded-xl transition-all duration-300 font-mono text-sm"
               >
                 <SocialIcon name={link.icon} />
                 {link.label}
               </motion.a>
             ))}
           </div>
         </motion.div>
       </div>
    </section>
  )
}
