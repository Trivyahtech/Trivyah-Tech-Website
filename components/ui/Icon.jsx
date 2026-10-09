import Image from "next/image";
import { cn } from "@/lib/cn";

/** Decorative SVG icon from /public/icons, rendered at its Figma size. */
export function Icon({ name, size = 16, className, ...props }) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    />
  );
}
