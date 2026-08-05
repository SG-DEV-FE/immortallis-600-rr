'use client';

import { useState } from 'react';

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  logo?: string;
  companyUrl?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Sg Dev FE',
    role: 'Founder & UI/UX Developer',
    period: '2020 - Present',
    description:
      'Founded and leading digital innovation with focus on modern web technologies. Specializing in Next.js, TypeScript, Tailwind CSS, and full-stack development. Recently collaborated with Evoke Creative and SailGP on high-impact projects.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX Design', 'Full Stack', 'Leadership'],
    companyUrl: 'https://github.com/sg-dev-fe',
  },
  {
    id: 2,
    company: 'SailGP',
    role: 'Frontend Developer',
    period: '2023 - 2024',
    description:
      'Built digital experiences for high-performance competitive sailing championship. Contributed to web applications for one of the world\'s fastest growing sports.',
    skills: ['React', 'Web Development', 'Performance', 'User Experience', 'JavaScript'],
    companyUrl: 'https://www.sailgp.com/',
  },
  {
    id: 3,
    company: 'Evoke Creative',
    role: 'Frontend Developer & React Engineer',
    period: '2021 - 2023',
    description:
      'Delivered innovative solutions as part of a creative digital agency. Specialized in React development and modern web technologies for enterprise clients.',
    skills: ['React', 'Frontend Development', 'Web Development', 'TypeScript', 'UI Implementation'],
    companyUrl: 'https://www.evokecreative.co.uk/',
  },
  {
    id: 4,
    company: 'Trelleborg',
    role: 'Frontend & Full Stack Developer',
    period: '2019 - 2021',
    description:
      'Global engineering company specializing in polymer technology. Built internal systems and customer-facing digital solutions for one of Europe\'s largest engineering firms.',
    skills: ['JavaScript', 'Full Stack', 'Web Applications', 'Frontend', 'Database Design'],
    companyUrl: 'https://www.trelleborg.com/',
  },
  {
    id: 5,
    company: 'Sofology',
    role: 'Frontend Developer & Web Developer',
    period: '2018 - 2019',
    description:
      'Premium furniture retailer. Developed responsive e-commerce interfaces and customer-facing digital experiences during freelance engagement.',
    skills: ['Frontend Development', 'E-commerce', 'Responsive Design', 'React', 'CSS'],
    companyUrl: 'https://www.sofology.co.uk/',
  },
  {
    id: 6,
    company: 'FleetSolve',
    role: 'Frontend & Full Stack Developer',
    period: '2017 - 2018',
    description:
      'Fleet management software company. Built dashboard interfaces, reporting systems, and logistics management tools for enterprise customers.',
    skills: ['JavaScript', 'Frontend', 'Full Stack', 'Dashboard Development', 'Data Visualization'],
    companyUrl: 'https://www.fleetsolve.co.uk/',
  },
  {
    id: 7,
    company: 'N-Viron Solutions',
    role: 'Frontend & UI Developer',
    period: '2016 - 2017',
    description:
      'Environmental compliance software company. Developed user interfaces for complex regulatory and compliance systems serving enterprise clients.',
    skills: ['JavaScript', 'HTML/CSS', 'UI Development', 'Responsive Design', 'Frontend'],
    companyUrl: 'https://www.nviron.co.uk/',
  },
  {
    id: 8,
    company: 'Charles Stanley Financial Solutions',
    role: 'Frontend Developer & Web Developer',
    period: '2015 - 2016',
    description:
      'Financial services company. Built responsive, secure interfaces for investment platforms and client portals. Early career experience with modern web development practices.',
    skills: ['JavaScript', 'HTML/CSS', 'Responsive Design', 'Frontend', 'Web Development'],
    companyUrl: 'https://broadstone.co.uk/',
  },
  {
    id: 9,
    company: 'Media Molecule / PlayStation Studios',
    role: 'QA Tester & Game Tester',
    period: '2013 - 2014',
    description:
      'Started professional career in QA testing at award-winning game studio. Contributed to BAFTA Award-winning Tearaway for PlayStation Vita with rigorous quality assurance, bug identification, and gameplay validation.',
    skills: ['QA Testing', 'Game Testing', 'Bug Tracking', 'Quality Assurance', 'Attention to Detail'],
    companyUrl: 'https://tearaway.me/',
  },
];

export default function Career() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="career" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-orange-500 text-lg font-bold uppercase tracking-widest">
              <i className="fas fa-briefcase mr-2"></i>Professional Timeline
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-600">
            From QA testing at award-winning game studios to building enterprise solutions and founding my own venture. 
            A 12-year career spanning gaming, fintech, enterprise software, and modern web innovation. 
            Each role brought new perspectives on solving complex problems with elegance and user-centric design.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`animate-fade-in group`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Card */}
                <div
                  className="bg-white rounded-xl border border-slate-200 hover:border-orange-400 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  onClick={() => toggleExpanded(exp.id)}
                >
                  {/* Card Header */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          {exp.logo && (
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-12 h-12 rounded-lg"
                            />
                          )}
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900">
                              {exp.company}
                            </h3>
                            <p className="text-orange-500 font-semibold">{exp.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <i className="fas fa-calendar"></i>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <div
                        className={`text-orange-500 text-2xl transition-transform duration-300 ${
                          expandedId === exp.id ? 'rotate-180' : ''
                        }`}
                      >
                        <i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedId === exp.id && (
                    <div className="border-t border-slate-100 px-6 md:px-8 py-6 bg-gradient-to-r from-orange-50 to-amber-50 animate-slide-up">
                      <p className="text-slate-700 leading-relaxed mb-6">{exp.description}</p>

                      {/* Skills */}
                      <div className="mb-6">
                        <p className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-3">
                          Key Skills
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-white border border-orange-200 text-orange-600 rounded-full text-sm font-medium hover:bg-orange-50 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                        >
                          Learn More
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <p className="text-slate-600 mb-6">
            12 years of experience across gaming, fintech, enterprise, and modern web technologies.
            Passionate about creating elegant solutions that solve real problems.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Let's Collaborate →
          </a>
        </div>
      </div>
    </section>
  );
}
