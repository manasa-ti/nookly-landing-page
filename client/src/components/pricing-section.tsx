export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
          Choose how you connect
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          Start free and upgrade anytime to unlock smarter conversations, deeper connections, and more ways to break the ice.
        </p>
        <p className="text-gray-500 font-medium mb-10">
          No commitment. Cancel anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#download" className="bg-nookly-coral hover:bg-nookly-coral/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            Start Free
          </a>
          <a href="pricing.html" className="bg-nookly-blue hover:bg-nookly-blue/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            See Plans
          </a>
        </div>
      </div>
    </section>
  );
}
