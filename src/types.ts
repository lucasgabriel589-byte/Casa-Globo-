export interface Product {
  id: string;
  name: string;
  category: 'pesca' | 'nautica' | 'piscina' | 'lazer' | 'ferramentas';
  description: string;
  featured: boolean;
  image?: string;
  badge?: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  postalCode: string;
  phone: string;
  whatsapp?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  imageType: 'centro' | 'nova_angra';
  hours: string;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
}

