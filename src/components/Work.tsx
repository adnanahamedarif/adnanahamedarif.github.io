import { useState } from 'react';
import { ExternalLink, Github, FolderGit2, X, Calendar, User, Tag } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export default function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // Fallbacks mock URLs if assets are not found locally, matching exact queries
  const unsplashFallbacks: Record<string, string> = {
    p1: 'https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=600&q=80', // E-commerce
    p2: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80', // Education/University
    p3: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', // AI Chat/Abstract
    p4: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', // Dashboard/Portfolio
    p5: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=600&q=80', // Productivity task board
    p6: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=600&q=80'  // DevOps/Server containers
  };

  const handleImgError = (idx: string) => {
    setImgErrors(prev => ({ ...prev, [idx]: true }));
  };

  return (
    <section id="work" className="py-20 px-6 max-w-6xl mx-auto relative bg-gradient-to-b from-transparent to-slate-50/20 dark:to-white/[0.01]">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2 relative tracking-tight">
        Featured Work
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full mx-auto mb-16" />

      {/* Grid wrapper */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        id="projects-grid"
      >
        {projectsData.map((project: Project) => {
          const hasError = !!imgErrors[project.id];
          const displaySrc = hasError ? unsplashFallbacks[project.id] : project.imageUrl;

          return (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-white dark:bg-[#10101b] rounded-3xl border border-gray-150 dark:border-white/5 hover:border-violet-500/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col h-full"
            >
              {/* Card visual wrapper */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300" />
                <img
                  src={displaySrc}
                  alt={project.title}
                  onError={() => handleImgError(project.id)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual hovering action buttons */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <span className="bg-white/94 dark:bg-gray-950/80 backdrop-blur-sm text-[11px] font-bold text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-full border border-gray-100 dark:border-white/10 shadow-sm flex items-center gap-1">
                    <FolderGit2 size={12} className="text-violet-500" />
                    Details
                  </span>
                </div>
              </div>

              {/* Card Content parameters */}
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex gap-2 flex-wrap mb-3.5">
                  {project.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag}
                      className="text-[9.5px] font-bold bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 px-2.5 py-1 rounded-md text-gray-500 dark:text-gray-400 uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-1 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center text-xs text-gray-400 font-bold group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                  <span>{project.role || 'Developer'}</span>
                  <span className="flex items-center gap-1">
                    Read More &rarr;
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modern responsive Modal detailed view - extremely user-friendly */}
      {activeProject && (
        <div 
          id="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-[fadeIn_0.25s_ease]"
        >
          <div 
            id="project-modal"
            onClick={(e) => e.stopPropagation()} // stop close on body click
            className="bg-white dark:bg-[#0f0f18] border border-gray-100 dark:border-white/10 rounded-[32px] w-full max-w-2xl overflow-hidden shadow-2xl relative animate-[scaleIn_0.3s_cubic-bezier(0.175,0.885,0.32,1.1)] scale-100"
          >
            {/* Modal Image banner */}
            <div className="relative aspect-video w-full bg-gray-100 dark:bg-white/5">
              <img
                src={imgErrors[activeProject.id] ? unsplashFallbacks[activeProject.id] : activeProject.imageUrl}
                alt={activeProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Close Button overlay */}
              <button
                onClick={() => setActiveProject(null)}
                id="modal-close-btn"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 dark:bg-[#1a1a2e]/90 text-gray-900 dark:text-white hover:text-rose-500 dark:hover:text-rose-450 shadow-md flex items-center justify-center transition cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body parameters */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {activeProject.description}
              </p>

              {/* Meta information tags */}
              <div className="grid grid-cols-2 gap-4 pb-5 border-b border-gray-100 dark:border-white/5 text-xs">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <User size={15} className="text-violet-500" />
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest">My Role</span>
                    <strong className="text-gray-800 dark:text-gray-200 font-semibold">{activeProject.role || 'Lead Engineer'}</strong>
                  </div>
                </div>
                {activeProject.date && (
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Calendar size={15} className="text-violet-500" />
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Timeline</span>
                      <strong className="text-gray-800 dark:text-gray-200 font-semibold">{activeProject.date}</strong>
                    </div>
                  </div>
                )}
              </div>

              {/* Stack items */}
              <div>
                <span className="block text-[10px] text-gray-405 uppercase tracking-widest font-bold mb-2 flex items-center gap-1.5 dark:text-gray-400">
                  <Tag size={12} className="text-violet-500" />
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 text-xs font-semibold text-gray-600 dark:text-gray-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action routes */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-800 dark:text-gray-250 font-bold transition text-xs shadow-sm"
                  >
                    <Github size={16} />
                    Browse Codebase
                  </a>
                )}
                <a
                  href={activeProject.projectUrl}
                  onClick={(e) => {
                    if (activeProject.projectUrl === '#') {
                      e.preventDefault();
                      alert('Interactive deployment setup is being handled for this task!');
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white font-bold transition text-xs shadow-md shadow-violet-500/10 cursor-pointer"
                >
                  <ExternalLink size={16} />
                  Live Preview Workspace
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
