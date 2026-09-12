import React, { useState } from 'react';

const FounderVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full py-24 px-6 sm:px-10 lg:px-16 bg-[#121316] border-b border-[#2A2D35]">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <span className="text-xs font-mono text-[#E58E26] uppercase tracking-widest mb-4">
          // WHY SAKSHAM
        </span>
        <h2 className="text-3xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3] mb-6 max-w-3xl">
          We don't just build websites. <br className="hidden md:block"/>
          <span className="text-[#8A919E]">We build digital engines.</span>
        </h2>
        <p className="text-base text-[#8A919E] max-w-2xl mb-12">
          Watch this 60-second video to understand how we help small and medium businesses escape bloated agency retainers and ship faster.
        </p>

        {/* Video Player Wrapper */}
        <div className="w-full aspect-video bg-[#1A1C21] border border-[#2A2D35] rounded-xl overflow-hidden relative group shadow-2xl">
          
          {!isPlaying ? (
            <div 
              className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center"
              onClick={() => setIsPlaying(true)}
            >
              {/* Fake Thumbnail Background */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent"></div>

              {/* Play Button */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-[#E58E26] text-[#121316] flex items-center justify-center pl-2 shadow-[0_0_30px_rgba(229,142,38,0.3)] group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="relative z-10 mt-6 text-sm font-mono text-[#F0F1F3] bg-[#121316]/80 px-4 py-2 rounded border border-[#2A2D35]">
                Play Founder Message (1:00)
              </span>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#1A1C21]">
              <span className="material-symbols-outlined text-4xl text-[#E58E26] mb-4">video_camera_front</span>
              <p className="text-[#F0F1F3] font-mono text-sm">Video Coming Soon!</p>
              <p className="text-[#8A919E] text-xs mt-2">Upload to YouTube/Vimeo and we will embed it here.</p>
              <button 
                onClick={() => setIsPlaying(false)}
                className="mt-6 text-xs text-[#8A919E] hover:text-[#F0F1F3] underline"
              >
                Close player
              </button>
            </div>
          )}
          
        </div>
        
      </div>
    </section>
  );
};

export default FounderVideoSection;
