import { DetailHero } from "@/components/detail/DetailHero";
import { FeatureGrid } from "@/components/detail/FeatureGrid";
import { ProcessSteps } from "@/components/detail/ProcessSteps";
import { StatCards } from "@/components/detail/StatCards";
import { BrandsGrown } from "@/components/marketing/BrandsGrown";
import { CallToAction } from "@/components/sections/CallToAction";
import { Faq } from "@/components/sections/Faq";
import { cta, faq, hero, meta, process, services, successStories } from "@/lib/marketing";

export const metadata = {
  title: meta.title,
  description: meta.description,
};

export default function MarketingPage() {
  return (
    <>
      <DetailHero {...hero} />
      <FeatureGrid id="what-we-do" {...services} />
      <ProcessSteps id="process" {...process} />
      <StatCards id="success-stories" {...successStories} />
      <BrandsGrown />
      <Faq {...faq} layout="centered" />
      <CallToAction content={cta} className="lg:pt-32" />
    </>
  );
}
