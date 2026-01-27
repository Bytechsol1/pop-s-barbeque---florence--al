
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 pt-20 pb-10 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-bold font-serif text-stone-900 mb-6">Pop's Barbeque</h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Southern tradition at its finest. Since 1996, we've been the go-to spot 
              for authentic Alabama BBQ in the Florence area.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16 3H8C5.24 3 3 5.24 3 8v8c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5zm-4 11a3 3 0 110-6 3 3 0 010 6zm5-7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-stone-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#home" className="hover:text-orange-600 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-orange-600 transition-colors">Menu</a></li>
              <li><a href="#reviews" className="hover:text-orange-600 transition-colors">Reviews</a></li>
              <li><a href="#location" className="hover:text-orange-600 transition-colors">Find Location</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-stone-900 mb-6 uppercase tracking-wider text-sm">Contact Details</h3>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-orange-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {BUSINESS_INFO.address}
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-orange-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS_INFO.phone}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-stone-900 mb-6 uppercase tracking-wider text-sm">Our Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {BUSINESS_INFO.categories.map(cat => (
                <span key={cat} className="bg-stone-200 text-stone-600 text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-200 text-center md:flex md:justify-between items-center text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Pop's Barbeque. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-stone-600">Privacy Policy</a>
            <a href="#" className="hover:text-stone-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
