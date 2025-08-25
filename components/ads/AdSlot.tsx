import React from 'react';
import { cn } from '@/lib/utils';

interface AdSlotProps {
  size: 'banner' | 'rectangle' | 'sidebar' | 'leaderboard';
  className?: string;
  placeholder?: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ 
  size, 
  className = '', 
  placeholder 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'banner':
        return 'h-24 md:h-20'; // 728x90
      case 'leaderboard':
        return 'h-24'; // 728x90
      case 'rectangle':
        return 'h-64'; // 300x250
      case 'sidebar':
        return 'h-64'; // 300x250
      default:
        return 'h-24';
    }
  };

  const getPlaceholderText = () => {
    if (placeholder) return placeholder;
    
    switch (size) {
      case 'banner':
      case 'leaderboard':
        return 'Advertisement - 728x90';
      case 'rectangle':
      case 'sidebar':
        return 'Advertisement - 300x250';
      default:
        return 'Advertisement';
    }
  };

  return (
    <div
      className={cn(
        'ad-slot',
        getSizeClasses(),
        className
      )}
      role="complementary"
      aria-label="Advertisement"
    >
      {/* This is where actual ad code would go */}
      <div className="flex items-center justify-center h-full">
        <span className="text-xs text-gray-400 font-medium">
          {getPlaceholderText()}
        </span>
      </div>
      
      {/* Example AdSense integration (commented out) */}
      {/*
        <ins 
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="1234567890"
          data-ad-format={size === 'banner' ? 'horizontal' : 'rectangle'}
          data-full-width-responsive="true"
        />
      */}
    </div>
  );
};

export default AdSlot;