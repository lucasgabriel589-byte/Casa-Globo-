/**
 * Dados institucionais e comerciais da Casa Globo.
 *
 * Este arquivo concentra a linha do tempo da empresa, as filiais e o catálogo
 * de produtos. Alterações de conteúdo normalmente devem ser feitas aqui,
 * sem misturar dados de negócio com a estrutura visual dos componentes.
 */

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
  // --- Categoria: pesca ---
  {
    id: 'p1',
    name: 'Molinete de Alta Performance Marítima',
    category: 'pesca',
    description: 'Molinete japonês com rolamentos blindados em aço inox, anti-reverso instantâneo e alta força de fricção (drag), ideal para pesca embarcada em Angra.',
    featured: true,
    badge: 'Mais Vendido',
    image: '/images/product-p1-molinete.jpg'
  },
  {
    id: 'p2',
    name: 'Vara de Pesca Carbono Maruri',
    category: 'pesca',
    description: 'Vara super leve de carbono maciço de ação rápida. Excelente sensibilidade para iscas artificiais e pesca de arremesso.',
    featured: true,
    image: '/images/product-p2-vara-pesca.jpg'
  },
  {
    id: 'p3',
    name: 'Iscas Artificiais Premium (Kit Flexível/Plugs)',
    category: 'pesca',
    description: 'Iscas de meia-água e fundo em cores ultra atrativas para captura de Robalos, Garoupas e Sororocas.',
    featured: false,
    image: '/images/product-p3-iscas.jpg'
  },
  {
    id: 'p4',
    name: 'Linha Multifilamento 8 fios 150m',
    category: 'pesca',
    description: 'Livre de memória com elasticidade zero. Diâmetro super reduzido para arremessos longos e incrível resistência à abrasão marítima.',
    featured: false,
    image: '/images/product-p4-linha.jpg'
  },

  // --- Categoria: náutica ---
  {
    id: 'n1',
    name: 'Defensas Marítimas Reforçadas',
    category: 'nautica',
    description: 'Defensas em PVC flexível de alta durabilidade com proteção UV e olhais duplos para máxima segurança ao atracar na marina.',
    featured: true,
    badge: 'Essencial',
    image: '/images/product-n1-defensas.jpg'
  },
  {
    id: 'n2',
    name: 'Boia de Arrasto Tubo Rebocável (Donut / Banana)',
    category: 'nautica',
    description: 'Boia inflável para esportes aquáticos, revestida em nylon de alta resistência com alças acolchoadas. Diversão garantida em Angra.',
    featured: true,
    badge: 'Esportes',
    image: '/images/product-n2-boia-arrasto.jpg'
  },
  {
    id: 'n3',
    name: 'Colete Salva-Vidas Classe V Homologado',
    category: 'nautica',
    description: 'Colete homologado pela Marinha do Brasil. Confeccionado em nylon ripstop e preenchido com espuma resistente a impactos.',
    featured: true,
    image: '/images/product-n3-colete.jpg'
  },
  {
    id: 'n4',
    name: 'Âncora Bruce Galvanizada a Fogo',
    category: 'nautica',
    description: 'Excepcional poder de garra e estabilidade em fundos de areia e lodo. Fabricada em aço fundido com acabamento galvanizado reforçado.',
    featured: false,
    image: '/images/product-n4-ancora.jpg'
  },
  {
    id: 'n5',
    name: 'Manilha Rápida e Giratórios Inox 316',
    category: 'nautica',
    description: 'Acessórios inoxidáveis de alta resistência à corrosão, indispensáveis para sistemas de ancoragem segura.',
    featured: false,
    image: '/images/product-n5-manilhas.jpg'
  },

  // --- Categoria: piscina ---
  {
    id: 'm1',
    name: 'Cloro Estabilizado Hidroall 10 em 1',
    category: 'piscina',
    description: 'Cloro multiativo de dissolução lenta que purifica, clarifica, desinfeta, previne algas e preserva a cristalinidade da água.',
    featured: true,
    badge: 'Destaque',
    image: '/images/product-m1-cloro.jpg'
  },
  {
    id: 'm2',
    name: 'Kit de Limpeza Profissional (Mangueira e Aspirador)',
    category: 'piscina',
    description: 'Aspirador asa delta com cerdas de nylon e mangueira flexível flutuante para limpeza ágil do fundo de piscinas residenciais.',
    featured: false,
    image: '/images/product-m2-kit-limpeza.jpg'
  },
  {
    id: 'm3',
    name: 'Algicida de Manutenção e Choque',
    category: 'piscina',
    description: 'Evita a proliferação de algas (água verde) e restaura o brilho esmeralda de piscinas sem manchar o revestimento.',
    featured: false,
    image: '/images/product-m3-algicida.jpg'
  },
  {
    id: 'm4',
    name: 'Estojo de Teste pH e Cloro Ativo',
    category: 'piscina',
    description: 'Kit de análise rápida para aferir os níveis de pH e cloro, garantindo uma água saudável para toda a família.',
    featured: false,
    image: '/images/product-m4-teste-ph.jpg'
  },

  // --- Categoria: lazer ---
  {
    id: 'l1',
    name: 'Caiaque de Pesca Rotomoldado com Pedal',
    category: 'lazer',
    description: 'Caiaque individual extremamente estável com suporte de varas integrado, leme direcional e compartimentos estanques para carregar equipamentos.',
    featured: true,
    badge: 'Novidade',
    image: '/images/product-l1-caiaque.jpg'
  },
  {
    id: 'l2',
    name: 'Caixa Térmica robusta Coleman Marine',
    category: 'lazer',
    description: 'Mantém o gelo por dias em condições quentes de praia ou barco. Alça confortável e dreno integrado de fácil limpeza.',
    featured: true,
    image: '/images/product-l2-caixa-termica.jpg'
  },
  {
    id: 'l3',
    name: 'Boias de Piscina Divertidas e Clássicas (Espaguete)',
    category: 'lazer',
    description: 'Flutuadores coloridos e boias de arrasto esportivo para todos os momentos de recreação sob o sol de Angra.',
    featured: false,
    image: '/images/product-l3-boias.jpg'
  },

  // --- Categoria: ferramentas ---
  {
    id: 'f1',
    name: 'Alicate Multifunção de Pesca em Alumínio Marino',
    category: 'ferramentas',
    description: 'Resistente à corrosão, para troca de argolas de isca (split ring), corte de linhas de multifilamento e cabo de aço.',
    featured: true,
    image: '/images/product-f1-alicate-pesca.jpg'
  },
  {
    id: 'f2',
    name: 'Lanternas Táticas Impermeáveis Recarregáveis',
    category: 'ferramentas',
    description: 'Alta potência de iluminação com carcaça de alumínio aeronáutico e vedação contra infiltrações em passeios noturnos ou acampamento.',
    featured: false,
    image: '/images/product-f2-lanterna.jpg'
  }
];
