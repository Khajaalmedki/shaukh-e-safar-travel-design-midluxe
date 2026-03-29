"use client";

import { useEffect, useRef } from "react";
import siteConfig from "@/siteConfig";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function JourneyMap() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const path = pathRef.current;
      if (!path) return;

      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-neutral-100 lg:px-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
              {siteConfig.journeyMap.heading}
            </p>
            <h2 className="mt-4 text-4xl font-semibold uppercase tracking-[0.15em]">
              {siteConfig.journeyMap.body}
            </h2>
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-[0.3em] text-neutral-400">
            {siteConfig.journeyMap.milestones.map((milestone) => (
              <span key={milestone}>{milestone}</span>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-neutral-800 bg-neutral-900/30 p-10">
          <svg
            viewBox="0 0 900 240"
            className="h-48 w-full"
            fill="none"
          >
            <path
              ref={pathRef}
              d="M20 200 C140 40, 300 40, 420 180 S700 220, 880 80"
              stroke="currentColor"
              strokeWidth="2"
              className="text-neutral-200"
            />
            <circle cx="20" cy="200" r="6" className="fill-neutral-200" />
            <circle cx="420" cy="180" r="6" className="fill-neutral-200" />
            <circle cx="880" cy="80" r="6" className="fill-neutral-200" />
          </svg>
        </div>
      </div>
    </section>
  );
}
