import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.jpg" alt="TheFoxLabs" width={30} height={30} className="rounded-md" />
              <span className="font-display text-lg font-semibold">
                the<span className="text-crimson">fox</span>labs
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Building AI, web & software solutions for modern businesses.
              Remote studio, worldwide delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <div className="font-mono text-[11px] tracking-wide text-gold/70">NAVIGATE</div>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-wide text-gold/70">CONTACT</div>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="text-sm text-muted transition-colors hover:text-ink">
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a href={CONTACT.whatsapp} className="text-sm text-muted transition-colors hover:text-ink">
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:justify-between">
          <span className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} TheFoxLabs. All rights reserved.
          </span>
          <a
            href="#top"
            data-cursor-hover
            className="flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink"
          >
            Back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
