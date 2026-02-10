"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }} // Empieza 200px abajo e invisible
      animate={{ y: 0, opacity: 1 }}   // Sube a su posición original
      transition={{
        type: "spring",
        stiffness: 100, // Qué tan "duro" es el resorte (más alto = más rápido)
        damping: 20,    // Qué tanto "frena" (esto es lo que da la sensación de pausa/freno suave)
        mass: 1,        // Peso del objeto
      }}
      className="min-h-screen bg-[var(--bg-color)]" // Asegura que el fondo tape la página anterior si es necesario
    >
      {children}
    </motion.div>
  );
}