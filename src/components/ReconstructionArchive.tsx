import React, { useState } from 'react';
import { Building2, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { RECONSTRUCTION_MILESTONES } from '../data/paluContent';

export const ReconstructionArchive: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Semua');
  const [expandedId, setExpandedId] = useState<string>('bridge');

  const filteredMilestones = selectedFilter === 'Semua'
    ? RECONSTRUCTION_MILESTONES
    : RECONSTRUCTION_MILESTONES.filter((m) => m.category === selectedFilter);

  const categories = ['Semua', 'Infrastruktur', 'Permukiman', 'Ekologi', 'Masyarakat'];

  return (
    <section id="rekonstruksi" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-900 mb-2">
            <span>BAB II</span>
            <span aria-hidden="true">·</span>
            <span>PEMULIHAN & MASA DEPAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Dari Luka Tumbuh Keberanian
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Peristiwa gempa bumi, tsunami, dan likuifaksi 28 September 2018 menggoreskan luka yang mendalam. Namun warga Palu memilih bangkit bersama saudara sebangsa dan dunia. Jalan dibangun kembali, harapan dinyalakan, dan fondasi kota tangguh diwujudkan.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg mb-8 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedFilter === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMilestones.map((milestone) => {
            const isExpanded = expandedId === milestone.id;

            return (
              <div
                key={milestone.id}
                className={`p-6 rounded-xl border transition-all ${
                  isExpanded
                    ? 'border-amber-900/40 bg-stone-50/80 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                {/* Milestone Top Metadata (No pill sandwiches, clean unboxed text) */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-amber-900 font-semibold">{milestone.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{milestone.category}</span>
                  </div>
                  <span className="font-mono text-stone-400">Palu Tangguh</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-stone-900 leading-snug">
                  {milestone.title}
                </h3>

                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {milestone.summary}
                </p>

                {/* Impact Metric Strip */}
                <div className="mt-4 p-3 bg-stone-100/90 rounded-md border border-stone-200/80 flex items-center gap-2.5 text-xs font-semibold text-stone-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{milestone.impactMetrics}</span>
                </div>

                {/* Collapsible Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-stone-200 space-y-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                      Rincian Pelaksanaan & Manfaat:
                    </span>
                    <ul className="space-y-2">
                      {milestone.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-stone-700 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Toggle Expansion Button */}
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : milestone.id)}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-stone-800 hover:text-amber-900 transition-colors"
                >
                  <span>{isExpanded ? 'Tutup Rincian' : 'Lihat Catatan Lengkap'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* Narrative Callout of Solidarity */}
        <div className="mt-12 p-6 md:p-8 bg-[#FBF9F5] border border-amber-900/20 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-lg font-serif font-bold text-stone-900">
              Prinsip Pembangunan: Build Back Better and Safer
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
              Pemulihan Kota Palu bukan sekadar membangun kembali fisik yang roboh, melainkan menata ruang berbasis risiko bencana, memperkuat ketahanan sosial warga, dan melahirkan generasi muda yang cerdas mengelola dinamika alam.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="text-right">
              <span className="block text-xl font-serif font-bold text-stone-900">Kota Tangguh</span>
              <span className="text-xs text-stone-500">Standar Mitigasi Global</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center">
              <Building2 className="w-5 h-5 text-amber-400" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
