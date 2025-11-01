// "use client";
// import React from 'react';

// // Define the core brand colors
// const COLORS = {
//   PINK: 'rgb(219, 39, 119)',
//   TEAL: 'rgb(13, 148, 136)',
//   PINK_LIGHT: 'rgb(253, 242, 248)',
//   TEAL_LIGHT: 'rgb(240, 253, 250)',
// };

// // --- Main Component ---

// export default function HomePage() {
//   // Professional stock image URLs for domestic violence support
//   const missionImage = "/images/nkfc3.png";
//   const heroImage = "/images/nkf40.jpg";
//   const groceriesImage = "/images/nkfc4.png";
//   const communityImage = "/images/nkfc5.png";
//   const counselingImage = "/images/nkfc6.png";

//   return (
//     <main className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      
//       {/* 1. Fixed Hero Section - Image Left, Text Right */}
//       <section
//   className="relative min-h-screen flex items-center justify-start bg-cover bg-center"
//   style={{
//     backgroundImage: `url(${heroImage})`,
//   }}
// >
//   {/* Gradient overlay - darker on left, transparent on right */}
//   <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>

//   {/* Content Section */}
//   <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24 lg:py-0">
//     <div className="max-w-2xl space-y-8">
//       {/* Badge */}
//       <div className="inline-block px-6 py-2 bg-white/80 border border-teal-600/20 rounded-full shadow-sm backdrop-blur-sm">
//         <span className="text-sm font-semibold text-teal-600 tracking-wider uppercase">
//           Newman Kahlon Foundation
//         </span>
//       </div>

//       {/* Heading */}
//       <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900">
//         Path to{' '}
//        <span className="relative font-extrabold text-gray-900">
//   <span className="bg-gray-900 bg-clip-text text-transparent">
//     Self Sufficiency
//   </span>
// </span>

//       </h1>

//       {/* Description */}
//       <p className="text-lg text-gray-950 leading-relaxed">
//         Providing immediate crisis relief and empowering survivors of domestic violence
//         to achieve lasting independence through compassion, resources, and opportunity.
//       </p>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row gap-5 pt-6">
//         <button
//           onClick={() => alert('Redirecting to Donation Page...')}
//           className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl shadow-lg hover:from-pink-700 hover:to-pink-800 transition-transform transform hover:scale-105"
//         >
//           Make a Donation
//         </button>

//         <button
//           onClick={() => alert('Redirecting to Volunteer Portal...')}
//           className="px-10 py-4 text-lg font-semibold text-teal-600 border-2 border-teal-600 rounded-2xl bg-white/80 hover:bg-teal-600 hover:text-white transition-transform transform hover:scale-105 shadow-md backdrop-blur-sm"
//         >
//           Join Our Mission
//         </button>
//       </div>
//     </div>
//   </div>
// </section>


//       {/* 2. Mission Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// The Newman Kahlon Foundation's mission is to help single moms, women, and children who are victims of domestic violence and psychological, physical, and emotional abuse. We help by providing groceries, community support, and emotional support."


// ~The Newman Kahlon Foundation believes that The secret of living is giving.~            </p>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-12 items-center">
            
//             {/* Image Side */}
//             <div className="lg:w-1/2">
//               <div className="relative">
//                 <img
//                   src={missionImage}
//                   alt="Our mission and vision for empowerment"
//                   className="rounded-2xl shadow-2xl w-full h-auto object-cover min-h-[400px]"
//                 />
//                 <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-teal-600 rounded-2xl shadow-xl flex items-center justify-center">
//                   <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Content Side */}
//             <div className="lg:w-1/2 space-y-6">
//               <h3 className="text-3xl font-bold text-gray-900 leading-tight">
//                 Building a Future of <span className="text-teal-600">Hope and Independence</span>
//               </h3>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Our holistic approach combines immediate crisis intervention with long-term empowerment programs, 
//                 ensuring survivors don't just survive—they thrive and build sustainable futures for themselves and their children.
//               </p>
              
//               <div className="space-y-4 pt-4">
//                 <div className="flex items-start space-x-3">
//                   <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Immediate crisis intervention and safe shelter</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Long-term financial empowerment programs</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Comprehensive mental health support</p>
//                 </div>
//               </div>

//               <button className="inline-flex items-center px-6 py-3 text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 group mt-4">
//                 Learn More About Our Mission
//                 <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. Services Sections - Vertical Layout with Images */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-6 space-y-20">
          
//           {/* Groceries & Essential Needs */}
//           <div className="flex flex-col lg:flex-row gap-12 items-center">
//             {/* Image */}
//             <div className="lg:w-1/2">
//               <img
//                 src={groceriesImage}
//                 alt="Groceries and essential needs support"
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//               />
//             </div>
            
//             {/* Content */}
//             <div className="lg:w-1/2 space-y-6">
//               <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-4">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900">Groceries & Essential Needs</h3>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 We provide immediate access to nutritious food, personal care items, and essential household supplies 
//                 to ensure basic needs are met during times of crisis and transition.
//               </p>
//               <ul className="space-y-3 text-gray-700">
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
//                   <span>Weekly grocery packages tailored to family size</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
//                   <span>Personal hygiene and baby care products</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
//                   <span>Household essentials and cleaning supplies</span>
//                 </li>
//               </ul>
//               <button className="text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300 flex items-center group mt-4">
//                 Learn more about essential support
//                 <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Community Support */}
//           <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
//             {/* Image */}
//             <div className="lg:w-1/2">
//               <img
//                 src={communityImage}
//                 alt="Community support and networking"
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//               />
//             </div>
            
//             {/* Content */}
//             <div className="lg:w-1/2 space-y-6">
//               <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-4">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900">Community Support</h3>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Building strong support networks through peer groups, mentorship programs, and community events 
//                 that foster connection, reduce isolation, and promote healing.
//               </p>
//               <ul className="space-y-3 text-gray-700">
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
//                   <span>Peer support groups and mentorship programs</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
//                   <span>Community events and social gatherings</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
//                   <span>Networking opportunities and skill-sharing</span>
//                 </li>
//               </ul>
//               <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 flex items-center group mt-4">
//                 Learn more about community programs
//                 <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Emotional Counseling */}
//           <div className="flex flex-col lg:flex-row gap-12 items-center">
//             {/* Image */}
//             <div className="lg:w-1/2">
//               <img
//                 src={counselingImage}
//                 alt="Emotional counseling and mental health support"
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//               />
//             </div>
            
//             {/* Content */}
//             <div className="lg:w-1/2 space-y-6">
//               <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-4">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900">Emotional Counseling</h3>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Professional therapeutic services including individual counseling, group therapy, and trauma-informed care 
//                 to support emotional healing and build resilience.
//               </p>
//               <ul className="space-y-3 text-gray-700">
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
//                   <span>Individual therapy sessions with licensed professionals</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
//                   <span>Trauma-informed group counseling</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
//                   <span>Crisis intervention and ongoing support</span>
//                 </li>
//               </ul>
//               <button className="text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300 flex items-center group mt-4">
//                 Learn more about counseling services
//                 <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* 4. CTA Section */}
//       {/* <section className="py-20 bg-gradient-to-r from-teal-600 to-pink-600">
//         <div className="max-w-4xl mx-auto px-6 text-center text-white">
//           <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
//           <p className="text-xl mb-12 opacity-95 max-w-2xl mx-auto">
//             Your support transforms lives. Join us in creating a future where every survivor has the opportunity to thrive.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
//             <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Make a Donation Today
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300">
//               Become a Volunteer
//             </button>
//           </div>
//         </div>
//       </section> */}
//     </main>
//   );
// }


// app/about/page.js
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-nkfTeal">
      {/* Header Section */}
      <div className="pt-20 pb-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-4xl font- text-white mb-4">
          Newman Kahlon Foundation at a Glance
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="rounded-3xl p-8 md:p-16 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Left Side - Image with increased size */}
            <div className="lg:w-2/5 flex justify-center lg:justify-start">
              <div className="ml-0 lg:ml-12 xl:ml-20">
                <div className="relative w-full max-w-lg h-[500px] overflow-hidden shadow-2xl">
                  <Image
                    src="/images/nkfw3.jpg"
                    alt="Newman Kahlon Foundation helping community"
                    width={800}
                    height={600}
                    className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="lg:w-3/5 lg:pr-8 xl:pr-20">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
                    Newman Kahlon Foundations Mission
                  </h2>
                  <div className="w-20 h-1 bg-teal-600 mb-3"></div>
                </div>
                
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  The Newman Kahlon Foundation's mission is to help single moms, women, and children who are victims of domestic violence and psychological, physical, and emotional abuse. We help by providing groceries, community support, and emotional support."
                </p>

                <div className="border-l-4 border-teal-600 p-6 rounded-r-lg">
                  <p className="text-xl md:text-2xl italic text-white font-medium text-center lg:text-left">
                    ~The Newman Kahlon Foundation believes that The secret of living is giving.~
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}