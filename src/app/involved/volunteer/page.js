// // app/volunteer/page.jsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';

// export default function Volunteer() {
//   const [activeTab, setActiveTab] = useState('opportunities');
//   const [isVisible, setIsVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     skills: [],
//     availability: '',
//     experience: '',
//     interests: []
//   });
//   const [animatedStats, setAnimatedStats] = useState({
//     volunteers: 0,
//     hours: 0,
//     projects: 0
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

//   // SEO Keywords for Volunteer Page
//   const seoKeywords = [
//     "volunteer opportunities", "volunteer programs", "community volunteering",
//     "volunteer work", "volunteer positions", "volunteer application",
//     "volunteer services", "volunteer roles", "volunteer with us",
//     "volunteer today", "volunteer experience", "volunteer benefits",
//     "volunteer team", "volunteer community", "volunteer impact",
//     "volunteer support", "volunteer network", "volunteer training",
//     "volunteer sign up", "volunteer registration"
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

//     increment(12500, 0, (val) => setAnimatedStats(prev => ({ ...prev, volunteers: val })));
//     increment(85000, 0, (val) => setAnimatedStats(prev => ({ ...prev, hours: val })));
//     increment(450, 0, (val) => setAnimatedStats(prev => ({ ...prev, projects: val })));
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const toggleSkill = (skill) => {
//     setFormData(prev => ({
//       ...prev,
//       skills: prev.skills.includes(skill)
//         ? prev.skills.filter(s => s !== skill)
//         : [...prev.skills, skill]
//     }));
//   };

//   const toggleInterest = (interest) => {
//     setFormData(prev => ({
//       ...prev,
//       interests: prev.interests.includes(interest)
//         ? prev.interests.filter(i => i !== interest)
//         : [...prev.interests, interest]
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Volunteer application:', formData);
//     // Handle form submission
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50 overflow-hidden">
//       {/* SEO Keywords Meta */}
//       <div className="hidden">
//         {seoKeywords.join(", ")}
//       </div>

//       {/* Geometric Background Pattern */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-full opacity-5">
//           {/* Grid Pattern */}
//           <div className="absolute inset-0" style={{
//             backgroundImage: `linear-gradient(#00B8C8 1px, transparent 1px), linear-gradient(90deg, #00B8C8 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }}></div>
//         </div>
//         <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#00B8C8]/40 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl"></div>
//       </div>

//       {/* Header Section with Asymmetric Design */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#00B8C8] to-cyan-600">
//           {/* Diagonal Cut */}
//           <div className="absolute bottom-0 left-0 w-full h-32 bg-white transform skew-y-3 translate-y-16"></div>
//         </div>
        
//         {/* Floating Shapes */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-lg rotate-45 animate-float"></div>
//           <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-float delay-1000"></div>
//           <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/10 rotate-12 animate-float delay-500"></div>
//         </div>

//         <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
//           <div className={`transition-all duration-1000 transform ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             {/* Volunteer Badge */}
//             <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
//               <span className="text-lg font-medium tracking-wider">JOIN OUR VOLUNTEER PROGRAMS</span>
//             </div>
            
//             {/* Main Heading with Split Layout */}
//             <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
//               <div className="lg:w-1/2">
//                 <h1 className="text-6xl md:text-7xl font-bold leading-tight">
//                   <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
//                     Volunteer
//                   </span>
//                   <br />
//                   <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
//                     Opportunities
//                   </span>
//                 </h1>
//               </div>
//               <div className="lg:w-1/2">
//                 <p className="text-2xl md:text-3xl leading-relaxed font-light opacity-90">
//                   Join thousands of volunteers creating <span className="text-yellow-300 font-semibold">lasting impact</span> 
//                   through meaningful volunteer work and community service programs.
//                 </p>
//               </div>
//             </div>

//             {/* Volunteer Impact Stats */}
//             <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
//               {[
//                 { number: animatedStats.volunteers.toLocaleString(), label: 'Active Volunteers', suffix: '+' },
//                 { number: animatedStats.hours.toLocaleString(), label: 'Volunteer Hours', suffix: '+' },
//                 { number: animatedStats.projects, label: 'Volunteer Projects', suffix: '+' }
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-6 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-500 group"
//                   style={{
//                     transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)`,
//                     transition: 'all 0.5s ease'
//                   }}
//                 >
//                   <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
//                     {stat.number}{stat.suffix}
//                   </div>
//                   <div className="text-cyan-100 font-medium tracking-wide">{stat.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Quick Apply CTA */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
//               <h3 className="text-2xl font-bold text-white mb-4">Start Your Volunteer Journey</h3>
//               <p className="text-cyan-100 mb-6 text-center">
//                 Begin your volunteer experience today. No experience required - just passion and commitment to volunteer work.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button 
//                   onClick={() => setActiveTab('apply')}
//                   className="bg-[#00B8C8] text-white px-8 py-4 rounded-2xl font-bold hover:bg-cyan-600 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
//                 >
//                   Apply to Volunteer
//                 </button>
//                 <button 
//                   onClick={() => setActiveTab('opportunities')}
//                   className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
//                 >
//                   Explore Volunteer Roles
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Diagonal Navigation */}
//       <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-cyan-100 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex overflow-x-auto py-4">
//             {[
//               { id: 'opportunities', label: 'Volunteer Roles' },
//               { id: 'apply', label: 'Volunteer Application' },
//               { id: 'benefits', label: 'Volunteer Benefits' },
//               { id: 'stories', label: 'Volunteer Stories' },
//               { id: 'teams', label: 'Volunteer Teams' }
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex-shrink-0 px-6 py-3 font-semibold transition-all duration-500 rounded-2xl mx-1 transform hover:-translate-y-1 ${
//                   activeTab === tab.id
//                     ? 'bg-[#00B8C8] text-white shadow-lg scale-105'
//                     : 'text-gray-700 hover:text-[#00B8C8] hover:bg-cyan-50'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Volunteer Opportunities - Card Grid with Hover Effects */}
//       {activeTab === 'opportunities' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Volunteer Opportunities & Programs</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Discover meaningful volunteer positions and programs where you can contribute your time and talents
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {volunteerRoles.map((role, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-cyan-100"
//                   style={{
//                     transform: `rotate(${index % 2 === 0 ? '0.5' : '-0.5'}deg)`,
//                     transition: 'all 0.5s ease'
//                   }}
//                 >
//                   {/* Role Type Badge */}
//                   <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold z-10 ${
//                     role.type === 'remote' ? 'bg-blue-100 text-blue-700' :
//                     role.type === 'field' ? 'bg-[#00B8C8] text-white' :
//                     'bg-cyan-100 text-cyan-700'
//                   }`}>
//                     {role.type.toUpperCase()}
//                   </div>
                  
//                   <div className="p-6">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00B8C8] transition-colors duration-300">
//                       {role.title}
//                     </h3>
                    
//                     <div className="flex items-center text-sm text-gray-500 mb-4">
//                       <span>📍 {role.location}</span>
//                       <span className="mx-2">•</span>
//                       <span>🕒 {role.commitment}</span>
//                     </div>
                    
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {role.description}
//                     </p>
                    
//                     {/* Skills Required */}
//                     <div className="mb-6">
//                       <h4 className="text-sm font-semibold text-gray-700 mb-2">Volunteer Skills Needed:</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {role.skills.map((skill, idx) => (
//                           <span
//                             key={idx}
//                             className="px-2 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
                    
//                     {/* Role Details */}
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                       <div className="text-center p-3 bg-gray-50 rounded-xl">
//                         <div className="text-lg font-bold text-[#00B8C8]">{role.duration}</div>
//                         <div className="text-xs text-gray-600">Volunteer Duration</div>
//                       </div>
//                       <div className="text-center p-3 bg-gray-50 rounded-xl">
//                         <div className="text-lg font-bold text-cyan-600">{role.volunteers}+</div>
//                         <div className="text-xs text-gray-600">Volunteers</div>
//                       </div>
//                     </div>
                    
//                     <button 
//                       onClick={() => setActiveTab('apply')}
//                       className="w-full bg-[#00B8C8] text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
//                     >
//                       Apply for Volunteer Role
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Application Form - Multi-step Design */}
//       {activeTab === 'apply' && (
//         <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Volunteer Application</h2>
//               <p className="text-xl text-gray-600">Complete this volunteer registration form to start your volunteer journey</p>
//             </div>

//             <div className="bg-white rounded-3xl shadow-2xl p-8 border border-cyan-100">
//               {/* Progress Steps */}
//               <div className="flex justify-between mb-8">
//                 {['Personal', 'Skills', 'Availability', 'Review'].map((step, index) => (
//                   <div key={index} className="flex items-center">
//                     <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
//                       index === 0 
//                         ? 'bg-[#00B8C8] text-white' 
//                         : 'bg-gray-200 text-gray-500'
//                     }`}>
//                       {index + 1}
//                     </div>
//                     <span className={`ml-2 font-medium ${
//                       index === 0 ? 'text-[#00B8C8]' : 'text-gray-500'
//                     }`}>
//                       {step}
//                     </span>
//                     {index < 3 && (
//                       <div className="w-12 h-0.5 bg-gray-300 mx-4"></div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-8">
//                 {/* Personal Information */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={(e) => handleInputChange('name', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                       placeholder="Enter your full name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={(e) => handleInputChange('email', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                 </div>

//                 {/* Skills Selection */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-4">
//                     Select Your Volunteer Skills *
//                   </label>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                     {availableSkills.map((skill) => (
//                       <button
//                         key={skill}
//                         type="button"
//                         onClick={() => toggleSkill(skill)}
//                         className={`p-3 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
//                           formData.skills.includes(skill)
//                             ? 'border-[#00B8C8] bg-cyan-50 text-cyan-700'
//                             : 'border-gray-200 bg-white text-gray-600 hover:border-cyan-300'
//                         }`}
//                       >
//                         {skill}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Availability & Interests */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Volunteer Availability *
//                     </label>
//                     <select
//                       required
//                       value={formData.availability}
//                       onChange={(e) => handleInputChange('availability', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                     >
//                       <option value="">Select volunteer availability</option>
//                       <option value="1-5">1-5 volunteer hours per week</option>
//                       <option value="5-10">5-10 volunteer hours per week</option>
//                       <option value="10-20">10-20 volunteer hours per week</option>
//                       <option value="20+">20+ volunteer hours per week</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Volunteer Experience
//                     </label>
//                     <select
//                       value={formData.experience}
//                       onChange={(e) => handleInputChange('experience', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
//                     >
//                       <option value="">Select volunteer experience</option>
//                       <option value="none">No volunteer experience</option>
//                       <option value="some">Some volunteer experience</option>
//                       <option value="experienced">Experienced volunteer</option>
//                       <option value="professional">Professional volunteer</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Program Interests */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-4">
//                     Volunteer Program Interests
//                   </label>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                     {programInterests.map((interest) => (
//                       <button
//                         key={interest}
//                         type="button"
//                         onClick={() => toggleInterest(interest)}
//                         className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
//                           formData.interests.includes(interest)
//                             ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
//                             : 'border-gray-200 bg-white text-gray-600 hover:border-cyan-300'
//                         }`}
//                       >
//                         {interest}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full bg-[#00B8C8] text-white py-4 rounded-2xl font-bold text-lg hover:bg-cyan-600 transition-all duration-500 transform hover:scale-105 shadow-lg"
//                 >
//                   Submit Volunteer Application
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Volunteer Benefits - Interactive Cards */}
//       {activeTab === 'benefits' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Volunteer Benefits & Perks</h2>
//               <p className="text-xl text-gray-600">Discover the amazing benefits of joining our volunteer programs</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {volunteerBenefits.map((benefit, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-cyan-100 hover:-translate-y-2"
//                 >
//                   <div className="text-4xl mb-4 text-[#00B8C8] group-hover:scale-110 transition-transform duration-300">
//                     {benefit.emoji}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Volunteer Stories - Testimonial Carousel */}
//       {activeTab === 'stories' && (
//         <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Volunteer Success Stories</h2>
//               <p className="text-xl text-gray-600">Hear from our amazing volunteers about their volunteer experiences</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {volunteerStories.map((story, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-cyan-100 group hover:-translate-y-2"
//                 >
//                   <div className="flex items-center mb-4">
//                     <div className="w-16 h-16 bg-gradient-to-r from-[#00B8C8] to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
//                       {story.initials}
//                     </div>
//                     <div className="ml-4">
//                       <h4 className="font-bold text-gray-900">{story.name}</h4>
//                       <p className="text-[#00B8C8] text-sm">{story.role}</p>
//                       <p className="text-gray-500 text-xs">{story.duration}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
//                   <div className="flex items-center justify-between">
//                     <div className="flex text-amber-400">
//                       {'★'.repeat(5)}
//                     </div>
//                     <span className="text-xs text-gray-500">{story.location}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Join Teams - Specialized Groups */}
//       {activeTab === 'teams' && (
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-gray-900 mb-6">Join Volunteer Teams</h2>
//               <p className="text-xl text-gray-600">Work with like-minded volunteers in specialized volunteer teams</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {volunteerTeams.map((team, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-gradient-to-br from-[#00B8C8] to-cyan-500 rounded-3xl p-8 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-500 transform hover:scale-105"
//                 >
//                   <h3 className="text-2xl font-bold mb-4">{team.name}</h3>
//                   <p className="text-cyan-100 mb-6 leading-relaxed">{team.description}</p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-yellow-200 text-sm">{team.members} volunteer members</span>
//                     <button className="bg-white text-[#00B8C8] px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
//                       Join Volunteer Team
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Footer CTA */}
//       <section className="py-16 bg-[#00B8C8] text-white">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold mb-4">Ready to Start Volunteering?</h2>
//           <p className="text-xl mb-8 opacity-90">Join thousands of volunteers making a real difference through volunteer programs</p>
//           <button 
//             onClick={() => setActiveTab('apply')}
//             className="bg-cyan-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-cyan-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//           >
//             Apply to Volunteer Today
//           </button>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Enhanced Data with Volunteer Keywords
// const volunteerRoles = [
//   {
//     title: 'Community Education Volunteer',
//     type: 'field',
//     location: 'Local Communities',
//     commitment: '5-10 volunteer hours/week',
//     description: 'Provide educational support and tutoring to children and adults through volunteer programs in underserved communities.',
//     skills: ['Teaching', 'Patience', 'Communication', 'Subject Expertise'],
//     duration: '6 months',
//     volunteers: 45
//   },
//   {
//     title: 'Digital Marketing Volunteer',
//     type: 'remote',
//     location: 'Remote Volunteer',
//     commitment: '3-8 volunteer hours/week',
//     description: 'Help promote our volunteer programs and reach more communities through digital marketing volunteer work.',
//     skills: ['Social Media', 'Content Writing', 'SEO', 'Analytics'],
//     duration: '3 months',
//     volunteers: 28
//   },
//   {
//     title: 'Disaster Response Volunteer',
//     type: 'field',
//     location: 'Various Volunteer Locations',
//     commitment: 'On-call volunteer basis',
//     description: 'Join our emergency volunteer response team to provide immediate assistance during natural disasters.',
//     skills: ['First Aid', 'Crisis Management', 'Teamwork', 'Adaptability'],
//     duration: '1 year',
//     volunteers: 67
//   },
//   {
//     title: 'Fundraising Volunteer',
//     type: 'remote',
//     location: 'Remote Volunteer',
//     commitment: '4-12 volunteer hours/week',
//     description: 'Organize and manage fundraising campaigns to support our volunteer programs and community projects.',
//     skills: ['Event Planning', 'Communication', 'Networking', 'Budgeting'],
//     duration: '6 months',
//     volunteers: 32
//   },
//   {
//     title: 'Environmental Volunteer',
//     type: 'field',
//     location: 'Rural Areas',
//     commitment: '8-15 volunteer hours/week',
//     description: 'Work on environmental conservation volunteer projects including reforestation and sustainable farming.',
//     skills: ['Environmental Science', 'Physical Fitness', 'Teamwork', 'Sustainability'],
//     duration: '4 months',
//     volunteers: 53
//   },
//   {
//     title: 'Mentorship Volunteer',
//     type: 'hybrid',
//     location: 'Urban Centers',
//     commitment: '6-10 volunteer hours/week',
//     description: 'Guide and mentor youth in career development and personal growth volunteer programs.',
//     skills: ['Mentoring', 'Leadership', 'Communication', 'Empathy'],
//     duration: '9 months',
//     volunteers: 39
//   }
// ];

// const availableSkills = [
//   'Teaching', 'First Aid', 'Construction', 'Cooking', 'Driving',
//   'Languages', 'IT Skills', 'Marketing', 'Design', 'Medical',
//   'Counseling', 'Agriculture', 'Engineering', 'Research', 'Writing'
// ];

// const programInterests = [
//   'Education & Literacy Volunteer Programs',
//   'Healthcare & Medical Volunteer Services',
//   'Environmental Conservation Volunteering',
//   'Disaster Relief Volunteer Response',
//   'Community Infrastructure Volunteering',
//   'Youth Development Volunteer Programs',
//   'Women Empowerment Volunteering',
//   'Elderly Care Volunteer Services'
// ];

// const volunteerBenefits = [
//   {
//     emoji: '🎓',
//     title: 'Volunteer Skill Development',
//     description: 'Gain valuable volunteer experience and develop new skills through hands-on training and workshops.'
//   },
//   {
//     emoji: '🌍',
//     title: 'Volunteer Network',
//     description: 'Connect with like-minded volunteers and build relationships with people from diverse backgrounds.'
//   },
//   {
//     emoji: '📜',
//     title: 'Volunteer Certification',
//     description: 'Receive official volunteer certification and references for your volunteer work and contributions.'
//   },
//   {
//     emoji: '💼',
//     title: 'Volunteer Career Opportunities',
//     description: 'Access exclusive job opportunities and career development resources through volunteer experience.'
//   },
//   {
//     emoji: '✈️',
//     title: 'Volunteer Travel',
//     description: 'Participate in volunteer programs in different locations and experience new cultures through volunteering.'
//   },
//   {
//     emoji: '🤝',
//     title: 'Volunteer Community Impact',
//     description: 'Make a tangible difference in communities and see the direct impact of your volunteer contributions.'
//   },
//   {
//     emoji: '🏆',
//     title: 'Volunteer Recognition',
//     description: 'Get recognized for your volunteer efforts through awards, features, and appreciation events.'
//   },
//   {
//     emoji: '💝',
//     title: 'Volunteer Personal Growth',
//     description: 'Experience personal transformation and develop greater empathy through volunteer experiences.'
//   }
// ];

// const volunteerStories = [
//   {
//     name: 'Sarah Johnson',
//     initials: 'SJ',
//     role: 'Education Volunteer',
//     duration: '2 years volunteering',
//     location: 'Kenya',
//     quote: 'Volunteering in rural communities transformed my perspective. The volunteer experience of teaching children is priceless.'
//   },
//   {
//     name: 'Marcus Chen',
//     initials: 'MC',
//     role: 'Disaster Response Volunteer',
//     duration: '18 months volunteering',
//     location: 'Philippines',
//     quote: 'Being part of the volunteer emergency response team taught me resilience and the true meaning of community support.'
//   },
//   {
//     name: 'Aisha Mohammed',
//     initials: 'AM',
//     role: 'Digital Marketing Volunteer',
//     duration: '1 year volunteering',
//     location: 'Remote Volunteer',
//     quote: 'Using my skills to help amplify important causes through volunteering has been incredibly rewarding volunteer work.'
//   }
// ];

// const volunteerTeams = [
//   {
//     name: 'Rapid Response Volunteers',
//     description: 'Specialized volunteer team for immediate disaster and emergency response operations.',
//     members: '45'
//   },
//   {
//     name: 'Education Volunteers',
//     description: 'Dedicated to improving educational outcomes through volunteer programs in underserved communities.',
//     members: '89'
//   },
//   {
//     name: 'Environmental Volunteers',
//     description: 'Environmental conservation and sustainability focused volunteer group and programs.',
//     members: '67'
//   }  
// ];

"use client"

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// --- Global Theme Colors (Strictly enforced: Teal and Pink) ---
const PRIMARY_BASE = 'teal-700'; // Used for structure, base text, and primary actions
const ACCENT_BASE = 'pink-700'; // Used for urgency, excitement, and calls to action

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
                    <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-${PRIMARY_BASE}">
                        <img 
                            src="/images/nkf9.jpg" 
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
      
      {/* 6. Corporate / Group CTA Strip - High Contrast */}
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
