import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AdBanner } from './AdBanner';

interface ExploreScreenProps {
  onBack: () => void;
  onItemClick: (item: string) => void;
}

export function ExploreScreen({ onBack, onItemClick }: ExploreScreenProps) {
  const exploreItems = [
    {
      id: 'change-hairstyle',
      title: 'Change Hairstyle',
      image: 'https://images.unsplash.com/photo-1580027297283-d4a06e2a7ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRpZmZlcmVudCUyMGhhaXJzdHlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4OTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'ai-couples',
      title: 'AI Couples',
      image: 'https://images.unsplash.com/photo-1610470501939-99dcecf790b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHdpbnRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4OTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'create-dating',
      title: 'Create Dating Pictures',
      image: 'https://images.unsplash.com/photo-1720166067122-b5036f549ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMGRhdGluZyUyMHBvcnRyYWl0JTIwc21pbGV8ZW58MXx8fHwxNzU5NDg5MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'gender-swap',
      title: 'Gender Swap',
      image: 'https://images.unsplash.com/photo-1554985085-eba49a021ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5kZXIlMjBuZXV0cmFsJTIwcG9ydHJhaXQlMjBhbmRyb2d5bm91cyUyMHN0eWxlfGVufDF8fHx8MTc1OTUwMzQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'try-outfits',
      title: 'Try Different Outfits',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdHlsZXMlMjB3b21hbnxlbnwxfHx8fDE3NTk1MDM0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'face-morph',
      title: 'Face Morphing',
      image: 'https://images.unsplash.com/photo-1743013176089-64d187fe833f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZSUyMG5vJTIwb2JzdHJ1Y3Rpb258ZW58MXx8fHwxNzU5NDkxMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
        <h1 className="text-lg font-semibold">Explore</h1>
      </div>

      {/* Scrollable Content with bottom padding for fixed ads */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="grid grid-cols-2 gap-4 p-4">
          {exploreItems.map((item) => (
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