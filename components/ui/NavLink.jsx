import { cn } from "@/lib/cn";
import { SmartLink } from "./SmartLink";

// Figma: Component 14 v1 — muted text link that brightens on hover.
export function NavLink({ href, className, children, ...props }) {
  return (
    <SmartLink
      href={href}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-b3 text-muted",
        "transition-colors duration-200 ease-out hover:text-fg",
        className,
      )}
      {...props}
    >
      {children}
    </SmartLink>
  );
}
