import React from 'react';
import { ExternalLink } from 'lucide-react';
import { AITool } from '../data/aiTools';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ToolCardProps {
  tool: AITool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-white/95 backdrop-blur-sm rounded-xl shadow-sm p-6
                border border-gray-100 hover:border-indigo-100 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 
                      flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-indigo-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 px-3 py-1
                        rounded-md bg-indigo-50 hover:bg-indigo-100 transition-colors text-sm"
            >
              <ExternalLink size={16} />
              Visit
            </a>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.description}</p>
          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs 
                          rounded-md font-medium">
            {tool.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}