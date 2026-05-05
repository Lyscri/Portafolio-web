import { Suspense, lazy } from 'react'
import { PortfolioLayout } from '@/components/templates/PortfolioLayout'
import { Hero } from '@/components/organisms/Hero'

const About = lazy(() =>
  import('@/components/organisms/About').then(m => ({ default: m.About }))
)
const SkillsCarousel = lazy(() =>
  import('@/components/organisms/SkillsCarousel').then(m => ({ default: m.SkillsCarousel }))
)
const Projects = lazy(() =>
  import('@/components/organisms/Projects').then(m => ({ default: m.Projects }))
)
const Contact = lazy(() =>
  import('@/components/organisms/Contact').then(m => ({ default: m.Contact }))
)

function SectionLoader() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#E8000D] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export function Portfolio() {
  return (
    <PortfolioLayout>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SkillsCarousel />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </PortfolioLayout>
  )
}
