import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export const sendNotification = (sceneName: string) => {
  console.log(`SERVICE_ID ${SERVICE_ID}`);
  console.log(`TEMPLATE_ID ${TEMPLATE_ID}`);
  console.log(`PUBLIC_KEY ${PUBLIC_KEY}`);
  emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    message: `Isa ha llegado a: ${sceneName} a las ${new Date().toLocaleTimeString()}`,
  }, PUBLIC_KEY)
  .then(() => console.log('Notificación enviada'))
  .catch((err) => console.error('Error al enviar:', err));
};
