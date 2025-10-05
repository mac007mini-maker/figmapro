import { ArrowLeft, CheckCircle, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AgeProgressionScreenProps {
  onBack: () => void;
}

export function AgeProgressionScreen({ onBack }: AgeProgressionScreenProps) {
  const goodPhotos = [
    "https://images.unsplash.com/photo-1494790108755-2616c997cf14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDU3NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJyb3duJTIwaGFpciUyMHBvcnRyYWl0JTIwY2xlYXJ8ZW58MXx8fHwxNzU5NTA2OTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsb25kZSUyMGhhaXIlMjBwb3J0cmFpdCUyMGNsZWFyfGVufDF8fHx8MTc1OTUwNjkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const badPhotos = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHBlb3BsZSUyMGZyaWVuZHMlMjBwYXJ0eSUyMGNyb3dkfGVufDF8fHx8MTc1OTUwNjk0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdW5nbGFzc2VzJTIwcG9ydHJhaXQlMjBjb29sfGVufDF8fHx8MTc1OTUwNjk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBoYXQlMjBwb3J0cmFpdCUyMGhpZGRlbiUyMGZhY2V8ZW58MXx8fHwxNzU5NTA2OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

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
        <h1 className="text-lg font-semibold">Upload Your Photos</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-32 p-6">
        {/* Good Photos Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle size={20} className="text-green-500" />
            <h2 className="text-lg font-semibold">Good Photos</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Use clear selfies or portraits of yourself. Mix it up with different backgrounds, expressions, and angles!
          </p>
          
          <div className="grid grid-cols-3 gap-3">
            {goodPhotos.map((photo, index) => (
              <div key={index} className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={photo}
                    alt={`Good photo example ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bad Photos Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <X size={20} className="text-red-500" />
            <h2 className="text-lg font-semibold">Bad Photos</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Avoid group photos, covered faces, full-body shots, animals, repetitive images, or any nudity.
          </p>
          
          <div className="grid grid-cols-3 gap-3">
            {badPhotos.map((photo, index) => (
              <div key={index} className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={photo}
                    alt={`Bad photo example ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <X size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mb-6">
          <p className="text-gray-500 text-sm text-center">
            Your photos will be automatically deleted from our servers once your artwork is ready. By continuing, you agree to our{' '}
            <span className="text-purple-600 underline">User Agreement</span> and{' '}
            <span className="text-purple-600 underline">Privacy Policy</span>.
          </p>
        </div>

        {/* Pick Selfies Button */}
        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
          Pick 8 Selfies
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