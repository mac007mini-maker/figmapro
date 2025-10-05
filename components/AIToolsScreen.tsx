import { Crown, Settings } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AIToolsScreenProps {
  onProClick: () => void;
  onSettingsClick: () => void;
}

export function AIToolsScreen({ onProClick, onSettingsClick }: AIToolsScreenProps) {
  const beeFlower = "https://images.unsplash.com/photo-1714685825758-fd9a7c8722a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWUlMjBmbG93ZXIlMjBwdXJwbGUlMjBtYWNybyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1OTQ5MDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const fashionPortraits = "https://images.unsplash.com/photo-1585596298391-1fed225198da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjB3b21hbiUyMGRpZmZlcmVudCUyMHN0eWxlcyUyMG1ha2V1cHxlbnwxfHx8fDE3NTk0OTA2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const twins = "https://images.unsplash.com/photo-1597413545419-4013431dbfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx5b3VuZyUyMHR3aW4lMjBnaXJscyUyMGNoaWxkcmVuJTIwaGFwcHklMjBzbWlsaW5nfGVufDF8fHx8MTc1OTQ5MDYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const businessPortrait = "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwYnVzaW5lc3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk0OTA1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={onProClick}
            className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow"
          >
            <Crown size={16} />
            <span className="font-medium">PRO</span>
          </button>
          <button 
            onClick={onSettingsClick}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Settings size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Improve Photo Quality */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl relative overflow-hidden h-48">
          <ImageWithFallback 
            src={beeFlower}
            alt="Photo enhancement"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Improve Photo Quality</h2>
          </div>
        </div>

        {/* Generate dozens of styles with AI */}
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl relative overflow-hidden h-36">
          <div className="flex items-center h-full">
            <div className="flex-1 p-4">
              <h2 className="text-white text-lg font-bold mb-1">Generate dozens of styles with AI</h2>
              <div className="flex gap-2">
                <span className="text-white/80 text-sm">✨</span>
                <span className="text-white/80 text-sm">✨</span>
                <span className="text-white/80 text-sm">✨</span>
              </div>
            </div>
            
            {/* Four portrait thumbnails */}
            <div className="flex gap-1 pr-4">
              <div className="w-16 h-20 rounded-xl overflow-hidden">
                <ImageWithFallback 
                  src={fashionPortraits}
                  alt="Style 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-20 rounded-xl overflow-hidden">
                <ImageWithFallback 
                  src={businessPortrait}
                  alt="Style 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-20 rounded-xl overflow-hidden">
                <ImageWithFallback 
                  src={twins}
                  alt="Style 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-20 rounded-xl overflow-hidden">
                <ImageWithFallback 
                  src={fashionPortraits}
                  alt="Style 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Small avatar overlay */}
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-lg overflow-hidden border-2 border-white">
              <ImageWithFallback 
                src={businessPortrait}
                alt="Original"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Third card - similar to first but different image/style */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl relative overflow-hidden h-36">
          <div className="flex items-center h-full">
            <div className="flex-1 p-4">
              <h2 className="text-white text-lg font-bold mb-1">Transform Your Photos</h2>
              <p className="text-white/80 text-sm">Create stunning visuals with AI</p>
            </div>
            
            <div className="w-1/3 h-full relative">
              <ImageWithFallback 
                src={twins}
                alt="Transform photos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-600/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}