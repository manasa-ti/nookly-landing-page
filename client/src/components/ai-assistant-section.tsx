import { Bot, Calendar, Lightbulb, Heart, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIAssistantSection() {
  return (
    <section className="py-20 bg-nookly-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Interactive Games for Every Stage
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Skip awkward small talk. Play interactive games with your matches. Learn about each other while having fun. From breaking the ice to building intimacy, our games help you connect at every level.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-nookly-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white mb-2">
                    <strong>Truth or Thrill</strong> - Reveal secrets or take on dares
                  </p>
                  <div className="bg-white/10 rounded-lg p-3 text-blue-100">
                    "What's a habit you wish you could break?" (Truth)
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-nookly-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white mb-2">
                    <strong>Memory Sparks</strong> - Prompt card → both partners share a memory/story
                  </p>
                  <div className="bg-white/10 rounded-lg p-3 text-blue-100">
                    "Funniest school memory?"
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-nookly-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white mb-2">
                    <strong>Would You Rather</strong> - Random WYR question for couples
                  </p>
                  <div className="bg-white/10 rounded-lg p-3 text-blue-100">
                    "Would you rather time-travel to the past or the future with your partner?"
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">All Icebreaker Games:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-nookly-coral" />
                  <span>Truth or Thrill</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-nookly-coral" />
                  <span>Memory Sparks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bot className="w-5 h-5 text-nookly-coral" />
                  <span>Would You Rather</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-nookly-coral" />
                  <span>Guess Me</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Intimacy Building (For Established Connections)</h3>
            {/* Interactive Demo */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 text-nookly-blue">
                <p className="font-medium mb-2">Spice It Up</p>
                <p className="text-sm">A progressive, consent-based game that builds from flirty to intimate through guided prompts. Both partners control the pace and can pause anytime.</p>
              </div>
              <div className="bg-nookly-coral rounded-xl p-4 text-white">
                <p className="font-medium mb-2">Coming Soon</p>
                <p className="text-sm">Turn-based gameplay with mutual consent, heat meter tracks your journey together, skip prompts anytime without judgment.</p>
              </div>
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                Coming Q1 2025
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
