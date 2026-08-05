'use client';

export default function Personality() {
  return (
    <section id="personality" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Welcome Section */}
        <div className="max-w-5xl mx-auto mb-24 animate-fade-in">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
              About Me
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
          </div>

          {/* Profile Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center md:justify-start animate-slide-up">
              <a 
                href="https://www.linkedin.com/in/stephen-gault-688b9312a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
                
                {/* Image */}
                <img
                  src="https://res.cloudinary.com/stegault/image/upload/c_fill,h_240,w_240,g_face,f_auto,q_auto:eco/v1573569843/ste_crop_w5sjtm.webp"
                  alt="Stephen Gault"
                  className="relative rounded-2xl w-64 h-64 shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>

            {/* Text Content */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '150ms' }}>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">Welcome!</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm a passionate UI/UX Developer and Creative Technologist who loves building beautiful, 
                  functional digital experiences.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Warhammer 40K Enthusiast</h4>
                    <p className="text-slate-600">Spending countless hours painting Orks and Duardin. The lore, the models, the community—it's all incredible.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Gamer at Heart</h4>
                    <p className="text-slate-600">PlayStation aficionado with a BAFTA credit. Gaming shaped how I think about user experience and interactivity.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Motorcycle Enthusiast</h4>
                    <p className="text-slate-600">Two-wheel adventures and road trips. There's something about the open road that clears the mind.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Photography Junkie</h4>
                    <p className="text-slate-600">Capturing moments through a lens, from miniatures to motorcycles. Check my Instagram for the latest shots.</p>
                  </div>
                </div>
              </div>

              <p className="text-base text-slate-600 italic mt-8 pt-8 border-t border-slate-200">
                Dry wit, questionable dad jokes, and a genuine passion for creating digital experiences 
                that are both beautiful and intuitive.
              </p>
            </div>
          </div>
        </div>

        {/* Warhammer Section */}
        <div className="mt-32 animate-fade-in">
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Deep Dives
            </h3>
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </div>

          {/* Warhammer Card */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-slide-up">
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-pink-400 to-red-400 rounded-xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
                <img
                  src="https://res.cloudinary.com/stegault/image/upload/f_auto,h_400,w_400,c_fill,q_auto:eco/v1591012741/ntsh_frmtxf.png"
                  alt="Warhammer 40K Space Marine"
                  className="relative rounded-xl shadow-2xl max-w-sm object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div>
                <h4 className="text-3xl font-bold text-slate-900 mb-3">Warhammer 40K Addiction</h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A genuine passion for the Warhammer 40K universe. I spend countless hours painting intricate Ork and Duardin models, 
                  diving deep into the lore, and engaging with the amazing community. It's not just a hobby—it's a lifestyle.
                </p>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <span className="text-2xl">🎨</span>
                <div>
                  <p className="font-bold text-slate-900">Modeling & Painting</p>
                  <p className="text-slate-600 text-sm">Detailed brush work and army building</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gaming Card */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-slide-up" style={{ animationDelay: '150ms' }}>
            <div className="space-y-6">
              <div>
                <h4 className="text-3xl font-bold text-slate-900 mb-3">Gaming & Consoles</h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Gaming has shaped my entire career. From the Atari 2600 to PlayStation, I've been passionate about interactive experiences. 
                  I'm proud to have been credited on the BAFTA-winning game <span className="font-bold text-emerald-600">Tearaway</span> for PlayStation Vita.
                </p>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <span className="text-2xl">🎮</span>
                <div>
                  <p className="font-bold text-slate-900">BAFTA Credit</p>
                  <p className="text-slate-600 text-sm">Tearaway - PlayStation Vita</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-sky-400 to-cyan-400 rounded-xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm opacity-75">Platforms</p>
                      <p className="font-bold text-lg">PlayStation | PC</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Main Interest</p>
                      <p className="font-bold text-lg">Story-Driven Games</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Favorites</p>
                      <p className="font-bold text-lg">Final Fantasy | God of War | Elden Ring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Motorcycling Card */}
          <div className="grid md:grid-cols-2 gap-12 items-center animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 rounded-xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm opacity-75">Current Bike</p>
                      <p className="font-bold text-lg">Honda CBR 600 RR</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Dream Bike</p>
                      <p className="font-bold text-lg">BMW S1000RR</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Favorite Ride</p>
                      <p className="font-bold text-lg">Isle of Man TT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div>
                <h4 className="text-3xl font-bold text-slate-900 mb-3">Motorcycling Passion</h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Motorcycling is embedded in my DNA. Year-round commuting in all weather, including snow. 
                  The Isle of Man TT is my spiritual home, and I dream of owning a BMW S1000RR someday.
                </p>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <span className="text-2xl">🏍️</span>
                <div>
                  <p className="font-bold text-slate-900">Adventure Seeker</p>
                  <p className="text-slate-600 text-sm">Road trips and track days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Family Note */}
        <div className="mt-24 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 rounded-lg animate-fade-in">
          <p className="text-lg text-slate-700 italic">
            <span className="font-bold">Family First:</span> I'm also a proud husband and father of 3 amazing boys. 
            They're my biggest inspiration and the reason I strive to create experiences that matter.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center animate-slide-up" style={{ animationDelay: '450ms' }}>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Ready to Collaborate?</h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Whether you want to discuss tech, gaming, Warhammer, or motorcycles—let's chat!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Get In Touch
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
