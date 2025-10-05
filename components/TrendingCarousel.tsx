import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TrendingCarouselProps {
  onTrendingClick: () => void;
  onItemClick?: (style: any) => void;
}

export function TrendingCarousel({ onTrendingClick, onItemClick }: TrendingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const trendingStyles = [
    { 
      name: 'Figurine', 
      image: "https://images.unsplash.com/photo-1582757794585-ddff6bb050c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBmb3JtYWwlMjBzdWl0JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjBzdGFuZGluZ3xlbnwxfHx8fDE3NTk1MDUwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: 'Face Emoji', 
      image: "https://images.unsplash.com/photo-1629836472253-577cb69025bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2FydG9vbiUyMGVtb2ppJTIwZmFjZSUyMGhhcHB5JTIwc21pbGluZ3xlbnwxfHx8fDE3NTk1MDUwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: 'Split', 
      image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwYXJ0JTIwc3BsYXNoJTIwcGFpbnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NTk1MDUwODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: 'Gothic', 
      image: "https://images.unsplash.com/photo-1720509949811-58199e704280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3RoaWMlMjBkYXJrJTIwcG9ydHJhaXQlMjB3b21hbiUyMGJsYWNrJTIwZHJlc3N8ZW58MXx8fHwxNzU5NTA1NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: 'Fantasy', 
      image: "https://images.unsplash.com/photo-1620050539666-b3b7f04b7098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWNhbCUyMHBvcnRyYWl0JTIwZ2xvd2luZyUyMG15c3RpY2FsJTIwc3R5bGV8ZW58MXx8fHwxNzU5NTA2NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  // Auto scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % trendingStyles.length; // Cycle through all 5 items
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [trendingStyles.length]);

  // Smooth scroll to current position
  useEffect(() => {
    if (scrollRef.current) {
      const itemWidth = 64 + 16; // w-16 + gap-4
      const scrollPosition = currentIndex * itemWidth;
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Show all 5 items
  const visibleStyles = trendingStyles;

  return (
    <div 
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {visibleStyles.map((style, index) => {
        const actualIndex = (currentIndex + index) % trendingStyles.length;
        return (
          <button
            key={`${style.name}-${actualIndex}`} 
            onClick={() => onItemClick ? onItemClick(style) : onTrendingClick()}
            className="flex-shrink-0 text-center hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-20 rounded-2xl overflow-hidden mb-2">
              <ImageWithFallback 
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-600">{style.name}</span>
          </button>
        );
      })}
    </div>
  );
}