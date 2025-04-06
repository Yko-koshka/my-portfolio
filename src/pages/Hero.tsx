import { motion } from 'framer-motion';
import Avatar from '../assets/avatar.jpg';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-emerald-50 text-emerald-900">
      <motion.img
        src={Avatar}
        alt="Hanna Leheza"
        className="w-32 h-32 object-contain mx-auto rounded-full shadow-xl border-4 border-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-5xl font-bold mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Front-End Developer
      </motion.h1>
      <p className="mt-2 text-lg opacity-90">
        Angular | React | TypeScript | UI/UX
      </p>
    </section>
  );
};

export default Hero;
