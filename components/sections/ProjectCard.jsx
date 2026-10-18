import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const cardShell =
  "group relative overflow-hidden rounded-card border border-white/10 bg-surface/40 backdrop-blur-md transition-colors duration-300 hover:border-white/15";

// Reveal used for descriptions: hidden until hover/focus, always shown on touch devices.
const reveal =
  "translate-y-2 opacity-0 transition-[opacity,translate] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 touch:translate-y-0 touch:opacity-100";

function ProjectMedia({ number, category, angle }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${angle}deg, rgb(255 255 255 / 0.1) 0%, transparent 50%, rgb(255 255 255 / 0.04) 100%)`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 size-40 -translate-1/2 rounded-full bg-white/10 blur-[30px] transition-colors duration-300 group-hover:bg-white/15" />
      <span className="absolute top-4 right-5 font-display text-7xl/[72px] font-bold text-white/5">{number}</span>
      <span className="absolute top-5 left-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-micro text-fg/80 backdrop-blur-[6px]">
        {category}
      </span>
    </div>
  );
}

function ArrowCircle() {
  return (
    <span
      aria-hidden="true"
      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors duration-200 group-hover:border-white/40 group-hover:bg-white/5"
    >
      <Icon name="arrow-up-right-15" size={15} />
    </span>
  );
}

const externalProps = (href) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

function TitleBlock({ title, industry }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h3 className="font-display text-xl/7 font-semibold text-fg">{title}</h3>
      <p className="text-caption text-muted">{industry}</p>
    </div>
  );
}

// Figma: Component 9 - tall featured card spanning two rows.
export function FeaturedProjectCard({ number, category, title, industry, description, href, className }) {
  return (
    <a href={href} {...externalProps(href)} className={cn(cardShell, "block min-h-[420px]", className)}>
      <ProjectMedia number={number} category={category} angle={121.62} />
      {/* Title + arrow stay visible; only the description reveals on hover (like the smaller cards). */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 bg-linear-to-t from-ink/80 to-transparent p-5">
        <p className={cn("max-w-[44ch] text-b3 text-muted", reveal)}>{description}</p>
        <div className="flex items-center justify-between gap-4">
          <TitleBlock title={title} industry={industry} />
          <ArrowCircle />
        </div>
      </div>
    </a>
  );
}

// Figma: Component 10 - media area + title footer.
export function ProjectCard({ number, category, title, industry, description, href }) {
  return (
    <a href={href} {...externalProps(href)} className={cn(cardShell, "flex flex-col")}>
      <div className="relative h-56 shrink-0">
        <ProjectMedia number={number} category={category} angle={150.46} />
        <p className={cn("absolute inset-x-0 bottom-0 p-5 text-b3 text-muted", reveal)}>{description}</p>
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <TitleBlock title={title} industry={industry} />
        <ArrowCircle />
      </div>
    </a>
  );
}
