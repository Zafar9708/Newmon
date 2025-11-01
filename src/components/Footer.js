import ChatAssistant from "./ChatAssistant";

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full bg-nkfTeal text-white py-12">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Contact Details - Simple Layout */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            
            <div className="space-y-4 text-lg">
              <p>Riverside - CA</p>
              <p>
                <a href="mailto:info@newmankahlonfoundation.org" className="hover:text-teal-400 transition duration-300">
                  info@newmankahlonfoundation.org
                </a>
              </p>
              <p>
                <a href="tel:1-909-533-4177" className="hover:text-teal-400 transition duration-300">
                  1-909-533-4177
                </a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-white">
              © 2019 by Newman Kahlon Foundation
            </p>
          </div>

        </div>
      </div>
      <ChatAssistant />
    </footer>
  );
}