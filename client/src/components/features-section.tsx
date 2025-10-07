import { Bot, Gamepad2, Shield, MessageSquare, Calendar, TrendingUp, Brain, HeartCrack, GamepadIcon, Lock, Eye, Users } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-nookly-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
            Why Choose Nookly?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just matching. Nookly is your complete dating companion with AI guidance, interactive engagement, and advanced safety features.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Feature 1: AI Dating Coach */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">🤖 Your Personal Dating Coach</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Meet your AI Dating Assistant—available 24/7 to help you navigate every dating moment. Get conversation suggestions, date ideas, relationship advice, and emotional support after tough experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Context-aware conversation starters</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Personalized date recommendations</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Relationship guidance and insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <HeartCrack className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Breakup support (Coming Q3 2025)</span>
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
              Dating should be fun and engaging. Challenge matches to interactive games, enjoy virtual music dates together, and build connections through shared experiences—all before your first in-person meet.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <GamepadIcon className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">4 icebreaker games (Truth or Thrill, Memory Sparks, etc.)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Virtual shared experiences (Coming Soon)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">AI-suggested activities based on interests</span>
              </div>
            </div>
          </div>
          
          {/* Feature 3: Safe & Private by Design */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">🔒 Safe & Private by Design</h3>
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
        </div>
      </div>
    </section>
  );
}
