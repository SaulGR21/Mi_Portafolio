// Hook personalizado para el efecto de escritura letra por letra
// Recibe un texto y lo va mostrando de forma progresiva
import { useState, useEffect } from 'react'

function useTypingEffect(texto) {
  // Estado que guarda el texto que se va mostrando en pantalla
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let i = 0

    // Cada 100ms agrega una letra más al display
    const intervalo = setInterval(() => {
      setDisplay(texto.slice(0, i + 1))
      i++

      // Cuando llegamos al final del texto, detenemos el intervalo
      if (i === texto.length) clearInterval(intervalo)
    }, 100)

    // Limpiamos el intervalo si el componente se desmonta
    return () => clearInterval(intervalo)
  }, [texto])

  // Regresamos el texto que se irá mostrando en el componente
  return display
}

export default useTypingEffect