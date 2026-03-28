import { cn } from "@/lib/utils";

export type JupiterLogoVariant = "navbar" | "footer" | "mark";

type Props = {
  variant?: JupiterLogoVariant;
  /** Show “Jupiter BPO” wordmark beside the mark */
  showWordmark?: boolean;
  className?: string;
};

const markSizes: Record<JupiterLogoVariant, string> = {
  navbar: "h-10 w-10",
  footer: "h-11 w-11",
  mark: "h-8 w-8",
};

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="jupiter-logo-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f97316" />
          <stop offset="1" stopColor="#c2410c" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="url(#jupiter-logo-grad)" />
      <path
        fill="white"
        d="M12 8h4v8h4v4h-8v-4h4v-4h-4V8z"
      />
    </svg>
  );
}

export default function JupiterLogo({
  variant = "navbar",
  showWordmark = true,
  className,
}: Props) {
  if (!showWordmark) {
    return <LogoMark className={cn(markSizes[variant], className)} />;
  }

  const isFooter = variant === "footer";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className={markSizes[variant]} />
      <span className="flex flex-col leading-none">
        <span className="flex items-baseline gap-0">
          <span
            className={cn(
              "font-bold tracking-tight",
              isFooter ? "text-xl text-white" : "text-xl text-slate-900"
            )}
          >
            Jupiter
          </span>
          <span className="text-xl font-bold tracking-tight text-primary"> BPO</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-semibold uppercase tracking-[0.2em]",
            isFooter ? "text-slate-500" : "text-slate-400"
          )}
        >
          Services
        </span>
      </span>
    </span>
  );
}
