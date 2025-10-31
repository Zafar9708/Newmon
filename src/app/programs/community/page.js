// // app/programs/community/page.jsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';

// export default function CommunityDevelopment() {
//   const [activeTab, setActiveTab] = useState('programs');
//   const [isVisible, setIsVisible] = useState(false);
//   const [donationAmount, setDonationAmount] = useState(50);
//   const [animatedStats, setAnimatedStats] = useState({
//     communities: 0,
//     projects: 0,
//     families: 0
//   });
//   const counterRef = useRef(null);

//   useEffect(() => {
//     setIsVisible(true);
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           startCounters();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // SEO Keywords for Community Development
//   const seoKeywords = [
//     "community development", "community programs", "sustainable communities",
//     "community outreach", "local development", "community empowerment",
//     "neighborhood development", "community initiatives", "social development",
//     "community building", "urban development", "rural development",
//     "community projects", "social programs", "community support",
//     "local empowerment", "community growth", "social impact",
//     "community services", "development programs"
//   ];

//   const startCounters = () => {
//     const duration = 2000;
//     const steps = 60;
//     const increment = (target, current, setter) => {
//       const step = target / steps;
//       let count = 0;
//       const timer = setInterval(() => {
//         count += step;
//         if (count >= target) {
//           count = target;
//           clearInterval(timer);
//         }
//         setter(Math.floor(count));
//       }, duration / steps);
//     };

//     increment(125, 0, (val) => setAnimatedStats(prev => ({ ...prev, communities: val })));
//     increment(340, 0, (val) => setAnimatedStats(prev => ({ ...prev, projects: val })));
//     increment(25000, 0, (val) => setAnimatedStats(prev => ({ ...prev, families: val })));
//   };

//   const handleDonate = (amount) => {
//     setDonationAmount(amount);
//     console.log(`Donating $${amount} to community development`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden">
//       {/* SEO Keywords Meta */}
//       <div className="hidden">
//         {seoKeywords.join(", ")}
//       </div>

//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00B8C8]/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
//       </div>

//       {/* Header Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#00B8C8] to-cyan-600">
//         <div className="absolute inset-0 bg-cyan-900/30"></div>
        
//         {/* Community Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-10 w-12 h-12 border-2 border-white rounded-full animate-pulse"></div>
//           <div className="absolute bottom-40 right-20 w-8 h-8 border-2 border-white rotate-45 animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/3 w-6 h-6 border-2 border-white animate-pulse delay-500"></div>
//         </div>

//         <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
//           <div className={`transition-all duration-1000 transform ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             {/* Community Badge */}
//             <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
//               <span className="text-lg font-medium tracking-wider">BUILDING SUSTAINABLE COMMUNITIES</span>
//             </div>
            
//             {/* Main Heading */}
//             <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
//                 Community
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
//                 Development
//               </span>
//             </h1>
            
//             <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed font-light opacity-90">
//               Empowering communities through <span className="text-yellow-300 font-semibold">sustainable development programs</span>, 
//               education, and economic opportunities that create lasting positive change.
//             </p>

//             {/* Community Impact Stats */}
//             <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
//               {[
//                 { number: animatedStats.communities, label: 'Communities Transformed', suffix: '+' },
//                 { number: animatedStats.projects, label: 'Development Projects', suffix: '+' },
//                 { number: animatedStats.families.toLocaleString(), label: 'Families Empowered', suffix: '+' }
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-6 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-500 group"
//                 >
//                   <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
//                     {stat.number}{stat.suffix}
//                   </div>
//                   <div className="text-cyan-100 font-medium tracking-wide">{stat.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Community Donation CTA */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
//               <h3 className="text-2xl font-bold text-white mb-4">Invest in Community Development</h3>
//               <p className="text-cyan-100 mb-6 text-center">
//                 Your donation creates sustainable opportunities and transforms entire communities through development programs
//               </p>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
//                 {[25, 50, 100, 250].map((amount) => (
//                   <button
//                     key={amount}
//                     onClick={() => handleDonate(amount)}
//                     className={`py-4 rounded-xl font-bold transition-all duration-300 ${
//                       donationAmount === amount
//                         ? 'bg-[#00B8C8] text-white shadow-lg transform scale-105'
//                         : 'bg-white/20 text-white hover:bg-white/30'
//                     }`}
//                   >
//                     ${amount}
//                   </button>
//                 ))}
//               </div>
              
//               <button className="w-full bg-[#00B8C8] text-white py-5 rounded-2xl font-bold text-xl hover:bg-cyan-600 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 mb-4">
//                 SUPPORT COMMUNITY DEVELOPMENT: ${donationAmount}
//               </button>
              
//               <p className="text-yellow-200 text-sm text-center">
//                 $50 funds community programs • $100 supports local development • $250 builds community infrastructure
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Navigation */}
//       <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-cyan-100 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex overflow-x-auto py-4">
//             {[
//               { id: 'programs', label: 'Community Programs' },
//               { id: 'impact', label: 'Development Impact' },
//               { id: 'stories', label: 'Community Stories' },
//               { id: 'donate', label: 'Support Development' },
//               { id: 'volunteer', label: 'Community Involvement' }
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex-shrink-0 px-6 py-3 font-semibold transition-all duration-500 rounded-2xl mx-1 ${
//                   activeTab === tab.id
//                     ? 'bg-[#00B8C8] text-white shadow-lg transform scale-105'
//                     : 'text-gray-700 hover:text-[#00B8C8] hover:bg-cyan-50'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Development Programs Section */}
//       {activeTab === 'programs' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Community Development Programs</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Comprehensive community initiatives designed to build self-sufficient, thriving neighborhoods through 
//                 community outreach, economic empowerment, and local development
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {developmentPrograms.map((program, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-cyan-100"
//                 >
//                   {/* Gradient Header */}
//                   <div className="h-4 bg-gradient-to-r from-[#00B8C8] to-cyan-500"></div>
                  
//                   <div className="p-6">
//                     <div className="mb-4">
//                       <div className="inline-flex items-center px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-3">
//                         {program.category}
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00B8C8] transition-colors duration-300">
//                         {program.title}
//                       </h3>
//                     </div>
                    
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {program.description}
//                     </p>
                    
//                     {/* Program Features */}
//                     <div className="space-y-3 mb-6">
//                       {program.features.map((feature, idx) => (
//                         <div
//                           key={idx}
//                           className="flex items-center text-gray-600 group/feature hover:text-[#00B8C8] transition-colors duration-300"
//                         >
//                           <div className="w-2 h-2 bg-[#00B8C8] rounded-full mr-3 group-hover/feature:scale-150 transition-transform duration-300"></div>
//                           <span className="text-sm">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     {/* Impact Metrics */}
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                       <div className="text-center p-3 bg-cyan-50 rounded-xl">
//                         <div className="text-lg font-bold text-[#00B8C8]">{program.impact.communities}</div>
//                         <div className="text-xs text-gray-600">Communities</div>
//                       </div>
//                       <div className="text-center p-3 bg-blue-50 rounded-xl">
//                         <div className="text-lg font-bold text-blue-600">{program.impact.people}</div>
//                         <div className="text-xs text-gray-600">People Reached</div>
//                       </div>
//                     </div>
                    
//                     {/* Donation Button */}
//                     <button 
//                       onClick={() => handleDonate(program.donationSuggestion)}
//                       className="w-full bg-gradient-to-r from-[#00B8C8] to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
//                     >
//                       Support Community Program - ${program.donationSuggestion}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Community Impact Section */}
//       {activeTab === 'impact' && (
//         <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Community Development Impact</h2>
//               <p className="text-xl text-gray-600">Tracking the real impact of community development programs and local initiatives</p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-900 mb-6">Community Progress Metrics</h3>
//                 <div className="space-y-6">
//                   {impactMetrics.map((metric, index) => (
//                     <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100">
//                       <div className="flex items-center justify-between mb-4">
//                         <h4 className="text-xl font-semibold text-[#00B8C8]">{metric.area}</h4>
//                         <span className="text-2xl font-bold text-cyan-600">{metric.progress}%</span>
//                       </div>
//                       <div className="w-full bg-cyan-100 rounded-full h-3">
//                         <div 
//                           className="bg-gradient-to-r from-[#00B8C8] to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out"
//                           style={{ width: `${metric.progress}%` }}
//                         ></div>
//                       </div>
//                       <p className="text-gray-600 mt-3 text-sm">{metric.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="bg-gradient-to-r from-[#00B8C8] to-cyan-500 rounded-3xl p-8 text-white">
//                 <h3 className="text-3xl font-bold mb-6">Annual Community Development Impact</h3>
//                 <div className="space-y-6">
//                   {annualImpact.map((impact, index) => (
//                     <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-2xl">
//                       <div>
//                         <div className="font-bold text-lg">{impact.metric}</div>
//                         <div className="text-cyan-100 text-sm">{impact.description}</div>
//                       </div>
//                       <div className="text-2xl font-bold text-yellow-300">{impact.value}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Regional Development Map */}
//             <div className="bg-white rounded-3xl p-8 shadow-lg border border-cyan-100">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Active Community Development Projects</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {activeProjects.map((project, index) => (
//                   <div key={index} className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
//                     <div className="text-2xl font-bold text-[#00B8C8] mb-2">{project.region}</div>
//                     <div className="text-gray-700 mb-3">{project.focus}</div>
//                     <div className="text-sm text-gray-600 mb-3">{project.status}</div>
//                     <div className="text-cyan-600 font-semibold">{project.communities} communities engaged</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Success Stories Section */}
//       {activeTab === 'stories' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Community Development Success Stories</h2>
//               <p className="text-xl text-gray-600">Inspiring community transformations made possible by development programs</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {successStories.map((story, index) => (
//                 <div key={index} className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 group border border-cyan-100">
//                   <div className="text-center mb-6">
//                     <div className="w-20 h-20 bg-gradient-to-r from-[#00B8C8] to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
//                       {story.initials}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
//                     <p className="text-[#00B8C8] font-semibold">{story.community}</p>
//                   </div>
                  
//                   <p className="text-gray-600 italic mb-6 leading-relaxed">"{story.story}"</p>
                  
//                   <div className="bg-cyan-50 rounded-2xl p-4">
//                     <div className="text-sm text-gray-600 mb-2">Community impact:</div>
//                     <div className="font-semibold text-cyan-700">{story.impact}</div>
//                     <div className="text-xs text-gray-500 mt-2">Supported by {story.supporters} community donors</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Donation Section */}
//       {activeTab === 'donate' && (
//         <section className="py-20 bg-gradient-to-r from-[#00B8C8] to-cyan-600">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//             <h2 className="text-5xl font-bold mb-6">Invest in Community Development</h2>
//             <p className="text-xl mb-12 opacity-90">Your support creates lasting change through comprehensive community programs</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//               {donationOptions.map((option, index) => (
//                 <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
//                   <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
//                   <p className="text-cyan-100 mb-6">{option.description}</p>
//                   <div className="text-yellow-300 text-lg font-bold mb-4">{option.impact}</div>
//                   <button 
//                     onClick={() => handleDonate(option.amount)}
//                     className="w-full bg-[#00B8C8] text-white py-4 rounded-2xl font-bold hover:bg-cyan-600 transition-colors duration-300"
//                   >
//                     Donate ${option.amount}
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Custom Donation */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
//               <h3 className="text-3xl font-bold mb-4">Custom Community Development Investment</h3>
//               <p className="text-cyan-100 mb-6">Choose any amount to support sustainable community development programs</p>
              
//               <div className="max-w-md mx-auto">
//                 <div className="flex items-center bg-white rounded-2xl p-4 mb-6">
//                   <span className="text-gray-500 mr-2 text-xl">$</span>
//                   <input
//                     type="number"
//                     value={donationAmount}
//                     onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
//                     className="flex-1 text-3xl font-bold text-gray-900 outline-none"
//                     min="1"
//                     placeholder="Enter amount"
//                   />
//                 </div>
                
//                 <button className="w-full bg-[#00B8C8] text-white py-5 rounded-2xl font-bold text-xl hover:bg-cyan-600 hover:shadow-2xl transition-all duration-300 mb-4">
//                   SUPPORT COMMUNITY DEVELOPMENT: ${donationAmount}
//                 </button>
                
//                 <p className="text-yellow-200 text-sm">
//                   Your community investment will be directed to the most critical development programs
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Volunteer Section */}
//       {activeTab === 'volunteer' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Join Our Community Development Mission</h2>
//               <p className="text-xl text-gray-600">Be part of creating sustainable change in communities worldwide</p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-900 mb-6">Community Development Roles</h3>
//                 <div className="space-y-6">
//                   {volunteerRoles.map((role, index) => (
//                     <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100">
//                       <div className="flex items-start justify-between mb-4">
//                         <h4 className="text-xl font-bold text-[#00B8C8]">{role.title}</h4>
//                         <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold">
//                           {role.type}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-4">{role.description}</p>
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm text-gray-500">{role.commitment}</span>
//                         <button className="bg-gradient-to-r from-[#00B8C8] to-cyan-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors duration-300">
//                           Join Community Team
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-[#00B8C8] to-cyan-500 rounded-3xl p-8 text-white">
//                 <h3 className="text-3xl font-bold mb-6">Community Partnership Programs</h3>
//                 <p className="text-cyan-100 mb-6">Collaborate with us to create sustainable community impact</p>
                
//                 <div className="space-y-4 mb-8">
//                   {partnershipPrograms.map((program, index) => (
//                     <div key={index} className="flex items-center p-4 bg-white/10 rounded-2xl">
//                       <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4"></div>
//                       <div>
//                         <div className="font-semibold">{program.name}</div>
//                         <div className="text-yellow-200 text-sm">{program.description}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <button className="w-full bg-white text-[#00B8C8] py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
//                   Explore Community Partnerships
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Community Footer CTA */}
//       <section className="py-16 bg-[#00B8C8] text-white">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold mb-4">Build Stronger Communities Together</h2>
//           <p className="text-xl mb-8 opacity-90">Your support creates sustainable opportunities and transforms communities</p>
//           <button 
//             onClick={() => handleDonate(100)}
//             className="bg-cyan-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-cyan-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//           >
//             INVEST IN COMMUNITY DEVELOPMENT
//           </button>
//           <p className="text-yellow-200 text-sm mt-4">
//             Every donation helps build self-sufficient, thriving communities for generations to come
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// // Enhanced Data with Community Development Keywords
// const developmentPrograms = [
//   {
//     category: 'COMMUNITY EDUCATION',
//     title: 'Vocational Training Centers',
//     description: 'Establishing community-based training centers that provide practical skills for sustainable livelihoods and local economic development.',
//     features: [
//       'Community skills development',
//       'Local business training',
//       'Digital literacy programs',
//       'Entrepreneurship support'
//     ],
//     impact: {
//       communities: '45',
//       people: '12,500+'
//     },
//     donationSuggestion: 75
//   },
//   {
//     category: 'ECONOMIC DEVELOPMENT',
//     title: 'Small Business Incubation',
//     description: 'Supporting local community entrepreneurs with seed funding, mentorship, and resources to build sustainable local businesses.',
//     features: [
//       'Community micro-loan programs',
//       'Local business mentorship',
//       'Market access support',
//       'Financial literacy training'
//     ],
//     impact: {
//       communities: '32',
//       people: '8,200+'
//     },
//     donationSuggestion: 100
//   },
//   {
//     category: 'COMMUNITY INFRASTRUCTURE',
//     title: 'Community Resource Centers',
//     description: 'Building multi-purpose community centers that serve as hubs for education, healthcare, and local community gatherings.',
//     features: [
//       'Community multi-purpose facilities',
//       'Local clean water access',
//       'Community renewable energy',
//       'Neighborhood digital connectivity'
//     ],
//     impact: {
//       communities: '28',
//       people: '15,000+'
//     },
//     donationSuggestion: 250
//   },
//   {
//     category: 'COMMUNITY AGRICULTURE',
//     title: 'Sustainable Farming Initiatives',
//     description: 'Promoting community climate-resilient agriculture and local food security through modern farming techniques and community gardens.',
//     features: [
//       'Community farming training',
//       'Local seed distribution',
//       'Community irrigation systems',
//       'Local market linkage support'
//     ],
//     impact: {
//       communities: '38',
//       people: '9,800+'
//     },
//     donationSuggestion: 50
//   },
//   {
//     category: 'COMMUNITY HEALTH',
//     title: 'Community Health Programs',
//     description: 'Improving community healthcare access and promoting local wellness through community health workers and preventive care initiatives.',
//     features: [
//       'Community health education',
//       'Local preventive care programs',
//       'Community maternal health',
//       'Neighborhood nutrition education'
//     ],
//     impact: {
//       communities: '41',
//       people: '18,300+'
//     },
//     donationSuggestion: 60
//   },
//   {
//     category: 'YOUTH DEVELOPMENT',
//     title: 'Youth Leadership Programs',
//     description: 'Empowering young community members through leadership training, education support, and civic engagement opportunities.',
//     features: [
//       'Community leadership development',
//       'Local educational scholarships',
//       'Community civic engagement',
//       'Neighborhood career guidance'
//     ],
//     impact: {
//       communities: '35',
//       people: '6,500+'
//     },
//     donationSuggestion: 40
//   }
// ];

// const impactMetrics = [
//   {
//     area: 'Community Economic Empowerment',
//     progress: 78,
//     description: 'Increase in community household incomes through local business development'
//   },
//   {
//     area: 'Community Education Access',
//     progress: 85,
//     description: 'Community children enrolled in schools and vocational training programs'
//   },
//   {
//     area: 'Community Healthcare Access',
//     progress: 72,
//     description: 'Communities with improved local healthcare facilities and services'
//   },
//   {
//     area: 'Community Infrastructure',
//     progress: 65,
//     description: 'Communities with upgraded essential community infrastructure'
//   }
// ];

// const annualImpact = [
//   { metric: 'Community Businesses', value: '245+', description: 'Local enterprises launched' },
//   { metric: 'Community Jobs Created', value: '1,250+', description: 'Sustainable local employment' },
//   { metric: 'Community Students', value: '3,800+', description: 'Education and training beneficiaries' },
//   { metric: 'Community Families', value: '8,500+', description: 'Local households impacted' }
// ];

// const activeProjects = [
//   { region: 'East Africa', focus: 'Community Agricultural Development', status: 'Active - Year 2', communities: 15 },
//   { region: 'South Asia', focus: 'Community Education & Skills', status: 'Active - Year 3', communities: 22 },
//   { region: 'Latin America', focus: 'Community Economic Empowerment', status: 'Launching Phase', communities: 8 }
// ];

// const successStories = [
//   {
//     name: 'Maria Santos',
//     initials: 'MS',
//     community: 'Rural Philippines',
//     story: 'The community vocational training program gave me the skills to start my own tailoring business. Now I employ three other women from my village and we can support our families through community development.',
//     impact: 'Community business creation & job development',
//     supporters: 45
//   },
//   {
//     name: 'James Omondi',
//     initials: 'JO',
//     community: 'Kenya Highlands',
//     story: 'With the community sustainable farming training, our neighborhood now produces enough food for ourselves and surplus to sell at market. We have community food security and extra income.',
//     impact: 'Community agricultural transformation',
//     supporters: 68
//   },
//   {
//     name: 'Lena Petrov',
//     initials: 'LP',
//     community: 'Eastern Europe',
//     story: 'The community resource center became a hub for learning and connection. My children can access computers for school, and we have a safe community place to gather and learn.',
//     impact: 'Community infrastructure development',
//     supporters: 92
//   }
// ];

// const donationOptions = [
//   {
//     title: 'Community Skills Fund',
//     amount: 75,
//     description: 'Provides vocational training for one community member',
//     impact: 'Creates 1 skilled community worker'
//   },
//   {
//     title: 'Community Business Kit',
//     amount: 150,
//     description: 'Supports a local micro-enterprise startup package',
//     impact: 'Launches 1 community business'
//   },
//   {
//     title: 'Community Garden',
//     amount: 500,
//     description: 'Establishes sustainable food production for a community',
//     impact: 'Feeds 20 community families'
//   },
//   {
//     title: 'Community Education Center',
//     amount: 1000,
//     description: 'Funds learning resources for community development',
//     impact: 'Educates 50+ community children'
//   }
// ];

// const volunteerRoles = [
//   {
//     title: 'Community Development Specialist',
//     type: 'Field Work',
//     description: 'Work directly with communities to assess needs and implement community development projects',
//     commitment: '6+ month commitment'
//   },
//   {
//     title: 'Community Skills Instructor',
//     type: 'Education',
//     description: 'Teach vocational skills and community business development in local training centers',
//     commitment: 'Flexible schedule'
//   },
//   {
//     title: 'Community Project Coordinator',
//     type: 'Management',
//     description: 'Oversee community development projects and ensure successful community implementation',
//     commitment: 'Remote opportunity available'
//   }
// ];

// const partnershipPrograms = [
//   { name: 'Corporate Community Partnerships', description: 'Business-led community development initiatives' },
//   { name: 'University Community Collaboration', description: 'Academic institutions supporting community research' },
//   { name: 'Local Government Partnerships', description: 'Collaborative development with community authorities' },
//   { name: 'Community Development Agencies', description: 'Joint projects with community organizations' }
// ];

"use client"

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// --- Global Theme Colors (Strictly enforced: Teal and Pink) ---
const PRIMARY_BASE = 'teal-700'; // Used for structural elements, primary text
const ACCENT_BASE = 'pink-700'; // Used for key success indicators and urgent CTAs

// --- Data Structure for Community Projects ---
const communityProjects = [
  {
    id: 1,
    year: 'Phase I',
    title: 'Local Empowerment Grants',
    summary: 'Provided seed funding and mentorship to 12 small businesses focused on local services and sustainable employment.',
    details: 'The initial phase focused on identifying and funding high-potential, community-led enterprises. We dispersed $150,000 in non-repayable grants, focusing on women and youth entrepreneurs. This led to the creation of 35 new local jobs.',
    impact: '35 New Jobs Created',
    status: 'Completed',
  },
  {
    id: 2,
    year: 'Phase II',
    title: 'Digital Literacy & Connectivity Hub',
    summary: 'Established two community technology centers offering free high-speed internet access and structured training programs.',
    details: 'We refurbished two unused community halls, equipping them with 25 computers each. Over 800 residents participated in basic and advanced digital literacy courses, significantly closing the local digital divide. We also negotiated reduced-cost internet plans for low-income families.',
    impact: '800+ Residents Trained',
    status: 'Completed',
  },
  {
    id: 3,
    year: 'Phase III',
    title: 'Green Spaces Initiative',
    summary: 'Partnering with local government to revitalize a central park and install solar lighting in three key residential areas.',
    details: 'This phase is focused on improving the physical environment. The park revitalization includes new playground equipment, walking paths, and native drought-resistant landscaping. The solar lighting project aims to increase neighborhood safety while reducing public energy costs.',
    impact: 'Solar Lights Installed',
    status: 'In Progress',
  },
  {
    id: 4,
    year: 'Phase IV',
    title: 'Future Leaders Mentorship Program',
    summary: 'Launching a year-long mentorship program connecting local high school students with industry professionals and civic leaders.',
    details: 'The program will start with 50 students selected through an application process. Mentors will meet with students monthly, focusing on career planning, public speaking, and civic engagement. The goal is to build a strong pipeline of local leadership.',
    impact: 'Recruitment Opens Next Quarter',
    status: 'Planned',
  },
];

const impactMetrics = [
    { label: 'Total Investment Disbursed', value: '$4.2M', icon: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM1 12C1 5.4 6.4 1 13 1s12 4.4 12 11-5.4 11-12 11S1 18.6 1 12z', color: PRIMARY_BASE },
    { label: 'Residents Impacted Directly', value: '1,500+', icon: 'M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm7 8h-3a2 2 0 0 0-2 2v2h7v-2a2 2 0 0 0-2-2zM4 15h3a2 2 0 0 0 2-2v-3H4v3a2 2 0 0 0 2 2z', color: ACCENT_BASE },
    { label: 'Active Projects (Phase III & IV)', value: '2 of 4', icon: 'M16 12h-3V5h-2v7H8l4 4 4-4zM2 20h20v2H2z', color: PRIMARY_BASE },
];

// --- Helper Component 1: Section wrapper with animation (Staggered Fade-in) ---
const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        inView 
          ? 'opacity-100 translate-y-0 opacity-100' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Helper Component 2: Project Detail Modal ---
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75 transition-opacity"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className={`p-6 sm:p-8 bg-${ACCENT_BASE} rounded-t-2xl text-white`}>
          <h3 className="text-3xl font-extrabold">{project.title}</h3>
          <p className="mt-1 text-sm opacity-90">{project.year} Focus</p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-xl font-semibold text-gray-800">{project.summary}</p>
          <hr className="border-gray-200" />
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-700">In-Depth Progress:</h4>
            <p className="text-gray-600 leading-relaxed">{project.details}</p>
          </div>

          <div className={`p-4 rounded-xl bg-${PRIMARY_BASE}/10 border border-${PRIMARY_BASE}/30`}>
             <p className={`font-bold text-${PRIMARY_BASE}`}>Current Impact Focus:</p>
             <p className="text-lg font-mono text-gray-700">{project.impact}</p>
          </div>
          
          <button
            onClick={onClose}
            className={`w-full py-3 mt-4 text-white bg-${PRIMARY_BASE} hover:bg-teal-800 font-bold rounded-lg transition-colors`}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Helper Component 3: Data Metric Card ---
const MetricCard = ({ metric, delay }) => (
    <AnimatedSection delay={delay} className="w-full">
        <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-gray-200 transition-all hover:border-gray-300 flex items-start space-x-4 h-full">
            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-${metric.color}/10`}>
                <svg className={`w-6 h-6 text-${metric.color}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d={metric.icon} />
                </svg>
            </div>
            <div>
                <p className="text-3xl font-extrabold text-gray-900">{metric.value}</p>
                <p className="text-sm font-semibold text-gray-500 mt-1">{metric.label}</p>
            </div>
        </div>
    </AnimatedSection>
);

// --- Helper Component 4: Project Grid Row (Table Hybrid) ---
const ProjectRow = ({ project, onSelect, index }) => {
    const isPlanned = project.status === 'Planned';
    const statusColor = project.status === 'Completed' ? PRIMARY_BASE : project.status === 'In Progress' ? ACCENT_BASE : 'gray-400';
    const statusBg = project.status === 'Completed' ? `${PRIMARY_BASE}/10` : project.status === 'In Progress' ? `${ACCENT_BASE}/10` : 'bg-gray-200';

    return (
        <AnimatedSection delay={100 + index * 100} className="grid grid-cols-12 gap-4 py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => onSelect(project)}>
            
            {/* Year / Phase */}
            <div className="col-span-2 text-sm font-bold text-gray-700">{project.year}</div>

            {/* Title / Summary */}
            <div className="col-span-4">
                <p className="text-base font-semibold text-gray-900">{project.title}</p>
                <p className="text-xs text-gray-500 mt-1 truncate">{project.summary}</p>
            </div>

            {/* Impact */}
            <div className="col-span-3 text-sm text-gray-600 font-medium">{project.impact}</div>
            
            {/* Status */}
            <div className="col-span-2 flex items-center">
                <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${statusBg} text-${statusColor}`}>
                    {project.status}
                </span>
            </div>

            {/* Action Button */}
            <div className="col-span-1 flex justify-end">
                <button
                    className={`text-sm font-semibold text-gray-500 hover:text-${PRIMARY_BASE} transition-colors p-1 rounded-full`}
                    title="View Details"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </AnimatedSection>
    );
};


// --- Main Application Component ---
export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      
      {/* Modal is rendered outside the main scroll flow */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* 1. Hero Section - Clean Header */}
      <div className={`bg-white pt-16 pb-12 shadow-sm`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0}>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                    Community Development <span className={`text-${PRIMARY_BASE}`}>Dashboard</span>
                </h1>
                <p className="mt-3 text-xl text-gray-600 max-w-3xl">
                    Tracking progress and measuring impact across our four pillars of generational resilience.
                </p>
            </AnimatedSection>
        </div>
      </div>
      
      {/* 2. Key Metrics Grid */}
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className={`text-2xl font-bold text-gray-800 mb-6 border-b-2 border-${PRIMARY_BASE}/50 pb-2`}>
                Program Wide Impact Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {impactMetrics.map((metric, index) => (
                    <MetricCard key={index} metric={metric} delay={100 + index * 100} />
                ))}
            </div>
        </div>
      </div>
      
      {/* 3. Core Projects - Table Hybrid Grid */}
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className={`text-2xl font-bold text-gray-800 mb-6 border-b-2 border-${ACCENT_BASE}/50 pb-2`}>
                Project Status Tracker
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Table Header (Grid) */}
                <div className={`grid grid-cols-12 gap-4 py-3 px-6 text-xs font-bold uppercase tracking-wider text-white bg-${PRIMARY_BASE} rounded-t-xl`}>
                    <div className="col-span-2">Phase</div>
                    <div className="col-span-4">Project Title</div>
                    <div className="col-span-3">Key Impact</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-1"></div>
                </div>

                {/* Project Rows */}
                {communityProjects.map((project, index) => (
                    <ProjectRow 
                        key={project.id} 
                        project={project} 
                        onSelect={setSelectedProject}
                        index={index}
                    />
                ))}
            </div>
        </div>
      </div>
      
      {/* 4. Call to Action / Footer - Focus on partnership */}
      <div className={`py-16 bg-${ACCENT_BASE}`}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection delay={100}>
                <h2 className="text-3xl font-extrabold text-white mb-4">Invest in Lasting Change</h2>
                <p className="text-lg text-pink-100 mb-8">
                    Discuss opportunities to partner with us and drive the next phase of community development initiatives.
                </p>
                <button
                    className={`inline-block bg-white hover:bg-gray-100 text-${ACCENT_BASE} font-extrabold py-3 px-8 rounded-full shadow-xl transition duration-300 transform hover:scale-[1.03]`}
                >
                    Schedule a Partnership Call
                </button>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
