import React from "react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const Hero: React.FC = () => {
  return (
    <section id="/" className="container mx-auto px-4 py-12 flex flex-col items-start text-start md:items-center md:text-center">
      <div className=" mt-10">
      <Badge text="Launch your Landing Page" />
      </div>
     
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-neutral-900 mt-6 font-bold leading-snug sm:leading-snug md:leading-snug max-w-4xl">
  Maximize Your Launch Success with{" "}
  <span className="text-blue-600 underline">High-converting</span> Template
</h1>

      <p className="text-slate-600 text-base sm:text-lg font-medium mt-8 mb-8 max-w-[400px] md:max-w-[500px]">
        Create a stunning landing page effortlessly with our free template,
        optimized for conversions.
      </p>

      <div className="flex flex-row gap-4 ">
        <Button
          text="Get it for Free"
          variant="primary"
          size="medium"
          className="rounded-lg font-bold transition-colors hover:bg-teal-800 text-white" 
        />
        <Button
          text="Watch Demo"
          variant="outline"
          size="medium"
          iconUrl="/playVector.svg"
        />
      </div>
    </section>
  );
};

export default Hero;