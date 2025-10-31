// "use client"
// import { useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// const AnimatedSection = ({ children, delay = 0 }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div
//       ref={ref}
//       className={`transition-all duration-700 transform ${
//         inView 
//           ? 'opacity-100 translate-y-0' 
//           : 'opacity-0 translate-y-8'
//       }`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// };

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//     inquiryType: 'general'
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     setIsSubmitting(false);
//     setIsSubmitted(true);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       message: '',
//       inquiryType: 'general'
//     });
//   };

//   const contactCards = [
//     {
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//         </svg>
//       ),
//       title: "Call Us",
//       description: "Speak directly with our team",
//       details: "+1 (555) 123-4567",
//       subtext: "Mon-Fri, 9AM-6PM EST",
//       color: "bg-pink-600"
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       ),
//       title: "Email Us",
//       description: "Send us a detailed message",
//       details: "contact@newmonkahlon.org",
//       subtext: "Response within 24 hours",
//       color: "bg-teal-600"
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//         </svg>
//       ),
//       title: "Visit Us",
//       description: "Stop by our main office",
//       details: "123 Hope Avenue, NYC",
//       subtext: "Schedule appointment recommended",
//       color: "bg-pink-600"
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       title: "Emergency",
//       description: "24/7 crisis support",
//       details: "+1 (555) 123-9111",
//       subtext: "Immediate assistance available",
//       color: "bg-teal-600"
//     }
//   ];

//   const teamMembers = [
//     {
//       name: "Sarah Chen",
//       role: "Director of Outreach",
//       email: "sarah@newmonkahlon.org",
//       specialty: "Partnerships & Community Relations"
//     },
//     {
//       name: "Michael Rodriguez",
//       role: "Volunteer Coordinator",
//       email: "michael@newmonkahlon.org",
//       specialty: "Volunteer Programs & Engagement"
//     },
//     {
//       name: "Emily Johnson",
//       role: "Donation Specialist",
//       email: "emily@newmonkahlon.org",
//       specialty: "Fundraising & Donor Relations"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
//       {/* Header with Split Background */}
//       <section className="relative py-16">
//         <div className="absolute inset-0">
//           <div className="w-1/2 h-full bg-pink-600/5"></div>
//           <div className="w-1/2 h-full bg-teal-600/5 left-1/2 absolute top-0"></div>
//         </div>
//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center">
//               <div className="inline-flex items-center gap-2 mb-6">
//                 <div className="w-8 h-0.5 bg-pink-600"></div>
//                 <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
//                 <div className="w-8 h-0.5 bg-teal-600"></div>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 Let's Start a
//                 <span className="block">
//                   <span className="text-pink-600">Conversation</span>
//                 </span>
//               </h1>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 Ready to make a difference? Reach out and let's discuss how we can work together to create positive change.
//               </p>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Contact Methods - Circular Design */}
//       <section className="py-12">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactCards.map((card, index) => (
//               <AnimatedSection key={index} delay={index * 100}>
//                 <div className="text-center group cursor-pointer">
//                   <div className={`relative w-20 h-20 ${card.color} rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                     <div className="absolute inset-0 flex items-center justify-center text-white">
//                       {card.icon}
//                     </div>
//                   </div>
//                   <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
//                   <p className="text-sm text-gray-600 mb-2">{card.description}</p>
//                   <div className="text-pink-600font-medium text-sm">{card.details}</div>
//                   <div className="text-gray-500 text-xs mt-1">{card.subtext}</div>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Content - Side by Side */}
//       <section className="py-16">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
//             {/* Contact Form - 3/5 width */}
//             <div className="lg:col-span-3">
//               <AnimatedSection>
//                 <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="w-2 h-8 bg-gradient-to-b from-pink-600 to-teal-600 rounded-full"></div>
//                     <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
//                   </div>

//                   {isSubmitted ? (
//                     <div className="text-center py-8">
//                       <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">Message Received!</h3>
//                       <p className="text-gray-600 mb-6">
//                         Thank you for reaching out. We'll get back to you within 24 hours.
//                       </p>
//                       <button
//                         onClick={() => setIsSubmitted(false)}
//                         className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
//                       >
//                         Send Another Message
//                       </button>
//                     </div>
//                   ) : (
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Your Name *
//                           </label>
//                           <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200"
//                             placeholder="Enter your name"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Email Address *
//                           </label>
//                           <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
//                             placeholder="Enter your email"
//                           />
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Phone Number
//                           </label>
//                           <input
//                             type="tel"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200"
//                             placeholder="Your phone number"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             How Can We Help? *
//                           </label>
//                           <select
//                             name="inquiryType"
//                             value={formData.inquiryType}
//                             onChange={handleChange}
//                             required
//                             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
//                           >
//                             <option value="general">General Inquiry</option>
//                             <option value="donation">Donation Question</option>
//                             <option value="volunteer">Volunteer Opportunity</option>
//                             <option value="partnership">Partnership</option>
//                             <option value="emergency">Emergency Assistance</option>
//                           </select>
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Subject *
//                         </label>
//                         <input
//                           type="text"
//                           name="subject"
//                           value={formData.subject}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200"
//                           placeholder="What's this about?"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Your Message *
//                         </label>
//                         <textarea
//                           name="message"
//                           value={formData.message}
//                           onChange={handleChange}
//                           required
//                           rows={6}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 resize-none"
//                           placeholder="Tell us how we can help you..."
//                         />
//                       </div>

//                       <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="w-full bg-gradient-to-r from-pink-600 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         {isSubmitting ? (
//                           <div className="flex items-center justify-center">
//                             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
//                             Sending Your Message...
//                           </div>
//                         ) : (
//                           'Send Message'
//                         )}
//                       </button>
//                     </form>
//                   )}
//                 </div>
//               </AnimatedSection>
//             </div>

//             {/* Sidebar - 2/5 width */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* Team Contacts */}
//               <AnimatedSection delay={200}>
//                 <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//                   <h3 className="text-lg font-bold text-gray-900 mb-4">Direct Contacts</h3>
//                   <div className="space-y-4">
//                     {teamMembers.map((member, index) => (
//                       <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//                         <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${
//                           index % 2 === 0 ? 'bg-pink-600' : 'bg-teal-600'
//                         }`}>
//                           {member.name.split(' ').map(n => n[0]).join('')}
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-semibold text-gray-900 text-sm">{member.name}</h4>
//                           <p className="text-gray-600 text-xs mb-1">{member.role}</p>
//                           <p className="text-pink-600text-xs font-medium">{member.specialty}</p>
//                           <a href={`mailto:${member.email}`} className="text-teal-600text-xs hover:underline">
//                             {member.email}
//                           </a>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </AnimatedSection>

//               {/* Quick Info */}
//               <AnimatedSection delay={300}>
//                 <div className="bg-gradient-to-br from-pink-600 to-teal-600 rounded-2xl p-6 text-white">
//                   <h3 className="text-lg font-bold mb-3">Quick Response</h3>
//                   <div className="space-y-3 text-sm">
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-white rounded-full"></div>
//                       <span>Response within 24 hours</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-white rounded-full"></div>
//                       <span>Emergency support: 24/7</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-white rounded-full"></div>
//                       <span>Multilingual support available</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-white rounded-full"></div>
//                       <span>Confidential & secure</span>
//                     </div>
//                   </div>
//                 </div>
//               </AnimatedSection>

//               {/* Emergency CTA */}
//               <AnimatedSection delay={400}>
//                 <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
//                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                       </svg>
//                     </div>
//                     <h3 className="font-bold text-red-900">Emergency Support</h3>
//                   </div>
//                   <p className="text-red-800 text-sm mb-4">
//                     Need immediate assistance? Our crisis team is available 24/7.
//                   </p>
//                   <a
//                     href="tel:+15551239111"
//                     className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-red-700 transition-colors duration-300"
//                   >
//                     Call Now: (555) 123-9111
//                   </a>
//                 </div>
//               </AnimatedSection>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Location Map Section */}
//       {/* <section className="py-16 bg-gray-900 text-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Find Our Offices</h2>
//               <p className="text-gray-300 max-w-2xl mx-auto">
//                 With locations across the country, we're always close by to provide support and assistance.
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { city: "New York", address: "123 Hope Avenue", phone: "+1 (555) 123-1001" },
//               { city: "Chicago", address: "456 Community Drive", phone: "+1 (555) 123-2002" },
//               { city: "Los Angeles", address: "789 Impact Boulevard", phone: "+1 (555) 123-3003" }
//             ].map((office, index) => (
//               <AnimatedSection key={index} delay={index * 100}>
//                 <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-300">
//                   <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
//                     index % 2 === 0 ? 'bg-pink-600' : 'bg-teal-600'
//                   }`}>
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     </svg>
//                   </div>
//                   <h3 className="font-bold text-lg mb-2">{office.city}</h3>
//                   <p className="text-gray-300 text-sm mb-2">{office.address}</p>
//                   <p className="text-pink-400 font-medium">{office.phone}</p>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section> */}
//     </div>
//   );
// }

"use client"

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// --- Helper Component 1: Section wrapper with animation ---
const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
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

// --- Helper Component 2: Submission Notification Banner ---
const NotificationBanner = ({ status }) => {
  // Using teal/pink light shades for notifications for visual consistency
  if (status === 'success') {
    return (
      <AnimatedSection className="p-4 mb-6 text-sm text-teal-800 rounded-xl bg-teal-50 shadow-md border border-teal-200">
        <span className="font-bold">Success!</span> Your message has been successfully routed. We will respond promptly.
      </AnimatedSection>
    );
  }
  if (status === 'error') {
    return (
      <AnimatedSection className="p-4 mb-6 text-sm text-pink-600 rounded-xl bg-pink-50 shadow-md border border-pink-200">
        <span className="font-bold">Error!</span> Transmission failed. Please verify your details and try again.
      </AnimatedSection>
    );
  }
  return null;
};

// --- Main Application Component ---
export default function App() {
  
  // --- Data Definitions and State ---

  const contactInfo = [
    {
      id: 1,
      title: "Headquarters Location",
      detail: "1400 Foundation Way, Suite 300, Springfield, CA 90210",
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
      ),
    },
    {
      id: 2,
      title: "General Email",
      detail: "info@newmonkahlon.org",
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.263l-2.79 3.424M16 4h4a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h4M9 11l-6 6"></path></svg>
      ),
    },
    {
      id: 3,
      title: "Phone Support",
      detail: "+1 (555) 123-4567",
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
      ),
    },
  ];

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  // 'idle', 'loading', 'success', 'error'
  const [submitStatus, setSubmitStatus] = useState('idle'); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitStatus === 'loading') return;

    setSubmitStatus('loading');

    // Simulate an API call delay (2 seconds)
    setTimeout(() => {
      // In a real application, replace this with your actual API fetch
      const success = Math.random() > 0.1; // 90% chance of success for demo

      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setSubmitStatus('error');
      }

      // Clear the status message after a few seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const inputClasses = "w-full p-3 bg-white text-gray-800 placeholder-gray-400 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-600focus:border-pink-600transition-all shadow-sm";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  
  // --- Main Component Render ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased py-16">
      
      {/* Header/Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <AnimatedSection>
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600to-teal-700">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to supporting your inquiries. Connect with our team through the most relevant channel below.
          </p>
        </AnimatedSection>
      </div>

      {/* Contact Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Information Panel (1/3 width on desktop) */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={100} className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-xl h-full border-2 border-teal-700/20">
                <h3 className="text-2xl font-bold text-teal-600 mb-6 border-b border-gray-200 pb-3">Contact Channels</h3>
                
                {contactInfo.map((item) => (
                  <div key={item.id} className="flex items-start mb-8 p-3 rounded-xl bg-gray-50 transition-shadow duration-300 shadow-inner hover:shadow-lg hover:shadow-teal-100">
                    <div className="flex-shrink-0 p-3 rounded-full bg-white mr-4 border border-teal-700/30 shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{item.title}</p>
                      <p className="text-sm text-gray-500 break-words">{item.detail}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-10 p-4 bg-pink-600/70 rounded-xl border border-pink-600/20">
                    <h4 className="text-xl font-bold text-pink-600mb-2">Our Commitment</h4>
                    <p className="text-sm text-gray-600">All queries are handled with care. Expect a personalized response within **2 business days**.</p>
                </div>

              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form (2/3 width on desktop) */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-pink-700/50">
                <h2 className="text-3xl font-extrabold text-pink-600mb-8 border-b border-gray-200 pb-3">Submit Your Inquiry</h2>
                
                {/* Notification Banner */}
                <NotificationBanner status={submitStatus} />

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelClasses}>Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                        disabled={submitStatus === 'loading'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                        disabled={submitStatus === 'loading'}
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className={labelClasses}>Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      disabled={submitStatus === 'loading'}
                    />
                  </div>

                  {/* Message Area */}
                  <div>
                    <label htmlFor="message" className={labelClasses}>Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`${inputClasses} resize-y`}
                      disabled={submitStatus === 'loading'}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className={`w-full text-white font-bold py-3 px-6 mt-4 rounded-xl shadow-xl transition-all duration-300 transform 
                      flex items-center justify-center space-x-3
                      ${submitStatus === 'loading' 
                        ? 'bg-gray-500 cursor-not-allowed' 
                        : 'bg-pink-600hover:bg-pink-800 ring-2 ring-pink-700/50 hover:scale-[1.005]'
                      }`}
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
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
