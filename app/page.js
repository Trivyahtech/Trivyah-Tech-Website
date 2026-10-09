import { CallToAction } from "@/components/sections/CallToAction";
import { ClientStories } from "@/components/sections/ClientStories";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { InsideTrivyah } from "@/components/sections/InsideTrivyah";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { faq } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <InsideTrivyah />
      <SelectedWork />
      <ClientStories />
      <Faq {...faq} />
      <CallToAction />
    </>
  );
}
