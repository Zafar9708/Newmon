// "use client"
// import { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// // Animation components
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

// export default function StoriesPage() {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [selectedStory, setSelectedStory] = useState(null);

//   const storyCategories = [
//     { id: 'all', name: 'All Stories' },
//     { id: 'education', name: 'Education' },
//     { id: 'healthcare', name: 'Healthcare' },
//     { id: 'housing', name: 'Housing' },
//     { id: 'community', name: 'Community' }
//   ];

//   const impactStories = [
//     {
//       id: 1,
//       title: "From Homelessness to Homeownership",
//       category: "housing",
//       location: "Detroit, MI",
//       duration: "2-year journey",
//       image: "/stories/maria-family.jpg",
//       quote: "The foundation didn't just provide shelter; they restored our dignity and built a foundation for our children's future.",
//       author: "Maria Rodriguez",
//       before: "Family of four facing homelessness after job loss and medical emergencies",
//       after: "Stable homeowners with sustainable employment and children excelling academically",
//       impact: "150+ families achieved housing stability",
//       story: "After losing their home during economic hardship, Maria's family entered our emergency housing program. Through comprehensive support including temporary shelter, job training, and financial counseling, they transitioned to permanent housing. Today, Maria advocates for housing rights while her children pursue higher education.",
//       achievements: ["Secure permanent housing", "Career training completion", "Educational support", "Financial independence"]
//     },
//     {
//       id: 2,
//       title: "Breaking Poverty Through Education",
//       category: "education",
//       location: "Chicago, IL",
//       duration: "4-year scholarship",
//       image: "/stories/jamal-student.jpg",
//       quote: "Education opened doors I never knew existed. The foundation's support transformed my life trajectory completely.",
//       author: "Jamal Washington",
//       before: "First-generation college student with limited opportunities",
//       after: "Software engineer and community mentor creating pathways for youth",
//       impact: "300+ scholarships awarded to students",
//       story: "Growing up with limited educational resources, Jamal faced significant barriers to higher education. Our comprehensive scholarship program provided financial support, mentorship, and career guidance. He now leads technology education initiatives while mentoring the next generation of students.",
//       achievements: ["Bachelor's degree", "Technology career", "Mentorship program", "Educational philanthropy"]
//     },
//     {
//       id: 3,
//       title: "Healthcare Access Revolution",
//       category: "healthcare",
//       location: "Rural Texas",
//       duration: "3-year initiative",
//       image: "/stories/health-clinic.jpg",
//       quote: "For generations, we traveled hours for basic care. Now, quality healthcare is part of our community's foundation.",
//       author: "Community Health Collaborative",
//       before: "Isolated rural area with no healthcare facilities within 75 miles",
//       after: "Comprehensive health center serving 12,000+ residents annually",
//       impact: "18 mobile clinics established nationwide",
//       story: "This rural community had been medically underserved for decades. Through strategic partnerships, we established a permanent health center and mobile clinic network. The initiative now provides preventive care, chronic disease management, and health education, dramatically improving community health outcomes.",
//       achievements: ["Full-service health center", "Mobile medical units", "Preventive care", "Health education"]
//     },
//     {
//       id: 4,
//       title: "Urban Renewal Through Agriculture",
//       category: "community",
//       location: "Baltimore, MD",
//       duration: "5-year transformation",
//       image: "/stories/community-garden.jpg",
//       quote: "Our gardens grew more than food - they cultivated community, hope, and economic opportunity for everyone.",
//       author: "Neighborhood Residents Association",
//       before: "Urban neighborhood with vacant lots and food deserts",
//       after: "Thriving network of community gardens serving 800+ families",
//       impact: "35 community agriculture projects established",
//       story: "What began as a single community garden on a neglected lot has blossomed into a comprehensive neighborhood revitalization. Residents transformed vacant spaces into productive gardens, created a local farmers market, and built strong community bonds. The project has inspired similar initiatives across the city.",
//       achievements: ["Community gardens", "Local farmers market", "Food security", "Economic development"]
//     },
//     {
//       id: 5,
//       title: "Single Parent Builds Future",
//       category: "housing",
//       location: "Los Angeles, CA",
//       duration: "18-month program",
//       image: "/stories/sarah-mother.jpg",
//       quote: "They saw my strength when I felt weakest. Today, I'm building the life I always dreamed of for my family.",
//       author: "Sarah Chen",
//       before: "Single mother working multiple jobs, facing housing instability",
//       after: "Homeowner with career advancement and children thriving",
//       impact: "1,200+ single parents supported",
//       story: "Sarah was struggling to provide stability for her family while working exhausting hours. Our single parent support program provided housing assistance, childcare support, and career development. She secured stable employment, purchased her first home, and now mentors other single parents.",
//       achievements: ["First-time homeownership", "Career advancement", "Children's success", "Financial literacy"]
//     },
//     {
//       id: 6,
//       title: "Youth Center Creates Safe Haven",
//       category: "community",
//       location: "Philadelphia, PA",
//       duration: "2-year development",
//       image: "/stories/youth-center.jpg",
//       quote: "This center became our neighborhood's heart - a place where young people discover their potential.",
//       author: "Youth Leaders & Mentors",
//       before: "Underserved neighborhood with limited safe spaces",
//       after: "Vibrant youth center serving 400+ young people",
//       impact: "15 youth empowerment centers established",
//       story: "In a community facing youth violence and limited opportunities, residents transformed an abandoned building into a beacon of hope. The youth center now offers academic support, arts programs, sports, and mentorship, creating positive pathways and reducing youth violence significantly.",
//       achievements: ["Safe community space", "Youth programs", "Mentorship network", "Violence prevention"]
//     }
//   ];

//   const impactMetrics = [
//     {
//       number: "100,000+",
//       label: "Lives Transformed",
//       description: "Individuals achieving lasting positive change"
//     },
//     {
//       number: "150+",
//       label: "Communities Served",
//       description: "Cities and neighborhoods across the US"
//     },
//     {
//       number: "15+",
//       label: "Years of Impact",
//       description: "Dedicated humanitarian service"
//     },
//     {
//       number: "90%",
//       label: "Success Rate",
//       description: "Participants achieving their goals"
//     }
//   ];

//   const filteredStories = activeCategory === 'all' 
//     ? impactStories 
//     : impactStories.filter(story => story.category === activeCategory);

//   const getCategoryColor = (category) => {
//     const colors = {
//       education: 'bg-pink-600',
//       healthcare: 'bg-teal-600',
//       housing: 'bg-pink-600',
//       community: 'bg-teal-600'
//     };
//     return colors[category] || 'bg-gray-500';
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center">
//               <div className="mb-8">
//                 <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600rounded-full text-sm font-semibold mb-4">
//                   Impact Stories
//                 </span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//                 Stories of
//                 <span className="block">
//                   <span className="text-pink-700">Hope</span>
//                   <span className="text-teal-700"> & Transformation</span>
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 Real people, real impact. Discover how compassionate support creates lasting change 
//                 and transforms communities through comprehensive humanitarian programs.
//               </p>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Impact Metrics */}
//       <section className="py-16 bg-white border-t border-b border-gray-200">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {impactMetrics.map((metric, index) => (
//               <AnimatedSection key={index} delay={index * 100}>
//                 <div className="text-center group">
//                   <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
//                     <div className="text-2xl md:text-3xl font-bold text-pink-600mb-2 group-hover:scale-110 transition-transform duration-300">
//                       {metric.number}
//                     </div>
//                     <div className="text-gray-900 font-semibold text-sm mb-1">{metric.label}</div>
//                     <div className="text-gray-600 text-xs">{metric.description}</div>
//                   </div>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Story Categories */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="flex flex-wrap justify-center gap-3">
//               {storyCategories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveCategory(category.id)}
//                   className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
//                     activeCategory === category.id
//                       ? category.id === 'all' 
//                         ? 'bg-gradient-to-r from-pink-600to-teal-600text-white shadow-lg'
//                         : category.id === 'education' || category.id === 'housing'
//                         ? 'bg-pink-600text-white shadow-lg'
//                         : 'bg-teal-600text-white shadow-lg'
//                       : 'bg-white text-gray-700 border border-gray-300 hover:border-pink-300 hover:text-pink-700'
//                   }`}
//                 >
//                   {category.name}
//                 </button>
//               ))}
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Stories Grid */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation Stories</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Discover how compassionate support creates lasting change in communities
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredStories.map((story, index) => (
//               <AnimatedSection key={story.id} delay={index * 100}>
//                 <div 
//                   className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
//                   onClick={() => setSelectedStory(story)}
//                 >
//                   {/* Story Header */}
//                   <div className={`${getCategoryColor(story.category)} h-1 rounded-t-xl`}></div>
                  
//                   <div className="p-5">
//                     {/* Category & Location */}
//                     <div className="flex items-center justify-between mb-3">
//                       <span className={`px-2 py-1 rounded text-xs font-semibold text-white ${getCategoryColor(story.category)}`}>
//                         {story.category}
//                       </span>
//                       <span className="text-xs text-gray-500">{story.location}</span>
//                     </div>

//                     {/* Story Title */}
//                     <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600transition-colors duration-300">
//                       {story.title}
//                     </h3>

//                     {/* Quote Preview */}
//                     <blockquote className="text-gray-600 italic text-sm leading-relaxed mb-3 border-l-2 border-teal-500 pl-3 line-clamp-3">
//                       "{story.quote}"
//                     </blockquote>

//                     {/* Author */}
//                     <div className="text-gray-700 font-medium text-sm mb-3">— {story.author}</div>

//                     {/* Impact */}
//                     <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
//                       <div className="text-teal-600font-semibold text-xs">Impact</div>
//                       <div className="text-teal-600text-xs">{story.impact}</div>
//                     </div>
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
//             <div className="bg-gradient-to-r from-pink-600to-teal-600rounded-2xl p-12 text-center text-white">
//               <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
//               <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
//                 Has our foundation made a meaningful difference in your life? Share your journey and inspire others with your story of transformation.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button 
//                   onClick={() => window.location.href = '/share-story'}
//                   className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
//                 >
//                   Share Your Story
//                 </button>
//                 <button 
//                   onClick={() => window.location.href = '/contact'}
//                   className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
//                 >
//                   Contact Our Team
//                 </button>
//               </div>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Story Detail Modal */}
//       {selectedStory && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-8">
//               {/* Header */}
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <div className="flex items-center gap-3 mb-3">
//                     <span className={`px-2 py-1 rounded text-xs font-semibold text-white ${getCategoryColor(selectedStory.category)}`}>
//                       {selectedStory.category}
//                     </span>
//                     <span className="text-gray-500 text-sm">{selectedStory.location}</span>
//                     <span className="text-gray-500 text-sm">{selectedStory.duration}</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900">{selectedStory.title}</h3>
//                 </div>
//                 <button 
//                   onClick={() => setSelectedStory(null)}
//                   className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="space-y-6">
//                 {/* Main Quote */}
//                 <div className="bg-gradient-to-r from-pink-50 to-teal-50 rounded-xl p-6 border border-pink-100">
//                   <blockquote className="text-xl italic text-gray-700 leading-relaxed text-center">
//                     "{selectedStory.quote}"
//                   </blockquote>
//                   <div className="text-center mt-3 text-lg font-semibold text-pink-700">
//                     — {selectedStory.author}
//                   </div>
//                 </div>

//                 {/* Story Content */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="text-lg font-bold text-gray-900 mb-3">The Journey</h4>
//                       <div className="space-y-3">
//                         <div className="bg-red-50 rounded-lg p-3 border border-red-200">
//                           <div className="font-semibold text-red-700 text-sm mb-1">Before Support</div>
//                           <div className="text-gray-700 text-sm">{selectedStory.before}</div>
//                         </div>
//                         <div className="bg-teal-50 rounded-lg p-3 border border-teal-200">
//                           <div className="font-semibold text-teal-600text-sm mb-1">After Support</div>
//                           <div className="text-gray-700 text-sm">{selectedStory.after}</div>
//                         </div>
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="text-lg font-bold text-gray-900 mb-3">Achievements</h4>
//                       <div className="grid grid-cols-1 gap-2">
//                         {selectedStory.achievements.map((achievement, index) => (
//                           <div key={index} className="flex items-center text-gray-700 text-sm">
//                             <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
//                               index % 2 === 0 ? 'bg-pink-600' : 'bg-teal-600'
//                             }`}></div>
//                             {achievement}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="text-lg font-bold text-gray-900 mb-3">The Story</h4>
//                       <p className="text-gray-700 leading-relaxed text-sm">
//                         {selectedStory.story}
//                       </p>
//                     </div>

//                     <div className="bg-gradient-to-r from-pink-600to-teal-600rounded-xl p-4 text-white">
//                       <h4 className="text-md font-bold mb-2">Community Impact</h4>
//                       <div className="text-white/90 text-sm">{selectedStory.impact}</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-3 pt-6 border-t border-gray-200">
//                   <button className="flex-1 bg-gradient-to-r from-pink-600to-teal-600text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
//                     Support Similar Work
//                   </button>
//                   <button className="flex-1 border-2 border-pink-600text-pink-600py-3 rounded-lg font-semibold hover:bg-pink-700/5 transition-all duration-300">
//                     Share This Story
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client"
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function App() {
  
  // --- Internal Components (Ensures client-side rendering integrity and animation consistency) ---
  
  // Section wrapper with animation (fade in and slide up)
  const AnimatedSection = ({ children, delay = 0, className = '' }) => {
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
        } ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };
  
  // --- Data Definitions ---

  const featuredStory = {
    id: 99,
    name: "Jasmine & The Community Garden",
    age: 35,
    focus: "Food Security & Sustainability",
    quote: "We thought a garden was impossible, but now, it feeds our neighborhood and teaches our kids where food truly comes from.",
    story: "Jasmine spearheaded the development of a neglected lot into a vibrant community garden. Funded and supported by our Foundation, the garden now provides fresh produce for 50+ families in a designated food desert. This project has become a central hub for nutrition education and neighborhood connection.",
    color: 'teal',
    imagePlaceholder: '/images/nkf18.jpg'
  };

  const impactStories = [
    {
      id: 1,
      name: "Maria Lopez",
      age: 42,
      focus: "Economic Empowerment",
      quote: "The micro-loan and skills training gave me back my dignity and a future for my children.",
      story: "After losing her small business, Maria participated in our vocational training and received seed funding to restart her catering service. Today, she employs three other women.",
      color: 'pink',
      iconPath: "M21 13.25L17 18 14 15m-1-5l-4-4H3v14h14v-7", // Checkmark/Task
    },
    {
      id: 2,
      name: "Ethan Wright",
      age: 17,
      focus: "Education & Mentorship",
      quote: "My mentor showed me that success isn't just about grades—it's about finding your path. Now, I'm heading to college.",
      story: "Ethan struggled with focus until he was paired with a tutor through our After-School Program. He is the first in his family to attend university, studying engineering.",
      color: 'teal',
      iconPath: "M12 6V3M12 21V18M18.12 9.88l2.12-2.12M3.76 17.24l2.12-2.12M21 12h-3M6 12H3M17.24 3.76l-2.12 2.12M9.88 18.12l-2.12 2.12", // Lightbulb/Idea
    },
    {
      id: 3,
      name: "Aisha Khan",
      age: 65,
      focus: "Senior Wellness & Relief",
      quote: "Knowing I have a warm meal delivered three times a week makes all the difference. I no longer feel isolated.",
      story: "Aisha is a recipient of our Senior Meals program, providing nutritious food and critical social interaction, helping her maintain independence and health.",
      color: 'pink',
      iconPath: "M9 19c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm3-4H9V3h3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3", // Food/Plate
    }
  ];

  // --- Main Component Render ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-teal-600text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-teal-600 text-white rounded-full text-sm font-semibold tracking-wide uppercase">
                  Stories of Transformation
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Every <span className="text-pink-300">Life</span> Changed
              </h1>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                These are the voices of the people, families, and communities whose lives are uplifted through our shared mission. See your impact in action.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Story - Unique, full-width focus */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={100}>
            <div className="bg-gray-50 rounded-2xl shadow-2xl overflow-hidden border-t-8 border-pink-700">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Placeholder */}
                <div className="h-64 lg:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${featuredStory.imagePlaceholder})` }}>
                   <div className="w-full h-full bg-black bg-opacity-10 flex items-center justify-center">
                       <p className="text-3xl text-white font-bold opacity-80">Featured Story</p>
                   </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-12">
                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600rounded-full text-sm font-semibold mb-3">
                    {featuredStory.focus}
                  </span>
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{featuredStory.name}</h2>
                  <blockquote className="italic border-l-4 border-teal-600pl-4 text-xl text-gray-700 mb-6">
                    "{featuredStory.quote}"
                  </blockquote>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredStory.story}
                  </p>
                  <button
                    className="bg-teal-600text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-teal-800 transition-colors duration-300 transform hover:scale-[1.02]"
                    onClick={() => console.log('Read Full Featured Story')}
                  >
                    Read the Full Impact
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid of Other Stories - Magazine Style Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">More Inspiring Testimonials</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how our programs touch individuals across various needs and demographics.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <AnimatedSection key={story.id} delay={300 + index * 150}>
                <div 
                  className={`bg-white rounded-xl p-6 shadow-lg h-full flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl
                    ${story.color === 'pink' ? 'border-b-4 border-pink-700' : 'border-b-4 border-teal-700'}`
                  }
                >
                  <div>
                    {/* Icon and Focus */}
                    <div className="flex items-center mb-4">
                      <svg className={`w-8 h-8 mr-3 ${story.color === 'pink' ? 'text-pink-700' : 'text-teal-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={story.iconPath}></path>
                      </svg>
                      <span className="text-sm font-semibold uppercase text-gray-500">{story.focus}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{story.name} ({story.age})</h3>
                    
                    <p className="text-gray-600 italic mb-4 border-l-2 border-gray-200 pl-3">
                      "{story.quote}"
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {story.story}
                    </p>
                  </div>

                  <button
                    className={`text-sm font-semibold mt-4 py-2 rounded-lg transition-colors duration-300 w-full
                      ${story.color === 'pink' 
                        ? 'text-pink-600border border-pink-600hover:bg-pink-50' 
                        : 'text-teal-600border border-teal-600hover:bg-teal-50'}`
                    }
                    onClick={() => console.log('Share Link to Story:', story.id)}
                  >
                    Share Story
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Share Your Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-teal-600rounded-2xl p-12 text-center shadow-2xl border-b-8 border-pink-500">
              <h2 className="text-4xl font-extrabold text-white mb-4">Do You Have an Impact Story?</h2>
              <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
                If you or someone you know has been positively affected by the Newmon Kahlon Foundation, we'd love to hear your experience.
              </p>
              <button 
                onClick={() => console.log('Open Story Submission Form')}
                className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold shadow-xl hover:bg-pink-600 transition-colors duration-300 transform hover:scale-[1.02]"
              >
                Submit Your Testimonial
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
