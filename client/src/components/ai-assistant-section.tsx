import { Bot, Calendar, Lightbulb, Heart, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIAssistantSection() {
  return (
    <section className="py-20 bg-nookly-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet Your AI Dating Assistant
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get personalized help with conversations, date planning, and relationship guidance.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-nookly-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white mb-2">
                    <strong>AI Assistant:</strong> I notice you both love photography! Here's a great conversation starter:
                  </p>
                  <div className="bg-white/10 rounded-lg p-3 text-blue-100">
                    "What's the most memorable photo you've ever taken?"
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-nookly-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white mb-2">
                    <strong>Date Planner:</strong> Based on your shared interests, here are perfect date ideas:
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded-lg p-2 text-sm text-blue-100">📸 Photography walk in the park</div>
                    <div className="bg-white/10 rounded-lg p-2 text-sm text-blue-100">☕ Coffee at a cozy bookstore</div>
                    <div className="bg-white/10 rounded-lg p-2 text-sm text-blue-100">🎨 Visit a local art gallery</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">AI Features Include:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-5 h-5 text-nookly-coral" />
                  <span>Conversation Helper</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-nookly-coral" />
                  <span>Date Planner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-nookly-coral" />
                  <span>Dating Coach Assistant</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Try AI Assistant</h3>
            {/* Interactive Demo */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 text-nookly-blue">
                <p className="font-medium mb-2">You:</p>
                <p>"I'm nervous about our first date..."</p>
              </div>
              <div className="bg-nookly-coral rounded-xl p-4 text-white">
                <p className="font-medium mb-2">AI Assistant:</p>
                <p>"That's completely normal! Based on your personalities and shared interests, I suggest starting with a casual coffee meetup. Here are some topics you both enjoy discussing..."</p>
              </div>
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                Ask AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
