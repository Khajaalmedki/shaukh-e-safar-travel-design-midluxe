"use client";

import { useEffect, useRef } from "react";
import siteConfig from "@/siteConfig";
import { gsap } from "gsap";

export default function UmrahPageContent() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        opacity: 0,
        y: 24,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-28 lg:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p
              data-reveal
              className="font-arabic text-lg tracking-[0.4em] text-neutral-500"
            >
              {siteConfig.arabicAccent}
            </p>
            <h1
              data-reveal
              className="mt-6 text-4xl font-semibold uppercase tracking-[0.15em] text-neutral-900"
            >
              {siteConfig.umrah.title}
            </h1>
            <p data-reveal className="mt-6 text-lg text-neutral-600">
              {siteConfig.umrah.subtitle}
            </p>
            <p data-reveal className="mt-6 text-sm text-neutral-600">
              {siteConfig.umrah.overview}
            </p>
          </div>
          <div
            data-reveal
            className="relative overflow-hidden rounded-3xl border border-neutral-200"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${siteConfig.umrah.image})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-neutral-900/35" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8 text-neutral-100">
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-200/80">
                Sacred Passage
              </p>
              <p className="mt-4 text-sm text-neutral-200/90">
                Reverent, guided, and unhurried.
              </p>
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="mt-16 rounded-3xl border border-neutral-200 bg-neutral-50 p-10"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            What awaits
          </p>
          <ul className="mt-6 space-y-4 text-sm text-neutral-700">
            {siteConfig.umrah.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div data-reveal className="rounded-3xl border border-neutral-200 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              Sacred Rituals
            </p>
            <ul className="mt-6 space-y-4 text-sm text-neutral-700">
              {siteConfig.umrah.rituals.map((ritual) => (
                <li key={ritual} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" />
                  <span>{ritual}</span>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="rounded-3xl border border-neutral-200 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              Essentials Included
            </p>
            <ul className="mt-6 space-y-4 text-sm text-neutral-700">
              {siteConfig.umrah.essentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-reveal className="mt-16">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            A Gentle Itinerary
          </p>
          <div className="mt-6 grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-2">
            {siteConfig.umrah.itinerary.map((item) => (
              <div
                key={item.day}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {item.day}
                </p>
                <p className="mt-4 text-sm text-neutral-700">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-reveal className="rounded-3xl border border-neutral-200 p-10">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              Preparation
            </p>
            <p className="mt-6 text-sm text-neutral-600">
              {siteConfig.umrah.care}
            </p>
            <ul className="mt-6 space-y-4 text-sm text-neutral-700">
              {siteConfig.umrah.preparation.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            data-reveal
            className="rounded-3xl border border-neutral-200 bg-neutral-50 p-10"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              Sacred Care
            </p>
            <p className="mt-6 text-sm text-neutral-600">
              Quiet coordination, prayer‑centric pacing, and discreet support so
              you can remain focused on intention and remembrance.
            </p>
            <div className="mt-8 grid gap-6 text-sm text-neutral-700">
              <div>Dedicated concierge and scholar coordination.</div>
              <div>Rest‑first transitions and gentle transportation.</div>
              <div>Hotel sanctuaries close to the Haram.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
