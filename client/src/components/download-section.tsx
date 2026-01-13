import { Globe2, Play, Shield, Download, Heart } from "lucide-react";

export default function DownloadSection() {

  return (
    <section id="download" className="py-20 bg-nookly-gradient text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Your Complete Dating Journey Starts Here
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          From first match to lasting connection—and everything in between. Download Nookly and experience dating with a companion who's got your back.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="https://app.nookly.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center space-x-3 transition-all transform hover:scale-105"
          >
            <Globe2 className="w-8 h-8" />
            <div className="text-left">
              <div className="text-sm">Open Now</div>
              <div className="text-lg font-semibold">Web App</div>
            </div>
          </a>
          
          <a 
            href="https://play.google.com/store/apps/details?id=com.nookly.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center space-x-3 transition-all transform hover:scale-105"
          >
            <Play className="w-8 h-8" />
            <div className="text-left">
              <div className="text-sm">Download Now</div>
              <div className="text-lg font-semibold">Android</div>
            </div>
          </a>
        </div>
        
        <p className="text-lg text-blue-100 font-semibold mt-8">
          More than matching. More than messaging. Your complete dating experience.
        </p>
        
        <div className="flex justify-center space-x-8 text-blue-100 mt-6">
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
            <span>Complete Dating Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
