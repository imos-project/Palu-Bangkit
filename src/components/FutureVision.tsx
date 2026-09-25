import React from 'react';
import { Compass, GraduationCap, Plane, Sprout } from 'lucide-react';

export const FutureVision: React.FC = () => {
  const pillars = [
    {
      icon: <Compass className="w-5 h-5 text-amber-800" />,
      title: 'Gerbang Maritim Selat Makassar & Penyangga IKN',
      desc: 'Letak geografis Palu di Selat Makassar menjadikannya simpul logistik strategis dan pintu gerbang utama pelayaran menuju Ibu Kota Nusantara (IKN), memacu pertumbuhan ekonomi maritim terbarukan.',
    },
    {
      icon: <Plane className="w-5 h-5 text-blue-800" />,
      title: 'Ibukota Dirgantara & Ekowisata Berkelanjutan',
      desc: 'Pengembangan kawasan Matantimali sebagai destinasi paralayang tingkat dunia berpadu dengan keindahan bahari Teluk Palu yang bersih, lestari, dan ramah lingkungan.',
    },
    {
      icon: <Sprout className="w-5 h-5 text-emerald-800" />,
      title: 'Kedaulatan Agraria & Komoditas Lembah',
      desc: 'Penguatan rantai pasok Bawang Goreng Palu bernilai ekspor, kopi dataran tinggi Dombu, dan cokelat Sulawesi Tengah melalui teknologi pertanian adaptif iklim.',
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-purple-800" />,
      title: 'Pusat Edukasi & Ketangguhan Bangsa',
      desc: 'Melalui Universitas Tadulako dan komunitas akar rumput, Palu mentransformasikan pengalaman hidupnya menjadi sumbangsih pengetahuan ketangguhan bencana bagi Indonesia dan dunia.',
    },
  ];

  return (
    <section id="masa-depan" className="py-16 md:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-900 mb-2">
            <span>BAB V</span>
            <span aria-hidden="true">·</span>
            <span>MENATAP MASA DEPAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Palu Tumbuh, Palu Maju, Palu Bangkit
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Menatap masa depan dengan langkah tegap. Luka masa lalu telah bertransformasi menjadi kebijaksanaan, kebersamaan, dan tekad baja untuk membangun peradaban kota yang lebih aman, sejahtera, dan bermartabat.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-stone-200 rounded-xl hover:border-amber-900/40 transition-colors shadow-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-stone-50 rounded-lg border border-stone-200">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Solemn Inspiring Banner */}
        <div className="mt-12 p-8 md:p-12 bg-stone-900 text-white rounded-2xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">
              Janji Tanah Tadulako
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
              “Selama Teluk Tetap Memeluk Ombak dan Gawalise Tetap Berdiri Tegak, Palu Takkan Pernah Berhenti Melangkah.”
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              Sebuah doa untuk setiap tapak kaki yang terus melangkah maju di tanah lembah tercinta.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
