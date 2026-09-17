'use client';

import {
  Code2,
  Palette,
  Zap,
  Wand2,
  Wrench,
  Star,
  Smartphone,
  Sparkles,
  Users,
  Brush,
  Mouse,
  Gamepad2,
  Feather,
  Cloud,
  Rocket,
  Award,
  GitBranch,
  Layers,
  Cpu,
} from 'lucide-react';

interface IconMapType {
  [key: string]: React.ComponentType<{ size?: number; className?: string }>;
}

const iconMap: IconMapType = {
  'code': Code2,
  'palette': Palette,
  'bolt': Zap,
  'wand-magic': Wand2,
  'wrench': Wrench,
  'star': Star,
  'figma': Layers,
  'mobile': Smartphone,
  'wand-magic-sparkles': Sparkles,
  'universal-access': Users,
  'paintbrush': Brush,
  'computer-mouse': Mouse,
  'joystick': Gamepad2,
  'feather': Feather,
  'github': GitBranch,
  'cloud': Cloud,
  'rocket': Rocket,
  'certificate': Award,
  'react': Cpu,
};

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

const IconComponent = ({ iconKey, size = 24, className = '' }: { iconKey: string; size?: number; className?: string }) => {
  const Icon = iconMap[iconKey];
  return Icon ? <Icon size={size} className={className} /> : null;
};

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Development',
      icon: 'code',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React & Next.js', icon: 'react' },
        { name: 'Vue3', icon: 'palette' },
        { name: 'Tailwind CSS', icon: 'palette' },
        { name: 'Web Performance', icon: 'bolt' },
      ],
    },
    {
      category: 'UI/UX Design',
      icon: 'palette',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma', icon: 'figma' },
        { name: 'Responsive Design', icon: 'mobile' },
        { name: 'Animations', icon: 'wand-magic-sparkles' },
        { name: 'Accessibility', icon: 'universal-access' },
      ],
    },
    {
      category: 'Creative Development',
      icon: 'wand-magic',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Creative Coding', icon: 'paintbrush' },
        { name: 'Micro-interactions', icon: 'computer-mouse' },
        { name: 'Gamerfied UI', icon: 'joystick' },
        { name: 'Storytelling', icon: 'feather' },
      ],
    },
    {
      category: 'Tools & Workflow',
      icon: 'wrench',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Git & GitHub', icon: 'github' },
        { name: 'Azure', icon: 'cloud' },
        { name: 'Netlify', icon: 'rocket' },
        { name: 'Web Standards', icon: 'certificate' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in">
          <span className="inline-block mb-4 text-lg font-bold tracking-widest text-orange-500 uppercase">
            <Star size={20} className="mr-2 inline-block" />Skills & Expertise
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
                className={`w-16 h-16 rounded-lg bg-linear-to-r ${cat.color} flex items-center justify-center mb-4 text-white text-2xl transform group-hover:scale-110 transition-transform`}
              >
                <IconComponent iconKey={cat.icon} size={28} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-bold text-slate-900">{cat.category}</h3>

              {/* Skills */}
              <ul className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-2 text-slate-600 transition-all hover:translate-x-1 hover:text-orange-500">
                    <div className="w-6 h-6 rounded-full bg-linear-to-r from-orange-400 to-amber-400 flex items-center justify-center text-white text-xs">
                      <IconComponent iconKey={skill.icon} size={14} className="text-white" />
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
