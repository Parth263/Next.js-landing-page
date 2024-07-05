import React from "react";
import Badge from "./ui/Badge";
import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./ui/TestimonialCard";

const testimonials = [
  {
    image: "https://via.placeholder.com/54x54",
    quote: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
    name: "Isabella Chavez",
    title: "Graphic Designer",
  },
  {
    image: "https://via.placeholder.com/54x54",
    quote: "“The template is great, it saved me a lot of time and effort.”",
    name: "John Doe",
    title: "Web Developer",
  },
  {
    image: "https://via.placeholder.com/54x54",
    quote: "“Fantastic product, I'm very happy with the results!”",
    name: "Jane Smith",
    title: "Entrepreneur",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="container mx-auto flex flex-col items-center gap-3">
        <Badge text="Testimonials" />
        <SectionTitle
          title="What Our Users Are Saying"
          description="Discover how our LaunchPage template has transformed the way businesses launch their products."
        />
        <div className="flex justify-center gap-14 flex-wrap">
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
