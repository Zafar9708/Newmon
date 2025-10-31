// components/ChatAssistant.jsx
"use client"
import { useState, useRef, useEffect } from 'react';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
    helpType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const chatContainerRef = useRef(null);

  const steps = [
    {
      question: "Hi there! 👋 I'm Hope, your giving assistant. How can we help you make a difference today?",
      options: [
        "I want to learn about giving opportunities",
        "I need help with my donation",
        "I want to partner with the foundation",
        "I have a general question"
      ]
    },
    {
      question: "Wonderful! What type of giving are you interested in?",
      options: [
        "One-time donation",
        "Monthly giving program",
        "Corporate partnership",
        "Legacy giving"
      ]
    },
    {
      question: "Perfect! Could you tell me which cause speaks to your heart?",
      options: [
        "Education & Children",
        "Healthcare Access",
        "Emergency Relief",
        "Community Development",
        "All of the above"
      ]
    }
  ];

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [activeStep, isSubmitted]);

  const handleOptionSelect = (option) => {
    if (activeStep === 0) {
      setFormData(prev => ({ ...prev, helpType: option }));
    } else if (activeStep === 1) {
      setFormData(prev => ({ ...prev, interest: option }));
    }
    
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(steps.length); // Move to form
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  const resetChat = () => {
    setIsOpen(false);
    setTimeout(() => {
      setActiveStep(0);
      setFormData({
        name: '',
        email: '',
        interest: '',
        message: '',
        helpType: ''
      });
      setIsSubmitted(false);
    }, 300);
  };

  // Check if we're still in the conversation steps or moved to form
  const isInConversation = activeStep < steps.length;

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#00B8C8] to-cyan-600 hover:from-cyan-600 hover:to-blue-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      >
        <div className="relative">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
        </div>
        <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Get Personalized Help
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-200 animate-scaleIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00B8C8] to-cyan-600 rounded-t-2xl p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">💫</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Hope - Giving Assistant</h3>
                  <p className="text-cyan-100 text-sm">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={resetChat}
                className="text-white hover:text-cyan-200 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Chat Content */}
          <div ref={chatContainerRef} className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {!isSubmitted ? (
              <>
                {isInConversation ? (
                  /* Conversation Steps */
                  <div className="space-y-4">
                    {/* Bot Message */}
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#00B8C8] to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        H
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-gray-100 max-w-[80%]">
                        <p className="text-gray-700">{steps[activeStep].question}</p>
                      </div>
                    </div>

                    {/* User Options */}
                    <div className="space-y-2 ml-11">
                      {steps[activeStep].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionSelect(option)}
                          className="w-full text-left bg-white hover:bg-cyan-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 hover:text-[#00B8C8] transition-all duration-200 hover:border-cyan-300 hover:shadow-sm"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Form Step */
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#00B8C8] to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        H
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-gray-100 max-w-[80%]">
                        <p className="text-gray-700">Great! Let me get some details to provide you with personalized guidance.</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B8C8] focus:border-[#00B8C8] transition-all duration-300"
                        placeholder="Tell us more about how you'd like to help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#00B8C8] to-cyan-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Get Personalized Guidance
                    </button>
                  </form>
                )}
              </>
            ) : (
              /* Success Message */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  We've received your information. Our giving specialist will contact you within 24 hours with personalized recommendations.
                </p>
                <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
                  <p className="text-sm text-cyan-700">
                    <strong>Next steps:</strong> Check your email for a confirmation and schedule a call with our team.
                  </p>
                </div>
                <button
                  onClick={resetChat}
                  className="mt-6 text-[#00B8C8] hover:text-cyan-700 font-semibold transition-colors duration-200"
                >
                  Start New Conversation
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-3 bg-white rounded-b-2xl">
            <p className="text-xs text-gray-500 text-center">
              Your information is secure and protected. We respect your privacy.
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}