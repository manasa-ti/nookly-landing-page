import { Apple, Play, Check } from "lucide-react";
import mobileAppScreenshot from "@assets/Screenshot_1753780035_1753807852309.png";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-nookly-gradient text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Never Be 
                <span className="text-nookly-coral"> Lonely</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Find discreet companionship & connect deeply through anonymous profiles and AI-powered matching.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-nookly-coral rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg">Complete anonymity until you're ready</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-nookly-coral rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg">AI Dating Assistant for better connections</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-nookly-coral rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg">Interactive games & meaningful conversations</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-nookly-coral hover:bg-nookly-coral/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <Apple className="w-5 h-5" />
                <span>Download for iOS</span>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Get on Android</span>
              </a>
            </div>
          </div>
          
          <div className="relative">
            {/* Mobile App Mockup - Using real screenshot */}
            <div className="relative mx-auto w-80 h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                <img 
                  src={mobileAppScreenshot}
                  alt="Nookly App Interface - Anonymous Dating Profiles"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-nookly-coral/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
