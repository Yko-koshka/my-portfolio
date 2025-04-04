import { motion } from 'framer-motion';
import { FaReact, FaAngular } from 'react-icons/fa';
const Skills = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
      {[
        { name: 'React', icon: <FaReact className="text-blue-400 text-4xl" /> },
        {
          name: 'Angular',
          icon: <FaAngular className="text-red-500 text-4xl" />,
        },
        { name: 'TypeScript', icon: 'TS' },
        { name: 'Figma', icon: '🎨' },
      ].map((skill, index) => (
        <motion.div key={index} whileHover={{ scale: 1.1 }}>
          <div className="card rounded-2xl shadow-xl bg-black/20 p-6 text-center">
            <div className="card-body flex flex-col items-center">
              {skill.icon}
              <span className="mt-2 text-xl font-semibold">{skill.name}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};
export default Skills;
