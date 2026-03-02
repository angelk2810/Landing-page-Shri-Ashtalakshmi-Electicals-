
import { BusinessInfo, Category, Product, Highlight, GalleryItem } from './types';

export const BUSINESS: BusinessInfo = {
  name: "Sri Astalakshmi Electricals",
  address: "No 12, Lakshmi Vilas Bank, Thadi Kombu Road, Bazaar, Dindigul – 624001, Tamil Nadu",
  phone: "9842977008",
  whatsapp: "9842977008",
  hours: "Open until 10:00 pm",
  experience: "12 Years in Business"
};

export const CATEGORIES: Category[] = [
  {
    id: "fans",
    name: "Designer Fans",
    description: "Premium ceiling, wall, and luxury chandelier fans for refined comfort.",
    image: "https://images.unsplash.com/photo-1555470100-1728256970aa?q=80&w=870?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "switches",
    name: "Luxury Switches",
    description: "High-end modular switches and automation for modern living.",
    image: "https://images.unsplash.com/photo-1650508311049-31f2d0b83507?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "distribution",
    name: "Electrical Distribution",
    description: "Industrial-grade systems for robust power management and safety.",
    image: "https://images.unsplash.com/photo-1759830337357-29c472b6746c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "lighting",
    name: "Architectural Lighting",
    description: "Designer chandeliers and efficient LED panels to brighten your space.",
    image: "https://images.unsplash.com/photo-1659612534697-3edc1892db46?q=80&w=774?auto=format&fit=crop&q=80&w=1200"
  }
];

export const PRODUCTS: Product[] = [
  // FANS (Primary)
  {
    id: "fan-1",
    category: "fans",
    name: "Imperial Gold BLDC Fan",
    description: "Silent operation with aero-foil blades and high energy efficiency.",
    image: "https://images.unsplash.com/photo-1576503963299-fcd31822b523?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fan-2",
    category: "fans",
    name: "Modern Chandelier Fan",
    description: "Exquisite ceiling fan with integrated LED chandelier for luxury living.",
    image: "https://images.unsplash.com/photo-1720204835658-ceb6c3e4df6d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fan-3",
    category: "fans",
    name: "Remote Controlled Fan",
    description: "Exquisite ceiling fan that can be controlled using Remote.",
    image: "https://i.pinimg.com/736x/6e/ba/45/6eba4566a72ba352e42bd750ce07893d.jpg?auto=format&fit=crop&q=80&w=800"
  },
  // SWITCHES
  {
    id: "sw-1",
    category: "switches",
    name: "Two Way Switch",
    description: "Premium modular two-way switch for convenient dual-point control.",
    image: "https://i.pinimg.com/736x/72/aa/0f/72aa0ff14f5308024289479610972702.jpg?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sw-2",
    category: "switches",
    name: "Heavy-Duty Power Switch",
    description: "25A high-load modular switch designed for heavy appliances and safety.",
    image: "https://images.unsplash.com/photo-1566417110090-6b15a06ec800?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sw-3",
    category: "switches",
    name: "Smart Switch",
    description: "Modular switch designed for smart use.",
    image: "https://i.pinimg.com/736x/70/e2/65/70e265d7d5a574f61abc5e0d1e04c79b.jpg?auto=format&fit=crop&q=80&w=800"
  },
  // DISTRIBUTION
  {
    id: "dist-1",
    category: "distribution",
    name: "Sandwich Bus Duct",
    description: "Industrial sandwich bus duct system for high-efficiency power distribution.",
    image: "https://images.unsplash.com/photo-1544724569-5f546fa662b5?auto=format&fit=crop&q=80&w=800"
  },
  // ARCHITECHTURAL LIGHTING 
  {
    id: "Light-1",
    category: "lighting",
    name: "Ceiling architecture",
    description: "Attractive ceiling architecture lights",
    image: "https://longboardproducts.com/wp-content/uploads/2024/07/EbataOptometry-48-1024x683.webp?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "Light-2",
    category: "lighting",
    name: "Zenith Art Chandelier",
    description: "Sculptural lighting that adds elegance and artistic depth",
    image: "https://www.sofary.com/cdn/shop/files/luxurious-stainless-steel-chandelier-for-duplex-living-spaces-elevate-your-home-with-minimalist-elegance-living-room-1.jpg?v=1703584819&width=1024?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "Light-3",
    category: "lighting",
    name: "Lumière Grand Chandelier",
    description: "A statement of luxury and timeless brilliance",
    image: "https://m.media-amazon.com/images/I/61P7XFp-fvL._SX569_.jpg?auto=format&fit=crop&q=80&w=800"
  }
];

export const HIGHLIGHTS: Highlight[] = [
  {
    id: "quality",
    title: "Quality Products",
    description: "We source only from certified, world-class electrical brands.",
    icon: "Shield"
  },
  {
    id: "expert",
    title: "Expert Guidance",
    description: "12 years of industry experience to help you choose the right solutions.",
    icon: "UserCheck"
  },
  {
    id: "price",
    title: "Best Pricing",
    description: "Competitive prices for premium retail and wholesale requirements.",
    icon: "Tag"
  },
  {
    id: "supply",
    title: "Reliable Supply",
    description: "Large inventory and timely delivery for all project scales.",
    icon: "Truck"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", category: "fans", title: "Showroom Fan Display", image: "https://technocart.com/cdn/shop/products/accurate-royal-deco-00_1_5451a57c-0e26-4884-b622-51c2f8ad122e.png?v=1667809636&width=540?auto=format&fit=crop&q=80&w=800" },
  { id: "g2", category: "lighting", title: "Luxury Chandelier Setup", image: "https://chandelierslife.com/cdn/shop/articles/thumbnail_85313af2-21f1-4a5e-a6da-f945eace6780.jpg?v=1737636985?auto=format&fit=crop&q=80&w=800" },
  { id: "g3", category: "switches", title: "Modern Switch Panel", image: "https://images.unsplash.com/photo-1650508311049-31f2d0b83507?auto=format&fit=crop&q=80&w=800" },
  { id: "g4", category: "interior", title: "Smart Home Integration", image: "https://homeagenius.sg/wp-content/uploads/2024/08/HAG-blog-background-2.jpg?auto=format&fit=crop&q=80&w=800" }
];
