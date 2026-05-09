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
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-32 pb-16">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          
          {/* Brand Column - Left */}
          <div className="flex flex-col items-start">
            <button
              onClick={() => scrollToSection('#hero')}
              className="font-sans font-bold text-2xl tracking-tight mb-8 hover:opacity-80 transition-opacity"
            >
              <span className="text-white">Felix</span>
              <span className="text-[#E8000D]">.Felipe</span>
            </button>
            <p className="text-[#888888] max-w-sm text-lg leading-relaxed font-sans mb-10">
              Creando soluciones digitales de alto impacto con un enfoque en el rendimiento y la estética moderna.
            </p>
            <div className="flex items-center gap-3 text-[#666666] text-sm font-sans">
              <MapPin className="w-4 h-4 text-[#E8000D]" />
              <span>Santiago De Los Caballeros, Rep Dom</span>
            </div>
          </div>

          {/* Links Column - Center */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-white font-sans font-semibold mb-8 text-sm uppercase tracking-[0.2em]">
              Navegación
            </h3>
            <div className="flex flex-col gap-5 items-start md:items-center">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#888888] hover:text-white transition-colors text-left text-base font-sans relative group w-fit"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E8000D] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Socials Column - Right */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-white font-sans font-semibold mb-8 text-sm uppercase tracking-[0.2em]">
              Conecta
            </h3>
            <div className="flex flex-col gap-5 items-start md:items-end text-left md:text-right">
              <a
                href="mailto:felixrafaelff1109@gmail.com"
                className="text-[#888888] hover:text-white transition-colors text-base font-sans flex items-center gap-3 relative group w-fit"
              >
                <Mail className="w-4 h-4" />
                Email
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E8000D] transition-all duration-300 group-hover:w-full" />
              </a>
              {FOOTER_SOCIALS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-white transition-colors text-base font-sans flex items-center gap-3 relative group w-fit"
                >
                  <SocialIcon name={link.icon} className="w-4 h-4" />
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E8000D] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar Full Width */}
      <div className="border-t border-white/5 py-12">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[#555555]">
          <p className="text-sm font-sans tracking-wide">
            © {getCurrentYear()} <span className="text-white font-medium">Felix Felipe</span>. Todos los derechos reservados.
          </p>
          <p className="text-sm font-sans flex items-center gap-2 tracking-wide">
            Construido con <span className="text-white font-medium">TypeScript</span> <span className="text-[#E8000D]">/</span> ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
