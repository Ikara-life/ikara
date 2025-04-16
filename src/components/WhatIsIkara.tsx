import {Card, CardContent} from "@/components/ui/card"
import {Zap, Settings2, Sparkles} from "lucide-react"

export default function WhatIsIkara() {
  return (
      <section id="about" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-fade-in">
              Discover Ikara
            </h2>
            <p className="text-lg md:text-xl mt-4 text-gray-600 animate-fade-in [animation-delay:0.1s]">
              Not an escape — a return to purpose, peace, and presence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <p className="text-xl md:text-2xl text-center animate-fade-in [animation-delay:0.2s] text-gray-900">
              Ikara is a week-long, immersive experience for remote workers, founders, creatives,
              and seekers to reconnect with themselves, their work, and the world — all from a
              serene hilltop in Arunachal Pradesh.
            </p>

            <div className="grid md:grid-cols-3 gap-8 animate-fade-in [animation-delay:0.4s]">
              <Card
                  className="bg-white border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                <CardContent className="p-6 text-center flex flex-col items-center space-y-4">
                  <Zap className="text-indigo-600 w-8 h-8"/>
                  <p className="text-lg font-medium text-gray-900">
                    This isn't about isolation. It's about intention.
                  </p>
                </CardContent>
              </Card>

              <Card
                  className="bg-white border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                <CardContent className="p-6 text-center flex flex-col items-center space-y-4">
                  <Settings2 className="text-indigo-600 w-8 h-8"/>
                  <p className="text-lg font-medium text-gray-900">
                    This isn't about stopping. It's about shifting gears.
                  </p>
                </CardContent>
              </Card>

              <Card
                  className="bg-white border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                <CardContent className="p-6 text-center flex flex-col items-center space-y-4">
                  <Sparkles className="text-indigo-600 w-8 h-8"/>
                  <p className="text-lg font-medium text-gray-900">
                    This isn't just a getaway. It's a glimpse of how life could be.
                  </p>
                </CardContent>
              </Card>
            </div>

            <blockquote
                className="text-xl md:text-2xl font-medium text-center mt-12 animate-fade-in [animation-delay:0.6s] italic text-gray-900">
              "We believe the future belongs to those who can be both still and in motion."
            </blockquote>
          </div>
        </div>
      </section>
  )
}
