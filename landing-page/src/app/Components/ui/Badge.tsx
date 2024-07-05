import React from "react";
import Image from "next/image";

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="bg-emerald-50 border border-emerald-300 rounded-full px-4 py-2 inline-flex items-center">
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
