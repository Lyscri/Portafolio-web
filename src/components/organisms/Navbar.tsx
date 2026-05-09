import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NavLink } from '@/components/molecules/NavLink'
import { Button } from '@/components/atoms/Button'
import { NAV_LINKS } from '@/constants/navigation'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { scrollToSection, cn } from '@/utils'

export function Navbar() {
  const { scrolled } = useScrollProgress()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    NAV_LINKS.forEach(link => {
      const el = document.getElementById(link.href.replace('#', ''))
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-[#1F1F1F]'
          : 'bg-transparent'
      )}
    >
      <nav className="w-full px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('#hero')}
          className="font-mono font-bold text-base tracking-tight cursor-none"
        >
          <span className="text-[#E8000D]">Felix Felipe</span>
          <span className="text-white/70"> - Portafolio/</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.href}
              label={link.label}
              href={link.href}
              isActive={activeSection === link.href.replace('#', '')}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() => handleNavClick('#contact')}
          >
            Contactar
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white cursor-none"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111111] border-b border-[#1F1F1F] overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-[#A3A3A3] hover:text-white font-mono text-sm py-3 px-4 rounded-lg hover:bg-[#1F1F1F] transition-colors cursor-none"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
