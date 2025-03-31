'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary transition-colors'
  }

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold text-gradient">
            OPUS INCÓGNITA
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={isActive('/')}>
            Inicio
          </Link>
          <Link href="/manifiesto" className={isActive('/manifiesto')}>
            Manifiesto
          </Link>
          <Link href="/vision" className={isActive('/vision')}>
            Visión
          </Link>
          <Link href="/arquitectura" className={isActive('/arquitectura')}>
            Arquitectura
          </Link>
          <Link href="/ia-residente" className={isActive('/ia-residente')}>
            IA Residente
          </Link>
          <Link href="/kernos" className={isActive('/kernos')}>
            KERNOS
          </Link>
          <Link href="/seguridad" className={isActive('/seguridad')}>
            Seguridad
          </Link>
          <Link href="/documentacion" className={isActive('/documentacion')}>
            Documentación
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Menú móvil simplificado */}
          <select 
            onChange={(e) => window.location.href = e.target.value}
            value={pathname}
            className="bg-background border rounded-md p-2"
          >
            <option value="/">Inicio</option>
            <option value="/manifiesto">Manifiesto</option>
            <option value="/vision">Visión</option>
            <option value="/arquitectura">Arquitectura</option>
            <option value="/ia-residente">IA Residente</option>
            <option value="/kernos">KERNOS</option>
            <option value="/seguridad">Seguridad</option>
            <option value="/documentacion">Documentación</option>
          </select>
        </div>
      </div>
    </header>
  )
}
