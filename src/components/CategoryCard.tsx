import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Category } from '../data/aiTools';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 cursor-pointer
                 border border-gray-100 hover:border-indigo-100 transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50/50 opacity-0 
                     group-hover:opacity-100 transition-opacity rounded-2xl" />
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full">
                {category.tools.length} tools
              </span>
              <ChevronRight className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}