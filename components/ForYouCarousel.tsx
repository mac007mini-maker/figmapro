import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ForYouCarouselProps {
  onItemClick: (item: { name: string; image: string; id: string }) => void;
}

export function ForYouCarousel({ onItemClick }: ForYouCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const forYouItems = [
    { 
      image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDU3NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'AI Avatar',
      id: 'ai-avatar'
    },
    { 
      image: "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQwMzYxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Headshot',
      id: 'headshot'
    },
    { 
      image: "https://images.unsplash.com/photo-1642263039799-7515d7143225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NTk0ODE2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Fashion',
      id: 'fashion'
    },
    { 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBmYXNoaW9uJTIwc2hvdyUyMHN0eWxpc2glMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk1MDY4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Vintage Style',
      id: 'vintage-style'
    },
    { 
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY29sbGVjdGFibGVzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NTA2ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Creative Art',
      id: 'creative-art'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % forYouItems.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [forYouItems.length]);

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
      {forYouItems.map((item, index) => (
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