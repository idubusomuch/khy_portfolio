import type { PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

type Props = PropsWithChildren<{ className?: string }>;

export default function Card({ className, children }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
