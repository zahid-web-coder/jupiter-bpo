import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  white: "btn-white",
  "ghost-dark": "btn-ghost-dark",
} as const;

export type ButtonVariant = keyof typeof variants;

type Props = LinkProps & {
  className?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
};

export default function Button({ className, variant = "primary", children, ...props }: Props) {
  return (
    <Link className={cn(variants[variant], "min-h-11 min-w-[44px]", className)} {...props}>
      {children}
    </Link>
  );
}
