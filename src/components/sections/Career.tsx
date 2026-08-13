'use client';

import { useState } from 'react';
import careerData from '@/lib/careerData.json';

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

const experiences: Experience[] = careerData as Experience[];

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
          <div className="space-y-8 relative">
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
                              className="w-14 h-14 rounded-lg object-cover shadow-md"
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
                          <i className="fas fa-calendar text-orange-400"></i>
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
