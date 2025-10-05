import { ArrowLeft, ChevronRight, Share, MessageCircle, Globe, Info, FileText, Shield, Users, Crown } from 'lucide-react';
import { AdBanner } from './AdBanner';

interface SettingsScreenProps {
  onBack: () => void;
  onProClick: () => void;
}

export function SettingsScreen({ onBack, onProClick }: SettingsScreenProps) {
  const menuItems = [
    { icon: Share, label: 'Share', onClick: () => {} },
    { icon: MessageCircle, label: 'Feedback', onClick: () => {} },
    { icon: Globe, label: 'Language', onClick: () => {} },
    { icon: Info, label: 'About', onClick: () => {} },
    { icon: FileText, label: 'User Agreement', onClick: () => {} },
    { icon: Shield, label: 'Privacy Policy', onClick: () => {} },
    { icon: Users, label: 'Community Guidelines', onClick: () => {} },
  ];

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center p-4 bg-white">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={20} />
        </button>
        <h1 className="ml-2 text-lg font-semibold">Settings</h1>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {/* Pro Card */}
        <div className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 rounded-3xl p-6 mb-6 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-4 right-6 w-16 h-16 bg-white/20 rounded-full"></div>
          <div className="absolute top-2 right-4 w-8 h-8 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-4 right-8 w-6 h-6 bg-white/25 rounded-full"></div>
          
          {/* Crown icon */}
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center">
              <Crown size={24} className="text-white" />
            </div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-white text-xl font-semibold mb-6">
              Unlimited Artwork Styles
            </h2>
            
            <button 
              onClick={onProClick}
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-shadow"
            >
              Try Pro Now
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className="text-gray-600" />
                <span className="font-medium">{item.label}</span>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner appName="Shopee" description="Shopping mọi lúc mọi nơi" />
    </div>
  );
}