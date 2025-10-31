"use client"
import { useState, useEffect } from 'react';

export default function FutureVision() {
  const [activeTimeline, setActiveTimeline] = useState('2024');
  const [animatedValues, setAnimatedValues] = useState({
    communities: 0,
    families: 0,
    education: 0,
    healthcare: 0
  });

  const visionTimeline = {
    '2024': {
      focus: 'Expanding Humanitarian Reach & Digital Access',
      initiatives: [
        {
          title: 'National Digital Education Platform',
          description: 'Launch comprehensive online learning resources accessible to underserved communities nationwide, focusing on digital literacy and skills development',
          impact: '50,000+ students gaining access to quality education resources',
          status: 'in-progress',
          progress: 65
        },
        {
          title: 'Mobile Healthcare Expansion',
          description: 'Deploy 20 new mobile medical units to provide essential healthcare services in remote and underserved areas',
          impact: 'Medical care for 30,000+ residents in healthcare deserts',
          status: 'planning',
          progress: 30
        },
        {
          title: 'Sustainable Food Security Program',
          description: 'Implement community gardens and food distribution networks in urban food deserts',
          impact: 'Provide 1 million+ nutritious meals annually to families in need',
          status: 'planning',
          progress: 20
        }
      ],
      metrics: {
        budget: '$3.2M',
        locations: 35,
        partnerships: 15
      }
    },
    '2025': {
      focus: 'Comprehensive Community Development',
      initiatives: [
        {
          title: 'Affordable Housing Initiative',
          description: 'Develop 300 sustainable housing units in partnership with local communities and governments',
          impact: 'Safe, stable housing for 1,200+ individuals and families',
          status: 'planned',
          progress: 0
        },
        {
          title: 'Widow & Single Parent Support Network',
          description: 'Establish comprehensive support programs including counseling, vocational training, and childcare assistance',
          impact: 'Transform lives of 5,000+ widows and single parents annually',
          status: 'planned',
          progress: 0
        },
        {
          title: 'Mental Health & Wellness Access',
          description: 'Create community-based mental health support systems in 40 cities with trained local counselors',
          impact: 'Mental health services for 15,000+ residents each year',
          status: 'planned',
          progress: 0
        }
      ],
      metrics: {
        budget: '$4.5M',
        locations: 55,
        partnerships: 22
      }
    },
    '2026': {
      focus: 'National Humanitarian Infrastructure',
      initiatives: [
        {
          title: 'National Education & Scholarship Foundation',
          description: 'Establish permanent endowment fund for underprivileged students with comprehensive support programs',
          impact: 'Annual scholarships and support for 3,000+ college and vocational students',
          status: 'vision',
          progress: 0
        },
        {
          title: 'Emergency Response Network',
          description: 'Develop nationwide rapid response system for natural disasters and humanitarian crises',
          impact: 'Immediate assistance for 50,000+ families during emergencies',
          status: 'vision',
          progress: 0
        },
        {
          title: 'Community Technology & Innovation Centers',
          description: 'Create STEM and digital skills centers in 75 underserved urban and rural communities',
          impact: 'Technology education and resources for 20,000+ youth and adults annually',
          status: 'vision',
          progress: 0
        }
      ],
      metrics: {
        budget: '$6.8M',
        locations: 85,
        partnerships: 30
      }
    }
  };

  const futureMetrics = [
    {
      category: 'Communities Served',
      current: 85,
      target: 150,
      unit: 'communities',
      timeline: 'By 2026'
    },
    {
      category: 'Families Supported',
      current: 25000,
      target: 100000,
      unit: 'families',
      timeline: 'By 2026'
    },
    {
      category: 'Education Access',
      current: 15000,
      target: 50000,
      unit: 'students',
      timeline: 'By 2025'
    },
    {
      category: 'Healthcare Reach',
      current: 35000,
      target: 150000,
      unit: 'patients',
      timeline: 'By 2027'
    }
  ];

  useEffect(() => {
    const targets = { communities: 150, families: 100000, education: 50000, healthcare: 150000 };
    const duration = 2500;
    const startTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      const newNumbers = {};
      Object.keys(targets).forEach(key => {
        newNumbers[key] = Math.floor(targets[key] * progress);
      });
      
      setAnimatedValues(newNumbers);
      
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

  const getStatusColor = (status) => {
    const colors = {
      'in-progress': 'bg-[#00B8C8]',
      'planning': 'bg-[#00B8C8]',
      'planned': 'bg-[#00B8C8]',
      'vision': 'bg-[#00B8C8]'
    };
    return colors[status] || 'bg-gray-500';
  };

  const getStatusText = (status) => {
    const texts = {
      'in-progress': 'Implementation Phase',
      'planning': 'Strategic Planning',
      'planned': 'Funded & Scheduled',
      'vision': 'Future Initiative'
    };
    return texts[status] || status;
  };

  const currentVision = visionTimeline[activeTimeline];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-[#00B8C8]/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#00B8C8]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00A8B8]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-medium"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00B8C8]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#00B8C810_50%,transparent_52%)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 text-[#00B8C8] mb-6">
            <div className="h-px w-16 bg-[#00B8C8] opacity-60"></div>
            <span className="text-sm font-semibold tracking-widest uppercase">Humanitarian Vision 2024-2026</span>
            <div className="h-px w-16 bg-[#00B8C8] opacity-60"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building a Future of
            <span className="block text-[#00B8C8]">
              Hope & Opportunity
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our strategic roadmap for creating lasting humanitarian impact through comprehensive programs 
            that address hunger, poverty, education, healthcare, and community development.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-[#00B8C8]/20">
            <div className="flex gap-2">
              {Object.keys(visionTimeline).map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveTimeline(year)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform ${
                    activeTimeline === year
                      ? 'bg-[#00B8C8] text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:text-[#00B8C8] hover:bg-[#00B8C8]/5 hover:scale-102'
                  }`}
                >
                  {year} Humanitarian Plan
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Vision Initiatives */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{currentVision.focus}</h3>
              <p className="text-gray-600">Comprehensive humanitarian initiatives planned for {activeTimeline}</p>
            </div>

            {currentVision.initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-[#00B8C8]/10 hover:border-[#00B8C8] transition-all duration-500 hover:shadow-xl group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#00B8C8] transition-colors duration-300 mb-2">
                      {initiative.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {initiative.description}
                    </p>
                  </div>
                  <div className={`w-3 h-3 ${getStatusColor(initiative.status)} rounded-full ml-4 flex-shrink-0 mt-2`}></div>
                </div>

                {/* Progress Bar */}
                {initiative.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{getStatusText(initiative.status)}</span>
                      <span>{initiative.progress}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#00B8C8] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="bg-[#00B8C8]/5 rounded-lg p-4 border border-[#00B8C8]/20">
                  <div className="text-sm font-semibold text-[#00B8C8] mb-1">Humanitarian Impact</div>
                  <div className="text-gray-700">{initiative.impact}</div>
                </div>
              </div>
            ))}

            {/* Year Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center bg-white rounded-xl p-4 border border-[#00B8C8]/10 hover:border-[#00B8C8] transition-colors duration-300">
                <div className="text-2xl font-bold text-[#00B8C8] mb-1">{currentVision.metrics.budget}</div>
                <div className="text-sm text-gray-600">Planned Investment</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 border border-[#00B8C8]/10 hover:border-[#00B8C8] transition-colors duration-300">
                <div className="text-2xl font-bold text-[#00B8C8] mb-1">{currentVision.metrics.locations}</div>
                <div className="text-sm text-gray-600">Target Communities</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 border border-[#00B8C8]/10 hover:border-[#00B8C8] transition-colors duration-300">
                <div className="text-2xl font-bold text-[#00B8C8] mb-1">{currentVision.metrics.partnerships}</div>
                <div className="text-sm text-gray-600">Strategic Partnerships</div>
              </div>
            </div>
          </div>

          {/* Future Metrics & Impact Visualization */}
          <div className="space-y-8">
            <div className="bg-[#00B8C8] rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3">Long-Term Humanitarian Goals</h3>
                <p className="text-white text-opacity-90">Our vision for comprehensive community transformation</p>
              </div>

              <div className="space-y-6">
                {futureMetrics.map((metric, index) => (
                  <div key={index} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-lg font-semibold">{metric.category}</div>
                      <div className="text-white text-opacity-90 text-sm">{metric.timeline}</div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold">
                        {formatNumber(animatedValues[Object.keys(animatedValues)[index]] || metric.current)}
                      </div>
                      <div className="text-white text-opacity-80 text-sm">of {formatNumber(metric.target)} {metric.unit}</div>
                    </div>

                    <div className="w-full bg-white/20 rounded-full h-3">
                      <div 
                        className="bg-white h-3 rounded-full transition-all duration-2000"
                        style={{ 
                          width: `${((animatedValues[Object.keys(animatedValues)[index]] || metric.current) / metric.target) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Humanitarian Innovation */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#00B8C8]/10 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Humanitarian Innovation Focus</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#00B8C8]/5 rounded-xl border border-[#00B8C8]/20">
                  <div className="w-12 h-12 bg-[#00B8C8] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    ED
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Digital Education Access</div>
                    <div className="text-sm text-gray-600">Online learning platforms for underserved communities</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#00B8C8]/5 rounded-xl border border-[#00B8C8]/20">
                  <div className="w-12 h-12 bg-[#00B8C8] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    HC
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mobile Healthcare</div>
                    <div className="text-sm text-gray-600">Bringing medical services to remote areas</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#00B8C8]/5 rounded-xl border border-[#00B8C8]/20">
                  <div className="w-12 h-12 bg-[#00B8C8] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    FS
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Food Security</div>
                    <div className="text-sm text-gray-600">Sustainable solutions to combat hunger</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 border-2 border-[#00B8C8] shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Humanitarian Journey
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Partner with us to build a future where every community has access to education, 
              healthcare, food security, and opportunities for growth and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/strategic-plan'}
                className="bg-[#00B8C8] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Full Strategic Plan
              </button>
              <button 
                onClick={() => window.location.href = '/partner'}
                className="border-2 border-[#00B8C8] text-[#00B8C8] px-8 py-4 rounded-xl font-semibold hover:bg-[#00B8C8]/5 transition-all duration-300 transform hover:scale-105"
              >
                Become a Strategic Partner
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.03); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}