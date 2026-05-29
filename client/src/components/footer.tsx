import { Instagram, Facebook } from "lucide-react";
import appIcon from "@assets/app-icon.png";
import { track } from "@/lib/analytics";

export default function Footer() {
  const handleSmoothScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const linkClass = "text-nookly-mid hover:text-white transition-colors";

  return (
    <footer className="bg-nookly-bg border-t border-nookly-stroke text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={appIcon} alt="nookly" className="w-12 h-12 rounded-xl" />
              <div>
                <span className="text-2xl font-extrabold text-nookly-logo leading-none">nookly</span>
                <p className="text-[11px] text-nookly-lo font-medium tracking-wide mt-0.5">No more lonely</p>
              </div>
            </div>
            <p className="text-nookly-mid leading-relaxed mb-6 max-w-md">
              Anonymous companionship — browse, chat, and play without the pressure.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/nookly.app/"
                className="w-10 h-10 bg-white/5 border border-nookly-stroke rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
                onClick={() => {
                  track("cta_click", {
                    cta_id: "footer_instagram",
                    cta_text: "Instagram",
                    section_id: "footer",
                    href: "https://www.instagram.com/nookly.app/",
                  });
                }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/Nooklyapp"
                className="w-10 h-10 bg-white/5 border border-nookly-stroke rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook"
                onClick={() => {
                  track("cta_click", {
                    cta_id: "footer_facebook",
                    cta_text: "Facebook",
                    section_id: "footer",
                    href: "https://www.facebook.com/Nooklyapp",
                  });
                }}
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-nookly-accent mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" onClick={handleSmoothScroll("#features")} className={linkClass}>
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={handleSmoothScroll("#how-it-works")} className={linkClass}>
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="pricing.html"
                  className={linkClass}
                  onClick={() => {
                    track("cta_click", {
                      cta_id: "footer_pricing",
                      cta_text: "Pricing",
                      section_id: "footer",
                      href: "pricing.html",
                    });
                  }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleSmoothScroll("#contact")} className={linkClass}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-nookly-accent mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://csae-policy.nookly.app/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Safety
                </a>
              </li>
              <li>
                <a href="https://privacy-policy.nookly.app/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://terms-of-use.nookly.app/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="refund-policy.html"
                  className={linkClass}
                  onClick={() => {
                    track("cta_click", {
                      cta_id: "footer_refund_policy",
                      cta_text: "Refund & Cancellation",
                      section_id: "footer",
                      href: "refund-policy.html",
                    });
                  }}
                >
                  Refund & Cancellation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-nookly-stroke mt-12 pt-8 text-center text-nookly-lo text-sm">
          <p>&copy; 2025 Nookly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
