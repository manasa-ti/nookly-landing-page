import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the AI Dating Assistant?",
      answer: "Your personal dating companion that helps throughout your journey. It analyzes your conversations to suggest topics, recommends date ideas based on shared interests, provides relationship guidance, and offers support during difficult times. Think of it as having a dating coach in your pocket 24/7."
    },
    {
      question: "What are the interactive games?",
      answer: "We offer four icebreaker games—Truth or Thrill, Memory Sparks, Would You Rather, and Guess Me—designed to help you learn about matches in a fun, low-pressure way. Games are real-time multiplayer and beat the usual \"how was your day?\" conversations."
    },
    {
      question: "How does the AI Date Planner work?",
      answer: "Our AI analyzes both your profiles, conversation history, shared interests, and location to suggest perfect date ideas. If you both love photography, it might suggest a scenic photo walk. If you're both foodies, it'll find highly-rated restaurants you'll both enjoy. (Coming Q2 2025)"
    },
    {
      question: "Is this just another swiping app?",
      answer: "No. Nookly is a complete dating experience platform. We handle everything from matching to conversation help to date planning to breakup support. It's an end-to-end companion for your entire dating journey."
    },
    {
      question: "How private is my information?",
      answer: "You control what you share. Use a custom username, make photos optional, and share personal details only when comfortable. All messages are end-to-end encrypted, and we have advanced scam detection to keep you safe."
    },
    {
      question: "What are virtual shared experiences?",
      answer: "Features that let you connect with matches before meeting in person—like listening to music together, watching content simultaneously, or playing activities within the app. Coming soon!"
    },
    {
      question: "Is Nookly only for finding matches?",
      answer: "No. Nookly supports your entire dating journey—from first match through building lasting relationships. We offer icebreaker games for new connections AND intimacy-building features like \"Spice It Up\" for established couples who want to deepen their connection in a safe, consensual way."
    },
    {
      question: "What is Spice It Up?",
      answer: "A progressive game designed for couples who want to explore intimacy through guided conversation. It starts light and playful, with both partners controlling if and when to progress to more intimate stages. Every round includes skip options and consent checks—it's about building connection at your comfort level."
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
            Everything you need to know about your complete dating companion
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
