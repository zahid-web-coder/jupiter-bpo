import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Shield, Zap, Heart, TrendingUp, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Jupiter BPO Services — our mission, vision, and values driving premium outsourcing from Karnataka.",
};

const values = [
  { icon: Shield, title: "Quality First", desc: "Every process we run is backed by ISO-aligned QA frameworks, real-time monitoring, and continuous improvement loops." },
  { icon: Zap, title: "Efficiency at Scale", desc: "Lean workflows and automation ensure maximum output with minimum waste — delivering more value for every rupee spent." },
  { icon: Heart, title: "Client Partnership", desc: "We treat every client as a long-term partner, not a transaction. Your success defines our success." },
  { icon: TrendingUp, title: "Continuous Innovation", desc: "We invest in the latest CRM, AI-assist tools, and cloud platforms to stay ahead and keep you competitive." },
  { icon: Users, title: "People-Centric Culture", desc: "Our 500+ agents are our biggest asset — trained, motivated, and empowered to deliver extraordinary service." },
  { icon: Award, title: "Accountability", desc: "Transparent SLA dashboards, weekly business reviews, and proactive escalation management build trust daily." },
];

const milestones = [
  { year: "2018", event: "Founded in Gulbarga, Karnataka" },
  { year: "2019", event: "Expanded to Bangalore operations center" },
  { year: "2021", event: "Crossed 200 agents, 30+ enterprise clients" },
  { year: "2022", event: "Launched IT Helpdesk & Technology practice" },
  { year: "2023", event: "500+ agents, 15 industry verticals" },
  { year: "2024", event: "Recognized among top BPOs in Karnataka" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper bg="orange" className="pt-32 pb-20 text-center">
        <div className="tag mx-auto mb-6">About Jupiter BPO</div>
        <h1 className="section-title mb-6 max-w-4xl mx-auto">
          Building the future of BPO{" "}
          <span className="gradient-text">from Karnataka</span>
        </h1>
        <p className="section-subtitle mx-auto mb-10 max-w-3xl">
          Since 2018, Jupiter BPO Services has been empowering businesses across India and beyond with world-class outsourcing — rooted in quality, driven by innovation.
        </p>
        <Button href="/contact" variant="primary" className="px-8 py-4">
          Partner with Us <ArrowRight className="w-5 h-5" />
        </Button>
      </SectionWrapper>

      {/* Story */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="tag">Our Story</div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              From a small team to <span className="gradient-text">Karnataka's trusted BPO</span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Jupiter BPO Services was born in 2018 with a simple belief: businesses in India deserved world-class outsourcing without the world-class price tag. Starting with a lean team of 20 in Gulbarga, we built a reputation for reliability, accuracy, and genuine partnership.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, with 500+ trained agents spread across Bangalore and Gulbarga, we serve clients in banking, e-commerce, healthcare, technology and more — delivering measurable results every single day.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { val: "6+", text: "Years of Excellence" },
                { val: "500+", text: "Trained Agents" },
                { val: "50+", text: "Enterprise Clients" },
              ].map((s) => (
                <div key={s.text} className="text-center p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors">
                  <div className="text-3xl font-bold gradient-text">{s.val}</div>
                  <div className="text-slate-500 text-xs mt-1 font-medium">{s.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&auto=format&fit=crop&q=80"
              alt="Jupiter BPO office"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-transparent" />
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper bg="gray">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl p-10 bg-white shadow-lg border border-orange-50 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              To be the most trusted outsourcing partner in India by delivering measurable business value through disciplined processes, empowered people, and relentless commitment to quality.
            </p>
          </div>
          <div className="rounded-3xl p-10 bg-orange-gradient text-white shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-orange-100 leading-relaxed text-lg">
              To become South Asia's premier BPO powerhouse — renowned for innovation, client loyalty, and making outsourcing a genuine competitive advantage for every business we serve.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <div className="text-center mb-16 space-y-4">
          <div className="tag mx-auto">Core Values</div>
          <h2 className="section-title">
            The principles that <span className="gradient-text">guide everything we do</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="card group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-3">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-16 space-y-4">
          <div className="tag mx-auto">Our Journey</div>
          <h2 className="section-title">Milestones that <span className="gradient-text">define us</span></h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex items-start gap-6 group">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-orange-500 group-hover:bg-orange-600 flex items-center justify-center transition-colors shadow-md">
                <span className="text-white font-bold text-sm">{m.year}</span>
              </div>
              <div className="flex-1 flex items-center bg-white rounded-2xl px-6 py-4 shadow-lg border border-orange-50 group-hover:border-orange-200 transition-colors">
                <CheckCircle className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <span className="text-slate-700 font-medium">{m.event}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Ready to work with a <span className="gradient-text">team that cares?</span>
        </h2>
        <p className="text-slate-500 mb-8 text-lg">Let's build something great together.</p>
        <Button href="/contact" variant="primary" className="px-8 py-4">
          Get Started Today <ArrowRight className="w-5 h-5" />
        </Button>
      </SectionWrapper>
    </>
  );
}
