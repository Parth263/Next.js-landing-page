import React from 'react';

interface ToggleSwitchProps {
  isMonthly: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isMonthly, onToggle }) => {
  return (
    <div className="flex items-center gap-2">
      <span className={`text-md font-normal ${isMonthly ? 'text-blue-600' : 'text-gray-900'}`}>
        Monthly
      </span>
      <div
        onClick={onToggle}
        className={`relative w-12 h-6 rounded-full cursor-pointer ${
          isMonthly ? 'bg-gray-200' : 'bg-blue-600'
        }`}
      >
        <div
          className={`absolute top-0.5 w-5 h-5 rounded-full transition-transform ${
            isMonthly
              ? 'bg-white transform translate-x-1'
              : 'bg-white transform translate-x-6'
          }`}
        ></div>
      </div>
      <span className={`text-md font-normal ${isMonthly ? 'text-gray-900' : 'text-blue-600'}`}>
        Yearly
      </span>
      <div className="text-blue-600 bg-blue-50 border border-blue-300 rounded-full px-2 py-1 text-[10px] font-semibold uppercase font-lato tracking-widest ml-2">
        Save 25%
      </div>
    </div>
  );
};

export default ToggleSwitch;