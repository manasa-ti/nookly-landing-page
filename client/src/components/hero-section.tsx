import { Apple, Play, Check, Signal, Wifi, Battery, Heart, Compass, MessageCircle, User } from "lucide-react";

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
            {/* Mobile App Mockup */}
            <div className="relative mx-auto w-80 h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-nookly-blue rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center p-4 text-white text-sm">
                  <div className="flex space-x-2">
                    <Signal className="w-4 h-4" />
                    <Wifi className="w-4 h-4" />
                    <Battery className="w-4 h-4" />
                  </div>
                  <span>2:37</span>
                </div>
                
                {/* App Header */}
                <div className="text-center mb-6">
                  <h2 className="text-white text-2xl font-bold">nookly</h2>
                  <p className="text-blue-200 text-sm">Never be lonely</p>
                </div>
                
                {/* Profile Cards */}
                <div className="px-4 space-y-4">
                  {/* Profile Card 1 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">O</span>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">Obsidian Gaze, 37</h3>
                          <p className="text-blue-200 text-sm">0.0 km away</p>
                        </div>
                      </div>
                      <Heart className="w-6 h-6 text-nookly-coral" />
                    </div>
                    <p className="text-white text-sm mb-3">Looking for a companion to talk to, hang out and make good memories</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-500/30 text-white text-xs px-3 py-1 rounded-full">deep conversations</span>
                      <span className="bg-blue-500/30 text-white text-xs px-3 py-1 rounded-full">experiences together</span>
                    </div>
                  </div>
                  
                  {/* Profile Card 2 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">Artisan Soul, 37</h3>
                          <p className="text-blue-200 text-sm">0.0 km away</p>
                        </div>
                      </div>
                      <Heart className="w-6 h-6 text-nookly-coral" />
                    </div>
                    <p className="text-white text-sm mb-3">New here, looking for something new</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-500/30 text-white text-xs px-3 py-1 rounded-full">deep conversations</span>
                      <span className="bg-blue-500/30 text-white text-xs px-3 py-1 rounded-full">engaging chats</span>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-nookly-dark/80 backdrop-blur-sm">
                  <div className="flex justify-around py-4">
                    <div className="text-center">
                      <Compass className="w-6 h-6 text-nookly-coral mx-auto mb-1" />
                      <p className="text-white text-xs">Discover</p>
                    </div>
                    <div className="text-center">
                      <Heart className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                      <p className="text-gray-400 text-xs">Likes</p>
                    </div>
                    <div className="text-center">
                      <MessageCircle className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                      <p className="text-gray-400 text-xs">Chat</p>
                    </div>
                    <div className="text-center">
                      <User className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                      <p className="text-gray-400 text-xs">Profile</p>
                    </div>
                  </div>
                </div>
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
