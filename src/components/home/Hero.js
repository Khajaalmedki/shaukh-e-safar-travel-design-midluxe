"use client";

import { useEffect, useRef } from "react";
import siteConfig from "@/siteConfig";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero( {businessName} ) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!imageRef.current || !sectionRef.current) return;

      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate min-h-screen overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 z-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${siteConfig.hero.image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
      <div className="absolute inset-0 z-10 opacity-40 mix-blend-screen">
        <div className="geo-border h-full w-full" />
      </div>

      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-40 text-neutral-100 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-left">
            <p className="text-xs uppercase tracking-[0.5em] text-neutral-200/80">
              {siteConfig.hero.overline}
            </p>
            <p className="mt-6 font-arabic text-xl tracking-[0.4em] text-neutral-100/70">
              {siteConfig.arabicAccent}
            </p>
            <h1 className="mt-6 max-w-2xl text-5xl font-semibold uppercase tracking-[0.16em] sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-[#c9a26b] via-[#e2c38b] to-[#f4e4c2] bg-clip-text text-transparent">
                {businessName}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-200/95">
              {siteConfig.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 text-sm uppercase tracking-[0.25em]">
              <Link
                href={siteConfig.hero.primaryCta.href}
                className="border border-neutral-100 px-8 py-4 transition hover:bg-neutral-100 hover:text-neutral-900"
              >
                {siteConfig.hero.primaryCta.label}
              </Link>
              <Link
                href={siteConfig.hero.secondaryCta.href}
                className="border border-neutral-100/40 px-8 py-4 text-neutral-100/80 transition hover:border-neutral-100 hover:text-neutral-100"
              >
                {siteConfig.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-neutral-100/20 bg-neutral-950/40 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
              <p className="relative text-xs uppercase tracking-[0.4em] text-neutral-300">
                The Atelier Promise
              </p>
              <ul className="relative mt-8 space-y-6 text-sm text-neutral-200/90">
                {siteConfig.hero.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 h-2 w-2 rounded-full bg-neutral-100" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6 rounded-3xl border border-neutral-100/20 bg-neutral-950/30 p-8 text-xs uppercase tracking-[0.3em] text-neutral-300 sm:grid-cols-3">
              {siteConfig.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-neutral-100">{stat.value}</p>
                  <p className="mt-3 text-neutral-300/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
