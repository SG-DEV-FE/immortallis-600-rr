'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-700 to-emerald-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-emerald-500 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
              <img
                src="https://res.cloudinary.com/stegault/image/upload/c_scale,h_400,w_400,f_auto,q_auto:eco/v1561378466/brandicon_xzpby6.png"
                alt="Profile"
                className="relative rounded-lg w-full hover-scale"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Welcome to my digital space. I'm passionate about photography, miniatures, and 
              technology. This is where I share my journey and creative endeavors.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg hover-lift">
                <div className="text-2xl text-orange-500 flex-shrink-0">
                  <i className="fas fa-camera"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Photography</h3>
                  <p className="text-slate-600 text-sm">Capturing moments through the lens</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg hover-lift">
                <div className="text-2xl text-sky-500 flex-shrink-0">
                  <i className="fas fa-cube"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Miniatures</h3>
                  <p className="text-slate-600 text-sm">Crafting detailed tiny worlds</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg hover-lift">
                <div className="text-2xl text-emerald-500 flex-shrink-0">
                  <i className="fas fa-motorcycle"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Technology</h3>
                  <p className="text-slate-600 text-sm">Building amazing digital experiences</p>
                </div>
              </div>
            </div>

            <a
              href="#gallery"
              className="inline-block bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover-lift transition-smooth"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
