'use client';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Stephen's work transformed our user interface and increased engagement by 40%. His attention to detail and creative problem-solving is exceptional.",
      author: 'Project Lead, Tech Startup',
      role: 'UI/UX Project',
      rating: 5,
    },
    {
      id: 2,
      text: "A true creative developer who understands both aesthetics and functionality. Delivered smooth animations and pixel-perfect designs on every project.",
      author: 'Creative Director',
      role: 'Design Collaboration',
      rating: 5,
    },
    {
      id: 3,
      text: "Professional, reliable, and incredibly talented. Stephen brought dry wit and technical excellence to our team. Highly recommend!",
      author: 'Team Manager',
      role: 'Development Team',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-orange-500 text-lg font-bold uppercase tracking-widest mb-4 inline-block">
            <i className="fas fa-quote-left mr-2"></i>Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            What Others Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Feedback from collaborators and clients who've experienced the work firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <i key={j} className="fas fa-star text-amber-400"></i>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 font-medium mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-300 pt-4">
                <p className="font-bold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
          <i className="fas fa-heart text-orange-400 text-2xl"></i>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
        </div>
      </div>
    </section>
  );
}
