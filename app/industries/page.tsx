import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart, Wifi, Landmark, Heart, Shield, Cpu,
  Building, Plane, GraduationCap, Truck, Car, Tv,
  Zap, Rocket, Megaphone, ArrowRight
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries",
  description: "Jupiter BPO serves 15+ industries including e-commerce, healthcare, banking, telecom, and more.",
};

const industries = [
  {
    icon: ShoppingCart,
    label: "E-commerce",
    desc: "Order management, returns, live chat support, and seller operations at scale.",
  },
  {
    icon: Wifi,
    label: "Telecom",
    desc: "Subscriber support, billing queries, plan upgrades, and churn reduction programs.",
  },
  {
    icon: Landmark,
    label: "Banking & Finance",
    desc: "Account services, loan processing, compliance documentation, and fraud alerts.",
  },
  {
    icon: Heart,
    label: "Healthcare",
    desc: "Patient scheduling, medical billing, insurance verification, and records management.",
  },
  {
    icon: Shield,
    label: "Insurance",
    desc: "Claims processing, policy servicing, renewal reminders, and underwriting support.",
  },
  {
    icon: Cpu,
    label: "Technology",
    desc: "L1/L2 helpdesk, SaaS onboarding, technical documentation, and QA support.",
  },
  {
    icon: Building,
    label: "Real Estate",
    desc: "Lead qualification, property inquiries, CRM management, and site visit scheduling.",
  },
  {
    icon: Plane,
    label: "Travel & Hospitality",
    desc: "Reservations, cancellations, loyalty programs, and 24/7 traveler support.",
  },
  {
    icon: GraduationCap,
    label: "Education",
    desc: "Student helpdesks, admission support, fee management, and online learning assistance.",
  },
  {
    icon: Truck,
    label: "Logistics",
    desc: "Shipment tracking, delivery exceptions, warehouse coordination, and driver support.",
  },
  {
    icon: Car,
    label: "Automotive",
    desc: "Dealer support, service scheduling, warranty management, and roadside assistance.",
  },
  {
    icon: Tv,
    label: "Media",
    desc: "Subscription management, content moderation, advertising ops, and audience analytics.",
  },
  {
    icon: Zap,
    label: "Energy",
    desc: "Customer billing, outage reporting, usage analytics, and compliance reporting.",
  },
  {
    icon: Rocket,
    label: "Startups",
    desc: "Lean outsourcing models that let startups scale operations fast without hiring overhead.",
  },
  {
    icon: Megaphone,
    label: "Marketing Agencies",
    desc: "Campaign data management, lead nurturing, client reporting, and creative ops support.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper bg="orange" className="pt-20 pb-20 text-center text-white">
        <div className="tag mx-auto mb-6 bg-white/10 text-white border-white/20">
          Industries We Serve
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight mb-6 max-w-4xl mx-auto md:text-5xl">
          Deep expertise across <span className="text-white/90">15+ verticals</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-orange-100 mb-10 md:text-xl">
          We don't just know BPO — we know your industry. Jupiter BPO brings domain-specific knowledge to every engagement.
        </p>
      </SectionWrapper>

      {/* Industry Grid */}
      <SectionWrapper>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.label} className="card group flex gap-5 items-start hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1.5 group-hover:text-orange-600 transition-colors">{ind.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="dark" className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Don't see your industry? <span className="gradient-text">We likely serve it.</span>
        </h2>
        <p className="text-slate-400 mb-8">Talk to our consultants and discover how we can add value to your specific domain.</p>
        <Button href="/contact" variant="primary" className="px-8 py-4">
          Contact Us <ArrowRight className="w-5 h-5" />
        </Button>
      </SectionWrapper>
    </>
  );
}
