import SiteHeader from "@/components/layout/SiteHeader";
import Hero from "@/components/home/Hero";
import EmotionalStatement from "@/components/home/EmotionalStatement";
import DestinationsScroll from "@/components/home/DestinationsScroll";
import Experiences from "@/components/home/Experiences";
import JourneyMap from "@/components/home/JourneyMap";
import UmrahTeaser from "@/components/home/UmrahTeaser";
import Testimonials from "@/components/layout/Testimonials";
import CTA from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";


const formatName = (text) => {
  return text
    .replace(/_/g, " ")          // replace underscores with spaces
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// shaukh-e-safar_travels
// al-noor_travels
// zamzam_travels

export default async function Home( {params} ) {

  const {slug} = await params
  const businessName = formatName(slug);

  return (
    <main className="bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f7f1e8_45%,_#efe6d7_100%)]">
      <SiteHeader variant="light" slug={slug} businessName={businessName} />
      <Hero businessName={businessName} />
      <EmotionalStatement />
      <DestinationsScroll />
      <Experiences />
      <JourneyMap />
      <UmrahTeaser />
      <Testimonials />
      <CTA slug={slug} />
      <Footer businessName={businessName} slug={slug} />
    </main>
  );
}
