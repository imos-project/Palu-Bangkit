import React from 'react';
import { Compass, Waves, Mountain, ArrowDown } from 'lucide-react';
import { MANIFESTO_TEXT, IMAGES } from '../data/paluContent';

export const HeroManifesto: React.FC = () => {
  return (
    <section id="beranda" className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header Tagline */}
        <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-stone-500 mb-6">
          <span>KOTA PALU</span>
          <span aria-hidden="true">·</span>
          <span>SULAWESI TENGAH</span>
          <span aria-hidden="true">·</span>
          <span>TADULAKO</span>
        </div>

        {/* Primary Editorial Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: The Heartfelt Literary Manifesto */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-[1.15] tracking-tight">
              Palu bukan hanya bertahan. <br />
              <span className="italic font-normal text-amber-900">Palu tumbuh, maju, dan bangkit.</span>
            </h1>

            {/* Hairline Divider */}
            <div className="w-20 h-0.5 bg-amber-800/60" />

            {/* The verbatim user prompt beautifully framed as the Manifesto */}
            <div className="bg-stone-100/80 p-6 md:p-8 rounded-lg border-l-4 border-amber-800 shadow-xs">
              <blockquote className="text-lg md:text-xl font-serif italic text-stone-800 leading-relaxed">
                “{MANIFESTO_TEXT.quote}”
              </blockquote>
              <div className="mt-4 flex items-center justify-between text-xs text-stone-500 font-sans">
                <span>Manifes Ketangguhan Kota Palu</span>
                <span>Sulawesi Tengah, Indonesia</span>
              </div>
            </div>

            {/* Narrative text with Drop Cap */}
            <div className="text-stone-700 text-base md:text-lg leading-relaxed font-sans max-w-prose">
              <p className="drop-cap">
                {MANIFESTO_TEXT.openingDropCap}
                {MANIFESTO_TEXT.openingRest}
              </p>
              <p className="mt-4 text-stone-600 text-sm md:text-base leading-relaxed">
                Dari pesisir Talise di tepian teluk hingga punggung bukit Matantimali dan lereng Gawalise, setiap sudut kota ini menceritakan kisah yang sama: tentang manusia-manusia yang menolak berputus asa, bahu-membahu menenun kembali masa depan dari puing-puing masa silam.
              </p>
            </div>

            {/* Quick Metrics of Resilience (Adjacency to claims) */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              <div>
                <span className="block text-2xl lg:text-3xl font-serif font-bold text-stone-900 tabular-nums">
                  0 – 2.025
                </span>
                <span className="text-xs text-stone-500 font-sans">
                  Elevasi (mdpl: Teluk ke Gunung)
                </span>
              </div>
              <div>
                <span className="block text-2xl lg:text-3xl font-serif font-bold text-stone-900 tabular-nums">
                  250 m
                </span>
                <span className="text-xs text-stone-500 font-sans">
                  Bentang Jembatan Palu IV Baru
                </span>
              </div>
              <div>
                <span className="block text-2xl lg:text-3xl font-serif font-bold text-amber-900">
                  Nosarara
                </span>
                <span className="text-xs text-stone-500 font-sans">
                  Falsafah Luhur Persaudaraan
                </span>
              </div>
            </div>

            {/* Action Anchors */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#lanskap"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-md hover:bg-amber-900 transition-colors shadow-xs"
              >
                <span>Jelajahi Lanskap Teluk & Gunung</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#rekonstruksi"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-stone-800 bg-white border border-stone-300 rounded-md hover:bg-stone-50 transition-colors"
              >
                <span>Catatan Rekonstruksi</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual - Panoramic Teluk Palu at Golden Hour */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-stone-200 shadow-md bg-stone-200 group">
              <img
                src={IMAGES.paluBay}
                alt="Pemandangan Teluk Palu di waktu fajar berlatar pegunungan Gawalise"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-103"
              />
              
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/30 to-transparent pointer-events-none" />

              {/* Scrim Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <div className="flex items-center gap-2 text-xs text-amber-300 mb-1 font-mono">
                  <Compass className="w-3.5 h-3.5" />
                  <span>TELUK PALU & LEMBAH TADULAKO</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Di Antara Teluk Biru dan Dinding Pegunungan
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 mt-1 line-clamp-2">
                  Tempat di mana ketenangan laut dan keteguhan gunung berpadu mengajari arti ketabahan dan masa depan baru.
                </p>
              </div>
            </div>

            {/* Editorial Caption */}
            <div className="flex items-center justify-between text-xs text-stone-500 italic font-serif">
              <span>Gbr. 1 — Teluk Palu dan siluet Pegunungan Gawalise saat fajar merekah.</span>
              <span className="not-italic font-sans text-stone-400">Sulawesi Tengah</span>
            </div>

            {/* Geographical Duo Teaser */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white border border-stone-200 rounded-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <Waves className="w-4 h-4 text-blue-700" />
                  <span>Kawasan Pesisir & Teluk</span>
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  Pusat perikanan, sabuk mangrove, dan panorama sunset Pantai Talise.
                </p>
              </div>

              <div className="p-3.5 bg-white border border-stone-200 rounded-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <Mountain className="w-4 h-4 text-emerald-800" />
                  <span>Kaki & Puncak Gunung</span>
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  Kebun cengkeh, paralayang Matantimali, dan benteng geologis kota.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
