
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const InfoCards: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Hours Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 font-serif">Store Hours</h3>
            <ul className="space-y-2 text-stone-600">
              {Object.entries(BUSINESS_INFO.hours).map(([days, hours]) => (
                <li key={days} className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="font-medium">{days}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Card */}
          <div id="location" className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 font-serif">Our Location</h3>
            <p className="text-stone-600 mb-4 leading-relaxed">
              {BUSINESS_INFO.address}
            </p>
            <a 
              href="https://maps.google.com/?q=3477+County+Road+61+Florence+AL+35634" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 font-semibold hover:underline flex items-center"
            >
              Get Directions 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 font-serif">Get in Touch</h3>
            <p className="text-stone-600 mb-6">
              Give us a call to place a takeout order or inquire about our catering services.
            </p>
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
              className="text-2xl font-bold text-stone-900 hover:text-orange-600 transition-colors"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoCards;
