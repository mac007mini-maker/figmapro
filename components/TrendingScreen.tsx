import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AdBanner } from './AdBanner';

interface TrendingScreenProps {
  onBack: () => void;
  onStyleSelect: (style: any) => void;
}

export function TrendingScreen({ onBack, onStyleSelect }: TrendingScreenProps) {
  // Section 1 - Main trending items
  const section1Items = [
    {
      id: 'player',
      name: '🏀PLAYER',
      image: 'https://images.unsplash.com/photo-1663576748730-3d420fb1d9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwcGxheWVyJTIwYXRobGV0aWMlMjBwb3J0cmFpdCUyMHNwb3J0c3xlbnwxfHx8fDE3NTk1MDY3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'sailor',
      name: 'Pretty Sailor',
      image: 'https://images.unsplash.com/photo-1663035044604-8c98269d9615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMHNhaWxvciUyMGdpcmwlMjBibG9uZGUlMjBoYWlyJTIwY3V0ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTUwNjgwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'aurora',
      name: 'Aurora',
      image: 'https://images.unsplash.com/photo-1676325826300-88cffc2b5d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGdyZWVuJTIwamFja2V0JTIwYXVyb3JhJTIwd2ludGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NTA2ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'baby-fashion',
      name: 'Baby Fashion Show',
      image: 'https://images.unsplash.com/photo-1725147874578-fc76e0d865e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwYmFieSUyMHRvZGRsZXIlMjBzdWl0JTIwZm9ybWFsJTIwZmFzaGlvbiUyMHNob3d8ZW58MXx8fHwxNzU5NTA2ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  // Section 2 - Seasonal items
  const section2Items = [
    {
      id: 'valentine',
      name: "Valentine's Day",
      image: 'https://images.unsplash.com/photo-1652282547167-af8bd01ed5ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwdmFsZW50aW5lJTIwcm9tYW50aWMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk1MDY4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'winter',
      name: 'Winter',
      image: 'https://images.unsplash.com/photo-1611164313960-d2b30b49ad02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB3aW50ZXIlMjBzbm93bWFuJTIwc25vdyUyMHBvcnRyYWl0JTIwaGFwcHl8ZW58MXx8fHwxNzU5NTA2ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'santa',
      name: 'Santa Costume',
      image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdoaXRlJTIwZHJlc3MlMjBjaHJpc3RtYXMlMjBzYW50YSUyMGNvc3R1bWV8ZW58MXx8fHwxNzU5NTA2ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'christmas-anime',
      name: 'Christmas Anime',
      image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjaHJpc3RtYXMlMjBwcmVzZW50cyUyMGFuaW1lJTIwc3R5bGV8ZW58MXx8fHwxNzU5NTA2ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  // Section 3 - Lifestyle items
  const section3Items = [
    {
      id: 'class-2025',
      name: 'Class of 2025',
      image: 'https://images.unsplash.com/photo-1627906303797-8b4838e31d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2xhc3MlMjAyMDI1JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NTA2ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'graduation',
      name: 'Graduation',
      image: 'https://images.unsplash.com/photo-1541698444085-6a51ccd3dcb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBwb3J0cmFpdCUyMGNhcHxlbnwxfHx8fDE3NTk1MDY4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'halloween',
      name: 'Halloween',
      image: 'https://images.unsplash.com/photo-1635522063439-b4b858b02aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxsb3dlZW4lMjBnb3RoaWMlMjB3b21hbiUyMGRhcmslMjBtYWtldXB8ZW58MXx8fHwxNzU5NTA2ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'fashion-show',
      name: 'Fashion Show',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBmYXNoaW9uJTIwc2hvdyUyMHN0eWxpc2glMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk1MDY4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'gta',
      name: 'GTA',
      image: 'https://images.unsplash.com/photo-1542315580-65171ae9c869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBkZXNlcnQlMjBndGElMjBzdHlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTUwNjg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'collectables',
      name: 'Collectables',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY29sbGVjdGFibGVzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NTA2ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const handleItemClick = (item: any) => {
    onStyleSelect(item);
  };

  const renderGrid = (items: any[], title?: string) => (
    <div className="mb-8">
      {title && <h2 className="text-lg font-semibold mb-4 px-4">{title}</h2>}
      <div className="grid grid-cols-2 gap-4 px-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="relative rounded-3xl overflow-hidden aspect-[3/4] hover:opacity-90 transition-opacity"
          >
            <ImageWithFallback
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <h3 className="text-white font-medium text-left">{item.name}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );



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
        <h1 className="text-lg font-semibold flex items-center gap-2">
          Trending<span className="text-orange-500">🔥</span>
        </h1>
      </div>

      {/* Scrollable Content with bottom padding for fixed ads */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Section 1 */}
        {renderGrid(section1Items)}

        {/* Section 2 */}
        {renderGrid(section2Items)}

        {/* Section 3 */}
        {renderGrid(section3Items)}
      </div>

      {/* Fixed Ad Banner at Bottom - Always Visible */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 p-4 z-50">
        <AdBanner />
      </div>
    </div>
  );
}