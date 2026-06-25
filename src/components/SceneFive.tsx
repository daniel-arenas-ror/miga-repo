import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const content = [
  { text: "me prometí no volverte a escribir 😞", img: "/g_5.png", anim: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } } },
  { text: "dándote un espacio a que respiraras", img: "/g_6.png", anim: { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 } } },
  { text: "🤔 aunque .... (técnicamente no te estoy escribiendo 😅🤓)", img: "/g_7.png", anim: { initial: { opacity: 0, rotate: -15 }, animate: { opacity: 1, rotate: 0 } } },
  { text: "siento que algo pasó, algo cambió y no sé qué fue 🥺", img: "/g_8.gif", anim: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } } },
];

export const SceneFive = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < content.length - 1) {
      setIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen p-6 bg-blue-50 flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div 
          key={index}
          initial={content[index].anim.initial}
          animate={content[index].anim.animate}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <img src={content[index].img} className="w-48 h-48 rounded-2xl shadow-xl mb-6 object-cover" />
          <p className="text-xl font-semibold text-gray-800 text-center px-4">
            {content[index].text}
          </p>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handleNext}
        className="px-8 py-3 bg-blue-500 text-white rounded-full font-bold shadow-lg active:scale-95"
      >
        {"Siguiente"}
      </button>
    </div>
  );
};
