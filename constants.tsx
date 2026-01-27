
import { MenuItem, Review, BusinessInfo } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Pop's Barbeque",
  phone: "(256) 766-4574",
  address: "3477 County Road 61, Florence, AL 35634",
  yearsInBusiness: 28,
  categories: ["Restaurants", "Barbecue Restaurants", "Caterers"],
  amenities: ["Parking: Lot, Free", "Wheelchair Accessible: Yes"],
  hours: {
    "Mon - Sat": "10:00 am - 7:00 pm",
    "Sun": "Closed"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Smoked BBQ Chicken Sandwich',
    price: '$3.69',
    description: 'Juicy, hand-pulled smoked chicken on a toasted bun with our signature white sauce.',
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Pulled Pork Sandwich',
    price: '$4.50',
    description: 'The local favorite. Slow-smoked for 12 hours and hand-pulled.',
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1527335432749-db7187272884?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Half BBQ Chicken Plate',
    price: '$8.30',
    description: 'A massive half-chicken, smoked with hickory and oak. Served with two traditional sides.',
    category: 'Plates',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Pulled Pork Plate',
    price: '$9.50',
    description: 'Heaping pile of our famous pork, white bread, and your choice of two sides.',
    category: 'Plates',
    image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'BBQ Pork (per Pound)',
    price: '$9.68',
    description: 'Pure, unadulterated smoked pork goodness. Perfect for feeding the whole family.',
    category: 'Meat',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Homemade Potato Salad',
    price: '$2.50',
    description: 'Creamy, Southern-style potato salad made fresh every morning.',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1604328701705-e990c74b92b6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'Golden Fried Okra',
    price: '$2.50',
    description: 'Lightly breaded and fried until perfectly crisp and golden.',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Judy B',
    date: '04/05/2024',
    rating: 1,
    title: 'Don’t go there',
    content: 'Terrible. Food was cold. French fries not cooked all the way through. Pulled pork was cold and had some type of terrible relish on it. Price was high for something served on paper plates and poor quality.',
    source: 'TripAdvisor'
  },
  {
    id: 'r2',
    author: 'waknstak2016',
    location: 'Illinois',
    date: '07/06/2019',
    rating: 3,
    title: 'Left hungry',
    content: 'Pulled pork was tender and had a good flavor. Unfortunately there just wasn’t very much of it. Sides were decent but nothing special.',
    source: 'TripAdvisor'
  },
  {
    id: 'r3',
    author: 'JustJules15',
    location: 'Campbell River, Canada',
    date: '04/05/2018',
    rating: 5,
    title: 'Amazing smoked chicken',
    content: 'The smoked chicken with white sauce was delicious and amazing, and a really great value. I got okra and potato salad as my sides, and I cannot tell you how much I loved the potato salad!',
    source: 'TripAdvisor'
  },
  {
    id: 'r4',
    author: 'debbiewA9748BN',
    location: 'Florence, Alabama',
    date: '01/27/2018',
    rating: 5,
    title: 'Old Fashioned Goodness',
    content: 'Had the smoked chicken and it was fabulous!! The service is friendly in a nice country setting. You can’t miss this place.. it has a giant chicken and pig out front!',
    source: 'TripAdvisor'
  },
  {
    id: 'r5',
    author: '466lestert',
    location: 'Florence, Alabama',
    date: '07/10/2017',
    rating: 2,
    title: 'Not as good as I would have expected',
    content: 'The food was less tasteful and rather pricey considering you eat on disposable plates, etc. The cold slaw was not good to us and the pork was not very smokey flavored. I do not recommend.',
    source: 'TripAdvisor'
  }
];
