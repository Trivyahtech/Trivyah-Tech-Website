import { contact, site } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="shell scroll-mt-24 pb-20">
      <div className="relative grid gap-12 overflow-hidden rounded-panel border border-white/10 bg-surface/40 px-6 py-12 backdrop-blur-md md:px-10 md:py-16 lg:mx-6 lg:grid-cols-[1fr_1.4fr]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-0 h-64 w-[560px] max-w-full rounded-full bg-white/8 blur-[60px]"
        />
        <div className="relative flex flex-col gap-8">
          <SectionHeading
            id="contact-title"
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
            className="gap-4"
            descriptionClassName="max-w-[440px] text-b1 leading-7"
          />
          <ul className="flex flex-col gap-4">
            <li className="flex">
              <TextLink href={`mailto:${site.email}`} icon="mail">
                {site.email}
              </TextLink>
            </li>
            <li className="flex">
              <TextLink href={site.phoneHref} icon="phone">
                {site.phone}
              </TextLink>
            </li>
          </ul>
        </div>
        <div className="relative">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
