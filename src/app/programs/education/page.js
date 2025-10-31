// // app/programs/education/page.jsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';

// export default function EducationSupport() {
//   const [activeTab, setActiveTab] = useState('programs');
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const sectionRefs = useRef({});

//   useEffect(() => {
//     setIsVisible(true);
    
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // SEO Keywords for Education Non-Profit
//   const seoKeywords = [
//     "education support programs", "non-profit education", "student scholarships",
//     "educational opportunities", "learning initiatives", "academic support",
//     "youth education", "community learning", "educational resources",
//     "after-school programs", "STEM education", "digital literacy",
//     "educational equity", "learning access", "scholarship programs",
//     "educational development", "student mentorship", "academic success",
//     "educational empowerment", "learning pathways"
//   ];

//   // Custom cursor effect
//   const cursorStyle = {
//     left: `${mousePosition.x}px`,
//     top: `${mousePosition.y}px`,
//   };

//   return (
//     <div className="min-h-screen bg-[#00B8C8] overflow-hidden">
//       {/* SEO Keywords Meta */}
//       <div className="hidden">
//         {seoKeywords.join(", ")}
//       </div>

//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00B8C8]/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00B8C8]/20 rounded-full blur-2xl animate-pulse delay-500"></div>
//       </div>

//       {/* Custom Cursor */}
//       <div 
//         className="fixed w-8 h-8 bg-gradient-to-r from-[#00B8C8] to-cyan-600 rounded-full pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
//         style={cursorStyle}
//       >
//         <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
//       </div>

//       {/* Header Section with Parallax */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-[#00B8C8]"></div>
        
//         {/* Animated Background Shapes */}
//         <div className="absolute inset-0">
//           {[...Array(15)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-4 h-4 bg-[#00B8C8]/20 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animation: `float ${3 + i % 4}s ease-in-out infinite ${i * 0.2}s`
//               }}
//             ></div>
//           ))}
//         </div>

//         <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
//           <div className={`transition-all duration-1000 transform ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
//               <div className="w-2 h-2 bg-[#00B8C8] rounded-full animate-ping mr-2"></div>
//               <span className="text-sm font-medium">Transforming Lives Through Education Support</span>
//             </div>
            
//             <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight">
//               Education
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
//                 Support Programs
//               </span>
//             </h1>
            
//             <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
//               Empowering student success through <span className="text-[#00B8C8] font-semibold">innovative learning programs</span>, 
//               personalized academic support, and comprehensive educational resources
//             </p>

//             {/* Animated Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
//               {[
//                 { number: '15,000+', label: 'Students Supported', delay: 0 },
//                 { number: '200+', label: 'Learning Centers', delay: 200 },
//                 { number: '95%', label: 'Academic Success Rate', delay: 400 }
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 group"
//                   style={{
//                     animationDelay: `${stat.delay}ms`,
//                     animation: `slideUp 1s ease-out ${stat.delay}ms both`
//                   }}
//                 >
//                   <div className="text-4xl md:text-5xl font-bold text-[#00B8C8] mb-2 group-hover:scale-110 transition-transform duration-300">
//                     {stat.number}
//                   </div>
//                   <div className="text-cyan-100 font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button className="group relative bg-gradient-to-r from-[#00B8C8] to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
//                 <span className="relative z-10">Explore Education Programs</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
//               </button>
              
//               <button className="group relative border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
//                 <span className="relative z-10">Student Success Stories</span>
//                 <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </section>

//       {/* Navigation Tabs with Enhanced UI */}
//       <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-cyan-100/50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex overflow-x-auto py-4">
//             {[
//               { id: 'programs', label: 'Education Programs', icon: '🎓' },
//               { id: 'impact', label: 'Academic Impact', icon: '📊' },
//               { id: 'stories', label: 'Student Success', icon: '🌟' },
//               { id: 'resources', label: 'Learning Resources', icon: '📚' },
//               { id: 'involve', label: 'Support Education', icon: '🤝' }
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex-shrink-0 flex items-center px-6 py-3 font-medium transition-all duration-500 rounded-2xl mx-1 ${
//                   activeTab === tab.id
//                     ? 'bg-gradient-to-r from-[#00B8C8] to-cyan-600 text-white shadow-lg transform scale-105'
//                     : 'text-gray-600 hover:text-[#00B8C8] hover:bg-cyan-50'
//                 }`}
//               >
//                 <span className="text-lg mr-2">{tab.icon}</span>
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Programs Section */}
//       {activeTab === 'programs' && (
//         <section className="py-20 relative">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-20">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#00B8C8] to-cyan-600 bg-clip-text text-transparent">
//                 Comprehensive Education Programs
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 Innovative educational initiatives and academic support programs designed to foster 
//                 student success, digital literacy, and lifelong learning skills
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//               {enhancedPrograms.map((program, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden hover:-translate-y-4"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   {/* Gradient Border Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#00B8C8] to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                  
//                   <div className="relative z-10 p-8">
//                     {/* Icon with Animation */}
//                     <div className="relative mb-6">
//                       <div className="w-20 h-20 bg-gradient-to-br from-[#00B8C8] to-cyan-600 rounded-2xl flex items-center justify-center text-3xl text-white group-hover:rotate-12 transition-transform duration-500">
//                         {program.icon}
//                       </div>
//                       <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#00B8C8] rounded-full flex items-center justify-center text-white text-sm font-bold animate-pulse">
//                         {program.badge}
//                       </div>
//                     </div>
                    
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00B8C8] transition-colors duration-300">
//                       {program.title}
//                     </h3>
                    
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {program.description}
//                     </p>
                    
//                     {/* Features with Hover Effects */}
//                     <div className="space-y-3 mb-8">
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
                    
//                     {/* Animated Button */}
//                     <button className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-[#00B8C8] to-cyan-600 text-white py-4 rounded-xl font-semibold transition-all duration-500 hover:shadow-xl">
//                       <span className="relative z-10 flex items-center justify-center">
//                         Explore Education Program
//                         <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Enhanced Impact Section */}
//       {activeTab === 'impact' && (
//         <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 text-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-20">
//               <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
//                 Educational Impact Metrics
//               </h2>
//               <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
//                 Data-driven results showcasing the transformative power of our education support programs
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-8">
//                 {impactMetrics.map((metric, index) => (
//                   <div
//                     key={index}
//                     className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
//                   >
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-xl font-semibold text-cyan-200">{metric.title}</h3>
//                       <span className="text-2xl font-bold text-[#00B8C8]">{metric.value}</span>
//                     </div>
//                     <div className="w-full bg-white/10 rounded-full h-3">
//                       <div
//                         className="bg-gradient-to-r from-[#00B8C8] to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: metric.percentage }}
//                       ></div>
//                     </div>
//                     <p className="text-cyan-100 text-sm mt-3">{metric.description}</p>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-[#00B8C8]/20 to-cyan-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
//                   <h3 className="text-2xl font-bold text-white mb-6">Academic Growth</h3>
//                   <div className="space-y-6">
//                     {growthMetrics.map((growth, index) => (
//                       <div key={index} className="flex items-center justify-between">
//                         <span className="text-cyan-200">{growth.label}</span>
//                         <span className="text-white font-bold text-lg">{growth.value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Enhanced Stories Section */}
//       {activeTab === 'stories' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-20">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Student Success Stories</h2>
//               <p className="text-xl text-gray-600">Real stories of academic transformation and educational achievement</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {successStories.map((story, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
//                 >
//                   <div className="relative h-48 overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-br from-[#00B8C8] to-cyan-600"></div>
//                     <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/20">
//                       {story.icon}
//                     </div>
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <h3 className="text-xl font-bold text-white">{story.name}</h3>
//                       <p className="text-cyan-100">{story.role}</p>
//                     </div>
//                   </div>
                  
//                   <div className="p-6">
//                     <p className="text-gray-600 italic mb-6 leading-relaxed">"{story.quote}"</p>
                    
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <div className="w-10 h-10 bg-gradient-to-br from-[#00B8C8] to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
//                           {story.initials}
//                         </div>
//                         <div className="ml-3">
//                           <div className="font-semibold text-gray-900">{story.name}</div>
//                           <div className="text-sm text-[#00B8C8]">{story.achievement}</div>
//                         </div>
//                       </div>
                      
//                       <div className="text-amber-400 text-2xl">
//                         {'★'.repeat(5)}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Enhanced Resources Section */}
//       {activeTab === 'resources' && (
//         <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-20">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Educational Resources</h2>
//               <p className="text-xl text-gray-600">Comprehensive learning materials and academic support tools</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {educationalResources.map((resource, index) => (
//                 <div
//                   key={index}
//                   className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-br from-[#00B8C8] to-cyan-600 rounded-xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
//                     {resource.icon}
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-3">{resource.title}</h3>
//                   <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
//                   <button className="text-[#00B8C8] font-semibold text-sm hover:text-cyan-700 transition-colors duration-300">
//                     Access Resources →
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Enhanced CTA Section */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#00B8C8] to-cyan-700"></div>
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
        
//         <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
//           <h2 className="text-5xl font-bold mb-6">Support Student Success?</h2>
//           <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
//             Join our education initiative and help us create academic opportunities for students in need
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <button className="group relative bg-white text-[#00B8C8] px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
//               <span className="relative z-10">Support Education</span>
//               <div className="absolute inset-0 bg-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
            
//             <button className="group relative border-2 border-white text-white px-12 py-5 rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
//               <span className="relative z-10">Volunteer as Mentor</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
        
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Enhanced Data with Education Keywords
// const enhancedPrograms = [
//   {
//     icon: '🎓',
//     badge: 'NEW',
//     title: 'Academic Scholarship Program',
//     description: 'Comprehensive scholarship support for underprivileged students pursuing higher education and vocational training.',
//     features: [
//       'Full Tuition Coverage',
//       'Mentorship Programs',
//       'Career Counseling',
//       'Internship Opportunities'
//     ]
//   },
//   {
//     icon: '💻',
//     badge: 'HOT',
//     title: 'Digital Literacy Initiative',
//     description: 'Technology education programs providing essential digital skills and access to learning resources.',
//     features: [
//       'Computer Skills Training',
//       'Online Learning Platforms',
//       'Coding & Programming',
//       'Digital Citizenship'
//     ]
//   },
//   {
//     icon: '📚',
//     badge: 'POPULAR',
//     title: 'After-School Learning Centers',
//     description: 'Safe learning environments with tutoring, homework help, and enrichment activities for K-12 students.',
//     features: [
//       'Homework Assistance',
//       'STEM Activities',
//       'Reading Programs',
//       'College Prep'
//     ]
//   }
// ];

// const impactMetrics = [
//   {
//     title: 'Student Academic Success',
//     value: '95%',
//     percentage: '95%',
//     description: 'Students showing significant academic improvement'
//   },
//   {
//     title: 'College Acceptance Rate',
//     value: '87%',
//     percentage: '87%',
//     description: 'High school graduates accepted into colleges'
//   },
//   {
//     title: 'Digital Literacy Rate',
//     value: '92%',
//     percentage: '92%',
//     description: 'Students mastering essential digital skills'
//   },
//   {
//     title: 'Program Completion',
//     value: '88%',
//     percentage: '88%',
//     description: 'Students successfully completing our programs'
//   }
// ];

// const growthMetrics = [
//   { label: 'Student Enrollment', value: '+45%' },
//   { label: 'Scholarship Awards', value: '+32%' },
//   { label: 'Learning Centers', value: '+68%' },
//   { label: 'Community Partnerships', value: '+56%' }
// ];

// const successStories = [
//   {
//     name: 'Maria Gonzalez',
//     role: 'College Scholarship Recipient',
//     initials: 'MG',
//     icon: '👩‍🎓',
//     quote: 'The scholarship program made college possible for me. Now I\'m the first in my family to attend university.',
//     achievement: 'First-Generation Student'
//   },
//   {
//     name: 'James Wilson',
//     role: 'STEM Program Graduate',
//     initials: 'JW',
//     icon: '👨‍💻',
//     quote: 'The coding bootcamp opened doors to a tech career I never thought possible. Now I work as a software developer.',
//     achievement: 'Software Engineer'
//   },
//   {
//     name: 'Sofia Chen',
//     role: 'Literacy Program Success',
//     initials: 'SC',
//     icon: '📖',
//     quote: 'From struggling reader to book lover - the literacy program transformed my relationship with learning.',
//     achievement: 'Academic Excellence Award'
//   }
// ];

// const educationalResources = [
//   {
//     icon: '📖',
//     title: 'Learning Materials',
//     description: 'Comprehensive educational resources and study guides'
//   },
//   {
//     icon: '🎥',
//     title: 'Video Tutorials',
//     description: 'Interactive learning videos and online courses'
//   },
//   {
//     icon: '📝',
//     title: 'Study Plans',
//     description: 'Structured academic plans and study schedules'
//   },
//   {
//     icon: '🤝',
//     title: 'Tutor Matching',
//     description: 'Connect with qualified tutors and mentors'
//   }
// ];


"use client"

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// --- Global Theme Colors ---
// Strictly using the requested teal-600and pink-700
const TEAL_BASE = 'teal-700';
const PINK_BASE = 'pink-700'; 

// --- Helper Component 1: Section wrapper with animation ---
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
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Helper Component 2: Submission Notification Banner (Solid Color) ---
const NotificationBanner = ({ status }) => {
  if (status === 'success') {
    return (
      <AnimatedSection className={`p-4 mb-6 text-sm text-white rounded-xl bg-${TEAL_BASE} shadow-xl shadow-${TEAL_BASE}/50 border border-${TEAL_BASE}/50`}>
        <span className="font-bold">Success!</span> Your support request has been recorded. We will connect with you soon.
      </AnimatedSection>
    );
  }
  if (status === 'error') {
    return (
      <AnimatedSection className={`p-4 mb-6 text-sm text-white rounded-xl bg-${PINK_BASE} shadow-xl shadow-${PINK_BASE}/50 border border-${PINK_BASE}/50`}>
        <span className="font-bold">Error!</span> Failed to process request. Please try again.
      </AnimatedSection>
    );
  }
  return null;
};

// --- Custom Icon Component (using inline SVGs for clarity) ---
const Icon = ({ path, colorClass, size = 6, className = '' }) => (
    <svg className={`w-${size} h-${size} ${colorClass} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path}></path>
    </svg>
);


// --- Main Application Component ---
export default function App() {
  
  // --- Data Definitions and State ---
  const impactMetrics = [
    { value: '1,500+', label: 'Students Empowered', iconPath: "M17 20h5v-3m-7.258-2.585A8.937 8.937 0 0113.75 12H12a6 6 0 00-6-6h-1a6 6 0 00-6 6h1.25a8.937 8.937 0 012.215 2.415M9 16.5V19m0-13v2.5h-1V6m4.25 10.5V19m0-13v2.5h-1V6M16.5 16.5V19m0-13v2.5h-1V6" },
    { value: '$120K', label: 'Allocated Funding', iconPath: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0l-1 5h14l-1-5m-14 0h14" },
    { value: '98%', label: 'Positive Outcomes', iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  const corePrograms = [
    { id: 1, title: "Academic Mentoring", detail: "Personalized, long-term guidance linking students with vetted industry professionals and top educators.", imageText: "Mentoring" },
    { id: 2, title: "Resource Stipends & Tech Grants", detail: "Direct financial support for necessary learning materials, devices, and critical internet connectivity.", imageText: "Grants" },
    { id: 3, title: "Global Skill Workshops", detail: "Interactive sessions on essential non-academic skills: study techniques, financial literacy, and career planning.", imageText: "Workshops" },
  ];

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitStatus === 'loading') return;

    setSubmitStatus('loading');

    // Simulate an API call delay
    setTimeout(() => {
      const success = Math.random() > 0.1;

      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      } else {
        setSubmitStatus('error');
      }

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  // Light Mode Input Styles
  const inputClasses = `w-full p-4 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 rounded-2xl focus:ring-2 focus:ring-${TEAL_BASE} focus:border-${TEAL_BASE} transition-all shadow-sm`;
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2 tracking-wider";
  
  // --- Main Component Render ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased flex justify-center py-20 px-4">
      
      {/* Central Content Container - Large, Smooth Card */}
      <div className="max-w-6xl w-full bg-white rounded-[40px] shadow-2xl shadow-gray-300/60 border border-gray-200 overflow-hidden">
        
        {/* 1. Hero Section - Subtle Light Gradient */}
        <div className={`py-32 text-center relative overflow-hidden`}
             style={{
               backgroundImage: `linear-gradient(135deg, #ffffff 0%, #f3f4f6 50%, rgba(209, 213, 219, 0.4) 100%)`, 
             }}>
          <AnimatedSection>
            <h1 className="text-6xl sm:text-7xl font-extrabold mb-4 tracking-tight text-gray-900 drop-shadow-md">
              <span className={`text-${TEAL_BASE}`}>Future</span> Forward Education
            </h1>
            <p className="text-xl max-w-4xl mx-auto text-gray-600 font-light mt-6">
              A global commitment to educational equity, providing ambitious students with the foundational resources and mentorship they need to thrive.
            </p>
            <a href="#action-center" className={`inline-block mt-14 bg-${PINK_BASE} hover:bg-pink-800 text-white font-extrabold py-4 px-12 rounded-full shadow-2xl shadow-${PINK_BASE}/30 transform hover:scale-[1.03] transition duration-300 tracking-wider`}>
              Invest in a Student &rarr;
            </a>
          </AnimatedSection>
        </div>
        
        {/* 2. Impact Section - Clean Metrics */}
        <div className="py-24 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection delay={100} className="text-center mb-16">
              <h2 className={`text-4xl font-extrabold text-gray-900 mb-3`}>Impact By The <span className={`text-${TEAL_BASE}`}>Numbers</span></h2>
              <p className="text-lg text-gray-600">Our measurable commitment to student success and operational transparency.</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactMetrics.map((metric, index) => (
                <AnimatedSection key={index} delay={200 + index * 100}>
                  {/* Smooth Metric Card with Teal Border */}
                  <div className={`p-8 rounded-3xl text-center bg-gray-50 border border-gray-300 transition-all duration-300 hover:border-${TEAL_BASE}/40 hover:bg-white shadow-lg`}>
                    <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-2xl bg-${TEAL_BASE}/10 mb-6 border border-${TEAL_BASE}/20`}>
                      <Icon path={metric.iconPath} colorClass={`text-${TEAL_BASE}`} size={8} />
                    </div>
                    <p className={`text-5xl font-black text-gray-900 mb-1 tracking-tighter`}>{metric.value}</p>
                    <p className="text-base font-semibold text-gray-600">{metric.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Program/Services Section - Elegant Card Gallery */}
        <div className="py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection delay={400} className="text-center mb-16">
              <h2 className={`text-4xl font-extrabold text-gray-900 mb-3`}>Our <span className={`text-${PINK_BASE}`}>Core</span> Initiatives</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">Structured programs tailored to provide direct and lasting educational assistance.</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {corePrograms.map((item, index) => (
                <AnimatedSection key={item.id} delay={500 + index * 100}>
                  {/* Clean card with shadow and smooth corners */}
                  <div className={`h-full bg-white rounded-3xl border border-gray-300 overflow-hidden transition-all duration-300 transform hover:shadow-2xl hover:shadow-pink-700/10`}>
                    
                    {/* Visual Placeholder */}
                    <div className={`h-32 w-full bg-gray-200/50 flex items-center justify-center border-b border-gray-300`}>
                      <span className={`text-xl font-bold text-gray-500`}>
                        {item.imageText} Visualization
                      </span>
                    </div>

                    <div className="p-8">
                      <h3 className="font-extrabold text-gray-900 text-2xl mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-6">{item.detail}</p>
                      
                      <a href="#action-center" className={`inline-block text-sm font-bold text-${TEAL_BASE} hover:text-${PINK_BASE} transition duration-150 border-b border-transparent hover:border-${TEAL_BASE}`}>
                          Explore Program &rarr;
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Action Center (Donation and Form) */}
        <div id="action-center" className="py-24 bg-gray-100">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection delay={700} className="text-center mb-16">
              <h2 className={`text-4xl font-extrabold text-gray-900 mb-3`}>Connect & <span className={`text-${PINK_BASE}`}>Contribute</span></h2>
              <p className="text-lg text-gray-600">Choose how you want to make an impact today, or reach out for support.</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Left Column: CTA/Donation Pitch Card (Pink Accent) */}
              <AnimatedSection delay={800}>
                <div className={`p-10 rounded-3xl bg-white text-gray-900 shadow-xl h-full flex flex-col justify-between border border-${PINK_BASE}/40`}>
                  <div>
                      <h3 className="text-4xl font-black mb-4 tracking-tight leading-snug">
                        Ready to make a <span className={`text-${PINK_BASE}`}>lasting change?</span>
                      </h3>
                      <p className="text-base opacity-90 mb-10 font-light text-gray-600">
                        Every secure donation fuels a student's access to better education, mentorship, and vital technology resources. Join us.
                      </p>
                  </div>
                  <button
                      onClick={() => console.log('Simulating donation link click')}
                      className={`w-full text-white bg-${PINK_BASE} hover:bg-pink-800 font-extrabold py-4 px-6 rounded-2xl shadow-xl shadow-${PINK_BASE}/40 transition duration-300 transform hover:scale-[1.01] tracking-wider uppercase`}
                  >
                      Donate Securely Now
                  </button>
                </div>
              </AnimatedSection>

              {/* Right Column: Academic Support Form Card (Teal Accent) */}
              <AnimatedSection delay={900}>
                <div className={`bg-white p-10 rounded-3xl shadow-xl border border-${TEAL_BASE}/40`}>
                  <h2 className={`text-3xl font-extrabold text-${TEAL_BASE} mb-8 border-b border-gray-300 pb-4`}>Request Program Support</h2>
                  
                  {/* Notification Banner */}
                  <NotificationBanner status={submitStatus} />

                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className={labelClasses}>Full Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} disabled={submitStatus === 'loading'} />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClasses}>Contact Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} disabled={submitStatus === 'loading'} />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className={labelClasses}>Area of Interest/Need</label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClasses} disabled={submitStatus === 'loading'} />
                    </div>

                    {/* Message Area */}
                    <div>
                      <label htmlFor="message" className={labelClasses}>Briefly describe your situation</label>
                      <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className={`${inputClasses} resize-y`} disabled={submitStatus === 'loading'}></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className={`w-full text-white font-bold py-4 px-6 mt-6 rounded-2xl shadow-xl transition-all duration-300 transform 
                        flex items-center justify-center space-x-3 tracking-wider uppercase
                        ${submitStatus === 'loading' 
                          ? 'bg-gray-400 cursor-not-allowed text-gray-700' 
                          : `bg-${TEAL_BASE} hover:bg-teal-800 shadow-${TEAL_BASE}/40`
                        }`}
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <Icon path="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" colorClass="text-white" size={5} className="animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                          <>
                              <span>Submit Support Request</span>
                              <Icon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" colorClass="text-white" size={5} />
                          </>
                      )}
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
