export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nookly-blue">500K+</div>
            <div className="text-gray-600">Anonymous Connections</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nookly-blue">95%</div>
            <div className="text-gray-600">Privacy Protected</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nookly-blue">10x</div>
            <div className="text-gray-600">Faster Connections</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nookly-blue">24/7</div>
            <div className="text-gray-600">AI Assistant</div>
          </div>
        </div>
      </div>
    </section>
  );
}
