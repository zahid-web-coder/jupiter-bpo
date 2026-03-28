import Link from "next/link";
import {
  ShoppingCart,
  Wifi,
  Landmark,
  Heart,
  Shield,
  Cpu,
  Building,
  Plane,
  GraduationCap,
  Truck,
  Car,
  Tv,
  Zap,
  Rocket,
  Megaphone,
} from "lucide-react";

const industries = [
  { icon: <ShoppingCart className="h-6 w-6" />, label: "E-commerce" },
  { icon: <Wifi className="h-6 w-6" />, label: "Telecom" },
  { icon: <Landmark className="h-6 w-6" />, label: "Banking & Finance" },
  { icon: <Heart className="h-6 w-6" />, label: "Healthcare" },
  { icon: <Shield className="h-6 w-6" />, label: "Insurance" },
  { icon: <Cpu className="h-6 w-6" />, label: "Technology" },
  { icon: <Building className="h-6 w-6" />, label: "Real Estate" },
  { icon: <Plane className="h-6 w-6" />, label: "Travel & Hospitality" },
  { icon: <GraduationCap className="h-6 w-6" />, label: "Education" },
  { icon: <Truck className="h-6 w-6" />, label: "Logistics" },
  { icon: <Car className="h-6 w-6" />, label: "Automotive" },
  { icon: <Tv className="h-6 w-6" />, label: "Media" },
  { icon: <Zap className="h-6 w-6" />, label: "Energy" },
  { icon: <Rocket className="h-6 w-6" />, label: "Startups" },
  { icon: <Megaphone className="h-6 w-6" />, label: "Marketing" },
];

export default function IndustriesSection() {
  return (
    <section className="bg-slate-50 py-24 md:py-28">
      <div className="section-wrapper">
        <div className="mb-16 space-y-4 text-center">
          <div className="tag mx-auto">Industries</div>
          <h2 className="section-title">
            Serving <span className="gradient-text">15+ industries</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Vertical playbooks, compliance awareness, and training paths tailored to how your sector actually works.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
          {industries.map((ind) => (
            <Link
              href="/industries"
              key={ind.label}
              className="group flex min-h-[120px] flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary-dark transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-gradient group-hover:text-white">
                {ind.icon}
              </div>
              <span className="text-xs font-semibold leading-snug text-slate-600 transition-colors duration-300 group-hover:text-primary-dark">
                {ind.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
