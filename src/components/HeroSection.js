// 'use client';
// import React, { useRef, useEffect, useState } from 'react';

// // Carousel video sources and their captions (replace with your real mp4 paths)
// const HERO_VIDEOS = [
//   {
//     src: '/videos/nkfv1.mp4',
//     alt: 'Uplifting moments at food distribution',
//     caption: 'Empowering Women, Supporting Families',
//     accent: 'pink',
//   },
//   {
//     src: '/videos/nkfv.mp4',
//     alt: 'Volunteers giving groceries to single mothers',
//     caption: 'Bringing Hope to Survivors',
//     accent: 'teal',
//   },
//   {
//     src: '/videos/nkfv2.mp4',
//     alt: 'Kids receiving community support',
//     caption: 'The Secret of Living is Giving',
//     accent: 'pink',
//   }
// ];

// export default function HeroCarousel() {
//   const [current, setCurrent] = useState(0);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     timeoutRef.current = setTimeout(() => {
//       setCurrent(prev => (prev + 1) % HERO_VIDEOS.length);
//     }, 2000); // 2 seconds per slide
//     return () => clearTimeout(timeoutRef.current);
//   }, [current]);

//   return (
//     <section className="relative w-full h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden">
//       {/* Videos - Only one is visible at a time */}
//       {HERO_VIDEOS.map((vid, idx) => (
//         <video
//           key={vid.src}
//           autoPlay
//           muted
//           loop
//           playsInline
//           aria-label={vid.alt}
//           poster="/fallback-image.jpg"
//           className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
//         >
//           <source src={vid.src} type="video/mp4" />
//         </video>
//       ))}

//       {/* Subtle dark overlay for readability */}
//       <div className="absolute inset-0 bg-black/35 z-10" />

//       {/* Minimalist Overlay Content */}
//       <div className="relative z-20 max-w-2xl mx-auto text-center">
//         <h1 className={`inline-block font-bold text-white text-2xl md:text-4xl rounded-xl px-7 py-3 shadow-xl
//           ${HERO_VIDEOS[current].accent === 'pink' ?
//             'border-b-8 border-pink-600' : 'border-b-8 border-teal-600'}
//         `}
//         >
//           {HERO_VIDEOS[current].caption}
//         </h1>
//         {/* Navigation Dots */}
//         <div className="flex justify-center mt-8 gap-3">
//           {HERO_VIDEOS.map((_, idx) => (
//             <button
//               key={idx}
//               className={`w-4 h-4 rounded-full border-2 transition-all duration-300
//                 ${current === idx
//                   ? HERO_VIDEOS[current].accent === 'pink'
//                     ? 'bg-pink-600border-pink-700'
//                     : 'bg-teal-600border-teal-700'
//                   : 'bg-white/60 border-white'}
//               `}
//               aria-label={`Go to slide ${idx + 1}`}
//               onClick={() => setCurrent(idx)}
//               tabIndex={0}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//-------------



// components/HeroSection.jsx
'use client';

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative bg-black w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/videos/nkfw1.avif" type="video/avif" />
          <source src="/videos/nkfw1.webm" type="video/webm" />
          <source src="/videos/nkfw.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback image if video doesn't load */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
              <p>Loading...</p>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-teal-400">NKF</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Creating extraordinary experiences that inspire innovation and drive success
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25">
              Explore Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
      </div> */}

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-8 h-8 text-white opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
