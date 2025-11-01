// // components/CharityGallery.js
// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';

// const CharityGallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentPosition, setCurrentPosition] = useState(0);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);

//   // Array of your charity images
//   const charityImages = [
//     '/images/nkf7.jpg',
//     '/images/nkf8.jpg',
//     '/images/nkf9.jpg',
//     '/images/nkf10.jpg',
//     '/images/nkf11.jpg',
//     '/images/nkf12.jpg',
//     '/images/nkf13.jpg',
//     '/images/nkf14.jpg',
//     '/images/nkf15.jpg',
//     '/images/nkf16.jpg',
//     '/images/nkf17.jpg',
//     '/images/nkf18.jpg',
//     '/images/nkf19.jpg',
//     '/images/nkf20.jpg',
//     '/images/nkf21.jpg',
//     '/images/nkf22.jpg',
//     '/images/nkf23.jpg',
//     '/images/nkf24.jpg',
//     '/images/nkf25.jpg',
//     '/images/nkf26.jpg',



//   ];

//   useEffect(() => {
//     const startAnimation = () => {
//       const animate = () => {
//         setCurrentPosition(prev => {
//           const newPosition = prev - 1;
//           // Reset position when all images have passed
//           if (Math.abs(newPosition) >= (charityImages.length * 300)) {
//             return 0;
//           }
//           return newPosition;
//         });
//         animationRef.current = requestAnimationFrame(animate);
//       };
      
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     startAnimation();

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [charityImages.length]);

//   const openModal = (index) => {
//     setSelectedImage(index);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   const goToNext = () => {
//     if (selectedImage !== null) {
//       setSelectedImage((selectedImage + 1) % charityImages.length);
//     }
//   };

//   const goToPrev = () => {
//     if (selectedImage !== null) {
//       setSelectedImage((selectedImage - 1 + charityImages.length) % charityImages.length);
//     }
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-pink-50 to-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 mb-6">
//             <div className="w-8 h-0.5 bg-pink-600"></div>
//             <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">Our Gallery</span>
//             <div className="w-8 h-0.5 bg-teal-600"></div>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Moments of
//             <span className="block">
//               <span className="text-pink-600">Hope</span>
//               <span className="text-teal-600"> & Compassion</span>
//             </span>
//           </h2>
          
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Witness the impact of our humanitarian work through these captured moments of transformation and community support
//           </p>
//         </div>

//         {/* Auto-Scrolling Gallery */}
//         <div className="relative">
//           <div 
//             ref={containerRef}
//             className="flex space-x-6 py-4"
//             style={{ 
//               transform: `translateX(${currentPosition}px)`,
//               transition: 'transform 0.1s linear'
//             }}
//           >
//             {/* Duplicate images for seamless looping */}
//             {[...charityImages, ...charityImages].map((image, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-80 group cursor-pointer transform transition-all duration-500 hover:scale-105"
//                 onClick={() => openModal(index % charityImages.length)}
//               >
//                 <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
//                   <div className="relative h-64 rounded-xl overflow-hidden mb-4">
//                     <Image
//                       src={image}
//                       alt={`Charity work image ${(index % charityImages.length) + 1}`}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
                    
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
//                       <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                         <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
//                           <svg
//                             className="w-6 h-6 text-white"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m0 0l3-3m-3 3L7 13"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Image Number Badge */}
//                     {/* <div className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
//                       {(index % charityImages.length) + 1}
//                     </div> */}
//                   </div>

//                   {/* Image Info */}
//                   <div className="text-center">
//                     {/* <h3 className="font-semibold text-gray-900 mb-2">
//                       Community Impact #{((index % charityImages.length) + 1)}
//                     </h3> */}
//                     {/* <p className="text-gray-600 text-sm">
//                       Making a difference through compassionate action
//                     </p> */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Gradient Overlays for Smooth Edges */}
//           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pink-50 to-transparent z-10"></div>
//           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
//         </div>

//         {/* Static Gallery Grid Below */}
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
//           {charityImages.slice(0, 6).map((image, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
//               onClick={() => openModal(index)}
//             >
//               <div className="relative h-64 rounded-xl overflow-hidden mb-4">
//                 <Image
//                   src={image}
//                   alt={`Charity work image ${index + 1}`}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <h4 className="font-bold">Click to View</h4>
//                 </div>
//               </div>
              
//               <div className="text-center">
//                 <h3 className="font-semibold text-gray-900 mb-2">
//                   Impact Story #{index + 1}
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Transforming lives through dedicated humanitarian work
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div> */}

//         {/* Modal for Image View */}
//         {selectedImage !== null && (
//           <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//             <div className="relative max-w-6xl max-h-full">
//               {/* Close Button */}
//               <button
//                 onClick={closeModal}
//                 className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors duration-200 z-10"
//               >
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>

//               {/* Navigation Buttons */}
//               <button
//                 onClick={goToPrev}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>

//               <button
//                 onClick={goToNext}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>

//               {/* Image */}
//               <div className="relative aspect-video bg-white/5 rounded-2xl overflow-hidden">
//                 <Image
//                   src={charityImages[selectedImage]}
//                   alt={`Charity work image ${selectedImage + 1}`}
//                   fill
//                   className="object-contain"
//                   sizes="90vw"
//                 />
//               </div>

//               {/* Image Counter */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
//                 {selectedImage + 1} / {charityImages.length}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Call to Action */}
//         {/* <div className="text-center mt-16">
//           <div className="bg-gradient-to-r from-pink-600 to-teal-600 rounded-2xl p-8 text-white">
//             <h3 className="text-2xl font-bold mb-4">Join Our Mission of Hope</h3>
//             <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
//               Be part of our journey to create more moments of transformation and hope in communities worldwide.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button 
//                 onClick={() => window.location.href = '/donate'}
//                 className="bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               >
//                 Support Our Work
//               </button>
//               <button 
//                 onClick={() => window.location.href = '/gallery'}
//                 className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
//               >
//                 View Full Gallery
//               </button>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default CharityGallery;


'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function GalleryPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const leftImages = [
    "https://static.wixstatic.com/media/2cef79_2fad904f941542a1a1e8a4f1858376c1~mv2.jpg/v1/fill/w_460,h_502,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1640_jpeg.jpg",
    "https://static.wixstatic.com/media/2cef79_d2388be260a74d45b0d19cb0425f0e9c~mv2.jpg/v1/fill/w_460,h_478,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1669_jpeg.jpg"
  ];

  const animatedImages = [
    "https://static.wixstatic.com/media/2cef79_d2388be260a74d45b0d19cb0425f0e9c~mv2.jpg/v1/fill/w_460,h_478,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1669_jpeg.jpg",
    "https://static.wixstatic.com/media/2cef79_1f8807a7ecff4134a9d6dccaf718548a~mv2.jpg/v1/fill/w_750,h_773,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2cef79_1f8807a7ecff4134a9d6dccaf718548a~mv2.jpg",
    "https://static.wixstatic.com/media/2cef79_1ab231ef25d14c798d010fff5b9f4f8a~mv2.jpg/v1/fill/w_750,h_773,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2cef79_1ab231ef25d14c798d010fff5b9f4f8a~mv2.jpg",
    "https://static.wixstatic.com/media/2cef79_1f22a2d5a4be46d2a4fb54038bbc4c77~mv2.jpg/v1/fill/w_750,h_773,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2cef79_1f22a2d5a4be46d2a4fb54038bbc4c77~mv2.jpg"
  ];

  const rightImages = [
    "https://static.wixstatic.com/media/70b38c_6bcbfc8b0abb4954a773576ff6c191ce~mv2.jpg/v1/fill/w_460,h_522,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/NKF-04252020%20event-%2011.jpg",
    "https://static.wixstatic.com/media/2cef79_eb3dd380b5b54511a957580e5956774f~mv2.jpg/v1/fill/w_460,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1641_jpeg.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === animatedImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [animatedImages.length]);

  return (
    <section className="w-full bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-8 lg:px-16"> {/* Added more horizontal padding */}
        <div className="text-center mb-16">
         
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-4 max-w-6xl mx-auto"> {/* Reduced max-width and increased gap */}
          
          {/* Left Column */}
          <div className="lg:w-1/4 flex flex-col gap-6">
            {leftImages.map((image, index) => (
              <div key={index} className="overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Left gallery ${index + 1}`}
                  width={280} 
                  height={280} 
                  className="w-full h-72 object-cover" 
                />
              </div>
            ))}
          </div>

          {/* Middle Column - Animated */}
          <div className="lg:w-2/4">
            <div className="overflow-hidden shadow-2xl h-[576px] relative"> {/* Reduced from h-[656px] to h-[576px] */}
              <Image
                src={animatedImages[currentImageIndex]}
                alt={`Sliding image ${currentImageIndex + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/4 flex flex-col gap-6">
            {rightImages.map((image, index) => (
              <div key={index} className="overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Right gallery ${index + 1}`}
                  width={280} 
                  height={280} 
                  className="w-full h-72 object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}