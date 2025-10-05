import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AdBanner } from './AdBanner';

interface HeadshotsScreenProps {
  onBack: () => void;
  onItemClick: (item: string) => void;
}

export function HeadshotsScreen({ onBack, onItemClick }: HeadshotsScreenProps) {
  const headshotsItems = [
    {
      id: 'linkedin',
      title: 'LinkedIn Professional',
      image: 'https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU5Mzg5Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'business',
      title: 'Business Portrait',
      image: 'https://images.unsplash.com/photo-1748950413337-5cfdb6b59321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHN1aXQlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk0ODkxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'creative',
      title: 'Creative Shot',
      image: 'https://images.unsplash.com/photo-1732996909440-503fabf6ad27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwd29tYW4lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTk0ODkxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'corporate',
      title: 'Corporate Style',
      image: 'https://images.unsplash.com/photo-1659353221237-6a1cfb73fd90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90JTIwY2xlYXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk0OTExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'executive',
      title: 'Executive Portrait',
      image: 'https://images.unsplash.com/photo-1582851758656-f06471eb5299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBkYXRpbmclMjBwcm9maWxlJTIwcGhvdG8lMjBjb25maWRlbnQlMjBzbWlsZXxlbnwxfHx8fDE3NTk1MDM0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'modern',
      title: 'Modern Professional',
      image: 'https://images.unsplash.com/photo-1568015300856-05e12413cb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2xlYXIlMjBmYWNlJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzU5NDkxMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
        <h1 className="text-lg font-semibold">Headshots</h1>
      </div>

      {/* Scrollable Content with bottom padding for fixed ads */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="grid grid-cols-2 gap-4 p-4">
          {headshotsItems.map((item) => (
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