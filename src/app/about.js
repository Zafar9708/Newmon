'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Financial Officer",
      experience: "15+ years",
      image: "/team/sarah.jpg",
      specialties: ["Tax Strategy", "Financial Planning", "Business Consulting"]
    },
    {
      name: "Michael Chen",
      role: "Senior Accountant",
      experience: "12+ years",
      image: "/team/michael.jpg",
      specialties: ["Bookkeeping", "Audit Support", "Payroll Management"]
    },
    {
      name: "Elena Rodriguez",
      role: "Tax Specialist",
      experience: "10+ years",
      image: "/team/elena.jpg",
      specialties: ["Tax Preparation", "Compliance", "IRS Representation"]
    },
    {
      name: "David Williams",
      role: "Financial Analyst",
      experience: "8+ years",
      image: "/team/david.jpg",
      specialties: ["Data Analysis", "Financial Modeling", "Business Intelligence"]
    }
  ];

  const milestones = [
    { year: "2010", title: "Company Founded", description: "Started with a vision to provide exceptional accounting services" },
    { year: "2014", title: "100+ Clients", description: "Reached milestone of serving over 100 satisfied clients" },
    { year: "2018", title: "Expanded Services", description: "Introduced financial consulting and CFO services" },
    { year: "2022", title: "Award Winning", description: "Received Excellence in Accounting award for outstanding service" },
    { year: "2024", title: "Global Reach", description: "Now serving clients across 10+ countries worldwide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Atlabb Accounting
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            We are a team of dedicated financial experts committed to helping businesses 
            thrive through comprehensive accounting solutions and strategic financial guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400">250+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400">98%</div>
              <div className="text-gray-300">Client Retention</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400">10+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
          </div>
        </div>
      </header>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We believe in building lasting relationships with our clients through transparency, 
              expertise, and personalized service.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
            <div className="flex flex-wrap border-b border-gray-700 mb-8">
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-3 font-medium rounded-t-lg transition-all ${activeTab === 'mission' ? 'bg-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'}`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-3 font-medium rounded-t-lg transition-all ${activeTab === 'vision' ? 'bg-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'}`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`px-6 py-3 font-medium rounded-t-lg transition-all ${activeTab === 'values' ? 'bg-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'}`}
              >
                Our Values
              </button>
            </div>

            <div className="transition-all duration-300">
              {activeTab === 'mission' && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Empowering Business Growth</h3>
                    <p className="text-gray-300 mb-4">
                      Our mission is to provide exceptional accounting and financial services that empower 
                      businesses to make informed decisions, optimize their financial performance, and achieve 
                      sustainable growth.
                    </p>
                    <p className="text-gray-300">
                      We combine technical expertise with industry knowledge to deliver tailored solutions 
                      that address the unique challenges and opportunities each client faces.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-500/20">
                    <div className="text-6xl mb-4">🎯</div>
                    <h4 className="text-xl font-semibold mb-2">Focused on Your Success</h4>
                    <p className="text-gray-400">
                      Every strategy we develop and every number we analyze is focused on one goal: your success.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Redefining Accounting Excellence</h3>
                    <p className="text-gray-300 mb-4">
                      Our vision is to be the leading provider of innovative accounting solutions that 
                      transform how businesses manage their finances and plan for the future.
                    </p>
                    <p className="text-gray-300">
                      We aim to set new standards in the accounting industry by leveraging technology, 
                      fostering talent, and maintaining an unwavering commitment to client success.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-500/20">
                    <div className="text-6xl mb-4">🔮</div>
                    <h4 className="text-xl font-semibold mb-2">Future-Forward Approach</h4>
                    <p className="text-gray-400">
                      We're constantly evolving our services to anticipate and meet the changing needs of modern businesses.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Core Principles</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                          <span className="text-2xl">💎</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Integrity</h4>
                          <p className="text-gray-400">We maintain the highest ethical standards in all our interactions and recommendations.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                          <span className="text-2xl">🎓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Expertise</h4>
                          <p className="text-gray-400">Our team continuously updates their knowledge to provide cutting-edge solutions.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                          <span className="text-2xl">🤝</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Partnership</h4>
                          <p className="text-gray-400">We view ourselves as an extension of your team, invested in your success.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-500/20">
                    <div className="text-6xl mb-4">🌟</div>
                    <h4 className="text-xl font-semibold mb-2">Commitment to Excellence</h4>
                    <p className="text-gray-400">
                      Our values aren't just words—they're the foundation of everything we do and the promise we make to every client.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team of certified professionals brings decades of combined experience 
              in accounting, taxation, and financial consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-4xl text-white">
                    {member.image ? (
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        width={128} 
                        height={128} 
                        className="rounded-full object-cover w-full h-full"
                      />
                    ) : (
                      member.name.charAt(0)
                    )}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {member.experience}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-center mb-2 group-hover:text-cyan-400 transition-colors">{member.name}</h3>
                <p className="text-cyan-400 text-center mb-4">{member.role}</p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="bg-gray-700/50 text-gray-300 text-xs px-3 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/team" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              View Full Team
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From our humble beginnings to becoming a trusted partner for businesses worldwide.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}>
                    <div className={`bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 ${index % 2 === 0 ? 'border-l-4 border-cyan-500' : 'border-r-4 border-blue-500'}`}>
                      <div className={`text-2xl font-bold text-cyan-400 mb-2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                        {milestone.year}
                      </div>
                      <h3 className={`text-xl font-semibold mb-2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                        {milestone.title}
                      </h3>
                      <p className={`text-gray-400 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Management?</h2>
            <p className="text-gray-300 text-xl mb-8">
              Join hundreds of businesses that trust Atlabb Accounting with their financial success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 hover:bg-white/10 transition-all"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}