import { motion } from 'framer-motion'
import { ArrowDown, ChevronDown, Mail, Terminal } from 'lucide-react'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { TERMINAL_SEQUENCE } from '@/constants/navigation'
import { scrollToSection } from '@/utils'

const TYPING_LINES = TERMINAL_SEQUENCE.flatMap(item => [item.prompt, item.output])

function isPrompt(line: string) {
  return line.startsWith('>')
}

export function Hero() {
  const { displayedLines } = useTypingEffect(TYPING_LINES, {
    speed: 25,
    pauseAfter: 400,
  })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #1F1F1F 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8000D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal window */}
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl overflow-hidden shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0A0A] border-b border-[#1F1F1F]">
              <div className="w-3 h-3 rounded-full bg-[#E8000D]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex items-center gap-2 ml-4">
                <Terminal className="w-4 h-4 text-[#A3A3A3]" />
                <span className="text-[#A3A3A3] text-xs font-mono">felix@portfolio ~ </span>
              </div>
            </div>

            {/* Terminal body */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base min-h-[320px]">
              {displayedLines.map((line, i) => (
                <div key={i} className="mb-1 leading-relaxed">
                  {isPrompt(TYPING_LINES[i]) ? (
                    <span className="text-[#E8000D]">{line}</span>
                  ) : (
                    <span
                      className={
                        line.startsWith('✓')
                          ? 'text-green-400'
                          : 'text-[#A3A3A3]'
                      }
                      style={{ whiteSpace: 'pre-line' }}
                    >
                      {line}
                    </span>
                  )}
                </div>
              ))}
              {/* Cursor */}
              <span className="inline-block w-2.5 h-5 bg-[#E8000D] cursor-blink align-middle" />
            </div>
          </div>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-8" style={{ marginTop: '120px' }}>
             <button
               onClick={() => scrollToSection('#projects')}
               className="
                 inline-flex items-center justify-center gap-3
                 px-12 py-5
                 bg-[#E8000D] text-white
                 border-2 border-[#E8000D]
                 font-mono font-bold text-base tracking-widest uppercase
                 rounded-none
                 transition-all duration-200
                 hover:bg-white hover:text-[#E8000D]
                 w-full sm:w-auto
                 min-w-[220px]
               "
             >
               Ver proyectos
               <ArrowDown className="w-5 h-5" />
             </button>

             <button
               onClick={() => scrollToSection('#contact')}
               className="
                 inline-flex items-center justify-center gap-3
                 px-12 py-5
                 bg-transparent text-[#E8000D]
                 border-2 border-[#E8000D]
                 font-mono font-bold text-base tracking-widest uppercase
                 rounded-none
                 transition-all duration-200
                 hover:bg-[#E8000D] hover:text-white
                 w-full sm:w-auto
                 min-w-[220px]
               "
             >
               Contactar
               <Mail className="w-5 h-5" />
             </button>
           </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#A3A3A3] hover:text-[#E8000D] transition-colors cursor-none"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  )
}
