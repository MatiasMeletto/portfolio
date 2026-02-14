"use client";
import { useState, useEffect  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const menuItems = ["Features", "Benefits", "Pricing", "Blog", "Contact Us"];

export function Navbar() {
  const [activeTab, setActiveTab] = useState("Features");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ---------------------------------------------------MOBILE NAVBAR------------------------------- */}
      <nav className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-3 rounded-full border shadow-lg backdrop-blur-xl transition-all duration-300"
        style={{
          backgroundColor: 'var(--glass-bg)',
          borderColor: 'var(--glass-border)'
        }}>
        <Logo />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full transition-colors active:scale-95"
          style={{ color: 'var(--primary-text-color)' }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* ---------------------------------------------MOBILE MENU DROPDOWN------------------------------------------- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-22 left-4 right-4 z-[49] flex flex-col p-6 rounded-[32px] border shadow-2xl backdrop-blur-3xl md:hidden overflow-hidden"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)'
            }}
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 text-lg font-medium border-b last:border-0 border-white/5 hover:bg-white/5 rounded-xl transition-colors"
                  style={{ color: 'var(--primary-text-color)' }}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full mt-6 py-4 rounded-2xl font-bold text-lg text-white shadow-lg active:scale-95 transition-transform"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              Try Radiance free
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ---------------------------------------DESKTOP NAVBAR---------------------------------------- */}
      <nav
        className="hidden md:flex w-full max-w-7xl mx-auto items-center justify-between p-6 bg-transparent transition-opacity duration-300 z-50 relative"
        style={{ opacity: isScrolled ? 0 : 1, pointerEvents: isScrolled ? 'none' : 'auto' }}
      >
        <Logo />
        <div className="flex items-center gap-8">
          {menuItems.map((item) => (
            <button key={item} className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ color: 'var(--primary-text-color)' }}>
              {item}
            </button>
          ))}
        </div>
        <button className="px-6 py-2.5 rounded-full font-bold text-sm transition-all active:scale-95 text-white bg-black dark:bg-white dark:text-black">
          Try Radiance free
        </button>
      </nav>

      {/* ----------------------------------------NAVBAR FLOTANTE DESKTOP----------------------------------------*/}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none hidden md:flex"
          >
            <div
              className="pointer-events-auto flex items-center justify-between px-3 py-2 w-full max-w-5xl rounded-full border shadow-2xl backdrop-blur-md transition-colors duration-300 bg-[var(--glass-bg)] border-[var(--glass-border)]"
            >
              <Logo />
              <div className="flex items-center gap-1 relative">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 z-10"
                    style={{ color: activeTab === item ? 'var(--primary-text-color)' : 'var(--secondary-text-color)' }}
                  >
                    <span className="relative z-10">{item}</span>
                    {activeTab === item && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full shadow-sm bg-[var(--bg-color)] border border-[var(--glass-border)]"
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