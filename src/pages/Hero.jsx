import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="text-center py-12">
      <motion.img
        src="/avatar.png"
        alt="Avatar"
        className="w-32 h-32 mx-auto rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-4xl font-bold mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Front-End Developer
      </motion.h1>
      <p className="mt-2 text-lg">Angular | React | TypeScript | UI/UX</p>
    </section>
  );
};
export default Hero;
