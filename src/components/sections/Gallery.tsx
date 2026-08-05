'use client';

import { INSTAGRAM_ID } from '@/lib/constants';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
        </div>

        <div className="animate-fade-in">
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Here is a gallery of my recent Instagram posts, featuring mainly photography and 
            miniatures with the occasional motorcycle photography. You can find me on Instagram 
            as <a 
              href={`https://instagram.com/${INSTAGRAM_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-instagram hover:underline font-semibold"
            >
              @{INSTAGRAM_ID}
            </a>
          </p>

          {/* Instagram Embed */}
          <div className="rounded-lg overflow-hidden shadow-lg hover-lift">
            <iframe
              src={`https://snapwidget.com/embed/886590`}
              className="w-full border-0"
              style={{ height: '1400px' }}
              title="Instagram Feed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
