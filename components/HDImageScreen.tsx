import { ArrowLeft, Image, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AdBanner } from './AdBanner';

interface HDImageScreenProps {
  onBack: () => void;
}

export function HDImageScreen({ onBack }: HDImageScreenProps) {
  const beeImage = "https://images.unsplash.com/photo-1714685825758-fd9a7c8722a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWUlMjBmbG93ZXIlMjBtYWNybyUyMHBob3RvZ3JhcGh5JTIwcHVycGxlfGVufDF8fHx8MTc1OTQ4NjM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const birdDemo = "https://images.unsplash.com/photo-1700048802079-ec47d07f7919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkJTIwcGFycm90JTIwY29sb3JmdWx8ZW58MXx8fHwxNzU5NDg2MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const butterflyDemo = "https://images.unsplash.com/photo-1722554085798-d1f3f1112988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXJmbHklMjB3aW5ncyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1OTQ4MTY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center p-4 bg-white">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={20} />
        </button>
        <h1 className="ml-2 text-lg font-semibold">HD Image</h1>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {/* Before/After Showcase */}
        <div className="mb-8">
          <div className="relative rounded-3xl overflow-hidden h-80 bg-gradient-to-br from-gray-200 to-purple-300 shadow-sm">
            <div className="flex h-full">
              <div className="flex-1 relative">
                <ImageWithFallback 
                  src={beeImage}
                  alt="Low quality bee photo"
                  className="w-full h-full object-cover blur-sm grayscale"
                />
                <div className="absolute inset-0 bg-gray-500/30"></div>
              </div>
              <div className="flex-1 relative">
                <ImageWithFallback 
                  src={beeImage}
                  alt="HD enhanced bee photo"
                  className="w-full h-full object-cover saturate-125 brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-500/20"></div>
              </div>
            </div>
            
            {/* Divider line */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/80 transform -translate-x-0.5"></div>
          </div>
        </div>

        {/* Add Your Photo Section */}
        <div className="bg-white rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-center mb-6">Add Your Photo</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Photos Button */}
            <button className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl aspect-square flex flex-col items-center justify-center gap-3 text-white hover:shadow-lg transition-shadow">
              <Image size={32} />
              <span className="font-medium">Photos</span>
            </button>

            {/* Camera Button */}
            <button className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl aspect-square flex flex-col items-center justify-center gap-3 text-white hover:shadow-lg transition-shadow">
              <Camera size={32} />
              <span className="font-medium">Camera</span>
            </button>

            {/* Demo 1 - Bird */}
            <button className="relative rounded-2xl overflow-hidden aspect-square hover:opacity-80 transition-opacity">
              <ImageWithFallback 
                src={birdDemo}
                alt="Bird demo photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-medium">Demo</span>
              </div>
            </button>

            {/* Demo 2 - Butterfly */}
            <button className="relative rounded-2xl overflow-hidden aspect-square hover:opacity-80 transition-opacity">
              <ImageWithFallback 
                src={butterflyDemo}
                alt="Butterfly demo photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-medium">Demo</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner appName="Shopee" description="Shopping mọi lúc mọi nơi" />
    </div>
  );
}