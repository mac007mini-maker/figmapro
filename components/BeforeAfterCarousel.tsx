import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BeforeAfterCarouselProps {
  onBeforeAfterClick: () => void;
  onStoryOfLifeClick: () => void;
}

export function BeforeAfterCarousel({ onBeforeAfterClick, onStoryOfLifeClick }: BeforeAfterCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'before-after',
      title: 'Before & After',
      subtitle: 'AI Enhancement',
      leftImage: 'https://images.unsplash.com/photo-1600713715733-cba308d9301c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmFtaWx5JTIwcGhvdG8lMjBvbGQlMjBkYW1hZ2VkfGVufDF8fHx8MTc1OTQ4NTc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rightImage: 'https://images.unsplash.com/photo-1686489356516-a54af456d168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXN0b3JlZCUyMGNvbG9yaXplZCUyMGZhbWlseSUyMHBob3RvfGVufDF8fHx8MTc1OTQ4NTc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      leftLabel: 'BEFORE',
      rightLabel: 'AFTER',
      onClick: onBeforeAfterClick
    },
    {
      id: 'story-of-life',
      title: 'Story of Life',
      subtitle: '5 y/o - 65 y/o',
      leftImage: 'https://images.unsplash.com/photo-1514960919797-5ff58c52e5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGdpcmwlMjBwb3J0cmFpdCUyMGNoaWxkfGVufDF8fHx8MTc1OTQ4NTczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rightImage: 'https://images.unsplash.com/photo-1643732994192-03856731da2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc2VsZmllJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NTk0ODYzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      leftLabel: '5 y/o',
      rightLabel: '65 y/o',
      background: 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500',
      onClick: onStoryOfLifeClick
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative mb-6">
      <button
        onClick={currentSlideData.onClick}
        className={`relative w-full rounded-3xl overflow-hidden h-48 ${
          currentSlideData.background || 'bg-white'
        } shadow-sm hover:shadow-md transition-shadow`}
      >
        {/* Background for Story of Life */}
        {currentSlideData.id === 'story-of-life' && (
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="absolute top-8 right-8 w-4 h-4 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-6 left-8 w-6 h-6 bg-white/25 rounded-full"></div>
          </div>
        )}

        <div className="flex h-full relative z-10">
          {/* Left Image */}
          <div className="flex-1 relative">
            <ImageWithFallback 
              src={currentSlideData.leftImage}
              alt={currentSlideData.leftLabel}
              className={`w-full h-full object-cover ${
                currentSlideData.id === 'before-after' ? 'grayscale sepia' : ''
              }`}
            />
            {currentSlideData.id === 'before-after' && (
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-brown-200/20"></div>
            )}
            <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
              {currentSlideData.leftLabel}
            </div>
            {currentSlideData.id === 'story-of-life' && (
              <div className="absolute top-2 left-2 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                5 y/o
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <ImageWithFallback 
              src={currentSlideData.rightImage}
              alt={currentSlideData.rightLabel}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
              {currentSlideData.rightLabel}
            </div>
            {currentSlideData.id === 'story-of-life' && (
              <div className="absolute top-2 right-2 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                65 y/o
              </div>
            )}
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          {currentSlideData.id === 'story-of-life' ? (
            <div className="relative">
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">Story</h3>
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">of Life</h3>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold drop-shadow-lg">{currentSlideData.title}</h3>
              <p className="text-sm opacity-90 drop-shadow-lg">{currentSlideData.subtitle}</p>
            </>
          )}
        </div>

        {/* Center divider */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/30 transform -translate-x-0.5"></div>
      </button>

      {/* Navigation arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default BeforeAfterCarousel;