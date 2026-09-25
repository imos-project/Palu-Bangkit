import React, { useState } from 'react';
import { Waves, Mountain, MapPin, ChevronRight, Wind, SunMedium } from 'lucide-react';
import { LANDSCAPE_ZONES } from '../data/paluContent';

export const GeographicCanvas: React.FC = () => {
  const [activeZoneId, setActiveZoneId] = useState<'teluk' | 'gunung'>('teluk');

  const currentZone = LANDSCAPE_ZONES.find((z) => z.id === activeZoneId) || LANDSCAPE_ZONES[0];

  return (
    <section id="lanskap" className="py-16 md:py-24 bg-stone-50/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-900 mb-2">
            <span>BAB I</span>
            <span aria-hidden="true">·</span>
            <span>MORFOLOGI & TOPOGRAFI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Kota di Antara Teluk & Pegunungan
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Hanya sedikit kota di dunia yang memiliki topografi seunik Palu: diapit lekukan teluk samudra yang dalam dan dinding pegunungan menjulang setinggi lebih dari 2.000 meter. Bentang alam ini membentuk karakter keteguhan masyarakatnya.
          </p>
        </div>

        {/* Interactive Segmented Switcher */}
        <div className="inline-flex p-1 bg-stone-200/80 rounded-lg mb-8">
          <button
            onClick={() => setActiveZoneId('teluk')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all whitespace-nowrap ${
              activeZoneId === 'teluk'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Waves className="w-4 h-4 text-blue-700" />
            <span>Pesisir Teluk Palu</span>
          </button>
          <button
            onClick={() => setActiveZoneId('gunung')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all whitespace-nowrap ${
              activeZoneId === 'gunung'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Mountain className="w-4 h-4 text-emerald-800" />
            <span>Pegunungan Gawalise & Matantimali</span>
          </button>
        </div>

        {/* Dynamic Zone Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 lg:p-10 rounded-xl border border-stone-200 shadow-xs">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative rounded-lg overflow-hidden border border-stone-200 aspect-[16/10] bg-stone-100 group">
              <img
                src={currentZone.image}
                alt={currentZone.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-xs text-white px-3 py-1 rounded text-xs font-mono">
                Elevasi: {currentZone.elevation}
              </div>
            </div>
            <p className="text-xs text-stone-500 font-serif italic">
              {currentZone.imageCaption}
            </p>
          </div>

          {/* Contextual Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800">
                Lanskap Geografis Terpilih
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                {currentZone.title}
              </h3>
              <p className="text-sm font-medium text-stone-500 mt-0.5">
                {currentZone.subtitle}
              </p>
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {currentZone.description}
            </p>

            {/* Highlights Definition List */}
            <div className="space-y-3 pt-2">
              {currentZone.highlights.map((item, idx) => (
                <div key={idx} className="p-3 bg-stone-50 rounded-lg border border-stone-200/70">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-900">
                    <MapPin className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <span>{item.name}</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-1 pl-5.5 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Local Wisdom Quote */}
            <div className="border-l-2 border-stone-400 pl-4 py-1 italic font-serif text-sm text-stone-700">
              {currentZone.quote}
            </div>

          </div>

        </div>

        {/* Micro-Climate & Valley Context Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-5 bg-white border border-stone-200 rounded-lg">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
              <SunMedium className="w-4 h-4 text-amber-600" />
              <span>Lembah Palu & Iklim Khusus</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dikelilingi dinding pegunungan tinggi membuat Lembah Palu memiliki curah hujan relatif rendah dan udara kering khas, menciptakan kondisi sempurna untuk budidaya Bawang Goreng Palu yang renyah dan harum legendaris.
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
              <Wind className="w-4 h-4 text-blue-600" />
              <span>Angin Lembah & Termal Matantimali</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Aliran angin termal dari teluk menuju celah perbukitan menghasilkan daya angkat udara stabil sepanjang tahun, menjadikan Palu surga olahraga dirgantara dan paralayang kelas dunia.
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
              <ChevronRight className="w-4 h-4 text-emerald-700" />
              <span>Sesar Palu Koro & Kesadaran Alam</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Bukan lagi sekadar ancaman, jalur patahan aktif ini kini disikapi dengan tata ruang modern, peta mitigasi terperinci, zona sempadan hijau, dan arsitektur berwawasan ketangguhan bencana.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
