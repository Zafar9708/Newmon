// // app/fundraise/page.jsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';

// export default function StartFundraising() {
//   const [activeTab, setActiveTab] = useState('create');
//   const [isVisible, setIsVisible] = useState(false);
//   const [fundraiserData, setFundraiserData] = useState({
//     title: '',
//     goal: '',
//     category: '',
//     story: '',
//     endDate: ''
//   });
//   const [animatedStats, setAnimatedStats] = useState({
//     raised: 0,
//     fundraisers: 0,
//     supporters: 0
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

//   // SEO Keywords for Fundraising Page
//   const seoKeywords = [
//     "start fundraising", "fundraising campaign", "online fundraising",
//     "fundraising ideas", "fundraising tips", "fundraising strategies",
//     "fundraising platform", "fundraising goals", "fundraising success",
//     "fundraising campaign ideas", "fundraising for charity", "fundraising events",
//     "fundraising resources", "fundraising tools", "fundraising support",
//     "fundraising guide", "fundraising help", "fundraising community",
//     "fundraising best practices", "fundraising success stories"
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

//     increment(2850000, 0, (val) => setAnimatedStats(prev => ({ ...prev, raised: val })));
//     increment(3420, 0, (val) => setAnimatedStats(prev => ({ ...prev, fundraisers: val })));
//     increment(56700, 0, (val) => setAnimatedStats(prev => ({ ...prev, supporters: val })));
//   };

//   const handleInputChange = (field, value) => {
//     setFundraiserData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Fundraiser created:', fundraiserData);
//     // Handle fundraiser creation
//   };

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 0
//     }).format(amount);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden">
//       {/* SEO Keywords Meta */}
//       <div className="hidden">
//         {seoKeywords.join(", ")}
//       </div>

//       {/* Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00B8C8]/30 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
//       </div>

//       {/* Header Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#00B8C8] to-cyan-600">
//         <div className="absolute inset-0 bg-cyan-900/30"></div>
        
//         <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
//           <div className={`transition-all duration-1000 transform ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             {/* Fundraising Badge */}
//             <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
//               <span className="text-lg font-medium tracking-wider">FUNDRAISING CAMPAIGNS</span>
//             </div>
            
//             {/* Main Heading */}
//             <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
//                 Start
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
//                 Fundraising
//               </span>
//             </h1>
            
//             <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed font-light opacity-90">
//               Launch your fundraising campaign and <span className="text-yellow-300 font-semibold">mobilize supporters</span> 
//               to raise funds for critical causes that create lasting community impact.
//             </p>

//             {/* Impact Stats */}
//             <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
//               {[
//                 { number: formatCurrency(animatedStats.raised), label: 'Funds Raised', suffix: '' },
//                 { number: animatedStats.fundraisers.toLocaleString(), label: 'Fundraising Campaigns', suffix: '+' },
//                 { number: animatedStats.supporters.toLocaleString(), label: 'Fundraising Supporters', suffix: '+' }
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

//             {/* Quick Start CTA */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
//               <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Fundraising?</h3>
//               <p className="text-cyan-100 mb-6 text-center">
//                 Create your fundraising campaign in minutes and start raising funds for causes you care about
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button 
//                   onClick={() => setActiveTab('create')}
//                   className="bg-[#00B8C8] text-white px-8 py-4 rounded-2xl font-bold hover:bg-cyan-600 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
//                 >
//                   Start Fundraising Campaign
//                 </button>
//                 <button 
//                   onClick={() => setActiveTab('success')}
//                   className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
//                 >
//                   Fundraising Success Stories
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
//               { id: 'create', label: 'Create Fundraiser' },
//               { id: 'causes', label: 'Fundraising Causes' },
//               { id: 'success', label: 'Fundraising Success' },
//               { id: 'resources', label: 'Fundraising Resources' },
//               { id: 'faq', label: 'Fundraising FAQ' }
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

//       {/* Create Fundraiser Section */}
//       {activeTab === 'create' && (
//         <section className="py-20">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Create Your Fundraising Campaign</h2>
//               <p className="text-xl text-gray-600">Set up your fundraising campaign in just a few simple steps</p>
//             </div>

//             <div className="bg-white rounded-3xl shadow-2xl p-8 border border-cyan-100">
//               <form onSubmit={handleSubmit} className="space-y-8">
//                 <div className="space-y-6">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Fundraising Campaign Details</h3>
                  
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Fundraising Campaign Title *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={fundraiserData.title}
//                       onChange={(e) => handleInputChange('title', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                       placeholder="Support Education for Underprivileged Children"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Fundraising Goal ($) *
//                       </label>
//                       <input
//                         type="number"
//                         required
//                         value={fundraiserData.goal}
//                         onChange={(e) => handleInputChange('goal', e.target.value)}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                         placeholder="5000"
//                         min="1"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Fundraising Category *
//                       </label>
//                       <select
//                         required
//                         value={fundraiserData.category}
//                         onChange={(e) => handleInputChange('category', e.target.value)}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                       >
//                         <option value="">Select fundraising category</option>
//                         <option value="education">Education Fundraising</option>
//                         <option value="healthcare">Healthcare Fundraising</option>
//                         <option value="emergency">Emergency Fundraising</option>
//                         <option value="community">Community Fundraising</option>
//                         <option value="environment">Environmental Fundraising</option>
//                         <option value="other">Other Fundraising</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Fundraising End Date (Optional)
//                     </label>
//                     <input
//                       type="date"
//                       value={fundraiserData.endDate}
//                       onChange={(e) => handleInputChange('endDate', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                       min={new Date().toISOString().split('T')[0]}
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Your Fundraising Story *
//                     </label>
//                     <textarea
//                       required
//                       value={fundraiserData.story}
//                       onChange={(e) => handleInputChange('story', e.target.value)}
//                       rows={6}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                       placeholder="Share why this fundraising campaign matters to you and how the funds will help make a difference..."
//                     />
//                     <p className="text-sm text-gray-500 mt-2">
//                       Fundraising Tip: Share personal experiences and explain exactly how fundraising donations will be used
//                     </p>
//                   </div>
//                 </div>

//                 {/* Impact Preview */}
//                 <div className="bg-gradient-to-r from-[#00B8C8] to-cyan-500 rounded-2xl p-6 text-white">
//                   <h4 className="font-bold text-lg mb-3">Your Fundraising Impact Preview</h4>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//                     <div>
//                       <div className="text-2xl font-bold">50+</div>
//                       <div className="text-sm text-cyan-100">Children Educated</div>
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold">25+</div>
//                       <div className="text-sm text-cyan-100">Families Supported</div>
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold">1</div>
//                       <div className="text-sm text-cyan-100">Community Transformed</div>
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold">∞</div>
//                       <div className="text-sm text-cyan-100">Lives Changed</div>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-[#00B8C8] text-white py-4 rounded-2xl font-bold text-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
//                 >
//                   Launch Your Fundraising Campaign
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Support Causes Section */}
//       {activeTab === 'causes' && (
//         <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Fundraising Campaign Causes</h2>
//               <p className="text-xl text-gray-600">Choose a fundraising cause that resonates with you and start making a difference</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {supportCauses.map((cause, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-cyan-100"
//                 >
//                   <div className="h-4 bg-gradient-to-r from-[#00B8C8] to-cyan-500"></div>
                  
//                   <div className="p-6">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00B8C8] transition-colors duration-300">
//                       {cause.title}
//                     </h3>
                    
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {cause.description}
//                     </p>
                    
//                     {/* Impact Metrics */}
//                     <div className="space-y-3 mb-6">
//                       {cause.impacts.map((impact, idx) => (
//                         <div key={idx} className="flex items-center text-gray-600">
//                           <div className="w-2 h-2 bg-[#00B8C8] rounded-full mr-3"></div>
//                           <span className="text-sm">{impact}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     {/* Quick Stats */}
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                       <div className="text-center p-3 bg-cyan-50 rounded-xl">
//                         <div className="text-lg font-bold text-[#00B8C8]">{cause.stats.fundraisers}</div>
//                         <div className="text-xs text-gray-600">Fundraising Campaigns</div>
//                       </div>
//                       <div className="text-center p-3 bg-blue-50 rounded-xl">
//                         <div className="text-lg font-bold text-blue-600">{cause.stats.raised}</div>
//                         <div className="text-xs text-gray-600">Funds Raised</div>
//                       </div>
//                     </div>
                    
//                     <button 
//                       onClick={() => {
//                         setFundraiserData(prev => ({...prev, category: cause.category}));
//                         setActiveTab('create');
//                       }}
//                       className="w-full bg-[#00B8C8] text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
//                     >
//                       Start {cause.title} Fundraising
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Success Stories Section */}
//       {activeTab === 'success' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Fundraising Success Stories</h2>
//               <p className="text-xl text-gray-600">See how fundraising campaigns are creating extraordinary community impact</p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {successStories.map((story, index) => (
//                 <div key={index} className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 border border-cyan-100 group hover:-translate-y-2">
//                   <div className="flex items-start mb-4">
//                     <div className="w-16 h-16 bg-gradient-to-r from-[#00B8C8] to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
//                       {story.initials}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
//                       <p className="text-[#00B8C8] font-semibold">{story.fundraiserTitle}</p>
//                       <p className="text-gray-500 text-sm">{story.duration}</p>
//                     </div>
//                   </div>
                  
//                   <div className="mb-4">
//                     <div className="flex justify-between text-sm mb-2">
//                       <span className="text-gray-600">Funds Raised</span>
//                       <span className="font-semibold text-[#00B8C8]">{story.raised}</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div 
//                         className="bg-gradient-to-r from-[#00B8C8] to-cyan-500 h-2 rounded-full transition-all duration-1000"
//                         style={{ width: `${(parseInt(story.raised.replace(/[^0-9]/g, '')) / parseInt(story.goal.replace(/[^0-9]/g, '')) * 100)}%` }}
//                       ></div>
//                     </div>
//                     <div className="text-right text-sm text-gray-500 mt-1">Fundraising Goal: {story.goal}</div>
//                   </div>
                  
//                   <p className="text-gray-600 italic mb-4 leading-relaxed">"{story.quote}"</p>
                  
//                   <div className="space-y-3">
//                     <h4 className="font-semibold text-gray-900">Fundraising Impact Created:</h4>
//                     <ul className="space-y-2">
//                       {story.achievements.map((achievement, idx) => (
//                         <li key={idx} className="flex items-center text-sm text-gray-600">
//                           <div className="w-2 h-2 bg-[#00B8C8] rounded-full mr-3"></div>
//                           {achievement}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Resources Section */}
//       {activeTab === 'resources' && (
//         <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Fundraising Resources</h2>
//               <p className="text-xl text-gray-600">Everything you need to run successful fundraising campaigns</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {fundraisingResources.map((resource, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-cyan-100 hover:-translate-y-2"
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-r from-[#00B8C8] to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">
//                     {resource.initials}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed mb-4">{resource.description}</p>
//                   <button className="w-full bg-[#00B8C8] text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-colors duration-300">
//                     {resource.action}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* FAQ Section */}
//       {activeTab === 'faq' && (
//         <section className="py-20">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Fundraising Frequently Asked Questions</h2>
//               <p className="text-xl text-gray-600">Get answers to common questions about fundraising campaigns</p>
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
//           <h2 className="text-4xl font-bold mb-4">Ready to Start Fundraising?</h2>
//           <p className="text-xl mb-8 opacity-90">Join thousands of fundraising campaigns making a real difference in communities worldwide</p>
//           <button 
//             onClick={() => setActiveTab('create')}
//             className="bg-cyan-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-cyan-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//           >
//             Launch Your Fundraising Campaign
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// // Enhanced Data with Fundraising Keywords
// const supportCauses = [
//   {
//     title: 'Education Fundraising',
//     category: 'education',
//     description: 'Start fundraising campaigns to provide quality education, school supplies, and learning opportunities for underprivileged children.',
//     impacts: [
//       'Fundraising for school fees and supplies',
//       'Fundraising for teacher training programs',
//       'Fundraising for learning center construction',
//       'Fundraising for student scholarships'
//     ],
//     stats: {
//       fundraisers: '245+',
//       raised: '$1.2M'
//     }
//   },
//   {
//     title: 'Healthcare Fundraising',
//     category: 'healthcare',
//     description: 'Launch fundraising campaigns to support medical care, health services, and wellness programs for communities in need.',
//     impacts: [
//       'Fundraising for medical equipment',
//       'Fundraising for health clinic operations',
//       'Fundraising for vaccination programs',
//       'Fundraising for emergency medical care'
//     ],
//     stats: {
//       fundraisers: '189+',
//       raised: '$980K'
//     }
//   },
//   {
//     title: 'Emergency Fundraising',
//     category: 'emergency',
//     description: 'Create fundraising campaigns to provide immediate assistance and long-term recovery support for disaster-affected communities.',
//     impacts: [
//       'Fundraising for emergency shelter and food',
//       'Fundraising for medical first aid',
//       'Fundraising for clean water access',
//       'Fundraising for community rebuilding'
//     ],
//     stats: {
//       fundraisers: '156+',
//       raised: '$2.1M'
//     }
//   },
//   {
//     title: 'Community Fundraising',
//     category: 'community',
//     description: 'Organize fundraising campaigns that build sustainable communities and create economic opportunities through community support.',
//     impacts: [
//       'Fundraising for infrastructure development',
//       'Fundraising for vocational training programs',
//       'Fundraising for small business support',
//       'Fundraising for community centers'
//     ],
//     stats: {
//       fundraisers: '178+',
//       raised: '$850K'
//     }
//   },
//   {
//     title: 'Environmental Fundraising',
//     category: 'environment',
//     description: 'Start fundraising campaigns to support conservation efforts, clean energy projects, and environmental education programs.',
//     impacts: [
//       'Fundraising for reforestation projects',
//       'Fundraising for clean water initiatives',
//       'Fundraising for wildlife conservation',
//       'Fundraising for environmental education'
//     ],
//     stats: {
//       fundraisers: '134+',
//       raised: '$620K'
//     }
//   },
//   {
//     title: 'Animal Welfare Fundraising',
//     category: 'animals',
//     description: 'Launch fundraising campaigns to help protect and care for animals through rescue operations and welfare programs.',
//     impacts: [
//       'Fundraising for animal rescue and shelter',
//       'Fundraising for veterinary care services',
//       'Fundraising for spay/neuter programs',
//       'Fundraising for wildlife protection'
//     ],
//     stats: {
//       fundraisers: '98+',
//       raised: '$340K'
//     }
//   }
// ];

// const successStories = [
//   {
//     name: 'Sarah Johnson',
//     initials: 'SJ',
//     fundraiserTitle: 'Education Fundraising Campaign',
//     duration: '60 days fundraising campaign',
//     quote: 'Our fundraising campaign raised $25,000 to build a new classroom in a remote village. Seeing 50 children now have access to education makes every fundraising effort worthwhile.',
//     raised: '$25,400',
//     goal: '$20,000',
//     achievements: [
//       'New classroom built through fundraising',
//       'School supplies provided through fundraising',
//       'Teacher salary covered by fundraising',
//       'Clean water access established'
//     ]
//   },
//   {
//     name: 'Marcus Rodriguez',
//     initials: 'MR',
//     fundraiserTitle: 'Emergency Medical Fundraising',
//     duration: '45 days fundraising campaign',
//     quote: 'Our fundraising campaign raised $18,000 for emergency medical supplies. We were able to support 3 clinics through successful fundraising efforts.',
//     raised: '$18,750',
//     goal: '$15,000',
//     achievements: [
//       'Medical supplies through fundraising',
//       'Supported patients via fundraising',
//       'Trained health workers with fundraising',
//       'Emergency kits from fundraising'
//     ]
//   }
// ];

// const fundraisingResources = [
//   {
//     initials: 'FG',
//     title: 'Fundraising Guide',
//     description: 'Complete step-by-step fundraising guide to creating and managing successful fundraising campaigns and strategies.',
//     action: 'Download Fundraising Guide'
//   },
//   {
//     initials: 'SM',
//     title: 'Social Media Fundraising',
//     description: 'Ready-to-use social media fundraising posts, images, and templates to promote your fundraising campaign effectively.',
//     action: 'Get Fundraising Toolkit'
//   },
//   {
//     initials: 'ET',
//     title: 'Fundraising Email Templates',
//     description: 'Professional fundraising email templates to reach out to potential donors and fundraising supporters.',
//     action: 'View Fundraising Templates'
//   },
//   {
//     initials: 'PT',
//     title: 'Fundraising Progress Tools',
//     description: 'Fundraising tools to track your campaign progress and share fundraising updates with supporters.',
//     action: 'Access Fundraising Tools'
//   },
//   {
//     initials: 'FS',
//     title: 'Fundraising Strategies',
//     description: 'Proven fundraising strategies and tips from successful fundraising campaigns to maximize your impact.',
//     action: 'Learn Fundraising Strategies'
//   },
//   {
//     initials: 'FC',
//     title: 'Fundraising Community',
//     description: 'Connect with other fundraising campaign organizers and share fundraising experiences in our community.',
//     action: 'Join Fundraising Community'
//   }
// ];

// const faqItems = [
//   {
//     question: 'How do I start a fundraising campaign?',
//     answer: 'Simply click "Start Fundraising Campaign" and follow the step-by-step fundraising process. You\'ll set your fundraising goal, choose a fundraising cause, share your fundraising story, and launch your fundraising campaign in just a few minutes.'
//   },
//   {
//     question: 'Are there any fundraising fees?',
//     answer: 'We charge a small platform fee to cover operational costs for fundraising campaigns, and payment processors may charge transaction fees. The majority of funds raised through fundraising go directly to support your chosen cause.'
//   },
//   {
//     question: 'How long does fundraising take to receive funds?',
//     answer: 'Funds from fundraising campaigns are typically transferred to the designated cause within 7-14 days after your fundraising campaign ends. For emergency fundraising situations, we can expedite the process.'
//   },
//   {
//     question: 'Can I start fundraising for personal causes?',
//     answer: 'Yes, you can start fundraising for personal medical expenses, education costs, or emergency needs. However, we prioritize verified charitable fundraising causes to ensure maximum fundraising impact.'
//   },
//   {
//     question: 'What fundraising support do you provide?',
//     answer: 'We provide comprehensive fundraising resources including fundraising guides, social media fundraising toolkits, fundraising email templates, and dedicated fundraising support to help you succeed in your fundraising campaign.'
//   }
// ];

"use client"

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// --- Global Theme Colors ---
const PRIMARY_BASE = 'teal-600'; // Structural and stable elements
const ACCENT_BASE = 'pink-600'; // Urgency, metrics, and primary actions
const PRIMARY_LIGHT = 'teal-50'; // Very light background tint

// --- Global Data (Unchanged) ---
const FUNDRAISING_DATA = {
    totalGoal: 350000,
    currentFunds: 295450,
    impactStories: [
        { title: "Empowering 120 Local Entrepreneurs", iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" },
        { title: "Restoring 5 Community Green Spaces", iconPath: "M10 18h4v-2h-4v2zM3 3v2h18V3H3zm3 8h12v2H6v-2zM3 17h18v-2H3v2z" },
        { title: "Training 300 Youth Leaders", iconPath: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" },
    ]
};

const DONATION_TIERS = [
    { amount: 25, impact: "Provide one day of hot meals for volunteers.", iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-4H7v-2h2v-4h2v4h2v2h-2v4z" },
    { amount: 100, impact: "Fund 2 hours of expert small business consulting.", iconPath: "M12 2L1 21h22L12 2zm-1 9V7h2v4h4v2h-4v4h-2v-4H7v-2h4z" },
    { amount: 500, impact: "Sponsor a youth for the full summer leadership program.", iconPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15H9v-2h2v2zm0-4H9V8h2v4z" },
    { amount: 1000, impact: "Secure equipment for a new public digital hub.", iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z" },
];

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

// --- Helper Component 2: Goal Tracker and Metric Block ---
const GoalTracker = () => {
    const progressPercent = Math.round((FUNDRAISING_DATA.currentFunds / FUNDRAISING_DATA.totalGoal) * 100);

    return (
        <AnimatedSection delay={200} className={`bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-t-8 border-${ACCENT_BASE} max-w-5xl mx-auto`}>
            <h3 className={`text-2xl md:text-3xl font-extrabold text-${PRIMARY_BASE} mb-6 text-center`}>
                Annual Funding Goal: <span className={`text-${ACCENT_BASE}`}>${FUNDRAISING_DATA.totalGoal.toLocaleString()}</span>
            </h3>

            {/* Progress Bar Container - Refined Look */}
            <div className={`w-full bg-gray-200 rounded-full h-8 mb-4 overflow-hidden shadow-inner`}>
                <div
                    className={`h-8 rounded-full flex items-center justify-center font-extrabold text-white text-md bg-${ACCENT_BASE} transition-all duration-1000 ease-out`}
                    style={{ width: `${progressPercent > 100 ? 100 : progressPercent}%` }}
                >
                    {progressPercent > 0 && `${progressPercent}% RAISED`}
                </div>
            </div>

            <div className="flex justify-between text-lg md:text-xl font-bold text-gray-700 px-2 mt-2">
                <span className={`text-${PRIMARY_BASE}`}>
                    RAISED: <span className="font-extrabold">${FUNDRAISING_DATA.currentFunds.toLocaleString()}</span>
                </span>
                <span className={`text-${ACCENT_BASE}`}>
                    {FUNDRAISING_DATA.totalGoal - FUNDRAISING_DATA.currentFunds > 0 
                        ? `NEED: $${(FUNDRAISING_DATA.totalGoal - FUNDRAISING_DATA.currentFunds).toLocaleString()}` 
                        : "GOAL SURPASSED!"}
                </span>
            </div>
            
            {/* Impact Highlights Grid */}
            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {FUNDRAISING_DATA.impactStories.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <svg className={`flex-shrink-0 w-6 h-6 text-${ACCENT_BASE}`} fill="currentColor" viewBox="0 0 24 24"><path d={item.iconPath} /></svg>
                        <p className="text-sm font-semibold text-gray-700">{item.title}</p>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    );
};

// --- Helper Component 3: Tiered Donation Card - Major Refinement ---
const DonationTierCard = ({ tier, index }) => {
    return (
        <AnimatedSection delay={200 + index * 100} className="h-full">
            <div className={`group bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center h-full transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl border-b-4 border-white hover:border-${ACCENT_BASE}`}>
                
                {/* Accent Line/Header */}
                <div className={`w-full h-2 bg-gradient-to-r from-${PRIMARY_BASE} to-${ACCENT_BASE} rounded-t-lg absolute top-0 left-0 transition duration-300 group-hover:h-3`}></div>

                {/* Amount */}
                <div className={`text-4xl md:text-6xl font-black text-${PRIMARY_BASE} mt-6 mb-2 relative`}>
                    <span className={`text-${ACCENT_BASE} text-xl font-extrabold absolute top-0 -left-4`}>$</span>
                    {tier.amount.toLocaleString()}
                </div>
                
                {/* Impact Description */}
                <p className="text-lg font-medium text-gray-700 my-4 flex-grow">{tier.impact}</p>

                {/* Icon for style */}
                <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-100/50 mb-6 transition duration-300 group-hover:bg-gray-200`}>
                    <svg className={`w-7 h-7 text-${ACCENT_BASE}`} fill="currentColor" viewBox="0 0 24 24"><path d={tier.iconPath} /></svg>
                </div>

                {/* CTA Button */}
                <button
                    className={`w-full py-3 text-white bg-${ACCENT_BASE} hover:bg-pink-800 font-extrabold rounded-xl transition duration-300 shadow-lg shadow-${ACCENT_BASE}/30 transform hover:scale-[1.01]`}
                >
                    Donate ${tier.amount}
                </button>
            </div>
        </AnimatedSection>
    );
};

// --- Helper Component 4: Custom Donation Input ---
const CustomDonation = () => {
    const [amount, setAmount] = useState('');

    return (
        <AnimatedSection delay={800} className="max-w-xl mx-auto h-full">
             <div className={`bg-white p-8 rounded-3xl shadow-xl flex flex-col h-full border-t-8 border-${PRIMARY_BASE}`}>
                <h3 className={`text-3xl font-extrabold text-${PRIMARY_BASE} mb-4 text-center`}>
                    Give a Custom Amount
                </h3>
                <p className="text-md text-gray-600 mb-6 text-center flex-grow">
                    Tailor your support to what you can give. Every dollar is maximized for community benefit.
                </p>

                <div className="mb-6 relative">
                    <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-${PRIMARY_BASE}`}>$</span>
                    <input
                        type="number"
                        placeholder="e.g., 250"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className={`w-full py-4 px-10 border-2 border-gray-300 rounded-xl text-center text-2xl font-bold text-gray-800 focus:ring-${ACCENT_BASE} focus:border-${ACCENT_BASE} transition duration-200`}
                    />
                </div>

                <button
                    className={`w-full py-4 text-white bg-${PRIMARY_BASE} hover:bg-teal-800 font-extrabold rounded-xl text-xl transition duration-300 shadow-lg shadow-${PRIMARY_BASE}/40 transform hover:scale-[1.02]`}
                >
                    Pledge ${amount || '0'} Now
                </button>
            </div>
        </AnimatedSection>
    );
}

// --- Main Application Component ---
export default function App() {
    // Retaining client-side check for robustness with external hooks like useInView
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <div className="min-h-screen bg-gray-50 font-sans antialiased flex items-center justify-center">
                <p className={`text-xl font-semibold text-${PRIMARY_BASE}`}>Loading...</p>
            </div>
        );
    }
    
    return (
        <div className={`min-h-screen bg-${PRIMARY_LIGHT} font-sans antialiased`}>

            {/* 1. Hero Section - Focused and Clean */}
            <div className={`bg-${PRIMARY_BASE} pt-20 pb-20 overflow-hidden shadow-xl`}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection delay={0}>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
                            Invest in <span className={`text-${ACCENT_BASE} drop-shadow-lg`}>Generational Change</span>
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl text-teal-100 font-light max-w-4xl mx-auto">
                            Fund the essential resources needed to build strong communities and foster economic self-sufficiency.
                        </p>
                    </AnimatedSection>
                </div>
            </div>
            
            {/* 2. Goal Tracker Section (Centerpiece of the page) */}
            <div className="py-16 md:py-24 -mt-20 relative z-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <GoalTracker />
                </div>
            </div>

            {/* 3. Donation Tiers Grid - Lighter Background for Elegance */}
            <div className={`py-16`}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <AnimatedSection delay={100} className="text-center mb-12">
                        <h2 className={`text-4xl font-extrabold text-${PRIMARY_BASE} mb-3`}>
                            Choose Your Level of <span className={`text-${ACCENT_BASE}`}>Impact</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Select an option below to see the direct, tangible outcome of your generosity.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {DONATION_TIERS.map((tier, index) => (
                            <DonationTierCard key={tier.amount} tier={tier} index={index} />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* 4. Custom Amount Section */}
            <div className="py-20 lg:py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <CustomDonation />
                </div>
            </div>

            {/* 5. Donor Wall / Recognition Section */}
            <div className={`py-16 bg-${ACCENT_BASE} text-white`}>
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection delay={100}>
                        <h2 className="text-3xl font-extrabold mb-4">Join Our Wall of Generosity</h2>
                        <p className="text-xl text-pink-100 mb-6">
                            We honor all supporters who contribute over $500 with permanent recognition on our physical and digital donor walls.
                        </p>
                        <button
                            className={`inline-block border-2 border-white text-white hover:bg-white hover:text-${PRIMARY_BASE} font-extrabold py-3 px-8 rounded-full transition duration-300 transform hover:scale-[1.03]`}
                        >
                            View Our Impact Report
                        </button>
                    </AnimatedSection>
                </div>
            </div>

            {/* Footer / Legal Statement */}
            {/* <footer className="bg-gray-800 py-6">
                <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Community Resilience Initiative. All donations are tax-deductible to the fullest extent of the law.</p>
                </div>
            </footer> */}
        </div>
    );
}
