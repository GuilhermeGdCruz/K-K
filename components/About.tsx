import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-black mb-8 tracking-tight">
            Quem Somos<span className="text-brand-red">.</span>
          </h2>
          <div className="w-16 h-1 bg-brand-red mb-8"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-8"
        >
          <p className="text-xl md:text-2xl text-brand-dark leading-relaxed font-light font-sans">
            No <span className="font-bold">kendy + kobayashi</span>, acreditamos que a arquitetura é a tradução da identidade em espaço.
          </p>
          <p className="text-base md:text-lg text-brand-black/70 leading-relaxed font-sans">
            Com mais de 15 anos de experiência, criamos projetos únicos que unem a precisão técnica japonesa com a criatividade brasileira. Buscamos a harmonia, a funcionalidade e, acima de tudo, a perenidade em cada linha traçada.
          </p>
          
          <div className="pt-4">
            <a 
              href="#contato" 
              className="inline-flex items-center text-brand-red font-mono text-sm uppercase tracking-widest hover:text-brand-black transition-colors group"
            >
              Conheça Nossa História
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative large text background */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-[0.03]">
        <span className="text-[15rem] md:text-[25rem] font-sans font-bold text-brand-black whitespace-nowrap leading-none">
          k+k
        </span>
      </div>
    </section>
  );
};

export default About;