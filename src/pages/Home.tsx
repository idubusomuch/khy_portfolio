import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import SpotlightName from "../components/home/spotlightName";

export default function Home() {
  return (
    <Container className="min-h-[calc(100dvh-56px-120px)] flex items-center">
      <section className="w-full text-center">
        <SpotlightName
          text="KIM HAYEON"
          className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/about">
            <Button variant="ghost" size="lg" className="px-6">
              About
            </Button>
          </Link>
          <Link to="/projects">
            <Button size="lg" className="px-6">
              Projects
            </Button>
          </Link>
        </div>
      </section>
    </Container>
  );
}
