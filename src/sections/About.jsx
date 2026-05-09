// Sección Sobre mí — historia y estadísticas de Saul
import { motion } from 'framer-motion'
import useFadeIn from '../hooks/useFadeIn'

function About() {
  const fadeIn = useFadeIn(0.2)
  const fadeIn2 = useFadeIn(0.4)

  return (
    <section id="sobre-mi" className="min-h-screen flex flex-col justify-center px-[10%] py-20 bg-[#0a0a0a]">

      {/* Encabezado */}
      <motion.p {...fadeIn} className="text-cyan-400 text-sm tracking-widest uppercase mb-2">Conóceme</motion.p>
      <motion.h2 {...fadeIn} className="text-4xl font-bold text-white mb-16">Mi historia</motion.h2>

      {/* Dos columnas: texto a la izquierda, estadísticas a la derecha */}
      <div className="grid grid-cols-2 gap-16 items-center">

        {/* Columna izquierda — texto narrativo */}
        <motion.div {...fadeIn} className="flex flex-col gap-6">
          <p className="text-gray-400 text-base leading-relaxed">
            Soy un diseñador UI/UX apasionado por crear experiencias digitales que combinan estética y funcionalidad. Mi camino en el diseño comenzó con la curiosidad de entender por qué algunas interfaces se sienten naturales y otras frustrantes.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            A lo largo de mi carrera he trabajado en proyectos que van desde aplicaciones móviles hasta plataformas web complejas, siempre poniendo al usuario en el centro de cada decisión de diseño.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            Cuando no estoy diseñando, estoy aprendiendo nuevas tecnologías para entender mejor cómo construir lo que diseño.
          </p>
        </motion.div>

        {/* Columna derecha — estadísticas con borde cyan */}
        <motion.div {...fadeIn2} className="flex flex-col gap-6">

          {/* Stat 1 */}
          <div className="border border-cyan-400 border-opacity-30 rounded-lg p-6 hover:border-opacity-100 transition-all duration-300">
            <h3 className="text-cyan-400 text-5xl font-bold mb-2">20+</h3>
            <p className="text-gray-400 text-sm">Proyectos completados</p>
          </div>

          {/* Stat 2 */}
          <div className="border border-cyan-400 border-opacity-30 rounded-lg p-6 hover:border-opacity-100 transition-all duration-300">
            <h3 className="text-cyan-400 text-5xl font-bold mb-2">3+</h3>
            <p className="text-gray-400 text-sm">Años de experiencia</p>
          </div>

          {/* Stat 3 */}
          <div className="border border-cyan-400 border-opacity-30 rounded-lg p-6 hover:border-opacity-100 transition-all duration-300">
            <h3 className="text-cyan-400 text-5xl font-bold mb-2">15+</h3>
            <p className="text-gray-400 text-sm">Clientes satisfechos</p>
          </div>

        </motion.div>
      </div>

    </section>
  )
}

export default About