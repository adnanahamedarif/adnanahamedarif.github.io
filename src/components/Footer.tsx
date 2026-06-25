import { Github, Linkedin, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const handleScrollToNav = (href: string) => {
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
    <footer 
      id="main-app-footer"
      className="bg-gray-950 text-white/80 py-12 px-6 rounded-t-[40px] md:rounded-t-[48px] border-t border-white/5 shadow-2xl relative z-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        {/* left column brand info */}
        <div>
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleScrollToNav('#home'); }}
            className="text-2xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent flex items-center justify-center md:justify-start gap-1"
          >
            Adnan.
          </a>
          <p className="text-xs text-gray-400 mt-2.5 max-w-sm">
            High-fidelity code solutions built with structural modern integrity utilizing clean React setups.
          </p>
        </div>

        {/* middle column quick lists */}
        <div id="footer-links">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-gray-300">
            <li>
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); handleScrollToNav('#home'); }}
                className="hover:text-violet-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); handleScrollToNav('#about'); }}
                className="hover:text-violet-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#journey" 
                onClick={(e) => { e.preventDefault(); handleScrollToNav('#journey'); }}
                className="hover:text-violet-400 transition"
              >
                Journey
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => { e.preventDefault(); handleScrollToNav('#skills'); }}
                className="hover:text-violet-400 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#work" 
                onClick={(e) => { e.preventDefault(); handleScrollToNav('#work'); }}
                className="hover:text-violet-400 transition"
              >
                Work
              </a>
            </li>
          </ul>
        </div>

        {/* right column social nodes */}
        <div className="flex flex-col items-center md:items-end gap-3" id="footer-socials">
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-violet-500/20 hover:bg-violet-600/10 hover:text-[#1877f2] flex items-center justify-center transition-all duration-300"
              aria-label="Facebook link"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-violet-500/20 hover:bg-violet-600/10 hover:text-[#0a66c2] flex items-center justify-center transition-all duration-300"
              aria-label="LinkedIn link"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/AdnanAhamedArif"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-violet-500/20 hover:bg-white/10 hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="GitHub link"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="max-w-6xl mx-auto h-[1px] bg-white/5 my-8" />

      {/* copyright */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-bold tracking-wide">
        <p>&copy; {new Date().getFullYear()} Adnan Ahamed Arif. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart size={10} className="text-rose-500 fill-rose-500" /> &amp; optimized for rapid loads.
        </p>
      </div>
    </footer>
  );
}
