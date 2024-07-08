import React from "react";
import Badge from "./ui/Badge";
import Image from "next/image";
import StepCard from "./ui/StepCard";
import SectionTitle from "./ui/SectionTitle";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create an account to start building your landing page effortlessly.",
  },
  {
    number: "2",
    title: "Choose a Template",
    description: "Select from a variety of customizable templates that suit your needs.",
  },
  {
    number: "3",
    title: "Launch",
    description: "Deploy your landing page with just a few clicks and start attracting visitors.",
  },
];

const Workflow: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 mx-auto max-w-5xl py-12 px-4">
      <div className="flex flex-col items-center gap-2.5">
        <Badge text="Steps" />
        <SectionTitle 
        title="How it Works?"
        description="Simple and easy Steps to Launch Your Landing Page quickly"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-3 items-center -ml-32 px-12">
        <div className="w-full md:w-2/3 flex justify-center">
          <Image src="/Image wrapper.svg" alt="Workflow illustration" width={1200} height={1200} />
        </div>
        <div className="relative w-full md:w-1/3 flex flex-col">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;

