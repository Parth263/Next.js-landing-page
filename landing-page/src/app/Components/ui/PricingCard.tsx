import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface PricingCardProps {
  planName: string;
  price: string;
  duration: string;
  features: { text: string; available: boolean }[];
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ planName, price, duration, features, buttonText }) => {
  return (
    <div className="w-[336px] h-auto p-6 bg-white rounded-[10px] border border-gray-200 flex flex-col gap-6 hover:shadow-md">
      <div className="flex justify-between items-center">
        <div className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full">
          <span className="text-teal-700 text-sm font-bold uppercase tracking-widest">{planName}</span>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-gray-900 text-4xl font-bold">{price}</span>
        <span className="text-gray-600 text-base mb-1">/{duration}</span>
      </div>
      <div className="flex flex-col gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            {feature.available ? (
              <CheckCircle className="w-5 h-5 text-teal-600" />
            ) : (
              <XCircle className="w-5 h-5 text-gray-400" />
            )}
            <span className={`text-base ${feature.available ? 'text-gray-700' : 'text-gray-400'}`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
      <button className="w-full py-3 bg-teal-700 text-white text-lg font-bold rounded-lg hover:bg-teal-800 transition-colors">
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;