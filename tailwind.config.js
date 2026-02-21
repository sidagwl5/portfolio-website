/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5eead4", // Teal accent
          purple: "#5e6ad2", // Purple accent from Hero
          blue: "#3b82f6",   // Blue accent from Projects
          sky: "#38bdf8",    // Sky accent from Skills
        },
        "background-light": "#f8fafc", // Subtle off-white (Slate 50)
        "background-dark": "#020617",  // Slightly richer dark (Slate 950)
        "surface-dark": "#1e293b",
        "card-dark": "#1e293b",
        "card-light": "#ffffff",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "sans-serif"],
        display: ["Geist", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
