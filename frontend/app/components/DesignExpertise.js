'use client';

export default function DesignExpertise() {
  const services = [
    {
      number: '01',
      title: 'PRODUCT DESIGN',
      description: 'Creating products that blend usability, functionality, and aesthetics for an enriching user experience. I focus on user needs, innovative solutions, and design that is both powerful and visually appealing.',
    },
    {
      number: '02',
      title: 'UI/UX DESIGN',
      description: 'Crafting intuitive interfaces and seamless user experiences that delight users and drive engagement.',
    },
    {
      number: '03',
      title: 'BRAND IDENTITY',
      description: 'Developing cohesive brand identities that communicate your values and resonate with your audience.',
    },
    {
      number: '04',
      title: 'PROTOTYPING & TESTING',
      description: 'Building interactive prototypes and conducting user testing to validate designs before development.',
    },
  ];

  return (
    <section id="services" className="bg-black py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
            <span className="text-[#ff6b35]">DESIGN EXPERTISE TO</span>
            <br />
            <span className="text-white">TRANSFORM IDEAS INTO</span>
            <br />
            <span className="text-white">IMPACTFUL PRODUCTS</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left side - Description */}
          <div className="text-white" data-aos="fade-right">
            <p className="text-lg md:text-xl font-sans font-light leading-relaxed">
              From in-depth user research to polished final delivery, I offer a full spectrum of design skills and services. Every step is focused on transforming concepts into intuitive, visually engaging, and user-centered products that make a meaningful impact.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex items-start gap-8 pb-8 border-b border-gray-800 hover:border-[#ff6b35] transition-colors cursor-pointer group"
            >
              <div className="text-6xl md:text-7xl font-bold text-white group-hover:text-[#ff6b35] transition-colors">
                {service.number}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-white mb-3">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-base md:text-lg font-sans font-light text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>
              <div className="text-white group-hover:text-[#ff6b35] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

