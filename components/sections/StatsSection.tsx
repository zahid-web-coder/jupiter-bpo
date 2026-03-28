import { Users, BadgeCheck, Layers, Percent } from "lucide-react";

const stats = [
  { value: "500+", label: "Trained agents", icon: Users },
  { value: "98%", label: "Client satisfaction", icon: BadgeCheck },
  { value: "15+", label: "Industries served", icon: Layers },
  { value: "60%", label: "Avg. cost savings", icon: Percent },
];

export default function StatsSection() {
  return (
    <section className="border-y border-primary/10 bg-orange-50 py-12 md:py-14">
      <div className="section-wrapper">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card-hover"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary-dark transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-gradient group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <div className="text-3xl font-bold gradient-text md:text-4xl">{value}</div>
              <div className="mt-1 text-sm font-medium text-slate-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
