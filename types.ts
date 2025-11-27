export interface Project {
  id: number;
  title: string;
  category: string; // 'Residencial' | 'Comercial' | 'Interiores' | 'Lazer'
  imageUrl: string;
  location: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  projectInfo: string;
  imageUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export type ProjectCategory = 'Todos' | 'Residencial' | 'Interiores' | 'Comercial' | 'Lazer';