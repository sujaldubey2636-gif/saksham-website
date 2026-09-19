import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabaseClient';

const RATING_REACTIONS = [
  { emoji: '', label: '' },
  { emoji: '😔', label: 'Poor' },
  { emoji: '😐', label: 'Okay' },
  { emoji: '🙂', label: 'Good' },
  { emoji: '😊', label: 'Great' },
  { emoji: '🤩', label: 'Amazing!' },
];

const HIGHLIGHT_TAGS = [
  'Quality of Work', 'Fast Delivery', 'Communication', 'Value for Money',
  'Technical Skill', 'Design Sense', 'Post-launch Support', 'Professionalism'
];

export default function LiveFeedbackSection() {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Multi-step wizard state
  const [step, setStep] = useState(1); // 1=Rating, 2=Tags, 3=Details, 4=ThankYou
  const [formData, setFormData] = useState({ name: '', role: '', rating: 0, text: '', highlights: [] });
  const [hoveredStar, setHoveredStar] = useState(0);
  
  // Drag and Auto-Scroll State
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      const { data } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });
      if (data && data.length > 0) setReviews(data);
      else setReviews([]);
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
        // Stop scrolling if we reach the end
        if (container.scrollLeft < container.scrollWidth - container.clientWidth) {
          container.scrollLeft += 0.5;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e) => { setIsDragging(true); setStartX(e.pageX - scrollRef.current.offsetLeft); setScrollLeftState(scrollRef.current.scrollLeft); };
  const handleMouseLeave = () => { setIsDragging(false); setIsHovered(false); };
  const handleMouseUp = () => { setIsDragging(false); };
  const handleMouseMove = (e) => { if (!isDragging) return; e.preventDefault(); const x = e.pageX - scrollRef.current.offsetLeft; scrollRef.current.scrollLeft = scrollLeftState - (x - startX) * 2; };

  const openModal = () => {
    setStep(1);
    setFormData({ name: '', role: '', rating: 0, text: '', highlights: [] });
    setHoveredStar(0);
    setIsModalOpen(true);
  };

  const toggleHighlight = (tag) => {
    setFormData(prev => ({
      ...prev,
      highlights: prev.highlights.includes(tag) ? prev.highlights.filter(t => t !== tag) : [...prev.highlights, tag]
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.text || !formData.rating) return;

    const newReview = {
      name: formData.name,
      role: formData.role || 'Verified Client',
      rating: formData.rating,
      text: formData.text,
      date: new Date().toISOString().split('T')[0],
    };

    const tempReview = { ...newReview, id: Date.now(), isNew: true };
    setReviews(prev => [tempReview, ...prev]);

    // Show thank you
    setStep(4);

    const { error } = await supabase.from('reviews').insert([newReview]);
    if (error) console.error("Supabase insert error:", error);

    // Auto-close after 3 seconds
    setTimeout(() => { setIsModalOpen(false); }, 3000);
  };

  const renderStars = (rating) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`material-symbols-outlined text-lg ${star <= rating ? 'text-[#E58E26] drop-shadow-[0_0_4px_rgba(229,142,38,0.5)]' : 'text-[#2A2D35]'}`}>star</span>
      ))}
    </div>
  );

  const activeRating = hoveredStar || formData.rating;
  const marqueeItems = reviews;

  // Step progress bar
  const progressWidth = step === 1 ? '33%' : step === 2 ? '66%' : '100%';

  return (
    <section id="feedback-section" className="scroll-mt-24 w-full py-24 lg:py-32 bg-[#121316] border-b border-[#2A2D35] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 animate-on-scroll">
        <div className="flex flex-col gap-4 text-left max-w-2xl">
          <span className="text-xs font-mono text-[#E58E26] uppercase tracking-widest font-semibold">// CLIENT EXPERIENCES</span>
          <h2 className="text-4xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3]">
            Don't just take our word for it.
          </h2>
          <p className="text-lg text-[#8A919E] max-w-xl mt-2">
            Real feedback from partners who trusted us to build their core systems. Drag to explore.
          </p>
        </div>
        <button onClick={openModal} className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-medium bg-[#E58E26] text-[#121316] hover:bg-[#d07e1e] transition-colors font-mono shadow-[0_0_15px_rgba(229,142,38,0.2)]">
          <span className="material-symbols-outlined text-lg">edit_square</span>
          Rate our service
        </button>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden min-h-[250px] flex items-center justify-center">
        {isLoading ? (
          <div className="flex gap-2 items-center text-[#8A919E] font-mono">
            <span className="material-symbols-outlined animate-spin">refresh</span> Loading experiences...
          </div>
        ) : reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center max-w-md p-8 border border-[#2A2D35] border-dashed rounded-xl bg-[#1A1C21]/50">
            <span className="material-symbols-outlined text-4xl text-[#E58E26] mb-4 opacity-80">hotel_class</span>
            <h3 className="text-xl font-bold text-[#F0F1F3] mb-2 font-['Bricolage_Grotesque',sans-serif]">Be the first to review us</h3>
            <p className="text-sm text-[#8A919E] mb-6">If you've worked with us, we'd love to hear about your experience!</p>
            <button onClick={openModal} className="text-[#E58E26] font-mono text-sm underline hover:text-[#d07e1e]">Leave a rating</button>
          </div>
        ) : (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#121316] to-transparent z-10 pointer-events-none" />
            <div ref={scrollRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onTouchStart={() => setIsHovered(true)} onTouchEnd={() => setIsHovered(false)}
              className={`flex gap-6 px-3 overflow-x-auto scrollbar-hide select-none w-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
              {marqueeItems.map((review, idx) => (
                <div key={`${review.id || idx}-${idx}`} className={`w-[350px] md:w-[420px] shrink-0 bg-[#1A1C21] border border-[#2A2D35] rounded-xl p-8 flex flex-col gap-6 relative transition-all duration-300 hover:border-[#4cd7f6]/40 hover:bg-[#1f2127] ${review.isNew ? 'ring-1 ring-[#E58E26]' : ''}`}>
                  <div className="flex justify-between items-center">{renderStars(review.rating)}<span className="text-xs font-mono text-[#6b7280]">{review.date}</span></div>
                  <p className="text-[#F0F1F3] text-base leading-relaxed italic flex-grow whitespace-normal pointer-events-none">"{review.text}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-[#2A2D35]">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#2A2D35] flex items-center justify-center text-[#F0F1F3] font-bold font-['Bricolage_Grotesque',sans-serif]">{review.name ? review.name.charAt(0) : 'A'}</div>
                    <div className="flex flex-col min-w-0 pointer-events-none"><span className="text-sm font-semibold text-[#F0F1F3] truncate">{review.name || 'Anonymous'}</span><span className="text-xs text-[#8A919E] truncate">{review.role || 'Client'}</span></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#121316] to-transparent z-10 pointer-events-none" />
          </>
        )}
      </div>

      {/* =========================================== */}
      {/*  MULTI-STEP RATING WIZARD MODAL             */}
      {/* =========================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative w-full max-w-md bg-[#1A1C21] border border-[#2A2D35] rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
            
            {/* Progress Bar */}
            {step < 4 && (
              <div className="h-1 bg-[#2A2D35]">
                <div className="h-full bg-[#E58E26] transition-all duration-500 ease-out" style={{ width: progressWidth }} />
              </div>
            )}

            {/* Close Button */}
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-[#8A919E] hover:text-[#F0F1F3] transition-colors z-10">
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="p-8">

              {/* ===== STEP 1: Star Rating ===== */}
              {step === 1 && (
                <div className="flex flex-col items-center text-center gap-6">
                  <div>
                    <h3 className="text-2xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">How was your experience?</h3>
                    <p className="text-sm text-[#8A919E] mt-2">Tap a star to rate us</p>
                  </div>

                  {/* Emoji Reaction */}
                  <div className="text-6xl h-20 flex items-center justify-center transition-all duration-300">
                    {activeRating > 0 ? RATING_REACTIONS[activeRating].emoji : '⭐'}
                  </div>
                  <span className="text-sm font-mono text-[#E58E26] h-5">
                    {activeRating > 0 ? RATING_REACTIONS[activeRating].label : ''}
                  </span>

                  {/* Big Stars */}
                  <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="transition-all duration-200 hover:scale-125 active:scale-95"
                      >
                        <span className={`material-symbols-outlined text-5xl transition-colors duration-200 ${
                          star <= activeRating ? 'text-[#E58E26] drop-shadow-[0_0_12px_rgba(229,142,38,0.5)]' : 'text-[#2A2D35] hover:text-[#3A3D45]'
                        }`}>star</span>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => formData.rating > 0 && setStep(2)}
                    disabled={formData.rating === 0}
                    className={`w-full mt-4 py-3.5 rounded-lg font-mono font-medium transition-all ${
                      formData.rating > 0 ? 'bg-[#E58E26] text-[#121316] hover:bg-[#d07e1e] cursor-pointer' : 'bg-[#2A2D35] text-[#6b7280] cursor-not-allowed'
                    }`}
                  >
                    Continue →
                  </button>
                </div>
              )}

              {/* ===== STEP 2: Highlight Tags ===== */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-2xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">What stood out?</h3>
                    <p className="text-sm text-[#8A919E] mt-2">Select what you liked most (optional)</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {HIGHLIGHT_TAGS.map((tag) => {
                      const isSelected = formData.highlights.includes(tag);
                      return (
                        <button key={tag} type="button" onClick={() => toggleHighlight(tag)}
                          className={`px-4 py-2 rounded-full text-sm font-mono border transition-all duration-200 ${
                            isSelected
                              ? 'bg-[#E58E26]/15 border-[#E58E26] text-[#E58E26]'
                              : 'bg-transparent border-[#2A2D35] text-[#8A919E] hover:border-[#8A919E] hover:text-[#F0F1F3]'
                          }`}
                        >
                          {isSelected && <span className="mr-1">✓</span>}{tag}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-lg font-mono text-sm text-[#8A919E] border border-[#2A2D35] hover:border-[#8A919E] transition-colors">
                      ← Back
                    </button>
                    <button onClick={() => setStep(3)} className="flex-1 py-3 rounded-lg font-mono font-medium bg-[#E58E26] text-[#121316] hover:bg-[#d07e1e] transition-colors">
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* ===== STEP 3: Details ===== */}
              {step === 3 && (
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="text-2xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">Almost done!</h3>
                    <p className="text-sm text-[#8A919E] mt-2">Tell us a bit about yourself and your experience</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-[#8A919E]">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-[#121316] border border-[#2A2D35] rounded-lg px-4 py-3 text-[#F0F1F3] focus:outline-none focus:border-[#E58E26] transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-[#8A919E]">Company / Role</label>
                      <input type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="bg-[#121316] border border-[#2A2D35] rounded-lg px-4 py-3 text-[#F0F1F3] focus:outline-none focus:border-[#E58E26] transition-colors" placeholder="CEO @ TechCorp" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-[#8A919E]">Your Review *</label>
                    <textarea required value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} rows="4"
                      className="bg-[#121316] border border-[#2A2D35] rounded-lg px-4 py-3 text-[#F0F1F3] focus:outline-none focus:border-[#E58E26] transition-colors resize-none"
                      placeholder="What was your experience working with Team SAKSHAM?" />
                  </div>

                  <div className="flex gap-3 mt-1">
                    <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-lg font-mono text-sm text-[#8A919E] border border-[#2A2D35] hover:border-[#8A919E] transition-colors">
                      ← Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!formData.name || !formData.text}
                      className={`flex-1 py-3 rounded-lg font-mono font-medium transition-all ${
                        formData.name && formData.text ? 'bg-[#F0F1F3] text-[#121316] hover:bg-white cursor-pointer' : 'bg-[#2A2D35] text-[#6b7280] cursor-not-allowed'
                      }`}
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              )}

              {/* ===== STEP 4: Thank You ===== */}
              {step === 4 && (
                <div className="flex flex-col items-center text-center gap-5 py-6">
                  <div className="text-7xl animate-bounce">🎉</div>
                  <h3 className="text-2xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">
                    Thank you, {formData.name.split(' ')[0]}!
                  </h3>
                  <p className="text-sm text-[#8A919E] max-w-xs">
                    Your review has been submitted and is now live on our website. We truly appreciate your feedback!
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[1,2,3,4,5].map(s => (
                      <span key={s} className={`material-symbols-outlined text-2xl ${s <= formData.rating ? 'text-[#E58E26]' : 'text-[#2A2D35]'}`}>star</span>
                    ))}
                  </div>
                  <p className="text-xs text-[#6b7280] font-mono mt-4">This window will close automatically...</p>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
