import { useState, useEffect } from 'react';

interface AdBannerProps {
  className?: string;
}

export function AdBanner({ className = "" }: AdBannerProps) {
  const [currentAd, setCurrentAd] = useState(0);

  // Sample ads - in real app, this would come from AdMob/Facebook Ads
  const ads = [
    {
      id: 1,
      icon: '🎮',
      title: 'Nam Gia Nhan',
      subtitle: '89K downloads',
      buttonText: 'TAI APP',
      buttonColor: 'bg-purple-500',
      type: 'game'
    },
    {
      id: 2,
      icon: '✈️',
      title: 'Air India Flights Resume',
      subtitle: 'Book your flight now',
      buttonText: 'Book Now',
      buttonColor: 'bg-green-500',
      type: 'travel'
    },
    {
      id: 3,
      icon: '🛒',
      title: 'Shopee Sale',
      subtitle: 'Up to 90% off',
      buttonText: 'SHOP NOW',
      buttonColor: 'bg-orange-500',
      type: 'shopping'
    },
    {
      id: 4,
      icon: '📱',
      title: 'TikTok Lite',
      subtitle: 'Get rewards for watching',
      buttonText: 'INSTALL',
      buttonColor: 'bg-black',
      type: 'social'
    }
  ];

  // Rotate ads every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [ads.length]);

  const ad = ads[currentAd];

  const handleAdClick = () => {
    // In real app, this would handle ad click tracking and redirect
    console.log(`Ad clicked: ${ad.title}`);
    // Track ad click for revenue
    // Open ad destination
  };

  return (
    <div className={`bg-gray-100 rounded-2xl p-4 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-lg">{ad.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{ad.title}</h3>
          <p className="text-sm text-gray-600">{ad.subtitle}</p>
        </div>
        <button
          onClick={handleAdClick}
          className={`${ad.buttonColor} text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity`}
        >
          {ad.buttonText}
        </button>
      </div>
      
      {/* Small ad indicator */}
      <div className="flex justify-center mt-2 gap-1">
        {ads.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentAd ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Ad label */}
      <div className="text-center mt-1">
        <span className="text-xs text-gray-400">Quảng cáo</span>
      </div>
    </div>
  );
}