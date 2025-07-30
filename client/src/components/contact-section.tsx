import ContactFormStatic from "@/components/contact-form-static";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-nookly-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about Nookly? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-nookly-gradient rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-nookly-blue mb-2">Email Us</h3>
                  <p className="text-gray-600">Drop us a line anytime</p>
                  <a href="mailto:contact@nookly.com" className="text-nookly-coral hover:underline">
                    contact@nookly.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-nookly-gradient rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-nookly-blue mb-2">Call Us</h3>
                  <p className="text-gray-600">Mon-Fri from 8am to 5pm</p>
                  <a href="tel:+1234567890" className="text-nookly-coral hover:underline">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-nookly-gradient rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-nookly-blue mb-2">Visit Us</h3>
                  <p className="text-gray-600">Come say hello at our office</p>
                  <p className="text-nookly-blue">
                    123 Dating Street<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <ContactFormStatic />
        </div>
      </div>
    </section>
  );
}