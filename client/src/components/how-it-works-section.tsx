export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
            How Nookly Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to find your perfect anonymous companion and never be lonely again.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-nookly-blue mb-4">Create Anonymous Profile</h3>
            <p className="text-gray-600">
              Set up your profile with personality details, interests, and what you're looking for – all while staying completely anonymous.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-nookly-blue mb-4">AI-Powered Matching</h3>
            <p className="text-gray-600">
              Our AI analyzes compatibility based on personality, interests, and conversation style to find your perfect matches.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-nookly-blue mb-4">Connect & Chat</h3>
            <p className="text-gray-600">
              Start meaningful conversations with AI-suggested topics, play interactive games, and build genuine connections.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold text-nookly-blue mb-4">Reveal When Ready</h3>
            <p className="text-gray-600">
              Once you've built trust and connection, choose to reveal your identity and take the relationship to the next level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
