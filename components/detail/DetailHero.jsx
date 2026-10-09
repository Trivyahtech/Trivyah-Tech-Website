import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Detail-page hero: eyebrow, stacked 72px headline, intro and two CTAs. */
export function DetailHero({ eyebrow, titleLines, body, primaryCta, secondaryCta }) {
  const lineCount = titleLines.length;

  return (
    <section aria-labelledby="hero-title" className="shell pt-32 pb-16 lg:px-[104px] lg:pt-40 lg:pb-20">
      <div className="flex flex-col items-start">
        <Eyebrow className="animate-rise stagger backdrop-blur-[6px]" style={{ "--i": 0 }}>
          {eyebrow}
        </Eyebrow>

        <h1 id="hero-title" className="type-hero mt-6 text-fg">
          {titleLines.map((line, i) => (
            <span key={line} className="block animate-rise stagger" style={{ "--i": i + 1 }}>
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-7 max-w-[576px] animate-rise stagger text-b1 leading-7 text-muted" style={{ "--i": lineCount + 1 }}>
          {body}
        </p>

        <div className="mt-9 flex animate-rise stagger flex-wrap gap-4" style={{ "--i": lineCount + 2 }}>
          <Button href={primaryCta.href} size="lg" font="body" icon="arrow-right">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} size="lg" variant="outline" font="body">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
