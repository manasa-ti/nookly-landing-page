import { Heart, Calendar, Gamepad2, Brain, Shield, Users } from "lucide-react";

export default function CompleteDatingExperienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
            Complete Dating Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nookly Does More Than Matching
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Before the First Date */}
          <div className="bg-nookly-subtle rounded-3xl p-8">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">Before the First Date</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>Interactive games to get to know each other</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>AI conversation helpers for natural flow</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>Virtual shared experiences to test compatibility</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>Smart date planning based on both profiles</span>
              </li>
            </ul>
          </div>
          
          {/* During Your Dating Journey */}
          <div className="bg-nookly-subtle rounded-3xl p-8">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">During Your Dating Journey</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>Real-time guidance and conversation tips</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>Date idea suggestions tailored to you both</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>Relationship insights and compatibility feedback</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>Safe, encrypted communication</span>
              </li>
            </ul>
          </div>
          
          {/* Building Deeper Connection */}
          <div className="bg-nookly-subtle rounded-3xl p-8">
            <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">Building Deeper Connection</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>Progress from casual chat to intimate conversation naturally</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>Consent-based intimacy games for couples (Spice It Up - Coming Soon)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>Both partners control comfort levels</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-nookly-coral rounded-full mt-2 flex-shrink-0"></div>
                <span>Safe space for exploring connection</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* When Things Get Hard */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-nookly-blue to-nookly-coral rounded-3xl p-8 text-white">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">When Things Get Hard</h3>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">Breakup healing support (Coming Q3 2025)</h4>
                <p className="text-white/80 text-sm">Personalized emotional support and healing activities</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dating pattern analysis (Coming Q2 2025)</h4>
                <p className="text-white/80 text-sm">Professional guidance recommendations to improve future matches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
