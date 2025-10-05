import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeadshotsCarouselProps {
  onItemClick: (item: { name: string; image: string; id: string }) => void;
}

export function HeadshotsCarousel({ onItemClick }: HeadshotsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const headshotsItems = [
    { 
      image: "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU5Mzg5Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'LinkedIn Photo',
      id: 'linkedin-photo'
    },
    { 
      image: "https://images.unsplash.com/photo-1748950413337-5cfdb6b59321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHN1aXQlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk0ODkxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Business Portrait',
      id: 'business-portrait'
    },
    { 
      image: "https://images.unsplash.com/photo-1732996909440-503fabf6ad27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwd29tYW4lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTk0ODkxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Creative Shot',
      id: 'creative-shot'
    },
    { 
      image: "https://images.unsplash.com/photo-1659353221237-6a1cfb73fd90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90JTIwY2xlYXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk0OTExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Corporate Style',
      id: 'corporate-style'
    },
    { 
      image: "https://images.unsplash.com/photo-1582851758656-f06471eb5299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBkYXRpbmclMjBwcm9maWxlJTIwcGhvdG8lMjBjb25maWRlbnQlMjBzbWlsZXxlbnwxfHx8fDE3NTk1MDM0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Executive Portrait',
      id: 'executive-portrait'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headshotsItems.length);
    }, 3500); // Change slide every 3.5 seconds

    return () => clearInterval(interval);
  }, [headshotsItems.length]);

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
      {headshotsItems.map((item, index) => (
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