'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function Kernos() {
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">KERNOS BÁSICO</h1>
          <p className="text-xl text-muted-foreground">
            Sistema de apuestas enfrentadas sobre la verdad basado en blockchain
          </p>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Visión General</h2>
          <p className="text-muted-foreground mb-4">
            El módulo KERNOS BÁSICO implementa un sistema de apuestas enfrentadas sobre la verdad, donde dos posturas arriesgan valor en torno a una afirmación, y el resultado se registra de forma inmutable, anónima y verificable. Este sistema permite verificar la verdad de afirmaciones o contratos mediante un mecanismo de justicia algorítmica sin jueces externos.
          </p>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Arquitectura del Módulo KERNOS</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Componentes Principales</h3>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium">Blockchain Subnet:</span> Red blockchain específica para el sistema de verificación
                </li>
                <li>
                  <span className="font-medium">Contratos Inteligentes de Verificación:</span> Lógica para gestionar apuestas y resoluciones
                </li>
                <li>
                  <span className="font-medium">Token KERN:</span> Representación de valor y reputación en el sistema
                </li>
                <li>
                  <span className="font-medium">Sistema de Identidad Cifrada:</span> Mecanismo para participar manteniendo privacidad
                </li>
                <li>
                  <span className="font-medium">Oráculos Verificadores:</span> Fuentes externas de información para resolución
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Flujo de Verificación</h3>
              <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium">Creación de Afirmación:</span> Un usuario formula una afirmación verificable
                </li>
                <li>
                  <span className="font-medium">Establecimiento de Apuestas:</span> Usuarios toman posiciones a favor o en contra
                </li>
                <li>
                  <span className="font-medium">Período de Verificación:</span> Recopilación de evidencias y argumentos
                </li>
                <li>
                  <span className="font-medium">Resolución:</span> Determinación del resultado mediante consenso u oráculos
                </li>
                <li>
                  <span className="font-medium">Distribución:</span> Asignación de tokens según el resultado
                </li>
              </ol>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tecnología Blockchain Recomendada</h2>
          
          <p className="text-muted-foreground mb-6">
            Tras analizar diversas tecnologías blockchain, se recomienda <span className="font-medium">Avalanche Subnet</span> como la opción más adecuada para implementar el módulo KERNOS BÁSICO.
          </p>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Criterios de Selección</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">Baja latencia y costes reducidos:</span> Velocidad de procesamiento y minimización o eliminación de costes de gas</li>
                <li><span className="font-medium">Soporte para smart contracts avanzados:</span> Capacidad para implementar lógica compleja de verificación y apuestas</li>
                <li><span className="font-medium">Posibilidad de tokens propios:</span> Creación del token KERN para representar valor y reputación</li>
                <li><span className="font-medium">Mecanismo de identidad cifrada:</span> Identidades que puedan revelarse voluntariamente</li>
                <li><span className="font-medium">Gobernanza criptográfica:</span> Capacidad para implementar sistemas de gobernanza dentro del sistema</li>
                <li><span className="font-medium">Privacidad selectiva:</span> Opcionalidad de privacidad total o selectiva en cada interacción</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Ventajas de Avalanche Subnet</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">Velocidad excepcional:</span> Finalidad de transacciones en menos de 2 segundos</li>
                <li><span className="font-medium">Subnets personalizables:</span> Estructura de tarifas flexible con posibilidad de eliminar costes de gas</li>
                <li><span className="font-medium">Privacidad configurable:</span> Opciones de privacidad a nivel de protocolo</li>
                <li><span className="font-medium">Excelente control:</span> Control sobre validadores y parámetros de la red</li>
                <li><span className="font-medium">Escalabilidad:</span> Capacidad para manejar miles de transacciones por segundo</li>
                <li><span className="font-medium">Interoperabilidad:</span> Posibilidad de conectar con otras redes y sistemas</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Implementación Híbrida Propuesta</h2>
          
          <p className="text-muted-foreground mb-6">
            Se recomienda una estrategia de implementación en fases para el módulo KERNOS BÁSICO:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Fase 1: Implementación inicial con Avalanche Subnet</h3>
              <p className="text-muted-foreground">
                Desarrollo de una Subnet personalizada en Avalanche con eliminación de costes de gas, privacidad configurable y soporte para el token KERN. Esta fase permite una implementación rápida con un excelente balance entre personalización, rendimiento y tiempo de desarrollo.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Fase 2: Expansión con interoperabilidad</h3>
              <p className="text-muted-foreground">
                Adición de capacidades de interoperabilidad para conectar con otras redes blockchain, posiblemente utilizando puentes a Polygon para aprovechar su ecosistema y liquidez. Esto amplía las posibilidades del sistema sin comprometer sus características fundamentales.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Fase 3: Posible migración a solución soberana</h3>
              <p className="text-muted-foreground">
                A medida que el sistema madure y los requisitos se vuelvan más específicos, se podría considerar una migración gradual hacia una solución basada en Cosmos SDK o Substrate, manteniendo la interoperabilidad con las fases anteriores. Esta fase es opcional y dependería de la evolución del proyecto.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Casos de Uso</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Verificación de Afirmaciones Factuales</h3>
              <p className="text-muted-foreground">
                Permite verificar la veracidad de afirmaciones sobre hechos concretos mediante un sistema de apuestas donde los participantes arriesgan valor basándose en su confianza en la veracidad o falsedad de la afirmación.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Resolución de Disputas Contractuales</h3>
              <p className="text-muted-foreground">
                Proporciona un mecanismo para resolver disputas sobre el cumplimiento de contratos sin necesidad de intermediarios, utilizando oráculos y evidencias verificables.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Validación de Información</h3>
              <p className="text-muted-foreground">
                Permite validar la autenticidad y precisión de información mediante un proceso descentralizado donde múltiples partes pueden aportar evidencias y verificar datos.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Sistemas de Reputación</h3>
              <p className="text-muted-foreground">
                El historial de participación en verificaciones exitosas construye un sistema de reputación basado en el token KERN, que puede utilizarse como indicador de confiabilidad en el sistema.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex justify-center space-x-4">
          <Button 
            onClick={() => router.push('/arquitectura')}
          >
            Ver Arquitectura Completa
          </Button>
          <Button 
            onClick={() => router.push('/seguridad')}
          >
            Explorar Seguridad Sin Vigilancia
          </Button>
        </div>
      </div>
    </main>
  )
}
