import siteConfig from "@/siteConfig";

export default function StorySection( {businessName}) {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24 lg:px-10">
      <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
        Our Story
      </p>
      <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[0.15em] text-neutral-900">
        {siteConfig.story.heading}
      </h1>
      <p className="mt-6 text-lg text-neutral-600">{businessName} {siteConfig.story.body}</p>

      <div className="mt-10 grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-3">
        {siteConfig.story.values.map((value) => (
          <div key={value} className="text-sm text-neutral-700">
            {value}
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {siteConfig.story.founders.map((founder) => (
          <div
            key={founder.name}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              {founder.role}
            </p>
            <h3 className="mt-4 text-xl font-semibold uppercase tracking-[0.12em] text-neutral-900">
              {founder.name}
            </h3>
            <p className="mt-4 text-sm text-neutral-600">{founder.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 border-t border-neutral-200 pt-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Timeline
          </p>
          <div className="mt-6 space-y-6">
            {siteConfig.story.timeline.map((item) => (
              <div key={item.year} className="text-sm text-neutral-700">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {item.year}
                </p>
                <p className="mt-2">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-10">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Manifesto
          </p>
          <ul className="mt-6 space-y-4 text-sm text-neutral-700">
            {siteConfig.story.manifesto.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${siteConfig.story.studio.image})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-neutral-900/35" />
          <div className="relative z-10 flex h-full flex-col justify-end p-10 text-neutral-100">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-200/80">
              {siteConfig.story.studio.title}
            </p>
            <p className="mt-4 text-sm text-neutral-200/90">
              {siteConfig.story.studio.description}
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-neutral-200 p-10">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Craft Process
          </p>
          <ul className="mt-6 space-y-4 text-sm text-neutral-700">
            {siteConfig.story.process.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
