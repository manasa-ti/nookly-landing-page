import {
  IllBrowse,
  IllAnonymous,
  IllGames,
  IllLocked,
} from "@/components/onboarding-illustrations";
import {
  Bot,
  Brain,
  Calendar,
  Gamepad2,
  GamepadIcon,
  Lock,
  MessageSquare,
  Shield,
  Users,
} from "lucide-react";

const onboardingFeatures = [
  {
    Illustration: IllBrowse,
    title: "No algorithms. Just real people.",
    subtitle:
      "Browse freely, read their story, reach out when something speaks to you.",
  },
  {
    Illustration: IllAnonymous,
    title: "Anonymous until you choose.",
    subtitle: "No photos required. Reveal only what feels right, when it feels right.",
  },
  {
    Illustration: IllGames,
    title: "Break the ice with games.",
    subtitle:
      "Truth or Thrill, Would You Rather, and more — small talk into real talk.",
  },
  {
    Illustration: IllLocked,
    title: "Locked, private, yours.",
    subtitle: "PIN-lock the app. Encrypted chats. Anonymous profiles.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[#0a0612]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-nookly-accent mb-3">
            Why nookly
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Quality connections, not quantity
          </h2>
          <p className="text-lg text-nookly-mid max-w-3xl mx-auto">
            Most dating apps optimise for swipes. nookly is built around the slower truth —
            that real connection comes from conversation, shared moments, and the freedom to be
            yourself anonymously.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {onboardingFeatures.map(({ Illustration, title, subtitle }) => (
            <article
              key={title}
              className="bg-nookly-surface border border-nookly-stroke rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center"
            >
              <div className="mb-4 flex items-center justify-center min-h-[200px]">
                <Illustration className="max-w-full h-auto" />
              </div>
              <h3 className="text-xl font-bold text-nookly-vio mb-2 text-balance">{title}</h3>
              <p className="text-sm text-nookly-mid leading-relaxed max-w-sm text-balance">{subtitle}</p>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-nookly-surface border border-nookly-stroke rounded-3xl p-8">
            <div className="w-14 h-14 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6 shadow-nookly-accent">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-vio mb-4">Your privacy, your power</h3>
            <p className="text-nookly-mid leading-relaxed mb-6 text-sm">
              End-to-end encryption, 7-type scam detection, and zero photo requirements. You
              control exactly what you share and when.
            </p>
            <ul className="space-y-3 text-sm text-nookly-mid">
              <li className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-nookly-accent shrink-0" />
                7-type scam detection (romance fraud, catfishing, etc.)
              </li>
              <li className="flex items-center gap-3">
                <Lock className="w-4 h-4 text-nookly-accent shrink-0" />
                End-to-end encrypted messaging
              </li>
              <li className="flex items-center gap-3">
                <Lock className="w-4 h-4 text-nookly-accent shrink-0" />
                PIN-based app lock — only you can open nookly
              </li>
            </ul>
          </div>

          <div className="bg-nookly-surface border border-nookly-stroke rounded-3xl p-8">
            <div className="w-14 h-14 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6 shadow-nookly-accent">
              <Gamepad2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-vio mb-4">Beyond swiping & texting</h3>
            <p className="text-nookly-mid leading-relaxed mb-6 text-sm">
              Four icebreaker games reveal personality where profiles can&apos;t. Dating with
              actual play in it.
            </p>
            <ul className="space-y-3 text-sm text-nookly-mid">
              <li className="flex items-center gap-3">
                <GamepadIcon className="w-4 h-4 text-nookly-accent shrink-0" />
                Truth or Thrill, Memory Sparks, Would You Rather, Guess Me
              </li>
              <li className="flex items-center gap-3">
                <Users className="w-4 h-4 text-nookly-accent shrink-0" />
                Heat Up for established connections
              </li>
              <li className="flex items-center gap-3">
                <Brain className="w-4 h-4 text-nookly-accent shrink-0" />
                Virtual shared experiences (coming soon)
              </li>
            </ul>
          </div>

          <div className="bg-nookly-surface border border-nookly-stroke rounded-3xl p-8">
            <div className="w-14 h-14 bg-nookly-gradient rounded-2xl flex items-center justify-center mb-6 shadow-nookly-accent">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-nookly-vio mb-4">AI-powered starters</h3>
            <p className="text-nookly-mid leading-relaxed mb-6 text-sm">
              Starters based on shared interests — never face an awkward &quot;hey&quot; silence
              again. Start with something that actually lands.
            </p>
            <ul className="space-y-3 text-sm text-nookly-mid">
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-nookly-accent shrink-0" />
                Light, engaging openers
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-nookly-accent shrink-0" />
                Build deeper, meaningful connections
              </li>
              <li className="flex items-center gap-3">
                <Brain className="w-4 h-4 text-nookly-accent shrink-0" />
                Context-aware conversation starters
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
