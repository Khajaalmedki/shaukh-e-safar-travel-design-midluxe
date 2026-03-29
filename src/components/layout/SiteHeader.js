 "use client";

import { useState } from "react";
import Link from "next/link";
//import siteConfig from "@/siteConfig";

export default function SiteHeader({ variant = "light", slug, businessName }) {
  const isLight = variant === "light";
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { label: "Home", href: `/${slug}` },
    { label: "Umrah", href: `/${slug}/umrah` },
    { label: "Packages", href: `/${slug}/packages` },
    { label: "Our Story", href: `/${slug}/our-story` },
    { label: "Contact", href: `/${slug}/contact` },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 lg:px-10">
        <Link
          href={`/${slug}/`}
          className={`text-lg uppercase tracking-[0.3em] ${
            isLight ? "text-neutral-100" : "text-neutral-900"
          }`}
        >
          {businessName}
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex h-10 w-10 items-center justify-center border ${
            isLight
              ? "border-neutral-100/60 text-neutral-100"
              : "border-neutral-300 text-neutral-900"
          } md:hidden`}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open menu</span>
          <span className="flex h-4 w-5 flex-col justify-between">
            <span
              className={`block h-px w-full transition ${
                isLight ? "bg-neutral-100" : "bg-neutral-900"
              } ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-full transition ${
                isLight ? "bg-neutral-100" : "bg-neutral-900"
              } ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-full transition ${
                isLight ? "bg-neutral-100" : "bg-neutral-900"
              } ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
        <nav
          className={`hidden items-center gap-8 text-sm uppercase tracking-[0.2em] md:flex ${
            isLight ? "text-neutral-100/80" : "text-neutral-600"
          }`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                isLight ? "hover:text-neutral-100" : "hover:text-neutral-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } transition-opacity duration-300`}
      >
        <div
          className={`mx-6 rounded-3xl border px-6 py-6 ${
            isLight
              ? "border-neutral-100/30 bg-neutral-950/84 text-neutral-100"
              : "border-neutral-200 bg-white text-neutral-900"
          }`}
        >
          <nav className="flex flex-col gap-6 text-xs uppercase tracking-[0.3em]">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
