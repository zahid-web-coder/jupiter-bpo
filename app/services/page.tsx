import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Headphones, FileText, Monitor, Database, Globe, CheckCircle, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Jupiter BPO's full range of services — customer support, back office, IT helpdesk, data management, and outsourcing solutions.",
};

const services = [
  {
    icon: Headphones,
    title: "Customer Support & Sales",
    desc: "Multichannel customer support that delights your customers and drives retention. Our agents are trained to represent your brand with care.",
    benefits: ["Voice, Email, Chat & Social Support", "Sales outreach & lead qualification", "98% CSAT average across clients", "Multilingual support capabilities"],
    useCases: ["E-commerce order management", "Telecom subscriber support", "Financial product inquiries", "Product returns & grievances"],
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: FileText,
    title: "Back Office Services",
    desc: "Streamline your administrative operations with our accurate, efficient back office teams — freeing your core team to focus on growth.",
    benefits: ["Document processing & indexing", "Claims & invoice management", "Data entry with 99.9% accuracy", "Workflow automation support"],
    useCases: ["Insurance claims processing", "Healthcare billing & records", "HR & payroll administration", "Legal document processing"],
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: Monitor,
    title: "IT Helpdesk",
    desc: "24/7 technical support that resolves issues fast and keeps your business running. From L1 to L2 — we handle it all.",
    benefits: ["L1/L2 technical troubleshooting", "Software & hardware support", "Remote desktop management", "SLA-driven ticketing with ITSM tools"],
    useCases: ["Enterprise employee IT support", "Software product support for SaaS companies", "Network & infrastructure monitoring", "Vendor & third-party escalations"],
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: Database,
    title: "Data Management",
    desc: "Transform raw data into business intelligence. Our data management team ensures accuracy, completeness, and compliance across every dataset.",
    benefits: ["High-speed data entry & capture", "Data cleansing & enrichment", "Database management", "Reporting & analytics support"],
    useCases: ["CRM data management", "Market research data processing", "Inventory & catalog management", "Compliance reporting"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: Globe,
    title: "Outsourcing Solutions",
    desc: "Flexible engagement models — from project-based to full dedicated teams — designed around your unique business goals and budget.",
    benefits: ["Dedicated team setup", "Hybrid outsourcing models", "Pilot-to-scale programs", "Transparent pricing & SLAs"],
    useCases: ["Startup operations scaling", "Seasonal volume management", "New market entry support", "Cost optimization programs"],
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper bg="orange" className="pt-20 pb-20 text-center text-white">
        <div className="tag mx-auto mb-6 bg-white/10 text-white border-white/20">
          Our Services
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight mb-6 max-w-4xl mx-auto md:text-5xl">
          Premium BPO services <span className="text-white/90">built for scale</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white/80 mb-10 md:text-xl">
          Five core service lines, hundreds of use cases — all delivered by a team that treats your business as their own.
        </p>
      </SectionWrapper>

      {/* Services Detail */}
      <div className="space-y-16">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <SectionWrapper key={svc.title} className={`py-20 md:py-24 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
              <div className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <div className={`relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-transparent" />
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 text-orange-500">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-8">{svc.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {svc.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-3">Use Cases</h4>
                      <ul className="space-y-2">
                        {svc.useCases.map((u) => (
                          <li key={u} className="flex items-start gap-2 text-sm text-slate-600">
                            <ArrowRight className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button href="/contact" variant="primary">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </SectionWrapper>
          );
        })}
      </div>

      {/* CTA */}
      <SectionWrapper bg="dark" className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Not sure which service fits? <span className="gradient-text">Let's find out together.</span>
        </h2>
        <p className="text-slate-400 mb-8 text-lg">Our consultants will map the right solution to your business goals — for free.</p>
        <Button href="/contact" variant="primary" className="px-8 py-4">
          Book Free Consultation <ArrowRight className="w-5 h-5" />
        </Button>
      </SectionWrapper>
    </>
  );
}
