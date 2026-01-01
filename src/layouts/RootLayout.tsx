import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-white text-zinc-950">
      <Header />
      <main className="py-10">
        <Outlet />
      </main>
    </div>
  );
}
