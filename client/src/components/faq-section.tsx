import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does anonymity work on Nookly?",
      answer: "Your real identity is completely hidden until you choose to reveal it. You can create a unique anonymous persona, use generated usernames, and chat freely without sharing personal details like your real name, photos, or location until you're comfortable."
    },
    {
      question: "Is my data safe and private?",
      answer: "Absolutely. We use end-to-end encryption for all conversations, don't store personal information unnecessarily, and give you complete control over what you share and when. Your privacy is our top priority."
    },
    {
      question: "How does the AI Dating Assistant work?",
      answer: "Our AI analyzes your conversations, interests, and personality to provide personalized suggestions for conversation topics, date ideas, and relationship advice. It learns your preferences to offer increasingly relevant guidance."
    },
    {
      question: "What types of connections can I find?",
      answer: "Nookly supports all types of connections - from casual friendships and deep emotional companionship to serious romantic relationships. You define what you're looking for, and our matching algorithm finds compatible people with similar goals."
    },
    {
      question: "How is Nookly different from other dating apps?",
      answer: "Unlike appearance-focused apps, Nookly prioritizes personality and genuine connection through anonymity. Our AI assistant provides active dating support, and our interactive games help reveal compatibility in fun ways that traditional apps can't match."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nookly-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about anonymous dating with Nookly
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-nookly-subtle rounded-2xl p-6">
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl font-bold text-nookly-blue">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-nookly-blue flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-nookly-blue flex-shrink-0 ml-4" />
                )}
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-3">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
