export default function StatsSection() {
  return (
    <section className="py-16 bg-white hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nookly-blue">4</div>
            <div className="text-gray-600">Icebreaker Games</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nookly-blue">7</div>
            <div className="text-gray-600">Scam Types Detected</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nookly-blue">100%</div>
            <div className="text-gray-600">End-to-End Encrypted</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nookly-blue">24/7</div>
            <div className="text-gray-600">AI Dating Coach</div>
          </div>
        </div>
      </div>
    </section>
  );
}
