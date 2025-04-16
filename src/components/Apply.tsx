import { Button } from "@/components/ui/button";

export default function Apply() {
  return (
    <section id="apply" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-gradient animate-fade-in">
          This isn't just a retreat. It's a return to what matters.
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-xl md:text-2xl text-center animate-fade-in [animation-delay:0.2s] text-gradient">
            Ready to embark on your Ikara journey? Our application process is
            simple but thoughtful.
          </p>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in [animation-delay:0.4s]">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                How It Works:
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                    1
                  </span>
                  <span className="text-lg text-gradient">
                    Submit a short application
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                    2
                  </span>
                  <span className="text-lg text-gradient">
                    We'll reach out if it's a match
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                    3
                  </span>
                  <span className="text-lg text-gradient">
                    Confirm your week and get packing
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                What We Look For:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span className="text-lg text-gradient">
                    Purpose-driven explorers
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span className="text-lg text-gradient">
                    Mindful creators and remote workers
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span className="text-lg text-gradient">
                    Open hearts and intentional minds
                  </span>
                </div>
              </div>
            </div>
          </div>

          <blockquote className="text-xl md:text-2xl font-medium text-center mt-12 animate-fade-in [animation-delay:0.6s] italic text-gradient">
            "We're not just selecting participants; we're curating a community."
          </blockquote>

          <div className="text-center animate-fade-in [animation-delay:0.8s]">
            <Button variant="default" size="lg">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
