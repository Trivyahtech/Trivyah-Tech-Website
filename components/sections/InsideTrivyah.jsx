"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { inside } from "@/lib/content";
import { IconButton } from "@/components/ui/IconButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReelCard } from "./ReelCard";

const STEP = 260; // card width (240) + gap (20)

export function InsideTrivyah() {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  function scroll(direction) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    trackRef.current.scrollBy({ left: direction * STEP, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <section id="inside" aria-labelledby="inside-title" className="flex flex-col gap-12 py-16 lg:py-20">
      <div className="shell flex items-end justify-between gap-6">
        <SectionHeading id="inside-title" eyebrow={inside.eyebrow} title={inside.title} />
        <div className="flex gap-2 max-md:hidden">
          <IconButton aria-label="Previous posts" aria-controls="inside-track" aria-disabled={edges.start} onClick={() => scroll(-1)}>
            <span aria-hidden="true" className="text-b2 leading-6">←</span>
          </IconButton>
          <IconButton aria-label="Next posts" aria-controls="inside-track" aria-disabled={edges.end} onClick={() => scroll(1)}>
            <span aria-hidden="true" className="text-b2 leading-6">→</span>
          </IconButton>
        </div>
      </div>

      <ul
        id="inside-track"
        ref={trackRef}
        onScroll={measure}
        className="no-scrollbar -mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-(--track-pad) py-6 [--track-pad:max(var(--gutter),calc((100%-var(--container-content))/2))] mask-[url(/masks/carousel-fade.svg)] mask-size-[100%_100%] scroll-px-(--track-pad)"
      >
        {inside.reels.map((reel) => (
          <li key={reel.title} className="shrink-0 snap-start">
            <ReelCard {...reel} />
          </li>
        ))}
      </ul>
    </section>
  );
}
