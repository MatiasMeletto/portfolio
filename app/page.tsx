'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Home() {
  const [theme, setTheme] = useState('light');

  const changeColor = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('Changing theme to:', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('radiance-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} className="min-h-screen flex flex-col transition-colors duration-300">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--primary-color)' }}>Radiance Devs</h1>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-5xl font-bold text-center mb-4" style={{ color: 'var(--primary-color)' }}>
          Bienvenido a Radiance Devs
        </h1>
        
        <p className="text-xl text-center max-w-2xl mb-8" style={{ color: 'var(--text-color)' }}>
          Software que ilumina tu negocio
        </p>

        <button
          className="px-8 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90"
          style={{ 
            backgroundColor: 'var(--primary-color)'
          }}
        >
          Comenzar Proyecto
        </button>
      </main>

      {/* ---------------------FOOTER-------------------------------- */}
      <footer 
        className="py-8 border-t flex justify-between items-center px-6"
        style={{ 
          borderColor: 'var(--border-color)',
          color: 'var(--secondary-dark)'
        }}
      >
        <p>© 2025 Radiance Devs. Todos los derechos reservados.</p>
        
        <button
          onClick={changeColor}
          className="p-3 rounded-lg transition-all font-semibold flex items-center gap-2"
          style={{ 
            backgroundColor: 'var(--primary-color)',
            color: 'white'
          }}
        >
          {theme === 'light' ? (
            <>
              <Moon size={20} />
            </>
          ) : (
            <>
              <Sun size={20} />
            </>
          )}
        </button>
      </footer>
    </div>
  );
}
