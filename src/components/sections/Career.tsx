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
    role: 'Founder & Lead UI/UX Developer',
    period: '2020 - Present',
    description:
      'Founded and scaling digital innovation studio with proven expertise in modern web technologies. Lead architect on Next.js, TypeScript, and Tailwind CSS solutions for enterprise clients. Recently delivered high-impact projects for Evoke Creative and SailGP, driving measurable business outcomes.',  
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX Design', 'Full Stack', 'Leadership'],
    companyUrl: 'https://github.com/sg-dev-fe',
  },
  {
    id: 2,
    company: 'SailGP',
    role: 'Senior Frontend Developer',
    period: '2023 - 2024',
    description:
      'Architected and delivered digital experiences for world\'s premier competitive sailing championship. Built high-performance, user-centric web applications supporting millions of global viewers and driving fan engagement.',  
    skills: ['React', 'Web Development', 'Performance', 'User Experience', 'JavaScript'],
    companyUrl: 'https://www.sailgp.com/',
  },
  {
    id: 3,
    company: 'Evoke Creative',
    role: 'Senior React Engineer & UI Specialist',
    period: '2021 - 2023',
    description:
      'Led frontend initiatives for top-tier creative digital agency. Delivered cutting-edge React solutions for Fortune 500 enterprise clients, establishing best practices and mentoring junior developers.',  
    skills: ['React', 'Frontend Development', 'Web Development', 'TypeScript', 'UI Implementation'],
    companyUrl: 'https://www.evokecreative.co.uk/',
  },
  {
    id: 4,
    company: 'Trelleborg',
    role: 'Senior Full Stack Developer',
    period: '2019 - 2021',
    description:
      'Architected mission-critical internal systems and enterprise digital platforms for global engineering leader. Improved system performance and user adoption across organization with data-driven UX improvements.',  
    skills: ['JavaScript', 'Full Stack', 'Web Applications', 'Frontend', 'Database Design'],
    companyUrl: 'https://www.trelleborg.com/',
  },
  {
    id: 5,
    company: 'Sofology',
    role: 'E-Commerce UI/UX Specialist',
    period: '2018 - 2019',
    description:
      'Designed and implemented responsive e-commerce interfaces for premium furniture retailer. Optimized user experience driving improved conversion rates and customer satisfaction metrics.',  
    skills: ['Frontend Development', 'E-commerce', 'Responsive Design', 'React', 'CSS'],
    companyUrl: 'https://www.sofology.co.uk/',
  },
  {
    id: 6,
    company: 'FleetSolve',
    role: 'Senior Full Stack Developer',
    period: '2017 - 2018',
    description:
      'Engineered enterprise dashboard platforms and advanced reporting systems for fleet management software. Designed intuitive interfaces handling complex logistics data, improving operational efficiency for customers.',  
    skills: ['JavaScript', 'Frontend', 'Full Stack', 'Dashboard Development', 'Data Visualization'],
    companyUrl: 'https://www.fleetsolve.co.uk/',
  },
  {
    id: 7,
    company: 'N-Viron Solutions',
    role: 'UI/UX Developer',
    period: '2016 - 2017',
    description:
      'Designed and built sophisticated user interfaces for complex regulatory compliance platforms. Translated intricate compliance requirements into intuitive solutions for enterprise clients across regulated industries.',  
    skills: ['JavaScript', 'HTML/CSS', 'UI Development', 'Responsive Design', 'Frontend'],
    companyUrl: 'https://www.nviron.co.uk/',
  },
  {
    id: 8,
    company: 'Charles Stanley Financial Solutions',
    role: 'Frontend Developer',
    period: '2015 - 2016',
    description:
      'Built secure, responsive interfaces for investment platforms and client portals in highly regulated financial services environment. Established foundation in modern web development practices and enterprise security standards.',  
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
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-lg font-bold tracking-widest text-orange-500 uppercase">
              <i className="mr-2 fas fa-briefcase"></i>Professional Timeline
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-black md:text-5xl text-slate-900">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-600">
            15 years of proven expertise spanning game studios, fintech, enterprise software, and cutting-edge web technologies. 
            Demonstrated track record building scalable solutions, leading teams, and delivering high-impact user experiences. 
            Specialized in translating complex requirements into elegant, user-centric interfaces that drive business results.
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
                  className="overflow-hidden transition-all duration-300 bg-white border shadow-md cursor-pointer rounded-xl border-slate-200 hover:border-orange-400 hover:shadow-xl hover:-translate-y-1"
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
                            <p className="font-semibold text-orange-500">{exp.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
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
                    <div className="px-6 py-6 border-t border-slate-100 md:px-8 bg-linear-to-r from-orange-50 to-amber-50 animate-slide-up">
                      <p className="mb-6 leading-relaxed text-slate-700">{exp.description}</p>

                      {/* Skills */}
                      <div className="mb-6">
                        <p className="mb-3 text-sm font-bold tracking-wide uppercase text-slate-600">
                          Key Skills
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 text-sm font-medium text-orange-600 transition-colors bg-white border border-orange-200 rounded-full hover:bg-orange-50"
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
                          className="inline-flex items-center gap-2 font-semibold text-orange-500 transition-colors hover:text-orange-600"
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
        <div className="mt-16 text-center animate-scale-in">
          <p className="mb-6 text-slate-600">
            15 years of proven expertise in UI/UX and software development. Proven ability to architect scalable solutions, lead high-performing teams, and deliver measurable business impact across gaming, fintech, and enterprise sectors.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 font-bold text-white transition-all transform rounded-lg bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 hover:scale-105 hover:shadow-lg"
          >
            Let's Collaborate →
          </a>
        </div>
      </div>
    </section>
  );
}
