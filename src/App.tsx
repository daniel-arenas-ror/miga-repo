import { useState } from 'react';
import useSound from 'use-sound';
import { SceneOne } from './components/SceneOne';
import { SceneTwo } from './components/SceneTow';
import { SceneThree } from './components/SceneThree';
import { SceneFour } from './components/SceneFour';
import { SceneFive } from './components/SceneFive';
import { SceneSix } from './components/SceneSix';
import { FinalScene } from './components/FinalScene';
import { sendNotification } from './services/emailService';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'

function App() {
  const [currentScene, setCurrentScene] = useState(1);
  const [play, { stop }] = useSound('/step_2.mp3', { volume: 0.5 });
  const [toda_ciudad_play] = useSound('/toda_esta_ciudad.mp3', { volume: 0.5 });

  const handleOptionSelect = (option: string) => {
    if (option === "Sí") {
      // Aquí avanzaremos a la escena 2 cuando la tengamos
      handleNextScene();
      play();
    } else {
      // Puedes manejar qué pasa si presiona "No" (ej. un mensaje divertido)
      alert("¡Ah! Entonces me equivoqué de persona, ¡qué pena! 😊");
    }
  };

  const handleSceneThreeComplete = () => {
    setCurrentScene(4)
    stop()
    toda_ciudad_play()
  }

  const handleNextScene = () => {
    setCurrentScene((prev) => prev + 1);
    console.log(`Escena ${currentScene}`)
    //sendNotification(`Escena ${currentScene}`);
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScene === 1 && (
          <motion.div
            key="scene1"
            exit={{ opacity: 0, x: -100 }}
            className="w-full h-full"
          >
            <SceneOne onOptionSelect={handleOptionSelect} />
          </motion.div>
        )}

        {currentScene === 2 && (
          <SceneTwo onComplete={() => handleNextScene()} />
        )}

        {currentScene === 3 && (
          <SceneThree onComplete={() => handleSceneThreeComplete()} />
        )}

        {currentScene === 4 && (
          <SceneFour onComplete={() => handleNextScene()} />
        )}

        {currentScene === 5 && (
          <SceneFive onComplete={() => handleNextScene()} />
        )}

        {currentScene === 6 && (
          <SceneSix onComplete={() => handleNextScene()} />
        )}

        {currentScene === 7 && (
          <FinalScene />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
