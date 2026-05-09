// Sección de Habilidades
// Importamos los datos desde constants para no mezclarlos con el diseño
import { skills } from '../constants/skills'

function Skills() {
  return (
    // min-h-screen para que ocupe toda la pantalla
    <section id="habilidades" className="min-h-screen flex flex-col justify-center px-[10%] py-20 bg-[#0a0a0a]">

      {/* Encabezado de la sección */}
      <p className="text-cyan-400 text-sm tracking-widest uppercase mb-2">Lo que sé hacer</p>
      <h2 className="text-4xl font-bold text-white mb-16">Habilidades</h2>

      {/* Grid de 3 columnas, una card por cada habilidad */}
      <div className="grid grid-cols-3 gap-6">

        {/* Recorremos el array de skills y creamos una card por cada uno */}
        {skills.map(skill => (
          <div key={skill.id} className="bg-[#111111] border border-gray-800 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300">
            
            {/* Título y descripción vienen de constants/skills.js */}
            <h3 className="text-white text-xl font-semibold mb-3">{skill.titulo}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{skill.descripcion}</p>
            
            {/* Tags: recorremos el array de tags de cada skill */}
            <div className="flex flex-wrap gap-2">
              {skill.tags.map(tag => (
                <span key={tag} className="text-cyan-400 text-xs border border-cyan-400 border-opacity-30 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills