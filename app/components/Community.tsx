"use client";
import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

export function Community() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header de la sección */}
      <div className="text-center mb-16 space-y-4">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm font-bold tracking-widest uppercase"
          style={{ color: 'var(--secondary-text-color)' }}
        >
          COMMUNITY
        </motion.span>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
          style={{ color: 'var(--primary-text-color)' }}
        >
          Stay in the loop
        </motion.h2>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CARD INSTAGRAM */}
        <SocialCard
          icon={<Instagram size={48} className="text-white" />}
          iconBg="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500"
          title="Instagram"
          stat="15.2K FOLLOWERS"
          description="Follow our daily journey, see behind the scenes of our projects, and get design inspiration."
          buttonText="Follow us"
          buttonLink="https://instagram.com"
          // Variables CSS definidas en globals.css
          bgColorVar="var(--card-ig-bg)"
          borderColorVar="var(--card-ig-border)"
        />

        {/* CARD WHATSAPP */}
        <SocialCard
          icon={<MessageCircle size={48} className="text-white" />}
          iconBg="bg-[#25D366]"
          title="WhatsApp"
          stat="ONLINE NOW"
          description="Have a project in mind? Chat directly with our team for a quick consultation or quote."
          buttonText="Contact us"
          buttonLink="https://wa.me/"
          // Variables CSS definidas en globals.css
          bgColorVar="var(--card-wa-bg)"
          borderColorVar="var(--card-wa-border)"
        />

      </div>
    </section>
  );
}

// Sub-componente actualizado para usar variables CSS de fondo
function SocialCard({ 
  icon, 
  iconBg, 
  title, 
  stat, 
  description, 
  buttonText, 
  buttonLink, 
  bgColorVar, 
  borderColorVar 
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="p-10 rounded-[32px] border transition-all duration-300 shadow-sm"
      style={{ 
        backgroundColor: bgColorVar, 
        borderColor: 'transparent',   
      }}

      onMouseEnter={(e) => { e.currentTarget.style.borderColor = borderColorVar }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent' }}
    >
      <div className="flex justify-between items-start mb-8">
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${iconBg}`}>
          {icon}
        </div>
        <span className="font-bold text-sm tracking-widest uppercase opacity-60 mt-2" style={{ color: 'var(--primary-text-color)' }}>
          {stat}
        </span>
      </div>

      <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-text-color)' }}>
        {title}
      </h3>
      
      <p className="text-lg mb-10 leading-relaxed opacity-70 h-24" style={{ color: 'var(--secondary-text-color)' }}>
        {description}
      </p>

      <motion.a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-sm transition-colors border shadow-sm"
        style={{ 
          backgroundColor: 'var(--bg-color)', 
          color: 'var(--primary-text-color)',
          borderColor: borderColorVar 
        }}
      >
        {buttonText}
      </motion.a>
    </motion.div>
  );
}