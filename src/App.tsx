import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Star,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  BookOpen,
  Gift,
  Users,
  Unlock,
  Target,
  Quote,
  Award,
  Lock,
  LayoutDashboard
} from 'lucide-react';
import { useState } from 'react';

const CHECKOUT_URL = "https://pay.hotmart.com/K104558102K?checkoutMode=10";

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
        🔥 OFERTA PROMOCIONAL - PUEDE SALIR DEL AIRE EN CUALQUIER MOMENTO 🔥
      </div>

      {/* 1. HERO SECTION (HEADLINE & SUBHEADLINE) */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/20 via-zinc-950 to-zinc-950 -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-500 font-medium text-sm mb-8">
            <Star className="w-4 h-4 fill-yellow-500" />
            <span>El método comprobado para transformar tus finanzas</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Descubre el Método Simple Para <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Salir de las Deudas</span> y Hacer Que Tu Dinero Sobre a Fin de Mes
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            El sistema paso a paso que te enseñará a organizar tus finanzas, eliminar el estrés del dinero y comenzar a construir tu patrimonio desde cero, <strong className="text-zinc-200 font-semibold">incluso si hoy ganas poco.</strong>
          </p>

          <div className="relative max-w-sm sm:max-w-md mx-auto mb-12 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.2)] border border-zinc-800 bg-zinc-900 flex items-center justify-center transform hover:-translate-y-2 transition-transform duration-500">
            {/* Book Cover Image */}
            <img 
              src="/portada.jpg" 
              alt="Libertad Financiera en 30 Días" 
              className="w-full h-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>

          <CTAButton text="¡SÍ! QUIERO TRANSFORMAR MI VIDA FINANCIERA" />
          
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Pago Seguro</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-yellow-500" />
              <span>Acceso Inmediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IDENTIFICACIÓN (DOR) */}
      <section className="py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            ¿Te resulta familiar alguna de estas situaciones?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Trabajas duro todo el mes, pero el dinero desaparece misteriosamente en los primeros días.",
              "Las tarjetas de crédito y las deudas te quitan el sueño y sientes que trabajas solo para pagar intereses.",
              "Sientes frustración porque tu salario se acaba rápido y nunca logras guardar nada.",
              "Te da ansiedad revisar tu cuenta bancaria o abrir los estados de cuenta a fin de mes."
            ].map((text, i) => (
              <div key={i} className="flex gap-4 p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HISTÓRIA / CONTEXTO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-yellow-500">No es tu culpa.</h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-6">
            La mayoría de las personas están atrapadas en la "carrera de la rata". Nos enseñaron a trabajar por dinero, pero <strong className="text-zinc-200">nadie nos enseñó cómo administrarlo.</strong>
          </p>
          <p className="text-xl text-zinc-400 leading-relaxed">
            El sistema está diseñado para mantenerte endeudado y consumiendo. Vives atrapado en un ciclo interminable de cobrar, pagar facturas, quedarte sin dinero y volver a endeudarte para llegar a fin de mes. <strong>Pero esto tiene que terminar hoy.</strong>
          </p>
        </div>
      </section>

      {/* 5. APRESENTAÇÃO DA SOLUÇÃO & 6. O QUE VAI APRENDER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Existe una salida. Presentamos: <br/><span className="text-yellow-500">Libertad Financiera en 30 Días</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              No es magia, ni fórmulas para hacerse rico de la noche a la mañana. Es un sistema práctico, probado y fácil de implementar que te ayudará a tomar el control absoluto de tus finanzas y crear un plan de crecimiento real.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-center">Con este sistema lograrás:</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Identificar y eliminar los 'gastos hormiga' que están devorando tu salario en silencio.",
                "Crear un presupuesto realista que te permita ahorrar sin dejar de disfrutar tu vida.",
                "Aplicar el método exacto para liquidar tus deudas en tiempo récord.",
                "Construir tu primer fondo de emergencia para dormir tranquilo por las noches.",
                "Dar tus primeros pasos en la inversión, incluso si solo tienes poco dinero para empezar.",
                "Cambiar tu mentalidad de escasez a una mentalidad de abundancia y crecimiento."
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300 text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. O QUE ESTÁ INCLUÍDO & 8. BÔNUS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            ¿Qué recibes exactamente hoy?
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Core Product */}
            <div className="space-y-8">
              <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">El Programa Completo</h3>
                <p className="text-zinc-400">La guía paso a paso "Libertad Financiera en 30 Días" con toda la metodología explicada de forma sencilla y directa al grano.</p>
              </div>
              
              <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6">
                  <LayoutDashboard className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Kit Control Financiero Profesional</h3>
                <p className="text-zinc-400">Plantillas automatizadas listas para usar. Solo ingresa tus números y el sistema organizará tu presupuesto y metas de ahorro visualmente.</p>
              </div>
            </div>

            {/* Bonuses */}
            <div className="bg-gradient-to-b from-yellow-900/20 to-zinc-900 p-8 sm:p-10 rounded-3xl border border-yellow-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-zinc-950 px-4 py-1 rounded-bl-lg font-bold text-sm">
                GRATIS HOY
              </div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Gift className="w-8 h-8 text-yellow-500" />
                Bónus Exclusivos
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-zinc-950 rounded-full flex items-center justify-center flex-shrink-0 border border-zinc-800">
                    <span className="text-yellow-500 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-100">Guía: Aumenta tus Ingresos en tu Tiempo Libre</h4>
                    <p className="text-zinc-400 text-sm mt-1">Descubre formas comprobadas de generar dinero extra sin dejar tu trabajo actual. <span className="text-yellow-500/70 line-through ml-2">(Valor: $27)</span></p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-zinc-950 rounded-full flex items-center justify-center flex-shrink-0 border border-zinc-800">
                    <span className="text-yellow-500 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-100">Checklist: Optimización de Gastos Fijos</h4>
                    <p className="text-zinc-400 text-sm mt-1">El método exacto para reducir hasta un 20% en tus facturas mensuales sin sacrificar tu estilo de vida. <span className="text-yellow-500/70 line-through ml-2">(Valor: $17)</span></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-zinc-950 rounded-full flex items-center justify-center flex-shrink-0 border border-zinc-800">
                    <span className="text-yellow-500 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-100">Planificador de Eliminación de Deudas</h4>
                    <p className="text-zinc-400 text-sm mt-1">La herramienta definitiva para aplicar el método avalancha y salir de las deudas meses o años antes de lo previsto. <span className="text-yellow-500/70 line-through ml-2">(Valor: $29)</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROVA SOCIAL */}
      <section className="py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Personas reales, resultados reales
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800" />
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500" />)}
              </div>
              <p className="text-zinc-300 mb-8 leading-relaxed italic">
                "Antes vivía estresado por las tarjetas. Con este sistema, en 3 meses pagué mi deuda más grande y por fin pude empezar a ahorrar. ¡Cambió mi vida por completo!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-300">CM</div>
                <div>
                  <p className="font-bold text-zinc-100">Carlos M.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800" />
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500" />)}
              </div>
              <p className="text-zinc-300 mb-8 leading-relaxed italic">
                "Pensé que por ganar poco nunca podría ahorrar. Este método me demostró lo contrario. Ya tengo mi fondo de emergencia y duermo mucho más tranquila."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-300">LS</div>
                <div>
                  <p className="font-bold text-zinc-100">Laura S.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800" />
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500" />)}
              </div>
              <p className="text-zinc-300 mb-8 leading-relaxed italic">
                "Las plantillas son súper fáciles de usar. Por primera vez en mi vida sé exactamente a dónde va mi dinero cada mes. Es una sensación de control increíble."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-300">DT</div>
                <div>
                  <p className="font-bold text-zinc-100">Diego T.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. OFERTA IRRESISTÍVEL & 13. URGÊNCIA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-zinc-950 to-zinc-950 -z-10"></div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900 border-2 border-yellow-500/50 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(234,179,8,0.15)] relative text-center">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wide shadow-lg animate-pulse">
              OFERTA POR TIEMPO LIMITADO
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 mt-4">
              Comienza tu transformación hoy
            </h2>
            
            <p className="text-zinc-400 mb-8 text-lg">
              Si sumamos el valor del programa y todos los bónus, el precio real sería de <span className="line-through text-zinc-500">$141.00 USD</span>. Pero hoy no pagarás eso.
            </p>

            <div className="mb-10 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 inline-block w-full max-w-md">
              <p className="text-zinc-400 mb-2 uppercase tracking-wider text-sm font-semibold">Precio Especial de Hoy</p>
              <div className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                $9.99 <span className="text-2xl text-yellow-600">USD</span>
              </div>
              <p className="text-zinc-500 text-sm">(O el equivalente en tu moneda local)</p>
            </div>

            <div className="flex justify-center mb-8">
              <CTAButton text="COMENZAR AHORA MISMO" className="w-full sm:w-auto px-12 py-5 text-xl" />
            </div>

            <p className="text-red-400 text-sm font-medium mb-8">
              ⚠️ Atención: Esta oferta promocional con todos los bónus incluidos puede salir del aire en cualquier momento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-400 border-t border-zinc-800 pt-8">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-zinc-500" />
                <span>Pago 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Unlock className="w-5 h-5 text-zinc-500" />
                <span>Acceso Inmediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. GARANTIA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-zinc-950 p-10 rounded-3xl border border-zinc-800">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-yellow-500/10 rounded-full flex items-center justify-center border-4 border-yellow-500/20">
              <Award className="w-16 h-16 text-yellow-500" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Garantía Incondicional de 7 Días</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Prueba el sistema completo. Descarga las plantillas, lee la guía y aplica los pasos. Si en 7 días no sientes que tienes más control sobre tu dinero o simplemente decides que no es para ti, <strong>te devolvemos el 100% de tu inversión.</strong> Sin preguntas, sin complicaciones. El riesgo es todo nuestro.
            </p>
          </div>
        </div>
      </section>

      {/* 10. QUEBRA DE OBJEÇÕES (FAQ) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            ¿Tienes dudas? Aquí te respondo:
          </h2>
          
          <div className="space-y-4">
            <FAQItem 
              question="¿Esto funciona para principiantes?" 
              answer="Sí, absolutamente. El sistema está diseñado desde cero. No necesitas saber de matemáticas, economía ni ser un experto en Excel. Todo está explicado de forma sencilla y directa."
            />
            <FAQItem 
              question="¿Necesito tener dinero para empezar?" 
              answer="No. El objetivo principal del programa es enseñarte a administrar lo que YA tienes para que te empiece a sobrar a fin de mes, independientemente de cuánto ganes hoy."
            />
            <FAQItem 
              question="¿Cuánto tiempo lleva ver resultados?" 
              answer="Desde la primera semana. Al organizar tu presupuesto y aplicar las estrategias de reducción de gastos, sentirás un alivio inmediato y verás dinero que antes se 'perdía' sin darte cuenta."
            />
            <FAQItem 
              question="Tengo muchas deudas, ¿me servirá?" 
              answer="¡Es exactamente para ti! Incluimos un planificador y una metodología específica (Avalancha y Bola de Nieve) para ayudarte a liquidar tus deudas mucho más rápido de lo que crees posible."
            />
          </div>
        </div>
      </section>

      {/* 14. FINAL CALL TO ACTION */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-yellow-900/20 via-zinc-900 to-zinc-900 -z-10"></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
            No dejes para mañana la tranquilidad financiera que puedes empezar a construir hoy.
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Toma acción ahora. Da el primer paso hacia una vida sin estrés por el dinero.
          </p>
          <CTAButton text="¡SÍ! QUIERO TRANSFORMAR MI VIDA FINANCIERA" className="px-10 py-5 text-xl" />
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
