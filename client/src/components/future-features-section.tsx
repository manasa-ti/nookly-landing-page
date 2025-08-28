import { Gamepad2, HeartCrack, ArrowRight, Brain } from "lucide-react";

export default function FutureFeaturesSection() {
  return (
    <section className="py-20 bg-nookly-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're constantly innovating to make Nookly the most comprehensive dating assistant platform.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">Dating Feedback & Insights</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Gain valuable insights into your dating patterns with AI-powered analysis of message exchanges and partner feedback, helping you understand why connections end and improve your relationship skills.
            </p>
            <div className="flex items-center space-x-2 text-blue-600">
              <span className="text-sm font-medium">Coming Q2 2025</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <HeartCrack className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">Breakup Healer Assistant</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Get personalized support and guidance during difficult times, with AI-powered emotional support and healing activities to help you bounce back stronger.
            </p>
            <div className="flex items-center space-x-2 text-green-600">
              <span className="text-sm font-medium">Coming Q3 2025</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
