import type { CardData } from '../data/types';
import Card from './Card';

interface CardGridProps {
  cards: CardData[];
  basePath?: string;
}

export default function CardGrid({ cards, basePath }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          linkTo={basePath ? `${basePath}/${card.id}` : undefined}
        />
      ))}
    </div>
  );
}