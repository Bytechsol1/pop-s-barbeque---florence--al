
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InfoCards />
      
      {/* Years in Business Feature Section */}
      <section className="bg-stone-900 py-16 text-center border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4">
            <div className="text-4xl font-bold text-orange-600 mb-2 font-serif">28 Years</div>
            <div className="text-stone-400 uppercase tracking-widest text-sm font-bold">In Business</div>
          </div>
          <div className="p-4 border-stone-800 sm:border-x">
            <div className="text-4xl font-bold text-orange-600 mb-2 font-serif">8 Years</div>
            <div className="text-stone-400 uppercase tracking-widest text-sm font-bold">on Yellow Pages</div>
          </div>
          <div className="p-4 hidden lg:block">
            <div className="text-4xl font-bold text-orange-600 mb-2 font-serif">100%</div>
            <div className="text-stone-400 uppercase tracking-widest text-sm font-bold">Southern Passion</div>
          </div>
        </div>
      </section>

      <Menu />
      
      {/* Featured Quote / Gallery Teaser */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2000&auto=format&fit=crop" 
          alt="BBQ Grilling" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px] flex items-center justify-center p-8">
          <div className="max-w-3xl text-center">
            <svg className="w-12 h-12 text-orange-600 mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl sm:text-3xl font-serif italic text-white leading-relaxed">
              "The smoked chicken with white sauce was delicious and amazing... old fashioned goodness in a nice country setting."
            </p>
            <div className="mt-6 text-orange-400 font-bold tracking-widest uppercase text-sm">— A Happy Customer</div>
          </div>
        </div>
      </section>

      <Reviews />
      
      {/* Amenities & Payment Info */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6">Our Amenities</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center text-stone-600">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Free Parking Lot
                </li>
                <li className="flex items-center text-stone-600">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Wheelchair Accessible
                </li>
                <li className="flex items-center text-stone-600">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Takeout Available
                </li>
                <li className="flex items-center text-stone-600">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Catering Services
                </li>
              </ul>
            </div>
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
              <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-stone-400">Payment Methods</h3>
              <div className="flex flex-wrap gap-4 text-stone-700 font-medium">
                <span>Visa</span> • <span>Mastercard</span> • <span>Amex</span> • <span>Discover</span> • <span>Cash</span> • <span>Debit</span>
              </div>
              <div className="mt-8">
                <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-stone-400">Nearby Areas</h3>
                <div className="flex gap-4 text-stone-600 text-sm">
                  <span className="bg-white px-3 py-1 rounded-md shadow-sm border border-stone-200">Sheffield</span>
                  <span className="bg-white px-3 py-1 rounded-md shadow-sm border border-stone-200">Killen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
