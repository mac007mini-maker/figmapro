import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AdBanner } from './AdBanner';

interface TopHitsScreenProps {
  onBack: () => void;
  onItemClick: (item: string) => void;
}

export function TopHitsScreen({ onBack, onItemClick }: TopHitsScreenProps) {
  const topHitsItems = [
    {
      id: 'ai-hugs',
      title: 'AI Hugs',
      image: 'https://images.unsplash.com/photo-1732147124876-669f11fecd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMGh1Z2dpbmclMjBvdXRkb29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NTAzNTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'age-progression',
      title: 'Age Progression',
      image: 'https://images.unsplash.com/photo-1663429122432-c2769373768f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBzaWx2ZXIlMjBoYWlyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNTk0ODkxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'future-baby',
      title: 'Future Baby',
      image: 'https://images.unsplash.com/photo-1737029526341-05b80fc5cbf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNoaWxkJTIwYnJpZ2h0JTIwc21pbGUlMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZXxlbnwxfHx8fDE3NTk0OTExMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'anime-style',
      title: 'Anime Style',
      image: 'https://images.unsplash.com/photo-1677808566807-1097fc06b472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwY29sb3JmdWwlMjBtYWtldXAlMjBjbGVhciUyMGZhY2V8ZW58MXx8fHwxNzU5NDkxMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'couple-photos',
      title: 'Couple Photos',
      image: 'https://images.unsplash.com/photo-1596645726287-1069093ef5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBodWdnaW5nJTIwaGFwcHklMjBsb3ZlfGVufDF8fHx8MTc1OTQ4OTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'happy-moments',
      title: 'Happy Moments',
      image: 'https://images.unsplash.com/photo-1633781935348-80f0b213179e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNoaWxkJTIwYnJpZ2h0JTIwc21pbGUlMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZXxlbnwxfHx8fDE3NTk0OTExMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold">Top Hits</h1>
      </div>

      {/* Scrollable Content with bottom padding for fixed ads */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="grid grid-cols-2 gap-4 p-4">
          {topHitsItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className="relative rounded-3xl overflow-hidden aspect-[3/4] hover:opacity-90 transition-opacity"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <h3 className="text-white font-medium text-left">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fixed Ad Banner at Bottom - Always Visible */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 p-4 z-50">
        <AdBanner />
      </div>
    </div>
  );
}