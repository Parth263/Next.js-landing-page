import React from "react";
import Badge from "./ui/Badge";
import SectionTitle from "./ui/SectionTitle";
import FAQItem from "./ui/FAQItem";

const faqItems = [
  {
    question: "Is it accessible?",
    answer: "Yes, our templates are designed with accessibility in mind to ensure they are usable by everyone."
  },
  {
    question: "Is it styled?",
    answer: "Yes, our templates come with modern and clean styles that you can easily customize."
  },
  {
    question: "Is it animated?",
    answer: "Yes. It's animated by default, but you can disable it if you prefer."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-12">
        <Badge text="FAQ" />
        <SectionTitle
          title="Frequently Asked Questions"
          description="Discover the benefits of our Next.js landing page template, designed to help you launch quickly and effectively."
        />
        <div className="self-stretch pl-10 pr-6 py-6 flex flex-col justify-start items-start gap-6 bg-white rounded-lg shadow-md">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
