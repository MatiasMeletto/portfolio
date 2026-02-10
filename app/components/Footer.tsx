"use client";
import { Linkedin, Twitter, Instagram, Bold } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full px-4 pb-10 pt-20" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div 
        className="max-w-7xl mx-auto rounded-[40px] p-10 md:p-20 border"
        style={{ 
          backgroundColor: 'var(--glass-bg)', 
          borderColor: 'var(--glass-border)' 
        }}
      >
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
          
          {/* -------------------------------------------COLUMNA MARCA---------------------------------------------------- */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[var(--primary-color)] rounded-lg flex items-center justify-center transform rotate-12">
                 <div className="w-3 h-3 bg-white rounded-sm opacity-90" />
              </div>
              <span className="font-bold text-2xl tracking-tighter" style={{ color: 'var(--primary-text-color)' }}>
                Radiance Devs
              </span>
            </div>
            
            <p className="text-lg leading-relaxed mb-8 opacity-80" style={{ color: 'var(--secondary-text-color)' }}>
              Your favourite business management software. Built for early startup founders.
            </p>

            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* -------------------------------------------COLUMNAS DE LINKS----------------------------------------------- */}
          <div className="flex gap-16 md:gap-32 flex-wrap">
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-sm tracking-widest uppercase" style={{ color: 'var(--primary-text-color)' }}>Pages</h4>
              <div className="flex flex-col gap-4">
                {["Home", "Features", "Pricing", "Blog"].map(link => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-sm tracking-widest uppercase" style={{ color: 'var(--primary-text-color)' }}>Information</h4>
              <div className="flex flex-col gap-4">
                {["Contact", "Privacy", "Terms of use", "404"].map(link => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------BARRA INFERIOR--------------------------------------------- */}
        <div 
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p className="text-sm font-medium opacity-60" style={{ color: 'var(--secondary-text-color)' }}>
            © 2026 Radiance Devs. Created by <i>Matias Ezequiel</i> and <i>Celeste Magali</i>.
          </p>
          <p className="text-sm font-bold opacity-80" style={{ color: 'var(--primary-text-color)' }}>
            Built in Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

// Sub-componentes para limpiar el código
function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a 
      href="#" 
      className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 dark:bg-white dark:text-black"
    >
      {icon}
    </a>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <a 
      href="#" 
      className="text-base font-medium opacity-60 hover:opacity-100 transition-opacity"
      style={{ color: 'var(--secondary-text-color)' }}
    >
      {children}
    </a>
  );
}