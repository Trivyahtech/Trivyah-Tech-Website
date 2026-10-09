"use client";

import { useState } from "react";
import { stories } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const initial = (name) => name.charAt(0);

export function ClientStories() {
  const [active, setActive] = useState(0);
  const current = stories.testimonials[active];

  return (
    <section id="stories" aria-labelledby="stories-title" className="shell flex flex-col gap-14 py-16 lg:py-20">
      <SectionHeading id="stories-title" eyebrow={stories.eyebrow} title={stories.titleLines} />

      <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">
        <figure className="relative min-h-[352px] overflow-hidden rounded-card border border-white/10 bg-surface/40 px-6 pt-6 pb-[72px] backdrop-blur-md md:px-8 md:pt-8 md:pb-[94px] xl:h-[394px]">
          <div aria-hidden="true" className="absolute -top-10 -right-10 size-40 rounded-full bg-white/5 blur-[30px]" />

          <div key={active} aria-live="polite" className="relative flex animate-fade flex-col">
            <div className="flex items-center justify-between">
              <Icon name="quote" size={28} />
              <span className="rounded-full border border-white/15 px-3 py-1 text-micro text-muted">{current.source}</span>
            </div>
            <blockquote className="pt-6 font-display text-h7 font-semibold text-fg md:text-h6">
              <p>&quot;{current.quote}&quot;</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center justify-between gap-4 pt-8">
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-11 items-center justify-center rounded-full bg-white/10 font-display text-b3 font-semibold text-fg"
                >
                  {initial(current.name)}
                </span>
                <span className="flex flex-col">
                  <span className="text-b3 font-medium text-fg">{current.name}</span>
                  <span className="text-caption text-muted">{current.role}</span>
                </span>
              </span>
              <span role="img" aria-label="Rated 5 out of 5" className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" size={14} />
                ))}
              </span>
            </figcaption>
          </div>

          <div className="absolute bottom-6 left-6 flex gap-1.5 md:left-8">
            {stories.testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial from ${t.name}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-[width,background-color] duration-300 ease-out",
                  i === active ? "w-6 bg-fg" : "w-1.5 bg-white/20 hover:bg-white/40",
                )}
              />
            ))}
          </div>
        </figure>

        <ul className="flex flex-col gap-5">
          {stories.testimonials.map((t, i) => {
            const isActive = i === active;
            return (
              <li key={t.name}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex w-full flex-col gap-3 rounded-tile border p-5 text-left backdrop-blur-md transition-colors duration-200",
                    isActive ? "border-white/25 bg-white/7" : "border-white/10 bg-surface/30 hover:border-white/20",
                  )}
                >
                  <span className="flex w-full items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="flex size-8 items-center justify-center rounded-full bg-white/10 text-caption font-semibold text-fg"
                      >
                        {initial(t.name)}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-caption font-medium text-fg">{t.name}</span>
                        <span className="text-[10px]/[15px] text-muted">{t.role}</span>
                      </span>
                    </span>
                    {t.hasVideo && (
                      <span className="flex size-7 items-center justify-center rounded-full border border-white/15 pr-[6.5px] pl-[8.5px]">
                        <Icon name="play-sm" size={11} />
                        <span className="sr-only">Video testimonial</span>
                      </span>
                    )}
                  </span>
                  <span className="line-clamp-2 text-caption text-muted">{t.quote}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
