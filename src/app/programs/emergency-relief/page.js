// // app/programs/emergency-relief/page.jsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';

// export default function EmergencyRelief() {
//   const [activeTab, setActiveTab] = useState('urgent');
//   const [isVisible, setIsVisible] = useState(false);
//   const [donationAmount, setDonationAmount] = useState(75);
//   const [timeSinceDisaster, setTimeSinceDisaster] = useState({ days: 0, hours: 12 });
//   const [animatedStats, setAnimatedStats] = useState({
//     families: 0,
//     meals: 0,
//     shelters: 0
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

//     const disasterTimer = setInterval(() => {
//       setTimeSinceDisaster(prev => {
//         const newHours = prev.hours + 1;
//         if (newHours >= 24) {
//           return { days: prev.days + 1, hours: 0 };
//         }
//         return { ...prev, hours: newHours };
//       });
//     }, 60000);

//     return () => {
//       observer.disconnect();
//       clearInterval(disasterTimer);
//     };
//   }, []);

//   // SEO Keywords for Emergency Relief
//   const seoKeywords = [
//     "emergency relief", "disaster response", "humanitarian aid",
//     "crisis response", "emergency assistance", "disaster relief",
//     "emergency response", "humanitarian crisis", "disaster recovery",
//     "emergency aid", "crisis relief", "humanitarian assistance",
//     "emergency support", "disaster assistance", "crisis aid",
//     "emergency services", "disaster management", "humanitarian relief",
//     "emergency help", "disaster support"
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

//     increment(2500, 0, (val) => setAnimatedStats(prev => ({ ...prev, families: val })));
//     increment(50000, 0, (val) => setAnimatedStats(prev => ({ ...prev, meals: val })));
//     increment(120, 0, (val) => setAnimatedStats(prev => ({ ...prev, shelters: val })));
//   };

//   const handleEmergencyDonate = (amount) => {
//     setDonationAmount(amount);
//     console.log(`Emergency donation of $${amount} processed`);
//   };

//   const emergencyItems = [
//     { name: 'Emergency Food Kit', cost: 35, provides: '1 week of meals for a family' },
//     { name: 'Clean Water Supply', cost: 25, provides: 'Safe water for 10 people for 1 week' },
//     { name: 'Emergency Shelter', cost: 100, provides: 'Temporary housing for a family' },
//     { name: 'Medical First Aid', cost: 50, provides: 'Essential medical supplies for 20 people' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden">
//       {/* SEO Keywords Meta */}
//       <div className="hidden">
//         {seoKeywords.join(", ")}
//       </div>

//       {/* Emergency Alert Bar */}
//       <div className="bg-[#00B8C8] text-white py-3 px-4 text-center">
//         <div className="flex items-center justify-center space-x-4">
//           <div className="flex items-center">
//             <div className="w-3 h-3 bg-white rounded-full animate-ping mr-2"></div>
//             <span className="font-bold">ACTIVE EMERGENCY RESPONSE</span>
//           </div>
//           <span>•</span>
//           <span>Earthquake Relief in Turkey & Syria</span>
//           <span>•</span>
//           <span>Your Urgent Help Needed</span>
//         </div>
//       </div>

//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00B8C8]/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       {/* Header Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00B8C8] to-cyan-600">
//         <div className="absolute inset-0 bg-cyan-900/30"></div>

//         <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
//           <div className={`transition-all duration-1000 transform ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             {/* Emergency Status */}
//             <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
//               <span className="text-lg font-medium tracking-wider">URGENT: DISASTER RESPONSE ACTIVATED</span>
//             </div>
            
//             {/* Main Heading */}
//             <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
//                 Emergency
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
//                 Relief Response
//               </span>
//             </h1>
            
//             <div className="bg-[#00B8C8]/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-cyan-400/30 max-w-2xl mx-auto">
//               <div className="flex items-center justify-center space-x-8 text-lg">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-yellow-300">{timeSinceDisaster.days}</div>
//                   <div className="text-cyan-200 text-sm">Days Since Disaster</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-yellow-300">{timeSinceDisaster.hours}</div>
//                   <div className="text-cyan-200 text-sm">Hours Responding</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-yellow-300">8.7M</div>
//                   <div className="text-cyan-200 text-sm">People Affected</div>
//                 </div>
//               </div>
//             </div>

//             <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed font-light opacity-90">
//               <span className="text-yellow-300 font-semibold">Immediate action needed:</span> Your emergency relief donation 
//               provides life-saving humanitarian aid to families affected by natural disasters and crisis situations.
//             </p>

//             {/* Emergency Impact Stats */}
//             <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
//               {[
//                 { number: animatedStats.families.toLocaleString(), label: 'Families Assisted', suffix: '+' },
//                 { number: animatedStats.meals.toLocaleString(), label: 'Emergency Meals', suffix: '+' },
//                 { number: animatedStats.shelters, label: 'Shelters Provided', suffix: '+' }
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

//             {/* Emergency Donation CTA */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
//               <div className="flex items-center justify-center mb-4">
//                 <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping mr-3"></div>
//                 <h3 className="text-2xl font-bold text-white">URGENT: Send Emergency Relief Now</h3>
//               </div>
              
//               <p className="text-cyan-100 mb-6 text-center">
//                 Your immediate disaster response donation delivers critical humanitarian aid to crisis zones
//               </p>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
//                 {[35, 75, 150, 500].map((amount) => (
//                   <button
//                     key={amount}
//                     onClick={() => handleEmergencyDonate(amount)}
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
//                 EMERGENCY RELIEF DONATION: ${donationAmount}
//               </button>
              
//               <p className="text-yellow-200 text-sm text-center">
//                 $75 provides emergency shelter • $150 feeds a family for one month • $500 funds crisis response
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
//               { id: 'urgent', label: 'Urgent Relief Needs' },
//               { id: 'response', label: 'Crisis Response' },
//               { id: 'crises', label: 'Active Emergencies' },
//               { id: 'donate', label: 'Emergency Support' },
//               { id: 'volunteer', label: 'Join Relief Team' }
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

//       {/* Urgent Needs Section */}
//       {activeTab === 'urgent' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Critical Emergency Relief Supplies</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Your emergency relief donation provides immediate life-saving humanitarian assistance to families in crisis zones
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//               {emergencyItems.map((item, index) => (
//                 <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 border border-cyan-100">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#00B8C8] to-cyan-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                     ${item.cost}
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-3">{item.name}</h3>
//                   <p className="text-gray-600 text-sm mb-4">{item.provides}</p>
//                   <button 
//                     onClick={() => handleEmergencyDonate(item.cost)}
//                     className="w-full bg-[#00B8C8] text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-colors duration-300"
//                   >
//                     Support Relief: ${item.cost}
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Emergency Response Progress */}
//             <div className="bg-gradient-to-br from-[#00B8C8] to-cyan-600 rounded-3xl p-8 text-white">
//               <h3 className="text-3xl font-bold mb-6 text-center">Emergency Relief Response Progress</h3>
//               <div className="space-y-6">
//                 {responseProgress.map((item, index) => (
//                   <div key={index}>
//                     <div className="flex justify-between mb-2">
//                       <span className="font-semibold">{item.item}</span>
//                       <span className="font-bold">{item.progress}%</span>
//                     </div>
//                     <div className="w-full bg-white/30 rounded-full h-3">
//                       <div 
//                         className="bg-yellow-400 h-3 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: `${item.progress}%` }}
//                       ></div>
//                     </div>
//                     <div className="text-cyan-200 text-sm mt-1">{item.status}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Our Response Section */}
//       {activeTab === 'response' && (
//         <section className="py-20 bg-cyan-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Rapid Emergency Crisis Response</h2>
//               <p className="text-xl text-gray-600">How we deliver immediate humanitarian aid within hours of a disaster</p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-900 mb-6">24/7 Disaster Response Protocol</h3>
//                 <div className="space-y-6">
//                   {responseProtocol.map((step, index) => (
//                     <div key={index} className="flex items-start group">
//                       <div className="w-8 h-8 bg-[#00B8C8] text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                         {index + 1}
//                       </div>
//                       <div>
//                         <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
//                         <p className="text-gray-600">{step.description}</p>
//                         <div className="text-[#00B8C8] font-semibold mt-2">{step.timeline}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="bg-white rounded-3xl p-8 shadow-lg border border-cyan-100">
//                 <h4 className="text-2xl font-bold text-gray-900 mb-6">Emergency Response Team Deployment</h4>
//                 <div className="space-y-4">
//                   {deploymentStats.map((stat, index) => (
//                     <div key={index} className="flex justify-between items-center p-4 bg-cyan-50 rounded-2xl">
//                       <span className="font-semibold text-gray-700">{stat.team}</span>
//                       <span className="text-[#00B8C8] font-bold">{stat.count} deployed</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Real-time Response Map */}
//             <div className="bg-white rounded-3xl p-8 shadow-lg border border-cyan-100">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Active Emergency Relief Operations</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {activeOperations.map((op, index) => (
//                   <div key={index} className="text-center p-6 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl border border-cyan-200">
//                     <div className="text-2xl font-bold text-[#00B8C8] mb-2">{op.location}</div>
//                     <div className="text-gray-700 mb-3">{op.type}</div>
//                     <div className="text-sm text-gray-600">{op.status}</div>
//                     <div className="text-cyan-600 font-semibold mt-2">{op.people} people assisted</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Active Crises Section */}
//       {activeTab === 'crises' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Active Emergency Crises</h2>
//               <p className="text-xl text-gray-600">Current disasters where your emergency relief support is urgently needed</p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {activeCrises.map((crisis, index) => (
//                 <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 border border-cyan-100">
//                   <div className={`h-4 ${
//                     crisis.urgency === 'critical' ? 'bg-[#00B8C8]' : 
//                     crisis.urgency === 'high' ? 'bg-cyan-500' : 'bg-yellow-500'
//                   }`}></div>
//                   <div className="p-8">
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-2xl font-bold text-gray-900">{crisis.location}</h3>
//                       <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                         crisis.urgency === 'critical' ? 'bg-cyan-100 text-cyan-700' : 
//                         crisis.urgency === 'high' ? 'bg-blue-100 text-blue-700' : 
//                         'bg-yellow-100 text-yellow-700'
//                       }`}>
//                         {crisis.urgency.toUpperCase()}
//                       </span>
//                     </div>
                    
//                     <p className="text-gray-600 mb-6">{crisis.description}</p>
                    
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                       <div className="text-center p-3 bg-cyan-50 rounded-xl">
//                         <div className="text-lg font-bold text-[#00B8C8]">{crisis.affected}</div>
//                         <div className="text-sm text-gray-600">People Affected</div>
//                       </div>
//                       <div className="text-center p-3 bg-blue-50 rounded-xl">
//                         <div className="text-lg font-bold text-blue-600">${crisis.fundingNeeded}M</div>
//                         <div className="text-sm text-gray-600">Relief Funding Needed</div>
//                       </div>
//                     </div>
                    
//                     <div className="space-y-3 mb-6">
//                       {crisis.needs.map((need, idx) => (
//                         <div key={idx} className="flex items-center text-gray-600">
//                           <div className="w-2 h-2 bg-[#00B8C8] rounded-full mr-3"></div>
//                           <span className="text-sm">{need}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <button 
//                       onClick={() => handleEmergencyDonate(100)}
//                       className="w-full bg-[#00B8C8] text-white py-4 rounded-xl font-bold hover:bg-cyan-600 transition-colors duration-300"
//                     >
//                       Support {crisis.location} Emergency Relief
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Emergency Donation Section */}
//       {activeTab === 'donate' && (
//         <section className="py-20 bg-gradient-to-br from-[#00B8C8] to-cyan-600">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//             <h2 className="text-5xl font-bold mb-6">Emergency Relief Donation Center</h2>
//             <p className="text-xl mb-12 opacity-90">Your immediate support provides crisis response and humanitarian aid</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//               {emergencyDonationOptions.map((option, index) => (
//                 <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
//                   <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
//                   <p className="text-cyan-100 mb-6">{option.description}</p>
//                   <div className="text-yellow-300 text-lg font-bold mb-4">{option.impact}</div>
//                   <button 
//                     onClick={() => handleEmergencyDonate(option.amount)}
//                     className="w-full bg-[#00B8C8] text-white py-4 rounded-2xl font-bold hover:bg-cyan-600 transition-colors duration-300"
//                   >
//                     Donate ${option.amount}
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Custom Emergency Donation */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
//               <h3 className="text-3xl font-bold mb-4">Custom Emergency Relief Donation</h3>
//               <p className="text-cyan-100 mb-6">Enter any amount to support our emergency crisis response efforts</p>
              
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
//                   RUSH EMERGENCY RELIEF: ${donationAmount}
//                 </button>
                
//                 <p className="text-yellow-200 text-sm">
//                   Your emergency relief donation will be deployed within 24 hours to active crisis zones
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
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Join Our Emergency Relief Team</h2>
//               <p className="text-xl text-gray-600">Help us deliver critical humanitarian aid to disaster-affected communities</p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-900 mb-6">Emergency Response Roles</h3>
//                 <div className="space-y-6">
//                   {emergencyRoles.map((role, index) => (
//                     <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100">
//                       <div className="flex items-start justify-between mb-4">
//                         <h4 className="text-xl font-bold text-[#00B8C8]">{role.title}</h4>
//                         <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold">
//                           {role.type}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-4">{role.description}</p>
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm text-gray-500">{role.requirements}</span>
//                         <button className="bg-[#00B8C8] text-white px-6 py-2 rounded-xl font-semibold hover:bg-cyan-600 transition-colors duration-300">
//                           Apply Now
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-gradient-to-br from-[#00B8C8] to-cyan-600 rounded-3xl p-8 text-white">
//                 <h3 className="text-3xl font-bold mb-6">Emergency Response Training</h3>
//                 <p className="text-cyan-100 mb-6">Get certified to join our disaster relief teams worldwide</p>
                
//                 <div className="space-y-4 mb-8">
//                   {trainingPrograms.map((program, index) => (
//                     <div key={index} className="flex items-center p-4 bg-white/10 rounded-2xl">
//                       <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4"></div>
//                       <div>
//                         <div className="font-semibold">{program.name}</div>
//                         <div className="text-yellow-200 text-sm">{program.duration}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <button className="w-full bg-white text-[#00B8C8] py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
//                   Start Emergency Training
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Emergency Footer CTA */}
//       <section className="py-16 bg-[#00B8C8] text-white">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-center mb-4">
//             <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping mr-3"></div>
//             <h2 className="text-4xl font-bold">Lives Depend on Your Emergency Response</h2>
//           </div>
//           <p className="text-xl mb-8 opacity-90">Your emergency relief donation reaches crisis zones within hours</p>
//           <button 
//             onClick={() => handleEmergencyDonate(100)}
//             className="bg-cyan-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-cyan-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//           >
//             RUSH EMERGENCY RELIEF NOW
//           </button>
//           <p className="text-yellow-200 text-sm mt-4">
//             Every minute counts. Your emergency response could save a life today.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// // Enhanced Data with Emergency Relief Keywords
// const responseProgress = [
//   { item: 'Emergency Shelter Deployment', progress: 75, status: '1,200 shelters delivered' },
//   { item: 'Food Distribution', progress: 60, status: '45,000 emergency meals provided' },
//   { item: 'Medical Team Deployment', progress: 85, status: '32 emergency teams active' },
//   { item: 'Clean Water Supply', progress: 45, status: 'Emergency water purification ongoing' }
// ];

// const responseProtocol = [
//   {
//     title: 'Immediate Crisis Assessment',
//     description: 'Rapid emergency damage assessment and needs identification within 6 hours of disaster',
//     timeline: 'Within 6 hours'
//   },
//   {
//     title: 'Emergency Relief Supply Dispatch',
//     description: 'Pre-positioned emergency relief kits deployed to affected areas',
//     timeline: 'Within 12 hours'
//   },
//   {
//     title: 'Expert Emergency Team Deployment',
//     description: 'Specialized emergency response teams including medical, shelter, and logistics experts',
//     timeline: 'Within 24 hours'
//   },
//   {
//     title: 'Sustained Emergency Relief Operations',
//     description: 'Long-term emergency recovery and rebuilding support for affected communities',
//     timeline: 'Ongoing emergency support'
//   }
// ];

// const deploymentStats = [
//   { team: 'Emergency Medical Teams', count: '32' },
//   { team: 'Search & Rescue Teams', count: '18' },
//   { team: 'Emergency Logistics Experts', count: '25' },
//   { team: 'Crisis Mental Health Support', count: '15' }
// ];

// const activeOperations = [
//   { location: 'Turkey Earthquake', type: 'Emergency Search & Rescue', status: 'Active', people: '12,500' },
//   { location: 'Syria Crisis', type: 'Emergency Medical Relief', status: 'Critical', people: '8,200' },
//   { location: 'Ukraine Conflict', type: 'Humanitarian Emergency Aid', status: 'Ongoing', people: '45,000' }
// ];

// const activeCrises = [
//   {
//     location: 'Turkey & Syria Earthquake',
//     urgency: 'critical',
//     description: 'Massive earthquake affecting millions across the region. Urgent need for emergency search and rescue, medical care, and shelter.',
//     affected: '8.7M',
//     fundingNeeded: 85,
//     needs: ['Emergency search and rescue equipment', 'Emergency medical supplies', 'Emergency temporary shelters', 'Crisis winter clothing and blankets']
//   },
//   {
//     location: 'Ukraine Humanitarian Crisis',
//     urgency: 'high',
//     description: 'Ongoing conflict creating massive displacement and humanitarian emergency needs across the country.',
//     affected: '17.6M',
//     fundingNeeded: 120,
//     needs: ['Emergency food and water supplies', 'Crisis medical assistance', 'Emergency shelter support', 'Psychological crisis first aid']
//   }
// ];

// const emergencyDonationOptions = [
//   {
//     title: 'Emergency Survival Kit',
//     amount: 75,
//     description: 'Provides immediate life-saving emergency supplies for a family',
//     impact: 'Saves 1 family in crisis'
//   },
//   {
//     title: 'Disaster Medical Fund',
//     amount: 150,
//     description: 'Funds emergency medical care and crisis supplies',
//     impact: 'Treats 50 emergency patients'
//   },
//   {
//     title: 'Search & Rescue Team',
//     amount: 500,
//     description: 'Supports one emergency search and rescue team for 3 days',
//     impact: 'Rescues multiple lives in crisis'
//   },
//   {
//     title: 'Emergency Shelter Camp',
//     amount: 1000,
//     description: 'Establishes temporary emergency shelter for displaced families',
//     impact: 'Shelters 20 crisis-affected families'
//   }
// ];

// const emergencyRoles = [
//   {
//     title: 'Emergency Response Medic',
//     type: 'Medical',
//     description: 'Provide emergency medical care in disaster zones and field hospitals during crisis situations',
//     requirements: 'Emergency medical certification required'
//   },
//   {
//     title: 'Emergency Logistics Coordinator',
//     type: 'Field Support',
//     description: 'Manage emergency supply chains and distribution of crisis relief items',
//     requirements: 'Emergency logistics experience'
//   },
//   {
//     title: 'Crisis Counselor',
//     type: 'Mental Health',
//     description: 'Provide emergency psychological first aid and trauma support to crisis-affected communities',
//     requirements: 'Crisis mental health background'
//   }
// ];

// const trainingPrograms = [
//   { name: 'Emergency First Response', duration: '3-day emergency certification' },
//   { name: 'Disaster Logistics Management', duration: '5-day emergency intensive' },
//   { name: 'Crisis Psychological Support', duration: '4-day emergency training' },
//   { name: 'Search and Rescue Operations', duration: '6-day emergency field training' }
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
        <span className="font-bold">Thank You!</span> Your request/offer has been recorded. We will be in touch shortly.
      </AnimatedSection>
    );
  }
  if (status === 'error') {
    return (
      <AnimatedSection className={`p-4 mb-6 text-sm text-white rounded-lg bg-${PINK_BASE} shadow-lg shadow-${PINK_BASE}/40`}>
        <span className="font-bold">Error!</span> Failed to submit. Please ensure all fields are correct and try again.
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
  
  // --- Data Definitions and State (Updated for Emergency Relief) ---
  const impactMetrics = [
    { value: '180K+', label: 'People Reached', iconPath: "M12 4.354a4 4 0 110 5.292V15l-2 2h4l-2 2v-4.586l4.243-4.243a3 3 0 00-4.243-4.243z" }, // Heart
    { value: '7,500', label: 'Aid Packages Delivered', iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }, // Package
    { value: '96%', label: 'Funds Directly to Aid', iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }, // Check Circle
  ];

  const coreReliefAreas = [
    { id: 1, title: "Food & Water Distribution", detail: "Rapid deployment of food packs, clean water, and nutritional supplements to affected areas. Our logistics team ensures supplies reach remote locations quickly.", imageUrl: "/images/nkf29.jpg" },
    { id: 2, title: "Shelter & Basic Needs", detail: "Providing emergency tents, blankets, hygiene kits, and temporary housing solutions. This covers immediate safety and dignity needs post-disaster.", imageUrl: "/images/nkf30.jpg" },
    { id: 3, title: "Medical & Health Services", detail: "Mobile clinics, first aid, and critical medical supplies for immediate health crises. We prioritize wound care, disease prevention, and triage.", imageUrl: "/images/nkf15.jpg" },
    { id: 4, title: "Child Protection & Support", detail: "Safe zones, psychological first aid, and reunification services for children caught in emergencies. Ensuring their physical and emotional recovery is paramount.", imageUrl: "/images/nkf26.jpg" },
  ];

  const [formData, setFormData] = useState({ name: '', email: '', type: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); 
  const [activeReliefArea, setActiveReliefArea] = useState(coreReliefAreas[0]);
  const [activeActionTab, setActiveActionTab] = useState('donate'); // 'donate' or 'request'

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
      const success = Math.random() > 0.1; // 90% success rate

      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', type: '', message: '' }); 
      } else {
        setSubmitStatus('error');
      }

      setTimeout(() => setSubmitStatus('idle'), 5000); // Reset after 5 seconds
    }, 1500); // 1.5 seconds delay
  };

  // Input Field Classes
  const inputClasses = `w-full p-4 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-${TEAL_BASE} focus:border-${TEAL_BASE} transition-all shadow-sm`;
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2 tracking-wide";
  
  // Refactor function for submit button classes to avoid complex nested template literals
  const getSubmitButtonClasses = (status) => {
      const base = "w-full text-white font-bold py-4 px-6 mt-6 rounded-xl shadow-xl transition-all duration-300 transform flex items-center justify-center space-x-3 tracking-wider uppercase";
      if (status === 'loading') {
          return `${base} bg-gray-400 cursor-not-allowed text-gray-700`;
      }
      return `${base} bg-${TEAL_BASE} hover:bg-teal-800 shadow-${TEAL_BASE}/40`;
  }

  // --- Main Component Render ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      
      {/* 1. Hero Section - Minimalist and Contained */}
      <div className={`relative bg-white pt-24 pb-16 overflow-hidden border-b-8 border-gray-200`}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection delay={0}>
                <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-snug">
                    <span className={`font-extrabold text-${TEAL_BASE} block mb-2`}>Emergency Relief Fund</span>
                    Mobilizing Immediate Support for Global Crises.
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                    Your contribution ensures rapid deployment of aid in the most critical hours of a disaster.
                </p>
            </AnimatedSection>
            <AnimatedSection delay={200} className="mt-10">
                <a href="#action-center" className={`inline-block bg-${PINK_BASE} hover:bg-pink-800 text-white font-extrabold py-4 px-12 rounded-full shadow-lg shadow-${PINK_BASE}/30 transition duration-300 transform hover:scale-[1.03] tracking-wider`}>
                    Urgent Donation Access &rarr;
                </a>
            </AnimatedSection>
        </div>
      </div>
      
      {/* 2. Impact Section - Data Ticker / Inline Metrics */}
      <div className={`py-12 bg-white border-b-4 border-${TEAL_BASE}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={100}>
                <div className="flex flex-col md:flex-row justify-around items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {impactMetrics.map((metric, index) => (
                        <div key={index} className="p-4 flex-1 text-center">
                            <p className={`text-4xl sm:text-5xl font-black text-${TEAL_BASE} tracking-tighter mb-1`}>{metric.value}</p>
                            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </div>
      </div>

      {/* 3. Core Relief Areas - Two-Column Tabbed Layout */}
      <div className={`py-24 bg-gray-100`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={400} className="text-center mb-16">
                <h2 className={`text-3xl font-extrabold text-gray-900 mb-3`}>Targeted <span className={`text-${PINK_BASE}`}>Relief</span> Programs</h2>
                <p className="text-base text-gray-600 max-w-4xl mx-auto">Focused intervention to address the most critical needs in disaster and crisis zones.</p>
            </AnimatedSection>

            <div className="lg:grid lg:grid-cols-12 lg:gap-10">
                
                {/* Left Column: Vertical Navigation (Tabs) */}
                <AnimatedSection delay={500} className="lg:col-span-4 mb-8 lg:mb-0">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden p-3 space-y-2">
                        {coreReliefAreas.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveReliefArea(item)}
                                className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center justify-between text-lg font-semibold
                                    ${activeReliefArea.id === item.id 
                                        ? `bg-${TEAL_BASE} text-white shadow-md shadow-${TEAL_BASE}/30` 
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                <span>{item.title}</span>
                                <Icon path="M9 5l7 7-7 7" colorClass={activeReliefArea.id === item.id ? "text-white" : "text-gray-400"} size={5} className="w-5 h-5"/>
                            </button>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Right Column: Content Display */}
                <AnimatedSection delay={600} className="lg:col-span-8">
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                        <img 
                            src={activeReliefArea.imageUrl} 
                            alt={activeReliefArea.title} 
                            className="w-full h-72 object-cover border-b-4 border-gray-200" 
                            onError={(e) => { e.target.onerror = null; e.target.src = activeReliefArea.imageUrl; }}
                        />
                        <div className="p-8">
                            <h3 className={`text-3xl font-extrabold mb-3 ${activeReliefArea.id % 2 !== 0 ? `text-${TEAL_BASE}` : `text-${PINK_BASE}`}`}>{activeReliefArea.title}</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">{activeReliefArea.detail}</p>
                            <a href="#action-center" className={`mt-6 inline-block text-base font-bold text-${TEAL_BASE} hover:text-teal-800 transition duration-150 border-b-2 border-transparent hover:border-${TEAL_BASE}`}>
                                Support this Area of Relief &rarr;
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </div>

      {/* 4. Action Center - Unified Card with Internal Tabs */}
      <div id="action-center" className="py-24 bg-white">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={700}>
                <div className={`bg-gray-50 p-6 sm:p-10 rounded-xl shadow-2xl border-t-8 border-${PINK_BASE}`}>
                  <h2 className={`text-3xl font-extrabold text-gray-900 mb-6 text-center`}>Take Immediate Action</h2>
                  
                  {/* Tab Navigation */}
                  <div className="flex border-b border-gray-300 mb-8">
                      <button
                          onClick={() => setActiveActionTab('donate')}
                          className={`flex-1 py-3 text-lg font-semibold transition-all duration-300 border-b-4
                            ${activeActionTab === 'donate' 
                                ? `text-${PINK_BASE} border-${PINK_BASE} bg-pink-50/50` 
                                : 'text-gray-500 border-transparent hover:text-gray-700'}`
                          }
                      >
                          <Icon path="M17 9v2.25l-2.67 1.33A2.25 2.25 0 0112 11.25V9m0-3a2.25 2.25 0 014.5 0 2.25 2.25 0 01-4.5 0zM12 9v2.25l2.67 1.33A2.25 2.25 0 0017 11.25V9m0-3a2.25 2.25 0 014.5 0 2.25 2.25 0 01-4.5 0z" colorClass={activeActionTab === 'donate' ? `text-${PINK_BASE}` : 'text-gray-500'} size={5} className="inline-block mr-2" />
                          Donate Now
                      </button>
                      <button
                          onClick={() => setActiveActionTab('request')}
                          className={`flex-1 py-3 text-lg font-semibold transition-all duration-300 border-b-4
                            ${activeActionTab === 'request' 
                                ? `text-${TEAL_BASE} border-${TEAL_BASE} bg-teal-50/50` 
                                : 'text-gray-500 border-transparent hover:text-gray-700'}`
                          }
                      >
                          <Icon path="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.027 5.861 5 8.243 5 11v3.159c0 .538-.214 1.055-.595 1.436L3 17h5m-2 2a2 2 0 104 0 2 2 0 00-4 0z" colorClass={activeActionTab === 'request' ? `text-${TEAL_BASE}` : 'text-gray-500'} size={5} className="inline-block mr-2" />
                          Get / Offer Help
                      </button>
                  </div>

                  {/* Tab Content: Donate */}
                  {activeActionTab === 'donate' && (
                    <AnimatedSection delay={0} className="text-center p-4">
                        <p className="text-gray-700 mb-6 text-base">
                            100% of your gift goes directly to providing essential supplies in crisis zones. Please be generous.
                        </p>
                        
                        <div className="flex justify-center space-x-4 mb-8">
                            {[50, 100, 500].map(amount => (
                                <button key={amount} className={`text-xl font-bold py-3 px-6 rounded-lg transition-all duration-200 border-2 border-${PINK_BASE} text-${PINK_BASE} hover:bg-pink-100`}>
                                    ${amount}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => console.log('Simulating donation link click')}
                            className={`w-full text-white bg-${PINK_BASE} hover:bg-pink-800 font-extrabold py-4 rounded-xl shadow-lg shadow-${PINK_BASE}/40 transition duration-300 transform hover:scale-[1.01] uppercase tracking-wider`}
                        >
                            Complete Donation
                        </button>
                    </AnimatedSection>
                  )}

                  {/* Tab Content: Request/Offer Help Form */}
                  {activeActionTab === 'request' && (
                    <AnimatedSection delay={0} className="p-4">
                      {/* Notification Banner */}
                      <NotificationBanner status={submitStatus} />

                      <form onSubmit={handleSubmit} className="space-y-6">
                        
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
                        
                        <div>
                          <label htmlFor="type" className={labelClasses}>I want to...</label>
                          <select id="type" name="type" value={formData.type} onChange={handleChange} required className={inputClasses} disabled={submitStatus === 'loading'}>
                            <option value="">Select an option</option>
                            <option value="request_aid">Request Aid / Assistance</option>
                            <option value="offer_volunteer">Offer Volunteer Support</option>
                            <option value="other_inquiry">Other Emergency Inquiry</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className={labelClasses}>Briefly describe your need or offer</label>
                          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className={`${inputClasses} resize-y`} disabled={submitStatus === 'loading'}></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={submitStatus === 'loading'}
                          className={getSubmitButtonClasses(submitStatus)} // Using the helper function now
                        >
                          {submitStatus === 'loading' ? (
                            <>
                              <Icon path="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" colorClass="text-white" size={5} className="animate-spin" />
                              <span>Processing Request...</span>
                            </>
                          ) : (
                              <>
                                  <span>Submit Form</span>
                                  <Icon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" colorClass="text-white" size={5} />
                              </>
                          )}
                        </button>
                      </form>
                    </AnimatedSection>
                  )}

                </div>
              </AnimatedSection>
            </div>
        </div>
      </div>
  );
}
