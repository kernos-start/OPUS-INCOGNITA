'use client'

import { Navbar } from '@/components/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {children}
      </div>
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} OPUS INCÓGNITA - Sistema Operativo de Soberanía Digital</p>
          <p className="mt-2">Soberanía Digital · Privacidad Avanzada · Libertad Tecnológica</p>
        </div>
      </footer>
    </>
  )
}
