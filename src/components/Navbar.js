// 'use client';
// import { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [textHover, setTextHover] = useState(null);
//   const navbarRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const menuData = [
//     { 
//       label: 'Home', 
//       path: '/',
//       weight: 'bold'
//     },
//     { 
//       label: 'About', 
//       path: '/about',
//       weight: 'bold'
//     },
//     { 
//       label: 'Programs', 
//       path: '/programs',
//       weight: 'bold',
//       children: [
//         { label: 'Education Support', path: '/programs/education' },
//         { label: 'Healthcare Access', path: '/programs/healthcare' },
//         { label: 'Emergency Relief', path: '/programs/emergency-relief' },
//         { label: 'Community Development', path: '/programs/community' },
//       ]
//     },
//     { 
//       label: 'Get Involved', 
//       path: '/involve',
//       weight: 'bold',
//       children: [
//         { label: 'Volunteer', path: '/involved/volunteer' },
//         { label: 'Become a Partner', path: '/involved/partner' },
//         { label: 'Start Fundraising', path: '/involved/fundraise' },
//       ]
//     },
//     { 
//       label: 'Events', 
//       path: '/events',
//       weight: 'bold'
//     },
//     { 
//       label: 'Stories', 
//       path: '/stories',
//       weight: 'bold'
//     },
//     { 
//       label: 'Contact', 
//       path: '/contact',
//       weight: 'bold'
//     },
//   ];

//   return (
//     <>
//       {/* Minimal Announcement Bar */}
//       <div className="bg-gradient-to-r from-pink-700 to-pink-800 text-white py-3">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <div className="text-sm tracking-wider font-medium">
//             Transforming 50,000+ Lives • Join Our Mission
//           </div>
//         </div>
//       </div>

//       {/* Typography-Focused Navigation */}
//       <nav 
//         ref={navbarRef}
//         className={`sticky top-0 z-50 transition-all duration-500 ${
//           isScrolled 
//             ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-pink-100'
//             : 'bg-white'
//         }`}
//       >
//         <div className="max-w-8xl mx-auto">
//           {/* Main Navigation Row */}
//           <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
            
//             {/* Logo */}
//             <Link href="/" className="group flex items-center">
//               <div className="relative w-12 h-12 lg:w-16 lg:h-16">
//                 <Image
//                   src="/nkf.png"
//                   alt="NKF Logo"
//                   fill
//                   className="object-contain transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//             </Link>

//             {/* Desktop Navigation - Pure Text Layout */}
//             <div className="hidden lg:flex items-center space-x-12">
//               {menuData.map((item, index) => (
//                 <div key={item.label} className="relative">
//                   {item.children ? (
//                     <TextDropdown 
//                       item={item}
//                       isActive={activeMenu === item.label}
//                       onHover={setActiveMenu}
//                       onTextHover={setTextHover}
//                     />
//                   ) : (
//                     <TextLink 
//                       item={item}
//                       onTextHover={setTextHover}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Donate - Text Button */}
//             <div className="hidden lg:block">
//               <button
//                 onClick={() => {/* donation */}}
//                 className="group relative"
//               >
//                 <div className="text-lg font-black tracking-wide bg-gradient-to-r from-pink-700 to-pink-800 bg-clip-text text-transparent">
//                   DONATE NOW
//                 </div>
//                 <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></div>
//               </button>
//             </div>

//             {/* Mobile Hamburger Button */}
//             <button 
//               className="lg:hidden flex flex-col items-center justify-center w-8 h-8 relative group"
//               onClick={() => setActiveMenu(activeMenu ? null : 'mobile')}
//             >
//               <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
//                 activeMenu === 'mobile' ? 'rotate-45 translate-y-1.5' : ''
//               }`}></span>
//               <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1.5 ${
//                 activeMenu === 'mobile' ? 'opacity-0' : ''
//               }`}></span>
//               <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1.5 ${
//                 activeMenu === 'mobile' ? '-rotate-45 -translate-y-1.5' : ''
//               }`}></span>
//             </button>
//           </div>

//           {/* Text Dropdown Panels */}
//           {activeMenu && menuData.find(item => item.label === activeMenu)?.children && (
//             <TextDropdownPanel 
//               item={menuData.find(item => item.label === activeMenu)}
//               onClose={() => setActiveMenu(null)}
//             />
//           )}

//           {/* Mobile Menu */}
//           {activeMenu === 'mobile' && (
//             <MobileMenu 
//               items={menuData}
//               onClose={() => setActiveMenu(null)}
//             />
//           )}
//         </div>

//         {/* Text Hover Effect Line */}
//         {textHover && (
//           <div className="absolute bottom-0 h-0.5 bg-pink-500 transition-all duration-300 pointer-events-none"
//             style={{
//               left: `${textHover.x}px`,
//               width: `${textHover.width}px`,
//             }}
//           />
//         )}
//       </nav>
//     </>
//   );
// }

// // Text Link Component
// function TextLink({ item, onTextHover }) {
//   const linkRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (linkRef.current) {
//       const rect = linkRef.current.getBoundingClientRect();
//       onTextHover({
//         x: rect.left,
//         width: rect.width,
//       });
//     }
//   };

//   const handleMouseLeave = () => {
//     onTextHover(null);
//   };

//   return (
//     <Link
//       ref={linkRef}
//       href={item.path}
//       className={`relative group transition-all duration-300 ${
//         item.weight === 'bold' ? 'font-bold' : 'font-semibold'
//       } text-gray-800 hover:text-pink-700 text-lg tracking-wide`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {item.label}
//       <div className="absolute -inset-x-2 -inset-y-1 bg-pink-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
//     </Link>
//   );
// }

// // Text Dropdown Component
// function TextDropdown({ item, isActive, onHover, onTextHover }) {
//   const dropdownRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (dropdownRef.current) {
//       const rect = dropdownRef.current.getBoundingClientRect();
//       onTextHover({
//         x: rect.left,
//         width: rect.width,
//       });
//     }
//     onHover(item.label);
//   };

//   const handleMouseLeave = () => {
//     onTextHover(null);
//   };

//   return (
//     <div 
//       ref={dropdownRef}
//       className="relative"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <button className={`group transition-all duration-300 ${
//         item.weight === 'bold' ? 'font-bold' : 'font-semibold'
//       } text-gray-800 hover:text-pink-700 text-lg tracking-wide flex items-center space-x-1`}>
//         <span>{item.label}</span>
//         <svg 
//           className={`w-4 h-4 transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
//           fill="none" 
//           stroke="currentColor" 
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>
      
//       {/* Active indicator */}
//       {isActive && (
//         <div className="absolute -bottom-8 left-0 right-0 h-0.5 bg-pink-500 animate-pulse"></div>
//       )}
//     </div>
//   );
// }

// // Text Dropdown Panel
// function TextDropdownPanel({ item, onClose }) {
//   const panelRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (panelRef.current && !panelRef.current.contains(event.target)) {
//         onClose();
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [onClose]);

//   return (
//     <div 
//       ref={panelRef}
//       className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-pink-100 shadow-lg"
//     >
//       <div className="max-w-7xl mx-auto px-8 py-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {item.children.map((child, index) => (
//             <Link
//               key={child.path}
//               href={child.path}
//               onClick={onClose}
//               className="group p-4 rounded-lg hover:bg-pink-50 transition-all duration-300 transform hover:translate-x-2"
//             >
//               <div className="text-lg font-semibold text-gray-800 group-hover:text-pink-700 transition-colors">
//                 {child.label}
//               </div>
//               <div className="text-sm text-gray-500 mt-1 group-hover:text-pink-600 transition-colors">
//                 Learn more →
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Mobile Menu Component
// function MobileMenu({ items, onClose }) {
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   return (
//     <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-pink-100 shadow-xl max-h-screen overflow-y-auto">
//       <div className="px-6 py-6 space-y-1">
//         {items.map((item) => (
//           <div key={item.label} className="border-b border-pink-50 last:border-b-0">
//             {item.children ? (
//               <div>
//                 <button
//                   onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
//                   className={`w-full text-left py-4 flex items-center justify-between text-lg ${
//                     item.weight === 'bold' ? 'font-bold' : 'font-semibold'
//                   } text-gray-800 hover:text-pink-700 transition-colors`}
//                 >
//                   <span>{item.label}</span>
//                   <svg 
//                     className={`w-5 h-5 transform transition-transform duration-300 ${
//                       openSubmenu === item.label ? 'rotate-180' : ''
//                     }`}
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
                
//                 {openSubmenu === item.label && (
//                   <div className="pl-6 pb-4 space-y-3 animate-fadeIn">
//                     {item.children.map((child) => (
//                       <Link
//                         key={child.path}
//                         href={child.path}
//                         onClick={onClose}
//                         className="block py-3 text-gray-600 hover:text-pink-700 transition-colors text-base border-l-2 border-pink-200 pl-4 hover:border-pink-500"
//                       >
//                         {child.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link
//                 href={item.path}
//                 onClick={onClose}
//                 className={`block py-4 text-lg ${
//                   item.weight === 'bold' ? 'font-bold' : 'font-semibold'
//                 } text-gray-800 hover:text-pink-700 transition-colors`}
//               >
//                 {item.label}
//               </Link>
//             )}
//           </div>
//         ))}
        
//         {/* Mobile Donate Button */}
//         <div className="pt-6 border-t border-pink-100">
//           <button
//             onClick={() => {
//               /* donation */
//               onClose();
//             }}
//             className="w-full text-center py-4 bg-gradient-to-r from-pink-700 to-pink-800 text-white font-bold text-lg rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
//           >
//             DONATE NOW
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Text Animation Styles
// const styles = `
//   @keyframes fadeIn {
//     from { opacity: 0; transform: translateY(-10px); }
//     to { opacity: 1; transform: translateY(0); }
//   }
//   .animate-fadeIn {
//     animation: fadeIn 0.3s ease-out;
//   }
// `;

// // Add styles to document
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement('style');
//   styleSheet.innerText = styles;
//   document.head.appendChild(styleSheet);
// }

'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DonationModal from './DonationModal';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [textHover, setTextHover] = useState(null);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuData = [
    { 
      label: 'Home', 
      path: '/',
      weight: 'bold'
    },
    { 
      label: 'About', 
      path: '/about',
      weight: 'bold'
    },
    { 
      label: 'Programs', 
      path: '/programs',
      weight: 'bold',
      children: [
        { label: 'Education Support', path: '/programs/education' },
        { label: 'Healthcare Access', path: '/programs/healthcare' },
        { label: 'Emergency Relief', path: '/programs/emergency-relief' },
        { label: 'Community Development', path: '/programs/community' },
      ]
    },
    { 
      label: 'Get Involved', 
      path: '/involve',
      weight: 'bold',
      children: [
        { label: 'Volunteer', path: '/involved/volunteer' },
        { label: 'Become a Partner', path: '/involved/partner' },
        { label: 'Start Fundraising', path: '/involved/fundraise' },
      ]
    },
    { 
      label: 'Events', 
      path: '/events',
      weight: 'bold'
    },
    { 
      label: 'Stories', 
      path: '/stories',
      weight: 'bold'
    },
    { 
      label: 'Contact', 
      path: '/contact',
      weight: 'bold'
    },
  ];

  const handleDonateClick = () => {
    setShowDonationModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDonationModal = () => {
    setShowDonationModal(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Minimal Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-700 to-pink-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-sm tracking-wider font-medium">
            Transforming 50,000+ Lives • Join Our Mission
          </div>
        </div>
      </div>

      {/* Typography-Focused Navigation */}
      <nav 
        ref={navbarRef}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-pink-100'
            : 'bg-white'
        }`}
      >
        <div className="max-w-8xl mx-auto">
          {/* Main Navigation Row */}
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
            
            {/* Logo */}
            <Link href="/" className="group flex items-center">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image
                  src="/nkf.png"
                  alt="NKF Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Pure Text Layout */}
            <div className="hidden lg:flex items-center space-x-12">
              {menuData.map((item, index) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <TextDropdown 
                      item={item}
                      isActive={activeMenu === item.label}
                      onHover={setActiveMenu}
                      onTextHover={setTextHover}
                    />
                  ) : (
                    <TextLink 
                      item={item}
                      onTextHover={setTextHover}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Donate - Text Button */}
            <div className="hidden lg:block">
              <button
                onClick={handleDonateClick}
                className="group relative"
              >
                <div className="text-lg font-black tracking-wide bg-gradient-to-r from-pink-700 to-pink-800 bg-clip-text text-transparent">
                  DONATE NOW
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="lg:hidden flex flex-col items-center justify-center w-8 h-8 relative group"
              onClick={() => setActiveMenu(activeMenu ? null : 'mobile')}
            >
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                activeMenu === 'mobile' ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1.5 ${
                activeMenu === 'mobile' ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1.5 ${
                activeMenu === 'mobile' ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </button>
          </div>

          {/* Text Dropdown Panels */}
          {activeMenu && menuData.find(item => item.label === activeMenu)?.children && (
            <TextDropdownPanel 
              item={menuData.find(item => item.label === activeMenu)}
              onClose={() => setActiveMenu(null)}
            />
          )}

          {/* Mobile Menu */}
          {activeMenu === 'mobile' && (
            <MobileMenu 
              items={menuData}
              onClose={() => setActiveMenu(null)}
              onDonateClick={handleDonateClick}
            />
          )}
        </div>

        {/* Text Hover Effect Line */}
        {textHover && (
          <div className="absolute bottom-0 h-0.5 bg-pink-500 transition-all duration-300 pointer-events-none"
            style={{
              left: `${textHover.x}px`,
              width: `${textHover.width}px`,
            }}
          />
        )}
      </nav>

      {/* Donation Modal */}
      {showDonationModal && (
        <DonationModal onClose={closeDonationModal} />
      )}
    </>
  );
}

// Text Link Component
function TextLink({ item, onTextHover }) {
  const linkRef = useRef(null);

  const handleMouseEnter = () => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      onTextHover({
        x: rect.left,
        width: rect.width,
      });
    }
  };

  const handleMouseLeave = () => {
    onTextHover(null);
  };

  return (
    <Link
      ref={linkRef}
      href={item.path}
      className={`relative group transition-all duration-300 ${
        item.weight === 'bold' ? 'font-bold' : 'font-semibold'
      } text-gray-800 hover:text-pink-700 text-lg tracking-wide`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.label}
      <div className="absolute -inset-x-2 -inset-y-1 bg-pink-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </Link>
  );
}

// Text Dropdown Component
function TextDropdown({ item, isActive, onHover, onTextHover }) {
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      onTextHover({
        x: rect.left,
        width: rect.width,
      });
    }
    onHover(item.label);
  };

  const handleMouseLeave = () => {
    onTextHover(null);
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={`group transition-all duration-300 ${
        item.weight === 'bold' ? 'font-bold' : 'font-semibold'
      } text-gray-800 hover:text-pink-700 text-lg tracking-wide flex items-center space-x-1`}>
        <span>{item.label}</span>
        <svg 
          className={`w-4 h-4 transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute -bottom-8 left-0 right-0 h-0.5 bg-pink-500 animate-pulse"></div>
      )}
    </div>
  );
}

// Text Dropdown Panel
function TextDropdownPanel({ item, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div 
      ref={panelRef}
      className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-pink-100 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {item.children.map((child, index) => (
            <Link
              key={child.path}
              href={child.path}
              onClick={onClose}
              className="group p-4 rounded-lg hover:bg-pink-50 transition-all duration-300 transform hover:translate-x-2"
            >
              <div className="text-lg font-semibold text-gray-800 group-hover:text-pink-700 transition-colors">
                {child.label}
              </div>
              <div className="text-sm text-gray-500 mt-1 group-hover:text-pink-600 transition-colors">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mobile Menu Component
// Mobile Menu Component
function MobileMenu({ items, onClose, onDonateClick }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-pink-100 shadow-xl max-h-screen overflow-y-auto">
      <div className="px-6 py-6 space-y-1">
        {items.map((item) => (
          <div key={item.label} className="border-b border-pink-50 last:border-b-0">
            {item.children ? (
              <div>
                <button
                  onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                  className={`w-full text-left py-4 flex items-center justify-between text-lg ${
                    item.weight === 'bold' ? 'font-bold' : 'font-semibold'
                  } text-gray-800 hover:text-pink-700 transition-colors`}
                >
                  <span>{item.label}</span>
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openSubmenu === item.label ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openSubmenu === item.label && (
                  <div className="pl-6 pb-4 space-y-3 animate-fadeIn">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        onClick={onClose}
                        className="block py-3 text-gray-600 hover:text-pink-700 transition-colors text-base border-l-2 border-pink-200 pl-4 hover:border-pink-500"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.path}
                onClick={onClose}
                className={`block py-4 text-lg ${
                  item.weight === 'bold' ? 'font-bold' : 'font-semibold'
                } text-gray-800 hover:text-pink-700 transition-colors`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        
        {/* Mobile Donate Button */}
        <div className="pt-6 border-t border-pink-100">
          <button
            onClick={() => {
              onDonateClick();
              onClose();
            }}
            className="w-full text-center py-4 bg-gradient-to-r from-pink-700 to-pink-800 text-white font-bold text-lg rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            DONATE NOW
          </button>
        </div>
      </div>
    </div>
  );
}

// Text Animation Styles
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}