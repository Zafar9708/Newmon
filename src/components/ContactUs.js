"use client"
import { useState, useEffect } from 'react';

export default function DonorImpact() {
  const [activeTier, setActiveTier] = useState('community');
  const [animatedImpact, setAnimatedImpact] = useState({
    meals: 0,
    education: 0,
    healthcare: 0,
    housing: 0
  });

  const impactTiers = {
    'community': {
      name: 'Community Builder',
      amount: '$50',
      description: 'Support immediate needs and community programs',
      impacts: [
        { 
          item: 'Nutritious meals', 
          quantity: '25', 
          description: 'for families in need',
          icon: '🍲'
        },
        { 
          item: 'School supplies', 
          quantity: '10', 
          description: 'for students',
          icon: '📚'
        },
        { 
          item: 'Medical supplies', 
          quantity: '5', 
          description: 'for health clinics',
          icon: '🏥'
        }
      ],
      features: [
        'Supports local community programs',
        'Provides essential resources',
        'Helps 10+ families monthly',
        'Quarterly impact report'
      ]
    },
    'transformative': {
      name: 'Transformative Partner',
      amount: '$250',
      description: 'Create lasting change through education and housing',
      impacts: [
        { 
          item: 'Education scholarships', 
          quantity: '1', 
          description: 'month of support',
          icon: '🎓'
        },
        { 
          item: 'Housing assistance', 
          quantity: '2', 
          description: 'families for a week',
          icon: '🏠'
        },
        { 
          item: 'Job training', 
          quantity: '5', 
          description: 'participants',
          icon: '💼'
        }
      ],
      features: [
        'Funds educational programs',
        'Supports housing initiatives',
        'Creates career opportunities',
        'Personalized impact updates'
      ]
    },
    'legacy': {
      name: 'Legacy Leader',
      amount: '$1000',
      description: 'Build sustainable futures and community infrastructure',
      impacts: [
        { 
          item: 'Community center', 
          quantity: '1', 
          description: 'month of operations',
          icon: '🏘️'
        },
        { 
          item: 'Sustainable projects', 
          quantity: '3', 
          description: 'green initiatives',
          icon: '🌱'
        },
        { 
          item: 'Family support', 
          quantity: '10', 
          description: 'comprehensive care',
          icon: '👨‍👩‍👧‍👦'
        }
      ],
      features: [
        'Funds infrastructure projects',
        'Supports long-term sustainability',
        'Transforms entire communities',
        'Executive impact briefings'
      ]
    }
  };

  const realTimeImpact = [
    {
      donor: 'Sarah M.',
      amount: '$100',
      impact: 'Provided school supplies for 20 students',
      time: '2 hours ago',
      location: 'Chicago, IL'
    },
    {
      donor: 'TechCorp Foundation',
      amount: '$5,000',
      impact: 'Funded mobile clinic for 1 month',
      time: '5 hours ago',
      location: 'National'
    },
    {
      donor: 'Anonymous',
      amount: '$250',
      impact: 'Supported housing for 2 families',
      time: '1 day ago',
      location: 'Detroit, MI'
    },
    {
      donor: 'Local Business Alliance',
      amount: '$1,200',
      impact: 'Sponsored job training for 15 people',
      time: '2 days ago',
      location: 'Houston, TX'
    }
  ];

  const impactStories = [
    {
      name: 'Maria & Family',
      location: 'Detroit, MI',
      before: 'Struggling with housing insecurity and limited access to education',
      after: 'Stable home, children thriving in school, parents employed',
      donorImpact: 'Supported through housing and education programs',
      duration: '18 months of support'
    },
    {
      name: 'James Community Center',
      location: 'Chicago, IL',
      before: 'Underfunded center serving 50 families weekly',
      after: 'Vibrant hub serving 200+ families with comprehensive programs',
      donorImpact: 'Infrastructure upgrade and program funding',
      duration: '2 years of partnership'
    }
  ];

  useEffect(() => {
    const targets = { meals: 125000, education: 25000, healthcare: 50000, housing: 5000 };
    const duration = 3000;
    
    Object.keys(targets).forEach(key => {
      let start = 0;
      const end = targets[key];
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setAnimatedImpact(prev => ({
          ...prev,
          [key]: Math.floor(start)
        }));
      }, 16);
    });
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  const currentTier = impactTiers[activeTier];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-medium"></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(16,185,129,0.1)_50%,transparent_52%)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 text-emerald-700 mb-6">
            <div className="h-px w-16 bg-emerald-400"></div>
            <span className="text-sm font-semibold tracking-widest uppercase">Your Impact</span>
            <div className="h-px w-16 bg-emerald-400"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            See Your
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Donation at Work
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every contribution creates real change. Discover how your support transforms lives 
            and builds stronger communities across America.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Impact Tier Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-lg sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Impact Level</h3>
              
              <div className="space-y-4">
                {Object.entries(impactTiers).map(([key, tier]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTier(key)}
                    className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-500 transform ${
                      activeTier === key
                        ? 'border-emerald-500 bg-emerald-50 scale-105 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-emerald-300 hover:scale-102'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-lg font-bold text-gray-900">{tier.name}</div>
                        <div className="text-2xl font-bold text-emerald-600">{tier.amount}</div>
                      </div>
                      {activeTier === key && (
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{tier.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-lg mb-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{currentTier.name}</h3>
                <div className="text-4xl font-bold text-emerald-600 mb-3">{currentTier.amount}</div>
                <p className="text-gray-600 text-lg">{currentTier.description}</p>
              </div>

              {/* Impact Items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {currentTier.impacts.map((impact, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-emerald-50 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-3xl mb-3">{impact.icon}</div>
                    <div className="text-2xl font-bold text-emerald-600 mb-1">{impact.quantity}</div>
                    <div className="font-semibold text-gray-900 mb-1">{impact.item}</div>
                    <div className="text-sm text-gray-600">{impact.description}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 text-center">What Your Support Includes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentTier.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Real-time Impact Feed */}
            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Recent Impact</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-emerald-600 font-semibold">Live Updates</span>
                </div>
              </div>

              <div className="space-y-4">
                {realTimeImpact.map((impact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-emerald-50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {impact.amount}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-semibold text-gray-900">{impact.donor}</span>
                        <span className="text-xs text-gray-500">{impact.time}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{impact.impact}</p>
                      <div className="text-xs text-gray-500 mt-1">{impact.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Stories of Transformation</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">See how donor support creates lasting change in real families and communities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">{story.name}</h4>
                  <p className="text-emerald-600 font-semibold">{story.location}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Before Support</div>
                      <p className="text-gray-600 text-sm">{story.before}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">After Support</div>
                      <p className="text-gray-600 text-sm">{story.after}</p>
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <div className="font-semibold text-emerald-700 mb-1">Donor Impact</div>
                    <p className="text-emerald-600 text-sm">{story.donorImpact}</p>
                    <div className="text-xs text-emerald-500 mt-2">{story.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Impact Statistics */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-8">Collective Impact to Date</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">{formatNumber(animatedImpact.meals)}</div>
              <div className="text-emerald-100">Meals Provided</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{formatNumber(animatedImpact.education)}</div>
              <div className="text-emerald-100">Students Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{formatNumber(animatedImpact.healthcare)}</div>
              <div className="text-emerald-100">Healthcare Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{formatNumber(animatedImpact.housing)}</div>
              <div className="text-emerald-100">Housing Solutions</div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
            <p className="text-lg mb-4">Join thousands of donors creating change</p>
            <button 
              onClick={() => window.location.href = '/donate'}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Make Your Impact Today
            </button>
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