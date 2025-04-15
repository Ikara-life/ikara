import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"

const experiences = [
  {
    title: "Flow",
    description: "Mornings of Movement & Stillness",
    details: "Sunrise yoga, breathwork, and forest walks to ground your mind.",
    icon: "🧘"
  },
  {
    title: "Learn",
    description: "Weekly Fireside Conversations",
    details: "Dialogue with founders, thinkers, and creatives around the fire.",
    icon: "💬"
  },
  {
    title: "Create",
    description: "Focused Work in Nature",
    details: "Co-working spaces surrounded by silence and forest.",
    icon: "🌄"
  },
  {
    title: "Connect",
    description: "Intentional Gatherings & Shared Meals",
    details: "Deep conversations and nourishing food under the stars.",
    icon: "🫶"
  },
  {
    title: "Reset",
    description: "Digital Detox Evenings",
    details: "Journaling, music, stillness, and star-gazing.",
    icon: "🔥"
  }
]

export default function Experience() {
  return (
      <section id="experience" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title gradient-text">
            Live differently, one day at a time.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
                <Card
                    key={index}
                    className="card-hover animate-fade-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{exp.icon}</span>
                      <div>
                        <CardTitle className="text-2xl">{exp.title}</CardTitle>
                        <p className="text-lg font-medium text-gray-600">{exp.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{exp.details}</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
