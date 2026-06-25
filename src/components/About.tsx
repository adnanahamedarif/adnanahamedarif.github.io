import React, { useState } from 'react';
import { Download, FileText, CheckCircle } from 'lucide-react';

export default function About() {
  const [imgError, setImgError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);

    setTimeout(() => {
      // সরাসরি তোমার আপলোড করা PDF ফাইলের পাথ দিন
      const fileUrl = 'https://drive.google.com/file/d/1LqEoX_YDaGgfNtJY463igCvtLCNouY7Q/view?usp=drive_link'; 
      
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', 'Adnan_CV.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setDownloadSuccess(true);

      setTimeout(() => {
        setDownloadSuccess(false);
      }, 3000);
    }, 1200); // ১২০০ মিলিসেকেন্ড পর ডাউনলোড শুরু হবে (লোডিং ইফেক্টের জন্য)
  };

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto relative">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2 relative tracking-tight">
        About Me
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full mx-auto mb-16" />

      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* About Photo Frame - "ছবির frame ঠিক করো" */}
        <div className="flex-1 w-full max-w-md md:max-w-none flex justify-center items-center">
          <div className="relative group p-3 w-[290px] h-[340px] sm:w-[330px] sm:h-[390px]" id="about-image-frame-container">
            {/* Elegant double offset background frames that animate */}
            <div className="absolute inset-0 rounded-[32px] bg-slate-100 dark:bg-[#151526] border border-gray-200 dark:border-white/5 shadow-md transform rotate-2 group-hover:rotate-1 transition-all duration-300" />
            <div className="absolute inset-0 rounded-[32px] bg-white dark:bg-[#1a1a2e] border-2 border-violet-500/10 dark:border-violet-500/20 shadow-xl transform -rotate-2 group-hover:-rotate-1 transition-all duration-300" />
            
            {/* Visual decorative dots/grid for secondary aesthetic interest */}
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-radial from-violet-500/15 to-transparent rounded-full -z-10 group-hover:scale-125 transition duration-300" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-radial from-fuchsia-500/15 to-transparent rounded-full -z-10 group-hover:scale-125 transition duration-300" />

            {/* Photo core container with clean nested border clipping correctly */}
            <div className="absolute inset-3 rounded-[24px] overflow-hidden border border-gray-150 dark:border-white/10 shadow-inner bg-gray-50 dark:bg-[#11111d] flex items-center justify-center">
              {imgError ? (
                // Super clean matching fall-back vector card for the About section
                <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-indigo-950 via-[#13112c] to-[#120e25] text-white">
                  <div className="flex justify-between items-start">
                    <FileText className="text-violet-400" size={32} />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#a78bfa]/60 bg-[#a78bfa]/10 px-2.5 py-1 rounded-full">Engineering Portfolio</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent mb-1">Adnan Ahamed</h4>
                    <p className="text-xs text-gray-400 tracking-wide">Pursuing B.Sc. in Computer Science & Engineering</p>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-violet-300 font-mono">React</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-fuchsia-300 font-mono">CSE student</span>
                  </div>
                </div>
              ) : (
                <img
                  src="assets/about.jpg"
                  alt="About Adnan"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
          </div>
        </div>

        {/* Text Details */}
        <div className="flex-[1.2] text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white capitalize mb-4 leading-snug">
            Professional Profile
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
            Hello! I am Adnan, a passionate and dedicated Computer Science Engineering student with an active focus on software design, cloud platforms, and modern web frameworks. 
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8">
            Currently, I am pursuing my undergraduate degree at <strong className="text-violet-600 dark:text-violet-400">American International University - Bangladesh (AIUB)</strong>. I spend my time engineering efficient code architectures, refining layout designs, and solving complex algorithmic structures. I thrive on bringing complex visual concepts to life using robust backend modules and high-fidelity frontends.
          </p>

          {/* User-friendly interactive widgets CV */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              id="download-cv-btn"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-bold rounded-full shadow-md active:scale-95 disabled:opacity-55 disabled:scale-100 transition-all cursor-pointer"
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white dark:border-gray-950 border-t-transparent rounded-full animate-spin" />
                  Generating Resume...
                </>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle size={18} className="text-emerald-500 dark:text-emerald-600" />
                  Resume Grabbed!
                </>
              ) : (
                <>
                  <Download size={18} />
                  Download CV
                </>
              )}
            </button>

            {downloadSuccess && (
  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 animate-[fadeIn_0.3s_ease]">
    Adnan_CV.pdf downloaded successfully!
  </span>
)}
          </div>
        </div>
      </div>
    </section>
  );
}
