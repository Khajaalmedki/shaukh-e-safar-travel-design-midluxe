import Link from "next/link";
import siteConfig from "@/siteConfig";

export default function CTA( {slug} ) {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-neutral-100 lg:px-10"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="geo-border h-full w-full" />
      </div>
      <div className="relative mx-auto w-full max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
          Concierge
        </p>
        <h2 className="mt-4 text-4xl font-semibold uppercase tracking-[0.15em]">
          {siteConfig.cta.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-neutral-300">
          {siteConfig.cta.body}
        </p>
        <Link
          href={`/${slug}/contact`}
          className="mt-10 inline-flex border border-neutral-100 px-8 py-4 text-xs uppercase tracking-[0.3em] transition hover:bg-neutral-100 hover:text-neutral-900"
        >
          {siteConfig.cta.button.label}
        </Link>
      </div>
    </section>
  );
}
