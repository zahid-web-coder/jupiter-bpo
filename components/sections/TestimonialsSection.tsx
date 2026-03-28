import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "VP Operations, ShopEase India",
    review:
      "Jupiter BPO transformed our customer support. Their team handles 10,000+ tickets monthly with 98% CSAT — truly impressive.",
    rating: 5,
    avatarUrl:
      "https://ui-avatars.com/api/?name=Rajesh+Mehta&background=f97316&color=fff&size=128&bold=true",
  },
  {
    name: "Priya Nair",
    role: "COO, TechStart Solutions",
    review:
      "Outstanding IT helpdesk services. Their 24/7 support has dramatically reduced our downtime and kept our teams productive.",
    rating: 5,
    avatarUrl:
      "https://ui-avatars.com/api/?name=Priya+Nair&background=c2410c&color=fff&size=128&bold=true",
  },
  {
    name: "Arun Shetty",
    role: "Director, FinServ Corp",
    review:
      "The back office team at Jupiter is phenomenal. Accuracy, speed, and professionalism — they're a genuine extension of our team.",
    rating: 5,
    avatarUrl:
      "https://ui-avatars.com/api/?name=Arun+Shetty&background=ea580c&color=fff&size=128&bold=true",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="section-wrapper">
        <div className="mb-16 space-y-4 text-center">
          <div className="tag mx-auto">Client stories</div>
          <h2 className="section-title">
            Trusted by businesses <span className="gradient-text">across India</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real outcomes from teams who needed reliability, velocity, and a partner who shows up like an owner.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-card-gradient p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover"
            >
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden />
                ))}
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-700">&ldquo;{t.review}&rdquo;</p>
              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
                  <Image src={t.avatarUrl} alt={`${t.name} avatar`} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
