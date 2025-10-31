


// 'use client';
// import { useState, useEffect } from 'react';
// import HeroSection from "../components/HeroSection";
// import ServicesWeProvide from "../components/ServicesWeProvide";
// import WhyChooseUs from "../components/WhyChooseUs";
// import FullWidthSection from "../components/FullWidthSection";
// import ServiceProcess from "../components/ServiceProcess";
// import ClientShowcase from "../components/ClientShowCase";
// import ProductsPage from "../components/Product";
// import ProductSourcingHub from "../components/ProductSourcingHub";
// import VolunteerEngagement from "../components/Volunteer Engagement";
// import CharityGallery from "../components/Gallery";

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const loadingTimer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     const firstPopupTimer = setTimeout(() => {
//       setShowPopup(true);
//     }, 5000);

//     return () => {
//       clearTimeout(loadingTimer);
//       clearTimeout(firstPopupTimer);
//     };
//   }, []);

//   useEffect(() => {
//     if (showPopup) {
//       const secondPopupTimer = setTimeout(() => {
//         setShowPopup(true);
//       }, 30000);

//       return () => clearTimeout(secondPopupTimer);
//     }
//   }, [showPopup]);

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closePopup();
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
    
//     const data = {
//       name: formData.get('name'),
//       email: formData.get('email'),
//       phone: formData.get('phone'),
//       message: formData.get('message')
//     };

//     const subject = `Contact Form Submission from ${data.name}`;
//     const body = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;
    
//     window.location.href = `mailto:newmanklhanfoundation@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
//     alert('Thank you for your message! Opening your email client...');
//     closePopup();
//   };

//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//         <div className="w-32 h-32 flex items-center justify-center">
//           <img 
//             src="/nkf.png" 
//             alt="Logo" 
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full overflow-hidden">
//       {/* Popup Overlay */}
//       {showPopup && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-2 overflow-auto"
//           onClick={handleBackdropClick}
//         >
//           <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto my-4 relative border-2 border-white min-h-[auto]">
//             {/* Close Button */}
//             <button
//               onClick={closePopup}
//               className="absolute top-3 right-3 z-50 bg-white rounded-full p-1 hover:bg-gray-100 shadow-lg"
//             >
//               <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>

//             {/* Header with Logo */}
//             <div className="bg-pink-600 p-4 text-white text-center">
//               <div className="w-16 h-16 bg-white rounded-full p-2 mx-auto mb-3">
//                 <img 
//                   src="/nkf.png" 
//                   alt="NKF Logo" 
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <h2 className="text-xl font-bold mb-1">Get In Touch</h2>
//               <p className="text-white/90 text-sm">Newman Khan Foundation</p>
//             </div>

//             {/* Form Section */}
//             <div className="p-4">
//               <div className="text-center mb-4">
//                 <h3 className="text-lg font-bold text-gray-800 mb-1">Contact Us</h3>
//                 <p className="text-gray-600 text-sm">We'd love to hear from you!</p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="space-y-4">
//                   {/* Name Field */}
//                   <div className="space-y-1">
//                     <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-600 bg-white text-sm"
//                       placeholder="Your full name"
//                     />
//                   </div>

//                   {/* Email Field */}
//                   <div className="space-y-1">
//                     <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-600 bg-white text-sm"
//                       placeholder="your@email.com"
//                     />
//                   </div>

//                   {/* Phone Field */}
//                   <div className="space-y-1">
//                     <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-600 bg-white text-sm"
//                       placeholder="Your phone number"
//                     />
//                   </div>

//                   {/* Message Field */}
//                   <div className="space-y-1">
//                     <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
//                       Your Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       rows={3}
//                       className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-600 bg-white resize-none text-sm"
//                       placeholder="How can we help you?"
//                     />
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex flex-col gap-3 pt-2">
//                   <button
//                     type="submit"
//                     className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 text-sm"
//                   >
//                     Send Message
//                   </button>
//                   <button
//                     type="button"
//                     onClick={closePopup}
//                     className="w-full px-4 py-2 border-2 border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-600 hover:text-white text-sm"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </form>

//               {/* Footer */}
//               <div className="mt-4 pt-4 border-t border-gray-200 text-center">
//                 <div className="w-10 h-10 bg-teal-600 rounded-full p-1 mx-auto mb-2">
//                   <img 
//                     src="/nkf.png" 
//                     alt="NKF Logo" 
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <p className="text-xs text-gray-600">
//                   Thank you for considering Newman Khan Foundation
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
     
      
//       <FullWidthSection>
//         <ServicesWeProvide />
//       </FullWidthSection>

//        <FullWidthSection>
//         <HeroSection />
//       </FullWidthSection>
      
//       <FullWidthSection>
//         <CharityGallery/>
//       </FullWidthSection>

//       <FullWidthSection>
//         <ProductsPage />
//       </FullWidthSection>
      
//       <FullWidthSection>
//         <WhyChooseUs />
//       </FullWidthSection>
      
//       <FullWidthSection>
//         <ServiceProcess />
//       </FullWidthSection>
      
//       <FullWidthSection>
//         <VolunteerEngagement />
//       </FullWidthSection>
//     </div>
//   );
// }


'use client';
import { useState, useEffect } from 'react';
import HeroSection from "../components/HeroSection";
import ServicesWeProvide from "../components/ServicesWeProvide";
import WhyChooseUs from "../components/WhyChooseUs";
import FullWidthSection from "../components/FullWidthSection";
import ServiceProcess from "../components/ServiceProcess";
import ClientShowcase from "../components/ClientShowCase";
import ProductsPage from "../components/Product";
import ProductSourcingHub from "../components/ProductSourcingHub";
import VolunteerEngagement from "../components/Volunteer Engagement";
import CharityGallery from "../components/Gallery";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const firstPopupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(firstPopupTimer);
    };
  }, []);

  useEffect(() => {
    let intervalId;

    // Start the interval after the first popup has been shown
    const startInterval = setTimeout(() => {
      intervalId = setInterval(() => {
        setShowPopup(true);
      }, 30000);
    }, 5000); // Start interval 5 seconds after page load

    return () => {
      clearTimeout(startInterval);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []); // Empty dependency array - runs once on mount

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    const subject = `Contact Form Submission from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;
    
    window.location.href = `mailto:newmanklhanfoundation@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    alert('Thank you for your message! Opening your email client...');
    closePopup();
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="w-32 h-32 flex items-center justify-center">
          <img 
            src="/nkf.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      {/* Popup Overlay */}
      {showPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-2 overflow-auto"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto my-4 relative border-2 border-white min-h-[auto]">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 z-50 bg-white rounded-full p-1 hover:bg-gray-100 shadow-lg"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header with Logo */}
            <div className="bg-pink-600 p-4 rounded-md text-white text-center">
              <div className="w-16 h-16 bg-white rounded-full p-2 mx-auto mb-3">
                <img 
                  src="/nkf.png" 
                  alt="NKF Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-bold mb-1">Get In Touch</h2>
              <p className="text-white/90 text-sm">Newman Khan Foundation</p>
            </div>

            {/* Form Section */}
            <div className="p-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Contact Us</h3>
                <p className="text-gray-600 text-sm">We'd love to hear from you!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-600 bg-white text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-600 bg-white text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-600 bg-white text-sm"
                      placeholder="Your phone number"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-600 bg-white resize-none text-sm"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 text-sm"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={closePopup}
                    className="w-full px-4 py-2 border-2 border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-600 hover:text-white text-sm"
                  >
                    Close
                  </button>
                </div>
              </form>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <div className="w-10 h-10  rounded-full p-1 mx-auto mb-2">
                  <img 
                    src="/nkf.png" 
                    alt="NKF Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600">
                  Thank you for considering Newman Khan Foundation
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <FullWidthSection>
        <ServicesWeProvide />
      </FullWidthSection>

      <FullWidthSection>
        <HeroSection />
      </FullWidthSection>
      
      <FullWidthSection>
        <CharityGallery/>
      </FullWidthSection>

      <FullWidthSection>
        <ProductsPage />
      </FullWidthSection>
      
      <FullWidthSection>
        <WhyChooseUs />
      </FullWidthSection>
      
      <FullWidthSection>
        <ServiceProcess />
      </FullWidthSection>
      
      <FullWidthSection>
        <VolunteerEngagement />
      </FullWidthSection>
    </div>
  );
}