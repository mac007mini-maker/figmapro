import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AdBanner } from './AdBanner';

interface AIPhotoScreenProps {
  onBack: () => void;
  gender: 'female' | 'male' | 'other';
}

export function AIPhotoScreen({ onBack, gender }: AIPhotoScreenProps) {
  // Female LinkedIn styles
  const femaleStyles = {
    linkedin: [
      {
        id: 'female-suit',
        name: 'Suit',
        image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDYxMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        id: 'female-office',
        name: 'Office',
        image: 'https://images.unsplash.com/photo-1613760360151-9d87932cc06c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1OTQ4NzEwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        id: 'female-business',
        name: 'Business',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4NjM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        id: 'female-profile',
        name: 'Profile',
        image: 'https://images.unsplash.com/photo-1584307777755-d4b5b21b7c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc2VsZmllJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NTk0ODYzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      }
    ]
  };

  // Male LinkedIn styles
  const maleStyles = {
    linkedin: [
      {
        id: 'male-suit',
        name: 'Suit',
        image: 'https://images.unsplash.com/photo-1748950413337-5cfdb6b59321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMHN1aXQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkzODMzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        id: 'male-office',
        name: 'Office',
        image: 'https://images.unsplash.com/photo-1742119803195-aaf41d6b2e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMG9mZmljZSUyMHdvcmtzcGFjZSUyMGNhc3VhbHxlbnwxfHx8fDE3NTk0ODcxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        id: 'male-business',
        name: 'Business',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdW5nbGFzc2VzfGVufDF8fHx8MTc1OTQ4NjM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        id: 'male-profile',
        name: 'Profile',
        image: 'https://images.unsplash.com/photo-1611695434398-4f4b330623e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQwMzYxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      }
    ]
  };

  const currentStyles = gender === 'female' ? femaleStyles : gender === 'male' ? maleStyles : femaleStyles;

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center p-4 bg-white">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={20} />
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {/* LinkedIn Section */}
        <div className="mb-6">
          <div className="bg-gray-200 rounded-2xl p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {currentStyles.linkedin.map((style) => (
              <button
                key={style.id}
                className="relative group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-sm">
                  <ImageWithFallback 
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover"
                  />
                  {/* 3D effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
                  
                  {/* Curved edge effect */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/15 rounded-full"></div>
                </div>
                
                <p className="text-center mt-2 text-gray-600 font-medium">{style.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Aesthetic Section */}
        <div className="mb-6">
          <div className="bg-gray-200 rounded-2xl p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Aesthetic</h2>
          </div>

          {/* Crypto/Gaming Ad */}
          <div className="bg-black rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">₿</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">
                  {gender === 'male' ? 'OKX: Buy Bitcoin BTC &' : 'FOMO buff vàn đang lên loa'}
                </h3>
                <p className="text-white text-sm">
                  {gender === 'male' ? 'Crypto' : 'Bingx'}
                </p>
              </div>
            </div>
            {gender === 'male' ? (
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">↓</span>
              </div>
            ) : (
              <div className="text-yellow-400 text-lg">🎲</div>
            )}
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner appName="Shopee" description="Shopping mọi lúc mọi nơi" />
    </div>
  );
}