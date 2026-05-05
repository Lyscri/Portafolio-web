import type { ReactNode } from 'react'
import { Navbar } from '@/components/organisms/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { CustomCursor } from '@/components/organisms/CustomCursor'
import { ScrollProgress } from '@/components/organisms/ScrollProgress'

interface PortfolioLayoutProps {
  children: ReactNode
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
