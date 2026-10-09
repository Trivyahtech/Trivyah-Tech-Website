import { DetailSection } from "@/components/layout/DetailSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepCard } from "./StepCard";

/** Four numbered steps. `arrows` adds a → between consecutive steps (Development design). */
export function ProcessSteps({ id, title, steps, arrows = false }) {
  const last = steps.length - 1;

  return (
    <DetailSection id={id} labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} title={title} size="section" />
      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <StepCard key={step.number} {...step} arrow={arrows && i < last} />
        ))}
      </ol>
    </DetailSection>
  );
}
