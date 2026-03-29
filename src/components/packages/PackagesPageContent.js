"use client";

import { useEffect, useMemo, useState } from "react";
import siteConfig from "@/siteConfig";

export default function PackagesPageContent() {
  const [activePackage, setActivePackage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const packageIndex = useMemo(() => {
    const map = new Map();
    siteConfig.packagesPage.categories.forEach((category) => {
      category.packages.forEach((pkg) => {
        map.set(pkg.id, { ...pkg, category: category.title });
      });
    });
    return map;
  }, []);

  useEffect(() => {
    if (!activePackage) return undefined;

    setIsVisible(false);
    const frame = requestAnimationFrame(() => setIsVisible(true));

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setActivePackage(null);
      }
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activePackage]);

  const openPackage = (pkg) => {
    const payload = packageIndex.get(pkg.id) || pkg;
    setActivePackage(payload);
  };

  return (
    <section className="px-6 py-28 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
          Packages
        </p>
        <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[0.15em] text-neutral-900">
          {siteConfig.packagesPage.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          {siteConfig.packagesPage.intro}
        </p>

        <div className="mt-16 space-y-16">
          {siteConfig.packagesPage.categories.map((category) => (
            <div key={category.id} id={category.id}>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                    {category.title}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm text-neutral-600">
                    {category.tone}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                {category.packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => openPackage(pkg)}
                    className="group text-left"
                  >
                    <div className="relative h-[320px] overflow-hidden rounded-3xl border border-neutral-200">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${pkg.images[0]})` }}
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="relative z-10 flex h-full flex-col justify-end p-8 text-neutral-100">
                        <p className="text-xs uppercase tracking-[0.4em] text-neutral-200/80">
                          {pkg.duration}
                        </p>
                        <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[0.12em]">
                          {pkg.title}
                        </h3>
                        <p className="mt-3 text-sm text-neutral-200/90">
                          {pkg.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                      <span>{pkg.price}</span>
                      <span>{pkg.rating} Rating</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
                      {pkg.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-neutral-200 px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activePackage ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <button
            type="button"
            aria-label="Close package details"
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setActivePackage(null)}
          />
          <div
            className={`relative z-10 w-full max-w-5xl rounded-t-3xl border border-neutral-200 bg-white shadow-2xl transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ maxHeight: "90vh" }}
          >
            <div className="elegant-scroll max-h-[90vh] overflow-y-auto px-8 pb-12 pt-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                    {activePackage.category}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.12em] text-neutral-900">
                    {activePackage.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePackage(null)}
                  className="text-xs uppercase tracking-[0.3em] text-neutral-500"
                >
                  Close
                </button>
              </div>

              <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
                {activePackage.images.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="h-48 w-72 flex-none overflow-hidden rounded-2xl border border-neutral-200"
                  >
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-sm text-neutral-600">
                    {activePackage.longDescription || activePackage.description}
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Highlights
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {activePackage.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm text-neutral-700"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Activities
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {activePackage.activities.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm text-neutral-700"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">
                    <span>{activePackage.duration}</span>
                    <span>{activePackage.rating} Rating</span>
                  </div>
                  <p className="mt-6 text-2xl font-semibold text-neutral-900">
                    {activePackage.price}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {activePackage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-200 bg-white px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
