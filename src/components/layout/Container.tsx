import type { PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

type Props = PropsWithChildren<{ className?: string }>;

export default function Container({ className, children }: Props) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5", className)}>
      {children}
    </div>
  );
}
