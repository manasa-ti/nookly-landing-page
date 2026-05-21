import { Globe2, Play, Shield, Heart } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-nookly-gradient text-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
          Stop scrolling.{" "}
          <span className="text-nookly-logo">Start connecting.</span>
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-lg mx-auto">
          Join nookly today — anonymous by design, judgment-free by promise, and just enough
          play to make it actually feel good.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href="https://app.nookly.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#06030c] hover:bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-all hover:scale-[1.02] w-full sm:w-auto justify-center"
          >
            <Globe2 className="w-8 h-8" />
            <div className="text-left">
              <div className="text-sm text-white/60">Open now</div>
              <div className="text-lg font-bold">Web App</div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.nookly.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#06030c] hover:bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-all hover:scale-[1.02] w-full sm:w-auto justify-center"
          >
            <Play className="w-8 h-8" />
            <div className="text-left">
              <div className="text-sm text-white/60">Download</div>
              <div className="text-lg font-bold">Android</div>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/75">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-white" />
            Anonymous by design
          </span>
          <span className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-white" />
            Free to start
          </span>
        </div>
      </div>
    </section>
  );
}
