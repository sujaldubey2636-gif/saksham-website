import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ALL_PROJECTS = [
  {
    title: 'Client Website 1',
    category: 'E-Commerce',
    url: 'https://example.com',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6iCqZYvwjKgx7qyRTFEJ1xwNqQoEd0BemwnciouQxA4mpGxW3kBefkgAVkNHtupBPrbvHH3XPhxPUYsrzitqLCl52Do1XmkY1Tbt-vejO3iczU6WDD9ccGZ6ahNaOQeEGT13OR_KDVsCsjg8pjxAxr9ej5RHTzZhL8rpvCQmqLIwhBIlCiF6VgVKVRsJZd54UBFJuZZQTt1ifsfYlP7Fr3iaFrCPn0VtD9or0QMF22TwWr6HhD_7P',
    description: 'High-converting custom storefront designed for modern retail brands.',
    tags: ['React', 'Tailwind', 'Shopify']
  },
  {
    title: 'Client Website 2',
    category: 'Corporate Site',
    url: 'https://example.com',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9G-TwQ1GEcGHRP8HHQPO9L0XjBmhhFQKaaCQdemTy5Skq_D1nX1m3BC5Nhsd4a2mYHuwOYnmnxknMP_gFRRq_vQFab0VxUmp2Yk3wOc5HG43BMY4BUImTJhA0VnavOIWwKmmdSNPbSh4Tds8rxQUgG4qphSVNL3E9m5Vy09lNd0KXfXWF1MCT3d9BV8FqoRaCEyUMBE2SIXTY8oazKR_lJHB2ueXIyQ1VeCmC44angNiO2llUiLAi',
    description: 'A blazing fast marketing site built to capture enterprise leads.',
    tags: ['Next.js', 'Framer Motion']
  },
  {
    title: 'Client Website 3',
    category: 'Web App',
    url: 'https://example.com',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-jbbPrfdESCP2GDAgwHSnUU2IWrJYWzdyeNOZJzZRTSh6OkzFriuO4L8P-HpIGtPzu5gJ4xAEtSJu74oSD_QwdI_SIAFRWMVHhMGGuwHePXP4xU0gBxYbbrQEIxl7aJOhf2Skz90CFBA84U_YPp5SLYY53UjrywmOE1IAiJ6vzUdvlD8JxQE9HF8fvwm-Y29Wk20DtN-vrjjvESFZ6lppXjN1Et8N9Xii2uVn1TdF30SuEQ5-yteE',
    description: 'Complex dashboard and automation platform for logistics.',
    tags: ['Dashboard', 'API', 'Supabase']
  }
];

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
      </div>
    </div>
  );
}
