export interface LandscapeZone {
  id: 'teluk' | 'gunung';
  title: string;
  subtitle: string;
  elevation: string;
  description: string;
  highlights: {
    name: string;
    detail: string;
  }[];
  quote: string;
  image: string;
  imageCaption: string;
}

export interface ReconstructionMilestone {
  id: string;
  year: string;
  title: string;
  category: 'Infrastruktur' | 'Permukiman' | 'Ekologi' | 'Masyarakat';
  summary: string;
  impactMetrics: string;
  details: string[];
}

export interface CulturalHeritageItem {
  id: string;
  name: string;
  indigenousTerm: string;
  category: 'Arsitektur' | 'Falsafah' | 'Kuliner' | 'Tenun & Seni';
  description: string;
  meaning: string;
  image?: string;
  imageCaption?: string;
}

export interface SolidarityMessage {
  id: string;
  sender: string;
  location: string;
  relation: 'Warga Palu' | 'Sahabat Nusantara' | 'Relawan' | 'Diaspora Sulawesi';
  message: string;
  timestamp: string;
  category: 'Semangat' | 'Doa' | 'Harapan' | 'Kenangan';
  likes: number;
}
