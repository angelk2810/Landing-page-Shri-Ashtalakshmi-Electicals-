
import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="group relative h-80 overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
      <img 
        src={category.image} 
        alt={category.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
        <p className="text-slate-300 text-sm font-light opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {category.description}
        </p>
        <div className="mt-4 w-10 h-1 bg-[#d4af37] transition-all duration-500 group-hover:w-20"></div>
      </div>
    </div>
  );
};

export default CategoryCard;
