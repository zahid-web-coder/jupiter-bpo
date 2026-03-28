import { MapPin, Phone, Rocket, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-cta-glow opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.12),transparent_65%)]" />
      <div className="section-wrapper relative z-10 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="tag mx-auto border-white/20 bg-white/10 text-orange-100 shadow-glow">
            <Rocket className="h-3.5 w-3.5 text-primary" aria-hidden />
            Start your outsourcing journey
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Ready to transform your{" "}
            <span className="bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400 bg-clip-text text-transparent">
              operations?
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-400 md:text-xl">
            Join 50+ businesses that trust Jupiter BPO for mission-critical workflows. Book a consultation and receive a
            tailored scope — no fluff, no hard sell.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" className="px-8 py-4 text-base shadow-glow-lg">
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/services" variant="ghost-dark" className="px-8 py-4 text-base">
              Explore Services
            </Button>
          </div>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              Bangalore · Gulbarga · Karnataka
            </span>
            <span className="hidden sm:inline text-slate-700" aria-hidden>
              ·
            </span>
            <a href="tel:+919972135467" className="inline-flex items-center gap-1.5 hover:text-primary">
              <Phone className="h-4 w-4 text-primary" aria-hidden />
              +91 9972135467
            </a>
            <span className="hidden sm:inline text-slate-700" aria-hidden>
              ·
            </span>
            <span>No commitment required</span>
          </p>
        </div>
      </div>
    </section>
  );
}
