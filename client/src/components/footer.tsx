import React from "react";
import { Twitter, Instagram, Facebook } from "lucide-react";
import echoLogo from "@assets/echo_logo.svg";

export default function Footer() {
  const handleSmoothScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-nookly-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={echoLogo} 
                alt="Nookly Logo" 
                className="w-12 h-12 object-contain rounded-xl"
              />
              <div>
                <span className="text-2xl font-bold">nookly</span>
                <p className="text-sm text-gray-400 -mt-1">No more lonely</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your companion for meaningful connections.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a> */}
              <a href="https://www.instagram.com/nookly.app/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/Nooklyapp" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#features" onClick={handleSmoothScroll("#features")} className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" onClick={handleSmoothScroll("#how-it-works")} className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Assistant</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="https://csae-policy.nookly.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Safety</a></li>
              <li><a href="https://privacy-policy.nookly.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://terms-of-use.nookly.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="refund-policy.html" className="hover:text-white transition-colors">Refund & Cancellation Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                      <p>&copy; 2025 Nookly. All rights reserved. No more lonely.</p>
        </div>
      </div>
    </footer>
  );
}
