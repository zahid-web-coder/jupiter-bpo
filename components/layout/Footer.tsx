import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import JupiterLogo from "@/components/brand/JupiterLogo";

const services = [
  { label: "Customer Support", href: "/services" },
  { label: "Back Office Services", href: "/services" },
  { label: "IT Helpdesk", href: "/services" },
  { label: "Data Management", href: "/services" },
  { label: "Outsourcing Solutions", href: "/services" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" },
];

const social = [
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="section-wrapper py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              <JupiterLogo variant="footer" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Premium outsourcing from Karnataka — customer experience, technology operations, and back-office
              delivery built for scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {social.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/80 text-slate-300 transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Services</h4>
            <ul className="mt-6 space-y-3.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-300 hover:text-primary"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Company</h4>
            <ul className="mt-6 space-y-3.5">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-300 hover:text-primary"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h4>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="leading-relaxed text-slate-400">
                  Bangalore | Gulbarga
                  <br />
                  Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <a href="tel:+919972135467" className="text-slate-400 transition-colors hover:text-primary">
                  +91 9972135467
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <a
                  href="mailto:jupiter.ppms@gmail.com"
                  className="break-all text-slate-400 transition-colors hover:text-primary"
                >
                  jupiter.ppms@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/80">
        <div className="section-wrapper flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-center text-sm text-slate-500 sm:text-left">
            © {new Date().getFullYear()} Jupiter BPO Services. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <span className="cursor-pointer transition-colors hover:text-slate-400">Privacy Policy</span>
            <span className="cursor-pointer transition-colors hover:text-slate-400">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
