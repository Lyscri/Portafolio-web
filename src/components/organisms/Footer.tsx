import { Heart } from 'lucide-react'
import { getCurrentYear } from '@/utils'
import { NAV_LINKS } from '@/constants/navigation'
import { scrollToSection } from '@/utils'

export function Footer() {
  const year = getCurrentYear()

  return (
    <footer className="bg-[#050505] border-t border-[#E8000D]/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-mono font-bold text-lg">
              <span className="text-[#E8000D]">{'<'}</span>
              <span className="text-white">Felix Felipe</span>
              <span className="text-[#E8000D]">{'/>'}</span>
            </span>
            <p className="text-[#A3A3A3] text-sm">
              Desarrollador Fullstack — TypeScript first.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <span className="text-white font-medium text-sm">Navegación</span>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#A3A3A3] hover:text-[#E8000D] text-sm font-mono text-left transition-colors duration-300 cursor-none w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-white font-medium text-sm">Contacto</span>
            <a
              href="mailto:felixrafaelff1109@gmail.com"
              className="text-[#A3A3A3] hover:text-[#E8000D] text-sm font-mono transition-colors duration-300"
            >
              felixrafaelff1109@gmail.com
            </a>
            <a
              href="https://github.com/Lyscri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A3A3] hover:text-[#E8000D] text-sm font-mono transition-colors duration-300"
            >
              github.com/Lyscri
            </a>
          </div>
        </div>

        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A3A3A3] text-sm font-mono">
            © {year} Felix Felipe. Todos los derechos reservados.
          </p>
          <p className="text-[#A3A3A3] text-sm flex items-center gap-1.5">
            Hecho con <Heart className="w-4 h-4 text-[#E8000D] fill-[#E8000D]" /> y TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
