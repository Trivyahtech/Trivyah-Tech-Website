import { services } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="shell py-16 lg:py-20">
      <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.titleLines} />
      <div className="grid gap-6 pt-16 lg:grid-cols-2">
        {services.items.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
