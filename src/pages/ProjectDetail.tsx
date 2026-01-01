import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";
import StackBadgeList from "../components/stacks/StackBadgeList";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  if (!project) {
    return (
      <Container className="space-y-4">
        <h1 className="text-2xl font-semibold">프로젝트를 찾을 수 없어요.</h1>
        <Link to="/projects">
          <Button variant="outline">목록으로</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="space-y-6">
      <section className="space-y-2">
        <Link
          to="/projects"
          className="text-sm text-zinc-600 hover:text-zinc-950"
        >
          ← 프로젝트 목록
        </Link>
        <h1 className="text-3xl mt-2 font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="text-zinc-600">
          {project.period} · {project.team} 프로젝트
        </p>
        <div className="pt-1">
          <StackBadgeList keys={project.stacks} />
        </div>
      </section>

      <Card>
        <h2 className="font-semibold">Overview</h2>
        <p className="mt-2 text-sm text-zinc-600">{project.summary}</p>
        <h2 className="font-semibold mt-6">Link</h2>

        <div className="flex flex-wrap gap-2">
          <div className="mt-2 text-sm text-zinc-600 flex gap-4">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer">
                🔗 Demo
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer">
                <i className="devicon-github-original colored mr-1.5"></i>
                GitHub
              </a>
            )}
            {project.links.youtube && (
              <a
                href={project.links.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/960px-YouTube_full-color_icon_%282017%29.svg.png?20240107144800"
                  className="h-3.5"
                  alt="youtube SVG 로고 이미지"
                />
                <span>Youtube</span>
              </a>
            )}
            {project.links.blog && (
              <a
                href={project.links.blog}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5"
              >
                <img
                  src="https://evewiki.kr/w/images/1/1f/%ED%8B%B0%EC%8A%A4%ED%86%A0%EB%A6%AC_%EC%95%84%EC%9D%B4%EC%BD%98.svg"
                  className="h-3.5"
                  alt="tistory blog SVG 로고 이미지"
                />
                <span>Blog</span>
              </a>
            )}
          </div>
        </div>
      </Card>
    </Container>
  );
}
