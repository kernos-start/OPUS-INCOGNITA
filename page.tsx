'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function Arquitectura() {
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">Arquitectura de OPUS INCÓGNITA</h1>
          <p className="text-xl text-muted-foreground">
            Una estructura en cinco capas que integra IA generativa, blockchain y seguridad sin vigilancia
          </p>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Visión General</h2>
          <p className="text-muted-foreground mb-4">
            OPUS INCÓGNITA es un sistema operativo innovador centrado en soberanía digital, privacidad avanzada y libertad tecnológica. Su arquitectura integra una IA generativa residente que gobierna todo el entorno operativo, un sistema de verificación de verdad basado en blockchain (KERNOS BÁSICO), y mecanismos de seguridad sin vigilancia que protegen al usuario sin comprometer su privacidad.
          </p>
        </Card>

        <h2 className="text-2xl font-semibold mb-6">Arquitectura en Capas</h2>

        <div className="space-y-8 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">1. Capa de Núcleo (Kernel)</h3>
            <p className="text-muted-foreground mb-4">
              El núcleo del sistema proporciona las funcionalidades básicas para la gestión de hardware y recursos.
            </p>
            <div className="ml-4">
              <h4 className="font-medium mb-2">Componentes:</h4>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Microkernel Modular: Núcleo minimalista que maneja solo las funciones esenciales</li>
                <li>Gestión de Memoria Aislada: Separación estricta de espacios de memoria para mayor seguridad</li>
                <li>Programador de Procesos Equitativo: Distribución justa de recursos computacionales</li>
                <li>Controladores de Hardware Verificados: Drivers con código auditado y firmado criptográficamente</li>
                <li>Sistema de Archivos Cifrado: Cifrado transparente de datos en reposo</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">2. Capa de IA Residente (NOUS)</h3>
            <p className="text-muted-foreground mb-4">
              Esta capa alberga la IA generativa que gobierna el sistema operativo, implementada con modelos ligeros para funcionar en hardware accesible.
            </p>
            <div className="ml-4">
              <h4 className="font-medium mb-2">Componentes:</h4>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Motor de IA Modular: Arquitectura que combina diferentes modelos según las necesidades</li>
                <li>Subsistema de Inferencia Local: Procesamiento de IA completamente local sin dependencias externas</li>
                <li>Gestor de Contexto y Memoria: Mantenimiento del estado y conocimiento del sistema</li>
                <li>Interfaz de Comunicación Multimodal: Interacción por texto, voz e imágenes</li>
                <li>Sistema de Aprendizaje Continuo: Mejora adaptativa basada en interacciones con el usuario</li>
              </ul>
            </div>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => router.push('/ia-residente')}
            >
              Más sobre IA Residente
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">3. Capa de Verificación Blockchain (KERNOS)</h3>
            <p className="text-muted-foreground mb-4">
              El módulo KERNOS BÁSICO implementa el sistema de apuestas de verdad enfrentadas para verificación de afirmaciones o contratos.
            </p>
            <div className="ml-4">
              <h4 className="font-medium mb-2">Componentes:</h4>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Nodo Blockchain Ligero: Implementación eficiente de cadena de bloques</li>
                <li>Motor de Contratos Inteligentes: Ejecución de contratos para verificación de verdad</li>
                <li>Sistema de Apuestas de Verdad: Mecanismo para verificar afirmaciones mediante apuestas enfrentadas</li>
                <li>Oráculos Descentralizados: Conexión con fuentes externas de información verificable</li>
                <li>Registro Inmutable de Verificaciones: Historial permanente de resultados de verificación</li>
              </ul>
            </div>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => router.push('/kernos')}
            >
              Más sobre KERNOS BÁSICO
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">4. Capa de Servicios del Sistema</h3>
            <p className="text-muted-foreground mb-4">
              Proporciona servicios esenciales del sistema operativo, todos gobernados por la IA residente.
            </p>
            <div className="ml-4">
              <h4 className="font-medium mb-2">Componentes:</h4>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Gestor de Identidad Soberana: Control de identidades sin dependencia de autoridades centrales</li>
                <li>Sistema de Comunicaciones Cifradas: Mensajería y comunicaciones con cifrado de extremo a extremo</li>
                <li>Gestor de Aplicaciones Aisladas: Ejecución de aplicaciones en entornos aislados (sandboxing)</li>
                <li>Servicio de Respaldo Descentralizado: Copias de seguridad distribuidas y cifradas</li>
                <li>Monitor de Privacidad: Supervisión continua de posibles fugas de información</li>
                <li>Gestor de Recursos Distribuidos: Optimización del uso de recursos del sistema</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">5. Capa de Interfaz de Usuario</h3>
            <p className="text-muted-foreground mb-4">
              Proporciona la experiencia de usuario, adaptativa y personalizada por la IA residente.
            </p>
            <div className="ml-4">
              <h4 className="font-medium mb-2">Componentes:</h4>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Shell Conversacional Inteligente: Interfaz de línea de comandos potenciada por IA</li>
                <li>Interfaz Gráfica Adaptativa: GUI que se ajusta a las necesidades y preferencias del usuario</li>
                <li>Asistente Personal Integrado: Funcionalidades de asistente virtual para tareas complejas</li>
                <li>Panel de Control de Privacidad: Gestión centralizada de configuraciones de privacidad</li>
                <li>Visualizador de Estado del Sistema: Monitoreo transparente de procesos y recursos</li>
                <li>Centro de Verificaciones KERNOS: Interfaz para el sistema de apuestas de verdad</li>
              </ul>
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Flujos de Interacción Principales</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Gestión del Sistema por IA</h3>
              <p className="text-muted-foreground ml-4">
                <code>Usuario → Interfaz Conversacional → IA Residente → Servicios del Sistema → Kernel</code>
              </p>
              <p className="text-muted-foreground ml-4 mt-2">
                La IA residente interpreta las instrucciones del usuario y gestiona los recursos del sistema de manera óptima, adaptándose a las necesidades y patrones de uso.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">2. Verificación de Verdad mediante KERNOS</h3>
              <p className="text-muted-foreground ml-4">
                <code>Afirmación → Sistema de Apuestas → Contratos Inteligentes → Oráculos → Resultado Verificado</code>
              </p>
              <p className="text-muted-foreground ml-4 mt-2">
                El módulo KERNOS permite verificar la veracidad de afirmaciones mediante un sistema de apuestas enfrentadas, utilizando contratos inteligentes y oráculos descentralizados.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">3. Ejecución Segura de Aplicaciones</h3>
              <p className="text-muted-foreground ml-4">
                <code>Aplicación → Gestor de Aplicaciones → Entorno Aislado → Monitoreo de Privacidad → Ejecución</code>
              </p>
              <p className="text-muted-foreground ml-4 mt-2">
                Las aplicaciones se ejecutan en entornos aislados, con monitoreo continuo para prevenir fugas de información o comportamientos maliciosos.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex justify-center space-x-4">
          <Button 
            onClick={() => router.push('/seguridad')}
          >
            Seguridad Sin Vigilancia
          </Button>
          <Button 
            onClick={() => router.push('/documentacion')}
          >
            Documentación Completa
          </Button>
        </div>
      </div>
    </main>
  )
}
