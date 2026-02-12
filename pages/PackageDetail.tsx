import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PACKAGES } from '../constants';
import { Package } from '../types';
import { Clock, MapPin, Star, CheckCircle, XCircle, Calendar, Shield, Share2, Download, MessageCircle, Users } from 'lucide-react';

const PackageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pkg, setPkg] = useState<Package | null>(null);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'policies'>('itinerary');

  useEffect(() => {
    // Simulate fetch
    const found = PACKAGES.find(p => p.id === id);
    if (found) {
        setPkg(found);
        window.scrollTo(0, 0);
    }
  }, [id]);

  if (!pkg) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Breadcrumb & Title Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
           <div className="text-sm text-gray-500 mb-2">
             <Link to="/" className="hover:text-brand-blue">Home</Link> / 
             <Link to="#" className="hover:text-brand-blue"> Packages</Link> / 
             <span className="text-gray-900 font-medium"> {pkg.title}</span>
           </div>
           <div className="flex flex-col md:flex-row justify-between md:items-end">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{pkg.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                   <div className="flex items-center gap-1"><MapPin size={16} className="text-brand-orange" /> {pkg.location}</div>
                   <div className="flex items-center gap-1"><Clock size={16} className="text-brand-blue" /> {pkg.duration}</div>
                   <div className="flex items-center gap-1 text-yellow-500 font-medium"><Star size={16} fill="currentColor" /> {pkg.rating} ({pkg.reviews} Reviews)</div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex gap-2">
                 <button className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 transition">
                   <Share2 size={16} /> Share
                 </button>
                 <button className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 transition">
                   <Download size={16} /> PDF
                 </button>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Left Content Column */}
           <div className="lg:col-span-2 space-y-8">
             
             {/* Gallery */}
             <div className="grid grid-cols-4 grid-rows-2 gap-2 h-96 rounded-2xl overflow-hidden">
                <div className="col-span-2 row-span-2">
                   <img src={pkg.image} alt="Main" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                </div>
                {pkg.images.slice(0, 4).map((img, idx) => (
                  <div key={idx} className={`${idx === 2 || idx === 3 ? 'col-span-2' : ''} bg-gray-200`}>
                     <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                ))}
             </div>

             {/* Overview */}
             <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
             </div>

             {/* Tabs */}
             <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="flex border-b border-gray-100">
                  {['itinerary', 'inclusions', 'policies'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      className={`flex-1 py-4 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === tab ? 'bg-brand-blue text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                <div className="p-6 md:p-8">
                  {activeTab === 'itinerary' && (
                    <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-gray-200">
                       {pkg.itinerary.map((day) => (
                         <div key={day.day} className="relative pl-12">
                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm shadow-md z-10">
                              {day.day}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{day.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{day.description}</p>
                         </div>
                       ))}
                    </div>
                  )}

                  {activeTab === 'inclusions' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-green-600 mb-4 flex items-center"><CheckCircle size={18} className="mr-2" /> Inclusions</h3>
                        <ul className="space-y-2">
                          {pkg.inclusions.map((inc, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                              {inc}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-red-500 mb-4 flex items-center"><XCircle size={18} className="mr-2" /> Exclusions</h3>
                        <ul className="space-y-2">
                          {pkg.exclusions.map((exc, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                              {exc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'policies' && (
                    <div className="space-y-4 text-sm text-gray-600">
                       <h3 className="font-bold text-gray-900">Cancellation Policy</h3>
                       <p>If cancelled 30 days before departure: 10% deduction.</p>
                       <p>If cancelled 15-30 days before departure: 50% deduction.</p>
                       <p>If cancelled 0-15 days before departure: 100% deduction.</p>
                       
                       <h3 className="font-bold text-gray-900 mt-6">Payment Terms</h3>
                       <p>30% advance to confirm booking. Remaining balance 15 days before trip.</p>
                    </div>
                  )}
                </div>
             </div>
           </div>

           {/* Right Sidebar - Sticky */}
           <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                 
                 <div className="mb-6">
                   <p className="text-gray-500 text-sm mb-1">Starting from</p>
                   <div className="flex items-end gap-2">
                     <span className="text-3xl font-bold text-brand-blue">₹{pkg.price.toLocaleString()}</span>
                     {pkg.originalPrice && <span className="text-sm text-gray-400 line-through mb-1">₹{pkg.originalPrice.toLocaleString()}</span>}
                   </div>
                   <p className="text-xs text-green-600 mt-1 font-medium">Earn 500 Trivishture Points</p>
                 </div>

                 <div className="space-y-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-3">
                       <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Select Date</label>
                       <div className="flex items-center text-sm">
                         <Calendar size={16} className="text-brand-orange mr-2" />
                         <select className="w-full bg-transparent outline-none">
                           <option>{pkg.nextDeparture ? `Next: ${pkg.nextDeparture}` : 'Select Date'}</option>
                           <option>Dec 20, 2023</option>
                           <option>Jan 15, 2024</option>
                         </select>
                       </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-3">
                       <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Guests</label>
                       <div className="flex items-center justify-between text-sm">
                         <span>Number of people</span>
                         <input type="number" min="1" defaultValue="2" className="w-12 text-center outline-none border-b border-gray-300" />
                       </div>
                    </div>
                 </div>

                 <button className="w-full bg-brand-orange text-white py-3 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-md mb-3">
                   Book Now
                 </button>
                 
                 <button className="w-full bg-green-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition shadow-md flex items-center justify-center gap-2">
                   <MessageCircle size={20} /> WhatsApp Us
                 </button>

                 <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield size={16} className="text-brand-blue" />
                      <span className="text-xs font-medium text-gray-600">Safe & Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={16} className="text-brand-blue" />
                      <span className="text-xs font-medium text-gray-600">2000+ Happy Travelers</span>
                    </div>
                 </div>

              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;