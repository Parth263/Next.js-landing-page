import React from "react";
import FeatureCard from "./ui/FeatureCard";
import Badge from "./ui/Badge";
import SectionTitle from "./ui/SectionTitle";

const features = [
  {
    title: "Fast Setup",
    description:
      "Get your landing page up and running in minutes with our easy-to-use template.",
    iconUrl: "zap1.svg", 
  },
  {
    title: "Customizable",
    description:
      "Easily customize your landing page to match your brand and style.",
    iconUrl: "stack-line.svg", 
  },
  {
    title: "Responsive Design",
    description:
      "Ensure your landing page looks great on all devices, from desktops to mobiles.",
    iconUrl: "shape-2-line.svg", 
  },
  {
    title: "SEO Optimized",
    description:
      "Boost your search engine rankings with our SEO-friendly templates.",
    iconUrl: "terminal-box-line.svg", 
  },
  {
    title: "Fast Performance",
    description: "Enjoy fast loading times and a smooth user experience.",
    iconUrl: "line-chart-fill.svg", 
  },
  {
    title: "24/7 Support",
    description: "Get round-the-clock support to help you with any issues.",
    iconUrl: "/zap.svg", 
  },
];

const Features: React.FC = () => {
  return (
    <div id="features" className="flex flex-col items-center gap-3 mx-auto max-w-[1280px] py-16 px-4">
      <Badge text="Features" />
      <SectionTitle
        title="Attractive & Easy-to-Use"
        description="Our tempelate is designed to make it easy for you to create a stunning landing page and get it up and running quickly."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            iconUrl={feature.iconUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
