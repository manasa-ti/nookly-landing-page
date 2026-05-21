import { Bot, Calendar, Flame, Heart, HelpCircle, MessageSquare } from "lucide-react";

const icebreakerGames = [
  {
    icon: MessageSquare,
    name: "Truth or Thrill",
    desc: "Reveal secrets or take on dares — the one that breaks the ice on day one",
    prompt:
      '"What\'s the most surprising thing you\'ve learned about yourself in the last year?" (Truth)',
  },
  {
    icon: Heart,
    name: "Memory Sparks",
    desc: "Prompt card → both partners share a memory or story",
    prompt: '"Funniest school memory?"',
  },
  {
    icon: Bot,
    name: "Would You Rather",
    desc: "Random WYR for couples",
    prompt: '"Time-travel to the past or the future with your partner?"',
  },
  {
    icon: HelpCircle,
    name: "Guess Me",
    desc: "Test how well you know each other",
    prompt: '"Which is my comfort movie — pick from these 3."',
  },
];

const icebreakerList = [
  { icon: MessageSquare, label: "Truth or Thrill" },
  { icon: Heart, label: "Memory Sparks" },
  { icon: Bot, label: "Would You Rather" },
  { icon: Calendar, label: "Guess Me" },
];

export default function AIAssistantSection() {
  return (
    <section id="games" className="py-20 bg-nookly-gradient text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-3">
            Interactive games
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Skip the small talk.{" "}
            <span className="text-nookly-logo">Play together.</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Four icebreaker games for every stage — from a brand-new match to an established
            connection. Learn about each other while actually having fun.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {icebreakerGames.map(({ icon: Icon, name, desc, prompt }) => (
              <div
                key={name}
                className="bg-[#181126]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-nookly-heart rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold mb-1">
                      <strong>{name}</strong>
                    </p>
                    <p className="text-white/60 text-sm mb-2">{desc}</p>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-white/75 text-sm italic">
                      {prompt}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <h3 className="text-lg font-bold mb-4 text-white/90">Icebreaker games</h3>
              <div className="grid grid-cols-2 gap-4">
                {icebreakerList.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-white/85 text-sm">
                    <Icon className="w-5 h-5 text-nookly-logo shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#181126]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:sticky lg:top-24">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-nookly-heart to-[#be123c] rounded-xl flex items-center justify-center shadow-lg shadow-rose-900/40">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-nookly-vio">Heat Up</h3>
                <span className="inline-block mt-1 text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-nookly-heart/25 text-rose-200 border border-nookly-heart/40">
                  In the app
                </span>
              </div>
            </div>

            <p className="text-sm text-nookly-mid text-center mb-6 leading-relaxed">
              For couples ready to deepen their connection. Progressive prompts from flirty to
              intimate — turn-based, consent-based, and paced by both of you.
            </p>

            <div className="space-y-4">
              <div className="bg-[#221638] border border-nookly-stroke rounded-xl p-4">
                <p className="text-xs font-bold tracking-wider uppercase text-nookly-accent mb-2">
                  How it works
                </p>
                <p className="text-sm text-nookly-mid leading-relaxed">
                  A guided intimacy game that builds at your pace. The heat meter tracks your
                  journey together — skip any prompt anytime, no judgment.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-xs font-bold tracking-wider uppercase text-white/50 mb-2">
                  Sample prompt
                </p>
                <p className="text-sm text-white/80 italic leading-relaxed">
                  "What's something you've been curious to try together, but haven't said out loud
                  yet?"
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li className="flex gap-2">
                <span className="text-nookly-accent">✓</span>
                Mutual consent at every step
              </li>
              <li className="flex gap-2">
                <span className="text-nookly-accent">✓</span>
                Pause or skip prompts anytime
              </li>
              <li className="flex gap-2">
                <span className="text-nookly-accent">✓</span>
                Built for established matches
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
