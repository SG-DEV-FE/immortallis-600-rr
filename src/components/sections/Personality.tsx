'use client';

export default function Personality() {
  return (
    <section id="personality" className="relative py-32 overflow-hidden bg-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 bg-blue-100 rounded-full right-1/4 w-96 h-96 blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 rounded-full left-1/4 w-96 h-96 bg-cyan-100 blur-3xl opacity-20"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Welcome Section */}
        <div className="max-w-5xl mx-auto mb-24 animate-fade-in">
          {/* Header */}
          <div className="mb-16">
            <h2 className="mb-6 text-5xl font-black tracking-tight md:text-6xl lg:text-7xl text-slate-900">
              About Me
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
          </div>

          {/* Profile Card */}
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            {/* Image */}
            <div className="flex justify-center md:justify-start animate-slide-up">
              <a 
                href="https://www.linkedin.com/in/stephen-gault-688b9312a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute transition-all duration-500 -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl"></div>
                
                {/* Image */}
                <img
                  src="https://res.cloudinary.com/stegault/image/upload/c_fill,h_240,w_240,g_face,f_auto,q_auto:eco/v1573569843/ste_crop_w5sjtm.webp"
                  alt="Stephen Gault"
                  className="relative object-cover w-64 h-64 transition-transform duration-500 shadow-2xl rounded-2xl group-hover:scale-105"
                />
              </a>
            </div>

            {/* Text Content */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '150ms' }}>
              <div>
                <h3 className="mb-3 text-3xl font-bold text-slate-900">Welcome!</h3>
                <p className="text-lg leading-relaxed text-slate-600">
                  I'm a passionate UI/UX Developer and Creative Technologist who loves building beautiful, 
                  functional digital experiences.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 rounded-full bg-linear-to-b from-blue-600 to-cyan-500 shrink-0"></div>
                  <div>
                    <h4 className="mb-2 font-bold text-slate-900">Warhammer Miniature builder and painter</h4>
                    <p className="text-slate-600">My main is the Dark Angels, but I have a wide range of miniatures, including some Gundam and Airfix.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 rounded-full bg-linear-to-b from-blue-600 to-cyan-500 shrink-0"></div>
                  <div>
                    <h4 className="mb-2 font-bold text-slate-900">Gamer at Heart</h4>
                    <p className="text-slate-600">PlayStation aficionado with a BAFTA credit via Tearaway as QA. Gaming shaped how I think about user experience and interactivity.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 rounded-full bg-linear-to-b from-blue-600 to-cyan-500 shrink-0"></div>
                  <div>
                    <h4 className="mb-2 font-bold text-slate-900">Motorcycle Enthusiast</h4>
                    <p className="text-slate-600">Two-wheel adventures and road trips. There's something about the open road that clears the mind.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 rounded-full bg-linear-to-b from-blue-600 to-cyan-500 shrink-0"></div>
                  <div>
                    <h4 className="mb-2 font-bold text-slate-900">Photography</h4>
                    <p className="text-slate-600">Mostly from miniatures and just what I see on my wanderings. Check my Instagram for the latest shots.</p>
                  </div>
                </div>
              </div>

              <p className="pt-8 mt-8 text-base italic border-t text-slate-600 border-slate-200">
                Dry wit, questionable dad jokes, and a ungodly level of sci fi knowledge.
                that are both beautiful and intuitive.
              </p>
            </div>
          </div>
        </div>

        {/* Warhammer Section */}
        <div className="mt-32 animate-fade-in">
          <div className="mb-12">
            <h3 className="mb-4 text-4xl font-bold md:text-5xl text-slate-900">
              Deep Dives
            </h3>
            <div className="w-16 h-1.5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </div>

          {/* Warhammer Card */}
          <div className="grid items-center gap-12 mb-20 md:grid-cols-2 animate-slide-up">
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative group">
                <div className="absolute transition-all duration-500 -inset-1 bg-linear-to-br from-orange-400 via-pink-400 to-red-400 rounded-xl opacity-20 group-hover:opacity-40 blur-xl"></div>
                <img
                  src="https://res.cloudinary.com/stegault/image/upload/f_auto,h_400,w_400,c_fill,q_auto:eco/v1591012741/ntsh_frmtxf.png"
                  alt="Warhammer 40K Space Marine"
                  className="relative object-cover max-w-sm transition-transform duration-500 shadow-2xl rounded-xl group-hover:scale-105"
                />
              </div>
            </div>

            <div className="order-1 space-y-6 md:order-2">
              <div>
                <h4 className="mb-3 text-3xl font-bold text-slate-900">Miniatures Collector</h4>
                <p className="text-lg leading-relaxed text-slate-600">
                  A hoarder of the grey tide.... i.e. my shameful grey pile oof unpaineted miniature over the last 30 years. I have cultivated a passion for converting and just buiuling warhammer minatures, gundam, airfix and soo resin miniatures.
                </p>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50">
                <span className="text-2xl">🎨</span>
                <div>
                  <p className="font-bold text-slate-900">Modeling & Painting</p>
                  <p className="text-sm text-slate-600">Detailed brush work and army building</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gaming Card */}
          <div className="grid items-center gap-12 mb-20 md:grid-cols-2 animate-slide-up" style={{ animationDelay: '150ms' }}>
            <div className="space-y-6">
              <div>
                <h4 className="mb-3 text-3xl font-bold text-slate-900">Gaming & Consoles</h4>
                <p className="text-lg leading-relaxed text-slate-600">
                  Gaming has driven my passion for UI and UX. From the Atari 2600 to PlayStation 5, I've been passionate about interactive experiences. 
                  I'm proud to have been credited on the BAFTA-winning game <span className="font-bold text-emerald-600">Tearaway</span> for PlayStation Vita. Also on the credits for Ratchet & Clank: Full Frontal Assault and Killzone HD
                </p>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50">
                <span className="text-2xl">🎮</span>
                <div>
                  <p className="font-bold text-slate-900">BAFTA Credit</p>
                  <p className="text-sm text-slate-600">Tearaway - PlayStation Vita</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute transition-all duration-500 -inset-1 bg-linear-to-br from-blue-400 via-sky-400 to-cyan-400 rounded-xl opacity-20 group-hover:opacity-40 blur-xl"></div>
                <div className="relative p-8 text-white transition-all duration-500 shadow-2xl bg-linear-to-br from-slate-900 to-slate-800 rounded-xl group-hover:shadow-cyan-500/50">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm opacity-75">Platforms</p>
                      <p className="text-lg font-bold">PlayStation | PC</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Main Interest</p>
                      <p className="text-lg font-bold">Story-Driven Games</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Favorites</p>
                      <p className="text-lg font-bold">Final Fantasy | God of War | Assassins Creed | Horizon Zero Dawn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Motorcycling Card */}
          <div className="grid items-center gap-12 md:grid-cols-2 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative group">
                <div className="absolute transition-all duration-500 -inset-1 bg-linear-to-br from-red-400 via-orange-400 to-yellow-400 rounded-xl opacity-20 group-hover:opacity-40 blur-xl"></div>
                <div className="relative p-8 text-white transition-all duration-500 shadow-2xl bg-linear-to-br from-slate-900 to-slate-800 rounded-xl group-hover:shadow-orange-500/50">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm opacity-75">Current Bike</p>
                      <p className="text-lg font-bold">Suzuki GSX-R1000 L2</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Dream Bike</p>
                      <p className="text-lg font-bold">BMW S1000RR</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Favorite Ride</p>
                      <p className="text-lg font-bold">Isle of Man TT in off season</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 space-y-6 md:order-2">
              <div>
                <h4 className="mb-3 text-3xl font-bold text-slate-900">Motorcycling Passion</h4>
                <p className="text-lg leading-relaxed text-slate-600">
                  Motorcycling is embedded in my DNA my family have come from the Isle of Man and my in laws live there. Year-round commuting in all weather, including snow over 20 years molded a passion. 
                  The Isle of Man is my spiritual home, and I dream of owning a BMW S1000RR someday to blast around the island legally of course.
                </p>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50">
                <span className="text-2xl">🏍️</span>
                <div>
                  <p className="font-bold text-slate-900">Adventure Seeker</p>
                  <p className="text-sm text-slate-600">Road trips and adventures into the unknown</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Family Note */}
        <div className="p-8 mt-24 border-l-4 border-blue-600 rounded-lg bg-linear-to-r from-blue-50 to-cyan-50 animate-fade-in">
          <p className="text-lg italic text-slate-700">
            <span className="font-bold">Family First:</span> I'm also a proud husband and father of 3 amazing boys. 
            They're my biggest inspiration and the reason I strive to create experiences that matter.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center animate-slide-up" style={{ animationDelay: '450ms' }}>
          <h3 className="mb-6 text-4xl font-bold text-slate-900">Ready to Collaborate?</h3>
          <p className="max-w-5xl mx-auto mb-8 text-xl text-slate-600">
            Whether you want to discuss tech, gaming, Warhammer, or motorcycles — let's chat!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-2xl hover:scale-105 group"
          >
            Get In Touch
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
