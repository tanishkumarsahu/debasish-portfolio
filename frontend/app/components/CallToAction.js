'use client';

export default function CallToAction() {
  return (
    <section id="contact" className="bg-black py-24 px-6 lg:px-12 relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center w-full">
        {/* Main Heading - Two lines, serif font */}
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-12 leading-tight" 
          data-aos="fade-up"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          <div className="block">LET'S BUILD SOMETHING</div>
          <div className="block">EXTRAORDINARY TOGETHER</div>
        </h2>
        
        {/* CTA Button - Orange-red with rounded corners, arrow icon in circle */}
        <button 
          className="bg-[#ff6b35] text-white px-8 py-4 md:px-12 md:py-6 rounded-full flex items-center gap-4 mx-auto hover:bg-[#e55a2b] transition-colors text-base md:text-lg font-sans font-medium" 
          data-aos="zoom-in" 
          data-aos-delay="200"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <span>Work with Me</span>
        </button>

        {/* Scrolling/Animated Text - Horizontal scroll with varying opacity */}
        <div className="mt-24 md:mt-32 overflow-hidden relative">
          <div className="flex whitespace-nowrap marquee-animation">
            <span className="text-gray-400/40 text-sm md:text-base font-sans mx-6 inline-flex items-center gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-lg">*</span>
            </span>
            <span className="text-gray-400/60 text-sm md:text-base font-sans mx-6 inline-flex items-center gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-lg">*</span>
            </span>
            <span className="text-gray-400 text-sm md:text-base font-sans mx-6 inline-flex items-center gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-lg">*</span>
            </span>
            <span className="text-gray-400/40 text-sm md:text-base font-sans mx-6 inline-flex items-center gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-lg">*</span>
            </span>
            <span className="text-gray-400/60 text-sm md:text-base font-sans mx-6 inline-flex items-center gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-lg">*</span>
            </span>
            <span className="text-gray-400 text-sm md:text-base font-sans mx-6 inline-flex items-center gap-2">
              Creative Collaboration Is The Key To Meaningful Design 
              <span className="text-[#ff6b35] text-lg">*</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

