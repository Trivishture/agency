import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
               src="https://trivishture.github.io/agency/Screenshot%202026-02-13%20024811.png" 
               alt="Trivishture Logo" 
               className="h-10 w-auto object-contain rounded-lg"
              />
              <span className="font-bold text-2xl tracking-tight">Trivishture</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting unforgettable journeys for the modern traveler. From high-altitude expeditions to tropical escapes, we curate experiences that matter.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-orange">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/fixed-departures" className="hover:text-white transition">Fixed Departures</Link></li>
              <li><Link to="/corporate" className="hover:text-white transition">Corporate Tours</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-orange">Destinations</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/packages/spiti-valley" className="hover:text-white transition">Spiti Valley</Link></li>
              <li><Link to="/packages/manali" className="hover:text-white transition">Manali</Link></li>
              <li><Link to="/packages/bali" className="hover:text-white transition">Bali</Link></li>
              <li><Link to="/packages/thailand" className="hover:text-white transition">Thailand</Link></li>
              <li><Link to="/packages/vietnam" className="hover:text-white transition">Vietnam</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="text-lg font-bold mb-6 text-brand-orange">Contact Us</h3>
             <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-brand-orange" />
                  <span>2nd Floor, Adventure Hub Building, Hauz Khas Village, New Delhi - 110016</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 flex-shrink-0 text-brand-orange" />
                  <span>+91 81781 96990</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 flex-shrink-0 text-brand-orange" />
                  <span>trivishture@aol.com</span>
                </li>
             </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 Trivishture Travels Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-white">Terms of Service</Link>
             <Link to="/cancellation" className="hover:text-white">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;