"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

const layouts = {
  // Home: eyebrow + large heading, full-width list
  home: {
    section: "shell gap-6",
    title: "type-faq",
    list: "w-full border-white/10",
    divider: "border-white/10",
    answer: "text-b2",
  },
  // Detail pages: plain section heading, list centred at 768px
  centered: {
    section: "shell gap-12 lg:px-[104px]",
    title: "type-section",
    list: "mx-auto w-full max-w-[768px] border-white/8",
    divider: "border-white/8",
    answer: "text-b2 leading-6",
  },
};

export function Faq({ eyebrow, title, items, layout = "home" }) {
  const [open, setOpen] = useState(0);
  const l = layouts[layout];

  return (
    <section id="faq" aria-labelledby="faq-title" className={cn("flex flex-col py-16 lg:py-20", l.section)}>
      <div className="flex flex-col items-start gap-2">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 id="faq-title" className={cn(l.title, "text-fg")}>
          {title}
        </h2>
      </div>

      <div className={cn("border-y", l.list)}>
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question} className={cn(i > 0 && "border-t", i > 0 && l.divider)}>
              <h3>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={cn(
                      "font-display text-h7 font-semibold transition-colors duration-200",
                      isOpen ? "text-fg" : "text-muted group-hover:text-fg",
                    )}
                  >
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-full border transition-[rotate,background-color,border-color] duration-300 ease-out",
                      isOpen ? "rotate-45 border-white/40 bg-white/5" : "border-white/15 group-hover:border-white/40",
                    )}
                  >
                    <Icon name="plus" size={16} />
                  </span>
                </button>
              </h3>
              <div
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                inert={!isOpen}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className={cn("max-w-3xl pr-12 pb-6 text-muted", l.answer)}>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
