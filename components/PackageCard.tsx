import React from 'react';
import { Clock, Star, MapPin, ArrowRight } from 'lucide-react';
import { Package, PackageType } from '../types';
import { Link } from 'react-router-dom';

interface PackageCardProps {
  pkg: Package;
  featured?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, featured = false }) => {
  return (
    <div className={`group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full ${featured ? 'md:flex-row md:h-64' : ''}`}>
      
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-2/5' : 'h-56'}`}>
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 bg-brand-blue/90 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm">
          {pkg.type}
        </div>
        {pkg.seatsLeft && pkg.seatsLeft < 10 && (
           <div className="absolute bottom-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded animate-pulse shadow-md">
             Only {pkg.seatsLeft} Seats Left!
           </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-5 flex flex-col justify-between flex-grow ${featured ? 'md:w-3/5' : ''}`}>
        <div>
          <div className="flex justify-between items-start mb-2">
             <div className="flex items-center text-yellow-500 text-xs font-bold gap-1">
               <Star size={12} fill="currentColor" />
               <span>{pkg.rating} ({pkg.reviews})</span>
             </div>
             <div className="text-gray-400 text-xs flex items-center">
               <Clock size={12} className="mr-1" />
               {pkg.duration}
             </div>
          </div>
          
          <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 leading-snug group-hover:text-brand-orange transition-colors">
            {pkg.title}
          </h3>
          
          <div className="flex items-center text-gray-500 text-xs mb-4">
            <MapPin size={14} className="mr-1 text-brand-orange" />
            {pkg.location}
          </div>

          <p className="text-gray-500 text-sm line-clamp-2 mb-4">
            {pkg.description}
          </p>

          {/* Quick Features */}
          <div className="flex flex-wrap gap-2 mb-4">
             {pkg.inclusions.slice(0, 3).map((inc, i) => (
               <span key={i} className="text-[10px] bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                 {inc}
               </span>
             ))}
             {pkg.inclusions.length > 3 && (
               <span className="text-[10px] bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                 +{pkg.inclusions.length - 3} more
               </span>
             )}
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-gray-50 pt-4">
          <div>
            <p className="text-xs text-gray-400 line-through">₹{pkg.originalPrice?.toLocaleString()}</p>
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-brand-blue">₹{pkg.price.toLocaleString()}</span>
              <span className="text-xs text-gray-500">/ person</span>
            </div>
          </div>
          
          <Link to={`/package/${pkg.id}`} className="bg-brand-lightBlue text-brand-blue hover:bg-brand-blue hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1">
            Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
