// // app/partner/page.jsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';

// export default function BecomePartner() {
//   const [activeTab, setActiveTab] = useState('ways');
//   const [isVisible, setIsVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     organization: '',
//     contact: '',
//     email: '',
//     phone: '',
//     type: '',
//     cause: '',
//     message: ''
//   });
//   const [animatedStats, setAnimatedStats] = useState({
//     partners: 0,
//     lives: 0,
//     communities: 0
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

//   // SEO Keywords for Partnership Page
//   const seoKeywords = [
//     "become a partner", "partnership opportunities", "corporate partnership",
//     "non-profit partnership", "strategic partnership", "community partnership",
//     "partnership programs", "partner with us", "collaboration opportunities",
//     "partnership benefits", "join as partner", "partnership application",
//     "corporate sponsors", "business partnership", "organization partnership",
//     "partnership network", "partner benefits", "partnership impact",
//     "partner programs", "partnership support"
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

//     increment(185, 0, (val) => setAnimatedStats(prev => ({ ...prev, partners: val })));
//     increment(50000, 0, (val) => setAnimatedStats(prev => ({ ...prev, lives: val })));
//     increment(120, 0, (val) => setAnimatedStats(prev => ({ ...prev, communities: val })));
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Partnership application:', formData);
//     // Handle form submission
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden">
//       {/* SEO Keywords Meta */}
//       <div className="hidden">
//         {seoKeywords.join(", ")}
//       </div>

//       {/* Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00B8C8]/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       {/* Header Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#00B8C8] to-cyan-600">
//         <div className="absolute inset-0 bg-cyan-900/30"></div>
        
//         <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
//           <div className={`transition-all duration-1000 transform ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             {/* Partnership Badge */}
//             <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
//               <span className="text-lg font-medium tracking-wider">PARTNERSHIP OPPORTUNITIES</span>
//             </div>
            
//             {/* Main Heading */}
//             <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
//                 Partnership
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
//                 Programs
//               </span>
//             </h1>
            
//             <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed font-light opacity-90">
//               Join our partnership network to <span className="text-yellow-300 font-semibold">amplify impact</span> and create 
//               lasting change through strategic partnerships and collaborative programs.
//             </p>

//             {/* Partnership Impact Stats */}
//             <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
//               {[
//                 { number: animatedStats.partners, label: 'Partnership Organizations', suffix: '+' },
//                 { number: animatedStats.lives.toLocaleString(), label: 'Lives Impacted', suffix: '+' },
//                 { number: animatedStats.communities, label: 'Partner Communities', suffix: '+' }
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

//             {/* Partnership CTA */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
//               <h3 className="text-2xl font-bold text-white mb-4">Become a Partner Organization</h3>
//               <p className="text-cyan-100 mb-6 text-center">
//                 Your partnership helps us reach more communities and create deeper impact through collaborative programs
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button 
//                   onClick={() => setActiveTab('apply')}
//                   className="bg-[#00B8C8] text-white px-8 py-4 rounded-2xl font-bold hover:bg-cyan-600 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
//                 >
//                   Start Partnership Process
//                 </button>
//                 <button 
//                   onClick={() => setActiveTab('ways')}
//                   className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
//                 >
//                   Explore Partnership Options
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Navigation */}
//       <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-cyan-100 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex overflow-x-auto py-4">
//             {[
//               { id: 'ways', label: 'Partnership Types' },
//               { id: 'benefits', label: 'Partner Benefits' },
//               { id: 'stories', label: 'Partner Success' },
//               { id: 'apply', label: 'Become Partner' },
//               { id: 'faq', label: 'Partnership FAQ' }
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

//       {/* Ways to Partner Section */}
//       {activeTab === 'ways' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Multiple partnership pathways to create meaningful impact through strategic collaboration and shared mission
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {partnershipWays.map((way, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-cyan-100"
//                 >
//                   {/* Header with Gradient */}
//                   <div className="h-3 bg-gradient-to-r from-[#00B8C8] to-cyan-500"></div>
                  
//                   <div className="p-6">
//                     <div className="text-4xl mb-4 text-[#00B8C8]">{way.icon}</div>
                    
//                     <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00B8C8] transition-colors duration-300">
//                       {way.title}
//                     </h3>
                    
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {way.description}
//                     </p>
                    
//                     {/* Impact Metrics */}
//                     <div className="space-y-3 mb-6">
//                       {way.impacts.map((impact, idx) => (
//                         <div key={idx} className="flex items-center text-gray-600">
//                           <div className="w-2 h-2 bg-[#00B8C8] rounded-full mr-3"></div>
//                           <span className="text-sm">{impact}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     {/* Quick Stats */}
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                       <div className="text-center p-3 bg-cyan-50 rounded-xl">
//                         <div className="text-lg font-bold text-[#00B8C8]">{way.stats.partners}</div>
//                         <div className="text-xs text-gray-600">Partnership Organizations</div>
//                       </div>
//                       <div className="text-center p-3 bg-blue-50 rounded-xl">
//                         <div className="text-lg font-bold text-blue-600">{way.stats.impact}</div>
//                         <div className="text-xs text-gray-600">Partnership Impact</div>
//                       </div>
//                     </div>
                    
//                     <button 
//                       onClick={() => setActiveTab('apply')}
//                       className="w-full bg-[#00B8C8] text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
//                     >
//                       Explore Partnership
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Partner Benefits Section */}
//       {activeTab === 'benefits' && (
//         <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Partnership Benefits</h2>
//               <p className="text-xl text-gray-600">Discover the mutual benefits of joining our partnership programs</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {partnerBenefits.map((benefit, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-cyan-100 hover:-translate-y-2"
//                 >
//                   <div className="text-3xl mb-4 text-[#00B8C8] group-hover:scale-110 transition-transform duration-300">
//                     {benefit.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Impact Showcase */}
//             <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-cyan-100">
//               <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Partnership Impact Dashboard</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {impactMetrics.map((metric, index) => (
//                   <div key={index} className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
//                     <div className="text-3xl font-bold text-[#00B8C8] mb-2">{metric.value}</div>
//                     <div className="text-gray-700 font-semibold">{metric.label}</div>
//                     <div className="text-gray-500 text-sm mt-1">{metric.description}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Partner Stories Section */}
//       {activeTab === 'stories' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Partnership Success Stories</h2>
//               <p className="text-xl text-gray-600">Hear from organizations that have partnered with us to create amazing impact</p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {partnerStories.map((story, index) => (
//                 <div key={index} className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 border border-cyan-100 group hover:-translate-y-2">
//                   <div className="flex items-start mb-6">
//                     <div className="w-16 h-16 bg-gradient-to-r from-[#00B8C8] to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4">
//                       {story.initials}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900">{story.organization}</h3>
//                       <p className="text-[#00B8C8] font-semibold">{story.partnershipType}</p>
//                       <p className="text-gray-500 text-sm">{story.duration}</p>
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-600 italic mb-6 leading-relaxed">"{story.quote}"</p>
                  
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-2">Partnership Achievements</h4>
//                       <ul className="space-y-2">
//                         {story.achievements.map((achievement, idx) => (
//                           <li key={idx} className="flex items-center text-sm text-gray-600">
//                             <div className="w-2 h-2 bg-[#00B8C8] rounded-full mr-3"></div>
//                             {achievement}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-[#00B8C8]">{story.impact.people}</div>
//                         <div className="text-xs text-gray-600">Partnership Impact</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-cyan-600">{story.impact.funding}</div>
//                         <div className="text-xs text-gray-600">Partnership Funding</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Application Form Section */}
//       {activeTab === 'apply' && (
//         <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Partnership Application</h2>
//               <p className="text-xl text-gray-600">Join our partnership network and amplify your organizational impact</p>
//             </div>

//             <div className="bg-white rounded-3xl shadow-2xl p-8 border border-cyan-100">
//               <form onSubmit={handleSubmit} className="space-y-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Organization Name *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.organization}
//                       onChange={(e) => handleInputChange('organization', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                       placeholder="Your partnership organization name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Partnership Contact *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.contact}
//                       onChange={(e) => handleInputChange('contact', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                       placeholder="Partnership contact person"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Partnership Email *
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={(e) => handleInputChange('email', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                       placeholder="partnership@organization.org"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Partnership Phone
//                     </label>
//                     <input
//                       type="tel"
//                       value={formData.phone}
//                       onChange={(e) => handleInputChange('phone', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                       placeholder="+1 (555) 000-0000"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Partnership Type *
//                     </label>
//                     <select
//                       required
//                       value={formData.type}
//                       onChange={(e) => handleInputChange('type', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                     >
//                       <option value="">Select partnership type</option>
//                       <option value="corporate">Corporate Partnership</option>
//                       <option value="nonprofit">Non-Profit Partnership</option>
//                       <option value="community">Community Partnership</option>
//                       <option value="strategic">Strategic Partnership</option>
//                       <option value="educational">Educational Partnership</option>
//                       <option value="other">Other Partnership</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Partnership Focus *
//                     </label>
//                     <select
//                       required
//                       value={formData.cause}
//                       onChange={(e) => handleInputChange('cause', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                     >
//                       <option value="">Select partnership focus</option>
//                       <option value="education">Education Partnership</option>
//                       <option value="healthcare">Healthcare Partnership</option>
//                       <option value="emergency">Emergency Partnership</option>
//                       <option value="community">Community Partnership</option>
//                       <option value="all">Comprehensive Partnership</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Partnership Goals & Objectives
//                   </label>
//                   <textarea
//                     value={formData.message}
//                     onChange={(e) => handleInputChange('message', e.target.value)}
//                     rows={4}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                     placeholder="Describe your partnership goals and how you envision our collaboration creating impact together..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-[#00B8C8] text-white py-4 rounded-2xl font-bold text-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
//                 >
//                   Submit Partnership Application
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* FAQ Section */}
//       {activeTab === 'faq' && (
//         <section className="py-20">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Partnership Frequently Asked Questions</h2>
//               <p className="text-xl text-gray-600">Get answers to common questions about our partnership programs</p>
//             </div>

//             <div className="space-y-6">
//               {faqItems.map((faq, index) => (
//                 <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100">
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
//                   <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Footer CTA */}
//       <section className="py-16 bg-[#00B8C8] text-white">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold mb-4">Ready to Become a Partner?</h2>
//           <p className="text-xl mb-8 opacity-90">Join our partnership network creating lasting change through collaborative programs</p>
//           <button 
//             onClick={() => setActiveTab('apply')}
//             className="bg-cyan-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-cyan-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//           >
//             Start Your Partnership Journey
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// // Enhanced Data with Partnership Keywords
// const partnershipWays = [
//   {
//     icon: '💰',
//     title: 'Corporate Partnership',
//     description: 'Establish corporate partnerships to provide financial support for programs and create shared value through business collaboration.',
//     impacts: [
//       'Corporate partnership funding',
//       'Strategic business collaboration',
//       'Employee engagement programs',
//       'Corporate social responsibility'
//     ],
//     stats: {
//       partners: '85+',
//       impact: '25K+'
//     }
//   },
//   {
//     icon: '🤝',
//     title: 'Strategic Partnership',
//     description: 'Develop strategic partnerships where we combine resources and expertise for greater impact and program success.',
//     impacts: [
//       'Strategic partnership planning',
//       'Shared partnership resources',
//       'Co-branded partnership initiatives',
//       'Partnership impact measurement'
//     ],
//     stats: {
//       partners: '45+',
//       impact: '15K+'
//     }
//   },
//   {
//     icon: '🎁',
//     title: 'In-Kind Partnership',
//     description: 'Create in-kind partnerships by donating goods, services, or expertise that support our mission and partnership programs.',
//     impacts: [
//       'Partnership product donations',
//       'Professional partnership expertise',
//       'Partnership equipment support',
//       'Technical partnership support'
//     ],
//     stats: {
//       partners: '62+',
//       impact: '18K+'
//     }
//   },
//   {
//     icon: '👥',
//     title: 'Community Partnership',
//     description: 'Build community partnerships to mobilize local resources and create grassroots impact through collaborative efforts.',
//     impacts: [
//       'Community partnership events',
//       'Local partnership engagement',
//       'Community partnership programs',
//       'Grassroots partnership initiatives'
//     ],
//     stats: {
//       partners: '38+',
//       impact: '8K+'
//     }
//   },
//   {
//     icon: '📢',
//     title: 'Awareness Partnership',
//     description: 'Form awareness partnerships to amplify our message and reach wider audiences through shared communication platforms.',
//     impacts: [
//       'Partnership social media campaigns',
//       'Joint partnership events',
//       'Media partnership opportunities',
//       'Partnership community outreach'
//     ],
//     stats: {
//       partners: '29+',
//       impact: '12K+'
//     }
//   },
//   {
//     icon: '🌍',
//     title: 'Global Partnership',
//     description: 'Establish global partnerships for long-term collaboration on international programs and cross-border impact initiatives.',
//     impacts: [
//       'International partnership programs',
//       'Global partnership planning',
//       'Cross-border partnership funding',
//       'Worldwide partnership advocacy'
//     ],
//     stats: {
//       partners: '15+',
//       impact: '35K+'
//     }
//   }
// ];

// const partnerBenefits = [
//   {
//     icon: '📊',
//     title: 'Partnership Reporting',
//     description: 'Receive detailed partnership reports on collaborative impact and program outcomes'
//   },
//   {
//     icon: '🏆',
//     title: 'Partnership Recognition',
//     description: 'Get featured in partnership communications and receive acknowledgment for collaboration'
//   },
//   {
//     icon: '🔗',
//     title: 'Partnership Network',
//     description: 'Access our partnership network and connect with other collaborative organizations'
//   },
//   {
//     icon: '💡',
//     title: 'Partnership Learning',
//     description: 'Access partnership workshops and resources to enhance collaborative strategies'
//   },
//   {
//     icon: '🤝',
//     title: 'Partnership Support',
//     description: 'Work with dedicated partnership managers for successful collaboration'
//   },
//   {
//     icon: '🎯',
//     title: 'Customized Partnership',
//     description: 'Co-create partnership models that align with organizational partnership goals'
//   },
//   {
//     icon: '📈',
//     title: 'Partnership Measurement',
//     description: 'Access partnership tools to measure and communicate collaborative impact'
//   },
//   {
//     icon: '🌟',
//     title: 'Partnership Stories',
//     description: 'Share compelling partnership stories with stakeholders and communities'
//   }
// ];

// const impactMetrics = [
//   {
//     value: '185+',
//     label: 'Partnership Organizations',
//     description: 'Active partnership collaborations'
//   },
//   {
//     value: '50K+',
//     label: 'Partnership Impact',
//     description: 'Through partnership programs'
//   },
//   {
//     value: '$2.5M+',
//     label: 'Partnership Funding',
//     description: 'Mobilized through partnerships'
//   },
//   {
//     value: '120+',
//     label: 'Partnership Communities',
//     description: 'Served through partnership initiatives'
//   }
// ];

// const partnerStories = [
//   {
//     organization: 'Global Hope Foundation',
//     initials: 'GHF',
//     partnershipType: 'Corporate Partnership',
//     duration: '3 years partnership',
//     quote: 'Our corporate partnership has enabled us to reach 5,000 more children through education programs. The partnership approach has maximized our collaborative impact.',
//     achievements: [
//       '5,000 children through partnership programs',
//       '15 partnership learning centers',
//       'Teacher partnership training programs',
//       '95% partnership success rate'
//     ],
//     impact: {
//       people: '5,000+',
//       funding: '$750K'
//     }
//   },
//   {
//     organization: 'Community Care Network',
//     initials: 'CCN',
//     partnershipType: 'Strategic Partnership',
//     duration: '2 years partnership',
//     quote: 'By combining our healthcare expertise with their community partnership reach, we\'ve created sustainable healthcare access in remote areas.',
//     achievements: [
//       '12 partnership medical clinics',
//       '25,000+ partnership consultations',
//       'Health partnership education programs',
//       '85% partnership satisfaction'
//     ],
//     impact: {
//       people: '25K+',
//       funding: '$1.2M'
//     }
//   }
// ];

// const faqItems = [
//   {
//     question: 'What types of partnership opportunities do you offer?',
//     answer: 'We offer various partnership opportunities including corporate partnerships, strategic partnerships, community partnerships, in-kind partnerships, and global partnerships. Each partnership type is designed to create meaningful impact through collaborative efforts and shared resources.'
//   },
//   {
//     question: 'What is the partnership application process?',
//     answer: 'The partnership process begins with submitting a partnership application. Our partnership team will review your application and schedule a partnership discovery call. We then develop a customized partnership proposal and work together to establish partnership terms and implementation plans.'
//   },
//   {
//     question: 'How do you measure partnership success?',
//     answer: 'We use comprehensive partnership monitoring and evaluation frameworks to track success across all partnership programs. Partners receive regular partnership impact reports with data and stories. We also provide customized partnership reporting based on specific partnership goals and objectives.'
//   },
//   {
//     question: 'Can partnerships be customized to our organization\'s focus?',
//     answer: 'Absolutely! We believe in creating customized partnerships that align with your organization\'s mission and our shared goals. We work closely with partnership organizations to develop tailored partnership programs that maximize impact and create mutual benefit.'
//   }
// ];


"use client"

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// --- Global Theme Colors (Strictly enforced: Teal and Pink) ---
const PRIMARY_BASE = 'teal-600'; // Used for structure, base text, and primary actions
const ACCENT_BASE = 'pink-600'; // Used for urgency, excitement, and calls to action

// --- Data Structure for Volunteer Roles ---
const volunteerRoles = [
  {
    id: 1,
    role: 'Digital Literacy Mentor',
    iconPath: 'M10 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-11-9a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1zM5 7h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm-3 8h19a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z', // Laptop/Device Icon
    commitment: '2-4 hours/week',
    focus: 'Education Phase',
    description: 'Help residents master basic computer skills and navigate online resources at our Connectivity Hubs.',
  },
  {
    id: 2,
    role: 'Small Business Advisor',
    iconPath: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-4h-2v-2h4v6z', // Finance/Growth Icon
    commitment: 'Flexible (project-based)',
    focus: 'Enterprise Phase',
    description: 'Offer expertise in marketing, finance, or operations to local grant recipients to ensure their success.',
  },
  {
    id: 3,
    role: 'Park Revitalization Crew',
    iconPath: 'M14 10h-4v4h4v-4zm-4 7h4v2h-4v-2zm-4-7h4v4H6v-4zm0 7h4v2H6v-2zm12-7h-4v4h4v-4zm0 7h-4v2h4v-2zM3 4v16h18V4H3z', // Grid/Structure Icon
    commitment: '4 hours/month (Saturday)',
    focus: 'Infrastructure Phase',
    description: 'Assist with hands-on projects: planting, painting, and assembling new equipment for community green spaces.',
  },
  {
    id: 4,
    role: 'Mentorship Program Support',
    iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', // People Icon
    commitment: '1 hour/week (remote)',
    focus: 'Leadership Phase',
    description: 'Review student applications, manage communications, or help organize workshops for future local leaders.',
  },
];

// --- Data for Volunteer Process Steps ---
const processSteps = [
    {
        number: 1,
        title: "Submit Application",
        iconPath: "M15 15.75l-1.42 1.42-3.33-3.33-1.42 1.42L7 13.5l3.5-3.5L14 14l1.42-1.42L12.08 9.5l3.5-3.5L16 7l-5 5-1.42-1.42L9 9.5l3.5-3.5L15 8.75l-1.42-1.42z",
        description: "Complete our quick online form detailing your skills, interests, and availability.",
    },
    {
        number: 2,
        title: "Orientation & Training",
        iconPath: "M10 20h4V4h-4v16zM3 17h4v-2H3v2zM17 17h4v-2h-4v2zM3 7h4V5H3v2zM17 7h4V5h-4v2z",
        description: "Attend a brief virtual or in-person session covering our mission, safety protocols, and guidelines.",
    },
    {
        number: 3,
        title: "Role Matching",
        iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11v3H8v2h4v3h2v-3h2v-2h-4V9h-2z",
        description: "We connect you with a project leader based on your application and current community needs.",
    },
    {
        number: 4,
        title: "Start Making Impact",
        iconPath: "M12 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-10C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-8h6v2h-6z",
        description: "Begin your volunteering journey and track your positive contributions to local resilience.",
    },
];

// --- Data for FAQ Section ---
const volunteerFAQ = [
    {
        q: 'What is the minimum time commitment required?',
        a: 'Commitments vary by role, ranging from just 1 hour per week for remote mentorship roles to 4 hours per month for hands-on crew work. Details are listed on each specific role card.',
    },
    {
        q: 'Do I need prior experience or specific skills?',
        a: 'No! Many roles simply require enthusiasm and reliability. For specialized roles (like Business Advisor), we look for relevant professional experience, but we offer training for all other positions.',
    },
    {
        q: 'Are there remote volunteer opportunities?',
        a: 'Yes! Our Digital Literacy Mentors and Mentorship Program Support roles can often be done remotely, allowing you to volunteer from anywhere on a flexible schedule.',
    },
    {
        q: 'How long does the application process take?',
        a: 'The initial application takes less than 10 minutes. Following submission, matching and orientation typically take 1-2 weeks, depending on the role and current program start dates.',
    },
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

// --- Helper Component 2: Volunteer Role Card (Mosaic Style) ---
const VolunteerCard = ({ role, index }) => {
    // Alternate primary/accent colors for visual break in the mosaic
    const color = index % 2 === 0 ? PRIMARY_BASE : ACCENT_BASE;
    const hoverColor = index % 2 === 0 ? 'teal-800' : 'pink-800';

    return (
        <AnimatedSection delay={150 + index * 100} className="h-full">
            <div className={`group bg-white rounded-2xl p-6 shadow-xl border-t-8 border-${color} h-full flex flex-col transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl`}>
                
                {/* Icon and Commitment */}
                <div className="flex justify-between items-center mb-4">
                    <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-${color}/10`}>
                        <svg className={`w-8 h-8 text-${color}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d={role.iconPath} />
                        </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {role.commitment}
                    </span>
                </div>

                {/* Role Title and Focus */}
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-gray-800 transition-colors mb-2">{role.role}</h3>
                <p className={`text-xs font-mono uppercase tracking-widest text-${color} mb-4`}>{role.focus}</p>

                {/* Description */}
                <p className="text-gray-600 flex-grow mb-6">{role.description}</p>
                
                {/* CTA Button */}
                <button
                    className={`w-full py-3 mt-auto text-white bg-${color} hover:bg-${hoverColor} font-bold rounded-xl transition duration-300 shadow-md shadow-${color}/30`}
                >
                    Apply for this Role
                </button>
            </div>
        </AnimatedSection>
    );
};

// --- Helper Component 3: Four-Step Process Card ---
const ProcessStep = ({ step, delay }) => (
    <AnimatedSection delay={delay} className="w-full">
        <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-gray-200 h-full flex flex-col items-center text-center">
            <span className={`text-5xl font-extrabold text-${PRIMARY_BASE}`}>{step.number}</span>
            <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-${ACCENT_BASE}/10 mt-3 mb-4`}>
                <svg className={`w-8 h-8 text-${ACCENT_BASE}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d={step.iconPath} />
                </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
        </div>
    </AnimatedSection>
);

// --- Helper Component 4: FAQ Item ---
const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <AnimatedSection delay={100 + index * 100}>
            <div 
                className="border-b border-gray-200 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex justify-between items-center py-4">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
                    <span className={`text-${PRIMARY_BASE} transition-transform duration-300 transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                </div>
                {isOpen && (
                    <div className="pb-4 pr-6 text-gray-600">
                        <p>{faq.a}</p>
                    </div>
                )}
            </div>
        </AnimatedSection>
    );
};

// --- Helper Component 5: Partner Section (Unique Split UI) ---
const PartnerSection = () => {
    // Icon for checkmark
    const checkIconPath = "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"; 
    
    // Data for the two columns
    const impactPoints = [
        "Fund a full year of Digital Literacy training for 50 residents.",
        "Sponsor the construction of a new community garden or park project.",
        "Provide micro-grants to 10 local entrepreneurs for sustainable growth.",
        "Enable one-on-one mentorship for 20 high-school students per semester.",
    ];
    
    const benefitPoints = [
        "Annual recognition on our dedicated 'Partnership Wall' in our main office.",
        "Featured spotlight in our quarterly impact report and newsletters.",
        "Priority access to our talent pool for recruitment opportunities.",
        "Co-branded volunteer days for team engagement and CSR activities.",
    ];
    
    return (
        <div className={`py-24 bg-${PRIMARY_BASE}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatedSection delay={0} className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-white mb-4">
                        <span className={`text-${ACCENT_BASE}`}>Partner</span> With Us. Achieve More.
                    </h2>
                    <p className="text-xl text-teal-100 max-w-4xl mx-auto">
                        Move beyond volunteering and become a strategic partner to drive deep, systemic change in the community's core infrastructure.
                    </p>
                </AnimatedSection>

                {/* Two-Column Feature Block */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    
                    {/* Column 1: Impact (Teal Background with Pink Accent) */}
                    <AnimatedSection delay={200} className="h-full">
                        <div className={`bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border-b-8 border-${ACCENT_BASE} h-full`}>
                            <h3 className="text-3xl font-extrabold text-white mb-6">Invest in Direct Community Impact</h3>
                            <ul className="space-y-4">
                                {impactPoints.map((point, index) => (
                                    <li key={index} className="flex items-start text-lg text-teal-100">
                                        <svg className={`flex-shrink-0 w-6 h-6 mr-3 text-${ACCENT_BASE}`} fill="currentColor" viewBox="0 0 24 24"><path d={checkIconPath} /></svg>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    {/* Column 2: Benefits (White Background with Teal/Pink Accents) */}
                    <AnimatedSection delay={400} className="h-full">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl h-full flex flex-col justify-between">
                            <div>
                                <h3 className={`text-3xl font-extrabold text-${PRIMARY_BASE} mb-6`}>Tangible Partner Benefits</h3>
                                <ul className="space-y-4">
                                    {benefitPoints.map((point, index) => (
                                        <li key={index} className="flex items-start text-lg text-gray-700">
                                            <svg className={`flex-shrink-0 w-6 h-6 mr-3 text-${ACCENT_BASE}`} fill="currentColor" viewBox="0 0 24 24"><path d={checkIconPath} /></svg>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <button
                                className={`w-full mt-10 py-4 text-white bg-${ACCENT_BASE} hover:bg-pink-800 font-extrabold rounded-xl text-lg transition duration-300 shadow-xl shadow-${ACCENT_BASE}/50 transform hover:scale-[1.02]`}
                            >
                                Discuss Partnership Tiers
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};


// --- Main Application Component ---
export default function App() {

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      
      {/* 1. Hero Section - Bold, Action-Oriented with Image */}
      <div className={`bg-white pt-20 pb-16 overflow-hidden shadow-md`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <AnimatedSection delay={0}>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                        Your Time. <span className={`text-${ACCENT_BASE}`}>Real Impact.</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 font-light">
                        Join our team of dedicated volunteers and contribute directly to generational resilience in our community—from digital literacy to green infrastructure.
                    </p>
                    <button
                        className={`mt-8 inline-block bg-${ACCENT_BASE} hover:bg-pink-800 text-white font-extrabold py-4 px-10 rounded-full text-lg shadow-xl shadow-${ACCENT_BASE}/50 transition duration-300 transform hover:scale-[1.05]`}
                    >
                        See All Open Roles
                    </button>
                </AnimatedSection>

                {/* Image Placeholder */}
                <AnimatedSection delay={200} className="hidden lg:block">
                    <div className={`w-full h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-${PRIMARY_BASE}`}>
                        <img 
                            src="/images/nkf19.jpg" 
                            alt="Group of volunteers working together" 
                            className="object-cover w-full h-full"
                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/14b8a6/ffffff?text=Community+Volunteers" }}
                        />
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </div>

      {/* 2. Why Volunteer Section - Testimonial Focus */}
      <div className={`py-16 md:py-24 bg-${PRIMARY_BASE}/5`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                
                {/* Left: Heading and Mission */}
                <AnimatedSection delay={100} className="lg:col-span-1">
                    <h2 className={`text-4xl font-extrabold text-gray-900 mb-4`}>Why We Need You</h2>
                    <p className="text-lg text-gray-700">
                        Volunteers are the foundation of our work. Your expertise directly translates into empowered local businesses, educated youth, and safer neighborhoods.
                    </p>
                </AnimatedSection>

                {/* Right: Testimonial Card */}
                <AnimatedSection delay={300} className="lg:col-span-2">
                    <div className={`p-8 rounded-3xl shadow-xl bg-white border-l-8 border-${ACCENT_BASE}`}>
                        <svg className={`w-8 h-8 text-${ACCENT_BASE} mb-4`} fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
                        <blockquote className="text-xl italic text-gray-800">
                            "Advising the new bakery owner through her first year was incredibly rewarding. I saw my small-business experience directly transform her family's future."
                        </blockquote>
                        <footer className="mt-4 text-sm font-semibold text-gray-500">
                            — Maria L., Small Business Advisor Volunteer
                        </footer>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </div>

      {/* 3. The Volunteer Process (4 Steps) */}
      <div className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0} className="text-center mb-12">
                <h2 className={`text-4xl font-extrabold text-gray-900 mb-3`}>Our Simple 4-Step Process</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We make it easy and efficient to start giving back to the community.
                </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                    <ProcessStep key={step.number} step={step} delay={100 + index * 100} />
                ))}
            </div>
        </div>
      </div>
      
      {/* 4. Role Mosaic Grid (Existing Section) */}
      <div className={`py-20 lg:py-24 bg-${PRIMARY_BASE}/10`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <AnimatedSection delay={100} className="text-center mb-12">
                <h2 className={`text-4xl font-extrabold text-gray-900 mb-3`}>Current Open Roles</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Choose a volunteer commitment that matches your skills and schedule.
                </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {volunteerRoles.map((role, index) => (
                    <VolunteerCard key={role.id} role={role} index={index} />
                ))}
            </div>
        </div>
      </div>
      
      {/* 5. Frequently Asked Questions (FAQ) */}
      <div className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0} className="mb-12">
                <h2 className={`text-4xl font-extrabold text-gray-900 mb-3 text-center`}>FAQs</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
                    Everything you need to know about starting your volunteer journey.
                </p>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl">
                {volunteerFAQ.map((faq, index) => (
                    <FAQItem key={index} faq={faq} index={index} />
                ))}
            </div>
        </div>
      </div>

      {/* 6. Become a Partner Section (New Unique UI) */}
      <PartnerSection />
      
      {/* 7. Corporate / Group CTA Strip - High Contrast (renamed from 6) */}
      <div className={`py-16 bg-${ACCENT_BASE} text-white`}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection delay={100}>
                <h2 className="text-3xl font-extrabold mb-4">Corporate & Group Volunteering</h2>
                <p className="text-xl text-pink-100 mb-6">
                    Looking for a team-building opportunity? We offer structured group volunteer projects for businesses.
                </p>
                <button
                    className={`inline-block border-2 border-white text-white hover:bg-white hover:text-gray-900 font-extrabold py-3 px-8 rounded-full transition duration-300 transform hover:scale-[1.03]`}
                >
                    Learn About Group Projects
                </button>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
