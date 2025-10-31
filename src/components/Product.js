"use client"
import { useState, useRef, useEffect } from 'react';

export default function ImpactJourney() {
  const [activePhase, setActivePhase] = useState(0);
  const progressRef = useRef(null);

  const journeyPhases = [
    {
      year: "2009",
      title: "The Beginning of Hope",
      milestone: "First Community Outreach",
      description: "Started with a vision to create lasting change, serving 50 families with essential needs and building the foundation for comprehensive community transformation.",
      achievements: ["50 families served weekly", "1 community center established", "5 dedicated volunteers"],
      impact: "Laid foundation for sustainable change",
      donations: "2,500+"
    },
    {
      year: "2012",
      title: "Expanding Our Reach",
      milestone: "Multi-City Humanitarian Network",
      description: "Expanded our compassionate services to 3 additional cities, developing comprehensive programs for hunger relief, education, and emergency assistance.",
      achievements: ["4 cities served", "500+ families impacted", "25 community partnerships"],
      impact: "Built network of hope across regions",
      donations: "15,000+"
    },
    {
      year: "2016",
      title: "Comprehensive Compassion",
      milestone: "Holistic Service Integration",
      description: "Launched specialized programs addressing hunger, poverty, education, and healthcare. Implemented strategic approaches to maximize community impact and create sustainable solutions.",
      achievements: ["8 comprehensive programs", "10,000+ lives transformed", "85% program success rate"],
      impact: "Integrated holistic community support",
      donations: "50,000+"
    },
    {
      year: "2020",
      title: "National Humanitarian Presence",
      milestone: "Coast-to-Coast Compassion",
      description: "Established presence in 15 states with focus on underserved communities. Developed mobile response units for emergency relief and remote area humanitarian services.",
      achievements: ["15 states reached", "25,000+ families supported", "45 mobile relief units"],
      impact: "Scaled impact to national level",
      donations: "150,000+"
    },
    {
      year: "2024",
      title: "Sustainable Future Building",
      milestone: "Next Generation Humanitarian Work",
      description: "Focusing on sustainable community development, digital education access, climate-resilient infrastructure, and creating pathways out of poverty for generations to come.",
      achievements: ["50+ communities transformed", "100,000+ lives changed", "98% donor satisfaction"],
      impact: "Building legacy of sustainable hope",
      donations: "500,000+"
    }
  ];

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-pink-600"></div>
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <div className="w-12 h-0.5 bg-pink-600"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            15 Years of
            <span className="block text-pink-600">Meaningful Impact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of compassion, growth, and sustainable change through dedicated humanitarian service
          </p>
        </div>

        {/* Main Timeline */}
        <div className="relative">
          
          {/* Vertical Progress Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-pink-300 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {journeyPhases.map((phase, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Year Marker */}
                <div className="flex items-center gap-6 md:absolute left-1/2 md:-translate-x-1/2 z-10">
                  <div 
                    className={`w-16 h-16 rounded-full border-4 border-white bg-pink-600 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ${
                      activePhase === index ? 'scale-110 ring-4 ring-pink-200' : 'hover:scale-105'
                    }`}
                    onClick={() => setActivePhase(index)}
                  >
                    <span className="text-white font-bold text-sm">{phase.year}</span>
                  </div>
                  
                  {/* Connector line for mobile */}
                  <div className="w-8 h-0.5 bg-pink-300 md:hidden"></div>
                </div>

                {/* Content Card */}
                <div 
                  className={`flex-1 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-500 ${
                    activePhase === index 
                      ? 'transform -translate-y-2 border-pink-200 shadow-2xl' 
                      : 'opacity-90 hover:opacity-100'
                  } ${
                    index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* Main Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
                        <span className="text-pink-600 font-semibold text-sm uppercase tracking-wide">
                          {phase.milestone}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {phase.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      {/* Impact Highlight */}
                      <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-600">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-pink-600 font-semibold">Key Impact:</span>
                        </div>
                        <p className="text-gray-800 font-medium">{phase.impact}</p>
                      </div>
                    </div>

                    {/* Stats Sidebar */}
                    <div className="lg:w-64 space-y-6">
                      
                      {/* Donations */}
                      <div className="text-center p-4 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl text-white">
                        <div className="text-2xl font-bold mb-1">{phase.donations}</div>
                        <div className="text-pink-100 text-sm">Donations Received</div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Achievements</h4>
                        {phase.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Progress Navigation */}
        <div className="flex justify-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-2">
            {journeyPhases.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`w-12 h-2 rounded-full transition-all duration-300 ${
                  activePhase === index 
                    ? 'bg-pink-600' 
                    : 'bg-gray-300 hover:bg-pink-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        {/* <div className="mt-20 bg-gradient-to-r from-pink-600 to-pink-700 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cumulative Impact</h2>
            <p className="text-pink-100 text-lg max-w-2xl mx-auto">
              The collective power of compassion measured through years of dedicated service
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years of Service", icon: "📅" },
              { number: "50+", label: "Communities Served", icon: "🏘️" },
              { number: "100K+", label: "Lives Impacted", icon: "👥" },
              { number: "500K+", label: "Total Donations", icon: "💝" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-pink-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}

       

      </div>
    </section>
  );
}