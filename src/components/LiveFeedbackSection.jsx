import React, { useState, useEffect } from 'react';

// Added more initial reviews so the marquee feels populated and builds trust instantly.
const INITIAL_REVIEWS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Founder @ TechFlow',
    rating: 5,
    text: 'Team SAKSHAM delivered our platform 2 weeks ahead of schedule. The code was pristine and the performance is night and day compared to our old WordPress setup.',
    date: '2026-08-15',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Director of Ops, RetailGen',
    rating: 5,
    text: 'Finally, an engineering partner that actually listens. They didn\'t just build what we asked for, they improved the core architecture. Highly recommended.',
    date: '2026-09-02',
  },
  {
    id: 3,
    name: 'Dr. Ananya Sen',
    role: 'Founder, Aura Studio',
    rating: 5,
    text: 'Working with Team SAKSHAM was refreshingly straightforward. Our booking site launched in 12 days and appointments jumped 140% in the first month.',
    date: '2026-07-28',
  },
  {
    id: 4,
    name: 'Rhea Kapoor',
    role: 'Growth Lead, Pulse Coffee',
    rating: 5,
    text: 'No games, no hidden fees. We got our complete codebase on day one. The 30-day support after launch was genuinely helpful.',
    date: '2026-06-14',
  },
  {
    id: 5,
    name: 'David Torres',
    role: 'CEO, Nexus Logistics',
    rating: 5,
    text: 'Two agencies quoted us $25k and months of work. SAKSHAM delivered our automation pipeline in 9 days. It saves us 14 hours every week.',
    date: '2026-08-05',
  }
];

export default function LiveFeedbackSection() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rating: 5,
    text: ''
  });
  const [hoveredStar, setHoveredStar] = useState(0);

  // Load reviews from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('saksham_client_reviews');
    if (saved) {
      setReviews(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    const newReview = {
      id: Date.now(),
      name: formData.name,
      role: formData.role || 'Verified Client',
      rating: formData.rating,
      text: formData.text,
      date: new Date().toISOString().split('T')[0],
      isNew: true
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('saksham_client_reviews', JSON.stringify(updatedReviews));
    
    // Reset and close
    setFormData({ name: '', role: '', rating: 5, text: '' });
    setIsModalOpen(false);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={`material-symbols-outlined text-lg ${star <= rating ? 'text-[#E58E26] drop-shadow-[0_0_4px_rgba(229,142,38,0.5)]' : 'text-[#2A2D35]'}`}>
            star
          </span>
        ))}
      </div>
    );
  };

  // We duplicate the reviews array to create a seamless infinite scrolling marquee
  const marqueeItems = [...reviews, ...reviews];

  return (
    <section id="feedback-section" className="scroll-mt-24 w-full py-24 lg:py-32 bg-[#121316] border-b border-[#2A2D35] overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 animate-on-scroll">
        <div className="flex flex-col gap-4 text-left max-w-2xl">
          <span className="text-xs font-mono text-[#E58E26] uppercase tracking-widest font-semibold">// CLIENT EXPERIENCES</span>
          <h2 className="text-4xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3]">
            Don't just take our word for it.
          </h2>
          <p className="text-lg text-[#8A919E] max-w-xl mt-2">
            Real feedback from partners who trusted us to build their core systems.
          </p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-medium bg-[#E58E26] text-[#121316] hover:bg-[#d07e1e] transition-colors font-mono shadow-[0_0_15px_rgba(229,142,38,0.2)]"
        >
          <span className="material-symbols-outlined text-lg">edit_square</span>
          Rate our service
        </button>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full flex overflow-x-hidden">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#121316] to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-6 px-3 animate-marquee w-max">
          {marqueeItems.map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`}
              className={`w-[350px] md:w-[420px] shrink-0 bg-[#1A1C21] border border-[#2A2D35] rounded-xl p-8 flex flex-col gap-6 relative transition-all duration-300 hover:border-[#4cd7f6]/40 hover:bg-[#1f2127] ${review.isNew ? 'ring-1 ring-[#E58E26]' : ''}`}
            >
              {/* Top Bar: Stars + Date */}
              <div className="flex justify-between items-center">
                {renderStars(review.rating)}
                <span className="text-xs font-mono text-[#6b7280]">{review.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-[#F0F1F3] text-base leading-relaxed italic flex-grow whitespace-normal">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#2A2D35]">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#2A2D35] flex items-center justify-center text-[#F0F1F3] font-bold font-['Bricolage_Grotesque',sans-serif]">
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-[#F0F1F3] truncate">{review.name}</span>
                  <span className="text-xs text-[#8A919E] truncate">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#121316] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Feedback Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-lg bg-[#1A1C21] border border-[#2A2D35] rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">
                  Rate your experience
                </h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Star Rating Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-mono text-[#8A919E]">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <span className={`material-symbols-outlined text-3xl ${
                          star <= (hoveredStar || formData.rating) 
                            ? 'text-[#E58E26] drop-shadow-[0_0_8px_rgba(229,142,38,0.6)]' 
                            : 'text-[#2A2D35]'
                        }`}>
                          star
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-mono text-[#8A919E]">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-[#121316] border border-[#2A2D35] rounded-lg px-4 py-3 text-[#F0F1F3] focus:outline-none focus:border-[#4cd7f6] transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-mono text-[#8A919E]">Company / Role</label>
                    <input 
                      type="text" 
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="bg-[#121316] border border-[#2A2D35] rounded-lg px-4 py-3 text-[#F0F1F3] focus:outline-none focus:border-[#4cd7f6] transition-colors"
                      placeholder="CEO @ TechCorp"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-mono text-[#8A919E]">Your Review *</label>
                  <textarea 
                    required
                    value={formData.text}
                    onChange={(e) => setFormData({...formData, text: e.target.value})}
                    rows="4"
                    className="bg-[#121316] border border-[#2A2D35] rounded-lg px-4 py-3 text-[#F0F1F3] focus:outline-none focus:border-[#4cd7f6] transition-colors resize-none"
                    placeholder="How was your experience working with Team SAKSHAM?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-2 w-full py-3.5 rounded-lg font-mono font-medium bg-[#F0F1F3] text-[#121316] hover:bg-white transition-colors"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
