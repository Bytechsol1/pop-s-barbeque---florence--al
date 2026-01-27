
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Roots', href: '#home' },
    { name: 'The Pit', href: '#menu' },
    { name: 'Vibe', href: '#reviews' },
    { name: 'Find Us', href: '#location' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-stone-900/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex flex-col items-start leading-none group">
              <span className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
                Pop's <span className="text-orange-500 group-hover:text-amber-400 transition-colors">BBQ</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-stone-400 font-bold ml-0.5">EST. 1996</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-300 hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:2567664574"
                className="bg-orange-700 hover:bg-orange-600 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95"
              >
                (256) 766-4574
              </a>
            </div>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
