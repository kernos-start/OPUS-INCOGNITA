'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function Vision() {
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">Visión de OPUS INCÓGNITA</h1>
          <p className="text-xl text-muted-foreground">
            Un nuevo paradigma en sistemas operativos centrados en el usuario
          </p>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Visión</h2>
          <p className="text-muted-foreground mb-4">
            Crear un sistema operativo que devuelva el control tecnológico a los usuarios, proteja su privacidad de forma inquebrantable, y proporcione herramientas avanzadas para la verificación de la verdad sin depender de autoridades centralizadas.
          </p>
          <p className="text-muted-foreground">
            OPUS INCÓGNITA nace como respuesta a un mundo digital donde la soberanía del usuario se ha visto comprometida por sistemas centralizados, vigilancia masiva y dependencia de terceros para la validación de información. Buscamos revertir esta tendencia, creando un entorno computacional donde el usuario recupere el control total sobre sus datos, su privacidad y sus interacciones digitales.
          </p>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Principios Fundamentales</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Soberanía Digital</h3>
              <p className="text-muted-foreground">
                Control total del usuario sobre sus datos y procesos computacionales. En OPUS INCÓGNITA, el usuario es el único dueño de su información y tiene la capacidad de decidir cómo, cuándo y con quién compartirla. No existen backdoors, recopilación encubierta de datos ni dependencias de servicios en la nube que comprometan esta soberanía.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Privacidad Avanzada</h3>
              <p className="text-muted-foreground">
                Protección de datos y comunicaciones sin vigilancia externa. Implementamos tecnologías criptográficas avanzadas como cifrado homomórfico, zero-knowledge proofs y privacidad diferencial para garantizar que el usuario pueda operar en un entorno digital que respeta su privacidad por diseño, no como característica añadida.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Libertad Tecnológica</h3>
              <p className="text-muted-foreground">
                Independencia de proveedores centralizados y ecosistemas cerrados. OPUS INCÓGNITA se basa en software libre y estándares abiertos, permitiendo a los usuarios escapar de los jardines amurallados que limitan sus opciones y controlan su experiencia digital. La interoperabilidad y la capacidad de modificación son pilares fundamentales.
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Gobernanza por IA</h3>
              <p className="text-muted-foreground">
                Sistema operativo gestionado por una IA generativa residente. La inteligencia artificial integrada en OPUS INCÓGNITA no es solo una asistente, sino una parte integral del sistema que optimiza recursos, protege contra amenazas y adapta la experiencia a las necesidades del usuario, todo ello operando completamente en local sin dependencias externas.
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Verificación Descentralizada</h3>
              <p className="text-muted-foreground">
                Mecanismos de verificación de verdad sin autoridades centrales. El módulo KERNOS BÁSICO implementa un sistema de apuestas enfrentadas sobre la verdad basado en blockchain, permitiendo verificar afirmaciones y contratos sin depender de jueces externos, creando así una forma de justicia algorítmica descentralizada.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Un Nuevo Paradigma</h2>
          <p className="text-muted-foreground mb-4">
            OPUS INCÓGNITA representa un cambio de paradigma en la forma en que concebimos los sistemas operativos. En lugar de ser meros intermediarios entre el hardware y las aplicaciones, lo visualizamos como un ecosistema completo que:
          </p>
          
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground mb-4">
            <li>Protege activamente al usuario sin comprometer su privacidad</li>
            <li>Utiliza inteligencia artificial para optimizar y personalizar la experiencia</li>
            <li>Proporciona mecanismos descentralizados para la verificación de información</li>
            <li>Devuelve el control total al usuario sobre sus datos y procesos</li>
            <li>Elimina dependencias de servicios centralizados en la nube</li>
          </ul>
          
          <p className="text-muted-foreground">
            Este enfoque holístico busca corregir el desequilibrio de poder que se ha creado en el ecosistema digital, donde grandes corporaciones y entidades gubernamentales tienen acceso y control desproporcionados sobre la información y las capacidades tecnológicas de los individuos.
          </p>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Para Quién Está Diseñado</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Empresas Medianas y Pequeñas</h3>
              <p className="text-muted-foreground">
                Que buscan independencia tecnológica y protección de datos sensibles sin depender de proveedores externos que puedan comprometer su información o imponer condiciones restrictivas.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Particulares Preocupados por su Privacidad</h3>
              <p className="text-muted-foreground">
                Individuos que valoran su privacidad digital y buscan alternativas a los sistemas operativos convencionales que recopilan datos de forma masiva y limitan el control del usuario.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Comunidades que Requieren Verificación</h3>
              <p className="text-muted-foreground">
                Grupos que necesitan mecanismos confiables para verificar información y resolver disputas sin depender de autoridades centralizadas, utilizando el módulo KERNOS BÁSICO.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Defensores de la Soberanía Digital</h3>
              <p className="text-muted-foreground">
                Activistas, periodistas, investigadores y cualquier persona que necesite garantías de que sus datos y comunicaciones están protegidos contra vigilancia y manipulación.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex justify-center space-x-4">
          <Button 
            onClick={() => router.push('/arquitectura')}
          >
            Explorar Arquitectura
          </Button>
          <Button 
            onClick={() => router.push('/documentacion')}
          >
            Ver Documentación Completa
          </Button>
        </div>
      </div>
    </main>
  )
}
