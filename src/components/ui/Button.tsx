import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

type Variant = "solid" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
  }
>;

export default function Button({
  variant = "solid",
  size = "md",
  className,
  children,
  ...rest
}: Props) {
  const base =
    "inline-flex cursor-pointer items-center justify-center rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-sm",
    lg: "h-13 px-5 text-md",
  } as const;
  const variants = {
    solid: "bg-zinc-950 text-white hover:bg-zinc-600",
    ghost: "bg-transparent text-zinc-700 hover:bg-zinc-300 hover:text-zinc-950",
    outline: "border border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100",
  } as const;

  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
