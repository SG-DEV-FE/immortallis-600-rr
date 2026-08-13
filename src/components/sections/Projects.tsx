'use client';

import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  link?: string;
  color: string;
  year: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'My Gaming Library',
    description: 'Personal gaming collection management and social sharing platform',
    longDescription: 'A full-stack web application built to catalog and manage gaming collections across multiple platforms. Features include wishlist tracking, collection organization, social sharing capabilities, and friends integration. Built with modern React and database architecture.',
    category: 'Personal Project',
    tags: ['React', 'Full Stack', 'Database', 'Social'],
    image: 'https://res.cloudinary.com/stegault/image/upload/f_auto,q_auto:eco/v1234567890/gaming-library.jpg',
    link: 'https://mygaminglibrary.com/',
    color: 'from-purple-500 to-pink-500',
    year: '2023 - Present',
  },
  {
    id: '2',
    title: 'Tearaway - PlayStation Vita QA',
    description: 'QA testing and quality assurance for BAFTA Award-winning game',
    longDescription: 'Contributed quality assurance testing for Tearaway, a critically-acclaimed PlayStation Vita game that won BAFTA Awards. Worked on game testing, bug identification, and validation of gameplay mechanics across multiple platforms.',
    category: 'Gaming',
    tags: ['QA Testing', 'Game Testing', 'PlayStation', 'Award-Winning'],
    image: 'https://res.cloudinary.com/stegault/image/upload/f_auto,q_auto:eco/v1234567890/tearaway-ui.jpg',
    link: 'https://tearaway.me/',
    color: 'from-blue-500 to-cyan-500',
    year: '2013',
  },
  {
    id: '3',
    title: 'Freelance Creative Development',
    description: 'Custom web solutions for gaming, e-commerce, and creative clients',
    longDescription: 'Extensive freelance work delivering pixel-perfect designs with smooth animations and advanced CSS interactions. Specialized in React and Vue.js implementations for diverse client needs, from small startups to established brands. Known for attention to detail and performance optimization.',
    category: 'Freelance',
    tags: ['React', 'Vue.js', 'CSS', 'Web Design', 'Animation'],
    image: 'https://res.cloudinary.com/stegault/image/upload/f_auto,q_auto:eco/v1234567890/freelance-work.jpg',
    link: '#career',
    color: 'from-emerald-500 to-teal-500',
    year: '2018 - 2020',
  },
  {
    id: '4',
    title: 'Sg Dev FE - Founder & UI/UX Developer',
    description: 'Building innovative digital experiences and creative solutions',
    longDescription: 'Founded and lead Sg Dev FE, specializing in modern web technologies and user-centric development. Focus areas include Next.js applications, TypeScript architecture, Tailwind CSS design systems, and full-stack web development. Combining design thinking with technical expertise.',
    category: 'Founder',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Full Stack', 'Leadership'],
    image: 'https://res.cloudinary.com/stegault/image/upload/c_scale,h_400,w_400,f_auto,q_auto:eco/v1561378466/brandicon_xzpby6.png',
    link: 'https://github.com/sg-dev-fe',
    color: 'from-green-500 to-emerald-500',
    year: '2020 - Present',
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-24 animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            A selection of projects where I've applied design thinking and development expertise 
            to solve real-world problems and create meaningful user experiences.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-8"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group animate-slide-up"
              style={{ animationDelay: `${idx * 150}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container */}
              <div className="relative h-96 rounded-2xl overflow-hidden bg-slate-100 cursor-pointer transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                
                {/* Image Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between transform transition-transform duration-500 group-hover:translate-y-0">
                  {/* Top Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Bottom Section - Description (animated in on hover) */}
                  <div className="space-y-4">
                    <p className={`text-base text-white/90 leading-relaxed transition-all duration-500 transform ${
                      hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {project.longDescription}
                    </p>
                    
                    <div className={`text-sm text-white/70 font-medium transition-all duration-500 transform ${
                      hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {project.year}
                    </div>
                    
                    {/* Tags */}
                    <div className={`flex flex-wrap gap-2 transition-all duration-500 transform ${
                      hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-white/20 text-white rounded-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className={`transition-all duration-500 transform ${
                      hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <a 
                        href={project.link || '#'}
                        className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all duration-300"
                        {...(project.link?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {project.link?.startsWith('http') ? 'Visit Project' : 'View Case Study'}
                        <span className="text-xl">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Number (bottom right) */}
              <div className="mt-4 flex justify-between items-center">
                <div className="text-6xl font-black text-slate-200 group-hover:text-blue-500 transition-colors duration-500">
                  0{idx + 1}
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600 font-medium">Featured Project</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 pt-16 border-t border-slate-200 animate-slide-up" style={{ animationDelay: '450ms' }}>
          <p className="text-slate-600 text-lg mb-6">
            Interested in working together or seeing more of my work?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-slate-900 hover:shadow-2xl transition-all duration-300 group"
          >
            Let's Talk
            <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
