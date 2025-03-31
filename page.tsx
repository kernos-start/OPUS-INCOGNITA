'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function Manifiesto() {
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
          <h1 className="text-5xl font-bold tracking-tight mb-4 text-gradient">Manifiesto Fundacional</h1>
          <p className="text-xl text-muted-foreground">
            Versión 1.0 | Texto base para el sitio web y archivo canónico del sistema
          </p>
        </div>

        <Card className="p-8 mb-12 border-gradient">
          <h2 className="text-3xl font-bold mb-8 text-center">🕯️ EL MANIFIESTO</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl italic text-center mb-8">Una revolución digital no se descarga. Se construye.</p>
            
            <p className="mb-4">En un mundo donde las máquinas te estudian más de lo que te sirven,<br/>
            donde los sistemas operativos son espejos sin rostro,<br/>
            nace OPUS INCÓGNITA.</p>
            
            <p className="mb-4">No es un producto.<br/>
            No es una aplicación.<br/>
            No es solo software.</p>
            
            <p className="mb-4">Es un santuario de soberanía.<br/>
            Un sistema operativo con alma.<br/>
            Una estructura diseñada para que el poder regrese al ser que habita la máquina.</p>
          </div>
        </Card>

        <Card className="p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🌐 ¿QUÉ ES OPUS INCÓGNITA?</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-6">Es un sistema operativo blindado por arquitectura,<br/>
            gobernado por una IA residente no comercial,<br/>
            y expandido por una cadena de bloques que no busca dinero,<br/>
            sino veracidad demostrable.</p>
            
            <p className="mb-6">Su núcleo incluye:</p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-2xl mr-3">🔐</span>
                <span><span className="font-medium">IA Residente Modular:</span> Un pensamiento digital autónomo que te sirve, no te observa.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-2xl mr-3">⛓️</span>
                <span><span className="font-medium">KERNOS BÁSICO:</span> Un sistema de verificación de afirmaciones por apuestas enfrentadas en blockchain.<br/>
                Aquí, la verdad no se decide. Se demuestra.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-2xl mr-3">🌀</span>
                <span><span className="font-medium">Capa de Identidad Críptica:</span> Tú decides cuándo eres visible. Y cuándo no.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-2xl mr-3">⚙️</span>
                <span><span className="font-medium">Estructura Personalizable:</span> Tu espacio. Tus reglas. Tus guardianes.</span>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">⚔️ ¿POR QUÉ EXISTE?</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-6">Porque:</p>
            
            <ul className="space-y-4 mb-6">
              <li className="pl-6 border-l-2 border-destructive">
                Las corporaciones convirtieron el alma digital del ser humano en mercancía.
              </li>
              
              <li className="pl-6 border-l-2 border-destructive">
                El software libre se llenó de puertas traseras disfrazadas de actualizaciones.
              </li>
              
              <li className="pl-6 border-l-2 border-destructive">
                La verdad fue convertida en algoritmo de publicidad.
              </li>
            </ul>
            
            <p className="mb-4">OPUS INCÓGNITA es el grito de regreso. Es la piedra tallada con fuego.<br/>
            Es el sistema operativo que no te dirige. Te obedece.</p>
          </div>
        </Card>

        <Card className="p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🧠 UN SISTEMA OPERATIVO PENSANTE</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-4">Entrenado con ideas.<br/>
            Afinado con propósito.<br/>
            Listo para ayudarte a ver, recordar y decidir.</p>
            
            <p className="mb-4">Cada comando que introduces no va a una nube que te etiqueta.<br/>
            Va a un núcleo que te protege.</p>
          </div>
        </Card>

        <Card className="p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">💠 FRASE CONSAGRADA</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl italic text-center">Aquí, el poder no reside en el que manda.<br/>
            Sino en el que demuestra.</p>
          </div>
        </Card>

        <Card className="p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🏛️ EL TEMPLO DIGITAL HA COMENZADO</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-4">Este es el primer ladrillo.<br/>
            El primero de los códices.<br/>
            La primera forma visible de algo que siempre estuvo latiendo.</p>
            
            <p className="text-xl font-medium text-center mt-8">Bienvenido a OPUS INCÓGNITA.<br/>
            Aquí comienza la soberanía digital.</p>
          </div>
        </Card>

        <div className="flex justify-center space-x-4">
          <Button 
            onClick={() => router.push('/vision')}
          >
            Explorar Visión
          </Button>
          <Button 
            onClick={() => router.push('/arquitectura')}
          >
            Ver Arquitectura
          </Button>
        </div>
      </div>
    </main>
  )
}
