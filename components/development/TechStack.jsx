import { techStack } from "@/lib/development";
import { DetailSection } from "@/components/layout/DetailSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function TechStack() {
  return (
    <DetailSection id="stack" labelledBy="stack-title" className="lg:pb-[75px]">
      <SectionHeading id="stack-title" title={techStack.title} size="section" />
      <ul className="mt-[35px] flex flex-wrap gap-x-3 gap-y-0.5">
        {techStack.items.map((item) => (
          <Tag key={item} size="md">
            {item}
          </Tag>
        ))}
      </ul>
    </DetailSection>
  );
}
