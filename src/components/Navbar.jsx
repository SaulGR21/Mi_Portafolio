function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-[5%] py-5 z-50 bg-transparent">
      
      {/*  Esta parte es del Logo */}
      <div className="text-2xl font-bold text-cyan-400 tracking-widest">
        SG
      </div>

      {/* Aqui estan los los Links */}
      <ul className="flex gap-8 list-none">
        <li><a href="#hero" className="text-white text-sm hover:text-cyan-400 transition-colors">Inicio</a></li>
        <li><a href="#sobre-mi" className="text-white text-sm hover:text-cyan-400 transition-colors">Sobre mí</a></li>
        <li><a href="#habilidades" className="text-white text-sm hover:text-cyan-400 transition-colors">Habilidades</a></li>
        <li><a href="#proyectos" className="text-white text-sm hover:text-cyan-400 transition-colors">Proyectos</a></li>
        <li><a href="#contacto" className="text-white text-sm hover:text-cyan-400 transition-colors">Contacto</a></li>
      </ul>

      {/* Botón */}
      <a href="#contacto" className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded text-sm hover:bg-cyan-400 hover:text-black transition-all">
        Hablemos
      </a>

    </nav>
  )
}

export default Navbar