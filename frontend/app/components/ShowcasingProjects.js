'use client';

export default function ShowcasingProjects() {
  const projects = [
    {
      title: 'SMART LIVING APP',
      description: 'A cutting-edge mobile application designed specifically for home automation',
      category: 'Real Estate & Property',
    },
    {
      title: 'ECO-FRIENDLY PACKAGING',
      description: 'Sustainable packaging solutions for modern brands',
    },
    {
      title: 'FINTECH DASHBOARD PLATFORM',
      description: 'Comprehensive financial analytics and management platform',
    },
    {
      title: 'EDUCATIONAL AR LEARNING KIT',
      description: 'Interactive augmented reality learning experiences',
    },
  ];

  return (
    <section id="projects" className="bg-black py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div data-aos="fade-right">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8">
              <span className="text-white">SHOWCASING PROJECTS</span>
              <br />
              <span className="text-white">THAT DEFINE MY</span>
              <br />
              <span className="text-[#ff6b35]">DESIGN APPROACH</span>
            </h2>
          </div>
          <div className="flex flex-col justify-between" data-aos="fade-left">
            <p className="text-lg md:text-xl font-sans font-light text-gray-300 leading-relaxed mb-8">
              My selection of key design projects illustrates my design philosophy and ability to develop innovative solutions for various industries. Each project reflects my commitment to excellence and a passion for design.
            </p>
            <button className="bg-[#ff6b35] text-white px-8 py-4 rounded-none flex items-center gap-3 w-fit hover:bg-[#e55a2b] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              View All Projects
            </button>
          </div>
        </div>

        {/* Project Previews */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mobile App Preview */}
          <div className="space-y-4" data-aos="zoom-in" data-aos-delay="0">
            <div className="bg-gray-900 rounded-lg p-4 h-96 flex items-center justify-center">
              <div className="w-32 h-56 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl"></div>
            </div>
            <div className="w-32 h-56 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-2xl mx-auto"></div>
          </div>

          {/* Desktop Preview */}
          <div className="bg-gray-900 rounded-lg p-4 h-96 flex items-center justify-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-2xl"></div>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-gray-900 rounded-lg p-4 h-96 flex items-center justify-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg shadow-2xl grid grid-cols-2 gap-2 p-4">
              <div className="bg-white/20 rounded"></div>
              <div className="bg-white/20 rounded"></div>
              <div className="bg-white/20 rounded col-span-2"></div>
            </div>
          </div>
        </div>

        {/* Featured Project */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6" data-aos="fade-right">
            <div className="text-[#ff6b35] font-sans font-medium text-lg">
              Real Estate & Property
            </div>
            <p className="text-xl md:text-2xl font-sans font-light text-white leading-relaxed">
              A cutting-edge mobile application designed specifically for home automation. This innovative platform seamlessly integrates smart home technologies, providing users with intuitive control over their living spaces.
            </p>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-none hover:bg-white hover:text-black transition-colors">
              View Project
            </button>
          </div>

          {/* Other Projects List */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 100}
                className="flex items-start justify-between gap-4 pb-6 border-b border-gray-800 hover:border-[#ff6b35] transition-colors cursor-pointer group"
              >
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-2 group-hover:text-[#ff6b35] transition-colors">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-sm md:text-base font-sans font-light text-gray-400">
                      {project.description}
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
      </div>
    </section>
  );
}

