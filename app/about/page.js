import { AboutStory } from "@/components/about/AboutStory";
import { DetailHero } from "@/components/detail/DetailHero";
import { FeatureGrid } from "@/components/detail/FeatureGrid";
import { CallToAction } from "@/components/sections/CallToAction";
import { cta, hero, meta, values } from "@/lib/about";

export const metadata = {
  title: meta.title,
  description: meta.description,
};

export default function AboutPage() {
  return (
    <>
      <DetailHero {...hero} />
      <AboutStory />
      <FeatureGrid id="values" {...values} columns="md:grid-cols-2 lg:grid-cols-4" />
      <CallToAction content={cta} className="lg:pt-32" />
    </>
  );
}
