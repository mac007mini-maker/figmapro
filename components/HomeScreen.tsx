import { ImageWithFallback } from './figma/ImageWithFallback';
import { DiscountBadge } from './DiscountBadge';
import BeforeAfterCarousel from './BeforeAfterCarousel';
import { TrendingCarousel } from './TrendingCarousel';
import { ForYouCarousel } from './ForYouCarousel';
import { HeadshotsCarousel } from './HeadshotsCarousel';
import { TopHitsCarousel } from './TopHitsCarousel';
import { ExploreCarousel } from './ExploreCarousel';
import { ChevronRight, Flame } from 'lucide-react';

interface HomeScreenProps {
  onTrendingClick: () => void;
  onFixOldPhotoClick: () => void;
  onStoryOfLifeClick: () => void;
  onBeforeAfterClick: () => void;
  onAIPhotoClick: () => void;
  onHDImageClick: () => void;
  onFeedbackClick: () => void;
  onForYouClick: () => void;
  onHeadshotsClick: () => void;
  onTopHitsClick: () => void;
  onExploreClick: () => void;
  onItemClick: (item: { name: string; image: string; id: string }) => void;
}

const butterflyImage = "https://images.unsplash.com/photo-1722554085798-d1f3f1112988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXJmbHklMjB3aW5ncyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1OTQ4MTY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const portraitMan = "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQwMzYxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const portraitWoman = "https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDU3NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const fashionWoman = "https://images.unsplash.com/photo-1642263039799-7515d7143225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NTk0ODE2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// Headshots images
const linkedinWoman = "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU5Mzg5Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const businessMan = "https://images.unsplash.com/photo-1748950413337-5cfdb6b59321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHN1aXQlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk0ODkxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const artisticPortrait = "https://images.unsplash.com/photo-1732996909440-503fabf6ad27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwd29tYW4lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTk0ODkxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// Top Hits images
const coupleHug = "https://images.unsplash.com/photo-1596645726287-1069093ef5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBodWdnaW5nJTIwaGFwcHklMjBsb3ZlfGVufDF8fHx8MTc1OTQ4OTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const elderlyWoman = "https://images.unsplash.com/photo-1663429122432-c2769373768f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBzaWx2ZXIlMjBoYWlyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDg5MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// Explore images  
const hairstyleWoman = "https://images.unsplash.com/photo-1580027297283-d4a06e2a7ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRpZmZlcmVudCUyMGhhaXJzdHlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4OTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const romanticCouple = "https://images.unsplash.com/photo-1610470501939-99dcecf790b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHdpbnRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4OTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const datingMan = "https://images.unsplash.com/photo-1720166067122-b5036f549ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMGRhdGluZyUyMHBvcnRyYWl0JTIwc21pbGV8ZW58MXx8fHwxNzU5NDg5MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function HomeScreen({ onTrendingClick, onFixOldPhotoClick, onStoryOfLifeClick, onBeforeAfterClick, onAIPhotoClick, onHDImageClick, onFeedbackClick, onForYouClick, onHeadshotsClick, onTopHitsClick, onExploreClick, onItemClick }: HomeScreenProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* Before/After Carousel Section */}
      <div className="p-4">
        <BeforeAfterCarousel 
          onBeforeAfterClick={onBeforeAfterClick}
          onStoryOfLifeClick={onStoryOfLifeClick}
        />

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button 
            onClick={onAIPhotoClick}
            className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <ImageWithFallback 
                src={portraitWoman}
                alt="AI Photo"
                className="w-8 h-8 rounded-lg object-cover"
              />
            </div>
            <span className="text-sm font-medium">AI Photo</span>
          </button>
          <button 
            onClick={onHDImageClick}
            className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl mx-auto mb-2 flex items-center justify-center text-green-600">
              HD
            </div>
            <span className="text-sm font-medium">HD Image</span>
          </button>
          <button 
            onClick={onFixOldPhotoClick}
            className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-2 flex items-center justify-center text-purple-600">
              📷
            </div>
            <span className="text-sm font-medium">Fix Old Photo</span>
          </button>
        </div>

        {/* Trending Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Trending</h2>
              <Flame size={20} className="text-orange-500" />
            </div>
            <button 
              onClick={onTrendingClick}
              className="flex items-center gap-1 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <span className="text-sm">See All</span>
              <ChevronRight size={16} />
            </button>
          </div>
          
          <TrendingCarousel 
            onTrendingClick={onTrendingClick} 
            onItemClick={(style) => onItemClick({ name: style.name, image: style.image, id: style.name.toLowerCase().replace(' ', '-') })}
          />
        </div>

        {/* For You Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">For You</h3>
            <button 
              onClick={onForYouClick}
              className="flex items-center text-purple-600 text-sm hover:text-purple-700 transition-colors">
              <span>See All</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          
          <ForYouCarousel onItemClick={onItemClick} />
        </div>

        {/* Headshots Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Headshots</h3>
            <button 
              onClick={onHeadshotsClick}
              className="flex items-center text-purple-600 text-sm hover:text-purple-700 transition-colors">
              <span>See All</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          
          <HeadshotsCarousel onItemClick={onItemClick} />
        </div>

        {/* Top Hits Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Top Hits</h3>
            <button 
              onClick={onTopHitsClick}
              className="flex items-center text-purple-600 text-sm hover:text-purple-700 transition-colors">
              <span>See All</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          
          <TopHitsCarousel onItemClick={onItemClick} />
        </div>

        {/* Explore Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Explore</h3>
            <button 
              onClick={onExploreClick}
              className="flex items-center text-purple-600 text-sm hover:text-purple-700 transition-colors">
              <span>See All</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          
          <ExploreCarousel onItemClick={onItemClick} />
        </div>

        {/* Feedback Section */}
        <div className="mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">We'd love your feedback!</h3>
            <p className="text-gray-600 text-sm mb-4">
              Help us improve the app by sharing your thoughts and suggestions.
            </p>
            <button 
              onClick={onFeedbackClick}
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors"
            >
              Share Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}