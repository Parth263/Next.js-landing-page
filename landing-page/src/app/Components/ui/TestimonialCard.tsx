import React from "react";

interface TestimonialCardProps {
  image: string;
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, quote, name, title }) => {
  return (
    <article className="w-full max-w-[323px] h-[400px] p-6 bg-emerald-25 rounded-[10px] border border-emerald-100 flex flex-col justify-between gap-6 transition-shadow hover:shadow-md">
      <img 
        className="w-16 h-16 rounded-full object-cover" 
        src={image} 
        alt={name} 
      />
      <blockquote className="flex-grow flex items-center">
        <p className="text-gray-600 text-md font-inter">{quote}</p>
      </blockquote>
      <footer className="mt-auto">
        <cite className="block text-gray-900 text-xl font-bold leading-tight">
          {name}
        </cite>
        <p className="text-gray-600 text-sm mt-1">{title}</p>
      </footer>
    </article>
  );
};

export default TestimonialCard;