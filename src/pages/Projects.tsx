import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import { Link } from "react-router-dom";
import StackBadgeList from "../components/stacks/StackBadgeList";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Container className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">프로젝트</h1>
      </section>

      <section className="flex flex-wrap gap-2">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`}>
            <Card className="hover:border-zinc-300 hover:shadow-md transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold">{p.title}</h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    {p.period} · {p.team}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm text-zinc-600">{p.summary}</p>

              <div className="mt-3">
                <StackBadgeList keys={p.stacks} />
              </div>
            </Card>
          </Link>
        ))}
      </section>
    </Container>
  );
}
