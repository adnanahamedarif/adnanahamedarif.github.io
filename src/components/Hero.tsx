import { Github, Linkedin, Facebook, ArrowDown } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
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
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center items-center py-20 px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Dynamic Background Glow Rings for Dark Mode */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/10 dark:bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-600/10 dark:bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8 relative z-10">
        {/* Texts */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <div className="inline-flex self-center md:self-start items-center gap-2.5 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 font-semibold text-xs tracking-wider uppercase mb-5 shadow-sm border border-violet-200/40 dark:border-violet-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to Software Engineering Roles
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-300 bg-clip-text text-transparent drop-shadow-sm font-black">
              Adnan Ahamed Arif
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Computer Science Engineering student at AIUB. Passionate about developing modern software, cloud deployment, and user-centric interfaces.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScrollToSection('#contact'); }}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white font-bold rounded-full shadow-[0_8px_20px_-4px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.4)] active:scale-95 transition-all text-center cursor-pointer"
            >
              Get in Touch
            </a>
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); handleScrollToSection('#work'); }}
              className="w-full sm:w-auto px-7 py-3 bg-white dark:bg-[#11111e] hover:bg-gray-50 dark:hover:bg-white/5 text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-bold rounded-full shadow-sm hover:shadow-md border border-gray-200 dark:border-white/5 active:scale-95 transition-all text-center cursor-pointer"
            >
              Explore Projects
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4" id="hero-socials">
            <a
              href="https://www.linkedin.com/in/adnan-ahamed-arif/"
              target="_blank"
              rel="noreferrer"
              className="group w-11 h-11 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#0a66c2]/10 dark:bg-white/5 dark:hover:bg-[#0a66c2]/20 text-gray-600 dark:text-gray-300 hover:text-[#0a66c2] dark:hover:text-[#0077b5] border border-transparent hover:border-[#0a66c2]/30 dark:hover:border-[#0077b5]/30 transition-all duration-300 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/AdnanAhamedArif"
              target="_blank"
              rel="noreferrer"
              className="group w-11 h-11 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white border border-transparent hover:border-gray-300 dark:hover:border-white/15 transition-all duration-300 shadow-sm"
              aria-label="GitHub"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.facebook.com/adnan.ahamed.786/"
              target="_blank"
              rel="noreferrer"
              className="group w-11 h-11 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#1877f2]/10 dark:bg-white/5 dark:hover:bg-[#1877f2]/20 text-gray-600 dark:text-gray-300 hover:text-[#1877f2] dark:hover:text-[#1877f2] border border-transparent hover:border-[#1877f2]/30 dark:hover:border-[#1877f2]/30 transition-all duration-300 shadow-sm"
              aria-label="Facebook"
            >
              <Facebook size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Profile Circular Frame - "ছবির frame ঠিক করো" */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group select-none" id="avatar-frame-wrap">
            {/* Outer dotted pulsing track */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-violet-500/20 dark:border-violet-400/20 group-hover:border-violet-500/40 animate-[spin_32s_linear_infinite] pointer-events-none" />
            
            {/* Soft backdrop radial shadow */}
            <div className="absolute inset-0 rounded-full bg-violet-600/30 blur-2xl opacity-60 dark:opacity-45 scale-90 pointer-events-none group-hover:scale-110 transition duration-500" />
            
            {/* Main Gradient Frame Ring */}
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-indigo-500 hover:scale-[1.02] shadow-[0_15px_45px_-5px_rgba(139,92,246,0.5)] dark:shadow-[0_15px_45px_-5px_rgba(139,92,246,0.3)] transition-all duration-500 ease-out">
              <div className="w-[260px] h-[260px] sm:w-[290px] sm:h-[290px] rounded-full overflow-hidden border-4 border-white dark:border-[#0b0b14] bg-gray-50 dark:bg-[#11111d] flex items-center justify-center">
                {imgError ? (
                  // Custom stunning matching fallback illustration vector inside the circular avatar if perfil.png is missing
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-violet-900 to-indigo-950 text-white relative">
                    {/* Glowing aesthetic vector lines */}
                    <svg className="absolute inset-0 w-full h-full text-white/5" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                      <path d="M10 50h80M50 10v80" stroke="currentColor" strokeWidth="0.25" />
                    </svg>
                    <div className="relative z-10 text-center">
                      <span className="text-5xl font-black bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent select-none">
                        AA
                      </span>
                      <p className="text-[10px] tracking-widest text-violet-300 font-mono mt-2 uppercase">Adnan Ahamed</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src="assets/perfil.png"
                    alt="Adnan Ahamed Arif"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover select-none group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Indicators */}
      <button
        onClick={() => handleScrollToSection('#about')}
        id="scroll-explore"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 select-none cursor-pointer group transition-colors"
      >
        <span>Explore Me</span>
        <ArrowDown size={14} className="animate-bounce group-hover:translate-y-0.5 transition-transform" />
      </button>
    </section>
  );
}
