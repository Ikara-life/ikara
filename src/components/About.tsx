export default function About() {
  return (
      <section id="about" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-gradient animate-fade-in">
            We're building the kind of world we want to live in.
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <div
                className="grid md:grid-cols-2 gap-8 items-center animate-fade-in [animation-delay:0.2s]"
            >
              <div className="space-y-6">
                <p className="text-xl text-gradient">
                  Ikara was born from a simple insight: modern life is overstimulating and
                  undernourishing. We're a group of makers, wellness seekers, and nature lovers
                  reimagining what it means to live and work — with balance, intention, and clarity.
                </p>

                <p className="text-xl text-gradient">
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

            <p className="text-xl text-gradient">
              Our story began with a simple question: What if we could create a space where people
              could
              truly disconnect to reconnect?
            </p>
            <p className="text-xl text-gradient">
              We believe in the power of intentional spaces and meaningful connections. Our team of
              experienced facilitators, wellness experts, and local guides are here to ensure your
              journey
              is transformative.
            </p>
            <blockquote
                className="text-xl md:text-2xl font-medium text-center mt-12 animate-fade-in [animation-delay:0.4s] italic text-gradient"
            >
              "We're not just hosting retreats; we're cultivating a movement of mindful living."
            </blockquote>
          </div>
        </div>
      </section>
  );
};
