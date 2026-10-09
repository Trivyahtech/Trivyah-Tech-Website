import { cn } from "@/lib/cn";

const sizes = {
  xs: "px-2.5 py-1 text-caption", // brand case chips (marketing)
  sm: "px-3 py-[5.5px] text-caption", // service tags (home)
  md: "px-4 py-1.5 text-b3", // tech stack chips (detail pages)
};

const tones = {
  muted: "text-muted",
  light: "text-fg/80",
};

export function Tag({ size = "sm", tone = "muted", className, children }) {
  return (
    <li className={cn("rounded-full border border-white/10 bg-white/5", sizes[size], tones[tone], className)}>
      {children}
    </li>
  );
}
