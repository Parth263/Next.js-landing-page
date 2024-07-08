"use client";

import React, { useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import PricingCard from "./ui/PricingCard";
import ToggleSwitch from "./ui/ToggleSwitch";
import Badge from "./ui/Badge";

const pricingPlans = {
  monthly: [
    {
      planName: "Free",
      price: "$0",
      duration: "month",
      features: [
        { text: "Customizable figma files", available: true },
        { text: "Copywriting cheatcodes", available: true },
        { text: "High-quality images", available: true },
        { text: "SEO optimized", available: false },
        { text: "Free updates", available: false },
        { text: "24/7 support", available: false },
      ],
      buttonText: "Get started for free",
    },
    {
      planName: "Pro",
      price: "$19",
      duration: "month",
      features: [
        { text: "Customizable figma files", available: true },
        { text: "Copywriting cheatcodes", available: true },
        { text: "High-quality images", available: true },
        { text: "SEO optimized", available: true },
        { text: "Free updates", available: true },
        { text: "24/7 support", available: false },
      ],
      buttonText: "Get started",
    },
    {
      planName: "Premium",
      price: "$39",
      duration: "month",
      features: [
        { text: "Customizable figma files", available: true },
        { text: "Copywriting cheatcodes", available: true },
        { text: "High-quality images", available: true },
        { text: "SEO optimized", available: true },
        { text: "Free updates", available: true },
        { text: "24/7 support", available: true },
      ],
      buttonText: "Get started",
    },
  ],
  yearly: [
    {
      planName: "Free",
      price: "$0",
      duration: "year",
      features: [
        { text: "Customizable figma files", available: true },
        { text: "Copywriting cheatcodes", available: true },
        { text: "High-quality images", available: true },
        { text: "SEO optimized", available: false },
        { text: "Free updates", available: false },
        { text: "24/7 support", available: false },
      ],
      buttonText: "Get started for free",
    },
    {
      planName: "Pro",
      price: "$49",
      duration: "year",
      features: [
        { text: "Customizable figma files", available: true },
        { text: "Copywriting cheatcodes", available: true },
        { text: "High-quality images", available: true },
        { text: "SEO optimized", available: true },
        { text: "Free updates", available: true },
        { text: "24/7 support", available: false },
      ],
      buttonText: "Get started",
    },
    {
      planName: "Premium",
      price: "$69",
      duration: "year",
      features: [
        { text: "Customizable figma files", available: true },
        { text: "Copywriting cheatcodes", available: true },
        { text: "High-quality images", available: true },
        { text: "SEO optimized", available: true },
        { text: "Free updates", available: true },
        { text: "24/7 support", available: true },
      ],
      buttonText: "Get started",
    },
  ],
};

const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section id="pricing" className="bg-emerald-50 md:mt-24 mt-8">
      <div className="container max-w-[1280px] py-16 px-4 mx-auto flex flex-col items-center gap-3">
        <Badge text="Pricing" bgColor="bg-white" />
        <SectionTitle
          title="Pricing and Plans"
          description="Unlock the potential of our LaunchPage landing page template with versatile pricing plans tailored to your needs."
        />
        <div className="mb-10 -mt-4">
          <ToggleSwitch onToggle={handleToggle} isMonthly={isMonthly} />
        </div>

        <div  className="flex justify-center gap-8 flex-wrap">
          {pricingPlans[isMonthly ? "monthly" : "yearly"].map((plan, index) => (
            <PricingCard
              key={index}
              planName={plan.planName}
              price={plan.price}
              duration={plan.duration}
              features={plan.features}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;