export const experienceData = {
    header: {
        badge: "Career Path",
        title: "Professional Experience",
        description: "I specialize in building scalable, high-performance web applications using React and Next.js, with a strong focus on architecture and user experience."
    },
    experiences: [
        {
            year: "Jun 2023 — Jan 2026",
            role: "Senior Frontend Developer",
            company: "Intract",
            points: [
                "<span class=\"text-slate-900 dark:text-white font-medium\">Architected and owned end-to-end frontend platforms</span>, including a centralized auth system (ReactJS) powering multi-chain wallets and a modular quest system for Linea Campaigns.",
                "Engineered a theme-based leaderboard with server-driven filters using <span class=\"text-slate-900 dark:text-white font-medium\">Next.js Parallel Routes</span>, and improved profile page initial load time by <span class=\"text-slate-900 dark:text-white font-medium\">30–40%</span> via streaming.",
                "Streamlined OAuth onboarding by <span class=\"text-slate-900 dark:text-white font-medium\">85–90%</span> and boosted Quest page FCP by <span class=\"text-slate-900 dark:text-white font-medium\">40%</span> through page-level code splitting and React Router v6 data routers.",
                "Implemented <span class=\"text-slate-900 dark:text-white font-medium\">app-wide data caching</span> for near-instant repeat access and resolved critical Next.js bugs to restore optimal static/dynamic rendering behavior.",
                "Designed revenue-critical NFT minting workflows with robust failure handling, contributing to <span class=\"text-slate-900 dark:text-white font-medium\">$3m+ revenue</span> and <span class=\"text-slate-900 dark:text-white font-medium\">1m+ user acquisition</span>."
            ],
            tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Architecture"],
            current: true
        },
        {
            year: "Jun 2021 — May 2023",
            role: "Frontend Developer",
            company: "Versai",
            points: [
                "<span class=\"text-slate-900 dark:text-white font-medium\">Led monorepo adoption</span> and contributed to a <span class=\"text-slate-900 dark:text-white font-medium\">reusable UI library with Storybook</span>, standardizing development across teams.",
                "Improved Next.js portfolio site <span class=\"text-slate-900 dark:text-white font-medium\">performance by 60%</span> by replacing SSR with <span class=\"text-slate-900 dark:text-white font-medium\">On-Demand ISR</span>, and migrated B2B dashboard data-fetching to <span class=\"text-slate-900 dark:text-white font-medium\">React Query</span>.",
                "Implemented an <span class=\"text-slate-900 dark:text-white font-medium\">end-to-end SSE real-time waiting lobby</span> and integrated Sentry app-wide, <span class=\"text-slate-900 dark:text-white font-medium\">reducing crashes by 30%</span>."
            ],
            tags: ["React", "Next.js", "Monorepo", "Sentry"],
            current: false
        }
    ]
};
