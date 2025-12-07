import { Gamepad2, HeartCrack, ArrowRight, Brain, Music, Calendar, BarChart3, Heart } from "lucide-react";

export default function FutureFeaturesSection() {
  return (
    <section className="py-20 bg-nookly-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
            The Future of Nookly
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're constantly innovating to make your dating experience better. Here's what's coming:
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">Spice It Up - Intimacy Game (Q1 2026)</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              For couples ready to deepen their connection: Progressive prompts from flirty to intimate, turn-based gameplay with mutual consent, heat meter tracks your journey together, skip prompts anytime without judgment.
            </p>
            <div className="flex items-center space-x-2 text-pink-600">
              <span className="text-sm font-medium">Coming Q1 2025</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <Music className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">Virtual Shared Experiences (Q1 2026)</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Music listening parties, book reading sessions, shared games and activities, real-time reactions and chat to connect before meeting in person.
            </p>
            <div className="flex items-center space-x-2 text-blue-600">
              <span className="text-sm font-medium">Coming Q2 2025</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          
          {/* <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">AI Date Planner (Q2 2025)</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Get personalized date suggestions based on your shared interests, location and weather, budget preferences, and conversation topics you've discussed.
            </p>
            <div className="flex items-center space-x-2 text-green-600">
              <span className="text-sm font-medium">Coming Q2 2025</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div> */}
          
          {/* <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">Dating Feedback & Insights (Q2 2025)</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Why connections succeed or fail, your dating pattern analysis, conversation improvement tips, and compatibility predictions to continuously improve your dating success.
            </p>
            <div className="flex items-center space-x-2 text-orange-600">
              <span className="text-sm font-medium">Coming Q2 2025</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
           */}
          {/* <div className="bg-white rounded-3xl p-8 shadow-lg lg:col-span-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <HeartCrack className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">Breakup Healer Assistant (Q3 2025)</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Emotional support during tough times, healing activity recommendations, professional resource suggestions, and progress tracking with encouragement to help you bounce back stronger.
            </p>
            <div className="flex items-center space-x-2 text-purple-600">
              <span className="text-sm font-medium">Coming Q3 2025</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

