"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = ["Features", "Benefits", "Pricing", "Blog", "Contact Us"];

export function Navbar() {
  const [activeTab, setActiveTab] = useState("Features");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* -----------------------------------------------NAVBAR ESTÁTICA---------------------------------------------------- */}
      <nav 
        className="w-full max-w-7xl mx-auto flex items-center justify-between p-6 bg-transparent transition-opacity duration-300 z-50 relative"
        style={{ opacity: isScrolled ? 0 : 1, pointerEvents: isScrolled ? 'none' : 'auto' }}
      >
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button key={item} className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ color: 'var(--primary-text-color)' }}>
              {item}
            </button>
          ))}
        </div>
        <button 
          className="px-6 py-2.5 rounded-full font-bold text-sm transition-all active:scale-95 text-white bg-black dark:bg-white dark:text-black"
        >
          Try Radiance free
        </button>
      </nav>

      {/* -----------------------------------------------NAVBAR FLOTANTE---------------------------------------------------- */}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
          >
            <div 
              className="pointer-events-auto flex items-center justify-between px-3 py-2 w-full max-w-5xl rounded-full border shadow-2xl backdrop-blur-md transition-colors duration-300"
              style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
            >
              <Logo />
              <div className="hidden md:flex items-center gap-1 relative">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => { setActiveTab(item); window.location.href = `/${item.toLowerCase()}`; }}
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 z-10"
                    style={{ color: activeTab === item ? 'var(--primary-text-color)' : 'var(--secondary-text-color)' }}
                  >
                    <span className="relative z-10">{item}</span>
                    {activeTab === item && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full shadow-sm"
                        style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--glass-border)' }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full font-bold text-sm shadow-md text-white bg-[var(--primary-color)]"
              >
                Try Free
              </motion.button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="w-8 h-8 bg-[var(--primary-color)] rounded-lg flex items-center justify-center transform rotate-12 shadow-sm">
         <div className="w-3 h-3 bg-white rounded-sm opacity-90" />
      </div>
      <span className="font-bold text-xl tracking-tighter" style={{ color: 'var(--primary-text-color)' }}>
        Radiance
      </span>
    </div>
  );
}