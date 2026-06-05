import { Product, Branch, HistoryMilestone } from './types';

export const STORE_HISTORY: HistoryMilestone[] = [
  {
    year: '1974',
    title: 'A Fundação',
    description: 'A Casa Globo nasce no coração de Angra dos Reis, atendendo à comunidade local com ferragens e artigos para pesca artesanal, logo se tornando referência para pescadores da Baía da Ilha Grande.'
  },
  {
    year: '1995',
    title: 'Expansão Náutica',
    description: 'Com o crescimento do turismo náutico na região, incorporamos uma linha completa de ferragens inoxidáveis, defensas, salvatagem e peças especializadas para barcos e lanchas.'
  },
  {
    year: '2010',
    title: 'Soluções Integradas',
    description: 'Expandimos nossa atuação com a linha de produtos químicos e equipamentos para piscinas, além de caiaques, boias de arrasto e artigos de lazer aquático, adotando o slogan "Um mundo de soluções para você."'
  },
  {
    year: '2020',
    title: 'Inauguração da Unidade Nova Angra',
    description: 'Uma nova loja ampla e moderna foi inaugurada para oferecer mais conforto, estacionamento próprio e uma variedade ainda maior de artigos de náutica, ferramentas e suprimentos.'
  },
  {
    year: 'Hoje',
    title: 'Mais de 50 Anos de Sucesso',
    description: 'Consolidada como o principal ponto de parada em Angra para pescadores, marinheiros, proprietários de barcos, hotéis e residências. Tradição, atendimento familiar e as melhores marcas do mercado.'
  }
];

export const STORE_BRANCHES: Branch[] = [
  {
    id: 'centro',
    name: 'Casa Globo - Centro',
    address: 'Av. Júlio Maria, 58 - Centro, Angra dos Reis - RJ',
    postalCode: '23900-502',
    phone: '(24) 3365-0024',
    whatsapp: '552433650024', // Standard international format
    coordinates: { lat: -23.007621, lng: -44.316886 },
    imageType: 'centro',
    hours: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00'
  },
  {
    id: 'nova_angra',
    name: 'Casa Globo - Nova Angra',
    address: 'R. Francelino Alves de Lima, 174 - Nova Angra, Angra dos Reis - RJ',
    postalCode: '23931-000',
    phone: '(24) 3377-6937',
    whatsapp: '5521990070506', // From image: (21) 99007-0506 / (21) 3377-6937
    coordinates: { lat: -22.986518, lng: -44.295484 },
    imageType: 'nova_angra',
    hours: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00'
  }
];

export const PRODUCT_CATALOG: Product[] = [
  // --- PESCA ---
  {
    id: 'p1',
    name: 'Molinete de Alta Performance Marítima',
    category: 'pesca',
    description: 'Molinete japonês com rolamentos blindados em aço inox, anti-reverso instantâneo e alta força de fricção (drag), ideal para pesca embarcada em Angra.',
    featured: true,
    badge: 'Mais Vendido',
    image: 'https://images.unsplash.com/photo-1611095787951-36a53c5f31e7?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'p2',
    name: 'Vara de Pesca Carbono Maruri',
    category: 'pesca',
    description: 'Vara super leve de carbono maciço de ação rápida. Excelente sensibilidade para iscas artificiais e pesca de arremesso.',
    featured: true,
    image: 'https://images.unsplash.com/photo-1517462964-21fdcec3f25b?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'p3',
    name: 'Iscas Artificiais Premium (Kit Flexível/Plugs)',
    category: 'pesca',
    description: 'Iscas de meia-água e fundo em cores ultra atrativas para captura de Robalos, Garoupas e Sororocas.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'p4',
    name: 'Linha Multifilamento 8 fios 150m',
    category: 'pesca',
    description: 'Livre de memória com elasticidade zero. Diâmetro super reduzido para arremessos longos e incrível resistência à abrasão marítima.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop&q=80'
  },

  // --- NÁUTICA ---
  {
    id: 'n1',
    name: 'Defensas Marítimas Reforçadas',
    category: 'nautica',
    description: 'Defensas em PVC flexível de alta durabilidade com proteção UV e olhais duplos para máxima segurança ao atracar na marina.',
    featured: true,
    badge: 'Essencial',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'n2',
    name: 'Boia de Arrasto Tubo Rebocável (Donut / Banana)',
    category: 'nautica',
    description: 'Boia inflável para esportes aquáticos, revestida em nylon de alta resistência com alças acolchoadas. Diversão garantida em Angra.',
    featured: true,
    badge: 'Esportes',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'n3',
    name: 'Colete Salva-Vidas Classe V Homologado',
    category: 'nautica',
    description: 'Colete homologado pela Marinha do Brasil. Confeccionado em nylon ripstop e preenchido com espuma resistente a impactos.',
    featured: true,
    image: 'https://images.unsplash.com/photo-1471958680802-1345a694ba6d?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'n4',
    name: 'Âncora Bruce Galvanizada a Fogo',
    category: 'nautica',
    description: 'Excepcional poder de garra e estabilidade em fundos de areia e lodo. Fabricada em aço fundido com acabamento galvanizado reforçado.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'n5',
    name: 'Manilha Rápida e Giratórios Inox 316',
    category: 'nautica',
    description: 'Acessórios inoxidáveis de alta resistência à corrosão, indispensáveis para sistemas de ancoragem segura.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?w=500&auto=format&fit=crop&q=80'
  },

  // --- PISCINA ---
  {
    id: 'm1',
    name: 'Cloro Estabilizado Hidroall 10 em 1',
    category: 'piscina',
    description: 'Cloro multiativo de dissolução lenta que purifica, clarifica, desinfeta, previne algas e preserva a cristalinidade da água.',
    featured: true,
    badge: 'Destaque',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'm2',
    name: 'Kit de Limpeza Profissional (Mangueira e Aspirador)',
    category: 'piscina',
    description: 'Aspirador asa delta com cerdas de nylon e mangueira flexível flutuante para limpeza ágil do fundo de piscinas residenciais.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'm3',
    name: 'Algicida de Manutenção e Choque',
    category: 'piscina',
    description: 'Evita a proliferação de algas (água verde) e restaura o brilho esmeralda de piscinas sem manchar o revestimento.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'm4',
    name: 'Estojo de Teste pH e Cloro Ativo',
    category: 'piscina',
    description: 'Kit de análise rápida para aferir os níveis de pH e cloro, garantindo uma água saudável para toda a família.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=500&auto=format&fit=crop&q=80'
  },

  // --- LAZER ---
  {
    id: 'l1',
    name: 'Caiaque de Pesca Rotomoldado com Pedal',
    category: 'lazer',
    description: 'Caiaque individual extremamente estável com suporte de varas integrado, leme direcional e compartimentos estanques para carregar equipamentos.',
    featured: true,
    badge: 'Novidade',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'l2',
    name: 'Caixa Térmica robusta Coleman Marine',
    category: 'lazer',
    description: 'Mantém o gelo por dias em condições quentes de praia ou barco. Alça confortável e dreno integrado de fácil limpeza.',
    featured: true,
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'l3',
    name: 'Boias de Piscina Divertidas e Clássicas (Espaguete)',
    category: 'lazer',
    description: 'Flutuadores coloridos e boias de arrasto esportivo para todos os momentos de recreação sob o sol de Angra.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?w=500&auto=format&fit=crop&q=80'
  },

  // --- FERRAMENTAS ---
  {
    id: 'f1',
    name: 'Alicate Multifunção de Pesca em Alumínio Marino',
    category: 'ferramentas',
    description: 'Resistente à corrosão, para troca de argolas de isca (split ring), corte de linhas de multifilamento e cabo de aço.',
    featured: true,
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'f2',
    name: 'Lanternas Táticas Impermeáveis Recarregáveis',
    category: 'ferramentas',
    description: 'Alta potência de iluminação com carcaça de alumínio aeronáutico e vedação contra infiltrações em passeios noturnos ou acampamento.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=500&auto=format&fit=crop&q=80'
  }
];
