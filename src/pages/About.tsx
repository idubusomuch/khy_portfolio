import Container from "../components/layout/Container";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import { profile } from "../data/profile";
import { STACK_ICONS, type StackCategory } from "../data/stackIcons";

const CATEGORY_LABEL: Record<StackCategory, string> = {
  basic: "Basic",
  frontend: "Frontend",
  backend: "Backend",
  etc: "Etc",
};
const CATEGORY_ORDER: StackCategory[] = ["basic", "frontend", "backend", "etc"];

export default function About() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: STACK_ICONS.filter((s) => s.category === cat),
  })).filter((g) => g.items.length > 0);
  return (
    <Container className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">ABOUT</h1>
        <p className=" text-zinc-600">{profile.intro}</p>
        <p className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Badge className="gap-2 px-3 py-2 text-sm">
              <i className="devicon-github-original colored"></i>
              GitHub
            </Badge>
          </a>
          <a href={profile.blog} target="_blank" rel="noreferrer">
            <Badge className="gap-2 px-3 py-2 text-sm">
              <img
                src="https://evewiki.kr/w/images/1/1f/%ED%8B%B0%EC%8A%A4%ED%86%A0%EB%A6%AC_%EC%95%84%EC%9D%B4%EC%BD%98.svg"
                className="h-3.5"
                alt="tistory blog SVG 로고 이미지"
              />
              <span>Blog</span>
            </Badge>
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <Card>
          <h2 className="font-semibold">경력</h2>
          <div className="mt-3 space-y-2 text-sm text-zinc-600">
            {profile.career.map((c) => (
              <div key={c.company} className="text-zinc-600">
                <p className="font-medium text-zinc-900">
                  {c.company} · {c.role}
                </p>
                <p className="text-xs text-zinc-500">{c.period}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="font-semibold">학력</h2>
          <div className="mt-3 space-y-2 text-sm text-zinc-600">
            {profile.education.map((t) => (
              <p key={t}>- {t}</p>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="font-semibold">자격증</h2>
          <div className="mt-3 space-y-2 text-sm text-zinc-600">
            {profile.certificate.map((t) => (
              <p key={t}>- {t}</p>
            ))}
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <Card>
          <h2 className="font-semibold">기술 스택</h2>
          <div className="mt-6 space-y-6">
            {grouped.map(({ category, items }) => (
              <div key={category} className="space-y-3">
                <h3 className="text-sm font-semibold text-zinc-500">
                  {CATEGORY_LABEL[category]}
                </h3>

                {/* 배지로 출력 */}
                <ul className="flex flex-wrap gap-2">
                  {items.map((stack) => (
                    <li key={stack.key}>
                      <Badge className="gap-2 px-3 py-2 text-sm">
                        <i
                          className={`${stack.iconClass} text-base`}
                          aria-hidden
                        />
                        <span>{stack.label}</span>
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </Container>
  );
}
