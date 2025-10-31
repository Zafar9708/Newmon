"use client"
import { useState } from 'react';
import ChatAssistant from './ChatAssistant';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Brand & Contact */}
              <div className="space-y-8">
                {/* Brand */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                   <div className="w-12 h-12  rounded-lg flex items-center justify-center overflow-hidden">
      <Image
        src="/nkf.png"
        alt="NKF Logo"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Newman Kahlon Foundation</h3>
                      <p className="text-gray-400">Building Hope, Creating Opportunity</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                    Dedicated to comprehensive humanitarian work addressing hunger, poverty, education, 
                    healthcare, and community development across the United States.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="text-gray-300">
                    <div className="font-semibold">National Headquarters</div>
                    <div className="text-gray-400 text-sm">New York, NY 10001, USA</div>
                  </div>
                  <div className="text-gray-300">
                    <div className="font-semibold">+1 (888) 555-HELP</div>
                    <div className="text-gray-400 text-sm">Toll-Free Humanitarian Line</div>
                  </div>
                  <div className="text-gray-300">
                    <div className="font-semibold">info@newmonkahlon.org</div>
                    <div className="text-gray-400 text-sm">General Inquiries & Partnerships</div>
                  </div>
                </div>

                {/* Social Responsibility */}
                <div className="bg-gradient-to-r from-pink-700/10 to-teal-700/10 rounded-lg p-4 border border-pink-700/20">
                  <div className="text-sm font-semibold text-pink-400 mb-1">Financial Transparency</div>
                  <div className="text-gray-300 text-sm">
                    90% of every donation directly supports our humanitarian programs
                  </div>
                </div>
              </div>

              {/* Right Column - Links & Newsletter */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Quick Links */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold">Our Humanitarian Work</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <a href="/programs/hunger-relief" className="block text-gray-400 hover:text-pink-400 transition-all duration-200 hover:translate-x-1 transform group">
                        <span className="group-hover:text-pink-400">Hunger Relief</span>
                      </a>
                      <a href="/programs/education" className="block text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 transform group">
                        <span className="group-hover:text-teal-400">Education Access</span>
                      </a>
                      <a href="/programs/healthcare" className="block text-gray-400 hover:text-pink-400 transition-all duration-200 hover:translate-x-1 transform group">
                        <span className="group-hover:text-pink-400">Healthcare</span>
                      </a>
                      <a href="/programs/widow-support" className="block text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 transform group">
                        <span className="group-hover:text-teal-400">Widow Support</span>
                      </a>
                    </div>
                    <div className="space-y-3">
                      <a href="/get-involved" className="block text-gray-400 hover:text-pink-400 transition-all duration-200 hover:translate-x-1 transform group">
                        <span className="group-hover:text-pink-400">Get Involved</span>
                      </a>
                      <a href="/impact" className="block text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 transform group">
                        <span className="group-hover:text-teal-400">Our Impact</span>
                      </a>
                      <a href="/partners" className="block text-gray-400 hover:text-pink-400 transition-all duration-200 hover:translate-x-1 transform group">
                        <span className="group-hover:text-pink-400">Partnerships</span>
                      </a>
                      <a href="/contact" className="block text-gray-400 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 transform group">
                        <span className="group-hover:text-teal-400">Contact Us</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold">Stay Connected</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Receive updates on our humanitarian programs, impact stories, and opportunities to make a difference.
                  </p>
                  
                  {isSubscribed ? (
                    <div className="bg-gradient-to-r from-pink-700/20 to-teal-700/20 border border-pink-700/30 rounded-lg p-4">
                      <div className="text-pink-400 font-semibold">Welcome to Our Community!</div>
                      <div className="text-teal-400 text-sm mt-1">
                        You'll receive our next humanitarian update soon.
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-white placeholder-gray-400 transition-all duration-200"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full bg-pink-700  hover:from-pink-600 hover:to-teal-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        Join Our Mission
                      </button>
                    </form>
                  )}

                  {/* Trust Indicators */}
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>501(c)(3) Nonprofit</span>
                      <span>•</span>
                      <span>EIN: 12-3456789</span>
                      <span>•</span>
                      <span>Verified Charity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 Newmon Kahlon Foundation. Compassion in Action.
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="/privacy" className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm hover:underline">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm hover:underline">
                  Terms of Service
                </a>
                <a href="/financials" className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm hover:underline">
                  Financial Transparency
                </a>
                <a href="/credibility" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm hover:underline">
                  Our Credibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </>
  );
}