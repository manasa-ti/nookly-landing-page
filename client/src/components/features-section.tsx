import { Bot, Gamepad2, Shield, MessageSquare, Calendar, TrendingUp, Brain, HeartCrack, GamepadIcon, Lock, Eye, Users } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-nookly-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
            Why Choose nookly?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engagement Over Everything: Unlike typical dating apps focused on quick matches, nookly encourages you to truly know someone through conversations and shared experiences. Quality connections, not quantity.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
         {/* Feature 1: Safe & Private by Design */}
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">🔒 Your Privacy, Your Power</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Date with confidence using end-to-end encryption, advanced scam detection, and privacy controls that let you share what you want, when you want.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">7-type scam detection (romance fraud, catfishing, etc.)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Lock className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">End-to-end encrypted messaging</span>
              </div>
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Optional profile photos—your choice</span>
              </div>
            </div>
          </div>
        
            
          {/* Feature 2: Beyond Swiping & Texting */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">🎮 Beyond Swiping & Texting</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dating should be fun and engaging. Deepen connections through interactive games designed to reveal personalities, not just profiles.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <GamepadIcon className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">4 icebreaker games (Truth or Thrill, Memory Sparks, etc.)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Intimacy building games</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Virtual shared experiences (Coming Soon)</span>
              </div>
            </div>
          </div>
          
          {/* Feature 3: AI Dating Coach */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">💬 Break the Ice with AI-Powered Starters
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
            Struggling to start conversations? Our intelligent conversation starters help you connect naturally based on shared interests and preferences. Never face an awkward silence again.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Start with light, engaging conversations</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Build deeper, more meaningful connections</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Context aware conversation starters</span>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
