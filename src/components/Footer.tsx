import { Anchor, Instagram, Phone, Compass, ShieldAlert, Navigation } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900/50 text-left relative overflow-hidden">
      {/* Wave details background layout */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/[0.015] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Slogan Column (4 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <button 
              onClick={() => onScrollToSection('hero-section')}
              className="flex items-center gap-3 text-left cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-extrabold text-lg shadow-md shrink-0">
                CG
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base uppercase tracking-wider leading-none">Casa Globo</h3>
                <span className="text-[10px] text-amber-400 font-bold tracking-wide">Um mundo de soluções para você.</span>
              </div>
            </button>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Soluções completas em materiais náuticos, pesca de lazer ou profissional, produtos químicos para piscinas, caiaques, boias de arrasto e muito mais em Angra dos Reis - RJ.
            </p>

            {/* Social channels bar */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/casagloborj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 text-slate-300 hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white rounded-xl transition-all shadow-md cursor-pointer inline-flex items-center gap-2 text-xs font-semibold"
                id="footer-instagram-link"
              >
                <Instagram className="h-4 w-4" />
                @casagloborj
              </a>
            </div>
          </div>

          {/* Quick Nav Links (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-900 pb-2">Links Rápidos</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { id: 'hero-section', name: 'Início / Principal' },
                { id: 'history-section', name: 'Nossa História (50 Anos)' },
                { id: 'catalog-section', name: 'Catálogo de Produtos' },
                { id: 'locations-section', name: 'Nossas Lojas & Mapas' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Summaries Columns (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-900 pb-2">Contatos Rápidos</h4>
            <div className="space-y-4 text-xs">
              
              <div className="space-y-1">
                <p className="font-semibold text-slate-205 flex items-center gap-1.5">
                  <Navigation className="h-3.5 w-3.5 text-blue-400 rotate-45" />
                  Casa Globo - Centro
                </p>
                <p className="text-slate-500">Av. Júlio Maria, 58 - Centro, Angra dos Reis - RJ</p>
                <p className="text-slate-400 font-medium">Fone: (24) 3365-0024</p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-900">
                <p className="font-semibold text-slate-205 flex items-center gap-1.5">
                  <Navigation className="h-3.5 w-3.5 text-blue-400 rotate-45" />
                  Casa Globo - Nova Angra
                </p>
                <p className="text-slate-500 font-medium">R. Francelino Alves de Lima, 174 - Nova Angra, Angra dos Reis - RJ</p>
                <p className="text-slate-400 font-medium">Cel/Whats: (21) 99007-0506 • Fone: (24) 3377-6937</p>
              </div>

            </div>
          </div>

        </div>

        {/* Footer bottom details */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {currentYear} Casa Globo. Todos os direitos reservados. Orgulhosamente servindo a Baía de Angra há 50 anos.</p>
          <div className="flex gap-4 items-center">
            <span className="hover:text-slate-350 transition-colors">Angra dos Reis - RJ, Brasil</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
