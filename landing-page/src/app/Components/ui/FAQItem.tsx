"use client";
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-full py-4 bg-white shadow-inner justify-start items-center gap-[18px] inline-flex">
      <div className="grow shrink basis-0 text-slate-900 text-[23px] font-bold font-['DM Sans'] leading-7 cursor-pointer" onClick={toggleOpen}>
        {question}
      </div>
      <div className={`w-4 h-4 relative transform transition-transform ${isOpen ? "-rotate-180" : ""}`} onClick={toggleOpen}>
        <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-gray-900 transform rotate-45"></div>
      </div>
      {isOpen && (
        <div className="mt-2 text-slate-900 text-base font-medium font-['Inter'] leading-normal">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
