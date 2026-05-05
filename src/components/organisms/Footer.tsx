import { Mail } from 'lucide-react'
import { SocialIcon } from '@/components/atoms/SocialIcon'
import { getCurrentYear } from '@/utils'

const FOOTER_SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Lyscri', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/felix-felipe00', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:felixrafaelff1109@gmail.com', icon: 'mail' },
]

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#E8000D] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <span className="font-mono font-bold text-white text-base">Felix Felipe</span>
          <span className="text-[#A3A3A3] text-sm">Full Stack Developer</span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {FOOTER_SOCIALS.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-[#A3A3A3] hover:text-[#E8000D] transition-colors duration-300"
            >
              {link.icon === 'mail'
                ? <Mail className="w-5 h-5" />
                : <SocialIcon name={link.icon} className="w-5 h-5" />
              }
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[#A3A3A3] text-sm font-mono text-center md:text-right">
          Hecho con TypeScript y ☕ · © {getCurrentYear()} Felix Felipe
        </p>
      </div>
    </footer>
  )
}
