export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
            How Nookly Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your complete dating journey from first match to lasting connection—Nookly guides you through every step.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-nookly-blue mb-4">Create Your Profile</h3>
            <p className="text-gray-600">
              Set up with your interests, dating goals, and what you're looking for. Add a photo if you want, or keep it text-based—your choice.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-nookly-blue mb-4">Smart Matching</h3>
            <p className="text-gray-600">
              Our AI analyzes compatibility based on interests, location, dating objectives, and personality to recommend great matches.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-nookly-blue mb-4">Break the Ice Naturally</h3>
            <p className="text-gray-600">
              Start conversations with AI-suggested topics or challenge your match to games. No more "hey" messages.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold text-nookly-blue mb-4">Get AI Guidance</h3>
            <p className="text-gray-600">
              Stuck on what to say? Need date ideas? From first date nerves to relationship advice, your AI companion is there throughout your dating journey.
            </p>
          </div>
          
          {/* Step 5 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">5</span>
            </div>
            <h3 className="text-xl font-bold text-nookly-blue mb-4">Connect Beyond Chat</h3>
            <p className="text-gray-600">
              Enjoy virtual music dates, plan in-person meetups with AI recommendations, and build real connections.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
