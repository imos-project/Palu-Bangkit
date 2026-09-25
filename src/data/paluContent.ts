import { CulturalHeritageItem, LandscapeZone, ReconstructionMilestone, SolidarityMessage } from '../types';
import paluBayImage from '../assets/images/palu_bay_golden_hour_landscape_1790320132861.jpg';
import paluMountainImage from '../assets/images/palu_mountain_matantimali_valley_1790320148159.jpg';
import paluSourajaImage from '../assets/images/palu_souraja_heritage_architecture_1790320163178.jpg';
import paluKaledoImage from '../assets/images/palu_kaledo_culinary_heritage_1790320173794.jpg';

export const IMAGES = {
  paluBay: paluBayImage,
  paluMountain: paluMountainImage,
  paluSouraja: paluSourajaImage,
  paluKaledo: paluKaledoImage,
};

export const MANIFESTO_TEXT = {
  quote: "Palu, kota di antara teluk dan pegunungan, pernah melewati hari-hari yang berat. Namun dari setiap luka, tumbuh keberanian untuk berdiri kembali. Jalan dibangun, harapan dinyalakan, dan kehidupan terus bergerak. Dari pesisir hingga kaki gunung, semangat itu tetap sama: saling menguatkan, melangkah bersama, dan menatap masa depan. Palu bukan hanya bertahan. Palu tumbuh, Palu maju, Palu bangkit.",
  openingDropCap: "Palu",
  openingRest: ", kota di antara teluk dan pegunungan, menyimpan keteguhan jiwa yang tak mudah goyah oleh badai dan gempa. Di tanah Tadulako ini, alam mengukir lembah yang memeluk lautan dan menyandarkan diri pada deretan gunung yang perkasa.",
  subtitle: "Sebuah catatan ketabahan dan asa dari jantung Sulawesi Tengah",
  motto: "Nosarara Nosabatutu · Bersaudara dan Bersatu Menatap Masa Depan"
};

export const LANDSCAPE_ZONES: LandscapeZone[] = [
  {
    id: 'teluk',
    title: 'Teluk Palu & Pesisir Talise',
    subtitle: 'Lengkung Samudra Penjaga Nafas Maritim',
    elevation: '0 – 25 mdpl',
    description: 'Teluk Palu merupakan lekukan alami yang membelah kota, menghubungkan muara Sungai Palu dengan Selat Makassar. Air lautnya yang teduh di kala fajar memantulkan siluet perahu nelayan tradisional katinting dan jembatan baru yang kembali membentang kokoh menghubungkan timur dan barat.',
    highlights: [
      { name: 'Jembatan Palu IV Baru', detail: 'Mahakarya arsitektur tahan gempa yang kembali menjadi ikon penghubung peradaban Palu Barat dan Timur.' },
      { name: 'Taman Tepian Teluk & Pantai Talise', detail: 'Pusat interaksi sosial dan rekonsiliasi alam dengan tanggul hijau pelindung abrasi dan ruang publik warga.' },
      { name: 'Sabuk Mangrove & Pelabuhan', detail: 'Pemulihan ekosistem hutan bakau pesisir yang meredam gelombang sekaligus menjadi habitat keanekaragaman hayati teluk.' }
    ],
    quote: '"Dari air laut yang tenang saat senja, kami belajar bahwa ombak paling tinggi sekalipun akan surut, meninggalkan pasir yang siap dipijak kembali."',
    image: paluBayImage,
    imageCaption: 'Panorama Teluk Palu bermandikan cahaya fajar dengan bentangan jembatan penghubung dan latar megah pegunungan.'
  },
  {
    id: 'gunung',
    title: 'Pegunungan Gawalise & Matantimali',
    subtitle: 'Puncak Penjaga Lembah & Langit Paralayang',
    elevation: '800 – 2.025 mdpl',
    description: 'Membentang gagah di sisi barat dan selatan kota, barisan bukit dan puncak Gawalise serta Matantimali menjadi dinding pelindung sekaligus saksi bisu denyut kehidupan lembah. Udara sejuk pegunungan memelihara perkebunan kopi, cengkeh, dan arena paralayang kelas dunia.',
    highlights: [
      { name: 'Puncak Matantimali (Desa Wayu)', detail: 'Diakui atlet internasional sebagai salah satu lokasi lepas landas paralayang terbaik dunia dengan pemandangan 360° seluruh Lembah dan Teluk Palu.' },
      { name: 'Perkebunan Kopi & Cengkeh Dombu', detail: 'Sumber penghidupan turun-temurun masyarakat etnis Kaili Da\'a yang merawat hutan hulu dan sumber air bersih kota.' },
      { name: 'Laboratorium Geologi Terbuka Sesar Palu-Koro', detail: 'Kawasan riset ilmiah dunia dan edukasi kebencanaan tentang jalur tektonik aktif untuk membangun peradaban tahan gempa.' }
    ],
    quote: '"Gunung-gunung ini tidak hanya menjadi pelindung lembah dari angin kencang, tapi mengingatkan kami untuk selalu berdiri tegak setinggi harapan kami."',
    image: paluMountainImage,
    imageCaption: 'Pemandangan spektakuler dari puncak Matantimali menatap kelokan Sungai Palu dan teluk di ufuk cakrawala.'
  }
];

export const RECONSTRUCTION_MILESTONES: ReconstructionMilestone[] = [
  {
    id: 'bridge',
    year: '2024–2025',
    title: 'Pembangunan Kembali Jembatan Palu IV',
    category: 'Infrastruktur',
    summary: 'Rekonstruksi jembatan lengkung ikonik berteknologi peredam gempa seismik lead rubber bearing (LRB), mengembalikan urat nadi mobilitas dan simbol identitas kota.',
    impactMetrics: 'Panjang 250m · Dirancang Tahan Gempa Magnitudo 8+',
    details: [
      'Menghubungkan kembali kawasan Lere di Palu Barat dan Besusu di Palu Timur.',
      'Didesain dengan pendekatan arsitektur kultural Kaili dan standar teknik kegempaan tertinggi dunia kerja sama JICA dan Kementerian PUPR.',
      'Dilengkapi jalur pedestrian ramah disabilitas dan pencahayaan efisien energi di malam hari.'
    ]
  },
  {
    id: 'huntap',
    year: '2020–2024',
    title: 'Kawasan Hunian Tetap (Huntap) Terpadu',
    category: 'Permukiman',
    summary: 'Pembangunan ribuan rumah tahan gempa (teknologi RISHA/RISBA) di zona aman Tondo, Duyu, dan Balaroa yang terintegrasi dengan sarana air bersih, sekolah, dan puskesmas.',
    impactMetrics: '5.500+ Unit Hunian Aman Diserahkan',
    details: [
      'Memindahkan warga dari zona rawan likuifaksi ke tapak geologis yang terbukti stabil dan teruji.',
      'Konsep permukiman hijau dilengkapi drainase resapan air hujan, ruang terbuka komunal, dan balai pertemuan adat.',
      'Pemberian sertifikat hak milik resmi bagi keluarga terdampak demi kepastian masa depan generasi penerus.'
    ]
  },
  {
    id: 'coastal',
    year: '2021–2025',
    title: 'Tanggul Pengaman Silebeta & Ruang Publik Pesisir',
    category: 'Ekologi',
    summary: 'Pembangunan tanggul pelindung pantai ramah lingkungan (eco-dike) sepanjang pesisir Silae, Lere, Besusu, dan Talise sebagai mitigasi tsunami berlapis.',
    impactMetrics: '7,2 Km Sabuk Pengaman Pesisir Hijau',
    details: [
      'Bukan sekadar dinding beton masif, melainkan undakan batu alam dengan sabuk tanam mangrove dan pohon ketapang laut.',
      'Berfungsi ganda sebagai jogging track, ruang olahraga publik, dan pusat kuliner UMKM lokal saat senja.',
      'Sistem peringatan dini (early warning sirens) yang terkoneksi langsung dengan sensor sensor muka laut BMKG.'
    ]
  },
  {
    id: 'resilience',
    year: '2023–2026',
    title: 'Pusat Riset Kebencanaan & Ruang Terbuka Hijau',
    category: 'Masyarakat',
    summary: 'Transformasi Universitas Tadulako (UNTAD) dan lembaga riset lokal menjadi rujukan mitigasi bencana nasional, serta peresmian Taman Hutan Memorial.',
    impactMetrics: '100% Kampus & Sekolah Terakreditasi Siaga',
    details: [
      'Kurikulum ketangguhan bencana diajarkan di sekolah dasar hingga perguruan tinggi.',
      'Memorial Park didirikan sebagai ruang refleksi hening untuk mengenang para syuhada dan menguatkan ikatan solidaritas.',
      'Pemberdayaan kelompok perempuan dan petani lokal dalam memproduksi komoditas unggulan seperti Bawang Goreng Palu.'
    ]
  }
];

export const CULTURAL_HERITAGE: CulturalHeritageItem[] = [
  {
    id: 'souraja',
    name: 'Banua Oge (Souraja)',
    indigenousTerm: 'Banua Oge · Rumah Besar Istana Kaili',
    category: 'Arsitektur',
    description: 'Rumah panggung tradisional kayu ulin dan jati yang merupakan kediaman bangsawan Raja Palu. Dirancang dengan teknik pasak kayu tanpa paku besi, menjadikannya lentur dan terbukti tahan terhadap guncangan gempa bumi selama ratusan tahun.',
    meaning: 'Simbol kearifan nenek moyang Kaili yang mengerti cara bersahabat dengan tanah dan alam Sulawesi Tengah.',
    image: paluSourajaImage,
    imageCaption: 'Banua Oge Souraja di Kelurahan Lere, saksi bisu arsitektur kayu tradisional Kaili yang adiluhung.'
  },
  {
    id: 'falsafah',
    name: 'Nosarara Nosabatutu',
    indigenousTerm: 'Nosarara Nosabatutu',
    category: 'Falsafah',
    description: 'Falsafah dasar kehidupan suku Kaili yang berarti "Kita bersaudara, kita bersatu". Falsafah ini menekankan bahwa ikatan persaudaraan kemanusiaan melampaui perbedaan suku, latar belakang, maupun agama, terutama ketika musibah melanda.',
    meaning: 'Pondasi moral yang membuat masyarakat Palu mampu bangkit bersama, saling berbagi tenda, makanan, dan penghiburan di saat paling gelap.',
  },
  {
    id: 'kaledo',
    name: 'Kaledo (Kaki Lembu Donggala)',
    indigenousTerm: 'Ka-Le-Do · Sup Sumsum Tulang Sapi Legendaris',
    category: 'Kuliner',
    description: 'Sup kaldu bening gurih berbahan dasar tulang kaki sapi dengan sumsum empuk. Keistimewaan rasanya datang dari paduan asam jawa mentah (u\'e kaledo), garam Talise, dan cabe rawit hijau yang menyegarkan tubuh dan menghangatkan jiwa.',
    meaning: 'Disajikan bersama ubi kayu (singkong) rebus dan taburan bawang goreng Palu, kaledo adalah santapan kebersamaan keluarga dan penyambut tamu kehormatan.',
    image: paluKaledoImage,
    imageCaption: 'Sajian hangat Kaledo dengan sumsum tulang yang lembut dalam kuah asam pedas khas Palu.'
  },
  {
    id: 'tenun',
    name: 'Tenun Ikat Bomba & Donggala',
    indigenousTerm: 'Buya Sabe Donggala & Tenun Bomba',
    category: 'Tenun & Seni',
    description: 'Kain tenun sutra tradisional bermotif flora, daun kelor (kalamago), dan geometri sakral Kaili. Ditenun secara teliti menggunakan alat tenun bukan mesin (ATBM) oleh para perajin perempuan yang melestarikan warisan leluhur.',
    meaning: 'Melambangkan keanggunan, kesabaran, dan keterikatan spiritual manusia dengan alam tanah lembah.',
  }
];

export const INITIAL_MESSAGES: SolidarityMessage[] = [
  {
    id: 'msg-1',
    sender: 'Iskandar Tadulako',
    location: 'Palu Barat',
    relation: 'Warga Palu',
    message: 'Kami pernah kehilangan hampir segalanya, namun tidak pernah kehilangan harga diri dan harapan. Melihat anak-anak kembali tertawa di tepian Teluk Palu adalah bukti bahwa kota ini hidup dan tidak akan pernah menyerah.',
    timestamp: '25 September 2026',
    category: 'Semangat',
    likes: 42
  },
  {
    id: 'msg-2',
    sender: 'Nurul Hidayah & Tim Medis',
    location: 'Makassar',
    relation: 'Relawan',
    message: 'Delapan tahun lalu kami datang membawa perban dan obat, tapi pulang membawa pelajaran terbesar tentang ketabahan jiwa manusia. Salam takzim untuk seluruh saudaraku di Palu, Sigi, dan Donggala!',
    timestamp: '24 September 2026',
    category: 'Kenangan',
    likes: 38
  },
  {
    id: 'msg-3',
    sender: 'Made Suastika',
    location: 'Denpasar, Bali',
    relation: 'Sahabat Nusantara',
    message: 'Dari Pulau Dewata, doa kami selalu membumbung untuk Palu. Kota yang dikelilingi laut biru dan pegunungan hijau ini adalah lambang ketangguhan bangsa Indonesia.',
    timestamp: '23 September 2026',
    category: 'Doa',
    likes: 29
  },
  {
    id: 'msg-4',
    sender: 'Fadly Da\'a',
    location: 'Matantimali, Sigi-Palu',
    relation: 'Warga Palu',
    message: 'Angin dari Gawalise selalu mengingatkan: selama kita memegang teguh Nosarara Nosabatutu, tidak ada beban yang tak bisa kita pikul bersama.',
    timestamp: '22 September 2026',
    category: 'Harapan',
    likes: 51
  },
  {
    id: 'msg-5',
    sender: 'Ratna Dewi Palupi',
    location: 'Yogyakarta',
    relation: 'Diaspora Sulawesi',
    message: 'Rindu selalu pada wangi bawang goreng Palu, hangatnya semangkuk Kaledo, dan megahnya pemandangan Teluk dari bukit. Palu terus bertumbuh, semakin indah dan tertata.',
    timestamp: '21 September 2026',
    category: 'Harapan',
    likes: 34
  }
];
