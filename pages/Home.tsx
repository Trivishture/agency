import React from 'react';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import { PACKAGES, DESTINATIONS, TESTIMONIALS } from '../constants';
import { PackageType } from '../types';
import { Shield, Users, Clock, Smile, Instagram, Star } from 'lucide-react';

const Home: React.FC = () => {
  const fixedDepartures = PACKAGES.filter(p => p.type === PackageType.FIXED_DEPARTURE);
  const featuredPackages = PACKAGES.filter(p => p.type !== PackageType.FIXED_DEPARTURE);

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      <Hero />
      
      {/* Popular Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
           <div>
             <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
             <p className="text-gray-500 mt-2">Explore our most loved locations this season.</p>
           </div>
           <a href="#" className="hidden md:block text-brand-orange font-semibold hover:underline">View All Destinations</a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {DESTINATIONS.map(dest => (
            <div key={dest.id} className="relative group rounded-xl overflow-hidden cursor-pointer h-64">
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">{dest.name}</h3>
                <p className="text-xs text-gray-300">{dest.packageCount} Packages</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Departures - URGENCY SECTION */}
      <section id="fixed-departures" className="bg-brand-lightBlue/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-8">
             <div>
               <div className="inline-block bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded mb-2">SELLING FAST</div>
               <h2 className="text-3xl font-bold text-gray-900">Upcoming Fixed Departures</h2>
               <p className="text-gray-500 mt-2">Join a group of like-minded travelers. Best prices guaranteed.</p>
             </div>
             <button className="text-brand-blue font-semibold border-b-2 border-brand-blue hover:text-brand-orange hover:border-brand-orange transition">See Full Calendar</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fixedDepartures.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Travel With Trivishture?</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Verified Hotels', desc: 'We personally vet every property for hygiene and vibe.' },
              { icon: Users, title: 'Expert Captains', desc: 'Trained trip leaders to ensure safety and fun.' },
              { icon: Clock, title: '24/7 Support', desc: 'On-ground assistance whenever you need it.' },
              { icon: Smile, title: 'No Hidden Costs', desc: 'Transparent pricing. What you see is what you pay.' }
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-brand-orange hover:shadow-lg transition group">
                <div className="w-14 h-14 mx-auto bg-brand-lightBlue text-brand-blue rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages - List Style */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-gray-900 mb-8">Curated Collections</h2>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {featuredPackages.map(pkg => (
             <PackageCard key={pkg.id} pkg={pkg} featured={true} />
           ))}
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-5">
           <Users size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Stories From The Road</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-orange" />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-gray-300">{t.location}</p>
                  </div>
                </div>
                <div className="flex mb-4 text-brand-orange">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-200 text-sm italic">"{t.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 text-brand-orange font-bold mb-6">
          <Instagram size={24} />
          <span>@trivishture.hq</span>
        </div>
        <h2 className="text-2xl font-bold mb-8">Follow Our Adventures</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
           {[1, 2, 3, 4].map(n => (
             <div key={n} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group">
               <img src={`https://picsum.photos/400/400?random=${100+n}`} className="w-full h-full object-cover" alt="Insta" />
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition text-white font-bold">
                 <Instagram />
               </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Home;