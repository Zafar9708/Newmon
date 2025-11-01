// // "use client"
// // import { useState, useRef, useEffect } from 'react';
// // import Image from 'next/image';

// // export default function ImpactMosaic() {
// //   const [activeCategory, setActiveCategory] = useState(0);
// //   const [hoveredCard, setHoveredCard] = useState(null);

// //   const categories = [
// //     {
// //       id: 'hunger',
// //       title: 'Hunger Relief',
// //       icon: '🍽️',
// //       color: 'from-pink-600 to-pink-700',
// //       image: '/images/nkf1.jpg',
// //       stats: { programs: 8, impact: '2.5M+ meals', locations: '500+' },
// //       cards: [
// //         { title: 'Community Food Distribution', impact: 'Daily meal services', location: 'Urban Centers' },
// //         { title: 'Mobile Food Pantries', impact: 'Rural area outreach', location: 'Remote Communities' },
// //         { title: 'Nutrition Programs', impact: 'Children & seniors', location: 'Nationwide' },
// //         { title: 'Emergency Food Relief', impact: 'Crisis response', location: 'Disaster Zones' }
// //       ]
// //     },
// //     {
// //       id: 'poverty',
// //       title: 'Poverty Alleviation',
// //       icon: '🏠',
// //       color: 'from-teal-600 to-teal-700',
// //       image: '/images/nkf2.jpg',
// //       stats: { programs: 6, impact: '50K+ families', locations: '120+' },
// //       cards: [
// //         { title: 'Vocational Training', impact: 'Job skills development', location: 'Training Centers' },
// //         { title: 'Housing Assistance', impact: 'Safe shelter programs', location: 'Nationwide' },
// //         { title: 'Micro-Enterprise', impact: 'Small business support', location: 'Economic Zones' },
// //         { title: 'Financial Education', impact: 'Economic empowerment', location: 'Community Centers' }
// //       ]
// //     },
// //     {
// //       id: 'widows',
// //       title: 'Widow Support',
// //       icon: '💝',
// //       color: 'from-pink-600 to-pink-700',
// //       image: '/images/nkf3.jpg',
// //       stats: { programs: 5, impact: '15K+ widows', locations: '85+' },
// //       cards: [
// //         { title: 'Support Networks', impact: 'Community building', location: 'National Network' },
// //         { title: 'Counseling Services', impact: 'Emotional support', location: 'Care Centers' },
// //         { title: 'Educational Support', impact: 'Children education', location: 'Learning Centers' },
// //         { title: 'Resource Assistance', impact: 'Essential needs', location: 'Support Centers' }
// //       ]
// //     },
// //     {
// //       id: 'healthcare',
// //       title: 'Healthcare',
// //       icon: '🏥',
// //       color: 'from-teal-600 to-teal-700',
// //       image: '/images/nkf4.jpg',
// //       stats: { programs: 7, impact: '35K+ patients', locations: '200+' },
// //       cards: [
// //         { title: 'Mobile Clinics', impact: 'Remote area care', location: 'Rural Regions' },
// //         { title: 'Preventive Care', impact: 'Health screening', location: 'Community Health' },
// //         { title: 'Medication Support', impact: 'Essential medicines', location: 'Medical Centers' },
// //         { title: 'Mental Health', impact: 'Counseling services', location: 'Wellness Centers' }
// //       ]
// //     },
// //     {
// //       id: 'education',
// //       title: 'Education',
// //       icon: '📚',
// //       color: 'from-pink-600 to-pink-700',
// //       image: '/images/nkf5.jpg',
// //       stats: { programs: 6, impact: '25K+ students', locations: '150+' },
// //       cards: [
// //         { title: 'Scholarship Programs', impact: 'Education access', location: 'Schools Nationwide' },
// //         { title: 'After-School Programs', impact: 'Youth development', location: 'Community Centers' },
// //         { title: 'Digital Learning', impact: 'Technology access', location: 'Digital Classrooms' },
// //         { title: 'Vocational Training', impact: 'Skills development', location: 'Training Centers' }
// //       ]
// //     }
// //   ];

// //   const currentCategory = categories[activeCategory];

// //   return (
// //     <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
// //         {/* Header */}
// //         <div className="text-center mb-16">
// //           <div className="inline-flex items-center gap-3 mb-6">
// //             <div className="w-8 h-0.5 bg-pink-600"></div>
// //             <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
// //             <div className="w-8 h-0.5 bg-teal-600"></div>
// //           </div>
// //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //             Comprehensive
// //             <span className="block">
// //               <span className="text-pink-600">Humanitarian</span> 
// //               <span className="text-teal-600"> Programs</span>
// //             </span>
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //             Transforming lives through dedicated programs that address critical needs and build sustainable futures
// //           </p>
// //         </div>

// //         {/* Main Content Grid */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
// //           {/* Left Column - Category Navigation and Image */}
// //           <div className="space-y-6">
// //             {/* Category Navigation */}
// //             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
// //               <h3 className="text-lg font-bold text-gray-900 mb-4">Our Focus Areas</h3>
// //               <div className="space-y-2">
// //                 {categories.map((category, index) => (
// //                   <button
// //                     key={category.id}
// //                     onClick={() => setActiveCategory(index)}
// //                     className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
// //                       activeCategory === index
// //                         ? `bg-gradient-to-r ${category.color} text-white shadow-md`
// //                         : 'text-gray-700 hover:bg-gray-50'
// //                     }`}
// //                   >
// //                     <span className="text-lg">{category.icon}</span>
// //                     <span className="font-semibold text-sm">{category.title}</span>
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Category Image */}
// //             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
// //               <div className="relative h-64 rounded-xl overflow-hidden">
// //                 <Image
// //                   src={currentCategory.image}
// //                   alt={currentCategory.title}
// //                   fill
// //                   className="object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
// //                 <div className="absolute bottom-4 left-4 text-white">
// //                   <h3 className="font-bold text-lg">{currentCategory.title}</h3>
// //                   <p className="text-sm opacity-90">Making a difference daily</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Middle Column - Program Cards */}
// //           <div className="lg:col-span-2">
// //             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
// //               <div className="flex items-center gap-4 mb-6">
// //                 <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentCategory.color} flex items-center justify-center text-white text-lg`}>
// //                   {currentCategory.icon}
// //                 </div>
// //                 <div>
// //                   <h3 className="text-2xl font-bold text-gray-900">{currentCategory.title}</h3>
// //                   <p className="text-gray-600">Creating lasting impact through dedicated programs</p>
// //                 </div>
// //               </div>

// //               {/* Stats */}
// //               <div className="grid grid-cols-3 gap-4 mb-6">
// //                 <div className="text-center p-4 bg-gray-50 rounded-xl">
// //                   <div className="text-xl font-bold text-pink-600 mb-1">{currentCategory.stats.programs}</div>
// //                   <div className="text-sm text-gray-600">Programs</div>
// //                 </div>
// //                 <div className="text-center p-4 bg-gray-50 rounded-xl">
// //                   <div className="text-xl font-bold text-teal-600 mb-1">{currentCategory.stats.impact}</div>
// //                   <div className="text-sm text-gray-600">Impact</div>
// //                 </div>
// //                 <div className="text-center p-4 bg-gray-50 rounded-xl">
// //                   <div className="text-xl font-bold text-pink-600 mb-1">{currentCategory.stats.locations}</div>
// //                   <div className="text-sm text-gray-600">Locations</div>
// //                 </div>
// //               </div>

// //               {/* Program Cards */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {currentCategory.cards.map((card, index) => (
// //                   <div
// //                     key={index}
// //                     className={`bg-white rounded-xl p-4 border-2 transition-all duration-300 ${
// //                       hoveredCard === index ? 'border-pink-500 shadow-lg' : 'border-gray-100 hover:border-pink-300'
// //                     }`}
// //                     onMouseEnter={() => setHoveredCard(index)}
// //                     onMouseLeave={() => setHoveredCard(null)}
// //                   >
// //                     <h4 className="font-bold text-gray-900 mb-2">{card.title}</h4>
// //                     <div className="space-y-2">
// //                       <div className="flex items-center gap-2">
// //                         <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
// //                         <span className="text-gray-700 text-sm">{card.impact}</span>
// //                       </div>
// //                       <div className="flex items-center gap-2">
// //                         <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
// //                         <span className="text-gray-600 text-sm">{card.location}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Additional Images Grid */}
// //             <div className="grid grid-cols-2 gap-4">
// //               <div className="relative h-32 rounded-xl overflow-hidden">
// //                 <Image
// //                   src="/images/nkf1.jpg"
// //                   alt="Community outreach"
// //                   fill
// //                   className="object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-black/20"></div>
// //               </div>
// //               <div className="relative h-32 rounded-xl overflow-hidden">
// //                 <Image
// //                   src="/images/nkf2.jpg"
// //                   alt="Program activities"
// //                   fill
// //                   className="object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-black/20"></div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Impact Summary */}
// //         {/* <div className="bg-gradient-to-r from-pink-600 to-teal-600 rounded-2xl p-8 text-white text-center mb-12">
// //           <h3 className="text-2xl font-bold mb-6">Cumulative Impact</h3>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //             <div>
// //               <div className="text-2xl font-bold mb-1">2.5M+</div>
// //               <div className="text-pink-100 text-sm">Meals Provided</div>
// //             </div>
// //             <div>
// //               <div className="text-2xl font-bold mb-1">50K+</div>
// //               <div className="text-teal-100 text-sm">Families Supported</div>
// //             </div>
// //             <div>
// //               <div className="text-2xl font-bold mb-1">35K+</div>
// //               <div className="text-pink-100 text-sm">Patients Treated</div>
// //             </div>
// //             <div>
// //               <div className="text-2xl font-bold mb-1">15K+</div>
// //               <div className="text-teal-100 text-sm">Widows Assisted</div>
// //             </div>
// //           </div>
// //         </div> */}

// //         {/* Additional Images Section */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
// //           <div className="relative h-48 rounded-2xl overflow-hidden group">
// //             <Image
// //               src="/images/nkf3.jpg"
// //               alt="Education programs"
// //               fill
// //               className="object-cover group-hover:scale-105 transition-transform duration-500"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
// //             <div className="absolute bottom-4 left-4 text-white">
// //               <h4 className="font-bold">Education Initiatives</h4>
// //               <p className="text-sm opacity-90">Building brighter futures</p>
// //             </div>
// //           </div>
// //           <div className="relative h-48 rounded-2xl overflow-hidden group">
// //             <Image
// //               src="/images/nkf4.jpg"
// //               alt="Healthcare services"
// //               fill
// //               className="object-cover group-hover:scale-105 transition-transform duration-500"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
// //             <div className="absolute bottom-4 left-4 text-white">
// //               <h4 className="font-bold">Healthcare Access</h4>
// //               <p className="text-sm opacity-90">Saving lives daily</p>
// //             </div>
// //           </div>
// //           <div className="relative h-48 rounded-2xl overflow-hidden group">
// //             <Image
// //               src="/images/nkf5.jpg"
// //               alt="Community development"
// //               fill
// //               className="object-cover group-hover:scale-105 transition-transform duration-500"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
// //             <div className="absolute bottom-4 left-4 text-white">
// //               <h4 className="font-bold">Community Growth</h4>
// //               <p className="text-sm opacity-90">Sustainable development</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Call to Action */}
// //         {/* <div className="text-center">
// //           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
// //             <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //               Join Our <span className="text-pink-600">Mission</span> of Hope
// //             </h3>
// //             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
// //               Your support enables us to continue providing comprehensive care and creating lasting change in communities worldwide.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <button 
// //                 onClick={() => window.location.href = '/donate'}
// //                 className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-600transition-colors duration-300"
// //               >
// //                 Support Our Work
// //               </button>
// //               <button 
// //                 onClick={() => window.location.href = '/programs'}
// //                 className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300"
// //               >
// //                 Explore Programs
// //               </button>
// //             </div>
// //           </div>
// //         </div> */}

// //       </div>
// //     </section>
// //   );
// // }

// "use client";
// import { useState, useMemo } from 'react';

// // Define the two required brand colors for consistent use
// const BRAND_COLORS = {
//   PINK: 'pink-700', // #BE1855
//   TEAL: 'teal-700', // #0F766E
// };

// // SVG Icon paths for the specific charity domains
// const IconPaths = {
//   hunger: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-4H7v-2h2v-4h2v4h2v2h-2v4z", // Food/Fork icon placeholder
//   poverty: "M10 18h4v-2h-4v2zM3 3v2h18V3H3zm3 8h12v2H6v-2zM3 17h18v-2H3v2z", // House/Shelter icon placeholder
//   widows: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15H9v-2h2v2zm0-4H9V8h2v4z", // Heart/Support icon placeholder
//   healthcare: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z", // Health/Pill icon placeholder
//   education: "M15 22.5c0 .3-.1.5-.2.7-.4 1.2-1.7 2.1-3 2.1s-2.6-1-3-2.1c-.1-.2-.2-.4-.2-.7V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v19.5zM12 4V3M7 11h-4M17 11h4M7 15h-4M17 15h4", // Book/Learning icon placeholder
// };

// // Helper function to map Tailwind color names to hex codes for inline styles
// const getColorHex = (tailwindClass) => {
//     switch (tailwindClass) {
//         case BRAND_COLORS.PINK: return '#BE1855';
//         case BRAND_COLORS.TEAL: return '#0F766E';
//         default: return '#000000'; // Default fallback (black)
//     }
// }

// const ImpactDashboard = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const impactAreas = useMemo(() => [
//     {
//       id: 'hunger',
//       title: 'Hunger Relief & Security',
//       subtitle: 'Immediate Aid and Sustainable Food Solutions',
//       icon: IconPaths.hunger,
//       accentColor: BRAND_COLORS.PINK,
//       stats: [
//         { label: 'Meals Delivered', value: '2.5M+', description: 'Since January, across all primary programs.' },
//         { label: 'Sustainable Farms', value: '85', description: 'Projects focused on local, organic produce.' },
//         { label: 'Volunteer Hours', value: '92K', description: 'Total collective time dedicated to logistics.' },
//       ],
//       description: "Our primary mission ensures that vulnerable populations have reliable access to nutritious meals. We combine emergency food distribution with long-term agricultural training to promote self-sufficiency and food security.",
//     },
//     {
//       id: 'poverty',
//       title: 'Poverty Alleviation Programs',
//       subtitle: 'Financial Literacy and Vocational Training',
//       icon: IconPaths.poverty,
//       accentColor: BRAND_COLORS.TEAL,
//       stats: [
//         { label: 'Families Lifted', value: '50K+', description: 'Provided with stable housing and income streams.' },
//         { label: 'Training Graduates', value: '12K', description: 'Individuals certified in high-demand trades.' },
//         { label: 'Micro-Loans Issued', value: '$1.5M', description: 'Supporting small businesses in underserved areas.' },
//       ],
//       description: "We are committed to breaking the cycle of generational poverty. Our comprehensive approach provides financial education, employment support, and access to capital to empower individuals to build their own futures.",
//     },
//     {
//       id: 'widows',
//       title: 'Widow Support & Reintegration',
//       subtitle: 'Legal, Emotional, and Economic Empowerment',
//       icon: IconPaths.widows,
//       accentColor: BRAND_COLORS.PINK,
//       stats: [
//         { label: 'Widows Supported', value: '15K+', description: 'Receiving monthly stipends and assistance.' },
//         { label: 'Legal Aid Cases', value: '3.5K', description: 'Assisted with property and inheritance rights.' },
//         { label: 'Support Groups', value: '150+', description: 'Weekly meetings for emotional and social support.' },
//       ],
//       description: "Offering vital resources to widows who face social and economic exclusion. Our programs focus on providing them with legal protection, psychological care, and opportunities for dignified, independent living.",
//     },
//     {
//       id: 'healthcare',
//       title: 'Healthcare Access Initiative',
//       subtitle: 'Mobile Clinics and Preventive Medicine',
//       icon: IconPaths.healthcare,
//       accentColor: BRAND_COLORS.TEAL,
//       stats: [
//         { label: 'Patients Treated', value: '35K+', description: 'Received essential check-ups and treatments.' },
//         { label: 'Remote Clinics', value: '60', description: 'Operating in rural and hard-to-reach locations.' },
//         { label: 'Vaccination Drives', value: '25', description: 'Annual campaigns reaching thousands of children.' },
//       ],
//       description: "Dedicated to closing the gap in health equality. We operate mobile medical units and permanent clinics to provide high-quality primary and preventive care to communities with limited access to services.",
//     },
//     {
//       id: 'education',
//       title: 'Education & Child Sponsorship',
//       subtitle: 'School Funding and Digital Resource Access',
//       icon: IconPaths.education,
//       accentColor: BRAND_COLORS.PINK,
//       stats: [
//         { label: 'Students Sponsored', value: '25K+', description: 'From primary school through vocational college.' },
//         { label: 'Classrooms Built', value: '45', description: 'New educational infrastructure projects completed.' },
//         { label: 'Digital Labs', value: '120', description: 'Equipped with computers and internet access.' },
//       ],
//       description: "Investing in the next generation by eliminating barriers to education. We provide scholarships, essential supplies, and modern digital learning tools to ensure every child has the opportunity to succeed.",
//     },
//   ], []);

//   const currentArea = impactAreas[activeIndex];
//   const accentHex = getColorHex(currentArea.accentColor);
  
//   // Dynamic utility classes must be explicitly defined where possible, or use inline styles/variables
//   const accentTextClass = currentArea.accentColor === BRAND_COLORS.PINK ? 'text-pink-700' : 'text-teal-700';
//   const accentBgClass = currentArea.accentColor === BRAND_COLORS.PINK ? 'bg-pink-700' : 'bg-teal-700';
//   const hoverBorderClass = currentArea.accentColor === BRAND_COLORS.PINK ? 'hover:border-pink-700' : 'hover:border-teal-700';

//   const nextCategory = () => {
//     setActiveIndex((prev) => (prev + 1) % impactAreas.length);
//   };

//   const prevCategory = () => {
//     setActiveIndex((prev) => (prev - 1 + impactAreas.length) % impactAreas.length);
//   };


//   return (
//     // Base background: Changed to soft off-white and main text to dark neutral
//     <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased p-4 sm:p-10">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Header and Title */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl sm:text-6xl font-extrabold mb-3 tracking-tight">
//             Our <span className={`bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-${currentArea.accentColor}`}>Impact</span> Areas
//           </h1>
//           {/* Subtitle text changed to neutral-600 */}
//           <p className="text-xl text-neutral-600">
//             Explore our core missions and the tangible results we achieve together.
//           </p>
//         </div>

//         {/* Navigation Carousel (Minimalist Tabs) */}
//         <div className="flex justify-center mb-10 overflow-x-auto">
//           {/* Nav bar background changed to pure white with shadow */}
//           <nav className="flex space-x-3 p-2 bg-white rounded-full shadow-lg">
//             {impactAreas.map((area, index) => (
//               <button
//                 key={area.id}
//                 onClick={() => setActiveIndex(index)}
//                 className={`
//                   flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap
//                   ${index === activeIndex
//                     ? `${accentBgClass} text-white shadow-lg shadow-${area.accentColor}/40` // Active text: white for contrast on vibrant color
//                     // Inactive button text changed to neutral-700; hover background changed to neutral-100
//                     : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900' 
//                   }
//                 `}
//                 style={{
//                     backgroundColor: index === activeIndex ? accentHex : undefined,
//                 }}
//               >
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d={area.icon} />
//                 </svg>
//                 {area.title}
//               </button>
//             ))}
//           </nav>
//         </div>
        
//         {/* Main Content Card (Central Dashboard) */}
//         <div 
//              // Card background changed to pure white. Added subtle shadow.
//              className={`relative p-8 md:p-12 rounded-3xl bg-white shadow-xl border-t-4 border-b-4 transition-all duration-500`}
//              style={{ borderColor: accentHex }}>
          
//           {/* Content Transition Wrapper for visual smoothness */}
//           <div key={currentArea.id} 
//                className="animate-content-in space-y-8" 
//                style={{ animationDuration: '0.6s' }}>

//             <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-6 mb-6 border-neutral-200">
//               {/* Title Section */}
//               <div>
//                 <h2 className={`text-4xl font-extrabold tracking-tight ${accentTextClass}`} 
//                     style={{ color: accentHex }}>
//                     {currentArea.title}
//                 </h2>
//                  {/* Subtitle text changed to neutral-600 */}
//                 <p className="text-xl text-neutral-600 mt-1">{currentArea.subtitle}</p>
//               </div>

//               {/* Navigation Arrows (visible on larger screens) */}
//               <div className="hidden md:flex space-x-4 mt-4 md:mt-0">
//                 <button
//                   onClick={prevCategory}
//                   // Border changed to neutral-300; hover background changed to neutral-100
//                   className={`p-3 rounded-full border border-neutral-300 ${hoverBorderClass} hover:bg-neutral-100 transition-colors`}
//                   aria-label="Previous Area"
//                 >
//                     <svg className={`w-6 h-6 ${accentTextClass}`} style={{ color: accentHex }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
//                 </button>
//                 <button
//                   onClick={nextCategory}
//                   // Border changed to neutral-300; hover background changed to neutral-100
//                   className={`p-3 rounded-full border border-neutral-300 ${hoverBorderClass} hover:bg-neutral-100 transition-colors`}
//                   aria-label="Next Area"
//                 >
//                     <svg className={`w-6 h-6 ${accentTextClass}`} style={{ color: accentHex }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
//                 </button>
//               </div>
//             </div>

//             {/* Description and Key Statistics */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
//               {/* Description Panel */}
//               <div className="lg:col-span-2">
//                 <h3 className="text-2xl font-bold text-neutral-900 mb-4">Mission Statement</h3>
//                 {/* Description text changed to neutral-700 */}
//                 <p className="text-lg text-neutral-700 leading-relaxed">{currentArea.description}</p>
//               </div>

//               {/* Statistics Sidebar */}
//               {/* Sidebar background changed to neutral-100; Border changed to neutral-300 */}
//               <div className="lg:col-span-1 p-6 rounded-xl bg-neutral-100 shadow-inner border border-neutral-300">
//                 <h3 className={`text-2xl font-bold mb-4 ${accentTextClass}`} 
//                     style={{ color: accentHex }}>
//                     Key Results
//                 </h3>
//                 <dl className="space-y-6">
//                   {currentArea.stats.map((stat, index) => (
//                     <div key={index} className="border-l-4 pl-3" 
//                          style={{ borderColor: accentHex }}>
//                       <dt className="text-4xl font-extrabold text-neutral-900">{stat.value}</dt>
//                        {/* Label text changed to neutral-700 */}
//                       <dd className="text-sm uppercase tracking-wider text-neutral-700 mb-0.5">{stat.label}</dd>
//                        {/* Description text changed to neutral-500 */}
//                       <dd className="text-xs text-neutral-500">{stat.description}</dd>
//                     </div>
//                   ))}
//                 </dl>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation (Hidden on larger screens) */}
//         <div className="flex justify-between md:hidden mt-8 max-w-sm mx-auto">
//             <button
//                 onClick={prevCategory}
//                  // Text changed to neutral-700; background changed to neutral-100; border changed to neutral-300
//                 className="flex items-center space-x-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors p-2 rounded-lg bg-neutral-100 border border-neutral-300"
//                 aria-label="Previous Area"
//             >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
//                 Prev
//             </button>
//             {/* Counter text changed to neutral-500 */}
//             <span className="text-neutral-500 text-sm flex items-center">{activeIndex + 1} / {impactAreas.length}</span>
//             <button
//                 onClick={nextCategory}
//                  // Text changed to neutral-700; background changed to neutral-100; border changed to neutral-300
//                 className="flex items-center space-x-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors p-2 rounded-lg bg-neutral-100 border border-neutral-300"
//                 aria-label="Next Area"
//             >
//                 Next
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
//             </button>
//         </div>


//       </div>
//       <style>{`
//         /* Animation for smooth content switch */
//         @keyframes fadeInSlideUp {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-content-in {
//           animation-name: fadeInSlideUp;
//           animation-fill-mode: forwards;
//         }

//       `}</style>
//     </div>
//   );
// };

// export default ImpactDashboard;



// components/ImpactSection.jsx
import Image from 'next/image';

export default function ImpactSection() {
  const items = [
    {
      icon: "https://static.wixstatic.com/media/2cef79_17cf64ff94f2489b98e6447c4dd69336~mv2.jpg/v1/fill/w_350,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/truck_edited.jpg", // Truck icon
      title: "Free Meals Provided",
    },
    {
      icon: "https://static.wixstatic.com/media/2cef79_384aa44ac7a740bfaf3c8e764dd6d8f5~mv2.png/v1/fill/w_312,h_312,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ffef.png", // Money hand icon
      title: "City Charities Served",
    },
    {
      icon: "https://static.wixstatic.com/media/2cef79_253353a94ed540138ce0e02b42633847~mv2.jpg/v1/fill/w_332,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fd_edited.jpg", // Dollar arrow icon
      title: "Returned to the community",
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
      

        {/* Three Icons in Same Line */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 lg:gap-32">
          {items.map((item, index) => (
            <div key={index} className="text-center flex-1 max-w-xs">
              <div className="flex justify-center mb-6">
                <div className="p-10 rounded-full"> {/* Even more padding */}
                  <Image 
                    src={item.icon} 
                    alt={item.title} 
                    width={160}  
                    height={160} 
                    className="w-36 h-36" 
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}