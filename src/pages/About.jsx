import { motion } from 'framer-motion';
import { PiDownloadSimpleBold } from 'react-icons/pi'; // Иконка скачивания

const About = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-emerald-50 text-emerald-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-600">
          About Me
        </h2>
        <p className="mt-4 max-w-xl text-base sm:text-lg text-gray-700">
          Hi! I'm a Front-End Developer creating beautiful and user-friendly
          interfaces with <strong>React</strong>, <strong>Angular</strong>, and{' '}
          <strong>TypeScript</strong>.
        </p>

        {/* Download button */}
        <motion.a
          href="/cv/Hanna_Leheza_CV.pdf" // <-- Укажи путь к своему резюме
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-emerald-700 transition-colors"
        >
          <motion.span
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.6 }}
          >
            <PiDownloadSimpleBold size={22} />
          </motion.span>
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
