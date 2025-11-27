import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-80">
        <img
          src="https://picsum.photos/id/15/2500/1600"
          alt="Luxury Architecture Project"
          className="w-full h-full object-cover grayscale contrast-125"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-brand-red text-brand-red bg-black/20 backdrop-blur-sm font-mono text-xs uppercase tracking-widest mb-8">
            Arquitetura & Identidade
          </span>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Arquitetura Autoral <br />
            <span className="text-brand-gray font-light">em Maringá</span><span className="text-brand-red">.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-neutral-300 max-w-xl font-sans font-light leading-relaxed mb-12"
        >
          Projetos de alto padrão que traduzem essência em forma. Especialistas em projetos residenciais, comerciais e de interiores.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 items-start"
        >
          <Button 
            variant="primary" 
            icon={<ArrowRight size={18} />}
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Inicie seu Projeto
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:text-brand-red hover:bg-white/5 px-0"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Portfólio ->
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-12 right-12 text-white/50 hidden md:block"
      >
        <span className="font-mono text-xs uppercase tracking-widest rotate-90 inline-block origin-right translate-x-8">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;