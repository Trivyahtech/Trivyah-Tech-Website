import { brands } from "@/lib/marketing";
import { DetailSection } from "@/components/layout/DetailSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandCaseCard } from "./BrandCaseCard";

export function BrandsGrown() {
  return (
    <DetailSection id="brands" labelledBy="brands-title">
      <SectionHeading
        id="brands-title"
        eyebrow={brands.eyebrow}
        title={brands.title}
        description={brands.description}
        size="section"
        className="gap-4"
        descriptionClassName="-mt-1.5 max-w-[640px] text-b2 leading-6"
      />
      <ul className="mt-12 grid items-start gap-6 lg:grid-cols-2">
        {brands.items.map((item) => (
          <BrandCaseCard key={item.title} {...item} />
        ))}
      </ul>
    </DetailSection>
  );
}
