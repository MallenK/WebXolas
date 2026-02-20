/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Trophy, 
  Music, 
  Users, 
  Calendar,
  Globe
} from 'lucide-react';
import { translations, playersData, galleryImages } from './constants';

export default function App() {
  const [lang, setLang] = useState<'ca' | 'es'>('ca');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalData, setModalData] = useState<{ images: string[], index: number, type?: 'gallery' | 'player' } | null>(null);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'ca' ? 'es' : 'ca');

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.players, href: '#players' },
    { name: t.gallery?.title || 'GALERIA', href: '#gallery' },
    { name: t.nav.festival, href: '#festival' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-xolas-black selection:bg-neon-pink selection:text-white relative overflow-hidden">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] bg-noise"></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-2 md:py-3 border-b border-neon-pink/30' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-4xl font-display tracking-tighter text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,255,0.5)] bg-xolas-black px-2 md:px-3 py-1 border-2 border-neon-pink rounded-lg skew-x-[-10deg]"
          >
            <div className="skew-x-[10deg]">
              XOLAS<span className="text-white">FC</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-xs font-extrabold uppercase tracking-[0.2em] hover:text-neon-pink transition-all relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-pink transition-all group-hover:w-full"></span>
              </a>
            ))}
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-2 text-[10px] font-black border-2 border-white/10 px-4 py-1.5 rounded-full hover:border-neon-pink hover:text-neon-pink transition-all bg-white/5"
            >
              <Globe size={12} />
              <span>{lang.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-40 bg-xolas-black/95 backdrop-blur-2xl pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              {navItems.map((item, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-display uppercase tracking-tighter border-b border-white/5 pb-4 hover:text-neon-pink transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                className="flex items-center space-x-3 text-2xl font-bold text-neon-pink"
              >
                <Globe size={24} />
                <span>{lang === 'ca' ? 'CASTELLÀ' : 'CATALÀ'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          {/* Neon Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-neon-pink/20 blur-[80px] md:blur-[120px] rounded-full"></div>
          
          {/* Abstract Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>

          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20 grayscale scale-110"
            alt="Futsal background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xolas-black via-transparent to-xolas-black"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            className="inline-block mb-6 md:mb-8"
          >
            <div className="bg-neon-pink text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full font-black text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-[0_0_20px_rgba(255,0,255,0.6)] animate-flicker border-2 border-white/20">
              PRÒXIM XOLAS DAY: 14 JUNY
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-[12rem] font-display leading-[0.9] md:leading-[0.85] mb-6 md:mb-8 tracking-tighter">
              <span className="block text-white">MÉS QUE UN EQUIP</span>
              <span className="block text-neon-pink drop-shadow-[0_0_30px_rgba(255,0,255,0.4)]">UNA FESTA</span>
            </h1>
            
            <p className="text-xs md:text-xl max-w-xl mx-auto mb-8 md:mb-12 text-white/60 font-medium uppercase tracking-widest leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <motion.a
                href="#festival"
                whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#ff00ff' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-neon-pink text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-xs md:text-lg uppercase tracking-tighter shadow-[0_10px_30px_rgba(255,0,255,0.3)] transition-all border-2 border-neon-pink"
              >
                {t.hero.cta}
              </motion.a>
              
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, borderColor: '#ff00ff', color: '#ff00ff' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border-2 border-white/20 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-xs md:text-lg uppercase tracking-tighter transition-all hover:bg-white/5"
              >
                CONEIX EL GRUP
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 rotate-90 origin-left translate-x-3">SCROLL</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-neon-pink to-transparent"></div>
        </div>
      </section>

      {/* Qui Som */}
      <section id="about" className="py-16 md:py-24 bg-grid-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-display mb-6 md:mb-8 text-neon-pink">
                {t.about.title}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-white/70 mb-8">
                {t.about.text}
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-display text-white">10+</div>
                  <div className="text-[10px] uppercase tracking-widest text-neon-pink font-bold">Amigues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-display text-white">100%</div>
                  <div className="text-[10px] uppercase tracking-widest text-neon-pink font-bold">Barri</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-display text-white">∞</div>
                  <div className="text-[10px] uppercase tracking-widest text-neon-pink font-bold">Rialles</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-2 md:-inset-4 border-2 border-neon-pink rounded-2xl rotate-3 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=800" 
                className="rounded-2xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                alt="Team group"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jugadoras Grid */}
      <section id="players" className="py-16 md:py-24 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-7xl font-display mb-4 italic">
              {t.players.title}
            </h2>
            <div className="w-16 md:w-24 h-1 bg-neon-pink mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {playersData.map((player, idx) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setModalData({ images: playersData.map(p => p.image), index: idx, type: 'player' })}
                className="group relative bg-xolas-black border border-white/10 rounded-xl overflow-hidden hover:border-neon-pink/50 transition-all cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={player.image} 
                    alt={player.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-neon-pink text-white font-display text-2xl px-3 py-1 rounded-lg">
                  #{player.number}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display uppercase tracking-tight mb-1">{player.name}</h3>
                  <p className="text-neon-pink text-xs font-bold uppercase tracking-widest mb-3">{player.position}</p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs text-white/50 italic">
                      <span className="text-white/80 font-bold not-italic block mb-1">{t.players.special_skill}:</span>
                      "{player.skill}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="gallery" className="py-16 md:py-24 bg-xolas-black relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-7xl font-display mb-4 italic">
              {t.gallery?.title || 'GALERIA'}
            </h2>
            <p className="text-neon-pink font-bold uppercase tracking-widest text-xs md:text-sm">
              {t.gallery?.subtitle || 'Moments Xolas'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setModalData({ images: galleryImages, index: idx, type: 'gallery' })}
                className={`relative overflow-hidden rounded-lg aspect-square group cursor-pointer ${
                  idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Xolas Day (The Star Section) */}
      <section id="festival" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-neon-pink/5 -skew-y-6 origin-top-left"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block bg-neon-pink text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  Save the Date
                </span>
                <h2 className="text-6xl md:text-8xl font-display mb-8 leading-none">
                  XOLAS <span className="text-neon-pink">DAY</span>
                </h2>
                <p className="text-2xl font-semibold mb-6 text-white/90">
                  {t.festival.description}
                </p>
                <p className="text-lg text-white/60 mb-10 italic">
                  {t.festival.day_plan}
                </p>
                <motion.a
                  href="https://www.entrapolis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-white text-xolas-black px-10 py-5 rounded-full font-extrabold text-xl uppercase tracking-tighter hover:bg-neon-pink hover:text-white transition-all"
                >
                  {t.festival.cta}
                </motion.a>
              </motion.div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400" className="rounded-2xl rotate-2" alt="Festival 1" />
              <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" className="rounded-2xl -rotate-3 mt-8" alt="Festival 2" />
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-20">
            <h3 className="text-4xl font-display mb-12 text-center">{t.festival.schedule}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 border-r border-white/10 last:border-0">
                <div className="w-16 h-16 bg-neon-pink/20 rounded-full flex items-center justify-center mb-6 text-neon-pink">
                  <Trophy size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">{t.festival.morning}</h4>
                <p className="text-sm text-white/50">10:00 - 14:00</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border-r border-white/10 last:border-0">
                <div className="w-16 h-16 bg-neon-pink/20 rounded-full flex items-center justify-center mb-6 text-neon-pink">
                  <Users size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">{t.festival.afternoon}</h4>
                <p className="text-sm text-white/50">16:00 - 20:00</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-neon-pink/20 rounded-full flex items-center justify-center mb-6 text-neon-pink">
                  <Music size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">{t.festival.night}</h4>
                <p className="text-sm text-white/50">22:00 - Late</p>
              </div>
            </div>
          </div>

          {/* Sponsors */}
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-10">{t.festival.sponsors}</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="text-3xl font-display">SPONSOR 1</div>
              <div className="text-3xl font-display">SPONSOR 2</div>
              <div className="text-3xl font-display">SPONSOR 3</div>
              <div className="text-3xl font-display">SPONSOR 4</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-xolas-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-display mb-8 text-neon-pink">
                {t.contact.title}
              </h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-neon-pink/10 p-3 rounded-lg text-neon-pink">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-white/60">hola@xolasfutsal.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-neon-pink/10 p-3 rounded-lg text-neon-pink">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-white/60">Pavelló Municipal del Barri, Barcelona</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm uppercase tracking-widest font-bold mb-6 text-white/40">{t.contact.follow}</p>
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank"
                  whileHover={{ scale: 1.1, color: '#ff007f' }}
                  className="inline-flex items-center space-x-3 text-3xl font-display"
                >
                  <Instagram size={32} />
                  <span>@XOLAS_FUTSAL</span>
                </motion.a>
              </div>
            </div>

            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
              <form className="space-y-6" id="contact-form">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">{t.contact.name}</label>
                  <input 
                    type="text" 
                    name="user_name"
                    className="w-full bg-xolas-black border border-white/10 rounded-xl px-4 py-3 focus:border-neon-pink outline-none transition-all"
                    placeholder="Tu nombre..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">{t.contact.email}</label>
                  <input 
                    type="email" 
                    name="user_email"
                    className="w-full bg-xolas-black border border-white/10 rounded-xl px-4 py-3 focus:border-neon-pink outline-none transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">{t.contact.message}</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full bg-xolas-black border border-white/10 rounded-xl px-4 py-3 focus:border-neon-pink outline-none transition-all resize-none"
                    placeholder="Cuéntanos algo..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-neon-pink text-white font-bold py-4 rounded-xl uppercase tracking-widest shadow-lg shadow-neon-pink/20 text-sm md:text-base"
                >
                  {t.contact.send}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <div className="text-2xl font-display tracking-tighter text-white/20 mb-4">
            XOLAS<span className="text-white/10">FC</span>
          </div>
          <p className="text-xs text-white/30 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Xolas Futsal. Made with ❤️ by the neighborhood.
          </p>
        </div>
      </footer>

      {/* Image Modal Carousel */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-xolas-black/95 flex items-center justify-center p-2 md:p-10"
            onClick={() => setModalData(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-neon-pink transition-colors z-[210]"
              onClick={() => setModalData(null)}
            >
              <X size={32} className="md:w-10 md:h-10" />
            </button>

            <div className={`relative w-full max-w-5xl ${modalData.type === 'player' ? 'h-[85vh] md:min-h-[60vh]' : 'aspect-video'} flex items-center justify-center`} onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute left-0 md:-left-16 text-white hover:text-neon-pink transition-colors z-[210] bg-xolas-black/50 p-1 md:p-2 rounded-full"
                onClick={() => setModalData({ ...modalData, index: (modalData.index - 1 + modalData.images.length) % modalData.images.length })}
              >
                <ChevronLeft size={32} className="md:w-12 md:h-12" />
              </button>

              <motion.div
                key={modalData.index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 overflow-y-auto md:overflow-visible"
              >
                {modalData.type === 'player' ? (
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-white/5 p-4 md:p-8 rounded-3xl border border-white/10 backdrop-blur-xl max-w-3xl w-full my-auto">
                    <div className="w-40 md:w-56 aspect-[3/4] overflow-hidden rounded-2xl border-2 border-neon-pink shadow-[0_0_20px_rgba(255,0,255,0.2)] shrink-0 mx-auto md:mx-0">
                      <img 
                        src={playersData[modalData.index].image} 
                        className="w-full h-full object-cover"
                        alt={playersData[modalData.index].name}
                      />
                    </div>
                    <div className="w-full md:flex-1 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <h2 className="text-2xl md:text-4xl font-display text-white uppercase">{playersData[modalData.index].name}</h2>
                        <span className="text-xl md:text-3xl font-display text-neon-pink">#{playersData[modalData.index].number}</span>
                      </div>
                      <p className="text-neon-pink font-bold uppercase tracking-widest text-[9px] md:text-xs mb-3">{playersData[modalData.index].position} • {playersData[modalData.index].hometown}</p>
                      
                      <div className="mb-3 md:mb-5">
                        <h4 className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">Bio</h4>
                        <p className="text-[11px] md:text-sm text-white/80 leading-relaxed italic">"{playersData[modalData.index].bio}"</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 md:gap-3">
                        {Object.entries(playersData[modalData.index].stats).map(([key, value]) => (
                          <div key={key} className="bg-white/5 p-2 rounded-xl border border-white/5">
                            <span className="block text-[8px] md:text-[9px] font-black uppercase tracking-widest text-neon-pink mb-0.5">{key}</span>
                            <span className="text-sm md:text-lg font-display text-white">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={modalData.images[modalData.index]} 
                    className="w-full h-full object-contain rounded-xl"
                    alt="Gallery large"
                  />
                )}
              </motion.div>

              <button 
                className="absolute right-0 md:-right-16 text-white hover:text-neon-pink transition-colors z-[210] bg-xolas-black/50 p-1 md:p-2 rounded-full"
                onClick={() => setModalData({ ...modalData, index: (modalData.index + 1) % modalData.images.length })}
              >
                <ChevronRight size={32} className="md:w-12 md:h-12" />
              </button>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
              {modalData.images.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all ${i === modalData.index ? 'bg-neon-pink w-6' : 'bg-white/20'}`}
                ></div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
