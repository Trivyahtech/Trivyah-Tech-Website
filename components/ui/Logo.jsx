import { cn } from "@/lib/cn";

const variants = {
  // Footer (Figma frame): one-tone wordmark at 20px
  footer: { mark: "size-9 text-lg/7", word: "text-h7 leading-7", tech: "text-fg", gap: "gap-2.5" },
  // Navbar: "Tech" in muted grey, 17px
  nav: { mark: "size-[34px] text-base", word: "text-[17px]/6", tech: "text-muted", gap: "gap-2" },
};

/** "T" mark + wordmark. */
export function Logo({ variant = "footer", className }) {
  const v = variants[variant];
  return (
    <span className={cn("inline-flex items-center", v.gap, className)}>
      <span
        aria-hidden="true"
        className={cn(
          "flex items-center justify-center rounded-full bg-white font-display font-bold text-black",
          v.mark,
        )}
      >
        T
      </span>
      <span className={cn("font-display font-semibold text-fg", v.word)}>
        Trivyah <span className={v.tech}>Tech</span>
      </span>
    </span>
  );
}
