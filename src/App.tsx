import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Star,
  Clock,
  ArrowRight,
  Play,
  ChevronDown,
  BarChart3,
  Target,
  LayoutDashboard,
  Lock,
  Zap,
  Award,
  ChevronUp
} from 'lucide-react';
import { useState } from 'react';

const CHECKOUT_URL = "https://pay.hotmart.com/K104558102K";

function CTAButton({ text, className = "" }: { text: string, className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-zinc-950 font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-lg sm:text-xl w-full sm:w-auto text-center ${className}`}
    >
      {text}
      <ArrowRight className="w-6 h-6" />
    </a>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-zinc-100 pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-yellow-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-yellow-500 flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-6 pt-0 text-zinc-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-yellow-500/30 selection:text-yellow-200">
      {/* Top Banner */}
      <div className="bg-yellow-500 text-zinc-950 py-2 px-4 text-center text-sm font-bold tracking-wide">
        🔥 OFERTA ESPECIAL POR TIEMPO LIMITADO - ACCESO INMEDIATO 🔥
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/20 via-zinc-950 to-zinc-950 -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-500 font-medium text-sm mb-8">
            <Star className="w-4 h-4 fill-yellow-500" />
            <span>El sistema probado por más de 2,000 estudiantes</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Descubre el Sistema Exacto Para Alcanzar Tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Libertad Financiera</span> en Solo 30 Días
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Domina tu dinero, elimina tus deudas y construye riqueza real paso a paso, <strong className="text-zinc-200 font-semibold">incluso si hoy estás en cero o tienes ingresos variables.</strong>
          </p>

          <div className="relative max-w-sm sm:max-w-md mx-auto mb-12 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.2)] border border-zinc-800 bg-zinc-900 flex items-center justify-center transform hover:-translate-y-2 transition-transform duration-500">
            {/* Book Cover Image */}
            <img 
              src="/portada.jpg" 
              alt="Libertad Financiera en 30 Días" 
              className="w-full h-auto object-contain"
              onError={(e) => {
                // Fallback image in case the user hasn't uploaded 'portada.jpg' yet
                e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>

          <CTAButton text="SÍ, QUIERO TRANSFORMAR MIS FINANZAS HOY" />
          
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Pago 100% Seguro</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-yellow-500" />
              <span>Acceso Inmediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section (Agitation) */}
      <section className="py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            ¿Te identificas con alguna de estas situaciones?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Trabajas duro todo el mes, pero el dinero desaparece misteriosamente antes de cobrar de nuevo.",
              "Las tarjetas de crédito y las deudas te quitan el sueño y sientes que trabajas solo para pagarlas.",
              "Sientes que nunca podrás ahorrar o invertir porque 'no te alcanza' con lo que ganas hoy.",
              "Tienes ingresos variables (eres independiente) y la incertidumbre te genera ansiedad constante."
            ].map((text, i) => (
              <div key={i} className="flex gap-4 p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                  <span className="text-red-500 font-bold text-xl">✕</span>
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-medium text-yellow-500 mb-4">
              La culpa no es tuya, es del sistema educativo.
            </p>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Nadie nos enseñó cómo gestionar el dinero. Pero la verdad es que <strong className="text-zinc-200">no importa cuánto ganes, el problema es cómo lo gestionas.</strong> Si no tomas el control hoy, la situación solo empeorará.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Presentamos: <span className="text-yellow-500">Libertad Financiera en 30 Días</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              La Edición ULTRA Premium que te entrega las herramientas, la mentalidad y el paso a paso exacto para dominar tu dinero de una vez por todas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-yellow-500/50 transition-colors">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">El Poder del Interés Compuesto</h3>
              <p className="text-zinc-400 leading-relaxed">
                Descubre cómo hacer que tu dinero trabaje para ti. Aprenderás a usar el efecto multiplicador que separa a los inversionistas exitosos de quienes simplemente ahorran.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-yellow-500/50 transition-colors">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Eliminación de Deudas</h3>
              <p className="text-zinc-400 leading-relaxed">
                Domina los métodos "Bola de Nieve" y "Avalancha". Estrategias matemáticas y psicológicas para liquidar tus deudas en tiempo récord y recuperar tu paz mental.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-yellow-500/50 transition-colors">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Protección e Ingresos Pasivos</h3>
              <p className="text-zinc-400 leading-relaxed">
                No solo es ganar, es proteger. Aprende a crear fondos de emergencia sólidos y a construir múltiples fuentes de ingresos que no dependan de tu tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kit (Features) */}
      <section className="py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-semibold text-sm mb-6">
                INCLUIDO EN EL PROGRAMA
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Kit Control Financiero Profesional
              </h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                No necesitas ser un experto en Excel. Te entregamos 3 herramientas esenciales, automatizadas y listas para usar, que te darán claridad absoluta sobre tus números.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <BarChart3 className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Control Mensual Automatizado</h4>
                    <p className="text-zinc-400">Registra tu presupuesto y gastos reales. El sistema genera gráficos automáticos mostrando exactamente a dónde va tu dinero.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Target className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Simulador de Metas de Ahorro</h4>
                    <p className="text-zinc-400">Modifica el valor de ahorro mensual y observa visualmente cómo crece tu capital a lo largo del tiempo para alcanzar tus objetivos.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <LayoutDashboard className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Dashboard Inteligente</h4>
                    <p className="text-zinc-400">Tu centro de comando financiero. Consolida toda tu información en una vista panorámica automática para tomar decisiones rápidas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent blur-3xl -z-10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
                alt="Dashboard Financiero" 
                className="rounded-2xl border border-zinc-800 shadow-2xl"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-zinc-950 border border-zinc-800 p-4 rounded-xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Crecimiento</p>
                  <p className="text-xl font-bold text-zinc-100">+239% en 25 meses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Casos de Éxito Reales
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 relative">
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-500" />)}
              </div>
              <h3 className="text-2xl font-bold mb-4">"De Endeudado a Estable en 18 Meses"</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed italic">
                "Ganaba bien, pero siempre estaba endeudado. Las tarjetas de crédito me mantenían en un ciclo de pagos mínimos. Implementé el sistema 50/30/20, eliminé 3 tarjetas usando el método bola de nieve y comencé a invertir el 15%. En 18 meses acumulé mi primer fondo sólido."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-xl font-bold text-zinc-300">
                  C
                </div>
                <div>
                  <p className="font-bold text-zinc-100">Carlos, 32 años</p>
                  <p className="text-sm text-zinc-500">Profesional en Ventas</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 relative">
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-500" />)}
              </div>
              <h3 className="text-2xl font-bold mb-4">"Estabilidad con Ingresos Variables"</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed italic">
                "Como independiente, mis ingresos variaban cada mes. Eso me generaba mucha ansiedad. Con el programa creé un fondo base de seguridad de 6 meses y automaticé mi ahorro del 20%. En 24 meses logré estabilidad completa y dupliqué mis ingresos promedio."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-xl font-bold text-zinc-300">
                  M
                </div>
                <div>
                  <p className="font-bold text-zinc-100">Mariana</p>
                  <p className="text-sm text-zinc-500">Profesional Independiente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Offer */}
      <section className="py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-zinc-900 to-zinc-900 -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-950 border-2 border-yellow-500/50 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(234,179,8,0.1)] relative">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-zinc-950 px-6 py-2 rounded-full font-bold text-sm tracking-wide shadow-lg">
              OFERTA ESPECIAL HOY
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              Todo lo que te llevas hoy:
            </h2>

            <div className="space-y-4 mb-10">
              {[
                { text: "Programa Completo: Libertad Financiera en 30 Días", value: "$97.00" },
                { text: "Kit Control Financiero Profesional (Plantillas)", value: "$47.00" },
                { text: "Módulo: Estrategias Avanzadas de Inversión", value: "$67.00" },
                { text: "Módulo: Optimización Fiscal y Protección", value: "$47.00" },
                { text: "Acceso de por vida y actualizaciones", value: "INVALUABLE" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-zinc-300 sm:text-lg">{item.text}</span>
                  </div>
                  <span className="text-zinc-500 line-through text-sm sm:text-base">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="text-center mb-10">
              <p className="text-zinc-400 mb-2">Valor Total: <span className="line-through">$258.00 USD</span></p>
              <p className="text-xl mb-2">Hoy te lo llevas por un único pago de:</p>
              <div className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
                OFERTA ÚNICA
              </div>
              <p className="text-yellow-500 font-medium">Sin pagos mensuales. Acceso de por vida.</p>
            </div>

            <div className="flex justify-center mb-8">
              <CTAButton text="SÍ, QUIERO ACCEDER AHORA MISMO" className="w-full sm:w-auto px-12 py-5 text-xl" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-400 border-t border-zinc-800 pt-8">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-zinc-500" />
                <span>Pago 100% Seguro por Hotmart</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-zinc-500" />
                <span>Garantía de Satisfacción</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-yellow-500/10 rounded-full flex items-center justify-center border-4 border-yellow-500/20">
              <Award className="w-16 h-16 text-yellow-500" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Garantía Incondicional de 7 Días</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Estamos tan seguros de que este sistema transformará tus finanzas que asumimos todo el riesgo. Tienes 7 días completos para revisar el programa, usar las plantillas y aplicar el sistema. Si por alguna razón sientes que no es para ti, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-4">
            <FAQItem 
              question="¿Necesito ganar mucho dinero para que esto funcione?" 
              answer="Absolutamente no. El sistema 50/30/20 y las estrategias de este programa se basan en porcentajes, no en cantidades absolutas. Funciona igual de bien si ganas $500 o $5,000 al mes. Lo importante es empezar a crear el hábito."
            />
            <FAQItem 
              question="No sé nada de finanzas ni de Excel, ¿es muy complicado?" 
              answer="El programa está diseñado desde cero para principiantes. No usamos jerga financiera complicada. Además, el Kit de Control Financiero está completamente automatizado; solo tienes que ingresar tus números y el sistema hace los cálculos y gráficos por ti."
            />
            <FAQItem 
              question="Tengo muchas deudas, ¿debería esperar a pagarlas para comprar esto?" 
              answer="¡Al contrario! Este es el momento exacto en el que más lo necesitas. Tenemos un módulo completo dedicado a la eliminación de deudas usando los métodos 'Bola de Nieve' y 'Avalancha' que te ayudarán a salir de ellas mucho más rápido de lo que imaginas."
            />
            <FAQItem 
              question="¿Cómo recibo el acceso al programa?" 
              answer="Inmediatamente después de confirmar tu pago seguro a través de Hotmart, recibirás un correo electrónico con tus datos de acceso a la plataforma donde encontrarás todos los módulos en video y los enlaces para descargar el Kit Control Financiero."
            />
            <FAQItem 
              question="¿Tengo que pagar mensualidades?" 
              answer="No. Es un único pago que te da acceso de por vida al programa, a las herramientas y a todas las futuras actualizaciones que hagamos."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-yellow-900/20 via-zinc-950 to-zinc-950 -z-10"></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-8">
            El mejor momento para plantar un árbol fue hace 20 años. <span className="text-yellow-500">El segundo mejor momento es ahora.</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Toma acción en las próximas 24 horas. No esperes el momento perfecto. Comienza con un paso pequeño pero concreto hacia tu libertad financiera.
          </p>
          <CTAButton text="QUIERO EMPEZAR MI TRANSFORMACIÓN HOY" className="px-10 py-5 text-xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900 text-center px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-500 text-sm mb-4">
            Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
          </p>
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Libertad Financiera. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
