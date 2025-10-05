import { useState } from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { DiscountBadge } from './DiscountBadge';
import { AdBanner } from './AdBanner';

interface StyleDetailScreenProps {
  style: any;
  onBack: () => void;
  onPhotoUpload: () => void;
  onRemoveAdClick: () => void;
}

export function StyleDetailScreen({ style, onBack, onPhotoUpload, onRemoveAdClick }: StyleDetailScreenProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasUploadedPhoto, setHasUploadedPhoto] = useState(false);

  // Mock style images - in real app these would come from the style data
  const styleImages = [
    style.image,
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NTk0ODE2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1494790108755-2616c997cf14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDU3NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const handleAddPhoto = () => {
    setHasUploadedPhoto(true);
    onPhotoUpload();
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold">{style.name}</h1>
        <button 
          onClick={onRemoveAdClick}
          className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition-colors"
        >
          Remove Ad
        </button>
      </div>

      <div className="flex-1 p-6 overflow-y-auto pb-32">
        {/* Style Preview */}
        <div className="relative mb-6">
          <div className="rounded-2xl overflow-hidden h-80 bg-white shadow-sm">
            <ImageWithFallback 
              src={styleImages[currentImageIndex]}
              alt={`${style.name} preview`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {styleImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Add Face Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Add your face to swap</h3>
          
          <button
            onClick={handleAddPhoto}
            className="w-16 h-16 rounded-full border-2 border-dashed border-purple-300 bg-purple-50 flex items-center justify-center hover:bg-purple-100 transition-colors"
          >
            <Plus size={24} className="text-purple-600" />
          </button>
        </div>

        {/* Discount Badge */}
        <div className="relative mb-6">
          <div className="absolute right-0 top-0">
            <DiscountBadge percentage="50%" price="05.33" />
          </div>
        </div>

        {/* Swap Face Button */}
        <button 
          className={`w-full py-4 rounded-2xl font-semibold text-lg mb-6 transition-all ${
            hasUploadedPhoto 
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg hover:shadow-xl' 
              : 'bg-purple-100 text-purple-400 cursor-not-allowed'
          }`}
          disabled={!hasUploadedPhoto}
        >
          <div className="flex items-center justify-center gap-2">
            <span>🎭</span>
            <span>Swap Face</span>
            <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
              Watch Ad
            </span>
          </div>
        </button>


      </div>

      {/* Fixed Ad Banner at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 p-4 z-50">
        <AdBanner />
      </div>
    </div>
  );
}