import { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Skill } from '../types';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ['All', 'Language', 'Frontend', 'Backend', 'Tools & Design'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto relative">
      {/* Glow filter background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-violet-600/5 dark:bg-violet-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2 relative tracking-tight">
        My Skills & Stack
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full mx-auto mb-5" />
      
      <p className="text-center text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10">
        Technologies and frameworks I deploy to solve business flows. Hover over any tile to see proficiency metrics.
      </p>

      {/* User-friendly Category Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto" id="skills-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white border-transparent shadow-[0_5px_15px_-3px_rgba(139,92,246,0.25)] scale-102 font-bold'
                : 'bg-white dark:bg-[#11111e] hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-150 dark:border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Bento Grid - fixes missing logos elegantly */}
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        id="skills-grid"
      >
        {filteredSkills.map((skill: Skill) => {
          const isHovered = hoveredSkill === skill.name;
          
          return (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`relative px-4 py-6 sm:py-7 rounded-[22px] border flex flex-col items-center justify-center text-center select-none overflow-hidden transition-all duration-300 ${
                isHovered
                  ? 'bg-white dark:bg-[#141424] -translate-y-2 shadow-xl border-violet-500/35 scale-[1.02]'
                  : 'bg-white dark:bg-[#10101b] border-gray-150 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 shadow-sm'
              }`}
            >
              {/* Highlight background glow on hover using actual brand colors */}
              {isHovered && (
                <div
                  className="absolute inset-x-0 bottom-0 h-1.5 opacity-90 transition-all duration-300"
                  style={{ backgroundColor: skill.color }}
                />
              )}

              {/* Vector Logo render - fixes "আর কিছু লোগো আসছে না" entirely with 100% load guarantee */}
              <div 
                className="w-14 h-14 flex items-center justify-center transition-all duration-300 mb-3.5"
                style={{ color: isHovered ? skill.color : 'currentColor' }}
              >
                {skill.svgPath ? (
                  <svg
                    viewBox={skill.svgViewBox || '0 0 24 24'}
                    className={`w-11 h-11 transition-transform duration-300 ${
                      isHovered ? 'scale-110 drop-shadow-[0_2px_10px_rgba(var(--brand-color),0.2)]' : 'text-gray-700 dark:text-gray-300'
                    }`}
                    fill="currentColor"
                  >
                    <path d={skill.svgPath} />
                  </svg>
                ) : (
                  <span className="font-mono text-xl font-bold uppercase tracking-wider">{skill.name.slice(0, 2)}</span>
                )}
              </div>

              {/* Skill Name */}
              <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide transition-colors">
                {skill.name}
              </h4>

              {/* Subtitle Category tag */}
              <span className="text-[9.5px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">
                {skill.category}
              </span>

              {/* User-friendly hover metadata reveal */}
              <div 
                className={`w-full overflow-hidden transition-all duration-300 ease-out flex flex-col justify-end mt-2 ${
                  isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {/* Horizontal Progress Bar representing mastery level */}
                <div className="w-full bg-gray-105 dark:bg-white/5 h-1 rounded-full overflow-hidden mt-2 mb-2">
                  <div 
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      width: `${skill.level}%`, 
                      backgroundColor: skill.color 
                    }}
                  />
                </div>
                <p className="text-[10px] text-gray-500 dark:text-gray-450 leading-relaxed font-medium px-1">
                  {skill.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
