import { useParams, Link } from 'react-router-dom';
import { resourcesData } from '../data/resources';

export default function ResourceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const resource = resourcesData.find((r) => r.id === id);

  if (!resource) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="font-inter font-black text-3xl text-[#1A1A1A] mb-4">
          Resource not found
        </h1>
        <Link
          to="/resources"
          className="font-inter font-bold text-[#1A1A1A] underline hover:text-[#FF3366]"
        >
          &larr; Back to resources
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        to="/resources"
        className="font-inter font-bold text-[#1A1A1A] underline hover:text-[#FF3366] mb-6 inline-block"
      >
        &larr; Back to resources
      </Link>

      <article className="bg-white border-3 border-[#1A1A1A] shadow-neo p-8">
        <h1 className="font-inter font-black text-3xl md:text-4xl text-[#1A1A1A] mb-4">
          {resource.title}
        </h1>

        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-[#FFD700] text-[#1A1A1A] font-inter font-bold text-xs px-2 py-1 border-2 border-[#1A1A1A]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {resource.detail && (
          <p className="font-inter text-lg text-[#1A1A1A] leading-relaxed">
            {resource.detail}
          </p>
        )}
      </article>
    </div>
  );
}