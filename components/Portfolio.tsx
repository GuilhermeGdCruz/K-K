import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '../constants';
import { ProjectCategory } from '../types';
import Button from './ui/Button';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-brand-gray/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-sans font-bold text-brand-black mb-4 tracking-tight"
            >
              Projetos<span className="text-brand-red">.</span>
            </motion.h2>
            <div className="w-16 h-1 bg-brand-red"></div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as ProjectCategory)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-brand-black text-white border-brand-black'
                    : 'bg-transparent text-brand-black/60 border-brand-black/10 hover:border-brand-black hover:text-brand-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[450px] overflow-hidden cursor-pointer bg-brand-black"
              >
                {/* Image */}
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-60"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="self-end">
                     <span className="bg-brand-red text-white text-[10px] font-mono uppercase tracking-widest px-2 py-1">
                      {project.category}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-white text-2xl font-sans font-bold mb-1">{project.title}</h3>
                    <p className="text-white/70 font-mono text-xs uppercase tracking-wide">{project.location}</p>
                    <div className="mt-6 flex items-center gap-2 text-brand-red text-sm font-mono uppercase tracking-widest">
                      <Plus size={16} /> Ver detalhes
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button variant="secondary" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;