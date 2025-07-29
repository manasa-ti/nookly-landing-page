import { Gamepad2, HeartCrack, ArrowRight } from "lucide-react";

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
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-blue mb-4">Interactive Fantasy Games</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Explore compatibility through engaging fantasy role-playing games that reveal personality traits and preferences in a fun, pressure-free environment.
            </p>
            <div className="flex items-center space-x-2 text-purple-600">
              <span className="text-sm font-medium">Beta testing starts Q2 2025</span>
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
