import { useState } from 'react';
import { motion } from 'framer-motion';

export const FinalScene = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    // Aumentamos un poco el rango para que sea más divertido
    const x = Math.random() * 300 - 150; 
    const y = Math.random() * 300 - 150;
    setPosition({ x, y });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-50 p-6 text-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-8">
        ¿Qué dices? Me encantaría que charláramos ...
      </h2>

      {/* Botón de WhatsApp - Ahora azul vibrante */}
      <a
        href="https://wa.me/+573002467379?text=Hola%20vamos%20por%20un%20Helado/Cafe"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 px-8 py-4 bg-blue-500 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-600 transition-all active:scale-95"
      >
        ¡Vamos por ese café! ☕
      </a>

      {/* Botón de Cancelar - Contrastando sutilmente */}
      <motion.button
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        onMouseEnter={moveButton} // Se mueve al acercar el mouse (PC)
        onClick={moveButton} // Se mueve al tocar (Móvil)
        className="px-6 py-2 bg-blue-200 text-blue-800 rounded-full font-medium"
      >
        No, gracias
      </motion.button>
    </div>
  );
};