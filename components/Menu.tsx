
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Sandwiches', 'Plates', 'Meat', 'Sides'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-700 font-bold tracking-[0.2em] uppercase text-xs mb-2 block">The Main Event</span>
          <h2 className="text-5xl font-bold text-stone-900 mb-4 font-serif">Slow Smoked Menu</h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-stone-500 max-w-2xl mx-auto italic font-serif text-lg">
            "We do it the old-fashioned way because that's the only way that matters."
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-md font-bold transition-all border-2 ${
                activeCategory === category
                  ? 'bg-orange-800 border-orange-800 text-white shadow-lg translate-y-[-2px]'
                  : 'bg-white border-stone-200 text-stone-600 hover:border-orange-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 transition-all hover:shadow-2xl hover:translate-y-[-4px]"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-amber-600 text-white px-4 py-2 font-bold font-serif text-lg shadow-lg rounded-bl-xl">
                  {item.price}
                </div>
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full">
                  <span className="text-white text-[10px] uppercase font-bold tracking-widest bg-orange-700 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-serif group-hover:text-orange-800 transition-colors">
                  {item.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 h-12 overflow-hidden line-clamp-2">
                  {item.description}
                </p>
                <button className="w-full py-3 rounded bg-stone-50 text-stone-700 font-bold text-sm border border-stone-200 hover:bg-orange-800 hover:text-white hover:border-orange-800 transition-all uppercase tracking-widest">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-stone-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
             <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold font-serif mb-2 text-orange-400">Planning an Event?</h3>
            <p className="text-stone-400 max-w-md">Our catering brings 28 years of BBQ expertise directly to your party, wedding, or corporate event.</p>
          </div>
          <button className="relative z-10 bg-orange-700 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl whitespace-nowrap">
            Get Catering Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
