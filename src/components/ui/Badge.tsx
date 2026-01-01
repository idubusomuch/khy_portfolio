import type { PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

type Props = PropsWithChildren<{ className?: string }>;

export default function Badge({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700",
        className
      )}
    >
      {children}
    </span>
  );
}
