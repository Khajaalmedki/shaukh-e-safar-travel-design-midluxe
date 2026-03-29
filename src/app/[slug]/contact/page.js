import SiteHeader from "@/components/layout/SiteHeader";
import ContactSection from "@/components/contact/ContactSection";
import CTA from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";

const formatName = (text) => {
  return text
    .replace(/_/g, " ")          // replace underscores with spaces
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default async function ContactPage( {params} ) {

  const {slug} = await params
  const businessName = formatName(slug);

  return (
    <main className="relative bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f7f1e8_45%,_#efe6d7_100%)]">
      <SiteHeader variant="dark" slug={slug} businessName={businessName} />
      <div className="pt-24">
        <ContactSection />
        <CTA />
      </div>
      <Footer businessName={businessName} slug={slug} />
    </main>
  );
}
