import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const content = [
  { text: "a pesar de todo...", img: "/g_9.gif", anim: { opacity: [0, 1] } },
  { text: "Extraño hablarte", img: "/g_10.png", anim: { scale: [0.9, 1] } },
  { text: "Extraño verte sonreír", img: "/g_11.png", anim: { y: [10, 0] } },
  { text: "Extraño abrazarte", img: "/g_12.png", anim: { scale: [1, 1.05, 1] } },
  { text: "Quiero saber si ya tomaste agüita", img: "/g_13.png", anim: { rotate: [-2, 2, 0] } },
  { text: "siento que eres especial y no quiero solo desaparecer", img: "/g_14.png", anim: { opacity: [0, 1] } },
];

export const SceneSix = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen p-6 bg-amber-50 flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div 
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, ...content[index].anim }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center px-4"
        >
          <img src={content[index].img} className="w-48 h-48 rounded-2xl shadow-xl mb-6 object-cover" />
          <p className="text-2xl font-serif italic text-amber-900 leading-relaxed">
            {content[index].text}
          </p>
        </motion.div>
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => index < content.length - 1 ? setIndex(index + 1) : onComplete()}
        className="mt-12 px-8 py-3 bg-amber-200 text-amber-900 rounded-full font-bold shadow-sm"
      >
        {index < content.length - 1 ? "Continuar" : "Última cosa..."}
      </motion.button>
    </div>
  );
};
