import { cta as homeCta } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Lines } from "@/components/ui/SectionHeading";

/** Closing call-to-action panel. Defaults to the home page copy. */
export function CallToAction({ content = homeCta, className }) {
  const { titleLines, body, primary, secondary } = content;

  return (
    <section aria-labelledby="cta-title" className={cn("shell pb-20", className)}>
      <div className="relative overflow-hidden rounded-panel border border-white/10 bg-surface/40 px-6 py-16 backdrop-blur-md md:px-8 md:py-24 lg:mx-6">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 h-64 w-[640px] max-w-full -translate-x-1/2 rounded-full bg-white/10 blur-[60px]"
        />
        <div className="relative flex flex-col items-center gap-6 text-center">
          <h2 id="cta-title" className="type-display max-w-[768px] text-fg">
            <Lines lines={titleLines} />
          </h2>
          <p className="max-w-[576px] text-b1 leading-7 text-muted">{body}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href={primary.href} font="body" icon="arrow-right">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="outline">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
