import siteConfig from "@/siteConfig";

export default function Experiences() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Experiences
          </p>
          <h2 className="mt-4 text-4xl font-semibold uppercase tracking-[0.15em] text-neutral-900">
            Crafted with restraint and reverence
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            We choreograph each experience with calm pacing, private
            environments, and unhurried transitions.
          </p>
        </div>
        <div className="space-y-8">
          {siteConfig.packages.map((experience) => (
            <div
              key={experience.title}
              className="border-l border-neutral-200 pl-6"
            >
              <h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-neutral-900">
                {experience.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-600">
                {experience.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
