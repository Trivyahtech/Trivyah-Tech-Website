import { ai } from "@/lib/development";
import { DetailSection } from "@/components/layout/DetailSection";
import { Button } from "@/components/ui/Button";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepCard } from "@/components/detail/StepCard";

function SolutionCard({ icon, title, description, points }) {
  return (
    <li className="flex flex-col rounded-card border border-white/10 bg-surface/60 px-[27px] pt-[27px] pb-6">
      <IconTile icon={icon} size="lg" />
      <h3 className="mt-5 font-display text-h7 leading-7 font-semibold text-fg">{title}</h3>
      <p className="mt-2 text-[15px]/[23px] text-muted">{description}</p>
      <ul className="mt-4 flex flex-col">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-2.5 text-[13px]/[23.5px] text-fg/80">
            <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-muted" />
            {point}
          </li>
        ))}
      </ul>
    </li>
  );
}

function AutomationStrip({ title, body, cta }) {
  return (
    <div className="mt-12 flex flex-col items-start gap-6 rounded-card border border-white/12 bg-linear-to-r from-white/3 to-white/1 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-8 md:py-8">
      <div>
        <p className="font-display text-h7 leading-7 font-semibold text-fg">{title}</p>
        <p className="mt-1 text-b3 text-muted">{body}</p>
      </div>
      <Button href={cta.href} size="sm" font="body" icon="arrow-right" className="shrink-0">
        {cta.label}
      </Button>
    </div>
  );
}

export function AiSolutions() {
  return (
    <DetailSection id="ai" labelledBy="ai-title" className="lg:py-24">
      <SectionHeading
        id="ai-title"
        eyebrow={ai.eyebrow}
        eyebrowIcon={ai.eyebrowIcon}
        title={ai.title}
        description={ai.body}
        size="lead"
        className="gap-4"
        titleClassName="mt-0.5"
        descriptionClassName="max-w-[656px] text-b1 leading-7"
      />

      <ul className="mt-12 grid gap-5 lg:grid-cols-3">
        {ai.solutions.map((solution) => (
          <SolutionCard key={solution.title} {...solution} />
        ))}
      </ul>

      <h3 className="mt-16 font-display text-2xl/8 font-bold text-fg">{ai.stepsTitle}</h3>
      <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ai.steps.map((step) => (
          <StepCard key={step.number} {...step} headingLevel="h4" />
        ))}
      </ol>

      <AutomationStrip {...ai.strip} />
    </DetailSection>
  );
}
