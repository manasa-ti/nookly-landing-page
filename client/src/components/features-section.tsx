import { VenetianMask, Heart, Bot, Shield, EyeOff, UserX, MessageCircle, Brain, Puzzle, Wand2, Calendar, TrendingUp } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-nookly-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
            Why Choose Nookly?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience dating differently with our three core pillars that make meaningful connections inevitable.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Feature 1: Anonymity */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <VenetianMask className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">Unmatched Anonymity</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Connect authentically without revealing your identity until you're ready. No judgment, no pressure – just genuine conversation and connection based on who you really are.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Complete privacy protection</span>
              </div>
              <div className="flex items-center space-x-3">
                <EyeOff className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Anonymous profile system</span>
              </div>
              <div className="flex items-center space-x-3">
                <UserX className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Reveal when you're comfortable</span>
              </div>
            </div>
          </div>
          
          {/* Feature 2: Engagement Driven */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Puzzle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">Engagement Driven</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Go beyond simple messaging with interactive activities designed to help couples discover each other deeply. From virtual games to shared experiences, every interaction builds meaningful connections.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Interactive games & challenges</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Shared experience builder</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Engagement analytics</span>
              </div>
            </div>
          </div>
          
          {/* Feature 3: AI Assistant */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">AI Dating Assistant</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our AI helps you find partners 10x faster, suggests engaging conversation topics, plans perfect dates, and provides relationship guidance every step of the way.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Wand2 className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Smart conversation helpers</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Intelligent date planning</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-nookly-coral" />
                <span className="text-sm text-gray-600">Relationship insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
