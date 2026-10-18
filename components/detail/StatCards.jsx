import { cn } from "@/lib/cn";
import { DetailSection } from "@/components/layout/DetailSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Column count follows the number of results.
const columns = { 1: "md:max-w-sm", 2: "md:grid-cols-2", 3: "md:grid-cols-3" };

/** Headline results ("Featured Case Studies", "Success Stories"). */
export function StatCards({ id, title, items }) {
  return (
    <DetailSection id={id} labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} title={title} size="section" />
      <ul className={cn("mt-10 grid gap-5", columns[items.length] ?? "md:grid-cols-3")}>
        {items.map((item) => (
          <li key={item.client} className="flex flex-col rounded-card border border-white/10 bg-surface/60 p-6">
            <p className="font-display text-title font-bold text-fg">{item.stat}</p>
            <h3 className="mt-4.5 font-display text-lg/6 font-semibold text-fg">{item.client}</h3>
            <p className="mt-2.5 text-b3 text-muted">{item.summary}</p>
          </li>
        ))}
      </ul>
    </DetailSection>
  );
}
