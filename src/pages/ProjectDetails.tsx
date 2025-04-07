import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center py-24">
        <h2 className="text-3xl text-red-600 font-bold mb-4">
          Project not found
        </h2>
        <Link to="/projects" className="text-emerald-600 underline">
          ← Back to project list
        </Link>
      </div>
    );
  }

  return (
    <section className="py-28 px-4 max-w-4xl mx-auto text-emerald-900">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-6">
        {project.title}
      </h1>

      <img
        src={project.imgSrc}
        alt={project.title}
        className="rounded-xl shadow-lg w-full max-h-[400px] object-cover mb-8"
      />

      <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
        {project.description}
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {project.stack.map((tech, idx) => (
          <span
            key={idx}
            className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-center gap-6 mb-8">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-emerald-600 hover:underline"
        >
          🌐 Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-700 hover:underline"
        >
          🐙 GitHub
        </a>
      </div>

      <div className="text-center">
        <Link to="/projects" className="text-emerald-600 underline">
          ← Back to all projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
