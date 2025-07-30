import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-nookly-gradient rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-nookly-blue">nookly</span>
              <p className="text-xs text-gray-500 -mt-1">Never be lonely</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" onClick={handleSmoothScroll("#features")} className="text-gray-700 hover:text-nookly-blue transition-colors">Features</a>
            <a href="#how-it-works" onClick={handleSmoothScroll("#how-it-works")} className="text-gray-700 hover:text-nookly-blue transition-colors">How It Works</a>
            <a href="#testimonials" onClick={handleSmoothScroll("#testimonials")} className="text-gray-700 hover:text-nookly-blue transition-colors">Stories</a>
            <a href="#contact" onClick={handleSmoothScroll("#contact")} className="text-gray-700 hover:text-nookly-blue transition-colors">Contact</a>
            <a href="#download" onClick={handleSmoothScroll("#download")} className="bg-nookly-coral text-white px-6 py-2 rounded-full hover:bg-nookly-coral/90 transition-colors">Download</a>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" onClick={handleSmoothScroll("#features")} className="text-gray-700 hover:text-nookly-blue transition-colors px-4">Features</a>
              <a href="#how-it-works" onClick={handleSmoothScroll("#how-it-works")} className="text-gray-700 hover:text-nookly-blue transition-colors px-4">How It Works</a>
              <a href="#testimonials" onClick={handleSmoothScroll("#testimonials")} className="text-gray-700 hover:text-nookly-blue transition-colors px-4">Stories</a>
              <a href="#contact" onClick={handleSmoothScroll("#contact")} className="text-gray-700 hover:text-nookly-blue transition-colors px-4">Contact</a>
              <a href="#download" onClick={handleSmoothScroll("#download")} className="bg-nookly-coral text-white px-6 py-2 rounded-full hover:bg-nookly-coral/90 transition-colors mx-4 text-center">Download</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
