"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-2.5" data-cursor-hover>
            <Image
              src="/logo.jpg"
              alt="TheFoxLabs"
              width={32}
              height={32}
              className="rounded-md"
              priority
            />
            <span className="font-display text-lg font-semibold tracking-tight">
              the<span className="text-crimson">fox</span>labs
            </span>
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                className="font-mono text-[13px] tracking-wide text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            data-cursor-hover
            className="hidden rounded-full bg-crimson px-5 py-2.5 font-mono text-[13px] font-medium text-ink transition-transform hover:scale-105 lg:inline-block"
          >
            Book a Call
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(true)}
            className="p-2 text-ink lg:hidden"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex flex-col bg-void/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg font-semibold">
                the<span className="text-crimson">fox</span>labs
              </span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className="font-display text-3xl font-medium text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-crimson px-8 py-3 font-mono text-sm text-ink"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
