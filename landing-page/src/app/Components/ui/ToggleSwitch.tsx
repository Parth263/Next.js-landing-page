import React from "react";

interface ToggleSwitchProps {
  onToggle: () => void;
  isMonthly: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onToggle, isMonthly }) => {
  return (
    <div className="w-[334px] h-[34px] relative">
      <div className={`w-[72px] h-[33px] absolute transition-all duration-300 ${isMonthly ? 'left-0' : 'left-[86px]'} top-0`}>
        <div className="w-full h-full opacity-20 bg-gray-900 rounded-2xl" />
        <div className="absolute left-[7px] top-[6px] w-[21px] h-[21px] bg-white rounded-full" />
      </div>
      <div className="absolute left-[2px] top-[2px] text-right text-gray-900 text-[19px] font-normal leading-loose cursor-pointer" onClick={onToggle}>
        Monthly
      </div>
      <div className="absolute left-[174px] top-[2px] text-gray-900 text-[19px] font-normal leading-loose cursor-pointer" onClick={onToggle}>
        Yearly
      </div>
      <div className="absolute left-[239px] top-[3px] w-[95px] h-[29px] justify-center items-center inline-flex">
        <div className="relative flex-col justify-start items-start flex">
          <div className="w-full h-full opacity-10 bg-blue-600 rounded-[14.50px]" />
          <div className="absolute inset-0 flex justify-center items-center text-center text-blue-600 text-[13px] font-bold uppercase tracking-widest">
            Save 25%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
