import { useState } from 'react';
import { ArrowLeft, Users, User } from 'lucide-react';
import { AdBanner } from './AdBanner';

interface HugMyLoveScreenProps {
  onBack: () => void;
}

export function HugMyLoveScreen({ onBack }: HugMyLoveScreenProps) {
  const [selectedMode, setSelectedMode] = useState<'solo' | 'duo'>('solo');
  const [leftPersonUploaded, setLeftPersonUploaded] = useState(false);
  const [rightPersonUploaded, setRightPersonUploaded] = useState(false);

  const canGenerate = selectedMode === 'duo' ? leftPersonUploaded && rightPersonUploaded : leftPersonUploaded;

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
        <h1 className="text-lg font-semibold">Hug My Love</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-32 p-6">
        {/* Mode Selection */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setSelectedMode('solo')}
            className={`flex-1 flex items-center gap-2 p-4 rounded-2xl border-2 transition-colors ${
              selectedMode === 'solo'
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className={`p-2 rounded-lg ${selectedMode === 'solo' ? 'bg-purple-600' : 'bg-gray-400'}`}>
              <User size={16} className="text-white" />
            </div>
            <div className="text-left">
              <div className={`font-medium ${selectedMode === 'solo' ? 'text-purple-600' : 'text-gray-700'}`}>
                2 Solo Shot
              </div>
            </div>
          </button>

          <button
            onClick={() => setSelectedMode('duo')}
            className={`flex-1 flex items-center gap-2 p-4 rounded-2xl border-2 transition-colors ${
              selectedMode === 'duo'
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className={`p-2 rounded-lg ${selectedMode === 'duo' ? 'bg-purple-600' : 'bg-gray-400'}`}>
              <Users size={16} className="text-white" />
            </div>
            <div className="text-left">
              <div className={`font-medium ${selectedMode === 'duo' ? 'text-purple-600' : 'text-gray-700'}`}>
                1 Duo Shot
              </div>
            </div>
          </button>
        </div>

        {/* Upload Areas */}
        <div className="flex gap-6 mb-8">
          {/* Person Left */}
          <div className="flex-1 text-center">
            <button
              onClick={() => setLeftPersonUploaded(!leftPersonUploaded)}
              className={`w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center mb-4 mx-auto transition-colors ${
                leftPersonUploaded
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-300 bg-gray-50'
              }`}
            >
              {leftPersonUploaded ? (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl">👤</span>
                </div>
              ) : (
                <span className="text-4xl text-gray-400">+</span>
              )}
            </button>
            <h3 className="font-medium text-gray-800">Person-Left</h3>
          </div>

          {/* Person Right */}
          <div className="flex-1 text-center">
            <button
              onClick={() => setRightPersonUploaded(!rightPersonUploaded)}
              className={`w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center mb-4 mx-auto transition-colors ${
                rightPersonUploaded
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-300 bg-gray-50'
              }`}
            >
              {rightPersonUploaded ? (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                  <span className="text-white text-2xl">👤</span>
                </div>
              ) : (
                <span className="text-4xl text-gray-400">+</span>
              )}
            </button>
            <h3 className="font-medium text-gray-800">Person-Right</h3>
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
        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-3">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <span className="text-2xl">✈️</span>
          </div>
          <div className="flex-1 text-white">
            <h4 className="font-semibold">Air India Flights Resume</h4>
            <p className="text-xs opacity-90">Book your next adventure</p>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
            →
          </button>
        </div>
      </div>
    </div>
  );
}