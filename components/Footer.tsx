
import React from 'react';
import { BUSINESS } from '../constants';
import { Page } from '../types';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

interface FooterProps {
  onPageNavigate: (page: Page, catId: string | null) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-24 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Mark */}
      <div className="absolute bottom-0 left-0 text-[10rem] font-black text-white/5 leading-none select-none pointer-events-none -mb-10 -ml-10 uppercase tracking-tighter">
        Sri Astalakshmi
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="md:col-span-2">
            <h3 className="text-white text-3xl font-black mb-8 tracking-tighter">
              SRI <span className="text-[#d4af37]">ASTALAKSHMI</span> ELECTRICALS
            </h3>
            <p className="text-lg leading-relaxed mb-10 max-w-sm font-light text-slate-400">
              The premier electrical destination for Dindigul’s elite properties. We blend the richness of tradition with the precision of modern technology.
            </p>
            <div className="flex space-x-4">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 mb-2">Heritage</span>
                <span className="text-[#d4af37] font-bold">Est. 2012</span>
              </div>
              <div className="w-px h-10 bg-white/10 mx-4"></div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 mb-2">Location</span>
                <span className="text-slate-200">Dindigul</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-10 text-xs uppercase tracking-[0.3em]">Navigation</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li><button onClick={() => onPageNavigate('home', null)} className="hover:text-[#d4af37] transition-colors">Main Gallery</button></li>
              <li><button onClick={() => onPageNavigate('categories', null)} className="hover:text-[#d4af37] transition-colors">All Categories</button></li>
              <li><button onClick={() => onPageNavigate('gallery', null)} className="hover:text-[#d4af37] transition-colors">Product Gallery</button></li>
              <li><button onClick={() => onPageNavigate('about', null)} className="hover:text-[#d4af37] transition-colors">Our History</button></li>
              <li><button onClick={() => onPageNavigate('contact', null)} className="hover:text-[#d4af37] transition-colors">Get Directions</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 text-xs uppercase tracking-[0.3em]">Direct Contact</h4>
            <div className="space-y-6">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-start space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-all">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-600 uppercase tracking-widest mb-1">Phone</span>
                  <span className="text-slate-200 font-bold group-hover:text-white transition-colors">{BUSINESS.phone}</span>
                </div>
              </a>
              <a href={`https://wa.me/91${BUSINESS.whatsapp}`} className="flex items-start space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-600 uppercase tracking-widest mb-1">WhatsApp</span>
                  <span className="text-slate-200 font-bold group-hover:text-white transition-colors">{BUSINESS.whatsapp}</span>
                </div>
              </a>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/5 rounded-lg text-slate-400">
                  <Clock size={16} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-600 uppercase tracking-widest mb-1">Timing</span>
                  <span className="text-slate-400">{BUSINESS.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] font-black text-slate-700">
          <p>© 2024 Sri Astalakshmi Electricals</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
             <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms</span>
             <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy</span>
             <span className="text-[#d4af37]">Verified Premium Business</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
