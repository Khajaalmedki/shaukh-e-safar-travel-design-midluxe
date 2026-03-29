import siteConfig from "@/siteConfig";

export default function EmotionalStatement() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24 text-center lg:px-10">
      <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
        {siteConfig.tagline}
      </p>
      <h2 className="mt-6 text-4xl font-semibold uppercase tracking-[0.15em] text-neutral-900">
        {siteConfig.emotionalStatement.heading}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
        {siteConfig.emotionalStatement.body}
      </p>
    </section>
  );
}
