'use client';

export default function Personality() {
  return (
    <section id="personality" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <a 
              href="https://www.linkedin.com/in/stephen-gault-688b9312a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:scale-110 transition-transform"
            >
              <img
                src="https://res.cloudinary.com/stegault/image/upload/c_fill,h_240,w_240,g_face,f_auto,q_auto:eco/v1573569843/ste_crop_w5sjtm.webp"
                alt="Stephen Gault"
                className="rounded-full w-56 h-56 mx-auto shadow-2xl border-4 border-orange-400 hover:shadow-orange-400/50 object-cover"
              />
            </a>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Welcome Ladies & Gents<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500">
              Orruks & Duardin
            </span>
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
              Cats & Dogs
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
            You get the picture. This is me <span className="text-orange-500 font-bold">(song's in your head now)</span>.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            I built this little old site to showcase my skills and generally show off some of my personality, 
            that as you have no doubt already surmised is on the <span className="font-bold text-teal-600">dry wit side</span>...
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed italic mb-8">
            Also it's a work in progress so it's rough around the edges, like all good personal projects are... ahem 😅
          </p>
        </div>

        {/* Call to scroll */}
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-xl text-slate-700 font-semibold mb-4">
            Call it an informal CV if you want.
          </p>
          <p className="text-lg text-slate-600">
            Now what... um... let's see... er... oh I know.<br/>
            <span className="font-bold text-orange-500">Scroll down a bit more →</span>
          </p>
        </div>

        {/* Personality Block */}
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-l-4 border-orange-500 rounded-lg p-8 mb-16 shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
          <p className="text-xl text-slate-800 font-bold mb-2">
            <i className="fas fa-user text-orange-500 mr-3"></i>Personality (or lack of)
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-pink-500"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Warhammer Image */}
          <div className="flex justify-center md:order-2 animate-fade-in delay-1">
            <img
              src="https://res.cloudinary.com/stegault/image/upload/f_auto,h_400,w_400,c_fill,q_auto:eco/v1591012741/ntsh_frmtxf.png"
              alt="Dark Angels Space Marine"
              className="rounded-xl shadow-2xl hover:shadow-orange-400/50 transition-shadow max-w-sm"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-slide-up delay-2 md:order-1">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 text-orange-600">
                <i className="fas fa-ring mr-2"></i>Warhammer 40K Addiction
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Now those of you viewing this on a mobile phone before using a tablet or PC... nice phone. 
                If you're viewing this on a PC/desktop/laptop then you can probably see the mahoosive <span className="italic font-semibold">(yes, it's a word)</span> Space Marine. 
                I believe it's what's referred to as declaring if you have any addictions... Yes I do. It's called <span className="font-bold text-emerald-600">Warhammer 40K</span>.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 text-sky-600">
                <i className="fas fa-gamepad mr-2"></i>Gaming & Consoles
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Seriously, it's my main hobby apart from Gaming <i className="fab fa-playstation text-ps-blue"></i> and <i className="fas fa-desktop text-sky-600"></i> 
                {' '}<span className="text-sm">(look at those pretty icons)</span>. 
                Gaming is a big part of who I am. I've been gaming since the Atari 2600 days (Centipede was my go-to game). 
                Now it's mostly PlayStation 4 or my PC. 
              </p>
              <p className="text-slate-700 leading-relaxed mt-3 font-semibold text-emerald-600">
                Awesome gaming fact: I've been credited on the BAFTA-winning game <span className="underline">Tearaway</span> for PlayStation Vita!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 text-red-600">
                <i className="fas fa-motorcycle mr-2"></i>Motorcycling
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Motorcycling is a big part of my life. I used to commute all year round on a Honda CBR 600 RR (Repsol paint). 
                All weather—yes, even snow <span className="font-bold">(which even I admit can be pushing my luck)</span>. 
                I love the TT in the Isle of Man and wish I could go there more often as it feels like home away from home. 
                Hoping to eventually own a BMW S1000RR.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-sky-500 p-4 rounded">
              <p className="text-slate-700 italic">
                I was going to mention my family of 3 boys and the wife, but not fair to place them here, so we'll skip that for now. 😊
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg p-8 text-center text-white shadow-2xl animate-scale-in">
          <h3 className="text-3xl font-bold mb-4">
            Want to Get in Touch?
          </h3>
          <p className="text-lg mb-6 opacity-95">
            Got a project in mind or just want to chat? I'm always up for a conversation about tech, gaming, or motorcycles!
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Send me a Message →
          </a>
        </div>
      </div>
    </section>
  );
}
