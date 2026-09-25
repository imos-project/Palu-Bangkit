import React, { useState, useEffect } from 'react';
import { Heart, MessageSquareHeart, Send, Sparkles, User, MapPin } from 'lucide-react';
import { SolidarityMessage } from '../types';
import { INITIAL_MESSAGES } from '../data/paluContent';

const STORAGE_KEY = 'palu_bangkit_messages_v1';
const LIKES_KEY = 'palu_bangkit_user_likes_v1';

interface SolidarityWallProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export const SolidarityWall: React.FC<SolidarityWallProps> = ({ isModalOpen, onCloseModal }) => {
  const [messages, setMessages] = useState<SolidarityMessage[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [userLikes, setUserLikes] = useState<Record<string, boolean>>({});

  // Form states
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [relation, setRelation] = useState<SolidarityMessage['relation']>('Sahabat Nusantara');
  const [category, setCategory] = useState<SolidarityMessage['category']>('Semangat');
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  // Load from local storage or fallback to INITIAL_MESSAGES
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setMessages(JSON.parse(stored));
      } else {
        setMessages(INITIAL_MESSAGES);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MESSAGES));
      }

      const likes = localStorage.getItem(LIKES_KEY);
      if (likes) {
        setUserLikes(JSON.parse(likes));
      }
    } catch {
      setMessages(INITIAL_MESSAGES);
    }
  }, []);

  const handleLike = (id: string) => {
    const alreadyLiked = !!userLikes[id];
    const updatedLikes = { ...userLikes, [id]: !alreadyLiked };
    setUserLikes(updatedLikes);
    localStorage.setItem(LIKES_KEY, JSON.stringify(updatedLikes));

    const updatedMessages = messages.map((m) => {
      if (m.id === id) {
        return {
          ...m,
          likes: alreadyLiked ? Math.max(0, m.likes - 1) : m.likes + 1,
        };
      }
      return m;
    });

    setMessages(updatedMessages);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    setIsSubmitting(true);

    const newMessage: SolidarityMessage = {
      id: `msg-${Date.now()}`,
      sender: name.trim(),
      location: location.trim() || 'Indonesia',
      relation: relation,
      message: text.trim(),
      timestamp: 'Baru saja',
      category: category,
      likes: 1,
    };

    const newSet = [newMessage, ...messages];
    setMessages(newSet);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSet));

    // Mark as liked by author
    const updatedLikes = { ...userLikes, [newMessage.id]: true };
    setUserLikes(updatedLikes);
    localStorage.setItem(LIKES_KEY, JSON.stringify(updatedLikes));

    setName('');
    setLocation('');
    setText('');
    setIsSubmitting(false);
    setSuccessNotice(true);

    setTimeout(() => {
      setSuccessNotice(false);
      onCloseModal();
    }, 1200);
  };

  const categories = ['Semua', 'Semangat', 'Doa', 'Harapan', 'Kenangan'];

  const filteredMessages = activeCategory === 'Semua'
    ? messages
    : messages.filter((m) => m.category === activeCategory);

  return (
    <section id="solidaritas" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-900 mb-2">
              <span>BAB IV</span>
              <span aria-hidden="true">·</span>
              <span>POJOK ASA & SOLIDARITAS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Gema Doa & Kata Penyemangat
            </h2>
            <p className="mt-3 text-stone-600 text-base leading-relaxed">
              Semangat saling menguatkan adalah denyut nadi Palu. Di sinilah suara warga, relawan kemanusiaan, dan sahabat dari berbagai penjuru tanah air bersatu menyalakan optimisme.
            </p>
          </div>

          <button
            onClick={() => {
              window.scrollTo({ top: document.getElementById('solidaritas')?.offsetTop, behavior: 'smooth' });
              // open direct modal
              const modalElem = document.getElementById('message-dialog');
              if (modalElem) {
                (modalElem as HTMLDialogElement).showModal?.();
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-stone-900 rounded-md hover:bg-amber-900 transition-colors shadow-xs whitespace-nowrap self-start md:self-end"
          >
            <MessageSquareHeart className="w-4 h-4 text-amber-300" />
            <span>Tulis Pesan untuk Palu</span>
          </button>
        </div>

        {/* Categories selector */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg mb-8 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Message Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMessages.map((item) => {
            const isLiked = !!userLikes[item.id];

            return (
              <div
                key={item.id}
                className="p-6 bg-stone-50/70 border border-stone-200 rounded-xl flex flex-col justify-between hover:border-stone-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                    <span className="font-mono text-amber-900 font-medium">{item.category}</span>
                    <span className="text-stone-400">{item.timestamp}</span>
                  </div>

                  <blockquote className="text-sm font-serif italic text-stone-800 leading-relaxed">
                    “{item.message}”
                  </blockquote>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-stone-900">
                      {item.sender}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mt-0.5">
                      <span>{item.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-serif italic text-stone-600">{item.relation}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleLike(item.id)}
                    title="Dukung pesan ini"
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                      isLiked
                        ? 'bg-rose-100 text-rose-800 border border-rose-200'
                        : 'bg-white text-stone-600 hover:text-rose-700 border border-stone-200'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-700 text-rose-700' : ''}`} />
                    <span className="font-mono tabular-nums">{item.likes}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Contribution Form Section directly on page for convenience */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FBF9F5] border border-stone-200 rounded-xl max-w-3xl mx-auto shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-amber-800" />
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Goreskan Kata Penguat untuk Kota Palu
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 mb-6">
            Apakah Anda warga yang bangga, relawan yang pernah bertugas, atau saudara sebangsa: pesan Anda menjadi bukti kehangatan cinta untuk Palu.
          </p>

          {successNotice ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Terima kasih! Pesan asa Anda telah tersimpan dan terpampang di dinding solidaritas.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Nama Anda / Inisial
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Rahmat / Keluarga Santoso"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Kota Asal / Domisili
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Palu / Makassar / Bandung"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Hubungan dengan Palu
                  </label>
                  <select
                    value={relation}
                    onChange={(e) => setRelation(e.target.value as SolidarityMessage['relation'])}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800"
                  >
                    <option value="Warga Palu">Warga Palu</option>
                    <option value="Sahabat Nusantara">Sahabat Nusantara</option>
                    <option value="Relawan">Relawan Kemanusiaan</option>
                    <option value="Diaspora Sulawesi">Diaspora Sulawesi Tengah</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Kategori Pesan
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as SolidarityMessage['category'])}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800"
                  >
                    <option value="Semangat">Semangat Bangkit</option>
                    <option value="Doa">Doa Ketenteraman</option>
                    <option value="Harapan">Harapan Masa Depan</option>
                    <option value="Kenangan">Kenangan & Refleksi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Pesan atau Doa Anda
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tuliskan kata-kata penguat atau asa terbaik Anda untuk kota Palu tercinta..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full p-3 text-xs sm:text-sm bg-white border border-stone-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800 leading-relaxed font-sans"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-amber-900 rounded-md hover:bg-amber-950 transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirimkan Pesan Sekarang</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>

      {/* Floating Modal for Header Action Trigger */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FBF9F5] border border-stone-300 rounded-xl p-6 sm:p-8 max-w-lg w-full shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Tulis Pesan untuk Palu
              </h3>
              <button
                onClick={onCloseModal}
                className="text-stone-400 hover:text-stone-700 text-lg leading-none"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-stone-600 mb-4">
              Silakan tuliskan kata-kata penyemangat, doa, atau harapan Anda untuk Palu.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Nama</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama atau inisial"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Kota</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Kota asal"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Pesan</label>
                <textarea
                  required
                  rows={3}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Pesan asa Anda..."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-md"
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onCloseModal}
                  className="px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-200 rounded-md"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-amber-900 rounded-md"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
