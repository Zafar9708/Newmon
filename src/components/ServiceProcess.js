"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const successStories = [
    {
      id: 1,
      title: "Food Security Transformation",
      description: "From hunger to hope: How our nutrition programs transformed an entire community's food security",
      impact: "2,500+ families now have consistent access to nutritious meals",
      location: "Rural Community, Midwest",
      image: "/images/nkf12.jpg",
      // category: "Hunger Relief",
      year: "2024"
    },
    {
      id: 2,
      title: "Educational Empowerment",
      description: "Breaking cycles of poverty through comprehensive education and vocational training programs",
      impact: "1,200+ students received scholarships and educational support",
      location: "Urban Center, Detroit",
      image: "/images/nkf13.jpg",
      // category: "Education",
      year: "2024"
    },
    {
      id: 3,
      title: "Healthcare Access Revolution",
      description: "Mobile medical clinics bringing essential healthcare services to remote underserved areas",
      impact: "15,000+ medical treatments provided in the last year",
      location: "Remote Villages, Texas",
      image: "/images/nkf14.jpg",
      // category: "Healthcare",
      year: "2024"
    },
    {
      id: 4,
      title: "Widow Support Network",
      description: "Creating sustainable support systems for widows and single parents in vulnerable communities",
      impact: "850+ widows received comprehensive assistance and counseling",
      location: "Multiple Cities Nationwide",
      image: "/images/nkf15.jpg",
      // category: "Widow Support",
      year: "2024"
    },
    {
      id: 5,
      title: "Emergency Response Success",
      description: "Rapid disaster relief and rebuilding efforts that restored hope after natural disasters",
      impact: "3,200+ families received emergency housing and supplies",
      location: "Disaster-Affected Areas",
      image: "/images/nkf16.jpg",
      // category: "Emergency Relief",
      year: "2024"
    },
    {
      id: 6,
      title: "Community Development",
      description: "Building sustainable infrastructure and community centers for long-term growth",
      impact: "25+ community centers established and operational",
      location: "Various Locations",
      image: "/images/nkf17.jpg",
      // category: "Infrastructure",
      year: "2024"
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, successStories.length]);

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + successStories.length) % successStories.length);
  };

  const goToStory = (index) => {
    setCurrentIndex(index);
  };

  const currentStory = successStories[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-pink-600"></div>
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">Impact Stories</span>
            <div className="w-8 h-0.5 bg-teal-600"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stories of
            <span className="block">
              <span className="text-pink-600">Hope</span>
              <span className="text-teal-600"> & Transformation</span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our comprehensive humanitarian programs are creating lasting change 
            and transforming lives in communities across the nation.
          </p>
        </div>

        {/* Main Carousel */}
        <div 
          className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={containerRef}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevStory}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-50 transition-colors duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextStory}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-50 transition-colors duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src={currentStory.image}
                  alt={currentStory.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    currentStory.category === 'Hunger Relief' ? 'bg-pink-500 text-white' :
                    currentStory.category === 'Education' ? 'bg-teal-500 text-white' :
                    currentStory.category === 'Healthcare' ? 'bg-pink-600 text-white' :
                    currentStory.category === 'Widow Support' ? 'bg-teal-600 text-white' :
                    'bg-gray-600 text-white'
                  }`}>
                    {currentStory.category}
                  </span>
                </div>

                {/* Year */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-gray-900 font-semibold text-sm">{currentStory.year}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {currentStory.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {currentStory.description}
                </p>
                <div className="bg-pink-50 rounded-xl p-4 border-l-4 border-pink-500">
                  <p className="text-pink-700 font-semibold">
                    {currentStory.impact}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{currentStory.location}</span>
                </div>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center lg:justify-start gap-2 pt-4">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStory(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-pink-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {successStories.slice(0, 3).map((story, index) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => goToStory(index)}
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h4 className="font-bold text-lg">{story.title}</h4>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {story.description.substring(0, 100)}...
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="font-semibold text-pink-600">{story.category}</span>
                <span>{story.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center">
          <div className="bg-gradient-to-r from-pink-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Be Part of Our Next Success Story</h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Your support helps create more stories of hope and transformation in communities that need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/donate'}
                className="bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Support Our Mission
              </button>
              <button 
                onClick={() => window.location.href = '/stories'}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Read More Stories
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}