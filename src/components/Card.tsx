import { Link } from 'react-router-dom';
import type { CardData } from '../data/types';

interface CardProps {
  card: CardData;
  linkTo?: string;
}

export default function Card({ card, linkTo }: CardProps) {
  const content = (
    <article
      className="bg-white border-3 border-[#1A1A1A] shadow-neo p-6 rotate-1 hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-300 h-full flex flex-col focus-visible:outline-4 focus-visible:outline-[#FF3366] focus-visible:outline-offset-2"
      tabIndex={linkTo ? 0 : undefined}
    >
      <h3 className="font-inter font-extrabold text-xl text-[#1A1A1A] mb-2">
        {card.title}
      </h3>
      {card.description && (
        <p className="font-inter text-sm md:text-base text-[#1A1A1A] mb-3 flex-1">
          {card.description}
        </p>
      )}
      {card.tags && card.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-[#FFD700] text-[#1A1A1A] font-inter font-bold text-xs px-2 py-1 border-2 border-[#1A1A1A]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        className="block focus-visible:outline-4 focus-visible:outline-[#FF3366] focus-visible:outline-offset-2"
      >
        {content}
      </Link>
    );
  }

  return content;
}