import {
  Headphones,
  FileText,
  Monitor,
  Database,
  Globe,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: <Headphones className="h-full w-full" />,
    title: "Customer Support & Sales",
    description:
      "Multichannel support — voice, email, live chat & social — backed by trained agents who deliver exceptional customer experiences.",
  },
  {
    icon: <FileText className="h-full w-full" />,
    title: "Back Office Services",
    description:
      "End-to-end back office management including document processing, claims handling, and administrative support.",
  },
  {
    icon: <Monitor className="h-full w-full" />,
    title: "IT Helpdesk",
    description:
      "24/7 technical support covering L1/L2 troubleshooting, software support, and infrastructure management.",
  },
  {
    icon: <Database className="h-full w-full" />,
    title: "Data Management",
    description:
      "Accurate data entry, cleansing, enrichment, and analytics — turning raw data into actionable business intelligence.",
  },
  {
    icon: <Globe className="h-full w-full" />,
    title: "Outsourcing Solutions",
    description:
      "Flexible, scalable outsourcing models tailored to your business goals — from pilot projects to full-scale operations.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-24 md:py-28">
      <div className="section-wrapper">
        <div className="mb-16 space-y-4 text-center">
          <div className="tag mx-auto">Our services</div>
          <h2 className="section-title mx-auto max-w-4xl">
            Everything your business needs, <span className="gradient-text">outsourced perfectly</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From frontline customer support to complex back-office operations — Jupiter BPO delivers outcomes you can
            measure.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <ServiceCard key={svc.title} icon={svc.icon} title={svc.title} description={svc.description} />
          ))}
          <div className="flex min-h-full flex-col justify-between rounded-2xl bg-brand-gradient p-8 text-white shadow-card-hover ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-lg">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <Phone className="h-6 w-6 text-white" aria-hidden />
              </div>
              <h3 className="text-xl font-bold">Need a custom solution?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                We design bespoke BPO programs around your workflows, tooling, and SLAs — not the other way around.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-white mt-8 justify-center text-sm transition-all duration-300 hover:shadow-glow"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
