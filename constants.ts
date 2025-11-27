import { Project, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Residência Aurora",
    category: "Residencial",
    imageUrl: "https://picsum.photos/id/10/1200/800",
    location: "Maringá, PR"
  },
  {
    id: 2,
    title: "Loft Skyline",
    category: "Interiores",
    imageUrl: "https://picsum.photos/id/14/1200/800",
    location: "Zona 07, Maringá"
  },
  {
    id: 3,
    title: "Complexo Empresarial Horizon",
    category: "Comercial",
    imageUrl: "https://picsum.photos/id/16/1200/800",
    location: "Centro Cívico"
  },
  {
    id: 4,
    title: "Villa Bosque",
    category: "Residencial",
    imageUrl: "https://picsum.photos/id/28/1200/800",
    location: "Cond. Villagio"
  },
  {
    id: 5,
    title: "Espaço Gourmet Zen",
    category: "Lazer",
    imageUrl: "https://picsum.photos/id/42/1200/800",
    location: "Horto Florestal"
  },
  {
    id: 6,
    title: "Boutique Vivre",
    category: "Comercial",
    imageUrl: "https://picsum.photos/id/48/1200/800",
    location: "Shopping Catuaí"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "A equipe Kendy + Kobayashi superou todas as nossas expectativas. Eles transformaram nossa casa em um verdadeiro lar, captando exatamente nossa essência.",
    author: "Ana Clara & Rafael",
    projectInfo: "Residência Aurora",
    imageUrl: "https://picsum.photos/id/64/150/150"
  },
  {
    id: 2,
    quote: "Profissionalismo impecável e um gosto refinado. O projeto comercial trouxe uma nova vida para nossa marca.",
    author: "Carlos Eduardo",
    projectInfo: "CEO da TechSolutions",
    imageUrl: "https://picsum.photos/id/91/150/150"
  },
  {
    id: 3,
    quote: "Cada detalhe foi pensado com carinho. A funcionalidade unida à estética minimalista é o ponto alto do escritório.",
    author: "Mariana Souza",
    projectInfo: "Renovação Interiores",
    imageUrl: "https://picsum.photos/id/65/150/150"
  }
];

export const CATEGORIES = ['Todos', 'Residencial', 'Interiores', 'Comercial', 'Lazer'];