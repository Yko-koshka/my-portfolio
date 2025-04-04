import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
  return (
    <section className="my-12 text-center">
      <h2 className="text-3xl font-bold">Contact</h2>
      <div className="flex justify-center gap-6 mt-6">
        {[
          { icon: <FaGithub />, link: 'https://github.com' },
          { icon: <FaLinkedin />, link: 'https://linkedin.com' },
          { icon: <FaTelegram />, link: 'https://t.me' },
          { icon: <FaEnvelope />, link: 'mailto:email@example.com' },
        ].map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-300 transition"
          >
            {contact.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};
export default Contacts;
