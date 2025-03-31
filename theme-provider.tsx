'use client'
import { Navbar } from '@/components/navbar'

export function ThemeProvider({
  children,
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
}: {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}) {
  return (
    <div>
      {children}
    </div>
  )
}
