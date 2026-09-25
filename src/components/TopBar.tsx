import React, { useState } from 'react';
import { Volume2, VolumeX, MessageSquareHeart } from 'lucide-react';
import { ambientSound } from '../utils/audioAmbience';

interface TopBarProps {
  onOpenMessageModal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenMessageModal }) => {
  const [isAudioActive, setIsAudioActive] = useState(false);

  const toggleSound = () => {
    const active = ambientSound.toggle();
    setIsAudioActive(active);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#beranda" 
          className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-stone-900 hover:text-amber-900 transition-colors whitespace-nowrap shrink-0"
        >
          Palu Bangkit
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#kisah" className="hover:text-stone-950 transition-colors">Kisah Kota</a>
          <a href="#lanskap" className="hover:text-stone-950 transition-colors">Lanskap Geografi</a>
          <a href="#rekonstruksi" className="hover:text-stone-950 transition-colors">Rekonstruksi & Maju</a>
          <a href="#budaya" className="hover:text-stone-950 transition-colors">Warisan Kaili</a>
          <a href="#solidaritas" className="hover:text-stone-950 transition-colors">Pojok Asa</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            title={isAudioActive ? "Heningkan Suasana Alam" : "Dengarkan Suasana Pesisir & Pegunungan"}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100/90 border border-stone-300 rounded-md hover:bg-stone-200 transition-colors whitespace-nowrap shrink-0"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                <span className="hidden sm:inline">Suasana Aktif</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-500" />
                <span className="hidden sm:inline">Suasana Alam</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenMessageModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-stone-900 rounded-md hover:bg-amber-900 transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Kirim Pesan Asa</span>
          </button>
        </div>
      </div>
    </header>
  );
};
