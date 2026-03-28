import Image from "next/image";
import { ArrowRight, CheckCircle, TrendingUp, Users, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=85";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-hero-mesh pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-44 -left-32 h-[480px] w-[480px] rounded-full bg-primary-dark/15 blur-3xl" />
      </div>

      <div className="section-wrapper relative z-10 py-16 md:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="tag w-fit border-primary/20 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              Trusted BPO Partner — Karnataka
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl xl:text-7xl">
              Outsource <span className="gradient-text">Smarter</span> with Jupiter BPO
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Premium outsourcing that scales with you — customer support, IT helpdesk, back office, and data
              operations delivered from Bangalore &amp; Gulbarga with SaaS-grade rigor.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" className="px-8 py-4 text-base">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="/services" variant="secondary" className="px-8 py-4 text-base">
                Explore Services
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
              {[
                { val: "500+", text: "Agents" },
                { val: "98%", text: "CSAT score" },
                { val: "24/7", text: "Operations" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-sm font-medium text-slate-700">
                    <strong className="text-primary-dark">{b.val}</strong> {b.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-[0_28px_80px_-24px_rgba(249,115,22,0.45)] ring-1 ring-primary/10">
              <Image
                src={HERO_IMAGE}
                alt="Collaborative operations team at Jupiter BPO"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/50 via-primary/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 animate-float rounded-2xl border border-primary/10 bg-white/95 p-4 shadow-card-hover backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100">
                  <TrendingUp className="h-5 w-5 text-emerald-600" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">Client satisfaction</div>
                  <div className="text-lg font-bold text-slate-900">98% CSAT</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 animate-float-delayed rounded-2xl border border-primary/10 bg-white/95 p-4 shadow-card-hover backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light">
                  <Users className="h-5 w-5 text-primary-dark" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">Active agents</div>
                  <div className="text-lg font-bold text-slate-900">500+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 80" className="w-full text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M0,80 C360,0 1080,80 1440,20 L1440,80 Z" />
        </svg>
      </div>
    </section>
  );
}
