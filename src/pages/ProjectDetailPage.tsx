import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="font-inter font-black text-3xl text-[#1A1A1A] mb-4">
          Project not found
        </h1>
        <Link
          to="/projects"
          className="font-inter font-bold text-[#1A1A1A] underline hover:text-[#FF3366]"
        >
          &larr; Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        to="/projects"
        className="font-inter font-bold text-[#1A1A1A] underline hover:text-[#FF3366] mb-6 inline-block"
      >
        &larr; Back to projects
      </Link>

      <article className="bg-white border-3 border-[#1A1A1A] shadow-neo p-8">
        <h1 className="font-inter font-black text-3xl md:text-4xl text-[#1A1A1A] mb-4">
          {project.title}
        </h1>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-[#FFD700] text-[#1A1A1A] font-inter font-bold text-xs px-2 py-1 border-2 border-[#1A1A1A]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {project.detail && (
          <p className="font-inter text-lg text-[#1A1A1A] leading-relaxed mb-6">
            {project.detail}
          </p>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD700] text-[#1A1A1A] font-inter font-extrabold px-6 py-3 border-3 border-[#1A1A1A] shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-300"
          >
            View on GitHub
          </a>
        )}
      </article>
    </div>
  );
}