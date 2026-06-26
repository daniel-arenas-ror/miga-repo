import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { text: "Tap para continuar", pos: "top-1/4" },
  { text: "Ahora presiona aquí", pos: "bottom-1/3" },
  { text: "Eso, sigue.... ahora presiona aquí", pos: "right-1/4" },
  { text: "me gusta que me hagas caso 🤣", pos: "left-1/3" }
];

export const SceneThree = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  const handleTap = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="h-screen w-full bg-indigo-50 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.button
          key={step}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleTap}
          className={`absolute ${steps[step].pos} px-6 py-4 bg-pink-500 text-white rounded-2xl shadow-xl font-bold`}
        >
          {steps[step].text}
        </motion.button>
      </AnimatePresence>

      {(step === 3) && (
        <div className="h-screen flex flex-col items-center justify-center bg-white p-6">
          <motion.img 
            src={`${import.meta.env.BASE_URL}/siri_2.png`}
            className="w-64 h-64 mb-10"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
        </div>
      )}
    </div>
  );
};
