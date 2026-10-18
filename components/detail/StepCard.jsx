import { ArrowRight } from "lucide-react";

/**
 * Numbered step: ghost number, title, description.
 * `icon` sits inline before the title ("How we build it"); `arrow` adds a muted → top-right (process row).
 */
export function StepCard({ number, icon: IconComponent, title, description, arrow = false, headingLevel = "h3" }) {
  const Heading = headingLevel;
  return (
    <li className="flex flex-col rounded-tile border border-white/10 bg-surface/40 p-6">
      <div className="flex items-center justify-between">
        <span aria-hidden="true" className="font-display text-5xl/[48px] font-bold text-white/10">
          {number}
        </span>
        {arrow && <ArrowRight aria-hidden="true" className="size-4 text-white/20" />}
      </div>
      <Heading className={`${IconComponent ? "mt-2.5" : "mt-4"} flex items-center gap-2 font-display text-lg/6 font-semibold text-fg`}>
        {IconComponent && <IconComponent aria-hidden="true" className="size-[18px] shrink-0" />}
        <span>
          <span className="sr-only">Step {Number(number)}: </span>
          {title}
        </span>
      </Heading>
      <p className={`${IconComponent ? "mt-[9px]" : "mt-2"} text-b3 text-muted`}>{description}</p>
    </li>
  );
}
