import { Heart, MessageCircle, Gamepad2, Shield } from "lucide-react";

export default function CompleteDatingExperienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            More Than Just Chatting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            nookly helps you build genuine connections through meaningful engagement
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Break the Ice */}
          <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Break the Ice</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>AI-powered conversation starters tailored to your interests</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Interactive games to naturally get to know each other</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Truth or Thrill, Would You Rather, and more</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>No awkward silences or boring "hey" messages</span>
              </li>
            </ul>
          </div>
          
          {/* Build Connection */}
          <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Build Connection</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Engage in meaningful conversations at your own pace</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Progress from Open Up to Get Close naturally</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Share memories and experiences through Memory Sparks</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Connect whenever you need someone to talk to</span>
              </li>
            </ul>
          </div>
          
          {/* Stay Safe & Private */}
          <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Stay Safe & Private</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Complete anonymity—no photos or real names required</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>You control what you share and when</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Judgment-free zone for authentic connection</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Safe space to be yourself without fear</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Coming Soon */}
        <div className="mt-12">
          <div className="bg-nookly-gradient rounded-3xl p-8 text-white">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-6">Coming Soon</h3>
            <div className="grid md:grid-cols-2 gap-6 text-center max-w-3xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2">Heat Up Mode</h4>
                <p className="text-white/80 text-sm">Deeper, more intimate conversations for established connections</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Shared Experiences</h4>
                <p className="text-white/80 text-sm">Virtual activities to enjoy together and build memories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}