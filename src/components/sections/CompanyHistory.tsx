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
    id: 'sailgp',
    name: 'SailGP',
    logo: 'https://res.cloudinary.com/stegault/image/upload/v1785937978/company-site/SailGP.png',
    website: 'https://www.sailgp.com/',
    period: '2023 - 2024',
    description: 'High-performance competitive sailing championship. Contributed to digital experiences for one of the world\'s fastest growing sports.',
    roles: ['Frontend Developer', 'Web Developer', 'UI Engineer'],
  },
  {
    id: 'evoke',
    name: 'Evoke Creative',
    logo: 'https://res.cloudinary.com/stegault/image/upload/v1785937978/company-site/Evoke_Creative.png',
    website: 'https://www.evokecreative.co.uk/',
    period: '2021 - 2023',
    description: 'Creative digital agency delivering innovative solutions. Specialized in React development and modern web technologies for enterprise clients.',
    roles: ['Frontend Developer', 'React Engineer', 'Web Developer'],
  },
  {
    id: 'trelleborg',
    name: 'Trelleborg',
    logo: 'https://res.cloudinary.com/stegault/image/upload/v1573213740/company-site/trelleborg-site.png',
    website: 'https://www.trelleborg.com/',
    period: '2019 - 2021',
    description: 'Global engineering company specializing in polymer technology. Built internal and customer-facing digital solutions.',
    roles: ['Frontend Developer', 'Full Stack Developer', 'Web Developer'],
  },
  {
    id: 'sofology',
    name: 'Sofology',
    logo: 'https://res.cloudinary.com/stegault/image/upload/v1573212293/company-site/sofology-site.png',
    website: 'https://www.sofology.co.uk/',
    period: '2018 - 2019',
    description: 'Premium furniture retailer. Developed responsive e-commerce and customer-facing digital experiences.',
    roles: ['Frontend Developer', 'Web Developer', 'UI Engineer'],
  },
  {
    id: 'fleetsolve',
    name: 'FleetSolve',
    logo: 'https://res.cloudinary.com/stegault/image/upload/v1573208357/company-site/fleetsolve-site.png',
    website: 'https://www.fleetsolve.co.uk/',
    period: '2017 - 2018',
    description: 'Fleet management software company. Built dashboard and reporting interfaces for logistics management.',
    roles: ['Frontend Developer', 'Full Stack Developer', 'JavaScript Engineer'],
  },
  {
    id: 'nviron',
    name: 'N-Viron Solutions',
    logo: 'https://res.cloudinary.com/stegault/image/upload/v1573204863/company-site/nviron-site.png',
    website: 'https://www.nviron.co.uk/',
    period: '2016 - 2017',
    description: 'Environmental compliance software. Developed user interfaces for complex regulatory and compliance systems.',
    roles: ['Frontend Developer', 'Web Developer', 'UI Developer'],
  },
  {
    id: 'charles-stanley',
    name: 'Charles Stanley Financial Solutions',
    logo: 'https://res.cloudinary.com/stegault/image/upload/v1573136052/company-site/broadtstone-site.png',
    website: 'https://www.charles-stanley.co.uk/',
    period: '2015 - 2016',
    description: 'Financial services company. Built responsive interfaces for investment platforms and client portals.',
    roles: ['Frontend Developer', 'Web Developer', 'JavaScript Engineer'],
  },
  {
    id: 'tearaway',
    name: 'Media Molecule / PlayStation Studios',
    logo: 'https://res.cloudinary.com/stegault/image/upload/v1785938275/company-site/Sony_Playstation.png',
    website: 'https://tearaway.me/',
    period: '2013 - 2014',
    description: 'QA testing on award-winning game. Contributed to BAFTA Award-winning Tearaway for PlayStation Vita with rigorous quality assurance and game testing.',
    roles: ['QA Tester', 'Game Tester', 'Quality Assurance'],
  },
  {
    id: 'various-tech',
    name: 'Various Tech Companies',
    logo: 'https://res.cloudinary.com/stegault/image/upload/v1560094278/company-site/d2-site_dyzutn.png',
    website: 'https://www.linkedin.com/in/stephen-gault-688b9312a/',
    period: '2012 - 2015',
    description: 'Early career at multiple tech startups and agencies. Built foundational skills in web development, HTML/CSS, JavaScript, and modern frameworks.',
    roles: ['Junior Frontend Developer', 'Web Developer', 'HTML/CSS Developer'],
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {companies.map((company, idx) => (
              <div
                key={company.id}
                className="group animate-slide-up"
                style={{ animationDelay: `${idx * 50}ms` }}
                onMouseEnter={() => setHoveredId(company.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-blue-400 transition-all duration-300 group-hover:shadow-lg cursor-pointer">
                  {/* Company Logo/Image Background */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-lg overflow-hidden bg-white shadow-md p-2">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 pb-6 h-full flex flex-col">
                    {/* Period Badge */}
                    <div className="inline-block mb-3 w-fit">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {company.period}
                      </span>
                    </div>

                    {/* Company Name */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-tight max-w-xs">
                      {company.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-700 leading-relaxed mb-4 flex-grow line-clamp-3">
                      {company.description}
                    </p>

                    {/* Roles */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {company.roles.slice(0, 2).map((role) => (
                        <span key={role} className="text-xs px-2 py-1 bg-slate-200 text-slate-700 rounded-full font-medium">
                          {role}
                        </span>
                      ))}
                      {company.roles.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-slate-200 text-slate-600 rounded-full font-medium">
                          +{company.roles.length - 2}
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
                        className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group-hover:gap-2 text-sm"
                      >
                        View
                        <span className="text-sm">→</span>
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
