export default function AboutUs() {
  return (
      <section id="about-us" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title gradient-text animate-fade-in">
            We're building the kind of world we want to live in.
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <div
                className="grid md:grid-cols-2 gap-8 items-center animate-fade-in [animation-delay:0.2s]">
              <div className="space-y-6">
                <p className="text-xl">
                  Ikara was born from a simple insight: modern life is overstimulating and
                  undernourishing. We're a group of makers, wellness seekers, and nature lovers
                  reimagining what it means to live and work — with balance, intention, and clarity.
                </p>

                <p className="text-xl">
                  We're not building a company. We're building a way.
                  A way to be more human in the way we create, connect, and rest.
                </p>
              </div>

              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                    }}
                />
              </div>
            </div>

            <blockquote
                className="text-xl md:text-2xl font-medium text-center mt-12 animate-fade-in [animation-delay:0.4s] italic">
              "Ikara" is inspired by Ikigai (purpose) and Karma (action) — a place where purpose
              meets peace.
            </blockquote>
          </div>
        </div>
      </section>
  )
}
