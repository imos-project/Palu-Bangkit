import React from 'react';
import { Sparkles, HeartHandshake, Compass, Sunrise } from 'lucide-react';

export const StoryChapterOverview: React.FC = () => {
  return (
    <section id="kisah" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-900 mb-2">
            <span>PROLOG</span>
            <span aria-hidden="true">·</span>
            <span>CATATAN KETANGGUHAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Kisah Sebuah Kota yang Menolak Menyerah
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Tidak ada kata yang cukup untuk menggambarkan duka ketika bumi bergetar dan air pasang menerjang. Namun di atas debu dan retakan tanah, warga Palu memilih saling menggenggam tangan.
          </p>
        </div>

        {/* 3 Core Editorial Narratives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-stone-50/80 rounded-xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-100/80 text-amber-900 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-900">
                Fase I · Tabah & Bersatu
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-2">
                Dari Setiap Luka, Tumbuh Keberanian
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Di hari-hari pertama yang sunyi, keajaiban terbesar yang muncul bukan dari teknologi, melainkan dari kemanusiaan. Tenda-tenda pengungsian menjadi tempat berbagi sesuap nasi, menyeka air mata tetangga, dan menyalakan lentera keberanian bersama.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200 text-xs font-serif italic text-stone-500">
              “Keberanian lahir bukan saat tiada rasa takut, melainkan saat melangkah melewatinya.”
            </div>
          </div>

          <div className="p-6 bg-stone-50/80 rounded-xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-100/80 text-blue-900 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-900">
                Fase II · Bangkit & Membangun
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-2">
                Jalan Dibangun, Harapan Dinyalakan
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Alat-alat berat bekerja beriringan dengan derap langkah para guru yang kembali membuka kelas di bawah tenda, dan para nelayan yang memperbaiki jala. Jalan-jalan baru dirintis, menghubungkan kembali permukiman dan denyut pasar tradisional.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200 text-xs font-serif italic text-stone-500">
              “Setiap batu yang ditata kembali adalah pernyataan bahwa hidup harus terus bergerak.”
            </div>
          </div>

          <div className="p-6 bg-stone-50/80 rounded-xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-100/80 text-emerald-900 flex items-center justify-center mb-4">
                <Sunrise className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-900">
                Fase III · Tumbuh & Maju
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-2">
                Saling Menguatkan, Melangkah Bersama
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Kini dari pesisir hingga kaki gunung, semangat itu tetap sama: saling menguatkan, melangkah bersama, dan menatap masa depan. Palu bertransformasi menjadi kota yang lebih berwawasan lingkungan, tangguh bencana, dan penuh asa bagi generasi mendatang.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200 text-xs font-serif italic text-stone-500">
              “Palu bukan hanya bertahan. Palu tumbuh, Palu maju, Palu bangkit!”
            </div>
          </div>

        </div>

        {/* Narrative Accordion / Pull-Quote Highlight */}
        <div className="mt-12 p-6 md:p-8 bg-[#FBF9F5] rounded-xl border border-stone-200 flex items-center gap-4">
          <Sparkles className="w-6 h-6 text-amber-800 shrink-0 hidden sm:block" />
          <div className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
            <span className="font-semibold text-stone-900">Suara Tadulako:</span> Di tanah ini, nama Tadulako berarti pemimpin yang gagah berani dan bijaksana. Jiwa Tadulako mengalir dalam darah setiap anak yang lahir di tepi Teluk Palu dan lereng Gawalise—menatap badai dengan ketenangan dan menyambut fajar dengan tekad yang tak tergoyahkan.
          </div>
        </div>

      </div>
    </section>
  );
};
