import { Globe2, Play } from "lucide-react";
import appScreenshot from "@assets/app-discover-screenshot.png";

export default function HeroSection() {
  return (
    <section
      className="pt-28 pb-20 text-white overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 0%, rgba(124,58,237,0.14) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(139,92,246,0.10) 0%, transparent 50%), #06030c",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-nookly-logo tracking-tight leading-none">
                nookly
              </h1>
              <p className="text-sm text-nookly-lo font-medium tracking-wide mt-2">
                No more lonely
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-xl lg:text-2xl text-nookly-mid leading-relaxed">
                No more scrolling alone! Find your companion for late-night talks, fun
                experiences, and lasting connections.
              </p>
              <p className="text-lg text-nookly-mid leading-relaxed">
                Experience genuine connection without the pressure. Chat, play games, and
                share moments with like-minded companions in a safe, judgment-free space.
                Your identity, your choice.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://app.nookly.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-nookly-gradient shadow-nookly-accent text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Globe2 className="w-5 h-5" />
                <span>Open Web App</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.nookly.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#181126] hover:bg-[#221638] text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all border border-nookly-stroke flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                <span>Get on Play Store</span>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-[520px] rounded-[32px] opacity-50 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)" }}
              aria-hidden
            />
            <img
              src={appScreenshot}
              alt="nookly app — discover connections screen"
              className="relative w-[min(100%,280px)] sm:w-[300px] h-auto rounded-[28px] border-[6px] border-[rgba(116,119,117,0.5)] shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
