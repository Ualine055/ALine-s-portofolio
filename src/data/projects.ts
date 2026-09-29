export type Project = {
  title: string;
  category: string;
  img: string;
  /** Live demo URL. Leave undefined until the project is deployed. */
  href?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    img: "/assets/img/e-commerce.avif",
    href: "https://e-commerce-project-five-opal.vercel.app",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Task Management App",
    category: "UI/UX Design",
    img: "/assets/img/task.webp",
    href: "https://task-mgt-app-gdn8.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Freelance Dashboard",
    category: "Frontend Development",
    img: "/assets/img/work3.png",
    href: "https://freelance-dashboard-puce.vercel.app",
    tags: ["HTML5", "JavaScript", "API"],
  },
  {
    title: "Publishing Platform",
    category: "Web Development",
    img: "/assets/img/publishing.PNG",
    href: "https://phase-two-capstone-project-cb6r.vercel.app/",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Movie Explorer",
    category: "Entertainment",
    img: "/assets/img/movie-explorer.avif",
    href: "https://react-movie-explorer-six.vercel.app",
    tags: ["Next.js", "JavaScript", "CSS3"],
  },
  {
    title: "Developer Dashboard",
    category: "Frontend Development",
    img: "/assets/img/developer.avif",
    href: "https://dev-dashboard-one.vercel.app",
    tags: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Book Explorer",
    category: "Web Development",
    img: "/assets/img/book-explorer.avif",
    href: "https://phase-one-capstone-project-vg5u.vercel.app/",
    tags: ["React", "JavaScript", "API"],
  },
  {
    title: "Healthcare Appointment System",
    category: "Web Development",
    img: "/assets/img/health-appointment.avif",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Next.js Rendering Techniques Demo",
    category: "Frontend Development",
    img: "/assets/img/nextjs-demo.avif",
    href: "https://next-js-demo-lyart-theta.vercel.app",
    tags: ["Next.js", "TypeScript", "React"],
  },
];

/** Projects highlighted in the home page "My Work" section. */
export const featuredProjects = projects.slice(0, 6);
