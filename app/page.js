import { ContactSection } from "@/components/sections/ContactSection";
// Hidden until the client video review is ready (in editing).
// import { ClientStories } from "@/components/sections/ClientStories";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
// Hidden until we start posting again ("Journey to Freedom" videos).
// import { InsideTrivyah } from "@/components/sections/InsideTrivyah";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { faq } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* <InsideTrivyah /> */}
      <SelectedWork />
      {/* <ClientStories /> */}
      <Faq {...faq} />
      <ContactSection />
    </>
  );
}
