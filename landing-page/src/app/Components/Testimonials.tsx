import React from "react";
import Badge from "./ui/Badge";
import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./ui/TestimonialCard";

const testimonials = [
  {
    image: "Oval.svg",
    quote: "LaunchPage has completely transformed our product launch process. The intuitive design and powerful features allowed us to create a stunning landing page in record time. Our conversion rates have skyrocketed.",
    name: "Isabella Chavez",
    title: "Director of Marketing, TechNova Inc.",
  },
  {
    image: "Oval2.svg",
    quote: "As a solo entrepreneur, I was struggling to create a professional-looking website that truly represented my brand. LaunchPage came to the rescue with its user-friendly interface and customizable components. I was able to launch my product in just two days.",
    name: "John Doe",
    title: "Founder, EcoSmart Solutions",
  },
  {
    image: "Oval3.svg",
    quote: "I've used numerous landing page builders in my career, but LaunchPage stands head and shoulders above the rest. The attention to detail in design, the seamless integration with our existing tools.",
    name: "Jane Smith",
    title: "CMO, GlobalTech Innovations",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full px-4 py-16 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <Badge text="Testimonials" />
        <SectionTitle
          title="What Users Are Saying"
          description="Discover how our LaunchPage template has transformed the way businesses launch their products."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;