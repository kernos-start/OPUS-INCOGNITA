'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <title>OPUS INCÓGNITA - Sistema Operativo de Soberanía Digital</title>
        <meta name="description" content="Sistema operativo centrado en soberanía digital, privacidad avanzada y libertad tecnológica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
            <div className="relative z-10">
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
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
