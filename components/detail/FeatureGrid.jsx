import { DetailSection } from "@/components/layout/DetailSection";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";

function FeatureCard({ icon, title, description }) {
  return (
    <li className="flex flex-col rounded-card border border-white/10 bg-surface/60 p-6">
      <IconTile icon={icon} />
      <h3 className="mt-6 font-display text-lg/6 font-semibold tracking-[-0.025em] text-fg">{title}</h3>
      <p className="mt-2 text-b3 text-muted">{description}</p>
    </li>
  );
}

/** 3-column grid of icon cards ("Capabilities", "What We Do"). */
export function FeatureGrid({ id, title, items }) {
  return (
    <DetailSection id={id} labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} title={title} size="section" />
      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </ul>
    </DetailSection>
  );
}
