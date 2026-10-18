import { aim, intro } from "@/lib/about";
import { DetailSection } from "@/components/layout/DetailSection";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** "Who we are" intro followed by the Mission and Vision cards. */
export function AboutStory() {
  return (
    <>
      <DetailSection id="who-we-are" labelledBy="who-we-are-title">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <SectionHeading id="who-we-are-title" title={intro.title} size="section" />
          <div className="flex flex-col gap-5">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-b1 leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </DetailSection>

      <DetailSection id="aim" labelledBy="aim-title">
        <SectionHeading id="aim-title" title={aim.title} size="section" />
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {aim.items.map(({ icon, label, text }) => (
            <li key={label} className="flex flex-col rounded-card border border-white/10 bg-surface/60 p-6 md:p-8">
              <IconTile icon={icon} />
              <h3 className="mt-6 font-display text-h6 font-semibold text-fg">{label}</h3>
              <p className="mt-3 text-b2 text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </DetailSection>
    </>
  );
}
