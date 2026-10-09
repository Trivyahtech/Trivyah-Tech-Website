import { cn } from "@/lib/cn";
import { SmartLink } from "./SmartLink";

// Figma: Component 7 (44px carousel arrows), Component 13 (40px socials).
const sizes = {
  44: "size-11",
  40: "size-10",
  36: "size-9",
  32: "size-8",
};

const tones = {
  default: "border-white/15",
  quiet: "border-white/10",
};

export function IconButton({ href, size = 44, tone = "default", className, children, ...props }) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-full border text-fg",
    "transition-[background-color,border-color,opacity] duration-200 ease-out",
    "hover:border-white/40 hover:bg-white/5",
    "aria-disabled:pointer-events-none aria-disabled:opacity-40",
    sizes[size],
    tones[tone],
    className,
  );

  if (href) {
    return (
      <SmartLink href={href} className={classes} {...props}>
        {children}
      </SmartLink>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
