"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <SectionWrapper bg="orange" className="pt-20 pb-20 text-center text-white">
        <div className="tag mx-auto mb-6 bg-white/10 text-white border-white/20">
          Get in Touch
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight mb-6 max-w-3xl mx-auto md:text-5xl">
          Let's start your <span className="text-white/90">outsourcing journey</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white/80 mb-10 md:text-xl">
          Reach out for a free consultation, custom quote, or just to learn more about how Jupiter BPO can help.
        </p>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact Information</h2>
              <p className="text-slate-500 text-sm">Our team is available Mon-Sat, 9am-7pm IST.</p>
            </div>

            {[
              {
                icon: Phone,
                title: "Phone",
                content: "+91 9972135467",
                sub: "Mon–Sat, 9am–7pm IST",
                href: "tel:9972135467",
              },
              {
                icon: Mail,
                title: "Email",
                content: "jupiter.ppms@gmail.com",
                sub: "We reply within 24 hours",
                href: "mailto:jupiter.ppms@gmail.com",
              },
              {
                icon: MapPin,
                title: "Locations",
                content: "Bangalore | Gulbarga",
                sub: "Karnataka, India",
                href: undefined,
              },
              {
                icon: Clock,
                title: "Operations",
                content: "24/7 available",
                sub: "Support across time zones",
                href: undefined,
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="card flex items-start gap-4 hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 text-orange-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">{c.title}</div>
                    {c.href ? (
                      <a href={c.href} className="font-semibold text-slate-900 hover:text-orange-600 transition-colors text-sm block">{c.content}</a>
                    ) : (
                      <div className="font-semibold text-slate-900 text-sm">{c.content}</div>
                    )}
                    <div className="text-slate-400 text-xs mt-0.5">{c.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-orange-50">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-500 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                    className="btn-outline mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Send us a message</h2>
                    <p className="text-slate-500 text-sm">Fill in the form and we'll be in touch within 24 hours.</p>
                    <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
                      <CheckCircle className="w-4 h-4" />
                      We respond within 24 hours — guaranteed
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-slate-900 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rajesh@company.com"
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-slate-900 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-slate-900 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-slate-900 text-sm transition-colors bg-white"
                      >
                        <option value="">Select a service</option>
                        <option>Customer Support & Sales</option>
                        <option>Back Office Services</option>
                        <option>IT Helpdesk</option>
                        <option>Data Management</option>
                        <option>Outsourcing Solutions</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements — team size, volumes, services needed, timeline..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-slate-900 text-sm transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-green-600 
                                  font-medium py-2">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    We respond within 24 hours — guaranteed
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.email || !form.message}
                    className="w-full bg-orange-500 hover:bg-orange-600 
                               disabled:bg-orange-200 disabled:cursor-not-allowed 
                               text-white font-semibold py-4 px-6 rounded-xl 
                               transition-all duration-200 shadow-md hover:shadow-lg 
                               hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                  <a href="https://wa.me/919972135467" target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-center gap-2 w-full mt-3 
                                py-3.5 px-6 rounded-xl border-2 border-green-500 
                                text-green-600 font-semibold hover:bg-green-50 
                                transition-all duration-200 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Or chat on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Map Placeholder */}
      <SectionWrapper bg="gray">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-orange-50 h-72 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center relative">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mx-auto shadow-lg">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Jupiter BPO Services</h3>
              <p className="text-slate-500 text-sm">Bangalore | Gulbarga, Karnataka, India</p>
            </div>
            <a
              href="https://maps.google.com/?q=Bangalore+Karnataka+India"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5 inline-flex items-center gap-2"
            >
              Open in Maps <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
