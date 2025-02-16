import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Category } from '../data/aiTools';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="cursor-pointer bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-gray-100 
                hover:border-indigo-100 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 
                    flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.name}</h3>
          <p className="text-sm text-gray-600">{category.description}</p>
          <div className="mt-3 text-xs text-gray-500">
            {category.tools.length} tools
          </div>
        </div>
      </div>
    </motion.div>
  );
}