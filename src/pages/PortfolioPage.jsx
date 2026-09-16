import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ALL_PROJECTS = [];

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#121316] text-[#F0F1F3] py-20 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-24 text-center sm:text-left flex flex-col sm:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl text-left">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-[#8A919E] hover:text-[#4cd7f6] mb-8 transition-colors">
              &larr; BACK TO HOME
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F0F1F3] font-['Bricolage_Grotesque',sans-serif]">
              Client Websites <span className="text-[#4cd7f6]">&amp; Ships</span>
            </h1>
            <p className="text-lg text-[#8A919E] mt-4 font-['IBM_Plex_Sans',sans-serif]">
              A complete archive of our recently deployed production builds. Zero bloat, maximum performance.
            </p>
          </div>
        </header>

        {ALL_PROJECTS.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-[#2A2D35] rounded-xl bg-[#1A1C21]/30">
            <span className="material-symbols-outlined text-4xl text-[#8A919E] mb-4">construction</span>
            <h3 className="text-xl font-bold font-['Bricolage_Grotesque',sans-serif] text-[#F0F1F3]">
              Portfolio Update in Progress
            </h3>
            <p className="text-[#8A919E] mt-2 max-w-md font-['IBM_Plex_Sans',sans-serif]">
              We are currently curating and uploading our latest client ships. Check back shortly to see our recent production deployments.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {ALL_PROJECTS.map((project, idx) => (
              <div key={idx} className="group flex flex-col bg-[#1A1C21] border border-[#2A2D35] rounded-xl overflow-hidden hover:border-[#4cd7f6]/40 transition-colors duration-300">
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img 
                    src={project.imageSrc} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C21] to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono bg-black/60 backdrop-blur text-white px-2 py-1 rounded border border-white/10 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold font-['Bricolage_Grotesque',sans-serif] text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#8A919E] mt-3 font-['IBM_Plex_Sans',sans-serif] flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-mono text-[#8A919E] bg-[#121316] border border-[#2A2D35] px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center w-full bg-[#2A2D35]/50 hover:bg-[#4cd7f6] hover:text-black text-[#F0F1F3] font-mono text-xs uppercase tracking-wider py-3 rounded transition-colors duration-300"
                  >
                    Visit Live Site &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
