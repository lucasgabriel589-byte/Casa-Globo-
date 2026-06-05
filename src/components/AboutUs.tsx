import { useState } from 'react';
import { motion } from 'motion/react';
import { STORE_HISTORY } from '../data';
import { Calendar, Compass, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

export default function AboutUs() {
  const [activeMilestone, setActiveMilestone] = useState<number>(STORE_HISTORY.length - 1);

  return (
    <section id="history-section" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative BG Grid */}
      <div className="absolute inset-0 bg-radial-[circle_800px_at_100%_200px] from-slate-50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-900 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-100">
            <Compass className="h-3.5 w-3.5 text-blue-700 animate-spin-slow" />
            Tradição & Confiança
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase italic">
            Mais de 50 Anos de Parceria em Angra
          </h2>
          <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed">
            Desde 1974, a <span className="font-bold text-blue-900 uppercase italic">Casa Globo</span> é o ponto de encontro de marinheiros, pescadores e proprietários de imóveis na Costa Verde. Conheça nossa história de dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Mission, Vision, and Values Block (4 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-3xl p-8 shadow-xl space-y-6 relative overflow-hidden border border-blue-900">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-3 border-l-4 border-amber-500 pl-4">
                <div>
                  <span className="text-[10px] bg-amber-500 text-blue-950 font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">Slogan oficial</span>
                </div>
                <blockquote className="text-xl md:text-2xl font-bold tracking-tight italic text-amber-400">
                  "Um mundo de soluções para você."
                </blockquote>
              </div>

              <p className="text-blue-100/90 text-sm font-light leading-relaxed">
                Essa frase sintetiza nossa essência. Trabalhamos incansavelmente para garantir que você encontre tudo o que precisa em um único lugar, com a garantia de quem conhece as águas de Angra como ninguém.
              </p>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-white/10 rounded-xl text-amber-400 shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Segurança & Qualidade</h4>
                    <p className="text-xs text-blue-200/95 mt-1">Produtos homologados e certificados pelas principais marcas do mercado de náutica e salvatagem.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-white/10 rounded-xl text-amber-400 shrink-0">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Atendimento Familiar</h4>
                    <p className="text-xs text-blue-200/95 mt-1">Compromisso com cada cliente. Damos consultoria na compra de produtos químicos de piscina e dicas do melhor material de pesca.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick trust fact badge */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center gap-4">
              <div className="p-3 bg-blue-900 text-amber-400 rounded-xl shadow-xs font-black text-xl shrink-0">
                50+
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">Meio Século de Sucesso</p>
                <p className="text-xs text-slate-505 mt-1">Atendendo marinhas, hotéis, pousadas, residências e barcos de toda a região.</p>
              </div>
            </div>
          </div>

          {/* Interactive Timeline Milestone (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-900" />
              Nossa Cronologia de Conquistas
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-8">
              {STORE_HISTORY.map((milestone, idx) => {
                const isActive = activeMilestone === idx;

                return (
                  <div 
                    key={milestone.year}
                    className="relative cursor-pointer group"
                    onClick={() => setActiveMilestone(idx)}
                  >
                    {/* Timeline circle bullet indicator */}
                    <div className={`absolute -left-[32px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-amber-500 border-blue-900 scale-120 shadow-md shadow-blue-900/35' 
                        : 'bg-white border-slate-300 group-hover:border-blue-700'
                    }`} />

                    <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-slate-50 border-slate-100 shadow-xs' 
                        : 'bg-transparent border-transparent hover:bg-slate-50/35 hover:border-slate-100/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <span className={`font-black text-sm px-2.5 py-1 rounded-md transition-colors ${
                          isActive 
                            ? 'bg-blue-900 text-white' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {milestone.year}
                        </span>
                        <h4 className="font-bold text-slate-800 text-sm sm:text-base">{milestone.title}</h4>
                      </div>
                      
                      <p className={`text-xs sm:text-sm text-slate-500 leading-relaxed mt-2 overflow-hidden transition-all duration-300 ${
                        isActive ? 'max-h-36 opacity-100' : 'max-h-0 sm:max-h-none opacity-50 sm:opacity-75'
                      }`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
