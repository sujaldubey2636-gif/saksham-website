import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabaseClient';

export default function LiveFeedbackSection() {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Drag and Auto-Scroll State
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rating: 5,
    text: ''
  });
  const [hoveredStar, setHoveredStar] = useState(0);

  // Load reviews from Supabase on mount
  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (data && data.length > 0) {
        setReviews(data);
      } else {
        setReviews([]);
      }
      setIsLoading(false);
    };
    fetchReviews();
  }, []);

  // Auto-scroll loop
  useEffect(() => {
    let animationId;
    const container = scrollRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isHovered && !isDragging) {
        container.scrollLeft += 1;
        
        // Loop back seamlessly when reaching halfway
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDragging]);

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    const newReview = {
      name: formData.name,
      role: formData.role || 'Verified Client',
      rating: formData.rating,
      text: formData.text,
      date: new Date().toISOString().split('T')[0],
    };

    const tempReview = { ...newReview, id: Date.now(), isNew: true };
    setReviews([tempReview, ...reviews]);
    
    setFormData({ name: '', role: '', rating: 5, text: '' });
    setIsModalOpen(false);

    const { error } = await supabase
      .from('reviews')
      .insert([newReview]);
      
    if (error) {
      console.error("Error inserting review into Supabase:", error);
    }
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

  const marqueeItems = [...reviews, ...reviews];

  return (
    <section id="feedback-section" className="scroll-mt-24 w-full py-24 lg:py-32 bg-[#121316] border-b border-[#2A2D35] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 animate-on-scroll">
        <div className="flex flex-col gap-4 text-left max-w-2xl">
          <span className="text-xs font-mono text-[#E58E26] uppercase tracking-widest font-semibold">// CLIENT EXPERIENCES</span>
          <h2 className="text-4xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3]">
            Don't just take our word for it.
          </h2>
          <p className="text-lg text-[#8A919E] max-w-xl mt-2">
            Real feedback from partners who trusted us to build their core systems. You can drag or swipe to explore.
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

      {/* Interactive Auto-Scrolling Marquee */}
      <div className="relative w-full overflow-hidden min-h-[250px] flex items-center justify-center">
        {isLoading ? (
          <div className="flex gap-2 items-center text-[#8A919E] font-mono">
             <span className="material-symbols-outlined animate-spin">refresh</span>
             Loading experiences...
          </div>
        ) : reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center max-w-md p-8 border border-[#2A2D35] border-dashed rounded-xl bg-[#1A1C21]/50">
            <span className="material-symbols-outlined text-4xl text-[#E58E26] mb-4 opacity-80">hotel_class</span>
            <h3 className="text-xl font-bold text-[#F0F1F3] mb-2 font-['Bricolage_Grotesque',sans-serif]">Be the first to review us</h3>
            <p className="text-sm text-[#8A919E] mb-6">There are currently no reviews to display. If you've worked with us, we'd love to hear about your experience!</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-[#E58E26] font-mono text-sm underline hover:text-[#d07e1e]"
            >
              Leave a rating
            </button>
          </div>
        ) : (
          <>
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#121316] to-transparent z-10 pointer-events-none" />
            
            <div 
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
              className={`flex gap-6 px-3 overflow-x-auto scrollbar-hide select-none w-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            >
              {marqueeItems.map((review, idx) => (
                <div 
                  key={`${review.id || idx}-${idx}`}
                  className={`w-[350px] md:w-[420px] shrink-0 bg-[#1A1C21] border border-[#2A2D35] rounded-xl p-8 flex flex-col gap-6 relative transition-all duration-300 hover:border-[#4cd7f6]/40 hover:bg-[#1f2127] ${review.isNew ? 'ring-1 ring-[#E58E26]' : ''}`}
                >
                  <div className="flex justify-between items-center">
                    {renderStars(review.rating)}
                    <span className="text-xs font-mono text-[#6b7280]">{review.date}</span>
                  </div>

                  <p className="text-[#F0F1F3] text-base leading-relaxed italic flex-grow whitespace-normal pointer-events-none">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-[#2A2D35]">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#2A2D35] flex items-center justify-center text-[#F0F1F3] font-bold font-['Bricolage_Grotesque',sans-serif]">
                      {review.name ? review.name.charAt(0) : 'A'}
                    </div>
                    <div className="flex flex-col min-w-0 pointer-events-none">
                      <span className="text-sm font-semibold text-[#F0F1F3] truncate">{review.name || 'Anonymous'}</span>
                      <span className="text-xs text-[#8A919E] truncate">{review.role || 'Client'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#121316] to-transparent z-10 pointer-events-none" />
          </>
        )}
      </div>

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
