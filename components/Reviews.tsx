
import React, { useState } from 'react';
import { REVIEWS } from '../constants';

const StarRating: React.FC<{ rating: number; size?: string; interactive?: boolean; onRate?: (r: number) => void }> = ({ rating, size = "w-5 h-5", interactive = false, onRate }) => {
  const [hovered, setHovered] = useState(0);
  
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          onClick={() => interactive && onRate && onRate(i + 1)}
          onMouseEnter={() => interactive && setHovered(i + 1)}
          onMouseLeave={() => interactive && setHovered(0)}
          className={`${size} cursor-pointer transition-colors ${
            (hovered || rating) > i ? 'text-amber-500 fill-current' : 'text-stone-300'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Reviews: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [newRating, setNewRating] = useState(0);

  return (
    <section id="reviews" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="text-left">
            <span className="text-orange-700 font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Word of Mouth</span>
            <h2 className="text-5xl font-bold text-stone-900 mb-4 font-serif">Customer Reviews</h2>
            <div className="w-16 h-1 bg-amber-600 mb-8 rounded-full"></div>
            <p className="text-stone-500 max-w-xl italic font-serif text-lg leading-relaxed">
              "We've been part of the Florence community for 28 years, learning from every plate we serve."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-stone-50 p-6 rounded-2xl border border-stone-200">
            <div className="text-center sm:text-left">
              <div className="text-4xl font-black text-stone-900 mb-1">4.2<span className="text-stone-300 text-lg">/5</span></div>
              <StarRating rating={4} />
              <div className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-2">Verified TripAdvisor Score</div>
            </div>
            <div className="h-12 w-px bg-stone-200 hidden sm:block"></div>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-stone-900 text-white px-8 py-3 rounded-md font-bold hover:bg-orange-800 transition-all shadow-lg active:scale-95"
            >
              Write a Review
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col h-full hover:shadow-xl transition-all border-b-4 border-b-transparent hover:border-b-amber-500"
            >
              <div className="flex justify-between items-start mb-6">
                <StarRating rating={review.rating} size="w-4 h-4" />
                <div className="flex items-center gap-1.5 opacity-60 grayscale hover:grayscale-0 transition-all">
                  <img src="https://www.tripadvisor.com/favicon.ico" alt="TripAdvisor" className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">TripAdvisor</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif italic text-stone-900 leading-tight">"{review.title}"</h3>
              <p className="text-stone-500 text-sm leading-relaxed flex-grow mb-8 line-clamp-4 italic">
                {review.content}
              </p>
              <div className="pt-6 border-t border-stone-50 flex items-center">
                <div className="w-10 h-10 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center font-bold mr-4 text-lg font-serif">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-bold text-stone-900 text-sm">{review.author}</div>
                  <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{review.location || 'Customer'} • {review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-stone-400 text-sm mb-6">Want to see more of what folks are saying?</p>
          <a 
            href="https://www.tripadvisor.com" 
            target="_blank" 
            className="inline-flex items-center px-10 py-4 border-2 border-stone-900 rounded-md font-bold text-stone-900 hover:bg-stone-900 hover:text-white transition-all group"
          >
            See all on TripAdvisor
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Review Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 animate-fade-in-up">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-stone-400 hover:text-stone-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h2 className="text-3xl font-bold font-serif mb-2">Leave a Review</h2>
            <p className="text-stone-500 text-sm mb-8">Share your experience at Pop's Barbeque!</p>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Your Rating</label>
                <StarRating rating={newRating} interactive size="w-8 h-8" onRate={setNewRating} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-800 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-800 outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Your Review</label>
                <textarea rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-800 outline-none resize-none" placeholder="Tell us about the food..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-orange-800 text-white font-bold rounded-lg hover:bg-orange-700 transition-all shadow-xl">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
