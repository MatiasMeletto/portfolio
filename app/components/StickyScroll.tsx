"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

export function StickyScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={targetRef} className="relative w-full max-w-7xl mx-auto px-6 py-32 -mt-20 z-20">
      <motion.div style={{ opacity }} className="flex flex-col md:flex-row gap-12 lg:gap-24">

        {/* -----------------------------------------COLUMNA IZQUIERDA----------------------------------------------- */}
        <div className="md:w-1/2">
          <div className="sticky top-32">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm font-bold tracking-widest uppercase mb-4 block"
              style={{ color: 'var(--primary-color)' }}
            >
              Why Radiance?
            </motion.span>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Built for scale, <br /> powered by simplicity.
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg opacity-70 mb-8 max-w-md"
            >
              We provide the tools you need to manage your software projects without the headache.
            </motion.p>

            <ul className="space-y-4">
              {["Smart Automation", "Client Portals", "Real-time Tracking"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3 font-medium opacity-80"
                >
                  <CheckCircle size={20} style={{ color: 'var(--primary-color)' }} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* -------------------------------------------COLUMNA DERECHA-----------------------------------------------  */}
        <div className="md:w-1/2 flex flex-col gap-12">
          {[1, 2].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden border shadow-2xl"
              style={{
                borderColor: 'var(--glass-border)',
                backgroundColor: 'var(--glass-bg)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-80" />
              <img
                src={`https://framerusercontent.com/images/WkcfohGmGxdaZXOQkB8urlpwXg.png`}
                alt="Feature"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Feature Highlight {item}</h3>
                <p className="text-white/70">Streamline your workflow with our advanced tools.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}