import { DetailHero } from "@/components/detail/DetailHero";
import { FeatureGrid } from "@/components/detail/FeatureGrid";
import { ProcessSteps } from "@/components/detail/ProcessSteps";
import { StatCards } from "@/components/detail/StatCards";
import { AiSolutions } from "@/components/development/AiSolutions";
import { BuiltDeployed } from "@/components/development/BuiltDeployed";
import { TechStack } from "@/components/development/TechStack";
import { CallToAction } from "@/components/sections/CallToAction";
import { Faq } from "@/components/sections/Faq";
import { capabilities, caseStudies, cta, faq, hero, meta, process } from "@/lib/development";

export const metadata = {
  title: meta.title,
  description: meta.description,
};

export default function DevelopmentPage() {
  return (
    <>
      <DetailHero {...hero} />
      <FeatureGrid id="capabilities" {...capabilities} />
      <AiSolutions />
      <ProcessSteps id="process" {...process} arrows />
      <TechStack />
      <StatCards id="case-studies" {...caseStudies} />
      <BuiltDeployed />
      <Faq {...faq} layout="centered" />
      <CallToAction content={cta} className="lg:pt-32" />
    </>
  );
}
