import { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { AIToolsScreen } from './components/AIToolsScreen';
import { FutureBabyScreen } from './components/FutureBabyScreen';
import { MineScreen } from './components/MineScreen';
import { TrendingScreen } from './components/TrendingScreen';
import { StyleDetailScreen } from './components/StyleDetailScreen';
import { PhotoCropScreen } from './components/PhotoCropScreen';
import { ProModal } from './components/ProModal';
import { FixOldPhotoScreen } from './components/FixOldPhotoScreen';
import { StoryOfLifeScreen } from './components/StoryOfLifeScreen';
import { HDImageScreen } from './components/HDImageScreen';
import { GenderPickerScreen } from './components/GenderPickerScreen';
import { AIPhotoScreen } from './components/AIPhotoScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { FeedbackModal } from './components/FeedbackModal';
import { ScreenWithAds } from './components/ScreenWithAds';
import { ForYouScreen } from './components/ForYouScreen';
import { HeadshotsScreen } from './components/HeadshotsScreen';
import { TopHitsScreen } from './components/TopHitsScreen';
import { ExploreScreen } from './components/ExploreScreen';
import { HugMyLoveScreen } from './components/HugMyLoveScreen';
import { AgeProgressionScreen } from './components/AgeProgressionScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showFutureBaby, setShowFutureBaby] = useState(false);
  const [showTrending, setShowTrending] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [showPhotoCrop, setShowPhotoCrop] = useState(false);
  const [showProModal, setShowProModal] = useState(false);
  const [showFixOldPhoto, setShowFixOldPhoto] = useState(false);
  const [showStoryOfLife, setShowStoryOfLife] = useState(false);
  const [showHDImage, setShowHDImage] = useState(false);
  const [showGenderPicker, setShowGenderPicker] = useState(false);
  const [showAIPhoto, setShowAIPhoto] = useState(false);
  const [selectedGender, setSelectedGender] = useState<'female' | 'male' | 'other'>('female');
  const [showSettings, setShowSettings] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showForYou, setShowForYou] = useState(false);
  const [showHeadshots, setShowHeadshots] = useState(false);
  const [showTopHits, setShowTopHits] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showHugMyLove, setShowHugMyLove] = useState(false);
  const [showAgeProgression, setShowAgeProgression] = useState(false);

  const renderScreen = () => {
    if (showFutureBaby) {
      return (
        <ScreenWithAds>
          <FutureBabyScreen onBack={() => setShowFutureBaby(false)} />
        </ScreenWithAds>
      );
    }

    if (showSettings) {
      return (
        <ScreenWithAds>
          <SettingsScreen 
            onBack={() => setShowSettings(false)}
            onProClick={() => {
              setShowSettings(false);
              setShowProModal(true);
            }}
          />
        </ScreenWithAds>
      );
    }

    if (showAIPhoto) {
      return (
        <ScreenWithAds>
          <AIPhotoScreen 
            onBack={() => setShowAIPhoto(false)}
            gender={selectedGender}
          />
        </ScreenWithAds>
      );
    }

    if (showGenderPicker) {
      return (
        <ScreenWithAds>
          <GenderPickerScreen 
            onBack={() => setShowGenderPicker(false)}
            onGenderSelect={(gender) => {
              setSelectedGender(gender);
              setShowGenderPicker(false);
              setShowAIPhoto(true);
            }}
          />
        </ScreenWithAds>
      );
    }

    if (showStoryOfLife) {
      return (
        <ScreenWithAds>
          <StoryOfLifeScreen onBack={() => setShowStoryOfLife(false)} />
        </ScreenWithAds>
      );
    }

    if (showHDImage) {
      return (
        <ScreenWithAds>
          <HDImageScreen onBack={() => setShowHDImage(false)} />
        </ScreenWithAds>
      );
    }

    if (showFixOldPhoto) {
      return (
        <ScreenWithAds>
          <FixOldPhotoScreen onBack={() => setShowFixOldPhoto(false)} />
        </ScreenWithAds>
      );
    }

    if (showPhotoCrop) {
      return (
        <ScreenWithAds>
          <PhotoCropScreen 
            onBack={() => setShowPhotoCrop(false)}
            onConfirm={() => {
              setShowPhotoCrop(false);
              setSelectedStyle(null);
              setShowTrending(false);
            }}
          />
        </ScreenWithAds>
      );
    }

    if (selectedStyle) {
      return (
        <StyleDetailScreen 
          style={selectedStyle}
          onBack={() => setSelectedStyle(null)}
          onPhotoUpload={() => setShowPhotoCrop(true)}
          onRemoveAdClick={() => setShowProModal(true)}
        />
      );
    }

    if (showExplore) {
      return (
        <ExploreScreen 
          onBack={() => setShowExplore(false)}
          onItemClick={(item) => {
            // Create a mock style object from the item
            const mockStyle = {
              name: item.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
              image: 'https://images.unsplash.com/photo-1580027297283-d4a06e2a7ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRpZmZlcmVudCUyMGhhaXJzdHlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ4OTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              id: item
            };
            setSelectedStyle(mockStyle);
            setShowExplore(false);
          }}
        />
      );
    }

    if (showAgeProgression) {
      return (
        <AgeProgressionScreen 
          onBack={() => setShowAgeProgression(false)}
        />
      );
    }

    if (showHugMyLove) {
      return (
        <HugMyLoveScreen 
          onBack={() => setShowHugMyLove(false)}
        />
      );
    }

    if (showTopHits) {
      return (
        <TopHitsScreen 
          onBack={() => setShowTopHits(false)}
          onItemClick={(item) => {
            setShowTopHits(false);
            // Navigate to specific screens based on item
            switch (item) {
              case 'ai-hugs':
                setShowHugMyLove(true);
                break;
              case 'age-progression':
                setShowAgeProgression(true);
                break;
              case 'future-baby':
                setShowFutureBaby(true);
                break;
              default:
                // For other items, show style detail
                const mockStyle = {
                  name: item.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
                  image: 'https://images.unsplash.com/photo-1596645726287-1069093ef5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBodWdnaW5nJTIwaGFwcHklMjBsb3ZlfGVufDF8fHx8MTc1OTQ4OTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                  id: item
                };
                setSelectedStyle(mockStyle);
                break;
            }
          }}
        />
      );
    }

    if (showHeadshots) {
      return (
        <HeadshotsScreen 
          onBack={() => setShowHeadshots(false)}
          onItemClick={(item) => {
            // Create a mock style object from the item
            const mockStyle = {
              name: item.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
              image: 'https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU5Mzg5Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              id: item
            };
            setSelectedStyle(mockStyle);
            setShowHeadshots(false);
          }}
        />
      );
    }

    if (showForYou) {
      return (
        <ForYouScreen 
          onBack={() => setShowForYou(false)}
          onItemClick={(item) => {
            // Create a mock style object from the item
            const mockStyle = {
              name: item.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
              image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NTk0ODE2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              id: item
            };
            setSelectedStyle(mockStyle);
            setShowForYou(false);
          }}
        />
      );
    }

    if (showTrending) {
      return (
        <TrendingScreen 
          onBack={() => setShowTrending(false)}
          onStyleSelect={(style) => setSelectedStyle(style)}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <HomeScreen 
            onTrendingClick={() => setShowTrending(true)}
            onFixOldPhotoClick={() => setShowFixOldPhoto(true)}
            onStoryOfLifeClick={() => setShowStoryOfLife(true)}
            onBeforeAfterClick={() => setShowHDImage(true)}
            onAIPhotoClick={() => setShowGenderPicker(true)}
            onHDImageClick={() => setShowHDImage(true)}
            onFeedbackClick={() => setShowFeedback(true)}
            onForYouClick={() => setShowForYou(true)}
            onHeadshotsClick={() => setShowHeadshots(true)}
            onTopHitsClick={() => setShowTopHits(true)}
            onExploreClick={() => setShowExplore(true)}
            onItemClick={(item) => {
              // Handle special Top Hits items from home page
              if (item.id === 'ai-hugs') {
                setShowHugMyLove(true);
              } else if (item.id === 'age-progression') {
                setShowAgeProgression(true);
              } else if (item.id === 'future-baby') {
                setShowFutureBaby(true);
              } else {
                // For other items, show style detail
                setSelectedStyle(item);
              }
            }}
          />
        );
      case 'ai-tools':
        return (
          <AIToolsScreen 
            onProClick={() => setShowProModal(true)}
            onSettingsClick={() => setShowSettings(true)}
          />
        );
      case 'mine':
        return <MineScreen onProClick={() => setShowProModal(true)} />;
      default:
        return (
          <HomeScreen 
            onTrendingClick={() => setShowTrending(true)}
            onFixOldPhotoClick={() => setShowFixOldPhoto(true)}
            onStoryOfLifeClick={() => setShowStoryOfLife(true)}
            onBeforeAfterClick={() => setShowHDImage(true)}
            onAIPhotoClick={() => setShowGenderPicker(true)}
            onHDImageClick={() => setShowHDImage(true)}
            onFeedbackClick={() => setShowFeedback(true)}
            onForYouClick={() => setShowForYou(true)}
            onHeadshotsClick={() => setShowHeadshots(true)}
            onTopHitsClick={() => setShowTopHits(true)}
            onExploreClick={() => setShowExplore(true)}
            onItemClick={(item) => {
              // Handle special Top Hits items from home page
              if (item.id === 'ai-hugs') {
                setShowHugMyLove(true);
              } else if (item.id === 'age-progression') {
                setShowAgeProgression(true);
              } else if (item.id === 'future-baby') {
                setShowFutureBaby(true);
              } else {
                // For other items, show style detail
                setSelectedStyle(item);
              }
            }}
          />
        );
    }
  };

  const shouldShowHeaderAndNav = !showFutureBaby && !showTrending && !selectedStyle && !showPhotoCrop && !showFixOldPhoto && !showStoryOfLife && !showHDImage && !showGenderPicker && !showAIPhoto && !showSettings && !showForYou && !showHeadshots && !showTopHits && !showExplore && !showHugMyLove && !showAgeProgression && activeTab !== 'mine' && activeTab !== 'ai-tools';

  return (
    <div className="size-full flex flex-col max-w-md mx-auto bg-white relative">
      {shouldShowHeaderAndNav && (
        <Header 
          onProClick={() => setShowProModal(true)} 
          onSettingsClick={() => setShowSettings(true)}
        />
      )}
      {renderScreen()}
      {(shouldShowHeaderAndNav || activeTab === 'mine' || activeTab === 'ai-tools') && (
        <BottomNav 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      )}
      
      {/* Pro Modal */}
      {showProModal && (
        <ProModal onClose={() => setShowProModal(false)} />
      )}
      
      {/* Feedback Modal */}
      {showFeedback && (
        <FeedbackModal onClose={() => setShowFeedback(false)} />
      )}
      
      {/* Floating Action to test Future Baby screen */}
      {shouldShowHeaderAndNav && (
        <button
          onClick={() => setShowFutureBaby(true)}
          className="absolute bottom-20 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          👶
        </button>
      )}
    </div>
  );
}