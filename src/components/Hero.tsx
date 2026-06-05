import { motion } from 'motion/react';
import { Anchor, ArrowDown, Shield, Award, MapPin, Compass } from 'lucide-react';

interface HeroProps {
  onScrollToCatalog: () => void;
  onScrollToHistory: () => void;
}

export default function Hero({ onScrollToCatalog, onScrollToHistory }: HeroProps) {
  return (
    <section 
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial from-blue-900 via-blue-950 to-slate-950"
    >
      {/* Decorative Wave and Grid BG Overlays */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Porthole/Navy geometry decorative outlines from theme */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-16 left-10 w-36 h-36 border-4 border-white/45 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 border-8 border-white/20 rounded-full"></div>
      </div>

      {/* Soft Marine Ambient Lighting Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      {/* Decorative Anchor Silhouette background */}
      <div className="absolute right-10 bottom-10 opacity-5 pointer-events-none hidden lg:block transform rotate-12 scale-120">
        <Compass className="w-96 h-96 text-white stroke-[0.5]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text details */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 px-4 py-2 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider"
          >
            <Compass className="h-4 w-4 animate-spin-slow text-amber-400" />
            Um Mundo de Soluções — Angra dos Reis, RJ
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none uppercase italic drop-shadow-lg"
            >
              CASA GLOBO
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-2xl sm:text-3xl text-amber-450 font-bold tracking-tight italic"
            >
              Pesca, Náutica e Lazer há mais de 50 anos
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl font-light leading-relaxed"
            >
              Abastecemos sua embarcação, preparamos sua pescaria e cuidamos da sua piscina. Tudo para as melhores férias e o dia a dia na paradisíaca Baía da Ilha Grande.
            </motion.p>
          </div>

          {/* Theme custom pill badges block */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-2.5"
          >
            <span className="bg-white/10 backdrop-blur-xs border border-white/20 px-4 py-1.5 rounded-full text-white text-[11px] uppercase tracking-wider font-semibold">
              #1 em Angra dos Reis
            </span>
            <span className="bg-white/10 backdrop-blur-xs border border-white/20 px-4 py-1.5 rounded-full text-white text-[11px] uppercase tracking-wider font-semibold">
              Tradição Familiar desde 1974
            </span>
            <span className="bg-white/10 backdrop-blur-xs border border-white/20 px-4 py-1.5 rounded-full text-white text-[11px] uppercase tracking-wider font-semibold">
              Um Mundo de Soluções
            </span>
          </motion.div>

          {/* Core Feature Bullet Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-b border-white/10 py-6 max-w-lg"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/15 rounded-lg text-amber-400">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-none">Qualidade Garantida</p>
                <span className="text-[10px] text-slate-400">Marcas Líderes</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/15 rounded-lg text-amber-400">
                <Award className="h-4 w-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-none">50+ Anos de História</p>
                <span className="text-[10px] text-slate-400">Tradição Familiar</span>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <div className="p-2 bg-blue-500/15 rounded-lg text-amber-400">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-none">Duas Lojas Angra</p>
                <span className="text-[10px] text-slate-400">Centro & Nova Angra</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md"
          >
            <button
              onClick={onScrollToCatalog}
              className="flex-1 bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-blue-950 font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <Anchor className="h-4 w-4 animate-bounce" />
              Explorar Catálogo
            </button>
            <button
              onClick={onScrollToHistory}
              className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold py-4 px-6 rounded-2xl transition-all text-sm flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              Conhecer Nossa História
            </button>
          </motion.div>

        </div>

        {/* Right Column Interactive Visual Bento */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            {/* Bento Grid Item 1: Fishing */}
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-xl hover:-translate-y-1">
              <span className="text-2xl">🎣</span>
              <div>
                <h3 className="text-white font-bold text-sm mt-4">Pesca Extrema</h3>
                <p className="text-xs text-sky-200/80 mt-1 lines-2">Varas, carretilhas, iscas vivas/artificiais e acessórios.</p>
              </div>
            </div>

            {/* Bento Grid Item 2: Nautical */}
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-xl hover:-translate-y-1 mt-6">
              <span className="text-2xl">⚓</span>
              <div>
                <h3 className="text-white font-bold text-sm mt-4">Navegação e Peças</h3>
                <p className="text-xs text-sky-200/80 mt-1 lines-2">Ancoragem, defensas, salvatagem e ferragens in inox.</p>
              </div>
            </div>

            {/* Bento Grid Item 3: Swimming Pool */}
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-xl hover:-translate-y-1 -mt-6">
              <span className="text-2xl">💧</span>
              <div>
                <h3 className="text-white font-bold text-sm mt-4">Piscina Cristalina</h3>
                <p className="text-xs text-sky-200/80 mt-1 lines-2">Tratamento de água, cloros hidroall, decantadores e mangueiras.</p>
              </div>
            </div>

            {/* Bento Grid Item 4: Adventure / Kayaks */}
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-xl hover:-translate-y-1">
              <span className="text-2xl">🚣</span>
              <div>
                <h3 className="text-white font-bold text-sm mt-4">Lazer e Caiaques</h3>
                <p className="text-xs text-sky-200/80 mt-1 lines-2">Caiaques, boias de arrasto esportivo e artigos infláveis de camping.</p>
              </div>
            </div>

            {/* Floating Globe Badge in middle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-amber-400 to-amber-500 p-3.5 rounded-2xl shadow-xl shadow-amber-500/30 border-2 border-slate-950">
              <svg className="w-8 h-8 text-blue-950 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
                <path d="M2 12h20" strokeWidth="2" />
              </svg>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bounce bottom arrow indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 text-xs uppercase tracking-wider select-none animate-bounce">
        <span className="text-[10px] font-semibold opacity-60">Role para Explorar</span>
        <ArrowDown className="h-4 w-4 text-amber-500" />
      </div>
    </section>
  );
}
