'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center px-6 py-32">
        {/* Centered DEBASHISH text with profile */}
        <div className="relative flex items-center justify-center">
          {/* Profile silhouette positioned behind BA letters - centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-[68%] -translate-y-1/2 w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] xl:w-[40rem] xl:h-[40rem] 2xl:w-[44rem] 2xl:h-[44rem] z-0" data-aos="zoom-in" data-aos-duration="1500">
            <div className="w-full h-full relative">
              <Image
                src="/portfolio.png"
                alt="Profile"
                fill
                className="object-cover object-center"
                style={{
                  filter: 'grayscale(100%) contrast(1.3) brightness(0.8)',
                  transform: 'scaleX(-1)', // Flip horizontally to face left
                }}
              />
            </div>
          </div>
          
          {/* DEBASHISH text - centered, blending with image */}
          <h1 
            className="text-[120px] md:text-[180px] lg:text-[220px] xl:text-[260px] font-serif font-black leading-none tracking-tight relative z-20 text-center whitespace-nowrap" 
            style={{ fontFamily: 'var(--font-playfair), serif' }}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <span className="text-white relative z-30">DE</span>
            <span 
              className="relative z-10"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px white',
                textStroke: '2px white',
                mixBlendMode: 'normal',
              }}
            >
              BAS
            </span>
            <span className="text-white relative z-30">HISH</span>
          </h1>
        </div>
      </div>
      
      {/* Dark strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-black"></div>
    </section>
  );
}

