import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { SocialIcon } from '@/components/atoms/SocialIcon'
import { getCurrentYear, scrollToSection } from '@/utils'
import { NAV_LINKS } from '@/constants/navigation'

const FOOTER_SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Lyscri', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/felix-felipe00', icon: 'linkedin' },
  { label: 'X / Twitter', href: 'https://twitter.com/Lyscri', icon: 'twitter' },
]

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1F1F1F] pt-24 pb-12">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start">
            <button
              onClick={() => scrollToSection('#hero')}
              className="font-mono font-bold text-xl tracking-tight cursor-none mb-6"
            >
              <span className="text-[#E8000D]">Felix Felipe</span>
              <span className="text-white/70"> - Portafolio/</span>
            </button>
            <p className="text-[#A3A3A3] max-w-md text-base leading-relaxed mb-8">
              Desarrollador Fullstack enfocado en construir experiencias digitales escalables, 
              rápidas y con un diseño impecable utilizando TypeScript.
            </p>
            <div className="flex items-center gap-2 text-[#A3A3A3] text-sm">
              <MapPin className="w-4 h-4 text-[#E8000D]" />
              <span>República Dominicana</span>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-mono font-bold mb-6 text-sm uppercase tracking-wider">
              Navegación
            </h3>
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#A3A3A3] hover:text-[#E8000D] transition-colors cursor-none text-left text-sm flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-mono font-bold mb-6 text-sm uppercase tracking-wider">
              Conecta
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:felixrafaelff1109@gmail.com"
                className="text-[#A3A3A3] hover:text-[#E8000D] transition-colors cursor-none text-sm flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              {FOOTER_SOCIALS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A3A3A3] hover:text-[#E8000D] transition-colors cursor-none text-sm flex items-center gap-2"
                >
                  <SocialIcon name={link.icon} className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A3A3A3] text-sm font-mono">
            © {getCurrentYear()} Felix Felipe. Todos los derechos reservados.
          </p>
          <p className="text-[#A3A3A3] text-sm font-mono flex items-center gap-1">
            Hecho con <span className="text-[#E8000D]">TypeScript</span> y ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
