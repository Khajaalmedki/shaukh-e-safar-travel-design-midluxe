import Link from "next/link";
import siteConfig from "@/siteConfig";

export default function Footer( {businessName, slug} ) {

  const nav = [
    { label: "Home", href: `/${slug}` },
    { label: "Umrah", href: `/${slug}/umrah` },
    { label: "Packages", href: `/${slug}/packages` },
    { label: "Our Story", href: `/${slug}/our-story` },
    { label: "Contact", href: `/${slug}/contact` },
  ];

  return (
    <footer className="bg-neutral-950 px-6 py-16 text-neutral-400 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg uppercase tracking-[0.3em] text-neutral-100">
            {businessName}
          </p>
          <p className="mt-4 max-w-sm text-sm text-neutral-400">
            {siteConfig.footer.note}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-neutral-400">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-neutral-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
