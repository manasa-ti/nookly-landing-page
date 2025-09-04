import { Apple, Play, Shield, Download, Heart } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-nookly-gradient text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          No more lonely
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join thousands who have found meaningful connections through anonymous profiles and AI-powered matching. Download Nookly today and start your journey to genuine companionship.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a href="#" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center space-x-3 transition-all transform hover:scale-105">
            <Apple className="w-8 h-8" />
            <div className="text-left">
              <div className="text-sm">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>
          
          <a href="#" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center space-x-3 transition-all transform hover:scale-105">
            <Play className="w-8 h-8" />
            <div className="text-left">
              <div className="text-sm">Get it on</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </a>
        </div>
        
        <div className="flex justify-center space-x-8 text-blue-100">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-nookly-coral" />
            <span>100% Anonymous</span>
          </div>
          <div className="flex items-center space-x-2">
            <Download className="w-5 h-5 text-nookly-coral" />
            <span>Free Download</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-nookly-coral" />
            <span>Meaningful Connections</span>
          </div>
        </div>
      </div>
    </section>
  );
}
