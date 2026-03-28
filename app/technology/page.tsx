import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, Lock, Cpu, BarChart3, Headphones, RefreshCw, ArrowRight, CheckCircle, Shield } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Technology",
  description: "Jupiter BPO uses cutting-edge CRM, cloud infrastructure, AI tools, and data security to power premium outsourcing.",
};

const techPillars = [
  {
    icon: Cloud,
    title: "Cloud CRM & Ticketing",
    desc: "We operate on enterprise-grade CRM platforms including Salesforce, Zoho, and Freshdesk — giving you real-time visibility into every interaction, SLA status, and agent performance metric.",
    features: ["Salesforce & Zoho CRM integration", "Omnichannel ticketing via Freshdesk/Zendesk", "Real-time dashboards for clients", "Custom API integrations"],
  },
  {
    icon: Lock,
    title: "Secure Infrastructure",
    desc: "Your data is your most valuable asset. Our infrastructure is designed with security-first principles — from encrypted communications to role-based access controls.",
    features: ["ISO 27001 aligned security practices", "End-to-end data encryption", "Role-based access & audit logs", "GDPR & DPDP compliant processes"],
  },
  {
    icon: Cpu,
    title: "AI-Powered Tools",
    desc: "From AI-assisted agent coaching to automated quality monitoring, we harness modern AI to improve agent productivity and service quality — consistently.",
    features: ["AI call transcription & sentiment analysis", "Automated QA scoring", "Predictive routing & escalation", "Chatbot + human handoff workflows"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Business intelligence that drives decisions. We provide transparent, detailed reporting — from agent-level metrics to executive dashboards tailored to your KPIs.",
    features: ["Custom SLA & KPI dashboards", "Weekly & monthly business reviews", "Trend analysis & forecasting", "Exportable reports in any format"],
  },
  {
    icon: Headphones,
    title: "Omnichannel Platform",
    desc: "Seamless customer experiences across every touchpoint — voice, email, live chat, WhatsApp, and social media — all managed from a unified agent workspace.",
    features: ["Unified agent desktop", "Voice, email, chat, social", "WhatsApp Business integration", "IVR & smart call routing"],
  },
  {
    icon: RefreshCw,
    title: "BCP & Redundancy",
    desc: "Guaranteed business continuity. Our disaster recovery and BCP protocols ensure zero service disruption — even in adverse conditions.",
    features: ["Multi-site redundancy (Bangalore + Gulbarga)", "Automated failover systems", "Power backup & redundant connectivity", "Documented BCP tested quarterly"],
  },
];

const securityBadges = [
  "Data Encryption at Rest & Transit",
  "Multi-Factor Authentication",
  "Regular Penetration Testing",
  "Background-verified Agents",
  "CCTV-monitored Operations",
  "Clean Desk & No-phone Policy",
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper bg="orange" className="pt-32 pb-20 text-center">
        <div className="tag mx-auto mb-6">Technology</div>
        <h1 className="section-title mb-6 max-w-4xl mx-auto">
          Enterprise-grade tech <span className="gradient-text">powering every interaction</span>
        </h1>
        <p className="section-subtitle mx-auto">
          Modern CRM, AI tools, cloud infrastructure, and military-grade security — the technological backbone behind Jupiter BPO's consistent results.
        </p>
      </SectionWrapper>

      {/* Tech Pillars */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techPillars.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.title} className="card group flex flex-col hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{t.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{t.desc}</p>
                <ul className="space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Security Section */}
      <SectionWrapper bg="gray">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="tag">Data Security</div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Your data is safe with <span className="gradient-text">Jupiter BPO</span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Security is non-negotiable. We follow industry-leading standards and practices to ensure your customers' data and your business information remain protected at all times.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {securityBadges.map((badge) => (
                <div key={badge} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
                  <Shield className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-orange-gradient p-10 text-white space-y-6 shadow-lg">
            <h3 className="text-2xl font-bold">Infrastructure at a Glance</h3>
            {[
              { label: "Uptime SLA", value: "99.9%" },
              { label: "Agent Workstations", value: "500+" },
              { label: "Internet Redundancy", value: "4 ISPs" },
              { label: "Power Backup", value: "100%" },
              { label: "Data Centers", value: "2 Locations" },
              { label: "Security Audits", value: "Quarterly" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between border-b border-white/20 pb-4 last:border-0 last:pb-0">
                <span className="text-orange-100 text-sm">{item.label}</span>
                <span className="font-bold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          See our tech in <span className="gradient-text">action</span>
        </h2>
        <p className="text-slate-500 mb-8">Request a live demo or infrastructure walkthrough from our team.</p>
        <Button href="/contact" variant="primary" className="px-8 py-4">
          Request a Demo <ArrowRight className="w-5 h-5" />
        </Button>
      </SectionWrapper>
    </>
  );
}
