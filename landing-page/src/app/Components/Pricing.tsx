"use client";

import React, { useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import PricingCard from "./ui/PricingCard";
import ToggleSwitch from "./ui/ToggleSwitch";

const pricingPlans = {
  monthly: [
    {
      planName: "Free",
      price: "$0",
      duration: "One time purchase",
      features: [
        "Customizable figma files",
        "Copywriting cheatcodes",
        "High-quality images",
        "SEO optimized",
        "Free updates",
        "24/7 support"
      ],
      buttonText: "Get started for free"
    },
    {
      planName: "Pro",
      price: "$29",
      duration: "Per month",
      features: [
        "Customizable figma files",
        "Copywriting cheatcodes",
        "High-quality images",
        "SEO optimized",
        "Free updates",
        "24/7 support"
      ],
      buttonText: "Get started for free"
    },
    {
      planName: "Premium",
      price: "$49",
      duration: "Per month",
      features: [
        "Customizable figma files",
        "Copywriting cheatcodes",
        "High-quality images",
        "SEO optimized",
        "Free updates",
        "24/7 support"
      ],
      buttonText: "Get started for free"
    }
  ],
  yearly: [
    {
      planName: "Free",
      price: "$0",
      duration: "One time purchase",
      features: [
        "Customizable figma files",
        "Copywriting cheatcodes",
        "High-quality images",
        "SEO optimized",
        "Free updates",
        "24/7 support"
      ],
      buttonText: "Get started for free"
    },
    {
      planName: "Pro",
      price: "$261", // Discounted price for yearly plan
      duration: "Per year",
      features: [
        "Customizable figma files",
        "Copywriting cheatcodes",
        "High-quality images",
        "SEO optimized",
        "Free updates",
        "24/7 support"
      ],
      buttonText: "Get started for free"
    },
    {
      planName: "Premium",
      price: "$441", // Discounted price for yearly plan
      duration: "Per year",
      features: [
        "Customizable figma files",
        "Copywriting cheatcodes",
        "High-quality images",
        "SEO optimized",
        "Free updates",
        "24/7 support"
      ],
      buttonText: "Get started for free"
    }
  ]
};

const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-full px-4 py-16 bg-emerald-50">
      <div className="container mx-auto flex flex-col items-center gap-12">
        <SectionTitle
          title="Pricing and Plans"
          description="Unlock the potential of our LaunchPage landing page template with versatile pricing plans tailored to your needs."
        />
        <ToggleSwitch onToggle={handleToggle} isMonthly={isMonthly} />
        <div className="flex justify-center gap-8 flex-wrap">
          {pricingPlans[isMonthly ? 'monthly' : 'yearly'].map((plan, index) => (
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
