import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FBF9F5] text-stone-700 border-t border-stone-200 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-stone-200">
          <div>
            <span className="text-xl font-serif font-bold text-stone-900">
              Palu Bangkit
            </span>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-md font-sans">
              Kota di antara teluk dan pegunungan. Mengenang ketabahan, merawat persaudaraan, dan menyongsong masa depan cerah tanah Tadulako.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-stone-600">
            <a href="#kisah" className="hover:text-stone-900 transition-colors">Kisah Kota</a>
            <a href="#lanskap" className="hover:text-stone-900 transition-colors">Lanskap Teluk & Gunung</a>
            <a href="#rekonstruksi" className="hover:text-stone-900 transition-colors">Jejak Rekonstruksi</a>
            <a href="#budaya" className="hover:text-stone-900 transition-colors">Kearifan Kaili</a>
            <a href="#solidaritas" className="hover:text-stone-900 transition-colors">Pojok Asa</a>
          </nav>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-100 transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span>© 2026 PaluFlow - Persembahan Cinta untuk Palu, Sulawesi Tengah</span>
            <span aria-hidden="true">·</span>
            <span>Nosarara Nosabatutu</span>
          </div>
          <div className="italic font-serif text-stone-600">
            “Palu tumbuh, Palu maju, Palu bangkit.”
          </div>
        </div>

      </div>
    </footer>
  );
};
