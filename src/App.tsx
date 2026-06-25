import { useState, useEffect } from 'react';
import { Theme } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme-preference');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Dark Obsidian by default
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme-preference', theme);
  }, [theme]);

  return (
    <div className="min-h-screen w-full bg-[#fcfcff] text-[#151522] dark:bg-[#07070d] dark:text-[#ececf1] font-sans antialiased transition-colors duration-300 selection:bg-violet-500/25">
      {/* Structural layout components */}
      <Navbar theme={theme} setTheme={setTheme} />
      
      <main className="relative">
        {/* Sections */}
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
