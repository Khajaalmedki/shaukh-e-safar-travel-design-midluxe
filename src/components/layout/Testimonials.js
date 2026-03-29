import siteConfig from "@/siteConfig";

export default function Testimonials() {
  return (
    <section className="bg-stone-100 px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
          Testimonials
        </p>
        <h2 className="mt-4 text-4xl font-semibold uppercase tracking-[0.15em] text-neutral-900">
          Voices from the journey
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {siteConfig.testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="border border-neutral-200 bg-white p-8"
            >
              <blockquote className="text-sm text-neutral-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
                {testimonial.name}
              </figcaption>
              <p className="mt-2 text-xs text-neutral-400">
                {testimonial.title}
              </p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
