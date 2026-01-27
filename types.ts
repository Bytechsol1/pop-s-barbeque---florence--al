
export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: 'Sandwiches' | 'Plates' | 'Meat' | 'Sides';
}

export interface Review {
  id: string;
  author: string;
  location?: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  source: string;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  address: string;
  hours: { [key: string]: string };
  yearsInBusiness: number;
  categories: string[];
  amenities: string[];
}
