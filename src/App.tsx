import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProductCatalog from './components/ProductCatalog';
import Locations from './components/Locations';
import Footer from './components/Footer';
import { STORE_BRANCHES } from './data';
import { MessageSquare, ExternalLink } from 'lucide-react';

export default function App() {
  const [selectedBranchId, setSelectedBranchId] = useState('nova_angra'); // Default branch

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeBranch = STORE_BRANCHES.find((b) => b.id === selectedBranchId) || STORE_BRANCHES[0];

  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col font-sans select-none selection:bg-amber-500 selection:text-blue-950 scroll-smooth">
      
      {/* Top Banner alert with contact quick redirect */}
      <div className="w-full bg-blue-950 text-white py-2 px-4 text-center text-xs font-semibold flex items-center justify-center gap-3 border-b-2 border-amber-500 relative z-50">
        <span className="inline-flex items-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          Preços Especiais no Whatsapp Oficial:
        </span>
        <a 
          href="https://wa.me/5521990070506" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline text-amber-400 hover:text-white transition-colors font-bold flex items-center gap-1 cursor-pointer"
        >
          (21) 99007-0506 (Nova Angra)
          <ExternalLink className="w-3 h-3.5 inline" />
        </a>
        <span className="opacity-40 hidden sm:inline">|</span>
        <a 
          href="https://wa.me/552433650024" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline text-amber-400 hover:text-white transition-colors font-bold hidden sm:inline-flex items-center gap-1 cursor-pointer"
        >
          (24) 3365-0024 (Centro)
          <ExternalLink className="w-3 h-3.5 inline" />
        </a>
      </div>

      {/* Global Navigation Header props */}
      <Navbar 
        onScrollToSection={handleScrollToSection} 
        activeBranchWhatsapp={activeBranch.whatsapp || '5521990070506'}
      />

      {/* Sub sections components rendering */}
      <main className="flex-1">
        
        {/* Hero Segment */}
        <Hero 
          onScrollToCatalog={() => handleScrollToSection('catalog-section')} 
          onScrollToHistory={() => handleScrollToSection('history-section')} 
        />

        {/* Story Section */}
        <AboutUs />

        {/* Product Catalog list showcase and cart bindings */}
        <ProductCatalog 
          activeBranchWhatsapp={activeBranch.whatsapp || '5521990070506'}
          activeBranchName={activeBranch.name}
        />

        {/* Physical branch locations map section */}
        <Locations 
          selectedBranchId={selectedBranchId} 
          onSelectBranch={setSelectedBranchId} 
        />

        {/* Fast Action floating CTA button (WhatsApp Chat bottom right window) */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 scale-100 hover:scale-102 active:scale-98 transition-all">
          <a
            href={`https://wa.me/${activeBranch.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 sm:px-5 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/30 transition-all cursor-pointer"
            title="Fale Conosco"
          >
            <MessageSquare className="h-5 w-5 fill-white" />
            <span className="hidden sm:inline">Falar no WhatsApp ({activeBranch.id === 'nova_angra' ? 'Nova Angra' : 'Centro'})</span>
          </a>
        </div>

      </main>

      {/* Structured Footer props */}
      <Footer onScrollToSection={handleScrollToSection} />

    </div>
  );
}
