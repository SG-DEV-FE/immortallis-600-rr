'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Bokeh Dust Drift Background - matching hero */}
      <div
        data-aifx="particle-drift"
        data-aifx-colors="#f97316,#fbbf24,#0f766e"
        data-aifx-turbulence="0.23"
        data-aifx-glow="0.17"
        data-aifx-twinkle="0.29"
        data-aifx-mouse="0"
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* 404 Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        {/* Error Code */}
        <div className="mb-8 inline-block">
          <h1 
            className="text-9xl md:text-[12rem] lg:text-[14rem] font-black text-white leading-none" 
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4), 0 2px 10px rgba(0,0,0,0.3)' }}
          >
            404
          </h1>
        </div>

        <div className="w-32 h-1.5 bg-linear-to-r from-orange-400 to-amber-400 mx-auto mb-10 rounded-full shadow-lg"></div>

        {/* Main Message */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4), 0 2px 10px rgba(0,0,0,0.3)' }}>
          This is not the page
          <br />
          <span className="bg-linear-to-r from-orange-400 via-amber-300 to-orange-500 text-transparent bg-clip-text drop-shadow-2xl">
            you are looking for
          </span>
        </h2>

        <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          The page you're trying to reach doesn't exist. But don't worry, there's plenty more to explore in my portfolio.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform text-lg"
          >
            Back to Home
          </Link>
          <a
            href="/#projects"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform text-lg"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
}
