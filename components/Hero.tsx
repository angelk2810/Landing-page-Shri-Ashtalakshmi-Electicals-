
import React from 'react';
import { ArrowRight, MessageCircle, Award } from 'lucide-react';
import { BUSINESS } from '../constants';

const Hero: React.FC<{ onViewProducts: () => void }> = ({ onViewProducts }) => {
  return (
    <div id="home" className="relative h-screen min-h-[700px] flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1706986140142-989f3c07ead5?auto=format&fit=crop&q=80&w=1920" 
          alt="Premium Interior Lighting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl text-white text-left">
          <div className="flex items-center space-x-3 mb-8 animate-fade-in">
            <div className="px-4 py-1.5 bg-[#d4af37] text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-full flex items-center shadow-lg">
              <Award size={14} className="mr-2" />
              12 Years of Excellence
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            The <span className="text-[#d4af37]">Royal</span> Standard of Electricals
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed max-w-xl">
            Welcome to {BUSINESS.name}. Discover Dindigul's most exclusive collection of 
            designer fans, modular switches, and architectural solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={onViewProducts}
              className="bg-[#d4af37] text-white px-10 py-5 rounded-full font-bold flex items-center justify-center space-x-3 hover:bg-[#c19b2e] transition-all transform hover:-translate-y-1 shadow-2xl shadow-yellow-900/40 group"
            >
              <span>View Collection</span>
              <span className="bg-white/20 p-1 rounded-full group-hover:bg-white/40 transition-colors">
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a 
              href={`https://wa.me/91${BUSINESS.whatsapp}?text=Hello! I am interested in your premium electrical products. Can you assist me?`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-full font-bold flex items-center justify-center space-x-3 hover:bg-white/20 transition-all transform hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-40">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent mb-4"></div>
        <span className="text-white text-[9px] uppercase tracking-[0.4em]">Scroll Down</span>
      </div>
    </div>
  );
};

export default Hero;
