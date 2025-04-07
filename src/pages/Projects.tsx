import { motion } from 'framer-motion';
import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="py-28 bg-emerald-50 text-emerald-900 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold text-center text-emerald-600">
          Projects
        </h2>
        <div className="flex justify-center flex-wrap gap-6 mt-6">
          {projects.map((project) => (
            <motion.div key={project.id} whileHover={{ scale: 1.05 }}>
              <div className="card bg-white p-6 rounded-xl shadow-md border border-emerald-300 w-96">
                <figure className="px-10 pt-10">
                  <img
                    src={project.imgSrc}
                    alt={`Preview of ${project.title}`}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-emerald-700">
                    {project.title}
                  </h3>
                  <p className="text-gray-700">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4 justify-center">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-flex items-center gap-1 text-emerald-600 hover:underline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-flex items-center gap-1 text-gray-700 hover:underline"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
