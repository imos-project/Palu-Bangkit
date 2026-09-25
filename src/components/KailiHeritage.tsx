import React, { useState } from 'react';
import { Sparkles, UtensilsCrossed, Landmark, HeartHandshake, ScrollText } from 'lucide-react';
import { CULTURAL_HERITAGE } from '../data/paluContent';

export const KailiHeritage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('semua');

  const filteredItems = activeTab === 'semua'
    ? CULTURAL_HERITAGE
    : CULTURAL_HERITAGE.filter((item) => item.category.toLowerCase().includes(activeTab));

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Arsitektur':
        return <Landmark className="w-4 h-4 text-amber-800" />;
      case 'Falsafah':
        return <HeartHandshake className="w-4 h-4 text-rose-800" />;
      case 'Kuliner':
        return <UtensilsCrossed className="w-4 h-4 text-orange-800" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-800" />;
    }
  };

  return (
    <section id="budaya" className="py-16 md:py-24 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-900 mb-2">
            <span>BAB III</span>
            <span aria-hidden="true">·</span>
            <span>WARISAN & KEARIFAN LOKAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Harmoni Budaya Kaili & Jiwa Kota
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Kekuatan Palu untuk bangkit berakar kuat pada nilai leluhur suku Kaili. Dari arsitektur tahan gempa Banua Oge hingga falsafah <span className="font-serif italic font-semibold text-stone-900">Nosarara Nosabatutu</span>, kebudayaan adalah suluh yang tak pernah padam di Lembah Palu.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg mb-8 max-w-fit">
          <button
            onClick={() => setActiveTab('semua')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'semua'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Semua Warisan
          </button>
          <button
            onClick={() => setActiveTab('arsitektur')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'arsitektur'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Arsitektur Souraja
          </button>
          <button
            onClick={() => setActiveTab('falsafah')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'falsafah'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Falsafah Hidup
          </button>
          <button
            onClick={() => setActiveTab('kuliner')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'kuliner'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Kuliner Kaledo
          </button>
        </div>

        {/* Culture Showcase Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between"
            >
              {/* Optional Visual */}
              {item.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 group border-b border-stone-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute bottom-2 right-2 bg-stone-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded text-xs font-serif italic">
                    {item.category}
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-900 mb-1">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-stone-400">{item.indigenousTerm}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-stone-900">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <div className="flex items-start gap-2 bg-amber-50/70 p-3.5 rounded-lg border border-amber-900/10">
                    <ScrollText className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold text-amber-950 uppercase tracking-wider">
                        Makna & Ketahanan:
                      </span>
                      <p className="text-xs text-stone-700 mt-0.5 leading-relaxed font-serif italic">
                        {item.meaning}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Traditional Proverb Quote Banner */}
        <div className="mt-12 text-center p-8 bg-stone-900 text-stone-100 rounded-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">
              Falsafah Luhur Tanah Kaili
            </span>
            <blockquote className="text-2xl sm:text-3xl font-serif italic text-white">
              “Nosarara Nosabatutu, Notove Nabelo.”
            </blockquote>
            <p className="text-xs sm:text-sm text-stone-300">
              Bersaudara dan bersatu, saling menyayangi dan berbuat kebajikan untuk merajut kemakmuran bersama.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
