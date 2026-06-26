import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const content = [
  { text: "Isa, solo quería hablarte", img: `${import.meta.env.BASE_URL}g_1.jpeg`, anim: { y: [20, 0] } },
  { text: "saber de ti 🥹", img: `${import.meta.env.BASE_URL}g_2.jpeg`, anim: { scale: [0.8, 1] } },
  { text: "de cómo te sientes", img: `${import.meta.env.BASE_URL}g_3.png`, anim: { x: [-20, 0] } },
  { text: "¿qué ha pasado con tu vida?", img: `${import.meta.env.BASE_URL}g_4.png`, anim: { rotate: [-5, 0] } },
];

export const SceneFour = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < content.length - 1) {
      setIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen p-6 bg-pink-50 flex flex-col items-center justify-center">
      {/* Mostramos solo el contenido hasta el índice actual */}
      <div className="flex flex-col items-center gap-8 mb-12">
        <AnimatePresence>
          <motion.div 
            key={index}
            initial={{ opacity: 0, ...content[index].anim }}
            animate={{ opacity: 1, ...content[index].anim }}
            className="flex flex-col items-center"
          >
            <img 
              src={content[index].img} 
              className="w-40 h-40 rounded-full shadow-lg mb-4 object-cover" 
            />
            <p className="text-xl font-medium text-gray-800 text-center">
              {content[index].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botón de Tap */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        className="px-8 py-4 bg-pink-400 text-white rounded-full font-bold shadow-lg"
      >
        Siguiente...
      </motion.button>
      
    </div>
  );
};
