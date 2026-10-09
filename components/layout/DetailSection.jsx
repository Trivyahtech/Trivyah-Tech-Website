import { cn } from "@/lib/cn";

/**
 * Section wrapper for detail pages (Development, Marketing): content column is
 * 1232px at 1440 (24px narrower than the home page container), 80px vertical rhythm.
 */
export function DetailSection({ id, labelledBy, className, children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("shell py-16 lg:px-[104px] lg:py-20", className)}>
      {children}
    </section>
  );
}
