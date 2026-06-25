import { motion } from 'framer-motion';

const FloatingGif = ({ src, delay }: { src: string; delay: number }) => (
  <motion.img
    src={src}
    className="absolute w-20 h-20 opacity-60"
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  />
);

export const SceneOne = ({ onOptionSelect }: { onOptionSelect: (option: string) => void }) => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-indigo-50 p-6 relative overflow-hidden">
      
      {/* GIF central superior */}
      <motion.img
        src="/gato_1.gif"
        className="w-32 h-32 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      />

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-center mb-8 z-10"
      >
        ¿Eres tú, Isa?
      </motion.h1>

      {/* GIF flotante inferior con el movimiento sugerido */}
      <motion.img
        src="/isa_face.gif"
        className="w-24 h-24 mb-10"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Botones de acción */}
      <div className="flex gap-4 z-10">
        <button 
          onClick={() => onOptionSelect("Sí")} 
          className="px-8 py-3 bg-pink-400 text-white rounded-full font-semibold shadow-lg active:scale-95 transition-transform"
        >
          Sí, soy yo
        </button>
        <button 
          onClick={() => onOptionSelect("No")} 
          className="px-8 py-3 bg-gray-300 text-gray-700 rounded-full font-semibold active:scale-95 transition-transform"
        >
          No soy
        </button>
      </div>
    </div>
  );
};
