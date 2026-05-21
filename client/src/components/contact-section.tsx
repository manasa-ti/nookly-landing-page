import ContactFormStatic from "@/components/contact-form-static";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Get in touch
          </h2>
          <p className="text-nookly-mid max-w-lg mx-auto">
            Questions or feedback? We read every message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-nookly-gradient rounded-2xl flex items-center justify-center flex-shrink-0 shadow-nookly-accent">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-nookly-vio mb-1">Email</h3>
              <a
                href="mailto:app.nookly@gmail.com"
                className="text-nookly-accent hover:text-white transition-colors"
              >
                app.nookly@gmail.com
              </a>
            </div>
          </div>

          <ContactFormStatic />
        </div>
      </div>
    </section>
  );
}
