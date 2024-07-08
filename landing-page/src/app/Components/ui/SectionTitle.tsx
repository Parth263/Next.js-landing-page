import React from "react";

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center gap-2.5 mb-8">
      <h2 className="text-center text-slate-800 text-3xl md:text-4xl  font-bold leading-10">
        {title}
      </h2>
      <p className="text-center text-gray-900 text-base font-medium opacity-70 max-w-[500px]">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
