import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "gray" | "dark" | "orange" | "primary-light";
}

const bgMap = {
  white: "bg-white",
  gray: "bg-slate-50",
  dark: "bg-slate-950",
  orange: "bg-orange-gradient",
  "primary-light": "bg-primary-light",
};

export default function SectionWrapper({ children, className, id, bg = "white" }: Props) {
  return (
    <section id={id} className={cn("py-20 md:py-28", bgMap[bg], className)}>
      <div className="section-wrapper">{children}</div>
    </section>
  );
}
