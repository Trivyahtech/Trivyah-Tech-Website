import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const lineCount = hero.titleLines.length;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-x-clip xl:min-h-svh">
      <div className="shell flex flex-col items-center gap-14 pt-28 pb-4 md:pb-16 xl:flex-row xl:gap-8 xl:pt-32 xl:pb-[116px]">
        <div className="flex w-full flex-1 flex-col items-start gap-7">
          <Eyebrow className="animate-rise stagger backdrop-blur-[6px]" style={{ "--i": 0 }}>
            {hero.eyebrow}
          </Eyebrow>

          <h1 id="hero-title" className="type-h1 text-fg uppercase">
            {hero.titleLines.map((line, i) => (
              <span key={line} className="block animate-rise stagger" style={{ "--i": i + 1 }}>
                {line}
              </span>
            ))}
          </h1>

          <p className="max-w-[736px] animate-rise stagger text-b1 text-muted" style={{ "--i": lineCount + 1 }}>
            {hero.body}
          </p>

          <div className="flex animate-rise stagger flex-wrap items-center gap-4 pt-2" style={{ "--i": lineCount + 2 }}>
            <Button href={hero.primaryCta.href} icon="arrow-right">
              {hero.primaryCta.label}
            </Button>
            {hero.secondaryCta && (
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            )}
          </div>

          <dl className="flex animate-rise stagger flex-wrap gap-x-10 gap-y-4 pt-7" style={{ "--i": lineCount + 3 }}>
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="text-caption text-muted">{stat.label}</dt>
                <dd className="font-display text-title font-bold text-fg">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex w-full justify-center xl:w-auto xl:px-8">
          <HeroVisual />
        </div>
      </div>

      <a
        href="#services"
        className="group absolute bottom-[29px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-[10.7px] rounded-full px-2 text-micro tracking-[1.1px] text-muted uppercase transition-colors hover:text-fg max-xl:hidden"
      >
        Scroll
        <Icon name="arrow-down" size={16} className="transition-transform duration-200 group-hover:translate-y-1" />
      </a>
    </section>
  );
}
