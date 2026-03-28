import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
};

export default function ServiceCard({ icon, title, description, href = "/services" }: Props) {
  return (
    <Link href={href} className="group flex h-full min-h-full">
      <div className="card-elevated flex h-full min-h-full flex-col">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-gradient">
          <div className="h-6 w-6 text-primary-dark transition-colors duration-300 group-hover:text-white [&>svg]:h-full [&>svg]:w-full">
            {icon}
          </div>
        </div>
        <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-primary-dark">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
        <div className="mt-5 flex translate-y-1 items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
