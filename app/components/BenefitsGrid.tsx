"use client";
import { motion, Variants } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50 } 
  }
};

export function BenefitsGrid() {
  const benefits = [
    { title: "Fast Delivery", desc: "We ship code faster than anyone else.", icon: <Zap /> },
    { title: "Secure Systems", desc: "Bank-grade encryption standards.", icon: <Shield /> },
    { title: "Global Reach", desc: "Infrastructure that scales worldwide.", icon: <Globe /> },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {benefits.map((b, i) => (
          <motion.div 
            key={i} 
            variants={item}
            className="p-10 rounded-3xl border backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300"
            style={{ 
              backgroundColor: 'var(--glass-bg)', 
              borderColor: 'var(--glass-border)' 
            }}
          >
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              {b.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{b.title}</h3>
            <p className="opacity-60 leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}