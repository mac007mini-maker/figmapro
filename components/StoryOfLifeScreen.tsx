import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AdBanner } from './AdBanner';

interface StoryOfLifeScreenProps {
  onBack: () => void;
}

export function StoryOfLifeScreen({ onBack }: StoryOfLifeScreenProps) {
  const goodPhotos = [
    "https://images.unsplash.com/photo-1643732994192-03856731da2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc2VsZmllJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NTk0ODYzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4NjM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1584307777755-d4b5b21b7c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc2VsZmllJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NTk0ODYzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const badPhotos = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHBob3RvfGVufDF8fHx8MTc1OTQ4NjM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdW5nbGFzc2VzfGVufDF8fHx8MTc1OTQ4NjM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1559582927-42c1b7a75479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBoYXR8ZW58MXx8fHwxNzU5NDg2Mzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center p-4 bg-white">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={20} />
        </button>
        <h1 className="ml-2 text-lg font-semibold">Upload Your Photos</h1>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {/* Good Photos Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle size={24} className="text-purple-600" />
            <h2 className="text-xl font-semibold">Good Photos</h2>
          </div>
          
          <p className="text-gray-600 mb-4">
            Use clear selfies or portraits of yourself. Mix it up with different backgrounds, expressions, and angles!
          </p>

          <div className="grid grid-cols-3 gap-3">
            {goodPhotos.map((photo, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden">
                <ImageWithFallback 
                  src={photo}
                  alt={`Good photo example ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bad Photos Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <XCircle size={24} className="text-red-500" />
            <h2 className="text-xl font-semibold">Bad Photos</h2>
          </div>
          
          <p className="text-gray-600 mb-4">
            Avoid group photos, covered faces, full-body shots, animals, repetitive images, or any nudity.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {badPhotos.map((photo, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden">
                <ImageWithFallback 
                  src={photo}
                  alt={`Bad photo example ${index + 1}`}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-red-500/20"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <XCircle size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Note */}
        <div className="bg-gray-100 rounded-2xl p-4 mb-6">
          <p className="text-center text-gray-600 text-sm">
            Your photos will be automatically deleted from our servers once your artwork is ready. By continuing, you agree to our{' '}
            <button className="text-purple-600 underline">User Agreement</button>
            {' '}and{' '}
            <button className="text-purple-600 underline">Privacy Policy</button>.
          </p>
        </div>

        {/* Pick Photos Button */}
        <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-2xl font-semibold text-lg mb-4">
          Pick 8 Selfies
        </button>
      </div>

      {/* Ad Banner */}
      <AdBanner appName="Shopee" description="Shopping mọi lúc mọi nơi" />
    </div>
  );
}