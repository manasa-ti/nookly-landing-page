import { track } from "@/lib/analytics";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-nookly-accent mb-3">
          Plans
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Choose how you connect
        </h2>
        <p className="text-lg text-nookly-mid mb-10 max-w-lg mx-auto">
          Start free. Upgrade when you want more privacy, games, and conversation starters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            className="bg-nookly-gradient shadow-nookly-accent text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02]"
            onClick={() => {
              track("cta_click", {
                cta_id: "pricing_start_free",
                cta_text: "Start Free",
                section_id: "pricing",
                href: "#download",
              });
            }}
          >
            Start Free
          </a>
          <a
            href="pricing.html"
            className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-nookly-stroke transition-colors"
            onClick={() => {
              track("cta_click", {
                cta_id: "pricing_see_plans",
                cta_text: "See Plans",
                section_id: "pricing",
                href: "pricing.html",
              });
            }}
          >
            See Plans
          </a>
        </div>
      </div>
    </section>
  );
}
