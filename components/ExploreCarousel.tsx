import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExploreCarouselProps {
  onItemClick: (item: { name: string; image: string; id: string }) => void;
}

export function ExploreCarousel({ onItemClick }: ExploreCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const exploreItems = [
    { 
      image: "https://images.unsplash.com/photo-1580027297283-d4a06e2a7ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRpZmZlcmVudCUyMGhhaXJzdHlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4OTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Change Hairstyle',
      id: 'change-hairstyle',
      hasIcons: true
    },
    { 
      image: "https://images.unsplash.com/photo-1610470501939-99dcecf790b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHdpbnRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4OTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'AI Couples',
      id: 'ai-couples'
    },
    { 
      image: "https://images.unsplash.com/photo-1720166067122-b5036f549ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMGRhdGluZyUyMHBvcnRyYWl0JTIwc21pbGV8ZW58MXx8fHwxNzU5NDg5MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Create Dating Pictures',
      id: 'dating-pictures',
      hasOverlay: true
    },
    { 
      image: "https://images.unsplash.com/photo-1554985085-eba49a021ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5kZXIlMjBuZXV0cmFsJTIwcG9ydHJhaXQlMjBhbmRyb2d5bm91cyUyMHN0eWxlfGVufDF8fHx8MTc1OTUwMzQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Gender Swap',
      id: 'gender-swap'
    },
    { 
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdHlsZXMlMjB3b21hbnxlbnwxfHx8fDE3NTk1MDM0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      title: 'Try Different Outfits',
      id: 'try-outfits'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % exploreItems.length);
    }, 4500); // Change slide every 4.5 seconds

    return () => clearInterval(interval);
  }, [exploreItems.length]);

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

  const portraitWoman = "https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDU3NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const portraitMan = "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQwMzYxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const fashionWoman = "https://images.unsplash.com/photo-1642263039799-7515d7143225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NTk0ODE2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div 
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {exploreItems.map((item, index) => (
        <button
          key={`${item.id}-${index}`} 
          onClick={() => onItemClick({ name: item.title, image: item.image, id: item.id })}
          className="flex-shrink-0 text-center hover:opacity-80 transition-opacity"
        >
          <div className="relative w-16 h-20 rounded-2xl overflow-hidden mb-2">
            <ImageWithFallback 
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            
            {/* Change Hairstyle icons */}
            {item.hasIcons && (
              <div className="absolute left-1 top-1 flex flex-col gap-0.5">
                <div className="w-3 h-3 rounded-md bg-pink-500 flex items-center justify-center">
                  <span className="text-white text-xs">👤</span>
                </div>
                <div className="w-3 h-3 rounded-md bg-purple-500 flex items-center justify-center">
                  <span className="text-white text-xs">👤</span>
                </div>
                <div className="w-3 h-3 rounded-md bg-orange-500 flex items-center justify-center">
                  <span className="text-white text-xs">👤</span>
                </div>
              </div>
            )}
            
            {/* Dating Pictures overlay */}
            {item.hasOverlay && (
              <div className="absolute bottom-1 right-1 flex gap-0.5">
                <div className="w-3 h-3 rounded-full overflow-hidden border border-white">
                  <ImageWithFallback 
                    src={portraitWoman}
                    alt="Person 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3 h-3 rounded-full overflow-hidden border border-white">
                  <ImageWithFallback 
                    src={portraitMan}
                    alt="Person 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3 h-3 rounded-full overflow-hidden border border-white">
                  <ImageWithFallback 
                    src={fashionWoman}
                    alt="Person 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
          <span className="text-xs text-gray-600">{item.title}</span>
        </button>
      ))}
    </div>
  );
}