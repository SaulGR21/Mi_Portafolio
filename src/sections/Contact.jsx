// Sección de Contacto
// Maneja el formulario con useState para controlar los campos y validaciones
import { useState } from 'react'

function Contact() {
  // Estado que guarda los valores de cada campo del formulario
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })

  // Estado para mostrar mensajes de error o éxito
  const [status, setStatus] = useState('')

  // Actualiza el estado cada vez que el usuario escribe en un campo
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Valida y procesa el formulario al hacer submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // Verificamos que todos los campos estén llenos
    if (!form.nombre || !form.email || !form.mensaje) {
      setStatus('error')
      return
    }

    // Verificamos que el email tenga formato válido
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    if (!emailValido) {
      setStatus('emailError')
      return
    }

    // Si todo está bien mostramos éxito y limpiamos el formulario
    setStatus('success')
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  return (
    // min-h-screen para ocupar toda la pantalla
    <section id="contacto" className="min-h-screen flex flex-col justify-center px-[10%] py-20 bg-[#0a0a0a]">

      {/* Encabezado */}
      <p className="text-cyan-400 text-sm tracking-widest uppercase mb-2">Trabajemos juntos</p>
      <h2 className="text-4xl font-bold text-white mb-16">Contacto</h2>

      {/* Dos columnas: info a la izquierda, formulario a la derecha */}
      <div className="grid grid-cols-2 gap-16">

        {/* Columna izquierda — información de contacto */}
        <div className="flex flex-col gap-8">
          <p className="text-gray-400 text-base leading-relaxed">
            ¿Tienes un proyecto en mente? Me encantaría escucharte. Estoy disponible para proyectos freelance y colaboraciones.
          </p>

          {/* Email */}
          <div>
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-1">Email</p>
            <p className="text-white">saul@email.com</p>
          </div>

          {/* Ubicación */}
          <div>
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-1">Ubicación</p>
            <p className="text-white">Mazatlán, México</p>
          </div>

          {/* Disponibilidad */}
          <div>
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-1">Disponibilidad</p>
            <p className="text-white">Disponible para proyectos</p>
          </div>
        </div>

        {/* Columna derecha — formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Campo nombre */}
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            className="bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-all"
          />

          {/* Campo email */}
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={form.email}
            onChange={handleChange}
            className="bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-all"
          />

          {/* Campo mensaje */}
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            value={form.mensaje}
            onChange={handleChange}
            rows={5}
            className="bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-all resize-none"
          />

          {/* Mensajes de error o éxito */}
          {status === 'error' && (
            <p className="text-red-400 text-sm">Por favor llena todos los campos.</p>
          )}
          {status === 'emailError' && (
            <p className="text-red-400 text-sm">Por favor ingresa un email válido.</p>
          )}
          {status === 'success' && (
            <p className="text-cyan-400 text-sm">¡Mensaje enviado con éxito!</p>
          )}

          {/* Botón de envío */}
          <button
            type="submit"
            className="bg-cyan-400 text-black px-8 py-3 rounded font-semibold hover:bg-cyan-300 transition-all mt-2"
          >
            Enviar mensaje
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact