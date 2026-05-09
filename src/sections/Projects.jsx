// Sección de Proyectos
// Importamos los datos desde constants para mantener el diseño limpio
import { motion } from 'framer-motion'
import useFadeIn from '../hooks/useFadeIn'
import { projects } from '../constants/projects'

function Projects() {
  const fadeIn = useFadeIn(0.2)

  return (
    <section id="proyectos" className="min-h-screen flex flex-col justify-center px-[10%] py-20 bg-[#0a0a0a]">

      {/* Encabezado de la sección */}
      <motion.p {...fadeIn} className="text-cyan-400 text-sm tracking-widest uppercase mb-2">Lo que he construido</motion.p>
      <motion.h2 {...fadeIn} className="text-4xl font-bold text-white mb-16">Proyectos</motion.h2>

      {/* Grid de 2 columnas para las cards de proyectos */}
      <div className="grid grid-cols-2 gap-8">

        {/* Recorremos el array de projects y creamos una card por cada uno */}
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            {...useFadeIn(index * 0.15)}
            className="bg-[#111111] border border-gray-800 rounded-lg p-8 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Parte superior: nombre y descripción */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-3">{project.nombre}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.descripcion}</p>

              {/* Tags de tecnologías usadas */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-cyan-400 text-xs border border-cyan-400 border-opacity-30 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Link al proyecto en la parte inferior de la card */}
            <a href={project.link} className="text-cyan-400 text-sm font-semibold hover:underline">
              Ver proyecto →
            </a>

          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default Projects