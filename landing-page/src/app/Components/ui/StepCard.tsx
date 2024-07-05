import React from "react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
  <div className="relative w-full sm:w-[404px] p-6 flex flex-col gap-5">
    <div className="absolute top-6 left-0 w-[43px] h-[43px] rounded-full bg-blue-600 bg-opacity-10 flex items-center justify-center">
      <span className="text-blue-600 text-[17px] font-normal leading-loose">{number}</span>
    </div>
    <div className="ml-14">
      <h3 className="text-gray-900 text-[23px] font-bold">{title}</h3>
      <p className="opacity-70 text-gray-800 text-base font-medium">{description}</p>
    </div>
  </div>
);

export default StepCard;
