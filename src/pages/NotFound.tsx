import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <Container className="space-y-4">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="text-zinc-600">페이지를 찾을 수 없어요.</p>
      <Link to="/">
        <Button variant="outline">홈으로</Button>
      </Link>
    </Container>
  );
}
