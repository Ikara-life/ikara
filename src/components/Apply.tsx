import {Button} from "@/components/ui/button"

export default function Apply() {
  return (
      <section id="apply" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title gradient-text animate-fade-in">
            This isn't just a retreat. It's a return to what matters.
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <p className="text-xl md:text-2xl text-center animate-fade-in [animation-delay:0.2s]">
              Ikara is for those seeking more than a break. It's for those craving depth,
              connection, and a reset with intention. If that sounds like you — we'd love to hear
              from you.
            </p>

            <div className="grid md:grid-cols-2 gap-8 animate-fade-in [animation-delay:0.4s]">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-6">How It Works:</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span
                        className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">1</span>
                    <span className="text-lg">Submit a short application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                        className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">2</span>
                    <span className="text-lg">We'll reach out if it's a match</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                        className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">3</span>
                    <span className="text-lg">Confirm your week and get packing</span>
                  </li>
                </ol>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-6">What We Look For:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span
                        className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">✓</span>
                    <span className="text-lg">Purpose-driven explorers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                        className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">✓</span>
                    <span className="text-lg">Mindful creators and remote workers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                        className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">✓</span>
                    <span className="text-lg">Open hearts and intentional minds</span>
                  </li>
                </ul>
              </div>
            </div>

            <blockquote
                className="text-xl md:text-2xl font-medium text-center mt-12 animate-fade-in [animation-delay:0.6s] italic">
              "This isn't a luxury escape. It's a conscious choice to live more meaningfully."
            </blockquote>

            <div className="text-center animate-fade-in [animation-delay:0.8s]">
              <Button className="btn-primary text-lg px-12 py-6">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}
