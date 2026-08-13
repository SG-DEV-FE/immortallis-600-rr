'use client';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: 'fa-code',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React & Next.js', icon: 'fa-react' },
        { name: 'Vue3', icon: 'fa-vuejs' },
        { name: 'Tailwind CSS', icon: 'fa-palette' },
        { name: 'Web Performance', icon: 'fa-bolt' },
      ],
    },
    {
      category: 'UI/UX Design',
      icon: 'fa-palette',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma', icon: 'fa-figma' },
        { name: 'Responsive Design', icon: 'fa-mobile' },
        { name: 'Animations', icon: 'fa-wand-magic-sparkles' },
        { name: 'Accessibility', icon: 'fa-universal-access' },
      ],
    },
    {
      category: 'Creative Development',
      icon: 'fa-wand-magic',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Creative Coding', icon: 'fa-paintbrush' },
        { name: 'Micro-interactions', icon: 'fa-computer-mouse' },
        { name: 'Gamified UI', icon: 'fa-joystick' },
        { name: 'Storytelling', icon: 'fa-feather' },
      ],
    },
    {
      category: 'Tools & Workflow',
      icon: 'fa-wrench',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Git & GitHub', icon: 'fa-github' },
        { name: 'Azure', icon: 'fa-cloud' },
        { name: 'Netlify', icon: 'fa-rocket' },
        { name: 'Web Standards', icon: 'fa-certificate' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in">
          <span className="inline-block mb-4 text-lg font-bold tracking-widest text-orange-500 uppercase">
            <i className="mr-2 fas fa-star"></i>Skills & Expertise
          </span>
          <h2 className="mb-6 text-4xl font-black md:text-5xl text-slate-900">
            What I Do Best
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">
            Fifteen years in the trenches taught me that solid architecture and thoughtful UX go hand in hand. 
            I build clean, scalable solutions that work as well as they look.
          </p>
        </div>

        {/* Grid */}
        <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4">
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
              <h3 className="mb-4 text-xl font-bold text-slate-900">{cat.category}</h3>

              {/* Skills */}
              <ul className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-2 text-slate-600 transition-all hover:translate-x-1 hover:text-orange-500">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center text-white text-xs">
                      <i className={`fas ${skill.icon} fa-xs`}></i>
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-scale-in">
          <p className="mb-6 text-lg text-slate-600">
            With 15 years of proven expertise in UI/UX design and frontend development, I deliver enterprise-grade solutions that drive measurable results. Let's build something exceptional.
          </p>
        </div>
      </div>
    </section>
  );
}
