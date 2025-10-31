"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CommunityConnections() {
  const [activeView, setActiveView] = useState('network');
  const [animatedStats, setAnimatedStats] = useState({
    partners: 0,
    volunteers: 0,
    communities: 0,
    impact: 0
  });

  const connectionNodes = [
    {
      id: 1,
      type: 'corporate',
      name: 'TechForward Inc',
      role: 'Technology Partner',
      contribution: 'Digital infrastructure & devices for education programs',
      since: '2022',
      status: 'active',
      location: 'Silicon Valley, CA',
      image: '/images/nkf1.jpg'
    },
    {
      id: 2,
      type: 'community',
      name: 'Urban Community Alliance',
      role: 'Local Implementation Partner',
      contribution: 'Ground operations & community outreach for hunger relief',
      since: '2018',
      status: 'active',
      location: 'Detroit, MI',
      image: '/images/nkf2.jpg'
    },
    {
      id: 3,
      type: 'education',
      name: 'Learning Futures Foundation',
      role: 'Educational Development Partner',
      contribution: 'Curriculum development & vocational training programs',
      since: '2020',
      status: 'active',
      location: 'Chicago, IL',
      image: '/images/nkf3.jpg'
    },
    {
      id: 4,
      type: 'healthcare',
      name: 'HealthBridge Medical Group',
      role: 'Medical Services Partner',
      contribution: 'Mobile clinics & preventive healthcare services',
      since: '2021',
      status: 'active',
      location: 'Houston, TX',
      image: '/images/nkf4.jpg'
    },
    {
      id: 5,
      type: 'foundation',
      name: 'Hope Builders Foundation',
      role: 'Strategic Funding Partner',
      contribution: 'Multi-year support for poverty alleviation programs',
      since: '2019',
      status: 'active',
      location: 'New York, NY',
      image: '/images/nkf5.jpg'
    }
  ];

  const successMetrics = [
    {
      category: 'Hunger Relief',
      progress: 92,
      target: 95,
      description: 'Families with consistent food security',
      trend: 'up'
    },
    {
      category: 'Healthcare Access',
      progress: 78,
      target: 85,
      description: 'Individuals receiving medical care',
      trend: 'up'
    },
    {
      category: 'Education Support',
      progress: 85,
      target: 90,
      description: 'Students completing educational programs',
      trend: 'up'
    },
    {
      category: 'Poverty Alleviation',
      progress: 74,
      target: 80,
      description: 'Families achieving financial stability',
      trend: 'up'
    }
  ];

  useEffect(() => {
    const targets = { partners: 156, volunteers: 2347, communities: 89, impact: 125000 };
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      const newNumbers = {};
      Object.keys(targets).forEach(key => {
        newNumbers[key] = Math.floor(targets[key] * progress);
      });
      
      setAnimatedStats(newNumbers);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  const getTypeColor = (type) => {
    const colors = {
      corporate: 'bg-pink-500',
      community: 'bg-pink-600',
      education: 'bg-teal-500',
      healthcare: 'bg-teal-600',
      foundation: 'bg-pink-700'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-pink-600"></div>
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">Our Network</span>
            <div className="w-8 h-0.5 bg-teal-600"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Stronger
            <span className="block">
              <span className="text-pink-600">Communities</span>
              <span className="text-teal-600"> Together</span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Through strategic partnerships and collaborative efforts, we amplify our impact 
            and create sustainable change across communities.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveView('network')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeView === 'network'
                    ? 'bg-pink-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Our Partners
              </button>
              <button
                onClick={() => setActiveView('impact')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeView === 'impact'
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Our Impact
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {activeView === 'network' ? (
          <div className="space-y-12">
            
            {/* Partnership Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">{animatedStats.partners}</div>
                <div className="text-gray-600 text-sm">Strategic Partners</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">{formatNumber(animatedStats.volunteers)}</div>
                <div className="text-gray-600 text-sm">Active Volunteers</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">{animatedStats.communities}</div>
                <div className="text-gray-600 text-sm">Communities Served</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">{formatNumber(animatedStats.impact)}</div>
                <div className="text-gray-600 text-sm">Lives Impacted</div>
              </div>
            </div>

            {/* Partners Grid with Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {connectionNodes.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-32 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="font-bold text-lg">{partner.name}</h3>
                    </div>
                    <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${getTypeColor(partner.type)}`}></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-pink-600 font-semibold text-sm">{partner.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{partner.contribution}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                      <span>{partner.location}</span>
                      <span>Since {partner.since}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Partnership Image */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/nkf1.jpg"
                  alt="Partnership in action"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">Collaborative Impact</h3>
                  <p className="text-sm opacity-90">Working together for sustainable change</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Impact View */
          <div className="space-y-12">
            
            {/* Impact Overview */}
            <div className="bg-gradient-to-r from-pink-600 to-teal-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Collective Impact Achievements</h3>
              <p className="text-pink-100 mb-6">
                Measuring our progress across all humanitarian programs and initiatives
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl font-bold mb-1">2.5M+</div>
                  <div className="text-pink-200 text-sm">Meals Provided</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">50K+</div>
                  <div className="text-teal-200 text-sm">Families Supported</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">35K+</div>
                  <div className="text-pink-200 text-sm">Medical Visits</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">25K+</div>
                  <div className="text-teal-200 text-sm">Students Educated</div>
                </div>
              </div>
            </div>

            {/* Progress Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Program Performance</h3>
                {successMetrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">{metric.category}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-pink-600">{metric.progress}%</span>
                        <span className="text-gray-400 text-sm">of {metric.target}%</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{metric.description}</p>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-pink-500 to-teal-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${metric.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Impact Images */}
              <div className="space-y-6">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/nkf2.jpg"
                    alt="Education programs impact"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">Education Transformation</h4>
                    <p className="text-sm opacity-90">Building brighter futures</p>
                  </div>
                </div>
                
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/nkf3.jpg"
                    alt="Healthcare impact"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">Healthcare Access</h4>
                    <p className="text-sm opacity-90">Saving lives daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our <span className="text-pink-600">Mission</span> of Hope
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Together, we can create lasting change and build stronger, more resilient communities 
              through comprehensive humanitarian programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/partner'}
                className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300"
              >
                Become a Partner
              </button>
              <button 
                onClick={() => window.location.href = '/volunteer'}
                className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300"
              >
                Volunteer With Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}