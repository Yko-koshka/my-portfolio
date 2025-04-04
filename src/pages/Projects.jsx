import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="flex justify-center flex-wrap gap-6 mt-6">
        {[1, 2, 3, 4].map((project) => (
          <motion.div key={project} whileHover={{ scale: 1.05 }}>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>a body part</p>
                <div className="card-actions">
                  <button className="btn btn-primary">View</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
