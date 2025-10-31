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

// export default function EventsPage() {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const eventCategories = [
//     { id: 'all', name: 'All Events' },
//     { id: 'fundraiser', name: 'Fundraisers' },
//     { id: 'volunteer', name: 'Volunteer Events' },
//     { id: 'workshop', name: 'Workshops' },
//     { id: 'community', name: 'Community Events' }
//   ];

//   const events = [
//     {
//       id: 1,
//       title: "Annual Hope Gala 2024",
//       category: "fundraiser",
//       date: "2024-03-15",
//       time: "18:00 - 22:00",
//       location: "Grand Ballroom, New York City",
//       description: "An inspiring evening of celebration and solidarity to support our comprehensive humanitarian programs addressing hunger, education, and healthcare needs.",
//       image: "/events/gala.jpg",
//       status: "upcoming",
//       seats: 150,
//       registered: 112,
//       goal: "$150,000",
//       raised: "$98,500",
//       highlights: ["Keynote speakers", "Impact storytelling", "Live auction", "Gourmet dining"]
//     },
//     {
//       id: 2,
//       title: "Community Health & Wellness Fair",
//       category: "community",
//       date: "2024-02-20",
//       time: "10:00 - 16:00",
//       location: "Central Park, Manhattan",
//       description: "Free comprehensive health services including screenings, wellness education, and resource distribution for underserved community members.",
//       image: "/events/health-fair.jpg",
//       status: "upcoming",
//       seats: 600,
//       registered: 428,
//       goal: "Serve 600+ individuals",
//       raised: null,
//       highlights: ["Medical screenings", "Nutrition education", "Mental health resources", "Preventive care"]
//     },
//     {
//       id: 3,
//       title: "Youth Education Workshop",
//       category: "workshop",
//       date: "2024-02-25",
//       time: "13:00 - 17:00",
//       location: "Education Innovation Center, Brooklyn",
//       description: "Interactive learning sessions and career exploration for underserved youth, focusing on STEM education and future opportunities.",
//       image: "/events/stem-workshop.jpg",
//       status: "upcoming",
//       seats: 75,
//       registered: 58,
//       goal: "Empower 75 students",
//       raised: null,
//       highlights: ["STEM activities", "Career exploration", "Mentorship", "Educational resources"]
//     },
//     {
//       id: 4,
//       title: "Neighborhood Revitalization Day",
//       category: "volunteer",
//       date: "2024-03-02",
//       time: "09:00 - 14:00",
//       location: "Multiple locations across NYC",
//       description: "Join fellow volunteers in community beautification projects, creating cleaner and safer environments for residents.",
//       image: "/events/cleanup.jpg",
//       status: "upcoming",
//       seats: 250,
//       registered: 198,
//       goal: "Transform 20 city blocks",
//       raised: null,
//       highlights: ["Community bonding", "Environmental work", "Team collaboration", "Visible impact"]
//     },
//     {
//       id: 5,
//       title: "Winter Essentials Drive",
//       category: "community",
//       date: "2024-01-15",
//       time: "10:00 - 18:00",
//       location: "Community Resource Center, Queens",
//       description: "Annual distribution of winter essentials including coats, blankets, and warm clothing to support families during cold months.",
//       image: "/events/coat-drive.jpg",
//       status: "past",
//       seats: null,
//       registered: null,
//       goal: "Support 2,500 individuals",
//       raised: "2,800+ items distributed",
//       highlights: ["2,500+ served", "Multi-organization collaboration", "Volunteer celebration"]
//     }
//   ];

//   const pastAchievements = [
//     {
//       event: "2023 Humanitarian Gala",
//       impact: "$285,000 raised",
//       description: "Funded comprehensive programs serving 5,000+ individuals"
//     },
//     {
//       event: "Summer Nutrition Initiative",
//       impact: "25,000 meals provided",
//       description: "Supported food-insecure families during critical summer months"
//     },
//     {
//       event: "Back to School Empowerment Fair",
//       impact: "2,500 students equipped",
//       description: "Provided educational resources and school supplies for academic success"
//     }
//   ];

//   const filteredEvents = activeFilter === 'all' 
//     ? events 
//     : events.filter(event => event.category === activeFilter);

//   const getStatusColor = (status) => {
//     return status === 'upcoming' ? 'bg-teal-600' : 'bg-gray-500';
//   };

//   const getCategoryColor = (category) => {
//     const colors = {
//       fundraiser: 'bg-pink-600',
//       volunteer: 'bg-teal-600',
//       workshop: 'bg-pink-600',
//       community: 'bg-teal-600'
//     };
//     return colors[category] || 'bg-gray-500';
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', { 
//       month: 'short', 
//       day: 'numeric',
//       year: 'numeric'
//     });
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
//                   Events & Gatherings
//                 </span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//                 Join Our
//                 <span className="block">
//                   <span className="text-pink-700">Community</span>
//                   <span className="text-teal-700"> Events</span>
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 From inspiring fundraisers to hands-on volunteer opportunities, our events bring compassionate people together 
//                 to create meaningful, lasting change in communities across the nation.
//               </p>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Impact Stats */}
//       <section className="py-16 bg-white border-t border-b border-gray-200">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <AnimatedSection delay={0}>
//               <div className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-pink-600mb-2">
//                   <AnimatedNumber value={184} />+
//                 </div>
//                 <div className="text-gray-600 font-semibold">Events Hosted</div>
//               </div>
//             </AnimatedSection>
//             <AnimatedSection delay={100}>
//               <div className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-teal-600mb-2">
//                   <AnimatedNumber value={35000} />+
//                 </div>
//                 <div className="text-gray-600 font-semibold">Participants</div>
//               </div>
//             </AnimatedSection>
//             <AnimatedSection delay={200}>
//               <div className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-pink-600mb-2">
//                   <AnimatedNumber value={4200} />+
//                 </div>
//                 <div className="text-gray-600 font-semibold">Volunteers</div>
//               </div>
//             </AnimatedSection>
//             <AnimatedSection delay={300}>
//               <div className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-teal-600mb-2">
//                   $<AnimatedNumber value={3200000} />
//                 </div>
//                 <div className="text-gray-600 font-semibold">Funds Raised</div>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Event Categories Filter */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="flex flex-wrap justify-center gap-3">
//               {eventCategories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveFilter(category.id)}
//                   className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
//                     activeFilter === category.id
//                       ? category.id === 'all' 
//                         ? 'bg-gradient-to-r from-pink-600to-teal-600text-white shadow-lg'
//                         : category.id === 'fundraiser' || category.id === 'workshop'
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

//       {/* Events Grid */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Join us for these inspiring gatherings and make a tangible difference in communities
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredEvents.filter(event => event.status === 'upcoming').map((event, index) => (
//               <AnimatedSection key={event.id} delay={index * 100}>
//                 <div 
//                   className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
//                   onClick={() => setSelectedEvent(event)}
//                 >
//                   {/* Event Header */}
//                   <div className={`${getCategoryColor(event.category)} h-2 rounded-t-xl`}></div>
                  
//                   <div className="p-6">
//                     {/* Event Status & Date */}
//                     <div className="flex items-center justify-between mb-4">
//                       <span className={`px-2 py-1 rounded text-xs font-semibold text-white ${getStatusColor(event.status)}`}>
//                         {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
//                       </span>
//                       <span className="text-sm text-gray-500 font-medium">
//                         {formatDate(event.date)}
//                       </span>
//                     </div>

//                     {/* Event Title */}
//                     <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600transition-colors duration-300">
//                       {event.title}
//                     </h3>

//                     {/* Event Details */}
//                     <div className="space-y-2 mb-4">
//                       <div className="flex items-center text-gray-600 text-sm">
//                         <svg className="w-4 h-4 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         {event.time}
//                       </div>
//                       <div className="flex items-center text-gray-600 text-sm">
//                         <svg className="w-4 h-4 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                         </svg>
//                         <span className="line-clamp-1">{event.location}</span>
//                       </div>
//                     </div>

//                     {/* Progress Bars */}
//                     {event.raised && (
//                       <div className="mb-4">
//                         <div className="flex justify-between text-xs text-gray-600 mb-1">
//                           <span>Raised: {event.raised}</span>
//                           <span>Goal: {event.goal}</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-1.5">
//                           <div className="bg-pink-600 h-1.5 rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
//                         </div>
//                       </div>
//                     )}

//                     {event.seats && (
//                       <div className="mb-4">
//                         <div className="flex justify-between text-xs text-gray-600 mb-1">
//                           <span>{event.registered} registered</span>
//                           <span>{event.seats} capacity</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-1.5">
//                           <div 
//                             className="bg-teal-600 h-1.5 rounded-full transition-all duration-1000"
//                             style={{ width: `${(event.registered / event.seats) * 100}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                     )}

//                     {/* Action Button */}
//                     <button className="w-full bg-gradient-to-r from-pink-600to-teal-600text-white py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300">
//                       Register Now
//                     </button>
//                   </div>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Past Achievements */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Impact</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Celebrating the meaningful outcomes from our recent community events
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {pastAchievements.map((achievement, index) => (
//               <AnimatedSection key={index} delay={index * 100}>
//                 <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
//                   <div className="text-center">
//                     <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600font-bold text-lg mx-auto mb-4">
//                       ✓
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.event}</h3>
//                     <div className="text-pink-600font-bold text-md mb-2">{achievement.impact}</div>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {achievement.description}
//                     </p>
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
//               <h2 className="text-3xl font-bold mb-4">Host Your Own Event</h2>
//               <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
//                 Want to organize a fundraiser or community event to support our mission? We provide full support and guidance.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button 
//                   onClick={() => window.location.href = '/events/host'}
//                   className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
//                 >
//                   Become an Organizer
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

//       {/* Event Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-8">
//               <div className="flex justify-between items-start mb-6">
//                 <h3 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h3>
//                 <button 
//                   onClick={() => setSelectedEvent(null)}
//                   className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <div className="font-semibold text-gray-900">Date & Time</div>
//                     <div className="text-gray-600">
//                       {formatDate(selectedEvent.date)}
//                       <br />
//                       {selectedEvent.time}
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <div className="font-semibold text-gray-900">Location</div>
//                     <div className="text-gray-600">{selectedEvent.location}</div>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="font-semibold text-gray-900 mb-2">About This Event</div>
//                   <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
//                 </div>

//                 <div>
//                   <div className="font-semibold text-gray-900 mb-3">Event Highlights</div>
//                   <div className="grid grid-cols-1 gap-2">
//                     {selectedEvent.highlights.map((highlight, index) => (
//                       <div key={index} className="flex items-center text-gray-600">
//                         <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-3"></div>
//                         {highlight}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <button className="w-full bg-gradient-to-r from-pink-600to-teal-600text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
//                   {selectedEvent.status === 'upcoming' ? 'Register for Event' : 'View Impact Report'}
//                 </button>
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
  
  // --- Internal Components (Copied for design consistency) ---
  
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

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Community Health Fair",
      date: "Saturday, November 9th, 2025",
      time: "9:00 AM - 3:00 PM EST",
      location: "City Park Pavilion, Springfield, CA",
      focus: "Healthcare & Wellness",
      description: "Offering free health screenings, vaccinations, and educational workshops for all ages. Partnership with local medical professionals.",
      color: 'teal',
    },
    {
      id: 2,
      title: "Holiday Meal Preparation Drive",
      date: "Friday, December 6th, 2025",
      time: "4:00 PM - 8:00 PM EST",
      location: "Foundation Main Kitchen, Springfield, CA",
      focus: "Hunger Relief",
      description: "Volunteer to prepare and package thousands of nutritious meals for families facing food insecurity during the holiday season.",
      color: 'pink',
    },
    {
      id: 3,
      title: "Youth STEM Workshop",
      date: "Saturday, January 18th, 2026",
      time: "10:00 AM - 1:00 PM EST",
      location: "Community Library Meeting Room",
      focus: "Education & Mentorship",
      description: "Engaging workshop designed to inspire high school students in Science, Technology, Engineering, and Mathematics with hands-on projects.",
      color: 'teal',
    },
  ];

  const volunteerOpportunities = [
    "Weekly Food Bank Sorting (Tuesdays, 10 AM)",
    "After-School Tutoring Sessions (Mondays & Wednesdays, 4 PM)",
    "Weekend Community Garden Upkeep (Saturdays, 9 AM)",
    "Administrative Support (Flexible Hours)"
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
                <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600rounded-full text-sm font-semibold tracking-wide uppercase">
                  Community & Engagement
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Our <span className="text-pink-700">Upcoming</span> Events
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Join us in making a difference! Explore opportunities to volunteer, attend educational workshops, and participate in community-building initiatives.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Events List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Events</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Mark your calendar and sign up today to participate in these critical programs.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={200 + index * 150}>
                <div 
                  className={`bg-white rounded-xl p-8 shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.01] flex flex-col lg:flex-row gap-8 
                    ${event.color === 'pink' ? 'border-l-8 border-pink-700' : 'border-l-8 border-teal-700'}`
                  }
                >
                  {/* Date/Focus Block (Left Side) */}
                  <div className={`flex-shrink-0 w-full lg:w-1/4 p-4 rounded-lg text-center ${event.color === 'pink' ? 'bg-pink-50 text-pink-700' : 'bg-teal-50 text-teal-700'}`}>
                    <div className="text-sm font-semibold uppercase mb-1">{event.focus}</div>
                    <div className="text-3xl font-extrabold mb-1 leading-none">{event.date.split(',')[1].trim().split(' ')[0]}</div>
                    <div className="text-lg font-medium">{event.date.split(',')[0]}</div>
                    <div className="text-sm mt-2 font-medium">{event.time}</div>
                  </div>

                  {/* Event Details (Right Side) */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-700 mb-6">
                      <svg className={`w-4 h-4 mr-2 ${event.color === 'pink' ? 'text-pink-700' : 'text-teal-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
                      {event.location}
                    </div>

                    <button
                      className={`px-6 py-2 rounded-lg font-semibold text-white shadow-md transition-colors duration-300 
                        ${event.color === 'pink' 
                          ? 'bg-pink-600hover:bg-pink-800' 
                          : 'bg-teal-600hover:bg-teal-800'}`
                      }
                      onClick={() => console.log('Register for event:', event.title)}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <AnimatedSection>
              <div>
                <span className="inline-block px-4 py-1.5 bg-pink-50 text-pink-600rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                  Ongoing Support
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Regular Volunteer Activities</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Can't make it to a one-time event? We have consistent opportunities for you to lend a hand and become a sustained part of our humanitarian efforts. Consistent support is the backbone of lasting transformation.
                </p>
                <button 
                  onClick={() => console.log('Volunteer Sign Up')}
                  className="bg-teal-600text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-teal-800 transition-colors duration-300 transform hover:scale-[1.02]"
                >
                  View All Opportunities
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="space-y-4 p-8 rounded-xl bg-gray-50 border border-gray-200">
                {volunteerOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <svg className="w-6 h-6 mr-4 text-pink-600flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p className="text-gray-700 font-medium">{opportunity}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Footer CTA - Event Newsletter */}
      <section className="py-16 bg-pink-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
              <p className="text-pink-100 text-lg mb-8">
                Subscribe to our Events Newsletter to get the latest dates, locations, and sign-up links delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full sm:flex-grow p-3 rounded-lg text-gray-900 border-2 border-transparent focus:border-teal-400 focus:outline-none transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="bg-teal-500 text-teal-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-teal-400 transition-colors duration-300 transform hover:scale-[1.02] sm:w-auto w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
