import React from 'react';
import { Calendar } from 'lucide-react';

interface InsightCardProps {
  title: string;
  date: string;
  image?: string;
  slug: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ title, date, image, slug }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="relative w-full pb-[56.25%]">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-text-secondary mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <time>{date}</time>
        </div>
        <h3 className="font-heading text-xl font-semibold mb-4 text-text hover:text-accent transition-colors">
          <a href={`/insights/${slug}`}>{title}</a>
        </h3>
        <a 
          href={`/insights/${slug}`}
          className="inline-flex items-center text-accent hover:text-text-secondary transition-colors"
        >
          Read More
        </a>
      </div>
    </article>
  );
};

export default InsightCard;