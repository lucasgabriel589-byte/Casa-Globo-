import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCT_CATALOG } from '../data';
import { Search, Fish, Anchor, Droplets, Waves, Wrench, MessageSquare, Star, Compass, HelpCircle, Flame } from 'lucide-react';

interface ProductCatalogProps {
  activeBranchWhatsapp: string;
  activeBranchName: string;
}

type CatalogCategory = 'tudo' | 'pesca' | 'nautica' | 'piscina' | 'lazer' | 'ferramentas';

export default function ProductCatalog({ activeBranchWhatsapp, activeBranchName }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CatalogCategory>('tudo');
  const [searchQuery, setSearchQuery] = useState('');

  // Filters catalog based on active category and search input
  const filteredProducts = PRODUCT_CATALOG.filter((product) => {
    const matchesCategory = activeCategory === 'tudo' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'pesca':
        return <Fish className="h-5 w-5" />;
      case 'nautica':
        return <Anchor className="h-5 w-5" />;
      case 'piscina':
        return <Droplets className="h-5 w-5" />;
      case 'lazer':
        return <Waves className="h-5 w-5" />;
      case 'ferramentas':
        return <Wrench className="h-5 w-5" />;
      default:
        return <Compass className="h-5 w-5" />;
    }
  };

  const getCategoryImageBg = (category: string) => {
    switch (category) {
      case 'pesca':
        return 'from-sky-700 via-sky-850 to-blue-900';
      case 'nautica':
        return 'from-blue-900 via-blue-950 to-indigo-950';
      case 'piscina':
        return 'from-cyan-400 via-teal-600 to-blue-800';
      case 'lazer':
        return 'from-emerald-500 via-teal-600 to-sky-700';
      case 'ferramentas':
        return 'from-slate-700 via-slate-800 to-slate-900';
      default:
        return 'from-blue-700 to-blue-950';
    }
  };

  // Generate personalized WhatsApp link for a specific product
  const getWhatsAppProductLink = (product: Product) => {
    const defaultBranchSuffix = activeBranchName.includes('Nova Angra') ? 'Nova Angra' : 'Centro';
    const message = `Olá Casa Globo (${defaultBranchSuffix})! Gostaria de saber mais informações, disponibilidade e valores sobre o produto listado em seu catálogo digital:\n\n*Produto:* ${product.name}\n*Categoria:* ${product.category.toUpperCase()}\n\nPor favor, como posso prosseguir com o atendimento?`;
    return `https://wa.me/${activeBranchWhatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="catalog-section" className="py-24 bg-slate-50 relative overflow-hidden text-left">
      {/* Background ripples */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              Vitrine de Demonstração
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase italic">
              Nossos Principais Produtos
            </h2>
            <p className="text-slate-505 max-w-xl text-sm md:text-base font-light leading-relaxed">
              Consulte nosso portfólio de soluções náuticas, de pesca, piscina e lazer. Clique em "Saber Mais" para abrir um canal de atendimento direto no WhatsApp com preenchimento automático fácil!
            </p>
          </div>

          {/* Styled search input bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Buscar em nosso estoque..."
              className="w-full bg-white border border-slate-200 outline-hidden rounded-2xl py-3 pl-11 pr-4 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all placeholder:text-slate-400 text-slate-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-400" />
          </div>
        </div>

        {/* Categories Tab Selectors */}
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-none snap-x snap-mandatory">
          {[
            { id: 'tudo', label: 'Tudo', icon: <Compass className="h-4 w-4" /> },
            { id: 'pesca', label: 'Pesca', icon: <Fish className="h-4 w-4" /> },
            { id: 'nautica', label: 'Náutica & Barcos', icon: <Anchor className="h-4 w-4" /> },
            { id: 'piscina', label: 'Piscinas & Química', icon: <Droplets className="h-4 w-4" /> },
            { id: 'lazer', label: 'Lazer & Esportes', icon: <Waves className="h-4 w-4" /> },
            { id: 'ferramentas', label: 'Ferramentas & Tintas', icon: <Wrench className="h-4 w-4" /> },
          ].map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CatalogCategory)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer snap-start shrink-0 border-b-4 ${
                  isActive
                    ? 'bg-blue-900 border-amber-500 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-350 border-b-transparent'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Informative selected branch status label */}
        <div className="bg-blue-950 text-white rounded-2xl p-4.5 mt-8 mb-4 border-l-4 border-amber-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20 shrink-0">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="font-bold text-sm text-white uppercase tracking-wider">Atendimento Customizado por WhatsApp</p>
              <p className="text-xs text-blue-200 md:max-w-xl font-light">
                Dúvidas sobre marcas, tamanhos ou valores? Suas consultas de produtos estão direcionadas para a unidade <strong className="text-amber-400 font-bold">{activeBranchName}</strong>. Você pode alternar a filial de atendimento a qualquer momento na seção seguinte.
              </p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-center shrink-0 self-stretch md:self-auto flex flex-col justify-center">
            <span className="text-[9px] uppercase tracking-widest text-slate-300 font-bold block">Canal Ativo</span>
            <span className="text-xs font-black text-amber-400 font-mono tracking-wide">
              {activeBranchWhatsapp === '5521990070506' ? '(21) 99007-0506' : '(24) 3365-0024'}
            </span>
          </div>
        </div>

        {/* Grid Catalog Display */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100/80 mt-8">
            <p className="text-slate-400 text-base">Nenhum produto encontrado na busca atual.</p>
            <button 
              onClick={() => { setActiveCategory('tudo'); setSearchQuery(''); }}
              className="text-blue-900 font-bold hover:underline text-sm mt-2 cursor-pointer"
            >
              Limpar filtros e rebuscar
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredProducts.map((product) => {
              return (
                <div 
                  key={product.id}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-300 flex flex-col h-full group"
                >
                  
                  {/* High Quality Product Representation Image */}
                  <div className="h-48 relative overflow-hidden bg-slate-900 flex flex-col justify-between p-5 text-white">
                    {/* The Image fallback to gradient */}
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                        id={`prod-img-${product.id}`}
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryImageBg(product.category)}`} />
                    )}
                    
                    {/* Visual filter overlay for elite text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/45" />

                    {/* Badge Row */}
                    <div className="flex items-center justify-between w-full relative z-10">
                      <span className="p-2 bg-slate-900/85 backdrop-blur-md rounded-xl text-white border border-white/10 shadow-sm">
                        {getCategoryIcon(product.category)}
                      </span>
                      {product.badge && (
                        <span className="text-[10px] font-extrabold bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                          <Flame className="h-3 w-3 fill-slate-950 stroke-none" />
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Slogan metadata badge */}
                    <div className="relative z-10 text-left">
                      <span className="text-[9px] uppercase tracking-widest font-extrabold bg-amber-500 text-blue-950 px-2 py-0.5 rounded shadow-sm">
                        {product.category === 'piscina' ? 'piscina & química' : product.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2 text-left">
                      <h4 className="font-black text-slate-800 text-base md:text-lg tracking-tight uppercase leading-snug hover:text-blue-900 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-left">
                      <div>
                        <span className="text-[9px] font-extrabold text-slate-400 block uppercase tracking-wider">Disponibilidade</span>
                        <span className="text-emerald-600 font-extrabold text-xs flex items-center gap-1 uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                          Sob Consulta
                        </span>
                      </div>

                      {/* Direct WhatsApp Action Link */}
                      <a
                        href={getWhatsAppProductLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 bg-amber-500 text-blue-950 hover:bg-amber-400 rounded-xl font-black text-xs flex items-center gap-1.5 transition-all scale-100 active:scale-95 cursor-pointer uppercase tracking-wider shadow-sm shadow-amber-500/10 shrink-0 select-none"
                        id={`whatsapp-link-${product.id}`}
                      >
                        <MessageSquare className="h-3.5 w-3.5 fill-blue-950" />
                        Saber Mais
                      </a>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
