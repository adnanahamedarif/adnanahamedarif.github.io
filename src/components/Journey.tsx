import { useState } from 'react';
import { Calendar, Quote, GraduationCap, Laptop, Sparkles } from 'lucide-react';

export default function Journey() {
  const [gifError, setGifError] = useState(false);
  const [activeStep, setActiveStep] = useState(3); // Highlight latest step

  const timelineSteps = [
    {
      year: '2024',
      title: 'Academic Launch at AIUB',
      desc: 'Enrolled in Computer Science Engineering (CSE). Acquired core algorithm theories, computational mathematics, and fundamental structuring.',
      icon: <GraduationCap size={16} />
    },
    {
      year: '2025',
      title: 'Problem Solving',
      desc: 'Mastered Data Structures and Algorithms (DSA). Solved complex computational problems on competitive platforms, sharpening logical efficiency and code optimization.',
      icon: <Laptop size={16} />
    }, 
    
    {
      year: '2026',
      title: 'Full-Stack Integration',
      desc: 'Deep-dived into JavaScript ecosystems, UI/UX designing, React, and modular state controls. Constructed multi-component visual apps.',
      icon: <Laptop size={16} />
    }
  ];

  return (
    <section id="journey" className="py-20 px-6 max-w-6xl mx-auto">
      <div 
        id="journey-card"
        className="relative overflow-hidden bg-gradient-to-br from-violet-50/70 to-indigo-50/70 dark:from-[#131324] dark:to-[#17172e] rounded-[40px] p-8 md:p-14 border border-violet-100/40 dark:border-white/5 shadow-xl transition-all duration-300"
      >
        {/* Soft Decorative Vector Rings */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-violet-500/5 to-transparent rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-radial from-fuchsia-500/5 to-transparent rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Timeline Texts & Roadmaps */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-bold tracking-wider text-xs uppercase mb-3">
              <Quote size={14} className="transform rotate-180" />
              Living to Create Solutions
            </div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
              My Journey
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
              From discovering programming, I've been fascinated by complex problem-solving. This prompt curiosity drove my path into computing engineering, where I strive to construct systems that solve human workflows.
            </p>

            {/* Interactive Timeline Flow - Beautifully User-Friendly */}
            <div className="space-y-6 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-white/10">
              {timelineSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.year}
                    onClick={() => setActiveStep(idx)}
                    className={`group flex gap-5 cursor-pointer select-none transition-all duration-300 p-3 rounded-2xl ${
                      isActive 
                        ? 'bg-white/80 dark:bg-white/5 shadow-md border-l-4 border-violet-600 dark:border-violet-400 -translate-x-1'
                        : 'hover:bg-white/30 dark:hover:bg-white/2'
                    }`}
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-violet-600 dark:bg-violet-500 border-violet-600 dark:border-violet-400 text-white shadow-lg'
                          : 'bg-white dark:bg-[#121226] border-gray-200 dark:border-white/15 text-gray-500'
                      }`}>
                        {step.icon}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3">
                        <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          isActive
                            ? 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300'
                            : 'bg-gray-105 dark:bg-white/5 text-gray-500'
                        }`}>
                          {step.year}
                        </span>
                        <h4 className={`text-base font-bold transition-all ${
                          isActive ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                        }`}>
                          {step.title}
                        </h4>
                      </div>
                      {isActive && (
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-2 animate-[fadeIn_0.2s_ease]">
                          {step.desc}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Media / Visual Part - Highly optimized with fallback vectors instead of heavy loading components */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group p-1 w-full max-w-[340px]" id="journey-visual-wrapper">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-600/10 to-transparent blur-xl scale-95 group-hover:scale-105 transition-all" />
              
              <div className="relative aspect-video lg:aspect-square bg-white dark:bg-[#111124] rounded-[28px] overflow-hidden border border-gray-150 dark:border-white/5 shadow-lg flex items-center justify-center text-center">
                {gifError ? (
                  // Custom clean animated CSS vector visualization
                  <div className="w-full h-full p-8 flex flex-col items-center justify-center bg-gradient-to-br from-violet-950/45 to-indigo-950/45 relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                      <div className="w-48 h-48 border border-white/10 rounded-full animate-ping duration-10000" />
                      <div className="w-24 h-24 border border-white/5 rounded-full animate-pulse" />
                    </div>
                    {/* Animated glowing orbit lines */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-400 group-hover:rotate-45 shadow-[0_15px_30px_rgba(139,92,246,0.3)] flex items-center justify-center text-white text-3xl font-black transition-all duration-700">
                      🚀
                    </div>
                    <div className="mt-6">
                      <h4 className="text-sm font-extrabold text-white">Full-Stack Explorer</h4>
                      <p className="text-xs text-violet-300 mt-2 tracking-wide font-mono">Building Tomorrow's Systems</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src="assets/adnan.jpeg"
                    alt="Journey illustration"
                    onError={() => setGifError(true)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
