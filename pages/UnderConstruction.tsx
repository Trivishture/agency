import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const UnderConstruction: React.FC = () => {
  const location = useLocation();
  
  // Format the path into a readable title (e.g., "/corporate" -> "Corporate")
  const pageTitle = location.pathname
    .split('/')
    .filter(Boolean)
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' '))
    .join(' - ') || 'Page';

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-lightBlue/30 text-center px-4 py-20">
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 max-w-lg w-full">
        <div className="w-20 h-20 bg-brand-lightBlue rounded-full flex items-center justify-center mx-auto mb-6">
           <Construction size={40} className="text-brand-blue" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{pageTitle}</h1>
        <h2 className="text-xl font-medium text-brand-orange mb-4">Under Construction</h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          We are currently working hard to bring you this experience. 
          Our team is curating the best content for <strong>{pageTitle}</strong>. 
          Please check back soon!
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center bg-brand-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition shadow-md"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;