'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function Seguridad() {
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">Seguridad Sin Vigilancia</h1>
          <p className="text-xl text-muted-foreground">
            Protección avanzada que respeta la privacidad y soberanía digital
          </p>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Principios Fundamentales</h2>
          <p className="text-muted-foreground mb-6">
            La seguridad sin vigilancia en OPUS INCÓGNITA se basa en cinco principios fundamentales:
          </p>

          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="font-medium mr-2">1.</span>
              <span><span className="font-medium">Privacidad por Diseño:</span> La privacidad como componente central de la arquitectura, no como característica añadida.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">2.</span>
              <span><span className="font-medium">Minimización de Datos:</span> Recolección y almacenamiento únicamente de los datos estrictamente necesarios.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">3.</span>
              <span><span className="font-medium">Control Total del Usuario:</span> El usuario mantiene control absoluto sobre sus datos y su procesamiento.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">4.</span>
              <span><span className="font-medium">Transparencia Técnica:</span> Código abierto y auditable que permite verificar la ausencia de mecanismos de vigilancia.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">5.</span>
              <span><span className="font-medium">Seguridad Descentralizada:</span> Protección basada en mecanismos criptográficos y consenso distribuido, no en autoridades centrales.</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tecnologías Clave para Seguridad Sin Vigilancia</h2>
          
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Cifrado Homomórfico (FHE)</h3>
              <p className="text-muted-foreground mb-3">
                Permite realizar cálculos sobre datos cifrados sin necesidad de descifrarlos, posibilitando:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Análisis de seguridad privado: Detección de patrones maliciosos sin acceder al contenido real</li>
                <li>Verificación de integridad cifrada: Comprobación de integridad sin exponer información sensible</li>
                <li>Actualizaciones seguras: Validación de actualizaciones manteniendo la privacidad</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                <span className="font-medium">Implementación:</span> Integración de bibliotecas FHE como IBM HElib o Microsoft SEAL para operaciones críticas de seguridad.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Zero-Knowledge Proofs (ZKP)</h3>
              <p className="text-muted-foreground mb-3">
                Permiten verificar la veracidad de una afirmación sin revelar información adicional:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Autenticación sin revelación: Verificación de identidad sin exponer credenciales</li>
                <li>Validación de estado: Comprobación del estado correcto del sistema sin revelar detalles</li>
                <li>Verificación de cumplimiento: Demostración del cumplimiento de políticas sin exponer datos</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                <span className="font-medium">Implementación:</span> Utilización de protocolos ZK-SNARKs o ZK-STARKs para autenticación y verificación.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Privacidad Diferencial</h3>
              <p className="text-muted-foreground mb-3">
                Técnica matemática que permite extraer información útil de conjuntos de datos mientras se protege la privacidad individual:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Telemetría anónima: Recopilación de estadísticas sin comprometer la privacidad individual</li>
                <li>Mejora continua: Posibilidad de mejorar el sistema basándose en datos agregados</li>
                <li>Detección de anomalías: Identificación de patrones anómalos sin exponer datos individuales</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                <span className="font-medium">Implementación:</span> Aplicación de algoritmos de privacidad diferencial en cualquier recopilación opcional de datos.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Computación Segura Multi-Parte (MPC)</h3>
              <p className="text-muted-foreground mb-3">
                Permite que múltiples entidades realicen cálculos conjuntos sobre sus datos sin revelarlos entre sí:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Verificación distribuida: Validación de seguridad por múltiples nodos sin compartir datos</li>
                <li>Consenso privado: Toma de decisiones colectivas preservando la privacidad individual</li>
                <li>Análisis colaborativo: Detección de amenazas mediante colaboración sin exponer datos</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                <span className="font-medium">Implementación:</span> Utilización para verificaciones de seguridad distribuidas entre componentes del sistema.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Arquitectura de Seguridad en Capas</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Capa de Aislamiento y Compartimentación</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">Microkernel con Separación Estricta:</span> Aislamiento riguroso entre componentes</li>
                <li><span className="font-medium">Virtualización Segura:</span> Ejecución de aplicaciones en entornos aislados</li>
                <li><span className="font-medium">Contenedores Cifrados:</span> Aislamiento de datos y procesos con cifrado independiente</li>
              </ul>
              <p className="text-muted-foreground mt-2 ml-6">
                Implementación basada en arquitectura tipo Qubes OS con aislamiento por dominios y contenedores con cifrado por contenedor.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">2. Capa de Comunicaciones Seguras</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">Red Interna Cifrada:</span> Comunicaciones entre componentes totalmente cifradas</li>
                <li><span className="font-medium">Enrutamiento Anónimo:</span> Conexiones externas a través de redes de anonimización</li>
                <li><span className="font-medium">Protocolos Zero-Trust:</span> Verificación continua sin confianza implícita entre componentes</li>
              </ul>
              <p className="text-muted-foreground mt-2 ml-6">
                Implementación con cifrado de extremo a extremo para comunicaciones internas e integración nativa con redes Tor/I2P para comunicaciones externas.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">3. Capa de Gestión de Identidad Soberana</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">Identidades Basadas en Criptografía:</span> Gestión de identidades sin autoridad central</li>
                <li><span className="font-medium">Credenciales Verificables:</span> Atributos verificables sin revelar información completa</li>
                <li><span className="font-medium">Autenticación Multi-Factor Descentralizada:</span> Verificación robusta sin dependencia de terceros</li>
              </ul>
              <p className="text-muted-foreground mt-2 ml-6">
                Implementación con sistema de identidad basado en pares de claves criptográficas y ZKP para verificación de credenciales.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">4. Capa de Detección y Respuesta</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium">Análisis Homomórfico:</span> Detección de amenazas sobre datos cifrados</li>
                <li><span className="font-medium">Verificación de Integridad Distribuida:</span> Comprobación colaborativa del estado del sistema</li>
                <li><span className="font-medium">Respuesta Automatizada Privada:</span> Mitigación de amenazas sin exponer datos sensibles</li>
              </ul>
              <p className="text-muted-foreground mt-2 ml-6">
                Implementación con análisis de comportamiento mediante FHE y verificación de integridad mediante consenso distribuido con MPC.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mecanismos Específicos de Seguridad</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Sistema de Permisos Granular</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Permisos contextuales basados en necesidad</li>
                <li>Revocación automática tras su uso</li>
                <li>Auditoría local controlada por el usuario</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Verificación de Integridad Distribuida</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Consenso blockchain para verificación</li>
                <li>Atestación remota anónima</li>
                <li>Sellado de tiempo descentralizado</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Gestión de Secretos Distribuida</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>División de claves mediante esquemas de umbral</li>
                <li>Mecanismos de recuperación seguros</li>
                <li>Rotación automática de claves</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Defensa Contra Ataques Avanzados</h3>
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                <li>Protección contra canales laterales</li>
                <li>Resistencia a ataques de correlación</li>
                <li>Ofuscación de tráfico con señuelos</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Validación y Auditoría</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Verificación Formal</h3>
              <p className="text-muted-foreground">
                Especificación formal de propiedades de privacidad y seguridad, con verificación matemática de cumplimiento y publicación de pruebas formales para revisión pública.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Auditoría de Código Abierto</h3>
              <p className="text-muted-foreground">
                Código completamente abierto para revisión comunitaria, con proceso de revisión transparente y documentado, y programa de recompensas por descubrimiento de vulnerabilidades.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="text-lg font-medium mb-2">Pruebas de Penetración Éticas</h3>
              <p className="text-muted-foreground">
                Evaluación regular por expertos en seguridad independientes, simulación de escenarios de ataque avanzados, y publicación de resultados y medidas correctivas.
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
            onClick={() => router.push('/documentacion')}
          >
            Explorar Documentación
          </Button>
        </div>
      </div>
    </main>
  )
}
