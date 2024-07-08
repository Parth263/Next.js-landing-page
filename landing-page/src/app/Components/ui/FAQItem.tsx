"use client";
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="w-[345px] md:w-[800px] py-4 border-b border-gray-200">
      <button className="flex justify-between items-center w-full" onClick={toggle}>
        <h3 className="text-slate-800 text-md font-semibold text-left">{question}</h3>
        <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 20 20">
            <path d="M5 8l5 5 5-5H5z" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="mt-2 overflow-hidden">
          <p className="text-gray-600 text-sm font-inter font-medium break-words">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;