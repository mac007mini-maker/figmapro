import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { DiscountBadge } from './DiscountBadge';
import { AdBanner } from './AdBanner';

interface PhotoCropScreenProps {
  onBack: () => void;
  onConfirm: () => void;
}

export function PhotoCropScreen({ onBack, onConfirm }: PhotoCropScreenProps) {
  const [selectedRatio, setSelectedRatio] = useState('1:1');
  
  // Mock uploaded image - in real app this would be the user's uploaded photo
  const userPhoto = "https://images.unsplash.com/photo-1494790108755-2616c997cf14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDU3NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const ratios = [
    { id: '1:1', label: '1:1', active: true },
    { id: '2:3', label: '2:3', active: false },
    { id: '3:4', label: '3:4', active: false },
    { id: '9:16', label: '9:16', active: false },
  ];

  const getRatioStyle = (ratio: string) => {
    switch (ratio) {
      case '2:3':
        return 'aspect-[2/3]';
      case '3:4':
        return 'aspect-[3/4]';
      case '9:16':
        return 'aspect-[9/16]';
      default:
        return 'aspect-square';
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center p-4 bg-white">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={20} />
        </button>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        {/* Photo Crop Area */}
        <div className="relative mb-8">
          <div className={`mx-auto bg-white rounded-2xl overflow-hidden shadow-lg max-w-xs ${getRatioStyle(selectedRatio)}`}>
            <ImageWithFallback 
              src={userPhoto}
              alt="Selected photo"
              className="w-full h-full object-cover"
            />
            
            {/* Crop overlay */}
            <div className="absolute inset-0 border-2 border-white">
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-4 border-t-4 border-white"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-r-4 border-t-4 border-white"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-4 border-b-4 border-white"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-4 border-b-4 border-white"></div>
            </div>
          </div>
        </div>

        {/* Choose Canvas */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Choose Canvas</h3>
          
          <div className="flex gap-3">
            {ratios.map((ratio) => (
              <button
                key={ratio.id}
                onClick={() => setSelectedRatio(ratio.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-colors ${
                  selectedRatio === ratio.id
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className={`w-4 h-4 border rounded-sm ${
                  ratio.id === '2:3' ? 'border-current h-6' :
                  ratio.id === '3:4' ? 'border-current h-5' :
                  ratio.id === '9:16' ? 'border-current h-7' :
                  'border-current'
                }`}></div>
                <span className="text-sm font-medium">{ratio.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Discount Badge */}
        <div className="relative mb-6">
          <div className="absolute right-0 top-0">
            <DiscountBadge percentage="50%" price="05.99" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button 
            onClick={onBack}
            className="flex-1 py-3 border-2 border-purple-600 text-purple-600 rounded-2xl font-medium hover:bg-purple-50 transition-colors"
          >
            🔄 Reselect
          </button>
          <button 
            onClick={onConfirm}
            className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            ✓ Confirm
          </button>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner appName="AI Chat" />
    </div>
  );
}