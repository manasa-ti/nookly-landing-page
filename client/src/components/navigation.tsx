import { useState } from "react";
import { Menu, X } from "lucide-react";
import appIcon from "@assets/app-icon.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const navLink =
    "text-nookly-mid hover:text-white transition-colors text-sm font-medium";

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#06030c]/85 backdrop-blur-md border-b border-nookly-stroke">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-3">
            <img
              src={appIcon}
              alt="nookly"
              className="w-9 h-9 rounded-xl"
            />
            <div>
              <span className="text-2xl font-extrabold text-nookly-logo tracking-tight leading-none">nookly</span>
              <p className="text-[11px] text-nookly-lo font-medium tracking-wide mt-0.5">No more lonely</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" onClick={handleSmoothScroll("#features")} className={navLink}>
              Features
            </a>
            <a href="#how-it-works" onClick={handleSmoothScroll("#how-it-works")} className={navLink}>
              How It Works
            </a>
            <a href="#games" onClick={handleSmoothScroll("#games")} className={navLink}>
              Games
            </a>
            <a href="pricing.html" className={navLink}>
              Pricing
            </a>
            <a href="#contact" onClick={handleSmoothScroll("#contact")} className={navLink}>
              Contact
            </a>
            <a
              href="#download"
              onClick={handleSmoothScroll("#download")}
              className="bg-nookly-gradient text-white px-5 py-2 rounded-full text-sm font-bold shadow-nookly-accent hover:opacity-95 transition-opacity"
            >
              Download
            </a>
          </div>

          <button
            className="md:hidden text-nookly-mid"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-nookly-stroke py-4 bg-[#06030c]">
            <div className="flex flex-col gap-4">
              <a href="#features" onClick={handleSmoothScroll("#features")} className={`${navLink} px-4`}>
                Features
              </a>
              <a href="#how-it-works" onClick={handleSmoothScroll("#how-it-works")} className={`${navLink} px-4`}>
                How It Works
              </a>
              <a href="#games" onClick={handleSmoothScroll("#games")} className={`${navLink} px-4`}>
                Games
              </a>
              <a href="pricing.html" className={`${navLink} px-4`}>
                Pricing
              </a>
              <a href="#contact" onClick={handleSmoothScroll("#contact")} className={`${navLink} px-4`}>
                Contact
              </a>
              <a
                href="#download"
                onClick={handleSmoothScroll("#download")}
                className="bg-nookly-gradient text-white px-6 py-2.5 rounded-full font-bold mx-4 text-center"
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
