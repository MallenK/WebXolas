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
  Trophy, 
  Music, 
  Users, 
  Calendar,
  Globe
} from 'lucide-react';

import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { translations, playersData, galleryImages } from './constants';

export default function App() {
  const [lang, setLang] = useState<'ca' | 'es'>('ca');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { name: t.nav.festival, href: '#festival' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryModules = import.meta.glob(
    "/src/assets/fotos/fotos_equip/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    { eager: true, import: "default" }
  );

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_xdj4996",
        "template_dradehi",
        formRef.current,
        "iGpB097zxE-0bBxRC"
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente 🚀");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          alert("Error al enviar el mensaje");
        }
      );
  };

  const galleryImages = Object.values(galleryModules) as string[];

          
  const [activeBySlug, setActiveBySlug] = useState<Record<string, 0 | 1>>({});
          



  return (
    <div className="min-h-screen bg-xolas-black selection:bg-neon-pink selection:text-white relative overflow-hidden">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] bg-noise"></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 border-b border-neon-pink/30' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-display tracking-tighter text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]"
          >
            XOLAS<span className="text-white">FC</span>
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
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">

          {/* Neon Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neon-pink/20 blur-[160px] rounded-full"></div>

          {/* Subtle Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Background Image */}
          <img
            src="assets/foto/fotos_equip/foto1.jpeg"
            className="w-full h-full object-cover opacity-15 grayscale scale-110"
            alt="Futsal background"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-xolas-black via-xolas-black/60 to-xolas-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            {/*<div className="bg-neon-pink text-white px-8 py-3 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] shadow-[0_0_25px_rgba(255,0,255,0.5)] border border-white/20">
              PRÒXIM XOLAS DAY · 14 JUNY
            </div>*/}
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-[11rem] font-display leading-[0.85] mb-8 tracking-tight">
              <span className="block text-white">MÉS QUE UN EQUIP</span>
              <span className="block text-neon-pink drop-shadow-[0_0_40px_rgba(255,0,255,0.6)]">
                UNA FAMÍLIA
              </span>
            </h1>

            <p className="text-sm md:text-xl max-w-xl mx-auto mb-12 text-white/60 font-medium uppercase tracking-widest leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="#festival"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-neon-pink text-white px-12 py-5 rounded-full font-black text-lg uppercase tracking-tight shadow-[0_15px_40px_rgba(255,0,255,0.35)] border border-neon-pink transition-all hover:bg-white hover:text-neon-pink"
              >
                {t.hero.cta}
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, borderColor: '#ff00ff', color: '#ff00ff' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border-2 border-white/20 text-white px-12 py-5 rounded-full font-black text-lg uppercase tracking-tight transition-all hover:bg-white/5"
              >
                CONEIX EL GRUP
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[2px] h-16 bg-gradient-to-b from-neon-pink to-transparent"
          />
        </motion.div> */}
      </section>

      {/* Qui Som */}
      <section id="about" className="py-24 bg-grid-pattern">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-display mb-8 text-neon-pink">
                {t.about.title}
              </h2>
              <p className="text-xl leading-relaxed text-white/70 mb-8">
                {t.about.text}
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-4xl font-display text-white">10+</div>
                  <div className="text-xs uppercase tracking-widest text-neon-pink font-bold">Amigues</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display text-white">100%</div>
                  <div className="text-xs uppercase tracking-widest text-neon-pink font-bold">Barri</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display text-white">∞</div>
                  <div className="text-xs uppercase tracking-widest text-neon-pink font-bold">Rialles</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-neon-pink rounded-2xl rotate-3 z-0"></div>
              <img 
                src="src/assets/fotos/fotos_equip/foto1.jpeg" 
                className="rounded-2xl relative z-10 shadow-2xl transition-all duration-500"
                alt="Team group"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jugadoras Grid */}
      <section id="players" className="py-24 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display mb-4 italic">
              {t.players.title}
            </h2>
            <div className="w-24 h-1 bg-neon-pink mx-auto"></div>
          </div>

          {/* ✅ Estado fuera del map (pon esto ARRIBA del return del componente App)
              const [activeBySlug, setActiveBySlug] = useState<Record<string, 0 | 1>>({});
          */}

          {/*
            ✅ Mueve también esto fuera del map (ARRIBA del return del App):
            const extraInfo: Record<string, { number: string; nickname?: string; skill: string }> = { ... };
          */}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {playersData.map((player, idx) => {
              const extraInfo: Record<string, { number: string; nickname?: string; skill: string }> = {
                "Gina Moré": { number: "16", skill: "Dispara desde su casa y también marca." },
                "Anna Solé": { number: "2", nickname: "Annasu", skill: "Corre tanto que el GPS se pierde." },
                "Maria Solé": { number: "05", nickname: "La Meri", skill: "Controla el balón como si tuviera imán." },
                "Marta Vizcaino": { number: "22", nickname: "Marta", skill: "Si chuta, aparta la cabeza." },
                "Leire Garrido": { number: "6", skill: "Recupera balones hasta en sueños." },
                "Lydia Fernández": { number: "24", nickname: "Valiente", skill: "No tiene miedo ni al VAR imaginario." },
                "Ona Pérez": { number: "9", skill: "Tiene más gol que hambre." },
                "Jana Puig": { number: "11", nickname: "Janix", skill: "Aparece y de repente el partido va mejor." },
              };

              const info = extraInfo[player.name];

              // ✅ usa slug (o id) como clave estable
              const key = player.slug ?? String(player.id);

              // ⚠️ OJO: activeBySlug debe existir en el componente App (fuera del map)
              const activeImage = (activeBySlug?.[key] ?? 0) as 0 | 1;

              const toggleImage = () => {
                setActiveBySlug((prev) => ({
                  ...prev,
                  [key]: (prev?.[key] === 0 ? 1 : 0) as 0 | 1,
                }));
              };

              const src0 = `${import.meta.env.BASE_URL}${player.images?.[0]?.replace(/^\//, "")}`;
              const src1 = `${import.meta.env.BASE_URL}${player.images?.[1]?.replace(/^\//, "")}`;
              const activeSrc = activeImage === 0 ? src0 : src1;

              return (
                <motion.div
                  key={player.slug ?? player.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-xolas-black border border-white/10 rounded-xl overflow-hidden hover:border-neon-pink/50 transition-all"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    {/* ✅ Mobile: animación al cambiar */}
                    <div className="md:hidden w-full h-full">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeSrc}
                          src={activeSrc}
                          alt={player.name}
                          initial={{ opacity: 0, scale: 1.03 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </AnimatePresence>

                      <button
                        type="button"
                        onClick={toggleImage}
                        className="absolute bottom-3 right-3 bg-neon-pink text-white text-xs px-4 py-2 rounded-full shadow-lg active:scale-95 transition"
                      >
                        ↺
                      </button>
                    </div>

                    {/* ✅ Desktop: imagen 1 + hover imagen 2 */}
                    <div className="hidden md:block w-full h-full">
                      <img
                        src={src0}
                        alt={player.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"                        
                        loading="lazy"
                      />

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <img
                          src={src1}
                          alt={player.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-xolas-black/70 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Número */}
                  {info?.number && (
                    <div className="absolute top-4 right-4 bg-neon-pink text-white font-display text-5xl md:text-6xl px-5 py-2 rounded-2xl shadow-2xl leading-none">
                      #{info.number}
                    </div>
                  )}

                  <div className="p-6 relative">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-2xl font-display uppercase tracking-tight">
                        {player.name}
                      </h3>

                      {info?.nickname && info.nickname !== player.name && (
                        <span className="text-neon-pink text-sm font-bold">
                          ({info.nickname})
                        </span>
                      )}
                    </div>

                    {info?.skill && (
                      <div className="pt-3 border-t border-white/10">
                        <p className="text-xs text-white/60 italic">
                          <span className="text-white/80 font-bold not-italic block mb-1">
                            {t.players.special_skill}:
                          </span>
                          "{info.skill}"
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Xolas Day (The Star Section) */}
      {/*
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

      */}


      {/* Galería */}
      <section id="gallery" className="py-24 bg-xolas-black">      
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display mb-4 italic text-white">
              GALERÍA XOLAS
            </h2>
            <div className="w-24 h-1 bg-neon-pink mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-neon-pink/50 transition-all cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Galería Xolas ${idx + 1}`}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
                />
              </motion.div>
            )}
          </AnimatePresence>

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
                    <p className="text-white/60">Avinguda dels Països Catalans, 1, 08690 Santa Coloma de Cervelló, Barcelona</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm uppercase tracking-widest font-bold mb-6 text-white/40">{t.contact.follow}</p>
                <motion.a 
                  href="https://instagram.com/@XOLASFC" 
                  target="_blank"
                  whileHover={{ scale: 1.1, color: '#ff007f' }}
                  className="inline-flex items-center space-x-3 text-3xl font-display"
                >
                  <Instagram size={32} />
                  <span>@XOLAS_FC</span>
                </motion.a>
              </div>
            </div>

            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  name="from_name"   // 🔥 CAMBIADO
                  className="w-full bg-xolas-black border border-white/10 rounded-xl px-4 py-3 focus:border-neon-pink outline-none transition-all"
                  placeholder="Tu nombre..."
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  name="from_email"   // 🔥 CAMBIADO
                  className="w-full bg-xolas-black border border-white/10 rounded-xl px-4 py-3 focus:border-neon-pink outline-none transition-all"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">
                  {t.contact.message}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-xolas-black border border-white/10 rounded-xl px-4 py-3 focus:border-neon-pink outline-none transition-all resize-none"
                  placeholder="Cuéntanos algo..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-neon-pink text-white font-bold py-4 rounded-xl uppercase tracking-widest shadow-lg"
              >
                {t.contact.send}
              </motion.button>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-white/10 bg-xolas-black">
        <div className="container mx-auto px-6 text-center">

          {/* Logo */}
          <div className="text-3xl md:text-4xl font-display tracking-tight text-white mb-6">
            XOLAS<span className="text-neon-pink">FC</span>
          </div>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-neon-pink mx-auto mb-6 opacity-60"></div>

          {/* Copyright */}
          <p className="text-xs text-white/40 uppercase tracking-[0.3em] mb-6">
            &copy; {new Date().getFullYear()} Xolas Futsal
          </p>

          {/* Credit */}
          <a
            href="https://mallenk.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-white/50 hover:text-neon-pink transition-colors duration-300 tracking-wide"
          >
            Designed & created by <span className="font-semibold text-white hover:text-neon-pink transition-colors">mallenK</span>
          </a>

        </div>
      </footer>
    </div>
  );
}
