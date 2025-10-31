'use client';
import React, { useRef, useEffect, useState } from 'react';

// Carousel video sources and their captions (replace with your real mp4 paths)
const HERO_VIDEOS = [
  {
    src: '/videos/nkfv1.mp4',
    alt: 'Uplifting moments at food distribution',
    caption: 'Empowering Women, Supporting Families',
    accent: 'pink',
  },
  {
    src: '/videos/nkfv.mp4',
    alt: 'Volunteers giving groceries to single mothers',
    caption: 'Bringing Hope to Survivors',
    accent: 'teal',
  },
  {
    src: '/videos/nkfv2.mp4',
    alt: 'Kids receiving community support',
    caption: 'The Secret of Living is Giving',
    accent: 'pink',
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent(prev => (prev + 1) % HERO_VIDEOS.length);
    }, 2000); // 2 seconds per slide
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <section className="relative w-full h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden">
      {/* Videos - Only one is visible at a time */}
      {HERO_VIDEOS.map((vid, idx) => (
        <video
          key={vid.src}
          autoPlay
          muted
          loop
          playsInline
          aria-label={vid.alt}
          poster="/fallback-image.jpg"
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={vid.src} type="video/mp4" />
        </video>
      ))}

      {/* Subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-black/35 z-10" />

      {/* Minimalist Overlay Content */}
      <div className="relative z-20 max-w-2xl mx-auto text-center">
        <h1 className={`inline-block font-bold text-white text-2xl md:text-4xl rounded-xl px-7 py-3 shadow-xl
          ${HERO_VIDEOS[current].accent === 'pink' ?
            'border-b-8 border-pink-600' : 'border-b-8 border-teal-600'}
        `}
        >
          {HERO_VIDEOS[current].caption}
        </h1>
        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {HERO_VIDEOS.map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300
                ${current === idx
                  ? HERO_VIDEOS[current].accent === 'pink'
                    ? 'bg-pink-600border-pink-700'
                    : 'bg-teal-600border-teal-700'
                  : 'bg-white/60 border-white'}
              `}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
