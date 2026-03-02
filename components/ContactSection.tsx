
import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Our Showroom</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experience premium electrical solutions firsthand. Our experts are ready to assist you in creating your perfect home environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-[#d4af37]/30 transition-colors">
              <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
                <span className="text-[#d4af37]">Store Information</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-xl text-[#d4af37]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200">Our Address</h4>
                    <p className="text-slate-400 mt-1 leading-relaxed">{BUSINESS.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-xl text-[#d4af37]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200">Direct Line</h4>
                    <p className="text-slate-400 mt-1">{BUSINESS.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-xl text-[#d4af37]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200">Business Hours</h4>
                    <p className="text-green-400 font-semibold mt-1">{BUSINESS.hours}</p>
                    <p className="text-slate-500 text-xs mt-1">Mon - Sat: 9:30 AM to 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <a 
                  href={`https://wa.me/91${BUSINESS.whatsapp}`}
                  className="flex items-center justify-center space-x-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg"
                >
                  <MessageCircle size={22} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Placeholder for real Google Map */}
            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-center p-12">
              <div>
                <MapPin size={48} className="text-[#d4af37] mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl font-bold mb-2">Location Map</h4>
                <p className="text-slate-400 text-sm mb-6">Thadi Kombu Road, Near Lakshmi Vilas Bank, Dindigul</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#d4af37] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
