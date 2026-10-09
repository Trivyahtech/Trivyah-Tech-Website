import { DetailSection } from "@/components/layout/DetailSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Three headline results ("Featured Case Studies", "Success Stories"). */
export function StatCards({ id, title, items }) {
  return (
    <DetailSection id={id} labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} title={title} size="section" />
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <li key={item.client} className="flex flex-col rounded-card border border-white/10 bg-surface/60 p-6">
            <p className="font-display text-title font-bold text-fg">{item.stat}</p>
            <h3 className="mt-4.5 font-display text-lg/6 font-semibold tracking-[-0.025em] text-fg">{item.client}</h3>
            <p className="mt-2.5 text-b3 text-muted">{item.summary}</p>
          </li>
        ))}
      </ul>
    </DetailSection>
  );
}
