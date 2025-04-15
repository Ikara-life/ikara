import {Card, CardHeader, CardContent} from "@/components/ui/card"

export default function WhatIsIkara() {
  return (
      <section id="about" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-gray-900 animate-fade-in">
            Not an escape — a return.
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <p className="text-xl md:text-2xl text-center animate-fade-in [animation-delay:0.2s] text-gray-900">
              Ikara is a week-long, immersive experience for remote workers, founders, creatives,
              and seekers to reconnect with themselves, their work, and the world — all from a
              serene hilltop in Arunachal Pradesh.
            </p>

            <div className="grid md:grid-cols-3 gap-8 animate-fade-in [animation-delay:0.4s]">
              <Card className="border-gray-200 hover:border-gray-300 transition-colors">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-center text-gray-900">
                    This isn't about isolation. It's about intention.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 hover:border-gray-300 transition-colors">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-center text-gray-900">
                    This isn't about stopping. It's about shifting gears.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 hover:border-gray-300 transition-colors">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-center text-gray-900">
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
