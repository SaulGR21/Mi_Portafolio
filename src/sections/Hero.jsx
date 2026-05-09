// Sección principal (Hero) — primera pantalla que ve el usuario
// Usa el hook useTypingEffect para animar el nombre letra por letra
import { motion } from 'framer-motion'
import useTypingEffect from '../hooks/useTypingEffect'
import useFadeIn from '../hooks/useFadeIn'

function Hero() {
  // nombre se va llenando letra por letra gracias al hook
  const nombre = useTypingEffect('Saul Guzman')

  // Propiedades de animación con diferentes delays para efecto escalonado
  const fadeIn = useFadeIn(0.2)
  const fadeIn2 = useFadeIn(0.4)
  const fadeIn3 = useFadeIn(0.6)

  return (
    // min-h-screen para ocupar toda la pantalla, overflow-hidden para contener el glow
    <section id="hero" className="min-h-screen flex flex-col justify-center px-[10%] bg-[#0a0a0a] relative overflow-hidden">

      {/* Círculo de luz cyan difuminado en el fondo para dar profundidad */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400 opacity-5 rounded-full blur-[120px] pointer-events-none" />

      {/* Indicador de disponibilidad con animación */}
      <motion.span {...fadeIn} className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
        ✦ Disponible para proyectos
      </motion.span>

      {/* Saludo */}
      <motion.p {...fadeIn} className="text-gray-400 text-lg mb-2">Hola, soy</motion.p>

      {/* Nombre con efecto de escritura — el cursor | parpadea con animate-pulse */}
      <motion.h1 {...fadeIn2} className="text-6xl font-bold text-white mb-4">
        {nombre}
        <span className="animate-pulse text-cyan-400">|</span>
      </motion.h1>

      {/* Título profesional */}
      <motion.h2 {...fadeIn2} className="text-2xl text-cyan-400 mb-6">Diseñador UI/UX</motion.h2>

      {/* Descripción breve */}
      <motion.p {...fadeIn3} className="text-gray-400 max-w-lg text-base leading-relaxed mb-10">
        Creo experiencias digitales que combinan diseño visual atractivo con funcionalidad intuitiva.
      </motion.p>

      {/* Botones de acción principales */}
      <motion.div {...fadeIn3} className="flex gap-4">
        <a href="#proyectos" className="bg-cyan-400 text-black px-8 py-3 rounded font-semibold hover:bg-cyan-300 transition-all">
          Ver proyectos
        </a>
        <a href="#contacto" className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded font-semibold hover:bg-cyan-400 hover:text-black transition-all">
          Contactar
        </a>
      </motion.div>

    </section>
  )
}

export default Hero