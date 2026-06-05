import { useState, useEffect } from 'react';
import { MessageSquare, Anchor } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  activeBranchWhatsapp: string;
}

export default function Navbar({ onScrollToSection, activeBranchWhatsapp }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenToday, setIsOpenToday] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Simple logic to set "Open Now" status dynamically
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hour = now.getHours();
    
    if (day === 0) {
      setIsOpenToday(false); // Closed on Sundays
    } else if (day === 6) {
      setIsOpenToday(hour >= 8 && hour < 13); // Sat 8-13
    } else {
      setIsOpenToday(hour >= 8 && hour < 18); // Mon-Fri 8-18
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b-4 border-amber-500 ${
      isScrolled 
        ? 'bg-blue-900/95 backdrop-blur-md shadow-md py-3 text-white' 
        : 'bg-blue-900/80 backdrop-blur-md py-4 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            onClick={() => onScrollToSection('hero-section')}
            className="flex items-center gap-3 transition-transform hover:scale-[1.01] cursor-pointer text-left"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-extrabold text-lg shadow-md shrink-0">
              CG
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-extrabold text-lg tracking-wider md:text-xl uppercase text-white">Casa Globo</span>
                <span className="text-[10px] bg-amber-500 font-extrabold px-1.5 py-0.5 rounded text-blue-950 tracking-normal text-center min-w-[55px] inline-block">50 ANOS</span>
              </div>
              <p className="text-[10px] font-bold tracking-wide mt-0.5 text-blue-100">
                Angra dos Reis • Náutica & Pesca
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {[
              { id: 'hero-section', name: 'Início' },
              { id: 'history-section', name: 'Nossa História' },
              { id: 'catalog-section', name: 'Produtos' },
              { id: 'locations-section', name: 'Onde Estar' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollToSection(link.id)}
                className="transition-colors cursor-pointer relative py-1.5 group font-bold text-xs uppercase tracking-wider text-white/90 hover:text-amber-400"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* User Status / Action Button */}
          <div className="flex items-center gap-4">
            
            {/* Store Status Badge (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs">
              <span className={`relative flex h-2 w-2`}>
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpenToday ? 'bg-emerald-400' : 'bg-red-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpenToday ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
              </span>
              <span className="font-bold text-blue-100 uppercase tracking-widest text-[10px]">
                {isOpenToday ? 'Lojas Abertas' : 'Lojas Fechadas Agora'}
              </span>
            </div>

            {/* Direct WhatsApp Call Button */}
            <a
              href={`https://wa.me/${activeBranchWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 p-2.5 px-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-wider shadow-md transition-all scale-100 active:scale-95 cursor-pointer bg-amber-500 text-blue-950 hover:bg-amber-400"
              id="navbar-whatsapp-trigger"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Fale Conosco</span>
            </a>
          </div>
          
        </div>
      </div>
    </header>
  );
}
