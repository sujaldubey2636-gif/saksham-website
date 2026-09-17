import React from 'react';

const AboutSection = () => {
  return (
    <section id="about-section" className="scroll-mt-24 py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-[#121316] border-b border-[#2A2D35]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/3">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwNBnzRRm14HJs1Jhvu2lrmgNnpLNNNKh0zBqLhks2Fnik8g5IMV87uUnKGtLAULFigToWtn1GPJVmEx3205EObizEwC7d0vbpSuC6hrtSnBhWCPbmv3kF7rbvUASLx2vJ4pUQb_KUy3TZFu4UJXCT8p3CFSjw-Iskpi8AyG2wji8EmDsThRrpQzLdoRCVoJ6BzR-xDH7TTir7gDA4ffwRpZGHLHs6PypnxCojv9nqaBoKgKrJpzTb"
            alt="Saksham Sharma"
            className="w-full aspect-square object-cover rounded-xl"
          />
        </div>
        
        {/* Right Side: Content */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <span className="text-xs font-mono text-[#E58E26] font-semibold tracking-wider uppercase">// THE BUILDER</span>
          <h2 className="text-3xl md:text-4xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3] mt-2">
            Meet the founder
          </h2>
          
          <div className="mt-4 flex flex-col">
            <span className="text-sm font-medium text-[#E58E26]">Saksham Sharma</span>
            <span className="text-sm text-[#8A919E]">Founder & Lead Engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
