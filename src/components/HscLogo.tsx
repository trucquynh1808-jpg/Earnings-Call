import React from 'react';

interface HscLogoProps {
  className?: string;
  variant?: 'white' | 'navy';
  height?: number;
}

export const HscLogo: React.FC<HscLogoProps> = ({
  className = 'h-7 w-auto',
  variant = 'white'
}) => {
  const src = variant === 'white' ? '/hsc-logo.png' : '/hsc-logo-navy.png';

  return (
    <img
      src={src}
      alt="HSC Logo"
      className={`${className} object-contain select-none`}
      loading="eager"
    />
  );
};
