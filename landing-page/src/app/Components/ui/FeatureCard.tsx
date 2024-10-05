import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  iconUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconUrl,
}) => (
  <div className="w-full p-6 bg-teal-50 rounded-xl flex flex-col justify-start items-start gap-6 hover:shadow-md">
    <div className="p-3 bg-teal-600 rounded-full flex items-center justify-center">
      <img src={iconUrl} alt={`${title} icon`} className="w-6 h-6" />
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-gray-900 md:text-2xl text-xl font-bold">{title}</div>
      <div className="text-slate-600 text-base font-medium">{description}</div>
    </div>
  </div>
);

export default FeatureCard;
