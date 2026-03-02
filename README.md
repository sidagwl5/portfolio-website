# Premium Portfolio Template

A high-performance, visually stunning portfolio template built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**. Designed for developers who want a premium, fast, and easy-to-customize personal website.

## 🚀 Quick Start

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Folder Structure

This project follows a clean, modular architecture. Here's a breakdown of the key directories:

### `app/`

The core of the Next.js application using the App Router.

- **`components/`**: All React components.
  - **`ui/`**: Reusable low-level UI components (Buttons, Cards, Modals).
  - **Section Components**: Sections like `Hero.tsx`, `About.tsx`, etc.
- **`data/`**: **The single source of truth for content.** Update these files to change your name, projects, experience, and skills.
- **`hooks/`**: Custom React hooks (e.g., `useSmoothScroll`, `useTouchDevice`).
- **`utils/`**: Helper functions (e.g., HTML sanitization).
- **`globals.css`**: Global styles and Tailwind v4 configuration.

### `public/`

Static assets such as images (profile pics, project screenshots) and the PDF resume.

### `.agents/`

Specialized AI agent configurations and workflows used during the development of this project.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Sanitization**: [DOMPurify](https://github.com/cure53/dompurify)

## 🎨 Customization

To personalize this portfolio, simply edit the files in `app/data/`. TypeScript will automatically infer the types from your data, ensuring type safety without needing to manually update interfaces.

- `heroData.ts`: Headline, CTA, and avatar links.
- `aboutData.ts`: Bio paragraphs and social media links.
- `experienceData.ts`: Professional history and career timeline.
- `projectsData.ts`: Featured work with images and tags.
- `skillsData.ts`: Technical expertise categories.

---

## 🤝 Connect with Me

Feel free to reach out for collaborations or just a friendly chat!

- [**LinkedIn**](https://www.linkedin.com/in/its-siddharth-agrawal/)
- [**GitHub**](https://github.com/sidagwl5)
- [**X (Twitter)**](https://x.com/its_sidAgrl)
- [**Instagram**](https://www.instagram.com/its.siddharthagrawal)
- [**Email**](mailto:sasiddharth7@gmail.com)

---

## ⭐ Star the Repo

If you find this template helpful, please consider giving it a **star**! It helps the project grow and stay maintained.

---

## 📜 License

This project is licensed under the MIT License. Feel free to use it as a template for your own portfolio!
