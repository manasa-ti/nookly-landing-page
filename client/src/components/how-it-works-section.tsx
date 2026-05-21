export default function HowItWorksSection() {
  const steps = [
    {
      num: "1",
      title: "Create anonymously",
      desc: "Share your interests and what you're looking for. No photos, no real names — you stay in control.",
    },
    {
      num: "2",
      title: "Discover nearby",
      desc: "Browse profiles of people in your area who share your interests and want genuine connection.",
    },
    {
      num: "3",
      title: "Break the ice",
      desc: 'Use AI-powered starters or jump straight into games like Truth or Thrill. No awkward "hey".',
    },
    {
      num: "4",
      title: "Connect & engage",
      desc: "Build something real through conversations and shared moments. Day or night, your pace.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#06030c] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            How nookly works
          </h2>
          <p className="text-lg text-nookly-mid max-w-3xl mx-auto">
            Simple, private, judgment-free. No 50-question personality test. No selfie review
            board.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-20 h-20 bg-nookly-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-nookly-accent">
                <span className="text-white text-2xl font-bold">{step.num}</span>
              </div>
              <h3 className="text-lg font-bold text-nookly-vio mb-3">{step.title}</h3>
              <p className="text-sm text-nookly-mid leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-nookly-mid italic">
          No pressure. No judgment. Just real human connection.
        </p>
      </div>
    </section>
  );
}
