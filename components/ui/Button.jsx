import { cn } from "@/lib/cn";
import { SmartLink } from "./SmartLink";
import { Icon } from "./Icon";

// Figma: Component 2 / 11 (primary + arrow), Component 5 v1-v2 (primary small),
// Component 3 v1-v2 (outline). `xs` is the navbar "Contact Us" pill;
// `lg` is the 50px detail-page hero button.
const variants = {
  primary: {
    base: "bg-white text-black",
    lg: "gap-2 px-7 py-[15px] hover:gap-3 hover:pr-6 hover:bg-white/90",
    md: "gap-2 px-7 py-3.5 hover:gap-3 hover:pr-6 hover:bg-white/90",
    sm: "gap-2 px-6 py-3 hover:gap-2.5 hover:pr-[22px] hover:bg-white/90",
    xs: "gap-2 px-5 py-2 hover:bg-white/90",
  },
  outline: {
    base: "border border-white/15 text-fg hover:border-white/40 hover:bg-white/5",
    lg: "px-7 py-3.5",
    md: "px-7 py-3.5",
    sm: "px-6 py-3",
    xs: "px-5 py-2",
  },
};

const fonts = {
  display: "font-display text-h9 font-semibold",
  body: "font-sans text-b3 font-medium",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  font = "display",
  icon,
  className,
  children,
  ...props
}) {
  const v = variants[variant];
  const classes = cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full",
    "transition-[gap,padding,background-color,border-color,box-shadow] duration-200 ease-out",
    fonts[font],
    v.base,
    v[size],
    className,
  );
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={16} />}
    </>
  );

  if (href) {
    return (
      <SmartLink href={href} className={classes} {...props}>
        {content}
      </SmartLink>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
