import { NavLink } from "react-router-dom";
import Container from "./Container";
import { cn } from "../../lib/cn";

const nav = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/projects", label: "PROJECTS" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 text-2xl border-b border-zinc-200/80 bg-white/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <NavLink to="/" className="font-semibold tracking-tight">
          HY's <span className="text-zinc-400">Portfolio</span>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-lg text-zinc-600  hover:bg-gray-200 py-2 px-3 rounded-xl transition-colors",
                  isActive && "font-bold"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
}
