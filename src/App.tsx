/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroManifesto } from './components/HeroManifesto';
import { StoryChapterOverview } from './components/StoryChapterOverview';
import { GeographicCanvas } from './components/GeographicCanvas';
import { ReconstructionArchive } from './components/ReconstructionArchive';
import { KailiHeritage } from './components/KailiHeritage';
import { FutureVision } from './components/FutureVision';
import { SolidarityWall } from './components/SolidarityWall';
import { Footer } from './components/Footer';

export default function App() {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans selection:bg-amber-800 selection:text-white">
      {/* Top Bar adhering strictly to 3-zone contract */}
      <TopBar onOpenMessageModal={() => setIsMessageModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero & Verbatim Prompt Manifesto */}
        <HeroManifesto />

        {/* Prolog: Kisah Kota & Tiga Fase Kebangkitan */}
        <StoryChapterOverview />

        {/* Bab I: Geografi & Morfologi Teluk vs Gunung */}
        <GeographicCanvas />

        {/* Bab II: Catatan Rekonstruksi & Infrastruktur Tangguh */}
        <ReconstructionArchive />

        {/* Bab III: Warisan Budaya Kaili & Falsafah Nosarara Nosabatutu */}
        <KailiHeritage />

        {/* Bab IV: Gema Doa & Dinding Solidaritas Interaktif */}
        <SolidarityWall 
          isModalOpen={isMessageModalOpen} 
          onCloseModal={() => setIsMessageModalOpen(false)} 
        />

        {/* Bab V: Menatap Masa Depan & Pilar Kota Palu Maju */}
        <FutureVision />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
