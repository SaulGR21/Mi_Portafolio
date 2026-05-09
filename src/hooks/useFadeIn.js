// Hook que regresa las propiedades de animación para reutilizarlas
// en cualquier sección sin repetir código
function useFadeIn(delay = 0) {
  return {
    // Empieza invisible, más abajo y ligeramente reducido
    initial: { opacity: 0, y: 80, scale: 0.95 },

    // Cuando entra en pantalla sube, aparece y crece a tamaño normal
    whileInView: { opacity: 1, y: 0, scale: 1 },

    // Solo anima una vez
    viewport: { once: true, amount: 0.2 },

    // Animación con rebote al final para que se sienta más viva
    transition: { 
      duration: 0.7, 
      delay,
      type: "spring",
      stiffness: 80,
      damping: 12
    }
  }
}

export default useFadeIn