import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-brand-blue">Contact Us</h1>
        <div className="bg-white rounded-xl shadow-md p-8">
           <form className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                 <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-orange outline-none" placeholder="Your Name" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                 <input type="email" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-orange outline-none" placeholder="your@email.com" />
               </div>
             </div>
             
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
               <input type="tel" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-orange outline-none" placeholder="+91 81781 96990" />
             </div>

             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
               <textarea rows={4} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-orange outline-none" placeholder="Tell us about your dream trip..."></textarea>
             </div>

             <button type="button" className="w-full bg-brand-blue text-white font-bold py-3 rounded-md hover:bg-blue-900 transition">
               Send Enquiry
             </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;