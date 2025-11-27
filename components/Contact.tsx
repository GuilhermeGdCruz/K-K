import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from './ui/Button';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="bg-brand-dark py-24 lg:py-32 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                
                {/* Text Content & Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 tracking-tight">
                        Vamos iniciar seu <br/>
                        <span className="text-brand-red">projeto?</span>
                    </h2>
                    <p className="text-brand-gray text-lg mb-12 font-sans font-light leading-relaxed max-w-md">
                        Preencha o formulário e nossa equipe entrará em contato em até 24 horas para agendar uma conversa inicial.
                    </p>

                    <div className="space-y-10 font-sans">
                        <div className="flex items-start gap-6 group">
                            <div className="text-brand-red mt-1">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">WhatsApp</h4>
                                <p className="text-brand-gray/70 font-mono text-sm mt-1 hover:text-white transition-colors cursor-pointer">(44) 99999-9999</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="text-brand-red mt-1">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Email</h4>
                                <p className="text-brand-gray/70 font-mono text-sm mt-1 hover:text-white transition-colors cursor-pointer">contato@kendykobayashi.com.br</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="text-brand-red mt-1">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Endereço</h4>
                                <p className="text-brand-gray/70 font-mono text-sm mt-1">Av. Pedro Taques, 123<br/>Maringá, PR</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-brand-black p-8 lg:p-12 border border-white/5"
                >
                    <form className="space-y-6">
                        <div>
                            <label className="block text-xs font-mono font-bold text-brand-red mb-2 uppercase tracking-widest">Nome Completo</label>
                            <input 
                                type="text" 
                                className="w-full bg-brand-dark border-b border-brand-gray/20 rounded-none px-0 py-4 text-white focus:outline-none focus:border-brand-red transition-all font-sans"
                                placeholder="Digite seu nome"
                            />
                        </div>
                         <div>
                            <label className="block text-xs font-mono font-bold text-brand-red mb-2 uppercase tracking-widest">Email</label>
                            <input 
                                type="email" 
                                className="w-full bg-brand-dark border-b border-brand-gray/20 rounded-none px-0 py-4 text-white focus:outline-none focus:border-brand-red transition-all font-sans"
                                placeholder="Digite seu email"
                            />
                        </div>
                         <div>
                            <label className="block text-xs font-mono font-bold text-brand-red mb-2 uppercase tracking-widest">Telefone</label>
                            <input 
                                type="tel" 
                                className="w-full bg-brand-dark border-b border-brand-gray/20 rounded-none px-0 py-4 text-white focus:outline-none focus:border-brand-red transition-all font-sans"
                                placeholder="(00) 00000-0000"
                            />
                        </div>
                        <div className="pt-2">
                            <label className="block text-xs font-mono font-bold text-brand-red mb-2 uppercase tracking-widest">Mensagem</label>
                            <textarea 
                                rows={3}
                                className="w-full bg-brand-dark border-b border-brand-gray/20 rounded-none px-0 py-4 text-white focus:outline-none focus:border-brand-red transition-all font-sans resize-none"
                                placeholder="Conte sobre seu projeto..."
                            />
                        </div>
                        <div className="pt-4">
                            <Button variant="primary" className="w-full">
                                Enviar Mensagem
                            </Button>
                        </div>
                    </form>
                </motion.div>

            </div>
        </div>
    </section>
  );
};

export default Contact;