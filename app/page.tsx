'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

import { ProjectCarousel } from "./components/ProjectCarousel";
import { StickyScroll } from "./components/StickyScroll";
import { Community } from './components/Community';

export default function Home() {
  const [theme, setTheme] = useState('dark');

  const changeColor = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--primary-text-color)' }} className="min-h-screen flex flex-col transition-colors duration-300 overflow-x-hidden">

      {/* --------------------------------------------HERO SECTION---------------------------------------------------- */}
      <section className="flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black mb-4 tracking-tighter"
          style={{
            background: 'linear-gradient(to bottom, var(--primary-lightest), var(--primary-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          RADIANCE DEVS
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl md:text-4xl font-medium italic opacity-80"
        >
          Software solutions for EVERYONE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg text-[var(--secondary-text-color)] max-w-xl"
        >
          All-in-one platform for managing clients, projects, and payments—without the chaos.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-10 py-4 rounded-full font-bold shadow-xl text-white bg-[var(--primary-color)]"
        >
          Start your project now
        </motion.button>
      </section>

      {/* -------------------------------------------------COMPONENTES------------------------------------------------------ */}
      <ProjectCarousel />

      <StickyScroll />

      <Community />

      {/* -------------------------------------------------TOGGLE TEMA------------------------------------------------------ */}
      <button
        onClick={changeColor}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl transition-all shadow-2xl active:scale-95 flex items-center justify-center border border-white/10"
        style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
      >
        {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
      </button>
    </div>
  );
}