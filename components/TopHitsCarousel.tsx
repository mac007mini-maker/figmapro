import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TopHitsCarouselProps {
  onItemClick: (item: { name: string; image: string; id: string }) => void;
}

export function TopHitsCarousel({ onItemClick }: TopHitsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const topHitsItems = [
    { 
      image: "https://images.unsplash.com/photo-1732147124876-669f11fecd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMGh1Z2dpbmclMjBvdXRkb29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NTAzNTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'AI Hugs',
      id: 'ai-hugs'
    },
    { 
      image: "https://images.unsplash.com/photo-1663429122432-c2769373768f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBzaWx2ZXIlMjBoYWlyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNTk0ODkxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Age Progression',
      id: 'age-progression'
    },
    { 
      image: "https://images.unsplash.com/photo-1737029526341-05b80fc5cbf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNoaWxkJTIwYnJpZ2h0JTIwc21pbGUlMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZXxlbnwxfHx8fDE3NTk0OTExMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Future Baby',
      id: 'future-baby'
    },
    { 
      image: "https://images.unsplash.com/photo-1677808566807-1097fc06b472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwY29sb3JmdWwlMjBtYWtldXAlMjBjbGVhciUyMGZhY2V8ZW58MXx8fHwxNzU5NDkxMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Anime Style',
      id: 'anime-style'
    },
    { 
      image: "https://images.unsplash.com/photo-1596645726287-1069093ef5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBodWdnaW5nJTIwaGFwcHklMjBsb3ZlfGVufDF8fHx8MTc1OTQ4OTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Couple Photos',
      id: 'couple-photos'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topHitsItems.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [topHitsItems.length]);

  // Scroll to current item
  useEffect(() => {
    if (scrollRef.current) {
      const scrollLeft = currentIndex * 80; // 64px width + 16px gap
      scrollRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div 
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {topHitsItems.map((item, index) => (
        <button
          key={`${item.id}-${index}`} 
          onClick={() => onItemClick({ name: item.title, image: item.image, id: item.id })}
          className="flex-shrink-0 text-center hover:opacity-80 transition-opacity"
        >
          <div className="w-16 h-20 rounded-2xl overflow-hidden mb-2">
            <ImageWithFallback 
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs text-gray-600">{item.title}</span>
        </button>
      ))}
    </div>
  );
}