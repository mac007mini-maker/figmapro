import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface FutureBabyScreenProps {
  onBack: () => void;
}

export function FutureBabyScreen({ onBack }: FutureBabyScreenProps) {
  const [parent1Uploaded, setParent1Uploaded] = useState(false);
  const [parent2Uploaded, setParent2Uploaded] = useState(false);

  const canGenerate = parent1Uploaded && parent2Uploaded;

  return (
    <div className="flex-1 bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold">Future Baby</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-32 p-6">
        {/* Upload Areas */}
        <div className="flex gap-6 mb-12">
          {/* Parent1 */}
          <div className="flex-1 text-center">
            <button
              onClick={() => setParent1Uploaded(!parent1Uploaded)}
              className={`w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center mb-4 mx-auto transition-colors ${
                parent1Uploaded
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-300 bg-gray-50'
              }`}
            >
              {parent1Uploaded ? (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-2xl">👤</span>
                </div>
              ) : (
                <span className="text-4xl text-gray-400">+</span>
              )}
            </button>
            <h3 className="font-medium text-gray-800">Parent1</h3>
          </div>

          {/* Parent2 */}
          <div className="flex-1 text-center">
            <button
              onClick={() => setParent2Uploaded(!parent2Uploaded)}
              className={`w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center mb-4 mx-auto transition-colors ${
                parent2Uploaded
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-300 bg-gray-50'
              }`}
            >
              {parent2Uploaded ? (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                  <span className="text-white text-2xl">👤</span>
                </div>
              ) : (
                <span className="text-4xl text-gray-400">+</span>
              )}
            </button>
            <h3 className="font-medium text-gray-800">Parent2</h3>
          </div>
        </div>

        {/* Generate Button */}
        <button
          className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all ${
            canGenerate
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg hover:shadow-xl'
              : 'bg-purple-100 text-purple-300 cursor-not-allowed'
          }`}
          disabled={!canGenerate}
        >
          Generate
        </button>
      </div>

      {/* Fixed Ad Banner at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white p-4 z-50">
        <div className="bg-black rounded-2xl p-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">B</span>
          </div>
          <div className="flex-1 text-white">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">BingX</span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded">SUPER APP</span>
            </div>
            <p className="text-xs opacity-90">Unlock 1500 USDT in Shared Bonuses!</p>
          </div>
          <div className="flex gap-2">
            <div className="text-center">
              <div className="text-yellow-400 text-xs font-bold">Ethereum</div>
              <div className="text-green-400 text-xs">+3.15% ★ (14)</div>
            </div>
            <div className="text-center">
              <div className="text-orange-400 text-xs font-bold">Bitcoin</div>
              <div className="text-green-400 text-xs">+0.65% ★ (16)</div>
            </div>
            <div className="text-center">
              <div className="text-red-400 text-xs font-bold">Avalanche</div>
              <div className="text-green-400 text-xs">+3.22% ★ (16)</div>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
            Trade Now
          </button>
        </div>
      </div>
    </div>
  );
}