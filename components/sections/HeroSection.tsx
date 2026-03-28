import Image from "next/image";
import { ArrowRight, CheckCircle, TrendingUp, Users, Sparkles, ThumbsUp, Globe, TrendingDown } from "lucide-react";
import Button from "@/components/ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=85";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-hero-mesh pt-12 md:pt-16 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-44 -left-32 h-[480px] w-[480px] rounded-full bg-primary-dark/15 blur-3xl" />
      </div>

      <div className="section-wrapper relative z-10 py-16 md:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8 bg-orange-50 p-8 rounded-2xl">
            <div className="tag w-fit border-primary/20 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              Trusted BPO Partner — Karnataka
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.06] tracking-tight">
              Outsource <span className="gradient-text">Smarter</span> with Jupiter BPO Services
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Premium outsourcing that scales with you — customer support, IT helpdesk, back office, and data
              operations delivered from Bangalore &amp; Gulbarga with SaaS-grade rigor.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" className="px-8 py-4 text-base shadow-lg hover:scale-105 transition-all">
                Get Your Free Quote →
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="/services" variant="secondary" className="px-8 py-4 text-base hover:scale-105 transition-all">
                Explore Services
              </Button>
            </div>

            <p className="text-sm text-slate-500 mt-3">
              No commitment · Response within 24 hours
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
              {[
                { val: "500+", text: "Agents", icon: Users },
                { val: "98%", text: "CSAT", icon: ThumbsUp },
                { val: "15+", text: "Industries", icon: Globe },
                { val: "60%", text: "Cost Savings", icon: TrendingDown },
              ].map(({ val, text, icon: Icon }) => (
                <div key={text} className="flex flex-col items-center gap-1">
                  <Icon className="w-5 h-5 text-orange-500 mb-1" aria-hidden />
                  <span className="text-sm font-medium text-slate-700">
                    <strong className="text-primary-dark">{val}</strong> {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-200/50 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80"
                alt="Jupiter BPO professional call center team"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-transparent" />
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
