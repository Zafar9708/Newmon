// "use client"
// import { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// // Animation component for numbers
// const AnimatedNumber = ({ value, duration = 2000 }) => {
//   const [count, setCount] = useState(0);
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   useEffect(() => {
//     if (inView) {
//       let start = 0;
//       const end = value;
//       const increment = end / (duration / 16);
      
//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= end) {
//           setCount(end);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);

//       return () => clearInterval(timer);
//     }
//   }, [inView, value, duration]);

//   return <span ref={ref}>{count.toLocaleString()}</span>;
// };

// // Section wrapper with animation
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

// export default function AboutPage() {
//   const teamMembers = [
//     {
//       name: "Dr. Sarah Chen",
//       role: "Executive Director",
//       bio: "Public health leader with 18+ years of experience in humanitarian work, community development, and nonprofit management across underserved populations.",
//       focus: "Strategic Vision & Humanitarian Partnerships",
//       initials: "SC"
//     },
//     {
//       name: "Michael Rodriguez",
//       role: "Program Director",
//       bio: "Humanitarian specialist focused on creating comprehensive programs that address education, hunger relief, and community development needs.",
//       focus: "Program Development & Impact Measurement",
//       initials: "MR"
//     },
//     {
//       name: "Emily Johnson",
//       role: "Operations Director",
//       bio: "Expert in humanitarian logistics and resource management, ensuring efficient delivery of services across all program areas and locations.",
//       focus: "Operations & Resource Optimization",
//       initials: "EJ"
//     },
//     {
//       name: "David Thompson",
//       role: "Community Engagement Director",
//       bio: "Dedicated advocate for vulnerable communities, building strong local partnerships and ensuring programs meet authentic community needs.",
//       focus: "Community Partnerships & Outreach",
//       initials: "DT"
//     }
//   ];

//   const values = [
//     {
//       title: "Comprehensive Compassion",
//       description: "We address all aspects of human need - from hunger and healthcare to education and economic opportunity - with dignity and respect for every individual.",
//       principle: "Meeting people where they are with holistic support"
//     },
//     {
//       title: "Sustainable Transformation",
//       description: "Our programs are designed to create lasting change, building self-sufficient communities that can thrive long after our direct involvement ends.",
//       principle: "Creating foundations for generational impact"
//     },
//     {
//       title: "Community-Led Solutions",
//       description: "We work alongside local leaders and residents, ensuring our humanitarian initiatives are culturally relevant and community-driven.",
//       principle: "Local wisdom guides our humanitarian work"
//     },
//     {
//       title: "Transparent Stewardship",
//       description: "We maintain the highest standards of financial accountability, with 90% of every donation directly supporting our humanitarian programs.",
//       principle: "Every contribution creates measurable change"
//     }
//   ];

//   const milestones = [
//     {
//       year: "2009",
//       title: "The Foundation",
//       description: "Established with a vision to address comprehensive community needs, starting with education support and emergency relief for 50 families."
//     },
//     {
//       year: "2015",
//       title: "Strategic Expansion",
//       description: "Expanded humanitarian services to multiple states, developing comprehensive programs in healthcare and hunger relief."
//     },
//     {
//       year: "2024",
//       title: "National Presence",
//       description: "Serving 150+ communities nationwide with 20+ specialized humanitarian programs, recognized for excellence in community transformation."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center">
//               <div className="mb-8">
//                 <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600rounded-full text-sm font-semibold mb-4">
//                   About Our Foundation
//                 </span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//                 Building
//                 <span className="block">
//                   <span className="text-pink-700">Better</span>
//                   <span className="text-teal-700"> Futures</span>
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 For over 15 years, the Newmon Kahlon Foundation has been transforming lives through comprehensive 
//                 humanitarian programs that address hunger, poverty, education, healthcare, and community development.
//               </p>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//             <AnimatedSection>
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Purpose & Promise</h2>
//                 <div className="space-y-8">
//                   <div className="border-l-4 border-pink-600 pl-6">
//                     <h3 className="text-2xl font-semibold text-pink-600mb-4">Our Mission</h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       To create lasting positive change by addressing comprehensive human needs - providing access to 
//                       education, healthcare, food security, and economic opportunities while empowering individuals 
//                       and communities to build sustainable, self-sufficient futures.
//                     </p>
//                   </div>
//                   <div className="border-l-4 border-teal-600 pl-6">
//                     <h3 className="text-2xl font-semibold text-teal-600mb-4">Our Vision</h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       A world where every person has access to basic necessities, quality education, healthcare, 
//                       and opportunities to thrive - where communities are resilient, compassionate, and built on 
//                       foundations of dignity and mutual support.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </AnimatedSection>
            
//             <AnimatedSection delay={200}>
//               <div className="bg-gradient-to-br from-pink-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
//                 <h3 className="text-2xl font-bold mb-8 text-center">Our Impact Journey</h3>
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold mb-2">
//                       <AnimatedNumber value={15} />+
//                     </div>
//                     <div className="text-white/80 text-sm">Years of Service</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold mb-2">
//                       <AnimatedNumber value={150} />+
//                     </div>
//                     <div className="text-white/80 text-sm">Communities Served</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold mb-2">
//                       <AnimatedNumber value={2847} />+
//                     </div>
//                     <div className="text-white/80 text-sm">Dedicated Volunteers</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold mb-2">
//                       <AnimatedNumber value={100000} />+
//                     </div>
//                     <div className="text-white/80 text-sm">Lives Impacted</div>
//                   </div>
//                 </div>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Evolution Story</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 From local compassion to nationwide impact - building a legacy of hope and transformation
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {milestones.map((milestone, index) => (
//               <AnimatedSection key={index} delay={index * 100}>
//                 <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//                   <div className="text-2xl font-bold text-pink-600mb-3">{milestone.year}</div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Guiding Principles</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 The core values that guide every aspect of our humanitarian work
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {values.map((value, index) => (
//               <AnimatedSection key={index} delay={index * 100}>
//                 <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-pink-200 transition-colors duration-300">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
//                   <p className="text-gray-600 mb-4 leading-relaxed">{value.description}</p>
//                   <div className="bg-gray-50 rounded-lg px-4 py-2 border-l-2 border-pink-600">
//                     <p className="text-sm text-gray-700 font-medium">{value.principle}</p>
//                   </div>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Experienced professionals dedicated to creating lasting change
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {teamMembers.map((member, index) => (
//               <AnimatedSection key={index} delay={index * 100}>
//                 <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//                   <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 ${
//                     index % 2 === 0 ? 'bg-pink-600' : 'bg-teal-600'
//                   }`}>
//                     {member.initials}
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
//                   <p className={`text-sm font-medium mb-3 ${
//                     index % 2 === 0 ? 'text-pink-600' : 'text-teal-600'
//                   }`}>
//                     {member.role}
//                   </p>
//                   <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                     {member.bio}
//                   </p>
//                   <div className="bg-gray-50 rounded-lg px-3 py-2">
//                     <p className="text-xs text-gray-700 font-medium">{member.focus}</p>
//                   </div>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="bg-gradient-to-r from-pink-600 to-teal-600 rounded-2xl p-12 text-center text-white">
//               <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
//               <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
//                 Together, we can create comprehensive change that addresses hunger, poverty, education, 
//                 healthcare, and builds resilient communities for generations to come.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button 
//                   onClick={() => window.location.href = '/donate'}
//                   className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
//                 >
//                   Support Our Work
//                 </button>
//                 <button 
//                   onClick={() => window.location.href = '/volunteer'}
//                   className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
//                 >
//                   Become a Volunteer
//                 </button>
//               </div>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client"
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function App() {
  
  // --- Internal Components (Moved here to ensure client-side rendering integrity) ---
  
  // Animation component for numbers
  const AnimatedNumber = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = value;
        // Calculate increment based on duration and typical frame rate (16ms per frame)
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [inView, value, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
  };

  // Section wrapper with animation (fade in and slide up)
  const AnimatedSection = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`transition-all duration-700 transform ${
          inView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };
  
  // --- Data Definitions ---

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Executive Director",
      bio: "Public health leader with 18+ years of experience in humanitarian work, community development, and nonprofit management across underserved populations.",
      focus: "Strategic Vision & Humanitarian Partnerships",
      initials: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Program Director",
      bio: "Humanitarian specialist focused on creating comprehensive programs that address education, hunger relief, and community development needs.",
      focus: "Program Development & Impact Measurement",
      initials: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Operations Director",
      bio: "Expert in humanitarian logistics and resource management, ensuring efficient delivery of services across all program areas and locations.",
      focus: "Operations & Resource Optimization",
      initials: "EJ"
    },
    {
      name: "David Thompson",
      role: "Community Engagement Director",
      bio: "Dedicated advocate for vulnerable communities, building strong local partnerships and ensuring programs meet authentic community needs.",
      focus: "Community Partnerships & Outreach",
      initials: "DT"
    }
  ];

  const values = [
    {
      title: "Comprehensive Compassion",
      description: "We address all aspects of human need - from hunger and healthcare to education and economic opportunity - with dignity and respect for every individual.",
      principle: "Meeting people where they are with holistic support"
    },
    {
      title: "Sustainable Transformation",
      description: "Our programs are designed to create lasting change, building self-sufficient communities that can thrive long after our direct involvement ends.",
      principle: "Creating foundations for generational impact"
    },
    {
      title: "Community-Led Solutions",
      description: "We work alongside local leaders and residents, ensuring our humanitarian initiatives are culturally relevant and community-driven.",
      principle: "Local wisdom guides our humanitarian work"
    },
    {
      title: "Transparent Stewardship",
      description: "We maintain the highest standards of financial accountability, with 90% of every donation directly supporting our humanitarian programs.",
      principle: "Every contribution creates measurable change"
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "The Foundation",
      description: "Established with a vision to address comprehensive community needs, starting with education support and emergency relief for 50 families."
    },
    {
      year: "2015",
      title: "Strategic Expansion",
      description: "Expanded humanitarian services to multiple states, developing comprehensive programs in healthcare and hunger relief."
    },
    {
      year: "2024",
      title: "National Presence",
      description: "Serving 150+ communities nationwide with 20+ specialized humanitarian programs, recognized for excellence in community transformation."
    }
  ];

  // --- Main Component Render ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-pink-50 text-pink-600rounded-full text-sm font-semibold tracking-wide uppercase">
                  About Our Foundation
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Building
                <span className="block mt-2">
                  <span className="text-pink-700">Better</span>
                  <span className="text-teal-600ml-4"> Futures</span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                For over 15 years, the **Newmon Kahlon Foundation** has been transforming lives through comprehensive 
                humanitarian programs that address hunger, poverty, education, healthcare, and community development.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision + Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-50">
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Our Impact</h3>
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold mb-1 text-teal-700">
                      <AnimatedNumber value={15} />+
                    </div>
                    <div className="text-gray-600 text-sm font-medium">Years of Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extrabold mb-1 text-pink-700">
                      <AnimatedNumber value={150} />+
                    </div>
                    <div className="text-gray-600 text-sm font-medium">Communities Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extrabold mb-1 text-teal-700">
                      <AnimatedNumber value={100000} />+
                    </div>
                    <div className="text-gray-600 text-sm font-medium">Lives Impacted</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-2">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b border-gray-200 pb-3">Our Purpose & Promise</h2>
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="mr-6 p-3 bg-pink-600rounded-lg shadow-md flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-pink-600mb-2">Our Mission</h3>
                      <p className="text-gray-700 leading-relaxed">
                        To create lasting positive change by addressing comprehensive human needs - providing access to 
                        education, healthcare, food security, and economic opportunities while empowering individuals 
                        and communities to build sustainable, self-sufficient futures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-6 p-3 bg-teal-600rounded-lg shadow-md flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-teal-600mb-2">Our Vision</h3>
                      <p className="text-gray-700 leading-relaxed">
                        A world where every person has access to basic necessities, quality education, healthcare, 
                        and opportunities to thrive - where communities are resilient, compassionate, and built on 
                        foundations of dignity and mutual support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Guiding Principles</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The core values that guide every aspect of our humanitarian work
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 border-t-4 border-pink-600shadow-md h-full hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{value.description}</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg px-4 py-2 mt-auto">
                    <p className="text-sm text-pink-600font-medium">**Principle:** {value.principle}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Evolution Story</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From local compassion to nationwide impact - building a legacy of hope and transformation
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative">
                        {/* Dot on the Line */}
                        <div className={`hidden md:block absolute top-6 h-4 w-4 rounded-full border-4 border-white shadow-md ${
                          index % 2 === 0 ? 'md:-right-2 bg-pink-700' : 'md:-left-2 bg-teal-700'
                        }`}></div>

                        <div className={`text-2xl font-bold mb-3 ${index % 2 === 0 ? 'text-pink-700' : 'text-teal-700'}`}>{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to creating lasting change
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-md h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-extrabold text-2xl mx-auto mb-4 border-4 ${
                      index % 2 === 0 ? 'bg-pink-600border-pink-100' : 'bg-teal-600border-teal-100'
                    }`}>
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className={`text-sm font-semibold mb-4 ${
                      index % 2 === 0 ? 'text-pink-700' : 'text-teal-700'
                    }`}>
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-2 border border-gray-200 mt-4">
                    <p className="text-xs text-gray-700 font-medium">**Focus:** {member.focus}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-12 text-center shadow-2xl border-t-8 border-pink-700">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Join Our Mission</h2>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Together, we can create comprehensive change that addresses hunger, poverty, education, 
                healthcare, and builds resilient communities for generations to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/donate'}
                  className="bg-pink-600text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-pink-800 transition-colors duration-300 transform hover:scale-[1.02]"
                >
                  Support Our Work
                </button>
                <button 
                  onClick={() => window.location.href = '/volunteer'}
                  className="border-2 border-teal-600text-teal-600px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300"
                >
                  Become a Volunteer
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
