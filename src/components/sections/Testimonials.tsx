'use client';

export default function Testimonials() {
  const testimonial = {
    id: 1,
    text: "Mr Gault has been an absolute asset to the new commercial team at D2i Systems. Over the past year Steve has been instrumental in helping me improving how interacts digitally with the event sector via several marketing channels. In addition to his day job on D2i's development team Steve has kindly helped on a huge project to build and launch D2i's new website whilst creating new stunning marketing collateral for our advertising: online advert design, social media advert design, HTML campaign design, display print advert design and D2i's stand design for Event Tech Live 18! Furthermore, Steve has providing invaluable advice regarding the website development process which has helped us create a platform to be launched before the end of this year that will serve to inform the event market about D2i's USP's and generate vital sales leads for the business to generate revenue...no small achievement. Steve's attitude is fantastic and his input has really helped D2i punch above its weight this year. Thank you Steve.",
    author: 'Matt Wilson',
    role: 'CRO at Sitka | Chair: AEV Cross-Association Technology & ESSA Sales Working Groups | Event Tech GTM Strategist',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Matt',
    company: 'D2i Systems',
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-orange-500 text-lg font-bold uppercase tracking-widest mb-4 inline-block">
            <i className="fas fa-quote-left mr-2"></i>Testimonial
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            What Others Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real feedback from industry leaders who've experienced the work firsthand.
          </p>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-10 md:p-12 border border-slate-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonial.rating }).map((_, j) => (
                <i key={j} className="fas fa-star text-amber-400"></i>
              ))}
            </div>

            {/* Quote */}
            <p className="text-slate-700 font-medium mb-8 leading-relaxed text-lg">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="border-t border-slate-300 pt-6 flex items-center gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full border-2 border-orange-400 shadow-md"
                />
              </div>
              
              {/* Author Info */}
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-slate-900 text-lg">{testimonial.author}</p>
                  <span className="text-orange-500">
                    <i className="fas fa-badge-check"></i>
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">{testimonial.role}</p>
                <p className="text-xs text-orange-500 font-semibold mt-2">{testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
        </div>
      </div>
    </section>
  );
}
