"use client";

import { FormEvent, useState } from "react";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";
import { CONTACT } from "@/lib/data";

const SERVICE_OPTIONS = [
  "Website Development",
  "Shopify Development",
  "AI Automation",
  "SaaS Development",
  "Mobile App Development",
  "UI/UX Design",
  "Branding & Graphics",
  "Website Maintenance",
  "SEO & Digital Growth",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    service: SERVICE_OPTIONS[0],
    details: "",
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry: ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nService: ${form.service}\n\nDetails:\n${form.details}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Get In Touch"
          title="Let's build something worth shipping."
          description="Most enquiries get a personal reply within 24–72 hours — no ticket queues, no auto-responders."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <RevealOnScroll className="flex flex-col gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              data-cursor-hover
              className="facet glass group flex items-center gap-4 p-6 transition-colors hover:border-crimson/30"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[11px] tracking-wide text-muted">EMAIL</div>
                <div className="truncate font-medium">{CONTACT.email}</div>
              </div>
            </a>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="facet glass group flex items-center gap-4 p-6 transition-colors hover:border-crimson/30"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                <MessageCircle size={18} />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[11px] tracking-wide text-muted">WHATSAPP</div>
                <div className="font-medium">{CONTACT.phoneDisplay}</div>
              </div>
            </a>

            <MagneticButton
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="facet glass-strong group flex items-center gap-4 border border-gold/25 p-6"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <PhoneCall size={18} />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[11px] tracking-wide text-muted">
                  BOOK A CALL
                </div>
                <div className="font-medium">Message us a time that works</div>
              </div>
            </MagneticButton>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass facet-lg relative overflow-hidden space-y-5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(228,40,58,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(212,175,122,0.16),transparent_35%)]" />
              <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name">
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    className="input border-white/10 bg-white/[0.04] shadow-inner shadow-black/20"
                  />
                </Field>
                <Field label="Company">
                  <input
                    value={form.company}
                    onChange={update("company")}
                    className="input border-white/10 bg-white/[0.04] shadow-inner shadow-black/20"
                  />
                </Field>
              </div>

              <div className="relative">
                <Field label="Email Address">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className="input border-white/10 bg-white/[0.04] shadow-inner shadow-black/20"
                  />
                </Field>
              </div>

              <div className="relative">
                <Field label="Service Interested In">
                  <div className="relative">
                    <select
                      value={form.service}
                      onChange={update("service")}
                      className="input appearance-none border-white/10 bg-obsidian/80 pr-10 text-ink shadow-inner shadow-black/20"
                    >
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} className="bg-obsidian text-ink">
                          {s}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gold">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-4 w-4"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-1 rounded-2xl border border-gold/30 bg-gold/10 px-3 py-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">
                      Selected Service
                    </span>
                    <span className="text-sm font-medium text-ink">{form.service}</span>
                  </div>
                </Field>
              </div>

              <div className="relative">
                <Field label="Project Details">
                  <textarea
                    value={form.details}
                    onChange={update("details")}
                    rows={4}
                    placeholder="Tell us a bit about what you're trying to build..."
                    className="input resize-y border-white/10 bg-white/[0.04] shadow-inner shadow-black/20"
                  />
                </Field>
              </div>

              <button
                type="submit"
                data-cursor-hover
                className="relative w-full overflow-hidden rounded-full bg-gradient-to-r from-crimson via-crimson to-crimson-deep py-3.5 font-mono text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(228,40,58,0.35)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent opacity-70" />
                <span className="relative">Submit Project Request</span>
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
