import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      initial: "S",
      subtitle: "Found her soulmate",
      content: "The anonymity allowed me to be completely myself without fear of judgment. I connected with someone who truly understood me before we even exchanged photos."
    },
    {
      name: "Michael R.",
      initial: "M", 
      subtitle: "Six months together",
      content: "The AI dating assistant was incredible! It helped me start conversations I never would have thought of and planned the perfect first date."
    },
    {
      name: "Emma T.",
      initial: "E",
      subtitle: "Found best friend", 
      content: "I wasn't looking for romance, just companionship. Nookly helped me find my best friend who I talk to every day. I'm never lonely anymore!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
            Real Stories, Real Connections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Nookly has helped thousands find meaningful companionship and never be lonely again.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-nookly-subtle rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-nookly-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.initial}</span>
                </div>
                <div>
                  <h4 className="font-bold text-nookly-blue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex text-nookly-coral">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
