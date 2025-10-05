import { ReactNode } from 'react';
import { AdBanner } from './AdBanner';

interface ScreenWithAdsProps {
  children: ReactNode;
  className?: string;
}

export function ScreenWithAds({ children, className = "" }: ScreenWithAdsProps) {
  return (
    <div className={`relative flex-1 bg-gray-50 ${className}`}>
      {/* Main Content - Scrollable with bottom padding for ads */}
      <div className="h-full overflow-y-auto pb-32">
        {children}
      </div>

      {/* Fixed Ad Banner at Bottom - Always Visible */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 p-4 z-50">
        <AdBanner />
      </div>
    </div>
  );
}