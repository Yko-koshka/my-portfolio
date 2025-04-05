import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="h-screen py-12 pt-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold text-center text-emerald-600">
          Projects
        </h2>
        <div className="flex justify-center flex-wrap gap-6 mt-6">
          {[1, 2, 3, 4].map((project) => (
            <motion.div key={project} whileHover={{ scale: 1.05 }}>
              <div className="card bg-emerald-100 w-96 shadow-md">
                <figure className="px-10 pt-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Project Preview"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-emerald-700">
                    Project {project}
                  </h2>
                  <p className="text-gray-700">
                    Brief description of the project.
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-primary bg-emerald-500 hover:bg-emerald-700 text-white">
                      View
                    </button>
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
