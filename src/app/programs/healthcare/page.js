// // app/programs/healthcare/page.jsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';

// export default function HealthcareAccess() {
//   const [activeTab, setActiveTab] = useState('impact');
//   const [isVisible, setIsVisible] = useState(false);
//   const [donationAmount, setDonationAmount] = useState(50);
//   const [animatedStats, setAnimatedStats] = useState({
//     patients: 0,
//     surgeries: 0,
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

//   // SEO Keywords for Healthcare Non-Profit
//   const seoKeywords = [
//     "healthcare access", "medical charity", "healthcare donations",
//     "medical support", "healthcare programs", "patient care",
//     "medical assistance", "healthcare funding", "medical relief",
//     "healthcare services", "medical treatment", "healthcare initiatives",
//     "medical aid", "healthcare support", "medical programs",
//     "healthcare charity", "medical donations", "healthcare outreach",
//     "medical services", "healthcare assistance"
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

//     increment(12500, 0, (val) => setAnimatedStats(prev => ({ ...prev, patients: val })));
//     increment(840, 0, (val) => setAnimatedStats(prev => ({ ...prev, surgeries: val })));
//     increment(45, 0, (val) => setAnimatedStats(prev => ({ ...prev, communities: val })));
//   };

//   const handleDonate = (amount) => {
//     setDonationAmount(amount);
//     // In a real app, this would integrate with payment processing
//     console.log(`Donating $${amount} to healthcare access`);
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
//       </div>

//       {/* Header Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00B8C8] to-cyan-700">
//         <div className="absolute inset-0 bg-cyan-900/40"></div>
        
//         <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
//           <div className={`transition-all duration-1000 transform ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             {/* Charity Badge */}
//             <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
//               <span className="text-lg font-medium tracking-wider">HEALTHCARE ACCESS PROGRAM</span>
//             </div>
            
//             {/* Main Heading */}
//             <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
//                 Healthcare
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
//                 Access Initiative
//               </span>
//             </h1>
            
//             <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-light opacity-90">
//               Your donation provides <span className="text-yellow-300 font-semibold">life-saving medical care</span> and 
//               <span className="text-yellow-300 font-semibold"> healthcare access</span> to underserved communities. 
//               Every dollar brings medical support and healing to those in need.
//             </p>

//             {/* Impact Stats */}
//             <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
//               {[
//                 { number: animatedStats.patients.toLocaleString(), label: 'Patients Treated', suffix: '+' },
//                 { number: animatedStats.surgeries, label: 'Medical Procedures', suffix: '+' },
//                 { number: animatedStats.communities, label: 'Communities Served', suffix: '+' }
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-8 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-500 group"
//                 >
//                   <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-3 group-hover:scale-110 transition-transform duration-300">
//                     {stat.number}{stat.suffix}
//                   </div>
//                   <div className="text-cyan-100 font-medium text-lg tracking-wide">{stat.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Donation CTA */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
//               <h3 className="text-2xl font-bold text-white mb-4">Support Healthcare Access</h3>
//               <p className="text-cyan-100 mb-6">Choose your donation amount to provide medical care and healthcare services</p>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                 {[25, 50, 100, 250].map((amount) => (
//                   <button
//                     key={amount}
//                     onClick={() => handleDonate(amount)}
//                     className={`py-4 rounded-xl font-bold transition-all duration-300 ${
//                       donationAmount === amount
//                         ? 'bg-yellow-400 text-cyan-900 shadow-lg transform scale-105'
//                         : 'bg-white/20 text-white hover:bg-white/30'
//                     }`}
//                   >
//                     ${amount}
//                   </button>
//                 ))}
//               </div>
              
//               <button className="w-full bg-yellow-400 text-cyan-900 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
//                 Donate ${donationAmount} for Medical Care
//               </button>
              
//               <p className="text-cyan-200 text-sm mt-4">
//                 $50 provides medical supplies for 10 patients • $100 funds essential healthcare services
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Navigation */}
//       <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-cyan-100 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex overflow-x-auto py-4">
//             {[
//               { id: 'impact', label: 'Healthcare Impact' },
//               { id: 'programs', label: 'Medical Programs' },
//               { id: 'stories', label: 'Patient Care Stories' },
//               { id: 'donate', label: 'Support Healthcare' },
//               { id: 'volunteer', label: 'Medical Volunteers' }
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex-shrink-0 px-8 py-4 font-semibold transition-all duration-500 rounded-2xl mx-2 ${
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

//       {/* Impact Section */}
//       {activeTab === 'impact' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Healthcare Impact & Medical Outcomes</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 See how your generous contributions are transforming healthcare access and providing medical support in underserved communities
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//               {/* Impact Metrics */}
//               <div className="space-y-8">
//                 {impactMetrics.map((metric, index) => (
//                   <div key={index} className="bg-white rounded-3xl p-8 shadow-2xl border border-cyan-100">
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-2xl font-bold text-[#00B8C8]">{metric.title}</h3>
//                       <span className="text-3xl font-bold text-cyan-500">{metric.value}</span>
//                     </div>
//                     <div className="w-full bg-cyan-100 rounded-full h-4">
//                       <div
//                         className="bg-[#00B8C8] h-4 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: metric.percentage }}
//                       ></div>
//                     </div>
//                     <p className="text-gray-600 mt-4">{metric.description}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Donation Impact */}
//               <div className="bg-gradient-to-br from-[#00B8C8] to-cyan-600 rounded-3xl p-8 text-white">
//                 <h3 className="text-3xl font-bold mb-6">Your Healthcare Donation Impact</h3>
//                 <div className="space-y-6">
//                   {donationImpact.map((item, index) => (
//                     <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-2xl">
//                       <div>
//                         <div className="font-bold text-lg">{item.amount}</div>
//                         <div className="text-cyan-100">{item.provides}</div>
//                       </div>
//                       <div className="text-2xl font-bold text-yellow-300">{item.impact}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Quick Donation */}
//             <div className="bg-cyan-50 rounded-3xl p-8 border border-cyan-200">
//               <div className="text-center mb-8">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-2">Support Medical Care Access</h3>
//                 <p className="text-gray-600">Choose your healthcare donation amount and provide medical support today</p>
//               </div>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
//                 {[35, 75, 150, 500].map((amount) => (
//                   <button
//                     key={amount}
//                     onClick={() => handleDonate(amount)}
//                     className={`py-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
//                       donationAmount === amount
//                         ? 'bg-[#00B8C8] text-white shadow-lg transform scale-105'
//                         : 'bg-white text-gray-700 hover:bg-cyan-100'
//                     }`}
//                   >
//                     ${amount}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Medical Programs */}
//       {activeTab === 'programs' && (
//         <section className="py-20 bg-cyan-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Healthcare Programs & Medical Services</h2>
//               <p className="text-xl text-gray-600">Your donations support these life-changing healthcare initiatives and medical programs</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {medicalPrograms.map((program, index) => (
//                 <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
//                   <div className="h-48 bg-gradient-to-br from-[#00B8C8] to-cyan-600 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
//                     <div className="absolute bottom-6 left-6">
//                       <div className="text-white text-sm font-semibold bg-[#00B8C8] px-3 py-1 rounded-full">
//                         ${program.cost} medical care per patient
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="p-6">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.name}</h3>
//                     <p className="text-gray-600 mb-6">{program.description}</p>
                    
//                     <div className="space-y-3 mb-6">
//                       {program.services.map((service, idx) => (
//                         <div key={idx} className="flex items-center text-gray-600">
//                           <div className="w-2 h-2 bg-[#00B8C8] rounded-full mr-3"></div>
//                           <span className="text-sm">{service}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <div className="text-[#00B8C8] font-bold">${program.donation} provides patient healthcare</div>
//                       <button 
//                         onClick={() => handleDonate(program.donation)}
//                         className="bg-[#00B8C8] text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-colors duration-300"
//                       >
//                         Support Healthcare
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Patient Stories */}
//       {activeTab === 'stories' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Healthcare Success Stories</h2>
//               <p className="text-xl text-gray-600">Real stories of medical care and healing made possible by healthcare donations</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {patientStories.map((story, index) => (
//                 <div key={index} className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 group">
//                   <div className="text-center mb-6">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#00B8C8] to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
//                       {story.initials}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
//                     <p className="text-[#00B8C8] font-semibold">{story.location}</p>
//                   </div>
                  
//                   <p className="text-gray-600 italic mb-6 leading-relaxed">"{story.story}"</p>
                  
//                   <div className="bg-cyan-50 rounded-2xl p-4">
//                     <div className="text-sm text-gray-600 mb-2">Medical treatment provided:</div>
//                     <div className="font-semibold text-cyan-700">{story.treatment}</div>
//                     <div className="text-xs text-gray-500 mt-2">Healthcare cost covered: ${story.cost}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Donation Section */}
//       {activeTab === 'donate' && (
//         <section className="py-20 bg-gradient-to-br from-[#00B8C8] to-cyan-600">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//             <h2 className="text-5xl font-bold mb-6">Support Healthcare Access</h2>
//             <p className="text-xl mb-12 opacity-90">Multiple ways to contribute to medical care and healthcare services</p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//               {donationMethods.map((method, index) => (
//                 <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
//                   <div className="text-3xl mb-4">{method.icon}</div>
//                   <h3 className="text-2xl font-bold mb-4">{method.title}</h3>
//                   <p className="text-cyan-100 mb-6">{method.description}</p>
//                   <button className="w-full bg-yellow-400 text-cyan-900 py-4 rounded-2xl font-bold hover:bg-yellow-300 transition-colors duration-300">
//                     {method.action}
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Custom Donation */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
//               <h3 className="text-3xl font-bold mb-4">Custom Healthcare Donation</h3>
//               <p className="text-cyan-100 mb-6">Enter any amount to support medical care and healthcare access</p>
              
//               <div className="max-w-md mx-auto">
//                 <div className="flex items-center bg-white rounded-2xl p-4 mb-6">
//                   <span className="text-gray-500 mr-2">$</span>
//                   <input
//                     type="number"
//                     value={donationAmount}
//                     onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
//                     className="flex-1 text-2xl font-bold text-gray-900 outline-none"
//                     min="1"
//                   />
//                 </div>
                
//                 <button className="w-full bg-yellow-400 text-cyan-900 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 hover:shadow-2xl transition-all duration-300">
//                   Donate ${donationAmount} for Medical Care
//                 </button>
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
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Join Our Healthcare Mission</h2>
//               <p className="text-xl text-gray-600">Beyond donations, there are many ways to support medical care and healthcare access</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//               <div className="space-y-8">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-6">Medical Volunteer Opportunities</h3>
//                 {volunteerRoles.map((role, index) => (
//                   <div key={index} className="bg-white rounded-3xl p-6 shadow-2xl border border-cyan-100">
//                     <h4 className="text-xl font-bold text-[#00B8C8] mb-3">{role.title}</h4>
//                     <p className="text-gray-600 mb-4">{role.description}</p>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-gray-500">{role.commitment}</span>
//                       <button className="bg-[#00B8C8] text-white px-6 py-2 rounded-xl font-semibold hover:bg-cyan-600 transition-colors duration-300">
//                         Join Medical Team
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-cyan-50 rounded-3xl p-8">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Fundraising</h3>
//                 <p className="text-gray-600 mb-6">Create your own fundraising campaign to support medical care and healthcare services</p>
                
//                 <div className="space-y-4 mb-8">
//                   {fundraiserIdeas.map((idea, index) => (
//                     <div key={index} className="flex items-center p-4 bg-white rounded-2xl">
//                       <div className="w-3 h-3 bg-[#00B8C8] rounded-full mr-4"></div>
//                       <span className="font-semibold text-gray-700">{idea}</span>
//                     </div>
//                   ))}
//                 </div>
                
//                 <button className="w-full bg-[#00B8C8] text-white py-4 rounded-2xl font-bold text-lg hover:bg-cyan-600 transition-colors duration-300">
//                   Start Healthcare Fundraiser
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Footer CTA */}
//       <section className="py-16 bg-cyan-900 text-white">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold mb-4">Together, We Can Provide Healthcare Access</h2>
//           <p className="text-xl mb-8 opacity-90">Your support provides critical medical care and healthcare services to those who need it most</p>
//           <button 
//             onClick={() => handleDonate(100)}
//             className="bg-yellow-400 text-cyan-900 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//           >
//             Donate Now - Support Medical Care
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// // Enhanced Data with Healthcare Keywords
// const impactMetrics = [
//   {
//     title: 'Medical Supplies Delivered',
//     value: '12,500+',
//     percentage: '85%',
//     description: 'Essential medical kits and healthcare supplies delivered to rural clinics'
//   },
//   {
//     title: 'Medical Procedures',
//     value: '840+',
//     percentage: '92%',
//     description: 'Life-saving medical procedures and healthcare services performed'
//   },
//   {
//     title: 'Vaccination Programs',
//     value: '45,000+',
//     percentage: '78%',
//     description: 'Children and adults received healthcare through vaccination programs'
//   }
// ];

// const donationImpact = [
//   { amount: '$25', provides: 'Basic medical supplies for 5 patients', impact: '5 Lives' },
//   { amount: '$50', provides: 'Complete healthcare screening package', impact: '10 Lives' },
//   { amount: '$100', provides: 'Emergency medical procedure funding', impact: '1 Life Saved' },
//   { amount: '$250', provides: 'Mobile medical clinic operation', impact: '50+ Lives' }
// ];

// const medicalPrograms = [
//   {
//     name: 'Mobile Medical Clinics',
//     description: 'Bringing essential healthcare services and medical care directly to remote communities',
//     cost: 25,
//     donation: 50,
//     services: [
//       'Basic health screenings',
//       'Vaccination programs',
//       'Medical consultations',
//       'Medication distribution'
//     ]
//   },
//   {
//     name: 'Surgical Care Fund',
//     description: 'Funding life-changing medical procedures and surgical care for underserved patients',
//     cost: 100,
//     donation: 100,
//     services: [
//       'Emergency surgeries',
//       'Medical procedures',
//       'Post-operative care',
//       'Healthcare follow-up'
//     ]
//   },
//   {
//     name: 'Maternal Healthcare',
//     description: 'Ensuring safe pregnancies and medical care for mothers in developing regions',
//     cost: 75,
//     donation: 75,
//     services: [
//       'Prenatal medical care',
//       'Delivery medical kits',
//       'Emergency obstetric care',
//       'Newborn healthcare'
//     ]
//   }
// ];

// const patientStories = [
//   {
//     name: 'Maria Rodriguez',
//     initials: 'MR',
//     location: 'Rural Guatemala',
//     story: 'Thanks to the mobile medical clinic program, I received healthcare that saved my life. My children have their mother because of generous healthcare donors.',
//     treatment: 'Emergency medical procedure',
//     cost: 120
//   },
//   {
//     name: 'James Chen',
//     initials: 'JC',
//     location: 'Urban Philippines',
//     story: 'The healthcare program provided essential medical care that protected my entire village. We are forever grateful for this medical support.',
//     treatment: 'Community healthcare program',
//     cost: 250
//   },
//   {
//     name: 'Amina Bello',
//     initials: 'AB',
//     location: 'West Africa',
//     story: 'The maternal healthcare program ensured my twins received proper medical care. Both are healthy and thriving today thanks to healthcare access.',
//     treatment: 'Safe delivery and medical care',
//     cost: 180
//   }
// ];

// const donationMethods = [
//   {
//     icon: '💳',
//     title: 'Healthcare Donation',
//     description: 'Make a single contribution to support our medical programs and healthcare services',
//     action: 'Donate for Healthcare'
//   },
//   {
//     icon: '🔄',
//     title: 'Monthly Medical Support',
//     description: 'Become a sustaining donor with automatic monthly healthcare contributions',
//     action: 'Support Monthly'
//   },
//   {
//     icon: '🎁',
//     title: 'Medical Tribute Gift',
//     description: 'Honor a loved one with a healthcare donation in their name',
//     action: 'Give Medical Tribute'
//   }
// ];

// const volunteerRoles = [
//   {
//     title: 'Medical Professional',
//     description: 'Healthcare professionals provide direct medical care and healthcare services',
//     commitment: '2+ weeks commitment'
//   },
//   {
//     title: 'Healthcare Worker',
//     description: 'Support local communities with basic healthcare and medical prevention',
//     commitment: 'Flexible schedule'
//   },
//   {
//     title: 'Healthcare Ambassador',
//     description: 'Help raise awareness and funds for medical care initiatives',
//     commitment: 'Remote opportunity'
//   }
// ];

// const fundraiserIdeas = [
//   'Healthcare birthday fundraiser',
//   'Medical care fitness challenge',
//   'Community healthcare event',
//   'Corporate medical matching program'
// ];

"use client"
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// --- Global Theme Colors ---
const TEAL_BASE = 'teal-600';
const PINK_BASE = 'pink-600'; 

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
          ? 'opacity-100 translate-y-0 opacity-100' 
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
      <AnimatedSection className={`p-4 mb-6 text-sm text-white rounded-lg bg-${TEAL_BASE} shadow-lg shadow-${TEAL_BASE}/40`}>
        <span className="font-bold">Success!</span> Your request has been received. A dedicated care coordinator will contact you shortly.
      </AnimatedSection>
    );
  }
  if (status === 'error') {
    return (
      <AnimatedSection className={`p-4 mb-6 text-sm text-white rounded-lg bg-${PINK_BASE} shadow-lg shadow-${PINK_BASE}/40`}>
        <span className="font-bold">Error!</span> Failed to submit request. Please ensure all fields are correct and try again.
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
  
  // --- Data Definitions and State (Updated for HealthCare) ---
  const impactMetrics = [
    { value: '25K+', label: 'Lives Supported Annually', iconPath: "M12 4.354a4 4 0 110 5.292V15l-2 2h4l-2 2v-4.586l4.243-4.243a3 3 0 00-4.243-4.243z" }, // Heart
    { value: '3,800', label: 'Appointments Scheduled', iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }, // Calendar
    { value: '100%', label: 'Coverage Enrollment Rate', iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }, // Check Circle
  ];

  const corePrograms = [  
    { id: 1, title: "Telehealth Consultations", detail: "Connect with certified physicians and specialists remotely via secure video calls and chat.", imageUrl: "/images/nkf22.jpg" },
    { id: 2, title: "Mental Wellness Support", detail: "Confidential therapy, counseling, and crisis intervention for mental and emotional well-being.", imageUrl: "/images/nkf23.jpg" },
    { id: 3, title: "Preventative Care Navigation", detail: "Assistance with health screenings, vaccinations, and finding local clinics for proactive health.", imageUrl: "/images/nkf24.jpg" },
  ];

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
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
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); 
      } else {
        setSubmitStatus('error');
      }

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  // Light Mode Input Styles
  const inputClasses = `w-full p-4 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-${TEAL_BASE} focus:border-${TEAL_BASE} transition-all shadow-sm`;
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2 tracking-wide";
  
  // --- Main Component Render ---
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      
      {/* 1. Hero Section - Split Layout with Strong Teal Accent */}
      <div className={`relative bg-white py-24 sm:py-32 overflow-hidden border-b-8 border-${TEAL_BASE}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
                
                {/* Text Content - Left Side */}
                <div className="lg:col-span-6 xl:col-span-7">
                    <AnimatedSection delay={0}>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                            Your <span className={`text-${TEAL_BASE}`}>Health</span>. Your <span className={`text-${PINK_BASE}`}>Right</span>. Simple Access.
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 max-w-xl font-light">
                            Dedicated to breaking down barriers, we connect you with essential health resources, immediate support, and coverage navigation.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={200} className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a href="#request-help" className={`w-full sm:w-auto text-center bg-${TEAL_BASE} hover:bg-teal-800 text-white font-bold py-4 px-10 rounded-xl shadow-xl shadow-${TEAL_BASE}/40 transition duration-300 transform hover:scale-[1.02]`}>
                            Request Immediate Help &rarr;
                        </a>
                        <a href="#fund-impact" className={`w-full sm:w-auto text-center bg-white border-2 border-${PINK_BASE} text-${PINK_BASE} hover:bg-pink-50 font-semibold py-4 px-10 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.02]`}>
                            Support Our Mission
                        </a>
                    </AnimatedSection>
                </div>

                {/* Image Content - Right Side */}
                <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-5">
                    <AnimatedSection delay={400} className="relative shadow-2xl rounded-3xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.01] border-4 border-white">
                        <img 
                            src="/images/nkf30.jpg" 
                            alt="A diverse group of people smiling in a community health setting" 
                            className="w-full h-auto object-cover rounded-3xl"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x550/D1F0E6/134E4A?text=Health+Access+Image+Placeholder" }}
                        />
                    </AnimatedSection>
                </div>
            </div>
        </div>
      </div>
      
      {/* 2. Impact Section - Highlighted Block Grid */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={100} className="text-center mb-16">
                <h2 className={`text-4xl font-extrabold text-gray-900 mb-3`}>Impact and <span className={`text-${TEAL_BASE}`}>Accountability</span></h2>
                <p className="text-lg text-gray-600">Transparent metrics demonstrating our commitment to improving community health.</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactMetrics.map((metric, index) => (
                <AnimatedSection key={index} delay={200 + index * 100}>
                  {/* Distinct card using shadow and border radius for a chunky look */}
                  <div className={`p-10 rounded-xl text-center bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-${TEAL_BASE}/20 border-t-4 border-${TEAL_BASE}`}>
                    <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-${TEAL_BASE}/10 mb-6`}>
                      <Icon path={metric.iconPath} colorClass={`text-${TEAL_BASE}`} size={8} />
                    </div>
                    <p className={`text-6xl font-black text-gray-900 mb-1 tracking-tighter`}>{metric.value}</p>
                    <p className="text-lg font-bold text-gray-600">{metric.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
        </div>
      </div>

      {/* 3. Program/Services Section - Vertical Cards with Pink CTA */}
      <div className={`py-24 bg-white border-t border-gray-200`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={400} className="text-center mb-16">
                <h2 className={`text-4xl font-extrabold text-gray-900 mb-3`}>Our <span className={`text-${PINK_BASE}`}>Core</span> Services</h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">Structured programs designed for quick, equitable, and comprehensive healthcare delivery.</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {corePrograms.map((item, index) => (
                <AnimatedSection key={item.id} delay={500 + index * 100}>
                  {/* Vertical card layout with image on top */}
                  <div className={`h-full bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 transform hover:shadow-2xl hover:shadow-pink-700/10 border-2 border-gray-200`}>
                    
                    {/* Visual Placeholder (Image URL) */}
                    <div className={`h-48 w-full bg-cover bg-center border-b-4 border-${PINK_BASE}`}
                         style={{ backgroundImage: `url('${item.imageUrl}')` }}
                    >
                      {/* Optional Text Overlay */}
                      <div className="flex items-center justify-center h-full bg-black/20">
                        <span className="text-xl font-bold text-white drop-shadow-lg">{item.title}</span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between h-auto">
                      <h3 className="font-extrabold text-gray-900 text-2xl mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-base mb-6">{item.detail}</p>
                      
                      <a href="#request-help" className={`inline-block text-sm font-bold text-${PINK_BASE} hover:text-pink-800 transition duration-150 border-b-2 border-transparent hover:border-${PINK_BASE}`}>
                          Get Enrollment Details &rarr;
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
        </div>
      </div>

      {/* 4. Action Center - Vertical Stacked Block Design */}
      <div id="action-center" className="py-24 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={700} className="text-center mb-16">
              <h2 className={`text-4xl font-extrabold text-gray-900 mb-3`}>Connect & <span className={`text-${TEAL_BASE}`}>Enroll</span></h2>
              <p className="text-lg text-gray-600">Secure the health coverage or specialized support you and your family need today.</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Left Column: CTA/Donation Pitch Card (Pink Accent) */}
              <AnimatedSection delay={800} className="lg:col-span-2">
                <div id="fund-impact" className={`p-8 rounded-xl bg-${PINK_BASE} text-white shadow-2xl h-full flex flex-col justify-center`}>
                  
                      <Icon path="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" colorClass="text-pink-200" size={10} className="mb-4 mx-auto" />
                      
                      <h3 className="text-3xl font-black mb-4 tracking-tight leading-snug">
                        Ready to make an impact?
                      </h3>
                      <p className="text-base font-light mb-8 opacity-90">
                        Your contribution directly funds community clinics and essential medical supplies for those in need.
                      </p>
                      
                      <button
                          onClick={() => console.log('Simulating donation link click')}
                          className={`w-full text-${PINK_BASE} bg-white hover:bg-gray-100 font-extrabold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-[1.01] tracking-wider uppercase`}
                      >
                          Contribute Now
                      </button>
                  
                </div>
              </AnimatedSection>

              {/* Right Column: Support Form Card (Teal Accent) */}
              <AnimatedSection delay={900} className="lg:col-span-3">
                <div id="request-help" className={`bg-white p-8 rounded-xl shadow-2xl border-t-8 border-${TEAL_BASE}`}>
                  <h2 className={`text-3xl font-extrabold text-${TEAL_BASE} mb-8 pb-4 border-b-2 border-gray-200`}>Begin Enrollment or Request Help</h2>
                  
                  {/* Notification Banner */}
                  <NotificationBanner status={submitStatus} />

                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name, Email, and Phone Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="name" className={labelClasses}>Full Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} disabled={submitStatus === 'loading'} />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClasses}>Contact Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} disabled={submitStatus === 'loading'} />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClasses}>Phone (Optional)</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} disabled={submitStatus === 'loading'} />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className={labelClasses}>Type of Support Needed</label>
                      <input type="text" id="subject" name="subject" placeholder="e.g., Enrollment, Mental Health, Telehealth" value={formData.subject} onChange={handleChange} required className={inputClasses} disabled={submitStatus === 'loading'} />
                    </div>

                    {/* Message Area */}
                    <div>
                      <label htmlFor="message" className={labelClasses}>Describe your specific needs</label>
                      <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className={`${inputClasses} resize-y`} disabled={submitStatus === 'loading'}></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className={`w-full text-white font-bold py-4 px-6 mt-6 rounded-xl shadow-xl transition-all duration-300 transform 
                        flex items-center justify-center space-x-3 tracking-wider uppercase
                        ${submitStatus === 'loading' 
                          ? 'bg-gray-400 cursor-not-allowed text-gray-700' 
                          : `bg-${TEAL_BASE} hover:bg-teal-800 shadow-${TEAL_BASE}/40`
                        }`}
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <Icon path="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" colorClass="text-white" size={5} className="animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                          <>
                              <span>Submit Confidential Request</span>
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
  );
}
