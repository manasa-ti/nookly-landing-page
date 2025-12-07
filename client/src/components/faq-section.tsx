import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Nookly?",
      answer: "Nookly is a companion app designed for adults who feel lonely, regardless of their relationship status. It's a safe, private space to find genuine connections through meaningful conversations and interactive games—without the pressure of dating or revealing your identity."
    },
    {
      question: "How is Nookly different from dating apps?",
      answer: "Unlike dating apps focused on romance and swiping, Nookly is about companionship and authentic human connection. You don't need photos, you can stay completely anonymous, and there's no pressure for commitment. Whether you're single, in a relationship, or just need someone to talk to—Nookly welcomes you."
    },
    {
      question: "What are the interactive games?",
      answer: "We offer four engaging games—Truth or Thrill, Memory Sparks, Would You Rather, and Guess Me—designed to help you connect with companions in a fun, meaningful way. These games break the ice naturally and help you learn about each other beyond surface-level chat."
    },
    {
      question: "Do I have to share my photo or real name?",
      answer: "Absolutely not. Privacy is at the core of Nookly. You can use a custom username, skip adding photos entirely, and share only what you're comfortable with. Your identity is yours to control—always."
    },
    {
      question: "How do AI conversation starters work?",
      answer: "When you match with someone, our AI suggests personalized conversation topics based on your shared interests and profiles. This helps break the ice naturally and ensures you never face awkward silences or boring 'hey' messages."
    },
    {
      question: "Is Nookly safe and private?",
      answer: "Yes. All your information remains private, and you control what you share and when. We've built Nookly to be a judgment-free, safe space where you can be yourself without fear of exposure or criticism."
    },
    {
      question: "Who is Nookly for?",
      answer: "Nookly is for anyone between 30-50 who experiences loneliness—professionals with busy lives, people in relationships seeking platonic connection, individuals who value privacy, or anyone tired of superficial interactions. If you need genuine companionship without complications, Nookly is for you."
    },
    {
      question: "What features are coming soon?",
      answer: "We're constantly improving Nookly based on user feedback. Upcoming features include Heat Up mode for deeper conversations, shared virtual experiences to enjoy together, and more interactive ways to build meaningful connections."
    },
    {
      question: "Is Nookly free?",
      answer: "Yes! Nookly is currently completely free to use with all features available. We're focused on building a strong community first and will introduce optional premium features in the future based on what our users want most."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about finding companionship on Nookly
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl font-bold text-blue-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-900 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-blue-900 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-4 leading-relaxed">
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