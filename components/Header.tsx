import { Crown, Settings } from "lucide-react";

interface HeaderProps {
  onProClick: () => void;
  onSettingsClick?: () => void;
}

export function Header({ onProClick, onSettingsClick }: HeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">AI</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={onProClick}
          className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow"
        >
          <Crown size={16} />
          <span className="font-medium">PRO</span>
        </button>
        <button 
          onClick={onSettingsClick}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <Settings size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}