import React from "react";
import FAQItem from "./ui/FAQItem";
import Badge from "./ui/Badge";
import SectionTitle from "./ui/SectionTitle";

const faqData = [
  {
    question: "Is the landing page template free?",
    answer:
      "Yes, our landing page template is completely free to use. It's designed to help developers quickly launch their projects without compromising on quality or performance.",
  },
  {
    question: "Does the template use Next.js?",
    answer:
      "Absolutely! Our template is built using Next.js, leveraging its server-side rendering capabilities for faster page loads and improved SEO. This makes our template ideal for projects that need quick scalability and robust performance.",
  },
  {
    question: "Is there a Figma file available for the template?",
    answer:
      "Yes, we provide a Figma file with the template. This allows you to easily customize the design to fit your specific needs before diving into the development process. The Figma file is structured to be intuitive for both designers and developers.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <div id="faq" className="max-w-[800px] mx-auto p-4 py-16">
      <div className="flex flex-col items-center gap-3">
        <Badge text="FAQs" />
        <SectionTitle
          title="Frequently Asked Questions"
          description="Get quick answers to common questions about our free Next.js landing page template and resources."
        />
      </div>
      <div className="mt-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />)
        )}
      </div>
    </div>
  );
};

export default FAQSection;
