'use client';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: 'fa-code',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Web Performance'],
    },
    {
      category: 'UI/UX Design',
      icon: 'fa-palette',
      color: 'from-purple-500 to-pink-500',
      skills: ['Figma', 'Responsive Design', 'Animations', 'Accessibility'],
    },
    {
      category: 'Creative Development',
      icon: 'fa-sparkles',
      color: 'from-orange-500 to-red-500',
      skills: ['Creative Coding', 'Micro-interactions', 'Game UI', 'Storytelling'],
    },
    {
      category: 'Tools & Workflow',
      icon: 'fa-wrench',
      color: 'from-green-500 to-emerald-500',
      skills: ['Git & GitHub', 'Vercel Deploy', 'Netlify', 'Web Standards'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-orange-500 text-lg font-bold uppercase tracking-widest mb-4 inline-block">
            <i className="fas fa-star mr-2"></i>Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            What I Do Best
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A specialized blend of technical skills and creative vision, combining code elegance 
            with design thinking.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-8 border border-slate-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-lg bg-gradient-to-r ${cat.color} flex items-center justify-center mb-4 text-white text-2xl transform group-hover:scale-110 transition-transform`}
              >
                <i className={`fas ${cat.icon}`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">{cat.category}</h3>

              {/* Skills */}
              <ul className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <p className="text-slate-600 mb-6 text-lg">
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
}
