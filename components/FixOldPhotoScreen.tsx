import { ArrowLeft, Image, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AdBanner } from './AdBanner';

interface FixOldPhotoScreenProps {
  onBack: () => void;
}

export function FixOldPhotoScreen({ onBack }: FixOldPhotoScreenProps) {
  const oldPhoto = "https://images.unsplash.com/photo-1600713715733-cba308d9301c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmFtaWx5JTIwcGhvdG8lMjBvbGQlMjBkYW1hZ2VkfGVufDF8fHx8MTc1OTQ4NTc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const restoredPhoto = "https://images.unsplash.com/photo-1686489356516-a54af456d168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXN0b3JlZCUyMGNvbG9yaXplZCUyMGZhbWlseSUyMHBob3RvfGVufDF8fHx8MTc1OTQ4NTc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const demoPhoto1 = "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmFtaWx5JTIwcGhvdG98ZW58MXx8fHwxNzU5NDg1NzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const demoPhoto2 = "https://images.unsplash.com/photo-1595755363203-b7824eef3952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBwb3J0cmFpdCUyMHBob3RvfGVufDF8fHx8MTc1OTQ4NTc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center p-4 bg-white">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={20} />
        </button>
        <h1 className="ml-2 text-lg font-semibold">Fix Old Photo</h1>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {/* Before/After Showcase */}
        <div className="mb-8">
          <div className="relative rounded-3xl overflow-hidden h-64 bg-white shadow-sm">
            <div className="flex h-full">
              <div className="flex-1 relative">
                <ImageWithFallback 
                  src={oldPhoto}
                  alt="Old damaged photo"
                  className="w-full h-full object-cover grayscale sepia"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-brown-200/20"></div>
              </div>
              <div className="flex-1 relative">
                <ImageWithFallback 
                  src={restoredPhoto}
                  alt="Restored photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Divider line */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/50 transform -translate-x-0.5"></div>
          </div>
        </div>

        {/* Add Your Photo Section */}
        <div className="bg-purple-50 rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-center mb-6">Add Your Photo</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Photos Button */}
            <button className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white flex flex-col items-center gap-3 hover:shadow-lg transition-shadow">
              <Image size={32} />
              <span className="font-medium">Photos</span>
            </button>

            {/* Camera Button */}
            <button className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white flex flex-col items-center gap-3 hover:shadow-lg transition-shadow">
              <Camera size={32} />
              <span className="font-medium">Camera</span>
            </button>

            {/* Demo 1 */}
            <button className="relative rounded-2xl overflow-hidden h-24 hover:opacity-80 transition-opacity">
              <ImageWithFallback 
                src={demoPhoto1}
                alt="Demo photo 1"
                className="w-full h-full object-cover grayscale sepia"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-medium">Demo</span>
              </div>
            </button>

            {/* Demo 2 */}
            <button className="relative rounded-2xl overflow-hidden h-24 hover:opacity-80 transition-opacity">
              <ImageWithFallback 
                src={demoPhoto2}
                alt="Demo photo 2"
                className="w-full h-full object-cover grayscale sepia"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-medium">Demo</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <div className="bg-white border-t border-gray-200">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <div>
              <p className="font-medium">Shopee</p>
              <div className="flex items-center gap-1">
                <span className="text-xs bg-gray-200 text-gray-600 px-1 rounded">AD</span>
                <span className="text-xs text-gray-500">Shopping mọi lúc mọi nơi</span>
              </div>
            </div>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
            TẢI VỀ
          </button>
        </div>
      </div>
    </div>
  );
}