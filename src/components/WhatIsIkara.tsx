export default function WhatIsIkara() {
  return (
      <section id="about" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title gradient-text animate-fade-in">
            Not an escape — a return.
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <p className="text-xl md:text-2xl text-center animate-fade-in [animation-delay:0.2s]">
              Ikara is a week-long, immersive experience for remote workers, founders, creatives,
              and seekers to reconnect with themselves, their work, and the world — all from a
              serene hilltop in Arunachal Pradesh.
            </p>

            <div className="grid md:grid-cols-3 gap-8 animate-fade-in [animation-delay:0.4s]">
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg font-medium text-center">
                  This isn't about isolation. It's about intention.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg font-medium text-center">
                  This isn't about stopping. It's about shifting gears.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg font-medium text-center">
                  This isn't just a getaway. It's a glimpse of how life could be.
                </p>
              </div>
            </div>

            <blockquote
                className="text-xl md:text-2xl font-medium text-center mt-12 animate-fade-in [animation-delay:0.6s] italic">
              "We believe the future belongs to those who can be both still and in motion."
            </blockquote>
          </div>
        </div>
      </section>
  )
}
