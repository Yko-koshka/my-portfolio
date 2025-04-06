import { motion } from 'framer-motion';
import { PiDownloadSimpleBold } from 'react-icons/pi';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const About = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-emerald-50 text-emerald-900">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-600">
          About Me
        </h2>
        <p className="mt-4 max-w-xl text-base sm:text-lg text-gray-700">
          Hi! I'm a Front-End Developer creating beautiful and user-friendly
          interfaces with <strong>React</strong>, <strong>Angular</strong>, and{' '}
          <strong>TypeScript</strong>.
        </p>

        <motion.a
          href="/cv/Hanna_Leheza_CV.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 px-6 py-2 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.6 }}
          >
            <PiDownloadSimpleBold size={20} />
          </motion.span>
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
