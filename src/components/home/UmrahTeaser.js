import Link from "next/link";
import siteConfig from "@/siteConfig";

export default function UmrahTeaser() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${siteConfig.umrah.image})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-neutral-900/30" />
          <div className="relative z-10 p-10 text-neutral-100">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-200/80">
              Umrah
            </p>
            <h3 className="mt-4 text-3xl font-semibold uppercase tracking-[0.15em]">
              {siteConfig.umrah.title}
            </h3>
            <p className="mt-4 text-sm text-neutral-200/80">
              {siteConfig.umrah.subtitle}
            </p>
            <Link
              href="/umrah"
              className="mt-8 inline-flex border border-neutral-200 px-6 py-3 text-xs uppercase tracking-[0.3em] transition hover:bg-neutral-100 hover:text-neutral-900"
            >
              Discover Umrah
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <p className="font-arabic text-lg tracking-[0.4em] text-neutral-500">
            {siteConfig.arabicAccent}
          </p>
          <h3 className="text-3xl font-semibold uppercase tracking-[0.15em] text-neutral-900">
            A calm, guided passage
          </h3>
          <p className="text-sm text-neutral-600">
            Every element is designed to preserve serenity, from prayer-centric
            pacing to private transport and restorative spaces.
          </p>
          <ul className="space-y-4 text-sm text-neutral-700">
            {siteConfig.umrah.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
