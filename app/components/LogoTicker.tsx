"use client";
import { motion } from "framer-motion";

const logos = ["Google", "Meta", "Amazon", "Netflix", "Microsoft", "Uber"];

// ESto es una cinta de logos o lo q sea infinita que no uso pero la dejo aca
export function LogoTicker() {
  return (
    <div className="py-20 overflow-hidden relative w-full border-y" style={{ borderColor: 'var(--border-color)' }}>
      {/* Máscaras de desvanecimiento (Gradient Masks) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{ 
          background: `linear-gradient(to right, var(--bg-color) 0%, transparent 20%, transparent 80%, var(--bg-color) 100%)` 
        }} 
      />

      <motion.div
        className="flex gap-24 flex-none items-center"
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <span
            key={index}
            className="text-4xl font-bold opacity-20 grayscale whitespace-nowrap"
            style={{ color: "var(--text-color)" }}
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}