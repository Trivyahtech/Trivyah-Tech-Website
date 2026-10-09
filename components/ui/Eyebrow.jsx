import { cn } from "@/lib/cn";

/** Section label pill: dot (or a small icon) + caption. */
export function Eyebrow({ icon: IconComponent, className, children, ...props }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-caption text-muted",
        className,
      )}
      {...props}
    >
      {IconComponent ? (
        <IconComponent aria-hidden="true" className="size-3 text-fg" />
      ) : (
        <span aria-hidden="true" className="size-1.5 rounded-full bg-white" />
      )}
      {children}
    </p>
  );
}
