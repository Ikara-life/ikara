import {Card, CardContent, CardHeader} from "@/components/ui/card";

const experiences = [
    {
        icon: "🌿",
        title: "Nature Immersion",
        description: "Connect with the natural world",
        details:
            "Daily guided nature walks, meditation in serene settings, and opportunities to observe local wildlife.",
    },
    {
        icon: "🧘",
        title: "Mindful Practices",
        description: "Cultivate inner peace",
        details:
            "Morning yoga sessions, guided meditation, and mindfulness workshops to help you stay present.",
    },
    {
        icon: "🎨",
        title: "Creative Expression",
        description: "Unleash your creativity",
        details:
            "Art workshops, writing sessions, and collaborative projects to explore your creative side.",
    },
    {
        icon: "🍽️",
        title: "Nourishing Cuisine",
        description: "Savor every bite",
        details:
            "Locally sourced, plant-based meals prepared with care and intention.",
    },
    {
        icon: "💭",
        title: "Reflection Time",
        description: "Process and integrate",
        details:
            "Dedicated spaces and time for personal reflection and journaling.",
    },
    {
        icon: "🤝",
        title: "Community Connection",
        description: "Build meaningful relationships",
        details:
            "Group activities and shared experiences to foster deep connections with fellow participants.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding bg-white">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-gradient">
                    Live differently, one day at a time.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <Card
                            key={exp.title}
                            className="border-gray-200 hover:border-gray-300 transition-colors animate-fade-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl">{exp.icon}</span>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg font-medium text-gray-700">
                                            {exp.description}
                                        </p>
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
    );
}
