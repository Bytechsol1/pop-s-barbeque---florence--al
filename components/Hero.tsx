
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ 
          backgroundImage: `linear-gradient(rgba(45, 27, 20, 0.6), rgba(20, 10, 5, 0.85)), url('https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2000&auto=format&fit=crop')` 
        }}
      />
      
      {/* Floating Sparkles/Smoke Effect Overlay */}
      <div className="absolute inset-0 z-1 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-[160px] animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-4 mb-6 animate-fade-in">
          <div className="h-px w-8 sm:w-12 bg-orange-500"></div>
          <span className="text-orange-400 font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">
            Florence, Alabama Tradition Since 1996
          </span>
          <div className="h-px w-8 sm:w-12 bg-orange-500"></div>
        </div>
        
        <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-bold text-white mb-8 font-serif drop-shadow-2xl leading-tight">
          Pop's <span className="italic text-orange-500">Barbeque</span>
        </h1>
        
        <p className="text-lg sm:text-2xl text-stone-200 mb-12 max-w-2xl mx-auto font-serif italic leading-relaxed opacity-90">
          "The secret isn't in the sauce, it's in the <span className="text-white font-bold underline decoration-orange-600 underline-offset-8">time</span> we take."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#menu" 
            className="group relative bg-orange-700 hover:bg-orange-600 text-white px-10 py-5 rounded-md font-bold text-lg transition-all shadow-2xl active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 uppercase tracking-widest text-sm">Explore the Menu</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a 
            href="tel:2567664574" 
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-stone-900 text-white px-10 py-5 rounded-md font-bold text-lg transition-all shadow-xl uppercase tracking-widest text-sm"
          >
            Order Online
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-orange-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
