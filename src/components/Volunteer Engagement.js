// "use client"
// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function ProfessionalEngagement() {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [animatedNumbers, setAnimatedNumbers] = useState({
//     professionals: 0,
//     projects: 0,
//     impact: 0,
//     expertise: 0
//   });

//   const professionalCards = [
//     {
//       id: 1,
//       category: 'Education & Youth',
//       title: 'Empower Future Generations',
//       description: 'Support educational programs and mentorship that transform young lives',
//       color: 'from-pink-600 to-pink-700',
//       stats: { professionals: '650+', impact: '8,000+ students' },
//       image: '/images/nkf1.jpg',
//       opportunities: ['Academic tutoring', 'Youth mentorship', 'STEM education']
//     },
//     {
//       id: 2,
//       category: 'Hunger Relief',
//       title: 'Combat Food Insecurity',
//       description: 'Help distribute meals and support sustainable food programs',
//       color: 'from-teal-600 to-teal-700',
//       stats: { professionals: '520+', impact: '2.5M+ meals' },
//       image: '/images/nkf2.jpg',
//       opportunities: ['Food distribution', 'Community kitchens', 'Nutrition education']
//     },
//     {
//       id: 3,
//       category: 'Healthcare',
//       title: 'Support Community Health',
//       description: 'Assist with healthcare access and wellness programs',
//       color: 'from-pink-600 to-pink-700',
//       stats: { professionals: '380+', impact: '35,000+ patients' },
//       image: '/images/nkf3.jpg',
//       opportunities: ['Mobile clinic support', 'Health screenings', 'Patient care']
//     },
//     {
//       id: 4,
//       category: 'Professional Skills',
//       title: 'Share Your Expertise',
//       description: 'Leverage your skills to strengthen our humanitarian impact',
//       color: 'from-teal-600 to-teal-700',
//       stats: { professionals: '450+', impact: '200+ projects' },
//       image: '/images/nkf4.jpg',
//       opportunities: ['Strategic consulting', 'Technology support', 'Marketing']
//     }
//   ];

//   const professionalSpotlight = [
//     {
//       name: 'Dr. Sarah Chen',
//       role: 'Medical Volunteer',
//       quote: "Providing healthcare in underserved communities has shown me the profound impact of accessible medical services.",
//       impact: '1,200+ patients treated',
//       image: '/images/nkf1.jpg'
//     },
//     {
//       name: 'Marcus Johnson',
//       role: 'Education Mentor',
//       quote: "Watching students discover their potential through our programs is incredibly rewarding.",
//       impact: '200+ students mentored',
//       image: '/images/nkf2.jpg'
//     },
//     {
//       name: 'Elena Rodriguez',
//       role: 'Food Distribution',
//       quote: "Our food centers have become community hubs where families find nourishment and support.",
//       impact: '500,000+ meals distributed',
//       image: '/images/nkf3.jpg'
//     }
//   ];

//   const quickActions = [
//     {
//       title: 'Quick Application',
//       description: 'Begin your journey in minutes',
//       action: '/volunteer/apply',
//       color: 'bg-pink-600'
//     },
//     {
//       title: 'Remote Opportunities',
//       description: 'Make an impact from anywhere',
//       action: '/volunteer/virtual',
//       color: 'bg-teal-600'
//     },
//     {
//       title: 'Group Volunteering',
//       description: 'Team-building with purpose',
//       action: '/volunteer/group',
//       color: 'bg-pink-600'
//     },
//     {
//       title: 'Skill Matching',
//       description: 'Find your perfect role',
//       action: '/volunteer/skills',
//       color: 'bg-teal-600'
//     }
//   ];

//   useEffect(() => {
//     const targets = { professionals: 2847, projects: 1850, impact: 75000, expertise: 58 };
//     const duration = 2000;
//     const startTime = Date.now();
    
//     const animate = () => {
//       const now = Date.now();
//       const progress = Math.min((now - startTime) / duration, 1);
      
//       const newNumbers = {};
//       Object.keys(targets).forEach(key => {
//         newNumbers[key] = Math.floor(targets[key] * progress);
//       });
      
//       setAnimatedNumbers(newNumbers);
      
//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     };
    
//     requestAnimationFrame(animate);
//   }, []);

//   const formatNumber = (num) => {
//     if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
//     if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
//     return num.toString();
//   };

//   const currentCard = professionalCards[activeCategory];

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header - Keep this part as you liked */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
//           <div data-aos="zoom-in-up">
//             <div className="inline-flex items-center gap-3 mb-6">
//               <div className="w-12 h-1 bg-pink-600"></div>
//               <span className="text-pink-600 font-bold text-sm uppercase tracking-widest">Professional Engagement</span>
//             </div>
            
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               Leverage Your
//               <span className="block">
//                 <span className="text-pink-600">Expertise</span>
//                 <span className="text-teal-600"> For Impact</span>
//               </span>
//             </h1>
            
//             <p className="text-lg text-gray-600 leading-relaxed">
//               Join our network of skilled professionals and apply your expertise to create meaningful, 
//               sustainable change in communities worldwide.
//             </p>
//           </div>

//           {/* Stats Grid - Changed to Modern Cards */}
//           <div className="grid grid-cols-2 gap-6" data-aos="zoom-in-up" data-aos-delay="200">
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
//               <div className="text-3xl font-bold text-pink-600 mb-2">{formatNumber(animatedNumbers.professionals)}+</div>
//               <div className="text-gray-600 font-semibold">Professionals</div>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
//               <div className="text-3xl font-bold text-teal-600 mb-2">{formatNumber(animatedNumbers.projects)}+</div>
//               <div className="text-gray-600 font-semibold">Projects</div>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
//               <div className="text-3xl font-bold text-pink-600 mb-2">{formatNumber(animatedNumbers.impact)}+</div>
//               <div className="text-gray-600 font-semibold">Lives Impacted</div>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
//               <div className="text-3xl font-bold text-teal-600 mb-2">{animatedNumbers.expertise}</div>
//               <div className="text-gray-600 font-semibold">Expertise Areas</div>
//             </div>
//           </div>
//         </div>

//         {/* Professional Tabs Navigation - New Design */}
//         <div className="mb-12" data-aos="zoom-in-up">
//           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 inline-flex mx-auto">
//             {professionalCards.map((card, index) => (
//               <button
//                 key={card.id}
//                 onClick={() => setActiveCategory(index)}
//                 className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
//                   activeCategory === index
//                     ? `bg-gradient-to-r ${card.color} text-white shadow-lg`
//                     : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                 }`}
//               >
//                 {card.category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content - Professional Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//           {/* Professional Details Card */}
//           <div className="lg:col-span-2" data-aos="zoom-in-up">
//             <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
//               <div className="relative h-80">
//                 <Image
//                   src={currentCard.image}
//                   alt={currentCard.title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                 <div className="absolute bottom-6 left-6 text-white">
//                   <h2 className="text-4xl font-bold mb-3">{currentCard.title}</h2>
//                   <p className="text-xl opacity-90 max-w-2xl">{currentCard.description}</p>
//                 </div>
//               </div>

//               <div className="p-8">
//                 <div className="grid grid-cols-2 gap-6 mb-8">
//                   <div className="text-center p-6 bg-pink-50 rounded-2xl">
//                     <div className="text-3xl font-bold text-pink-600 mb-2">{currentCard.stats.professionals}</div>
//                     <div className="text-gray-700 font-semibold">Active Professionals</div>
//                   </div>
//                   <div className="text-center p-6 bg-teal-50 rounded-2xl">
//                     <div className="text-3xl font-bold text-teal-600 mb-2">{currentCard.stats.impact}</div>
//                     <div className="text-gray-700 font-semibold">Direct Impact</div>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Opportunities</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {currentCard.opportunities.map((opp, index) => (
//                       <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
//                         <div className={`w-3 h-3 rounded-full ${
//                           index % 2 === 0 ? 'bg-pink-600' : 'bg-teal-600'
//                         }`}></div>
//                         <span className="text-gray-800 font-medium">{opp}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <button 
//                   onClick={() => window.location.href = '/volunteer/apply'}
//                   className={`w-full py-4 rounded-2xl font-bold text-white text-lg transition-all duration-300 bg-gradient-to-r ${currentCard.color} hover:shadow-xl transform hover:scale-105`}
//                 >
//                   Apply Your Professional Skills
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Quick Actions Sidebar */}
//           <div className="space-y-6" data-aos="zoom-in-up" data-aos-delay="200">
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Access</h3>
//               <div className="space-y-4">
//                 {quickActions.map((action, index) => (
//                   <button
//                     key={index}
//                     onClick={() => window.location.href = action.action}
//                     className={`${action.color} text-white rounded-xl p-5 text-left w-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
//                   >
//                     <div className="font-bold text-lg mb-2">{action.title}</div>
//                     <div className="text-white/90 text-sm">{action.description}</div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Professional Benefits */}
//             <div className="bg-gradient-to-br from-pink-600 to-teal-600 rounded-2xl p-6 text-white">
//               <h3 className="text-xl font-bold mb-4">Professional Benefits</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Skill Development</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Networking Opportunities</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Career Advancement</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <span>Professional Recognition</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Professional Stories - New Layout */}
//         <div className="mb-16">
//           <div className="text-center mb-12" data-aos="zoom-in-up">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Impact Stories</h2>
//             <p className="text-gray-600 text-lg">Discover how professionals are making a difference</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {professionalSpotlight.map((professional, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
//                 data-aos="zoom-in-up"
//                 data-aos-delay={index * 200}
//               >
//                 <div className="relative h-60">
//                   <Image
//                     src={professional.image}
//                     alt={professional.name}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-2xl font-bold">{professional.name}</h3>
//                     <p className="text-pink-300 font-semibold">{professional.role}</p>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <blockquote className="text-gray-600 leading-relaxed mb-6 text-sm border-l-4 border-teal-500 pl-4 italic">
//                     "{professional.quote}"
//                   </blockquote>
                  
//                   <div className="bg-gradient-to-r from-pink-600 to-teal-600 rounded-xl p-4 text-white text-center">
//                     <div className="font-bold">{professional.impact}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Final CTA - Professional Style */}
//         <div className="text-center" data-aos="zoom-in-up">
//           <div className="bg-gradient-to-r from-pink-600 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute inset-0 bg-black/10"></div>
//             <div className="relative">
//               <h2 className="text-4xl font-bold mb-4">Ready to Make Professional Impact?</h2>
//               <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
//                 Join thousands of professionals using their skills to create lasting change in communities worldwide.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button 
//                   onClick={() => window.location.href = '/volunteer/apply'}
//                   className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//                 >
//                   Start Your Professional Journey
//                 </button>
//                 <button 
//                   onClick={() => window.location.href = '/volunteer/opportunities'}
//                   className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
//                 >
//                   Explore Professional Roles
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from 'react';

// Define the two required brand colors for consistent use
const BRAND_COLORS = {
  PINK: 'pink-600', // #BE1855
  TEAL: 'teal-600', // #0F766E
};

// Helper function to map Tailwind color names to hex codes for inline styles
const getColorHex = (tailwindClass) => {
    switch (tailwindClass) {
        case BRAND_COLORS.PINK: return '#BE1855';
        case BRAND_COLORS.TEAL: return '#0F766E';
        default: return '#D1D5DB'; // Default fallback
    }
}

const VolunteerEngagement = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const engagementAreas = [
    {
      id: 'community-outreach',
      title: 'Community Outreach',
      description: 'Engage directly with communities, providing essential aid and support where it’s needed most.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372c.381 0 .75-.032 1.125-.074m-5.416-12.247c-.375 0-.75-.008-1.125-.008s-.75.008-1.125.008m1.125 12.247h-2.25m11.39-4.82c-.875.529-1.83.961-2.85.961-1.287 0-2.525-.407-3.56-1.157M15 19.128a9.38 9.38 0 012.625.372c.381 0 .75-.032 1.125-.074m-5.416-12.247c-.375 0-.75-.008-1.125-.008s-.75.008-1.125.008m1.125 12.247h-2.25m-11.39-4.82c.875.529 1.83.961 2.85.961 1.287 0 2.525-.407 3.56-1.157m-6.69-1.157h-3.375C4.942 16.5 3.75 16.5 3.75 16.5m10.897-6.52c-.375 0-.75-.008-1.125-.008s-.75.008-1.125.008m1.125 12.247h-2.25m-11.39-4.82c.875.529 1.83.961 2.85.961 1.287 0 2.525-.407 3.56-1.157m-6.69-1.157h-3.375C4.942 16.5 3.75 16.5 3.75 16.5" />
        </svg>
      ),
      color: BRAND_COLORS.PINK,
    },
    {
      id: 'skill-based',
      title: 'Skill-Based Volunteering',
      description: 'Leverage your professional skills in areas like education, healthcare, or administrative support.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L10.5 21.75 12 13.5H3.75z" />
        </svg>
      ),
      color: BRAND_COLORS.TEAL,
    },
    {
      id: 'event-support',
      title: 'Event Support',
      description: 'Help organize and run our fundraising events, awareness campaigns, and community gatherings.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12v-.008z" />
        </svg>
      ),
      color: BRAND_COLORS.PINK,
    },
    {
      id: 'online-volunteering',
      title: 'Online Volunteering',
      description: 'Contribute from anywhere by assisting with digital tasks, social media, or research.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0h.008v.008H21V5.25zM12 10.5h.008v.008H12v-.008zM12 13.5h.008v.008H12v-.008zM12 16.5h.008v.008H12v-.008z" />
        </svg>
      ),
      color: BRAND_COLORS.TEAL,
    },
  ];

  const volunteerStats = [
    { label: 'Active Volunteers', value: '7,500+', color: BRAND_COLORS.PINK },
    { label: 'Hours Contributed', value: '250K+', color: BRAND_COLORS.TEAL },
    { label: 'Projects Supported', value: '500+', color: BRAND_COLORS.PINK },
  ];

  return (
    // Main container with white background
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-3 tracking-tight">
            Join Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-pink-700">Volunteer Family</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Your time and dedication can transform lives. Discover how you can make a meaningful difference with us.
          </p>
        </div>

        {/* Call to Action Card */}
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 shadow-xl border-t-4 border-b-4 border-pink-600mb-16 animate-zoom-in-up">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Ready to Make an Impact?</h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto mb-8">
              Every hour you dedicate creates ripples of positive change. Sign up today and become a part of our compassionate mission.
            </p>
            <button 
              onClick={() => alert('Sign up for volunteering!')}
              className={`inline-flex items-center justify-center px-8 py-4 border-2 border-pink-600text-lg font-semibold rounded-full shadow-lg 
                          text-white bg-pink-600
                          hover:bg-pink-600 hover:border-pink-600 
                          focus:outline-none focus:ring-4 focus:ring-pink-600focus:ring-opacity-50 
                          transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Sign Up Now
            </button>
          </div>
        </div>

        {/* Volunteer Paths Section */}
        <div className="mb-16">
          <h2 className="text-center text-4xl font-bold text-neutral-900 mb-10">Choose Your Path to Purpose</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementAreas.map((area, index) => (
              <div 
                key={area.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-white rounded-2xl p-6 shadow-md border-2 
                           ${hoveredCard === index ? `border-${area.color} shadow-lg scale-[1.02]` : 'border-neutral-200'}
                           transition-all duration-300 transform hover:-translate-y-1`}
                style={{
                    borderColor: hoveredCard === index ? getColorHex(area.color) : undefined,
                }}
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-5 transition-colors duration-300`}
                     style={{
                         backgroundColor: getColorHex(area.color),
                         color: '#FFFFFF' // Icons always white on colored background
                     }}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{area.title}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">{area.description}</p>
                <button 
                  onClick={() => alert(`Exploring ${area.title} opportunities!`)}
                  className={`mt-6 px-4 py-2 text-sm font-semibold rounded-lg border-2 
                             ${area.color === BRAND_COLORS.PINK ? 'border-pink-600text-pink-600hover:bg-pink-600hover:text-white' : 'border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white'}
                             transition-all duration-300`}
                  style={{
                    borderColor: getColorHex(area.color),
                    color: area.color === BRAND_COLORS.PINK ? getColorHex(BRAND_COLORS.PINK) : getColorHex(BRAND_COLORS.TEAL),
                    '--hover-bg-color': getColorHex(area.color)
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = e.currentTarget.style.getPropertyValue('--hover-bg-color')}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Impact Statistics */}
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 shadow-xl border-t-4 border-b-4 border-teal-600">
          <h2 className="text-center text-4xl font-bold text-neutral-900 mb-10">Our Volunteer Impact So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteerStats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm border border-neutral-200 animate-zoom-in-up" 
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <p className={`text-6xl font-extrabold mb-3`} style={{ color: getColorHex(stat.color) }}>{stat.value}</p>
                <p className="text-lg font-semibold text-neutral-800">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        /* Custom animation for zoom-in-up effect */
        @keyframes zoomInUp {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-zoom-in-up {
          animation: zoomInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default VolunteerEngagement;
