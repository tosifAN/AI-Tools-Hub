import React, { useState } from 'react';
import { ArrowLeft, Search, Sparkles } from 'lucide-react';
import { categories } from './data/aiTools';
import { CategoryCard } from './components/CategoryCard';
import { ToolCard } from './components/ToolCard';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.tools.some(tool => 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const currentCategory = categories.find(c => c.name === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-25 via-white to-purple-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16 relative">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-indigo-50/50 to-transparent 
                         -z-10 pointer-events-none" />
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl shadow-sm"
            >
              <Sparkles className="w-8 h-8 text-indigo-600" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                          from-indigo-600 to-purple-600 tracking-tight">
              AI Tools Directory
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover {categories.length}+ cutting-edge AI tools across various categories to 
            enhance your workflow and productivity
          </p>
        </header>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 transform skew-y-3 scale-105 rounded-3xl" />
          <div className="relative z-10">
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full mb-4 text-sm font-medium"
            >
              {categories.length}+ AI Categories
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Discover the Future of
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI Tools
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our curated collection of cutting-edge AI solutions across industries
            </p>
          </div>
        </motion.section>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-12 max-w-2xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl 
                         transform -rotate-1 scale-105" />
          <div className="relative flex items-center bg-white/95 backdrop-blur-sm rounded-xl 
                        border border-gray-200 hover:border-indigo-200 transition-colors">
            <Search className="ml-4 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search AI tools or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-4 bg-transparent border-none focus:ring-0 
                        placeholder-gray-400 text-gray-700"
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedCategory ? (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="animate-fadeIn"
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-8 transition-colors duration-200"
              >
                <ArrowLeft size={20} />
                Back to Categories
              </button>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {currentCategory?.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCategory?.tools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filteredCategories.map((category) => (
                <CategoryCard
                  key={category.name}
                  category={category}
                  onClick={() => setSelectedCategory(category.name)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-20 text-center text-gray-600">
          <p>Discover the perfect AI tools for your needs</p>
          <p className="text-sm mt-2">Updated regularly with the latest AI innovations</p>
        </footer>

        <section className="prose max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold">Comprehensive AI Tools List</h2>
          <p>
            Discover the most complete directory of AI tools available online. Our curated list includes 
            {categories.length} categories ranging from {categories[0].name} to {categories[categories.length-1].name}, 
            with detailed information on each tool's features and capabilities.
          </p>
          
          <h3 className="text-xl font-semibold mt-8">Why Our AI Directory?</h3>
          <ul className="list-disc pl-6">
            <li>Daily updated with new AI tools</li>
            <li>Expert-curated categories</li>
            <li>Detailed tool descriptions</li>
            <li>Direct links to official websites</li>
          </ul>
        </section>
      </div>
      <script type="application/ld+json">
        {{
          "@context": "https://schema.org",
          "@type": "Dataset",
          "name": "AI Tools Directory",
          "description": "Comprehensive directory of 2000+ AI tools across 80+ categories",
          "url": "https://yourdomain.com",
          "license": "https://creativecommons.org/licenses/by/4.0/",
          "creator": {
            "@type": "Organization",
            "name": "AI Tools Directory Community"
          },
          "datePublished": "2024-03-20",
          "version": "2.0",
          "keywords": "AI, Artificial Intelligence, Machine Learning Tools",
          "hasPart": [
            {{#each categories}}
            {
              "@type": "ListItem",
              "position": {{@index}},
              "name": "{{this.name}}",
              "description": "{{this.description}}",
              "itemListElement": [
                {{#each this.tools}}
                {
                  "@type": "ListItem",
                  "position": {{@index}},
                  "name": "{{this.name}}",
                  "url": "{{this.website}}"
                }{{#unless @last}},{{/unless}}
                {{/each}}
              ]
            }{{#unless @last}},{{/unless}}
            {{/each}}
          ]
        }}
      </script>
    </div>
  );
}

export default App;