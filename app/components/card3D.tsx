"use client";
import { motion, useTransform, MotionValue } from "framer-motion";

interface CardProps {
  src: string;
  scrollYProgress: MotionValue<number>;
}

export function Card3D({ src, scrollYProgress }: CardProps) {
  // Cuando el scroll está arriba (0), la tarjeta está inclinada 25 grados.
  // A medida que scrolleas hacia abajo (hasta 0.6), se endereza a 0.
  const rotateX = useTransform(scrollYProgress, [0, 0.6], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  return (
    <motion.div
      style={{ 
        rotateX, 
        scale, 
        opacity,
        transformStyle: "preserve-3d" 
      }}
      className="w-full aspect-video rounded-3xl overflow-hidden border-1 border-white/10 bg-[#1a1615]"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
      <p className="text-white text-sm z-20 bg-[var(--primary-color)] px-4 py-2 ">caquita</p>
      <img 
        src={src} 
        alt="Project Preview" 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}