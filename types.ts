
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  experience: string;
}

export type Page = 'home' | 'categories' | 'category-detail' | 'highlights' | 'gallery' | 'about' | 'contact';
