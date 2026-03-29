import siteConfig from "@/siteConfig";

export default function ContactSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24 lg:px-10">
      <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
        Contact
      </p>
      <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[0.15em] text-neutral-900">
        {siteConfig.contact.heading}
      </h1>
      <p className="mt-6 text-lg text-neutral-600">{siteConfig.contact.body}</p>
      <div className="mt-10 grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Email
          </p>
          <p className="mt-3 text-sm text-neutral-700">
            {siteConfig.contact.email}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Phone
          </p>
          <p className="mt-3 text-sm text-neutral-700">
            {siteConfig.contact.phone}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Presence
          </p>
          <p className="mt-3 text-sm text-neutral-700">
            {siteConfig.contact.location}
          </p>
        </div>
      </div>
    </section>
  );
}
