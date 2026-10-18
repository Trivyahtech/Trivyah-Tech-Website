import Image from "next/image";
import { cn } from "@/lib/cn";

// Vector logo from the Figma "TT Brand Guideline" (white on black).
// nav: logomark + logotype side by side. footer: the official stacked lockup with ™.
export function Logo({ variant = "footer", className }) {
  if (variant === "nav") {
    return (
      <span className={cn("inline-flex items-center gap-2.5", className)}>
        <Image src="/brand/logo-mark.svg" alt="" width={90} height={97} priority className="h-9 w-auto" />
        <Image src="/brand/logo-logotype.svg" alt="Trivyah Tech" width={122} height={38} priority className="h-7 w-auto" />
      </span>
    );
  }

  return (
    <Image
      src="/brand/logo-lockup.svg"
      alt="Trivyah Tech"
      width={128}
      height={150}
      className={cn("h-24 w-auto", className)}
    />
  );
}
