import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AdBanner } from './AdBanner';

interface ForYouScreenProps {
  onBack: () => void;
  onItemClick: (item: string) => void;
}

export function ForYouScreen({ onBack, onItemClick }: ForYouScreenProps) {
  const forYouItems = [
    {
      id: 'ai-avatar',
      title: 'AI Avatar',
      image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDU3NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'headshot',
      title: 'Professional Headshot',
      image: 'https://images.unsplash.com/photo-1611695434398-4f4b330623e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQwMzYxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'fashion',
      title: 'Fashion Portrait',
      image: 'https://images.unsplash.com/photo-1642263039799-7515d7143225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NTk0ODE2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'artistic',
      title: 'Artistic Transform',
      image: 'https://images.unsplash.com/photo-1722554085798-d1f3f1112988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXJmbHklMjB3aW5ncyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1OTQ4MTY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'vintage',
      title: 'Vintage Style',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBmYXNoaW9uJTIwc2hvdyUyMHN0eWxpc2glMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk1MDY4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'creative',
      title: 'Creative Art',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY29sbGVjdGFibGVzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NTA2ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
        <h1 className="text-lg font-semibold">For You</h1>
      </div>

      {/* Scrollable Content with bottom padding for fixed ads */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="grid grid-cols-2 gap-4 p-4">
          {forYouItems.map((item) => (
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