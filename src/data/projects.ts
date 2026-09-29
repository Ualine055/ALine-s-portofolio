export type Project = {
  title: string;
  category: string;
  description: string;
  img: string;
  /** Live demo URL. Leave undefined until the project is deployed. */
  href?: string;
  /** GitHub repository URL */
  github?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A responsive online store with product categories, filtering, an add-to-cart flow and a validated contact form.",
    img: "/assets/img/e-commerce.avif",
    href: "https://e-commerce-project-five-opal.vercel.app",
    github: "https://github.com/Ualine055/e-commerce-project",
    tags: ["React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Task Management App",
    category: "Web Development",
    description:
      "A secure task manager where signed-in users create, edit and delete their own tasks, stored in Firestore.",
    img: "/assets/img/task.webp",
    href: "https://task-mgt-app-gdn8.vercel.app",
    github: "https://github.com/Ualine055/task-mgt-app",
    tags: ["Next.js", "TypeScript", "Firebase"],
  },
  {
    title: "Freelance Dashboard",
    category: "Frontend Development",
    description:
      "A dashboard for freelancers to track clients, projects and payments, with type-safe global state management.",
    img: "/assets/img/work3.png",
    href: "https://freelance-dashboard-puce.vercel.app",
    github: "https://github.com/Ualine055/freelance-dashboard",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Publishing Platform",
    category: "Web Development",
    description:
      "A full-stack publishing platform with authentication, a rich text editor, drafts and real-time comments.",
    img: "/assets/img/publishing.PNG",
    href: "https://phase-two-capstone-project-cb6r.vercel.app/",
    github: "https://github.com/Ualine055/Phase-Two-Capstone-Project",
    tags: ["Next.js", "TypeScript", "Firebase"],
  },
  {
    title: "Movie Explorer",
    category: "Frontend Development",
    description:
      "Browse, search and filter shows from the TVMaze API, and save your favourites across visits.",
    img: "/assets/img/movie-explorer.avif",
    href: "https://react-movie-explorer-six.vercel.app",
    github: "https://github.com/Ualine055/react-movie-explorer",
    tags: ["React", "Vite", "API"],
  },
  {
    title: "Developer Dashboard",
    category: "Frontend Development",
    description:
      "A dashboard showing live GitHub profile stats and local weather, with a light and dark mode.",
    img: "/assets/img/developer.avif",
    href: "https://dev-dashboard-one.vercel.app",
    github: "https://github.com/Ualine055/dev-dashboard",
    tags: ["React", "Tailwind CSS", "API"],
  },
  {
    title: "Book Explorer",
    category: "Web Development",
    description:
      "Search real books from the Open Library API and keep a list of favourites saved in the browser.",
    img: "/assets/img/book-explorer.avif",
    href: "https://phase-one-capstone-project-vg5u.vercel.app/",
    github: "https://github.com/Ualine055/Phase-One-Capstone-Project",
    tags: ["JavaScript", "Tailwind CSS", "API"],
  },
  {
    title: "Healthcare Appointment System",
    category: "Web Development",
    description: "A healthcare appointment booking app with user accounts and data stored in Firebase.",
    img: "/assets/img/health-appointment.avif",
    github: "https://github.com/Ualine055/Healthcare-Appointment-System",
    tags: ["Next.js", "TypeScript", "Firebase"],
  },
  {
    title: "Next.js Rendering Techniques Demo",
    category: "Frontend Development",
    description:
      "A hands-on demo of CSR, SSR, SSG and ISR in the Next.js App Router, with nested layouts and dark mode.",
    img: "/assets/img/nextjs-demo.avif",
    href: "https://next-js-demo-lyart-theta.vercel.app",
    github: "https://github.com/Ualine055/Next.js-Demo",
    tags: ["Next.js", "TypeScript", "React"],
  },
];

/** Projects highlighted in the home page "My Work" section. */
export const featuredProjects = projects.slice(0, 6);

/** Filter buttons on the projects page, built from all project tags. */
export const projectFilters = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
