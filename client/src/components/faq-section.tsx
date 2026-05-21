import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is nookly?",
      answer:
        "Anonymous companionship for adults 30–50. Browse real profiles, chat, and play in-chat games — no photos required.",
    },
    {
      question: "How is it different from dating apps?",
      answer:
        "No swiping pressure, no algorithm match scores. You read stories, reach out when it feels right, and stay anonymous until you choose.",
    },
    {
      question: "Do I need a photo or real name?",
      answer: "No. You control what you share and when.",
    },
    {
      question: "What are the games?",
      answer:
        "Icebreakers include Truth or Thrill, Memory Sparks, Would You Rather, and Guess Me. For established matches, Heat Up offers progressive, consent-based intimacy prompts with a heat meter — already in the app.",
    },
    {
      question: "Is it private?",
      answer:
        "PIN-lock the app, encrypted chats, and optional anonymity. Your space stays yours.",
    },
    {
      question: "Is it free?",
      answer:
        "Yes to start. Paid plans add more starters, games, filters, and app lock. See pricing for details.",
    },
  ];

  return (
    <section className="py-20 bg-nookly-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
            FAQ
          </h2>
          <p className="text-nookly-mid">Quick answers about nookly</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-nookly-surface border border-nookly-stroke rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between text-left px-6 py-5"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-base font-bold text-nookly-vio pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-nookly-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-nookly-accent flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <p className="text-nookly-mid text-sm leading-relaxed px-6 pb-5 -mt-1">
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
