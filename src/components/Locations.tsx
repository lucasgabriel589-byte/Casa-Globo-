import { useState } from 'react';
import { Branch } from '../types';
import { STORE_BRANCHES } from '../data';
import { MapPin, Phone, MessageSquare, Clock, Calendar, Compass, ExternalLink, ShieldCheck } from 'lucide-react';

interface LocationsProps {
  selectedBranchId: string;
  onSelectBranch: (branchId: string) => void;
}

export default function Locations({ selectedBranchId, onSelectBranch }: LocationsProps) {
  const [copiedTextId, setCopiedTextId] = useState<string | null>(null);

  const handleCopyAddress = (branch: Branch) => {
    navigator.clipboard.writeText(branch.address);
    setCopiedTextId(branch.id);
    setTimeout(() => {
      setCopiedTextId(null);
    }, 2000);
  };

  const currentBranch = STORE_BRANCHES.find(b => b.id === selectedBranchId) || STORE_BRANCHES[0];

  return (
    <section id="locations-section" className="py-24 bg-white relative overflow-hidden">
      {/* Wave element design */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none opacity-5" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider">
            <MapPin className="h-3.5 w-3.5 text-amber-600" />
            Nossas Lojas Físicas
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase italic">
            Venha nos Visitar em Angra dos Reis
          </h2>
          <p className="text-slate-505 text-sm md:text-base font-light leading-relaxed">
            Seja no Centro Histórico de Angra ou na ampla Nova Angra, temos uma equipe qualificada pronta para acolher você e cuidar das suas demandas marítimas ou de lazer.
          </p>
        </div>

        {/* Dynamic Branch Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Branch Switcher & Cards Panel (5 Cols) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider">Selecione uma loja para ver detalhes e cotações:</h3>
            
            <div className="space-y-4">
              {STORE_BRANCHES.map((branch) => {
                const isSelected = selectedBranchId === branch.id;

                return (
                  <div
                    key={branch.id}
                    onClick={() => onSelectBranch(branch.id)}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer relative group ${
                      isSelected
                        ? 'border-blue-900 bg-blue-50/10 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-350'
                    }`}
                  >
                    {/* Selected Indicator Badge */}
                    {isSelected && (
                      <span className="absolute top-4 right-4 bg-amber-500 text-blue-950 font-black text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Ativa para Orçamentos
                      </span>
                    )}

                    <div className="flex gap-4">
                      <div className={`p-3 rounded-xl transition-colors shrink-0 ${
                        isSelected ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}>
                        <Compass className="h-6 w-6" />
                      </div>

                      <div className="space-y-1 py-0.5">
                        <h4 className="font-extrabold text-slate-800 text-base">{branch.name}</h4>
                        <p className="text-xs text-slate-500 font-medium line-clamp-1">{branch.address}</p>
                        
                        <div className="flex items-center gap-3 text-xs text-slate-400 font-medium pt-2">
                          <span className="flex items-center gap-1.5 font-bold">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            {branch.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick delivery or call assist banner */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mt-4 space-y-3">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wide">Suporte Náutico Imediato</h4>
                  <p className="text-slate-500 text-xs mt-1">Consulte entrega expressa direto na sua marina, barco ou residência em Angra dos Reis. Facilitamos para você não perder seu passeio.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Detailed View Frame (7 Cols) */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200/70 p-6 sm:p-8 rounded-3xl text-left space-y-6">
            
            <div className="space-y-2">
              <div className="flex justify-between items-center whitespace-nowrap">
                <span className="text-[10px] bg-blue-900 text-white px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">Informações Úteis</span>
                <span className="text-xs text-slate-400 font-medium">CEP: {currentBranch.postalCode}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{currentBranch.name}</h3>
            </div>

            {/* Address Fact Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2 relative group">
              <span className="text-[10px] text-slate-400 font-semibold block uppercase">Endereço Oficial</span>
              <p className="text-slate-700 text-sm font-semibold">{currentBranch.address}</p>
              
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => handleCopyAddress(currentBranch)}
                  className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                  id={`copy-address-${currentBranch.id}`}
                >
                  {copiedTextId === currentBranch.id ? 'Copiado!' : 'Copiar Endereço'}
                </button>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentBranch.name + ' ' + currentBranch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-amber-500 text-blue-950 rounded-lg text-xs font-bold hover:bg-amber-400 transition-colors inline-flex items-center gap-1 cursor-pointer shadow-xs"
                >
                  Como Chegar (Google Maps)
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Standard Branch contacts list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 flex gap-3 items-center">
                <div className="p-2 w-10 h-10 bg-blue-50 text-blue-950 rounded-xl flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="py-0.5 text-left">
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">Telefone de Contato</span>
                  <p className="text-slate-800 font-bold text-sm">{currentBranch.phone}</p>
                </div>
              </div>

              {currentBranch.whatsapp && (
                <a
                  href={`https://wa.me/${currentBranch.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-slate-200 rounded-2xl p-4 flex gap-3 items-center hover:border-emerald-500 transition-all cursor-pointer group"
                >
                  <div className="p-2 w-10 h-10 bg-emerald-50 text-emerald-650 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageSquare className="h-5 w-5 fill-current" />
                  </div>
                  <div className="py-0.5 text-left">
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase">WhatsApp Direto</span>
                    <p className="text-slate-800 font-bold text-sm">{currentBranch.id === 'nova_angra' ? '(21) 99007-0506' : '(24) 3365-0024'}</p>
                  </div>
                </a>
              )}
            </div>

            {/* Operation schedules */}
            <div className="bg-white border border-slate-200 p-5 rounded-2xl flex gap-3 items-start">
              <Clock className="h-5 w-5 text-blue-901 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">Horário de Funcionamento</span>
                <p className="text-slate-700 text-xs sm:text-sm font-semibold">{currentBranch.hours}</p>
                <div className="text-[10px] text-amber-500 font-bold flex items-center gap-1 pt-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Exceto domingos e feriados nacionais prolongados.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
