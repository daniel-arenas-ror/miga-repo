import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const messages = [
  { progress: 0, text: "cargando texto..." },
  { progress: 5, text: "cargando imágenes..." },
  { progress: 10, text: "cargando sonido..." },
  { progress: 25, text: "cargando memes de gatos gordos... estos están pesados..." },
  { progress: 50, text: "la verdad no estoy cargando nada, solo te estoy haciendo perder el tiempo..." },
  { progress: 75, text: "mira, ya llegó a 75%" },
  { progress: 50, text: "se devolvió a 50%... ¡hp vida!" },
  { progress: 90, text: "ya casi, baby... paciencia" },
  { progress: 1, text: "¡HAA! tienes un internet bien malo, Isa" },
  { progress: 99, text: "Mentiras jejeje, ya estamos listos" },
  { progress: 100, text: "¡Listo!" }
];

export const SceneTwo = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 1000); // Pasa a escena 3 al terminar
    }
  }, [index, onComplete]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white p-6">
      {/* GIF saltarín */}
      <motion.img 
        src={`${import.meta.env.BASE_URL}lazy-cat.gif`}
        className="w-64 h-32 mb-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
      />

      {/* Barra de progreso */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
        <motion.div 
          className="bg-pink-500 h-4"
          animate={{ width: `${messages[index].progress}%` }}
        />
      </div>

      {/* Mensaje dinámico */}
      <p className="text-xl font-medium text-center">
        {messages[index].text}
      </p>
    </div>
  );
};
