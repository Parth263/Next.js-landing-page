import React from "react";

interface TestimonialCardProps {
  image: string;
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, quote, name, title }) => {
  return (
    <div className="grow shrink basis-0 self-stretch px-[27px] py-6 bg-emerald-50 rounded-[10px] border border-emerald-50 justify-start items-center gap-2.5 flex">
      <div className="w-[269px] flex-col justify-start items-start gap-[33px] inline-flex">
        <img className="w-[54px] h-[54px] rounded-full" src={image} alt={`${name}'s picture`} />
        <div className="self-stretch text-gray-900 text-[21px] font-normal font-['DM Sans'] leading-loose">{quote}</div>
        <div className="h-[52px] flex-col justify-start items-start flex">
          <div className="self-stretch text-gray-900 text-[23px] font-bold font-['DM Sans'] leading-7">{name}</div>
          <div className="self-stretch opacity-70 text-gray-900 text-sm font-normal font-['DM Sans'] leading-[29px]">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
