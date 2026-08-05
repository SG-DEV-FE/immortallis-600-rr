'use client';

import { useState } from 'react';

interface Company {
  id: string;
  name: string;
  logo: string;
  website: string;
  period: string;
  description: string;
  roles: string[];
}

const companies: Company[] = [
  {
    id: 'sg-dev-fe',
    name: 'Sg Dev FE',
    logo: 'https://res.cloudinary.com/stegault/image/upload/c_scale,h_80,w_80,f_auto,q_auto:eco/v1561378466/brandicon_xzpby6.png',
    website: 'https://github.com/sg-dev-fe',
    period: '2020 - Present',
    description: 'Founded and leading digital innovation with focus on modern web technologies. Specializing in Next.js, TypeScript, and full-stack development.',
    roles: ['Founder', 'UI/UX Developer', 'Full Stack Engineer', 'Tech Lead'],
  },
  {
    id: 'freelance',
    name: 'Freelance Creative Developer',
    logo: 'https://res.cloudinary.com/stegault/image/upload/c_scale,h_80,w_80,f_auto,q_auto:eco/v1561378466/brandicon_xzpby6.png',
    website: 'https://www.linkedin.com/in/stephen-gault-688b9312a/',
    period: '2018 - 2020',
    description: 'Delivered pixel-perfect solutions across diverse industries. Gaming, e-commerce, and creative projects with advanced CSS animations and interactions.',
    roles: ['UI/UX Engineer', 'React Developer', 'Vue.js Developer', 'Web Designer'],
  },
  {
    id: 'tearaway',
    name: 'Media Molecule / PlayStation Studios',
    logo: 'https://res.cloudinary.com/stegault/image/upload/c_scale,h_80,w_80,f_auto,q_auto:eco/v1234567890/ps-vita-logo.png',
    website: 'https://www.mediamolecule.com/',
    period: '2013',
    description: 'QA testing on award-winning game. Contributed to BAFTA Award-winning Tearaway for PlayStation Vita with rigorous quality assurance.',
    roles: ['QA Tester', 'Game Tester', 'Bug Hunter'],
  },
  {
    id: 'tech-companies',
    name: 'Various Tech Companies',
    logo: 'https://res.cloudinary.com/stegault/image/upload/c_scale,h_80,w_80,f_auto,q_auto:eco/v1561378466/brandicon_xzpby6.png',
    website: 'https://www.linkedin.com/in/stephen-gault-688b9312a/',
    period: '2015 - 2018',
    description: 'Fast-paced tech environments building scalable user-facing features. Experience with modern frameworks, component design systems, and cross-browser compatibility.',
    roles: ['Front-end Developer', 'UI Developer', 'JavaScript Engineer', 'Web Developer'],
  },
];

export default function CompanyHistory() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="company-history" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-blue-600 text-lg font-bold uppercase tracking-widest">
              <i className="fas fa-building mr-2"></i>Professional Timeline
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Development Career
          </h2>
          <p className="text-xl text-slate-600">
            A journey through innovative companies and creative projects, from early career experiences 
            to founding my own venture in modern web development.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {companies.map((company) => (
              <div
                key={company.id}
                className="group animate-slide-up"
                onMouseEnter={() => setHoveredId(company.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-blue-400 transition-all duration-300 group-hover:shadow-lg cursor-pointer">
                  {/* Company Logo/Image Background */}
                  <div className="absolute top-6 right-6 w-24 h-24 rounded-lg overflow-hidden bg-white shadow-md p-2">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 pb-8 h-full flex flex-col">
                    {/* Period Badge */}
                    <div className="inline-block mb-4 w-fit">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                        {company.period}
                      </span>
                    </div>

                    {/* Company Name */}
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight max-w-xs">
                      {company.name}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-slate-700 leading-relaxed mb-6 flex-grow">
                      {company.description}
                    </p>

                    {/* Roles */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {company.roles.slice(0, 2).map((role) => (
                        <span key={role} className="text-xs px-3 py-1 bg-slate-200 text-slate-700 rounded-full font-medium">
                          {role}
                        </span>
                      ))}
                      {company.roles.length > 2 && (
                        <span className="text-xs px-3 py-1 bg-slate-200 text-slate-600 rounded-full font-medium">
                          +{company.roles.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Website Link */}
                    <div className={`transition-all duration-300 transform ${
                      hoveredId === company.id ? 'opacity-100 translate-y-0' : 'opacity-75'
                    }`}>
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group-hover:gap-3"
                      >
                        Learn More
                        <span className="text-lg">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Info */}
        <div className="mt-20 pt-12 border-t border-slate-200 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Career Progression</h3>
            <div className="space-y-4 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">2013:</span> Started professional career in QA testing at Media Molecule, contributing to the BAFTA Award-winning Tearaway for PlayStation Vita.
              </p>
              <p>
                <span className="font-semibold text-slate-900">2015-2018:</span> Built front-end expertise at various tech companies, working with modern frameworks, component design systems, and delivering scalable user-facing features.
              </p>
              <p>
                <span className="font-semibold text-slate-900">2018-2020:</span> Transitioned to freelance, specializing in pixel-perfect UI/UX implementations with advanced CSS animations and interactions for diverse clients.
              </p>
              <p>
                <span className="font-semibold text-slate-900">2020-Present:</span> Founded Sg Dev FE to focus on innovation with modern web technologies, leading full-stack development and building next-generation web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
