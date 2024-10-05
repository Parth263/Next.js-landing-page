import React from "react";
import Image from "next/image";

interface BadgeProps {
  text: string;
  bgColor?: string;
  className?: string; 
}

const Badge: React.FC<BadgeProps> = ({ text, bgColor = "bg-teal-50", className = "" }) => {
  return (
    <div className={`${bgColor} border border-teal-200 shadow-md shadow-teal-100 rounded-full px-4 py-2 mb-4 inline-flex items-center ${className}`}>
      <Image
        src="/AI Generate A lined.svg"
        alt="Badge icon"
        width={19}
        height={18}
        className="mr-2"
      />
      <span className="text-teal-800 text-sm font-bold">{text}</span>
    </div>
  );
};

export default Badge;
