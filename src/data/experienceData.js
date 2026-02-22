export const experienceData = {
    header: {
        badge: "Career Path",
        title: "Professional Experience",
        description: "I specialize in building accessible, high-performance web applications using React and the modern frontend ecosystem."
    },
    experiences: [
        {
            year: "2024 — PRESENT",
            role: "Senior Frontend Engineer",
            company: "Klaviyo",
            points: [
                "Leading the architectural shift to a unified design system, improving component reuse by 40% across 12 product squads.",
                "Championing WCAG 2.1 compliance, reducing accessibility-related support tickets by 60% within the first year.",
                "Mentoring 4 mid-level developers through regular pair programming and deep-dive technical RFC reviews."
            ],
            tags: ["React", "TypeScript", "Accessibility"],
            current: true
        },
        {
            year: "2018 — 2024",
            role: "Lead Engineer",
            company: "Upstatement",
            points: [
                "Delivered high-impact digital experiences for clients including Harvard, PBS, and The 19th News.",
                "Spearheaded the internal migration from REST to GraphQL, reducing frontend data fetching boilerplate by 50%.",
                "Established engineering best practices for code reviews, testing strategies, and automated CI/CD pipelines."
            ],
            tags: ["Next.js", "GraphQL", "Node.js"],
            current: false
        }
    ]
};
