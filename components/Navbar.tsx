import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Packages', 
      path: '/packages', 
      dropdown: ['Goa', 'Himachal', 'Kashmir', 'North East', 'International'] 
    },
    { name: 'Fixed Departures', path: '/fixed-departures', isHot: true },
    { name: 'Corporate Tours', path: '/corporate' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm font-sans">
      {/* Top Bar */}
      <div className="bg-brand-blue text-white text-xs py-2 px-4 md:px-8 hidden md:flex justify-between items-center">
        <div className="flex space-x-4">
          <span>trivishture@aol.com</span>
          <span>GST: 07AABCU9603R1ZN</span>
        </div>
        <div className="flex space-x-4">
          <span className="cursor-pointer hover:underline">Pay Now</span>
          <span className="cursor-pointer hover:underline">Partner Login</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
             <img 
               src="https://trivishture.github.io/agency/Screenshot%202026-02-13%20024811.png" 
               alt="Trivishture Logo" 
               className="h-10 w-auto object-contain rounded-lg"
             />
             <span className="font-bold text-2xl tracking-tight text-brand-blue">Trivishture</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group h-20 flex items-center"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={link.path} 
                  className="text-gray-700 hover:text-brand-orange font-medium text-sm flex items-center transition-colors"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="ml-1" />}
                  {link.isHot && <span className="ml-2 px-1.5 py-0.5 bg-red-100 text-red-600 text-[10px] rounded font-bold uppercase tracking-wide">Hot</span>}
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <div className="absolute top-20 left-0 w-48 bg-white border-t-2 border-brand-orange shadow-lg rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top">
                    {link.dropdown.map((item) => (
                      <Link 
                        key={item} 
                        to={`/packages/${item.toLowerCase().replace(' ', '-')}`} 
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-brand-lightBlue hover:text-brand-blue border-b border-gray-50 last:border-0"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
             <div className="flex items-center text-brand-blue font-semibold">
                <Phone size={18} className="mr-2" />
                <span>+91 81781 96990</span>
             </div>
             <Link to="/contact" className="bg-brand-orange text-white px-5 py-2.5 rounded-md font-medium text-sm hover:bg-orange-600 transition shadow-md">
               Get Quote
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
             <button onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue p-2">
               {isOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-brand-orange hover:bg-brand-lightBlue block px-3 py-3 rounded-md text-base font-medium flex justify-between items-center"
                  onClick={() => !link.dropdown && setIsOpen(false)}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} />}
                </Link>
                {/* Mobile Dropdown */}
                {link.dropdown && (
                  <div className="pl-6 bg-gray-50">
                     {link.dropdown.map(item => (
                       <Link 
                         key={item} 
                         to={`/packages/${item.toLowerCase().replace(' ', '-')}`}
                         className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-orange"
                         onClick={() => setIsOpen(false)}
                       >
                         {item}
                       </Link>
                     ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-3">
              <Link to="/contact" className="w-full block text-center bg-brand-orange text-white px-5 py-3 rounded-md font-bold hover:bg-orange-600 transition" onClick={() => setIsOpen(false)}>
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;