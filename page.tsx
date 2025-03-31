'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-24">
      <div className="w-full max-w-5xl">
        {/* Prólogo filosófico / Manifiesto */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-6 text-gradient">OPUS INCÓGNITA</h1>
          <div className="text-xl md:text-2xl text-muted-foreground space-y-4 italic border-l-4 border-primary/50 pl-6 py-2">
            <p>"Una revolución digital no se descarga. Se construye.</p>
            <p>OPUS INCÓGNITA no es solo un sistema operativo.</p>
            <p>Es un santuario de soberanía. Una armadura para la libertad. Un altar para la verdad."</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6 flex flex-col h-full card-hover">
            <h2 className="text-2xl font-semibold mb-4">Visión</h2>
            <p className="text-muted-foreground flex-grow">
              Crear un sistema operativo que devuelva el control tecnológico a los usuarios, proteja su privacidad de forma inquebrantable, y proporcione herramientas avanzadas para la verificación de la verdad sin depender de autoridades centralizadas.
            </p>
            <Button 
              className="mt-4" 
              onClick={() => router.push('/vision')}
            >
              Explorar Visión
            </Button>
          </Card>

          <Card className="p-6 flex flex-col h-full card-hover">
            <h2 className="text-2xl font-semibold mb-4">Arquitectura</h2>
            <p className="text-muted-foreground flex-grow">
              Una estructura en cinco capas que integra IA generativa residente, verificación blockchain y seguridad sin vigilancia para crear un ecosistema coherente que respeta la soberanía digital.
            </p>
            <Button 
              className="mt-4" 
              onClick={() => router.push('/arquitectura')}
            >
              Ver Arquitectura
            </Button>
          </Card>
        </div>

        {/* Sección sobre el problema que combate */}
        <Card className="p-6 mb-16 border-gradient">
          <h2 className="text-2xl font-semibold mb-6">Los Problemas que Combatimos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 bg-secondary/10">
              <h3 className="text-xl font-semibold mb-3 text-destructive">Vigilancia Masiva</h3>
              <p className="text-sm text-muted-foreground">
                Sistemas operativos y aplicaciones que recopilan constantemente datos de los usuarios, creando perfiles detallados que comprometen la privacidad y autonomía personal.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 bg-secondary/10">
              <h3 className="text-xl font-semibold mb-3 text-destructive">Sistemas Cerrados</h3>
              <p className="text-sm text-muted-foreground">
                Ecosistemas tecnológicos que limitan la libertad del usuario, imponen restricciones arbitrarias y crean dependencias forzadas de servicios centralizados.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 bg-secondary/10">
              <h3 className="text-xl font-semibold mb-3 text-destructive">Ausencia de Control Real</h3>
              <p className="text-sm text-muted-foreground">
                Ilusión de control donde los usuarios creen tomar decisiones, mientras que en realidad están limitados por diseños que priorizan intereses corporativos sobre la soberanía individual.
              </p>
            </div>
          </div>
        </Card>

        {/* Sección sobre el núcleo del sistema */}
        <Card className="p-6 mb-16">
          <h2 className="text-2xl font-semibold mb-6">El Núcleo del Sistema</h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center animate-pulse-slow">
                <div className="text-4xl font-bold text-gradient">IA</div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">IA Residente (NOUS)</h3>
                <p className="text-muted-foreground">
                  El corazón inteligente de OPUS INCÓGNITA. No es un simple asistente, sino un componente integral que gobierna el sistema operativo. Funciona completamente en local, sin dependencias de la nube, utilizando modelos ligeros pero potentes que pueden ejecutarse en hardware accesible.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4" 
                  onClick={() => router.push('/ia-residente')}
                >
                  Descubrir NOUS
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-green-500/20 to-yellow-600/20 rounded-full flex items-center justify-center animate-pulse-slow order-first md:order-last">
                <div className="text-4xl font-bold text-gradient">K</div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">KERNOS BÁSICO</h3>
                <p className="text-muted-foreground">
                  Sistema de apuestas enfrentadas sobre la verdad basado en blockchain. Permite verificar afirmaciones y contratos mediante un mecanismo de justicia algorítmica sin jueces externos, donde la verdad emerge del consenso descentralizado.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4" 
                  onClick={() => router.push('/kernos')}
                >
                  Explorar KERNOS
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-purple-500/20 to-red-600/20 rounded-full flex items-center justify-center animate-pulse-slow">
                <div className="text-4xl font-bold text-gradient">OS</div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">Diseño Dual: Sistema Operativo + Blockchain</h3>
                <p className="text-muted-foreground">
                  OPUS INCÓGNITA fusiona un sistema operativo de alta seguridad con tecnología blockchain, creando un entorno donde la computación tradicional y la verificación descentralizada coexisten y se potencian mutuamente.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4" 
                  onClick={() => router.push('/arquitectura')}
                >
                  Ver Arquitectura
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 flex flex-col h-full card-hover">
            <h3 className="text-xl font-semibold mb-3">IA Residente</h3>
            <p className="text-sm text-muted-foreground flex-grow">
              Modelos de IA ligeros pero potentes que gobiernan el sistema operativo sin comprometer la privacidad ni requerir hardware costoso.
            </p>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => router.push('/ia-residente')}
            >
              Detalles
            </Button>
          </Card>

          <Card className="p-6 flex flex-col h-full card-hover">
            <h3 className="text-xl font-semibold mb-3">KERNOS BÁSICO</h3>
            <p className="text-sm text-muted-foreground flex-grow">
              Sistema de apuestas enfrentadas sobre la verdad basado en blockchain, que permite verificar afirmaciones sin autoridades centrales.
            </p>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => router.push('/kernos')}
            >
              Detalles
            </Button>
          </Card>

          <Card className="p-6 flex flex-col h-full card-hover">
            <h3 className="text-xl font-semibold mb-3">Seguridad Sin Vigilancia</h3>
            <p className="text-sm text-muted-foreground flex-grow">
              Protección avanzada mediante cifrado homomórfico, zero-knowledge proofs y otras tecnologías que no comprometen la privacidad.
            </p>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => router.push('/seguridad')}
            >
              Detalles
            </Button>
          </Card>
        </div>

        <Card className="p-6 mb-16">
          <h2 className="text-2xl font-semibold mb-4">Principios Fundamentales</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Soberanía Digital:</span> Control total del usuario sobre sus datos y procesos computacionales.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Privacidad Avanzada:</span> Protección de datos y comunicaciones sin vigilancia externa.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Libertad Tecnológica:</span> Independencia de proveedores centralizados y ecosistemas cerrados.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Gobernanza por IA:</span> Sistema operativo gestionado por una IA generativa residente.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Verificación Descentralizada:</span> Mecanismos de verificación de verdad sin autoridades centrales.</span>
            </li>
          </ul>
        </Card>

        {/* Frase final */}
        <div className="text-center mb-16">
          <div className="text-xl md:text-2xl text-muted-foreground space-y-4 italic border-r-4 border-primary/50 pr-6 py-2">
            <p>"Aquí no vendemos tu atención.</p>
            <p>Aquí, la verdad no se negocia. Se demuestra."</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => router.push('/documentacion')}
          >
            Explorar Documentación Completa
          </Button>
        </div>
      </div>
    </main>
  )
}
