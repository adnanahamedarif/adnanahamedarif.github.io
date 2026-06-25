import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navItems } from '../data/portfolioData';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link calculation based on position
      const sections = ['home', 'about', 'journey', 'skills', 'work', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/85 dark:bg-[#0b0b14]/85 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-white/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="text-2xl font-black tracking-tight"
          id="nav-logo"
        >
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-[#818cf8]">
            Adnan.
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`nav-link text-sm font-semibold tracking-wide transition-all duration-200 relative py-1.5 ${
                      isActive
                        ? 'text-violet-600 dark:text-violet-400 font-bold'
                        : 'text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle desktop */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-desktop"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle mobile */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-mobile"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/5 transition-all duration-200"
            aria-label="Toggle theme mobile"
          >
            {theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-slate-700" />}
          </button>

          {/* Hamburger toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="hamburger-toggle"
            className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed top-0 right-0 w-[280px] h-screen bg-white/95 dark:bg-[#0b0b14]/95 backdrop-blur-lg border-l border-gray-100 dark:border-white/5 z-40 p-8 pt-24 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block text-lg font-semibold py-2 px-3 rounded-xl transition duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-600/10 to-fuchsia-500/10 text-violet-600 dark:text-violet-400 dark:from-violet-400/10 dark:to-fuchsia-400/10'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="absolute bottom-8 left-8 right-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Adnan Ahamed Arif
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          id="nav-backdrop"
          className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </header>
  );
}
