import { cn } from "@/lib/cn";
import { SmartLink } from "./SmartLink";
import { Icon } from "./Icon";

// Figma: Component 3 v3 (body link), Component 5 v3 (display link with hover arrow),
// Component 12 (link with leading icon).
export function TextLink({ href, font = "body", icon, arrow = false, className, children, ...props }) {
  return (
    <SmartLink
      href={href}
      className={cn(
        "group/link inline-flex items-center text-muted transition-colors duration-200 ease-out hover:text-fg",
        font === "display" ? "gap-1 font-display text-h9 font-semibold" : "text-b3",
        icon && "gap-2",
        className,
      )}
      {...props}
    >
      {icon && <Icon name={icon} size={15} className="opacity-70 transition-opacity group-hover/link:opacity-100" />}
      {children}
      {arrow && (
        <Icon
          name="arrow-up-right-light"
          size={13}
          className="opacity-0 transition-opacity duration-200 group-hover/link:opacity-100 group-focus-visible/link:opacity-100"
        />
      )}
    </SmartLink>
  );
}
