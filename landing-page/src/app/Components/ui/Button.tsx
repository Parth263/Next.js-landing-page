import React from 'react';
import Image from 'next/image';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary' | 'outline' | 'cta';
  size: 'small' | 'medium' | 'large';
  iconUrl?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  size,
  iconUrl,
  className = '',
  onClick
}) => {
  const variantStyles = {
    primary: 'bg-teal-700 hover:bg-teal-800 text-white',
    secondary: 'text-emerald-600 hover:text-emerald-700 bg-transparent',
    outline: 'bg-white border border-neutral-500 text-neutral-500 hover:bg-gray-50',
    cta: 'bg-blue-600 hover:bg-blue-700 text-white' // New CTA variant
  };

  const sizeStyles = {
    small: 'px-2 py-2 text-sm',
    medium: 'px-5 py-3 text-sm',
    large: 'px-6 py-3 text-lg'
  };

  const buttonClass = `rounded-lg font-bold transition-colors flex items-center justify-center ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {iconUrl && (
        <Image src={iconUrl} alt="Icon" width={16} height={16} className="mr-2" />
      )}
      {text}
    </button>
  );
};

export default Button;
