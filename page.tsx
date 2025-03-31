'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function Documentacion() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-24">
      <div className="w-full max-w-5xl">
        <Button 
          variant="outline" 
          className="mb-6" 
          onClick={() => router.push('/')}
        >
          ← Volver al inicio
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Documentación Completa</h1>
          <p className="text-xl text-muted-foreground">
            Recursos detallados sobre OPUS INCÓGNITA
          </p>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Documentación por Componentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Arquitectura General</h3>
              <p className="text-muted-foreground mb-4">
                Visión general de la estructura en cinco capas de OPUS INCÓGNITA y sus principios fundamentales.
              </p>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => router.push('/arquitectura')}
              >
                Ver Arquitectura
              </Button>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">IA Residente (NOUS)</h3>
              <p className="text-muted-foreground mb-4">
                Detalles sobre los modelos de IA ligeros que gobiernan el sistema operativo y sus componentes.
              </p>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => router.push('/ia-residente')}
              >
                Ver IA Residente
              </Button>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">KERNOS BÁSICO</h3>
              <p className="text-muted-foreground mb-4">
                Información sobre el sistema de apuestas enfrentadas sobre la verdad basado en blockchain.
              </p>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => router.push('/kernos')}
              >
                Ver KERNOS BÁSICO
              </Button>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Seguridad Sin Vigilancia</h3>
              <p className="text-muted-foreground mb-4">
                Estrategias avanzadas de seguridad que protegen al usuario sin comprometer su privacidad.
              </p>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => router.push('/seguridad')}
              >
                Ver Seguridad
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Requisitos de Hardware</h2>
          
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Configuración Básica</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">CPU:</span> 4+ núcleos, arquitectura x86-64 o ARM64 moderno</li>
                <li><span className="font-medium">RAM:</span> 8-16 GB</li>
                <li><span className="font-medium">Almacenamiento:</span> 64 GB mínimo (SSD recomendado)</li>
                <li><span className="font-medium">GPU:</span> Opcional, pero recomendado para mejor rendimiento de IA (2GB+ VRAM)</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Configuración Recomendada</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">CPU:</span> 6-8 núcleos, arquitectura x86-64 o ARM64 moderno</li>
                <li><span className="font-medium">RAM:</span> 16-32 GB</li>
                <li><span className="font-medium">Almacenamiento:</span> 256 GB SSD</li>
                <li><span className="font-medium">GPU:</span> 4GB+ VRAM para aceleración de IA</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Configuración Avanzada</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">CPU:</span> 8+ núcleos, arquitectura x86-64 moderno</li>
                <li><span className="font-medium">RAM:</span> 32+ GB</li>
                <li><span className="font-medium">Almacenamiento:</span> 512 GB+ SSD</li>
                <li><span className="font-medium">GPU:</span> 8GB+ VRAM para modelos de IA más avanzados</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hoja de Ruta de Implementación</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Fase 1: Fundamentos (6-12 meses)</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Desarrollo del núcleo del sistema con aislamiento y seguridad básica</li>
                <li>Implementación de modelos de IA ligeros para funciones esenciales</li>
                <li>Prototipo del módulo KERNOS con funcionalidad básica de verificación</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Fase 2: Integración (12-18 meses)</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Expansión de capacidades de la IA residente</li>
                <li>Implementación completa del módulo KERNOS con Avalanche Subnet</li>
                <li>Desarrollo de interfaces de usuario adaptativas</li>
                <li>Implementación de estrategias de seguridad sin vigilancia</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Fase 3: Maduración (18-24 meses)</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Optimización de rendimiento y eficiencia energética</li>
                <li>Expansión del ecosistema de aplicaciones compatibles</li>
                <li>Mejora continua basada en retroalimentación de usuarios</li>
                <li>Desarrollo de características avanzadas de privacidad y verificación</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Consideraciones Éticas y Legales</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Privacidad y Cumplimiento</h3>
              <p className="text-muted-foreground ml-4">
                Diseño compatible con GDPR, CCPA y otras regulaciones de privacidad, con transparencia en el procesamiento de datos y controles granulares para usuarios en diferentes jurisdicciones.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Accesibilidad e Inclusión</h3>
              <p className="text-muted-foreground ml-4">
                Interfaces adaptables para diferentes capacidades, soporte multilingüe y diseño centrado en el usuario final para garantizar que el sistema sea accesible para todos.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Sostenibilidad</h3>
              <p className="text-muted-foreground ml-4">
                Optimización para eficiencia energética, soporte a largo plazo para hardware existente y actualización incremental para reducir obsolescencia, minimizando el impacto ambiental.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusión</h2>
          <p className="text-muted-foreground">
            OPUS INCÓGNITA representa un enfoque revolucionario para los sistemas operativos, combinando soberanía digital, privacidad avanzada y libertad tecnológica con capacidades de IA generativa y verificación de verdad basada en blockchain. Su arquitectura en capas, con un núcleo seguro, IA residente, módulo de verificación blockchain, servicios del sistema y una interfaz adaptativa, proporciona un entorno completo que devuelve el control a los usuarios mientras ofrece herramientas avanzadas para la era digital.
          </p>
          <p className="text-muted-foreground mt-4">
            La implementación de modelos de IA ligeros pero potentes, junto con tecnologías blockchain eficientes y estrategias de seguridad sin vigilancia, hace que el sistema sea accesible para empresas medianas, pequeñas y particulares, sin comprometer sus principios fundamentales.
          </p>
          <p className="text-muted-foreground mt-4">
            Este diseño arquitectónico establece las bases para un sistema operativo que no solo protege la privacidad y soberanía de sus usuarios, sino que también proporciona mecanismos innovadores para la verificación de la verdad en un mundo digital cada vez más complejo.
          </p>
        </Card>

        <div className="flex justify-center">
          <Button 
            size="lg"
            onClick={() => router.push('/')}
          >
            Volver a la Página Principal
          </Button>
        </div>
      </div>
    </main>
  )
}
