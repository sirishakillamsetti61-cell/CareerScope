import React from 'react';

interface CompanyLogoProps {
  id: string;
  name: string;
  brandColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  id,
  name,
  brandColor = '#3b82f6',
  size = 'md',
  className = ''
}) => {
  const sizeMap = {
    sm: 'w-7 h-7 text-xs rounded-md',
    md: 'w-10 h-10 text-sm rounded-lg',
    lg: 'w-14 h-14 text-base rounded-xl',
    xl: 'w-20 h-20 text-xl rounded-2xl'
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 32,
    xl: 44
  };

  const px = iconSizes[size];

  // Specific bespoke SVGs for world-famous brands
  const renderSvg = () => {
    switch (id) {
      case 'google':
        return (
          <svg width={px} height={px} viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
          </svg>
        );
      case 'microsoft':
        return (
          <svg width={px} height={px} viewBox="0 0 24 24">
            <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022"/>
            <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00"/>
            <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF"/>
            <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900"/>
          </svg>
        );
      case 'apple':
        return (
          <svg width={px} height={px} viewBox="0 0 24 24" fill="currentColor" className="text-slate-800">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.93-.93.04-2.02.63-2.66 1.4-.56.65-1.06 1.74-.93 2.79 1.05.08 2.06-.52 2.65-1.26z"/>
          </svg>
        );
      case 'amazon':
      case 'aws':
        return (
          <svg width={px} height={px} viewBox="0 0 24 24" fill="none">
            <path d="M13.2 16.5c-4.4 2.8-9.4 1.4-12.8-.5-.2-.1-.4.1-.2.3 3.3 2.7 8.8 4 13.8 1.4.5-.3.8-.9.2-1.2h-1z" fill="#FF9900"/>
            <path d="M14.5 15.5c-.3-.5-.7-.4-.8-.1-.4 1.2-1.2 2-2.2 2.4-.2.1-.1.4.1.4 1.1 0 2.2-.7 2.7-1.8.2-.3.4-.6.2-.9z" fill="#FF9900"/>
            <text x="3" y="13" fill="#232F3E" fontWeight="800" fontSize="11" fontFamily="sans-serif">
              {id === 'aws' ? 'AWS' : 'a'}
            </text>
          </svg>
        );
      case 'meta':
        return (
          <svg width={px} height={px} viewBox="0 0 24 24" fill="none">
            <path d="M12 15.8c-2.4 0-4.3-1.6-4.9-3.8.7-2.6 3.1-4.2 5.9-3.8 1.8.3 3.4 1.6 4 3.3-1 2.6-3 4.3-5 4.3zm6.6-8.9C16.8 5.6 14.5 5 12 5 7.8 5 4.2 8.1 3.5 12.2c-.8 4.4 2.2 8.5 6.6 9.1 4.1.6 8-2 9.1-6 .3-.9.4-1.9.4-2.9 0-1.9-.3-3.6-1-5.5z" fill="#0668E1"/>
          </svg>
        );
      case 'netflix':
        return (
          <svg width={px} height={px} viewBox="0 0 24 24">
            <path d="M5 2h3.5v20H5V2z" fill="#B81D24"/>
            <path d="M15.5 2H19v20h-3.5V2z" fill="#B81D24"/>
            <path d="M5 2h3.8l6.7 20H12L5 2z" fill="#E50914"/>
          </svg>
        );
      case 'tesla':
        return (
          <svg width={px} height={px} viewBox="0 0 24 24" fill="#E82127">
            <path d="M12 6.5C14.7 6.5 17.5 7.2 20 8.5l.8-2.2C18.1 5 15.1 4.3 12 4.3 8.9 4.3 5.9 5 3.2 6.3l.8 2.2c2.5-1.3 5.3-2 8-2zm0 4.2c2.4 0 4.7.5 6.7 1.4l.6-1.8C17.3 9.4 14.7 9 12 9s-5.3.4-7.3 1.3l.6 1.8c2-.9 4.3-1.4 6.7-1.4zm-1.1 4.6v6.7h2.2v-6.7c1.3-.2 2.6-.6 3.8-1.2l-.7-1.8c-1.6.8-3.4 1.2-5.3 1.2-1.9 0-3.7-.4-5.3-1.2l-.7 1.8c1.2.6 2.5 1 3.8 1.2h2.2z"/>
          </svg>
        );
      default:
        // Clean branded monogram with initials
        const initials = name
          .split(' ')
          .map(w => w[0])
          .join('')
          .slice(0, 3)
          .toUpperCase();

        return (
          <div 
            className="w-full h-full flex items-center justify-center font-bold tracking-tight text-white select-none shadow-xs"
            style={{ backgroundColor: brandColor }}
          >
            {initials}
          </div>
        );
    }
  };

  return (
    <div
      className={`inline-flex items-center justify-center bg-white border border-slate-200/80 shrink-0 overflow-hidden shadow-xs ${sizeMap[size]} ${className}`}
      aria-label={`${name} logo`}
    >
      {renderSvg()}
    </div>
  );
};
