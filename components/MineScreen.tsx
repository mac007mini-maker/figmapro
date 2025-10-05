import { Settings } from 'lucide-react';
import { AdBanner } from './AdBanner';

interface MineScreenProps {
  onProClick: () => void;
}

export function MineScreen({ onProClick }: MineScreenProps) {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold">AI</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onProClick}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full font-medium flex items-center gap-1"
          >
            <span className="text-yellow-400">👑</span>
            PRO
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center p-6">
        {/* Empty Grid Placeholders */}
        <div className="grid grid-cols-4 gap-3 mb-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <div 
              key={index}
              className="aspect-square bg-purple-100 rounded-2xl"
            />
          ))}
        </div>

        {/* Start Creating Section */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Start Creating Now</h2>
          <p className="text-gray-500 mb-8 px-4">
            Start experiencing the features to embark on your AI journey...
          </p>
          
          <button 
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Start Creating
          </button>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner appName="OKX: Buy Bitcoin BTC & Crypto" />
    </div>
  );
}