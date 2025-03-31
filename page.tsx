'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function IAResidente() {
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">IA Residente (NOUS)</h1>
          <p className="text-xl text-muted-foreground">
            Modelos de IA ligeros pero potentes que gobiernan el sistema operativo
          </p>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Visión General</h2>
          <p className="text-muted-foreground mb-4">
            La capa de IA Residente (NOUS) alberga la inteligencia artificial generativa que gobierna el sistema operativo OPUS INCÓGNITA. Está diseñada para funcionar completamente en el dispositivo local, sin dependencias de servicios en la nube, utilizando modelos ligeros pero potentes que pueden ejecutarse en hardware accesible para empresas medianas, pequeñas y particulares.
          </p>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Arquitectura Híbrida de Modelos</h2>
          <p className="text-muted-foreground mb-6">
            Para garantizar que OPUS INCÓGNITA sea accesible para diferentes tipos de usuarios con distintas capacidades de hardware, se implementa una arquitectura híbrida de modelos de IA:
          </p>

          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Modelo Base (1-3B parámetros)</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">Opciones:</span> Llama 3.2 1B, Llama 3.2 3B</li>
                <li><span className="font-medium">Funciones:</span> Comandos básicos, asistencia simple, gestión de tareas rutinarias</li>
                <li><span className="font-medium">Requisitos:</span> Mínimos, funciona en hardware básico sin GPU</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Modelo Principal (7-8B parámetros)</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">Opciones:</span> Phi-3-small (7B), Gemma 7B, Llama 3 8B</li>
                <li><span className="font-medium">Funciones:</span> Asistencia avanzada, análisis de seguridad, gestión del sistema</li>
                <li><span className="font-medium">Requisitos:</span> Moderados, funciona en hardware de gama media</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Modelo Avanzado (opcional, 14B parámetros)</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">Opciones:</span> Phi-3-medium (14B)</li>
                <li><span className="font-medium">Funciones:</span> Razonamiento complejo, análisis avanzado, tareas especializadas</li>
                <li><span className="font-medium">Requisitos:</span> Elevados, recomendado para hardware de gama alta</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Técnicas de Optimización</h2>
          <p className="text-muted-foreground mb-4">
            Para maximizar el rendimiento en hardware limitado, se implementan diversas técnicas de optimización:
          </p>

          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>
              <span className="font-medium">Cuantificación:</span> Conversión a formatos de menor precisión (INT8, INT4) para reducir requisitos de memoria
            </li>
            <li>
              <span className="font-medium">Poda de Modelos:</span> Eliminación de parámetros redundantes para reducir el tamaño sin afectar significativamente el rendimiento
            </li>
            <li>
              <span className="font-medium">Inferencia por Lotes:</span> Procesamiento eficiente de múltiples solicitudes para optimizar el uso de recursos
            </li>
            <li>
              <span className="font-medium">Caché de Resultados:</span> Almacenamiento de respuestas frecuentes para evitar cálculos repetitivos
            </li>
            <li>
              <span className="font-medium">Computación Adaptativa:</span> Ajuste dinámico de recursos según la complejidad de la tarea
            </li>
          </ul>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Componentes Principales</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Motor de IA Modular</h3>
              <p className="text-muted-foreground ml-4">
                Sistema inteligente que selecciona el modelo adecuado según la tarea, permitiendo un equilibrio óptimo entre rendimiento y eficiencia. Puede cargar y descargar modelos dinámicamente según las necesidades.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Subsistema de Inferencia Local</h3>
              <p className="text-muted-foreground ml-4">
                Toda la inferencia se realiza en el dispositivo del usuario, sin enviar datos a servidores externos. Utiliza frameworks optimizados como ONNX Runtime o TensorRT para maximizar el rendimiento.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Gestor de Contexto y Memoria</h3>
              <p className="text-muted-foreground ml-4">
                Mantiene el estado y conocimiento del sistema, permitiendo a la IA recordar interacciones previas y aprender de ellas. Implementa técnicas de gestión de memoria para optimizar el uso de recursos.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Interfaz de Comunicación Multimodal</h3>
              <p className="text-muted-foreground ml-4">
                Permite la interacción con el sistema mediante texto, voz e imágenes, adaptándose a las preferencias del usuario y al contexto de uso.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Sistema de Aprendizaje Continuo</h3>
              <p className="text-muted-foreground ml-4">
                Mejora adaptativa basada en interacciones con el usuario, respetando la privacidad mediante técnicas como el aprendizaje federado con privacidad diferencial.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Casos de Uso de la IA en el Sistema</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Gestión del Sistema</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Optimización automática de recursos</li>
                <li>Detección y resolución de problemas</li>
                <li>Actualizaciones inteligentes basadas en patrones de uso</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Seguridad Adaptativa</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Análisis de comportamientos anómalos</li>
                <li>Respuesta automatizada a amenazas</li>
                <li>Verificación continua de integridad</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Interfaz Conversacional</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Interacción natural con el sistema</li>
                <li>Asistencia contextual basada en actividades</li>
                <li>Automatización de tareas complejas</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Personalización Avanzada</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Adaptación de la interfaz según preferencias</li>
                <li>Anticipación de necesidades del usuario</li>
                <li>Optimización de flujos de trabajo</li>
              </ul>
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
                <li><span className="font-medium">GPU:</span> Opcional, pero recomendado para mejor rendimiento (2GB+ VRAM)</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Configuración Recomendada</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">CPU:</span> 6-8 núcleos, arquitectura x86-64 o ARM64 moderno</li>
                <li><span className="font-medium">RAM:</span> 16-32 GB</li>
                <li><span className="font-medium">GPU:</span> 4GB+ VRAM para aceleración de IA</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Configuración Avanzada</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">CPU:</span> 8+ núcleos, arquitectura x86-64 moderno</li>
                <li><span className="font-medium">RAM:</span> 32+ GB</li>
                <li><span className="font-medium">GPU:</span> 8GB+ VRAM para modelos de IA más avanzados</li>
              </ul>
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
            onClick={() => router.push('/kernos')}
          >
            Explorar KERNOS BÁSICO
          </Button>
        </div>
      </div>
    </main>
  )
}
