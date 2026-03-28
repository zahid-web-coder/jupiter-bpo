import Image from "next/image";
import { Users, TrendingUp, Award, Target, ThumbsUp, Clock } from "lucide-react";

const whyUs = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Experienced team",
    desc: "500+ trained professionals with deep domain expertise across industries.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Scalable workforce",
    desc: "Ramp up or down quickly — our elastic model adapts to your business cycles.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Quality-driven processes",
    desc: "ISO-aligned workflows, real-time QA monitoring, and SLA compliance at scale.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Competitive pricing",
    desc: "Up to 60% cost savings vs in-house operations with no compromise on quality.",
  },
  {
    icon: <ThumbsUp className="h-5 w-5" />,
    title: "Client-focused approach",
    desc: "Dedicated account managers, transparent reporting, and always-on communication.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "24/7 operations",
    desc: "Round-the-clock delivery across time zones for global coverage.",
  },
];

const TEAM_IMAGE =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=85";

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-primary-light/90 blur-3xl" />
      </div>
      <div className="section-wrapper relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card-hover ring-1 ring-slate-200/80">
            <Image
              src={TEAM_IMAGE}
              alt="Professional team collaborating at Jupiter BPO"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/45 via-primary/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-md">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex -space-x-2">
                  {["A", "B", "C"].map((l) => (
                    <div
                      key={l}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand-gradient text-xs font-bold text-white"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-700">
                  Join <strong className="text-primary-dark">50+ teams</strong> scaling with Jupiter
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="tag w-fit">Why Jupiter BPO</div>
              <h2 className="section-title">
                The partner that <span className="gradient-text">delivers results</span>
              </h2>
              <p className="section-subtitle max-w-xl text-slate-600">
                We operate like an embedded team — with governance, tooling, and communication rhythms you would expect
                from a product company.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-100 bg-card-gradient p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary-dark transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-gradient group-hover:text-white">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
