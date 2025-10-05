import { Home, Wand2, User } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'ai-tools', label: 'AI Tools', icon: Wand2 },
    { id: 'mine', label: 'Mine', icon: User },
  ];

  return (
    <div className="flex items-center justify-around bg-white border-t border-gray-200 py-2 px-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
            activeTab === tab.id
              ? 'text-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <tab.icon size={20} />
          <span className="text-xs">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}