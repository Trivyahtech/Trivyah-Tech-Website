import { Fragment } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

/** Renders Figma's desktop line breaks on lg+, natural wrapping below. */
export function Lines({ lines }) {
  if (!Array.isArray(lines)) return lines;
  return lines.map((line, i) => (
    <Fragment key={line}>
      {i > 0 && <br className="max-lg:hidden" />}
      {i > 0 && " "}
      {line}
    </Fragment>
  ));
}

const titleSizes = {
  h2: "type-h2", // home sections (40/48)
  lead: "type-lead", // detail-page feature heading (48/52)
  section: "type-section", // detail-page sections (36/40)
};

export function SectionHeading({
  id,
  eyebrow,
  eyebrowIcon,
  title,
  description,
  size = "h2",
  className,
  titleClassName,
  descriptionClassName,
}) {
  return (
    <div className={cn("flex flex-col items-start gap-2", className)}>
      {eyebrow && <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>}
      <h2 id={id} className={cn(titleSizes[size], "text-fg", titleClassName)}>
        <Lines lines={title} />
      </h2>
      {description && <p className={cn("text-muted", descriptionClassName)}>{description}</p>}
    </div>
  );
}
