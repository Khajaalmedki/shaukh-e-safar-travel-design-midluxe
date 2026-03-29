"use client";

import { useEffect, useRef } from "react";
import siteConfig from "@/siteConfig";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DestinationsScroll() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getScrollAmount = () => track.scrollWidth - section.offsetWidth;

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",

        scrollTrigger: {
          // 🔥 NEW: Trigger pinned scroll by the actual card-row container
          trigger: track,

          // Scroll starts when the card-row itself enters the viewport
          start: "bottom bottom",

          // Horizontal scroll distance
          end: () => `+=${track.scrollWidth}`,

          scrub: 1,
          pin: section,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="relative overflow-hidden bg-neutral-950 py-24 text-neutral-100"
    >
      <div className="mx-auto mb-12 flex w-full max-w-6xl items-end justify-between px-6 lg:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
            Destinations
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold uppercase tracking-[0.15em]">
            Handpicked for hush and wonder
          </h2>
        </div>
        <p className="hidden max-w-sm text-sm text-neutral-400 lg:block">
          Each destination is curated for sensory calm, architectural beauty,
          and cinematic light.
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex gap-8 px-6 pb-10 will-change-transform lg:px-10"
      >
        {siteConfig.destinations.map((destination) => (
          <article
            key={destination.name}
            className="relative h-[420px] w-[300px] flex-none overflow-hidden border border-neutral-700 bg-neutral-900/60"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${destination.image})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-300">
                {destination.region}
              </p>
              <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.1em]">
                {destination.name}
              </h3>
              <p className="mt-3 text-sm text-neutral-200/80">
                {destination.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}