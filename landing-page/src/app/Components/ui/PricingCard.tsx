import React from "react";

interface PricingCardProps {
  planName: string;
  price: string;
  duration: string;
  features: string[];
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ planName, price, duration, features, buttonText }) => {
  return (
    <div className="w-[336px] h-[570px] px-[21px] pt-8 pb-[11px] bg-white rounded-[10px] border-gray-200 flex flex-col justify-start items-start gap-10">
      <div className="w-[88px] h-[29px] justify-center items-center inline-flex">
        <div className="relative flex-col justify-start items-start flex">
          <div className="w-full h-full opacity-10 bg-teal-700 rounded-[14.50px]" />
          <div className="absolute inset-0 flex justify-center items-center text-center text-teal-700 text-[13px] font-bold uppercase tracking-widest">{planName}</div>
        </div>
      </div>
      <div className="h-[82px] flex-col justify-start items-start flex">
        <div className="self-stretch text-gray-900 text-5xl font-bold leading-[58px]">{price}</div>
        <div className="w-[148px] opacity-70 text-center text-gray-900 text-base font-medium leading-normal">{duration}</div>
      </div>
      <div className="h-[244px] flex-col justify-start items-center gap-5 flex">
        {features.map((feature, index) => (
          <div key={index} className="self-stretch justify-start items-center gap-[7px] inline-flex">
            <div className="text-center text-gray-600 text-base font-medium leading-normal">{feature}</div>
          </div>
        ))}
      </div>
      <div className="w-full h-[52px] justify-center items-center inline-flex">
        <div className="relative flex-col justify-start items-start flex w-full h-full">
          <div className="w-full h-full bg-teal-700 rounded-lg" />
          <div className="absolute inset-0 flex justify-center items-center text-center text-white text-[17px] font-bold leading-loose">{buttonText}</div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
