import React from 'react';

interface CTAProps {
    buttonText: string;
    onButtonClick: () => void;
}

const CTAComp: React.FC<CTAProps> = ({ buttonText, onButtonClick }) => {
    return (
        <div className="max-w-[1280px] mx-auto py-14 bg-violet-100 flex flex-col items-start gap-2.5 px-8 sm:px-20 md:px-40">
            <div className="flex w-full justify-between items-center">
                <h2 className="text-slate-800 text-[33px] font-bold leading-10">
                    Get it Right Now?
                </h2>
                <button 
                    className="px-9 py-3.5 bg-blue-600 text-white text-sm font-bold rounded-lg leading-[17px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
                    onClick={onButtonClick}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default CTAComp;
