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
      'Building innovative digital experiences and creative solutions. Specializing in modern web technologies, responsive design, and user-centric development.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX Design', 'Full Stack'],
    logo: 'https://res.cloudinary.com/stegault/image/upload/c_scale,h_60,w_60,f_auto,q_auto:eco/v1561378466/brandicon_xzpby6.png',
    companyUrl: 'https://github.com/sg-dev-fe',
  },
  {
    id: 2,
    company: 'Freelance Creative Developer',
    role: 'UI/UX Engineer & Designer',
    period: '2018 - 2020',
    description:
      'Worked with diverse clients across gaming, e-commerce, and creative industries. Delivered pixel-perfect designs with smooth animations and interactions. BAFTA credit for Tearaway (PlayStation Vita).',
    skills: ['React', 'Vue.js', 'CSS Animations', 'Web Design', 'Game UI', 'Prototyping'],
    companyUrl: 'https://www.linkedin.com/in/stephen-gault-688b9312a/',
  },
  {
    id: 3,
    company: 'Various Tech Companies',
    role: 'Front-end Developer & Designer',
    period: '2015 - 2018',
    description:
      'Worked in fast-paced tech environments building user-facing features. Experience with MVC frameworks, component design systems, and cross-browser compatibility.',
    skills: ['JavaScript', 'HTML/CSS', 'jQuery', 'Bootstrap', 'Git', 'Agile'],
    companyUrl: 'https://www.linkedin.com/in/stephen-gault-688b9312a/',
  },
];

export default function Career() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="career" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-orange-500 text-lg font-bold uppercase tracking-widest">
              <i className="fas fa-briefcase mr-2"></i>Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-600">
            A blend of creative design thinking, technical expertise, and passion for building 
            experiences that matter. Each role shaped my approach to solving complex problems with elegance and humor.
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
            Want to know more about my experience or discuss a project?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
