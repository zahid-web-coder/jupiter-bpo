"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import JupiterLogo from "@/components/brand/JupiterLogo";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/technology", label: "Technology" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-primary/10 bg-white/90 shadow-md shadow-slate-900/5 backdrop-blur-xl"
          : "border-b border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="section-wrapper">
        <div className="flex min-h-[4.25rem] items-center justify-between gap-4 py-3">
          <Link href="/" className="min-h-11 min-w-[44px] shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            <JupiterLogo variant="navbar" />
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "bg-primary-light text-primary-dark"
                    : "text-slate-600 hover:bg-primary-light/60 hover:text-primary-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="/contact" variant="secondary" className="px-5 py-2.5 text-sm">
              Get a Quote
            </Button>
            <Button href="/contact" variant="primary" className="px-5 py-2.5 text-sm shadow-btn-primary">
              Book a Call
            </Button>
          </div>

          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-xl text-slate-700 transition-colors duration-300 hover:bg-primary-light md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-primary/10 bg-white shadow-lg transition-all duration-300 md:hidden ${
          open ? "max-h-[100vh] opacity-100" : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="section-wrapper flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`min-h-11 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                pathname === link.href ? "bg-primary-light text-primary-dark" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className="mt-2 justify-center py-3.5">
            Get a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
}
