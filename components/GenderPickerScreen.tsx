import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AdBanner } from './AdBanner';

interface GenderPickerScreenProps {
  onBack: () => void;
  onGenderSelect: (gender: 'female' | 'male' | 'other') => void;
}

export function GenderPickerScreen({ onBack, onGenderSelect }: GenderPickerScreenProps) {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center p-4 bg-white">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={20} />
        </button>
      </div>

      <div className="flex-1 p-4 flex flex-col">
        {/* Title Section */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-2xl font-semibold mb-2">Pick Your Gender</h1>
          <p className="text-gray-600">We need this data to achieve better results</p>
        </div>

        {/* Gender Options */}
        <div className="flex-1 space-y-4">
          <button
            onClick={() => onGenderSelect('female')}
            className="w-full bg-white rounded-2xl p-6 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <span className="text-lg font-medium">Female</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button
            onClick={() => onGenderSelect('male')}
            className="w-full bg-white rounded-2xl p-6 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <span className="text-lg font-medium">Male</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button
            onClick={() => onGenderSelect('other')}
            className="w-full bg-white rounded-2xl p-6 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <span className="text-lg font-medium">Other</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner appName="Shopee" description="Shopping mọi lúc mọi nơi" />
    </div>
  );
}