export type StackCategory = "basic" | "frontend" | "backend" | "etc";

export type StackIcon = {
  key: string;
  label: string;
  iconClass: string;
  category: StackCategory;
};

export const STACK_ICONS: StackIcon[] = [
  {
    key: "html",
    label: "HTML5",
    iconClass: "devicon-html5-plain colored",
    category: "basic",
  },
  {
    key: "css",
    label: "CSS3",
    iconClass: "devicon-css3-plain colored",
    category: "basic",
  },
  {
    key: "javascript",
    label: "JavaScript",
    iconClass: "devicon-javascript-plain colored",
    category: "basic",
  },
  {
    key: "typescript",
    label: "TypeScript",
    iconClass: "devicon-typescript-plain colored",
    category: "basic",
  },

  {
    key: "react",
    label: "React",
    iconClass: "devicon-react-original colored",
    category: "frontend",
  },
  {
    key: "nextjs",
    label: "Next.js",
    iconClass: "devicon-nextjs-plain colored",
    category: "frontend",
  },
  {
    key: "axios",
    label: "Axios",
    iconClass: "devicon-axios-plain",
    category: "frontend",
  },
  {
    key: "zustand",
    label: "Zustand",
    iconClass: "devicon-zustand-plain colored",
    category: "frontend",
  },
  {
    key: "tailwind",
    label: "Tailwind CSS",
    iconClass: "devicon-tailwindcss-plain colored",
    category: "frontend",
  },
  {
    key: "sass",
    label: "Sass",
    iconClass: "devicon-sass-original colored",
    category: "frontend",
  },
  {
    key: "styledcomponents",
    label: "styled Components",
    iconClass: "devicon-styledcomponents-plain",
    category: "frontend",
  },
  {
    key: "java",
    label: "Java",
    iconClass: "devicon-java-plain colored",
    category: "backend",
  },
  {
    key: "supabase",
    label: "Supabase",
    iconClass: "devicon-supabase-plain colored",
    category: "backend",
  },
  {
    key: "mysql",
    label: "MySQL",
    iconClass: "devicon-mysql-plain colored",
    category: "backend",
  },
  {
    key: "mssql",
    label: "MSSQL",
    iconClass: "devicon-microsoftsqlserver-plain colored",
    category: "backend",
  },

  {
    key: "vercel",
    label: "Vercel",
    iconClass: "devicon-vercel-original",
    category: "etc",
  },
  {
    key: "aws",
    label: "AWS",
    iconClass: "devicon-amazonwebservices-plain-wordmark colored",
    category: "etc",
  },
];

export const STACK_ICON_MAP = Object.fromEntries(
  STACK_ICONS.map((s) => [s.key, s])
) as Record<StackIcon["key"], StackIcon>;
