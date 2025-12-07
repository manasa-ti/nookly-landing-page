import { Apple, Play } from "lucide-react";
import { useState } from "react";
import mobileAppScreenshot from "@assets/Screenshot_1764935027.png";
import EmailCollectionModal from "./email-collection-modal";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<'ios' | 'android'>('ios');

  const handleDownloadClick = (platform: 'ios' | 'android') => {
    setSelectedPlatform(platform);
    setModalOpen(true);
  };

  return (
    <section className="pt-24 pb-16 text-white overflow-hidden" style={{ backgroundColor: '#1d335f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                No more 
                <span className="text-nookly-coral"> lonely</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                No more scrolling alone! Find your companion for late-night talks, fun experiences, and lasting connections.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-blue-100 leading-relaxed">
                Experience genuine connection without the pressure. Chat, play games, and share moments with like-minded companions in a safe, judgment-free space. Your identity, your choice.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleDownloadClick('ios')}
                className="bg-nookly-coral hover:bg-nookly-coral/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Apple className="w-5 h-5" />
                <span>Get Early Access</span>
              </button>
              <button 
                onClick={() => handleDownloadClick('android')}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Get Early Access</span>
              </button>
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
      
      <EmailCollectionModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        platform={selectedPlatform}
      />
    </section>
  );
}
