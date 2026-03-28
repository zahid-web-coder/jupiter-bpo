import Image from "next/image";
import { Shield, Award, Lock, CheckCircle } from "lucide-react";

const trustElements = [
  {
    icon: Shield,
    title: "ISO 27001 Certified",
    description: "Information security management systems",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Proven track record in BPO excellence",
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    description: "Data protection and privacy standards",
  },
  {
    icon: CheckCircle,
    title: "99.9% Uptime SLA",
    description: "Reliable service delivery guarantee",
  },
];

const partnerLogos = [
  { name: "TechCorp", src: "https://ui-avatars.com/api/?name=TechCorp&background=f97316&color=fff&size=64" },
  { name: "FinServe", src: "https://ui-avatars.com/api/?name=FinServe&background=c2410c&color=fff&size=64" },
  { name: "RetailHub", src: "https://ui-avatars.com/api/?name=RetailHub&background=ea580c&color=fff&size=64" },
  { name: "HealthCare Plus", src: "https://ui-avatars.com/api/?name=HealthCare+Plus&background=f97316&color=fff&size=64" },
  { name: "LogiTrans", src: "https://ui-avatars.com/api/?name=LogiTrans&background=c2410c&color=fff&size=64" },
  { name: "EduLearn", src: "https://ui-avatars.com/api/?name=EduLearn&background=ea580c&color=fff&size=64" },
];

export default function TrustSection() {
  return (
    <section className="border-y border-primary/10 bg-gradient-to-br from-orange-50/50 to-white py-16 md:py-20">
      <div className="section-wrapper">
        {/* Trust Badges */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustElements.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-primary transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-white group-hover:shadow-glow">
                <Icon className="h-8 w-8" aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
              <p className="text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <p className="mb-8 text-sm font-medium text-slate-600">
            Trusted by leading companies across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0">
            {partnerLogos.map(({ name, src }) => (
              <div key={name} className="flex h-12 w-24 items-center justify-center">
                <Image
                  src={src}
                  alt={`${name} logo`}
                  width={64}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}