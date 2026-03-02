export const footerData = {
  contact: {
    badge: "Contact",
    title: "Get In Touch",
    description:
      "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  },

  personalInfo: {
    name: "Siddharth Agrawal",
  },
  footerLinks: [
    { label: "About", url: "#" },
    { label: "Skills", url: "#skills" },
    { label: "Experience", url: "#experience" },
    { label: "Projects", url: "#projects" },
  ],
  metadata: {
    copyright: "© 2024. All rights reserved.",
  },
} as const;

export type FooterData = typeof footerData;
