
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { CATEGORIES, PRODUCTS, BUSINESS, HIGHLIGHTS, GALLERY_ITEMS } from './constants';
import { Page } from './types';
import { 
  MessageCircle, 
  ArrowLeft, 
  Send, 
  Award, 
  ArrowRight, 
  Shield, 
  UserCheck, 
  Tag, 
  Truck,
  CheckCircle2,
  Phone,
  Clock,
  MapPin
} from 'lucide-react';

const iconMap: any = { Shield, UserCheck, Tag, Truck };

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCatId, setSelectedCatId] = useState<string | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<string>('all');

  // Handle page transitions with scroll to top
  const navigateTo = (page: Page, catId: string | null = null) => {
    setCurrentPage(page);
    setSelectedCatId(catId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter products if a category is selected
  const filteredProducts = PRODUCTS.filter(p => p.category === selectedCatId);
  const activeCategory = CATEGORIES.find(c => c.id === selectedCatId);

  // Render components based on state
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onViewProducts={() => navigateTo('categories')} />
            
            {/* 12 Years Trust Section */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-slate-950 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-all duration-700 group-hover:scale-110"></div>
                  <div className="relative z-10 max-w-xl">
                    <div className="inline-flex items-center space-x-2 text-[#d4af37] font-bold text-sm tracking-[0.4em] uppercase mb-6">
                      <Award size={18} />
                      <span>The Legacy of Trust</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">12 Years of Excellence in Dindigul</h2>
                    <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                      Sri Astalakshmi Electricals has been the cornerstone of quality electrical retail since 2012. Our commitment to authentic products and customer-first service has built a legacy that spans across thousands of happy homes.
                    </p>
                    <button onClick={() => navigateTo('about')} className="text-white border-b-2 border-[#d4af37] pb-2 font-bold uppercase tracking-widest text-xs hover:text-[#d4af37] transition-all">
                      Read Our Full Story
                    </button>
                  </div>
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
                      <p className="text-4xl font-bold text-[#d4af37] mb-2">12+</p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest">Years</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
                      <p className="text-4xl font-bold text-[#d4af37] mb-2">5K+</p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest">Projects</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
                      <p className="text-4xl font-bold text-[#d4af37] mb-2">100%</p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest">Genuine</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
                      <p className="text-4xl font-bold text-[#d4af37] mb-2">Top</p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest">Brands</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Categories Preview */}
            <section className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                    <span className="text-[#d4af37] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Our Catalog</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Featured Collections</h2>
                  </div>
                  <button onClick={() => navigateTo('categories')} className="group flex items-center space-x-3 text-slate-900 font-bold uppercase tracking-widest text-xs border-b border-slate-900/10 pb-2 hover:border-[#d4af37] transition-all">
                    <span>View All Categories</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {CATEGORIES.map((cat) => (
                    <div key={cat.id} onClick={() => navigateTo('category-detail', cat.id)} className="cursor-pointer">
                      <CategoryCard category={cat} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Highlights Section */}
            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
                <span className="text-[#d4af37] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Why Choose Us</span>
                <h2 className="text-4xl md:text-6xl font-bold">Unmatched Excellence</h2>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                {HIGHLIGHTS.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div key={item.id} className="group text-center">
                      <div className="w-20 h-20 bg-slate-50 text-[#d4af37] rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:bg-[#d4af37] group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        );

      case 'categories':
        return (
          <section className="pt-40 pb-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <span className="text-[#d4af37] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Product Range</span>
                <h1 className="text-5xl md:text-7xl font-bold">Explore Our Collections</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} onClick={() => navigateTo('category-detail', cat.id)} className="cursor-pointer">
                    <CategoryCard category={cat} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'category-detail':
        return (
          <section className="pt-40 pb-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button 
                onClick={() => navigateTo('categories')}
                className="flex items-center space-x-3 text-slate-500 hover:text-[#d4af37] mb-12 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                <span className="font-bold uppercase tracking-[0.2em] text-xs">Back to Categories</span>
              </button>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
                <div className="max-w-2xl">
                  <span className="text-[#d4af37] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Now Viewing</span>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">{activeCategory?.name}</h1>
                  <p className="text-xl text-slate-500 font-light leading-relaxed">{activeCategory?.description}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hidden lg:block">
                  <div className="flex items-center space-x-3 text-slate-700 font-bold text-sm">
                    <CheckCircle2 size={18} className="text-green-500" />
                    <span>In Stock & Ready for Delivery</span>
                  </div>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="relative h-80 overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                      </div>
                      <div className="p-10">
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                        <p className="text-slate-500 text-sm font-light mb-8 leading-relaxed line-clamp-2">{product.description}</p>
                        <a 
                          href={`https://wa.me/91${BUSINESS.whatsapp}?text=Hello! I am interested in the ${product.name} from your ${activeCategory?.name} section. Please provide more details.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-3 w-full bg-slate-950 text-white py-5 rounded-2xl font-bold hover:bg-[#d4af37] transition-all transform active:scale-95 shadow-xl shadow-slate-200"
                        >
                          <Send size={18} />
                          <span>Enquire on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-40 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                  <p className="text-slate-400 font-medium">New collection coming soon to the showroom...</p>
                </div>
              )}
            </div>
          </section>
        );

      case 'gallery':
        const filteredGallery = galleryFilter === 'all' 
          ? GALLERY_ITEMS 
          : GALLERY_ITEMS.filter(i => i.category === galleryFilter);
        return (
          <section className="pt-40 pb-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
              <span className="text-[#d4af37] font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Visual Experience</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-12">Product Gallery</h1>
              <div className="flex flex-wrap justify-center gap-4">
                {['all', 'fans', 'lighting', 'switches'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setGalleryFilter(filter)}
                    className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${galleryFilter === filter ? 'bg-[#d4af37] text-white shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredGallery.map((item) => (
                <div key={item.id} className="group relative h-96 rounded-[2rem] overflow-hidden shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mb-2">{item.category}</span>
                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'about':
        return (
          <section className="pt-40 pb-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                  <span className="text-[#d4af37] font-bold text-xs tracking-[0.4em] uppercase mb-6 block">Our Brand Story</span>
                  <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">Authenticity Meets Modernity</h1>
                  <p className="text-slate-500 text-xl font-light leading-relaxed mb-10">
                    Founded in 2012, {BUSINESS.name} was born out of a passion for bringing high-end electrical aesthetics to the heart of Dindigul. Over the last 12 years, we have evolved from a local retail outlet to a premium destination for luxury fans, designer lighting, and smart home hardware.
                  </p>
                  <p className="text-slate-500 text-lg leading-relaxed mb-12 italic">
                    "Our vision is simple: to empower our clients with products that combine safety, durability, and a royal finish. We don't just sell components; we provide the backbone of beautiful spaces."
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37]">
                      <Award size={32} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">12+ Successful Years</p>
                      <p className="text-sm text-slate-500">Trusted by over 5000+ local customers</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                   <div className="absolute -inset-4 bg-[#d4af37]/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" alt="Showroom" className="relative rounded-[3rem] shadow-2xl w-full h-[600px] object-cover" />
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return <ContactSection />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#d4af37] selection:text-white">
      <Navbar onPageNavigate={navigateTo} activePage={currentPage} />
      
      {/* Floating WhatsApp */}
      <a 
        href={`https://wa.me/91${BUSINESS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce-slow flex items-center justify-center group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          Enquire Now
        </span>
      </a>

      <main>
        {renderContent()}
        {/* Contact info is always at the bottom if not on the contact page */}
        {currentPage !== 'contact' && <ContactSection />}
      </main>

      <Footer onPageNavigate={navigateTo} />
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default App;
