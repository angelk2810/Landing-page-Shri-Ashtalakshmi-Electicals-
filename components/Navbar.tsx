
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../constants';
import { Page } from '../types';

interface NavbarProps {
  onPageNavigate: (page: Page, catId: string | null) => void;
  activePage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onPageNavigate, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contrast Fix: Solid navbar if scrolled OR if viewing internal pages (Categories, Gallery, etc.)
  const isSolid = scrolled || activePage !== 'home';

  const menuItems: { name: string; id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Categories', id: 'categories' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNav = (id: Page) => {
    setIsOpen(false);
    onPageNavigate(id, null);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isSolid ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex flex-col cursor-pointer group" onClick={() => handleNav('home')}>
            <span className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${isSolid ? 'text-slate-950' : 'text-white'}`}>
              SRI <span className="text-[#d4af37]">ASTALAKSHMI</span>
            </span>
            <span className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-colors duration-300 ${isSolid ? 'text-slate-500' : 'text-slate-300'}`}>
              Electricals
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-[#d4af37] relative group ${activePage === item.id ? 'text-[#d4af37]' : (isSolid ? 'text-slate-800' : 'text-slate-100')}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              ))}
              <a
                href={`https://wa.me/91${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d4af37] text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center space-x-2 hover:bg-slate-950 transition-all transform hover:scale-105 shadow-xl hover:shadow-yellow-900/20"
              >
                <MessageCircle size={14} />
                <span>Enquire Now</span>
              </a>
            </div>
          </div>
          
          {/* Hamburger Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-all ${isSolid ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white'}`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100 shadow-2xl' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pt-12 pb-16 space-y-4 bg-white min-h-[50vh] flex flex-col justify-center">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`block w-full text-left py-4 text-3xl font-black transition-all ${activePage === item.id ? 'text-[#d4af37]' : 'text-slate-900 hover:text-[#d4af37]'}`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-10">
            <a
              href={`tel:91${BUSINESS.phone}`}
              className="flex items-center justify-center space-x-4 w-full bg-[#d4af37] text-white py-6 rounded-3xl text-xl font-black shadow-2xl shadow-yellow-900/20 active:scale-95 transition-transform"
            >
              <Phone size={24} />
              <span>Call Showroom</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
