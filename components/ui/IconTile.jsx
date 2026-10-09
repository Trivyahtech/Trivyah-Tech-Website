import { cn } from "@/lib/cn";

const sizes = {
  md: { tile: "size-12", icon: "size-5" }, // 48px tile, 20px glyph — capability cards
  lg: { tile: "size-[50px] ring-1 ring-white/5 ring-inset", icon: "size-[22px]" }, // AI solution cards
};

/** Rounded tile holding a Lucide icon. */
export function IconTile({ icon: IconComponent, size = "md", className }) {
  const s = sizes[size];
  return (
    <span className={cn("flex shrink-0 items-center justify-center rounded-tile bg-white/10 text-fg", s.tile, className)}>
      <IconComponent aria-hidden="true" className={s.icon} />
    </span>
  );
}
