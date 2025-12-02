'use client';

import Image from 'next/image';

export default function CraftingDesigns() {
  const stats = [
    { number: '2600+', label: 'Projects Completed' },
    { number: '10+', label: 'Years of Design Experience' },
    { number: '2400+', label: 'Happy Clients Worldwide' },
    { number: '40', label: 'Industry Sectors Served' },
  ];

  const industries = [
    { 
      name: 'Technology & Software',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=500&fit=crop'
    },
    { 
      name: 'E-Commerce Solutions',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=500&fit=crop'
    },
    { 
      name: 'Lifestyle & Coaching',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=500&fit=crop'
    },
    { 
      name: 'Healthcare & Wellness',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=500&fit=crop'
    },
    { 
      name: 'Real Estate & Property',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=500&fit=crop'
    },
  ];

  return (
    <section id="about" className="bg-black py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
            <span className="text-white">CRAFTING DESIGNS</span>
            <br />
            <span className="text-white">THAT CONNECT PEOP</span>
            <span className="text-[#ff6b35]">LE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left side - Statement */}
          <div className="text-white" data-aos="fade-right">
            <p className="text-xl md:text-2xl font-sans font-light leading-relaxed">
              Designing with Purpose. Creating Experiences Measured by Meaningful Impact.
            </p>
            <p className="mt-4 text-base md:text-lg font-sans font-light leading-relaxed">
              <span className="text-[#ff6b35] font-normal">Currently exploring AI</span>
              <span className="text-gray-300"> to enhance product design workflows and enable more human, intuitive digital experiences.</span>
            </p>
          </div>

          {/* Right side - Profile and Stats */}
          <div className="space-y-12" data-aos="fade-left">
            {/* Profile Picture */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 border-4 border-[#ff6b35] z-10"></div>
              <div className="absolute inset-4 overflow-hidden">
                <Image
                  src="/portfolio.png"
                  alt="Debashish"
                  fill
                  className="object-cover object-center"
                  style={{ filter: 'grayscale(100%) contrast(1.2)' }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-[#ff6b35]">
                    {stat.number}
                  </div>
                  <div className="text-white text-sm md:text-base font-sans">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Polaroids */}
        <div className="flex flex-wrap gap-6 justify-center items-center mt-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="relative w-48 h-56 bg-white p-2 transform hover:rotate-0 transition-transform duration-300 shadow-lg"
              style={{
                transform: `rotate(${index % 2 === 0 ? '-5deg' : '5deg'})`,
              }}
            >
              <div className="w-full h-full relative overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-2 py-1">
                  <div className="text-black text-xs font-bold text-center">
                    {industry.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

