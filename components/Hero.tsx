import React, { useState } from 'react';
import { Search, Calendar, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Hero: React.FC = () => {
  const [loadingAi, setLoadingAi] = useState(false);

  // Simple placeholder for AI - In a real app this would route to a results page
  const handleAiSearch = async () => {
     // NOTE: This is a visual demonstration. 
     // Real implementation would grab process.env.API_KEY and use gemini to parse a natural language query
     setLoadingAi(true);
     setTimeout(() => setLoadingAi(false), 1500);
  };

  return (
    <div className="relative">
      {/* Background Image Slider Placeholder - Using a static impactful image for now */}
      <div className="h-[600px] w-full overflow-hidden relative bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Travel Hero" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <span className="text-brand-orange font-bold tracking-widest uppercase mb-4 text-sm md:text-base animate-fade-in-up">
            Curated Experiences for the Modern Soul
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl shadow-sm">
            Discover Your Next <span className="text-brand-orange">Great Story</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10">
            From the peaks of Himachal to the beaches of Bali. Premium group tours and customized itineraries crafted by experts.
          </p>
          
          <button className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg hover:shadow-orange-500/30 flex items-center">
            View All Packages <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Search Bar - Floating */}
      <div className="relative -mt-16 z-20 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              
              {/* Destination */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Destination</label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Where to?" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              {/* Month */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Travel Month</label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-3 top-3 text-gray-400" />
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue appearance-none">
                    <option>Any Month</option>
                    <option>December 2023</option>
                    <option>January 2024</option>
                    <option>February 2024</option>
                  </select>
                </div>
              </div>

               {/* Budget */}
               <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Budget (Per Person)</label>
                <div className="relative">
                  <DollarSign size={18} className="absolute left-3 top-3 text-gray-400" />
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue appearance-none">
                    <option>Any Budget</option>
                    <option>Under ₹10k</option>
                    <option>₹10k - ₹25k</option>
                    <option>₹25k - ₹50k</option>
                    <option>₹50k+</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button 
                className="w-full bg-brand-blue text-white py-2.5 rounded-lg font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2"
                onClick={handleAiSearch}
              >
                {loadingAi ? (
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                ) : (
                  <>
                  <Search size={18} />
                  Search
                  </>
                )}
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
