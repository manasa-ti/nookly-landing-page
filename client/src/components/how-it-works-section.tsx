export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            How nookly Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey to meaningful companionship starts here—simple, private, and judgment-free.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Create Your Anonymous Profile</h3>
            <p className="text-gray-600">
              Share your interests and what you're looking for. No photos required, no real names needed—stay completely private and in control.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Discover Companions Nearby</h3>
            <p className="text-gray-600">
              Browse profiles of like-minded people in your area who share your interests and are also seeking genuine connection.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Break the Ice Naturally</h3>
            <p className="text-gray-600">
              Use AI-powered conversation starters or dive into interactive games like Truth or Thrill and Would You Rather. No awkward "hey" messages.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Connect and Engage</h3>
            <p className="text-gray-600">
              Build meaningful connections through genuine conversations and shared experiences. Chat when you need someone—day or night.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 italic">
            No pressure. No judgment. Just real human connection.
          </p>
        </div>
      </div>
    </section>
  );
}