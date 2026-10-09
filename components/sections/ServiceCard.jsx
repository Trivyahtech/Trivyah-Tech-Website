import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Tag } from "@/components/ui/Tag";

// Figma: Component 6. The two radial glow layers are invisible by default and fade in on hover.
export function ServiceCard({ id, number, icon, title, description, tags, cta }) {
  const titleId = `${id}-title`;

  return (
    <article
      id={id}
      aria-labelledby={titleId}
      className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-card border border-white/10 bg-surface/60 p-6 backdrop-blur-md transition-colors duration-300 hover:border-white/15"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_130%_at_50%_50%,rgb(255_255_255/0.12)_0%,transparent_40%)]" />
        <div className="absolute inset-0 mask-[url(/masks/card-glow.svg)] mask-size-[100%_100%] bg-[radial-gradient(ellipse_50%_65%_at_50%_50%,rgb(255_255_255/0.08)_0%,transparent_50%)]" />
      </div>

      <div className="relative flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <span className="flex size-14 items-center justify-center rounded-tile bg-white/10">
            <Icon name={icon} size={24} />
          </span>
          <span aria-hidden="true" className="font-display text-6xl/[60px] font-bold text-white/5">
            {number}
          </span>
        </div>
        <h3 id={titleId} className="type-title text-fg">
          {title}
        </h3>
        <p className="max-w-[548px] text-b3 text-muted">{description}</p>
        <ul aria-label={`${title} services`} className="flex max-w-[548px] flex-wrap gap-x-3 gap-y-[9px] pt-4">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
      </div>

      <Button href={cta.href} size="sm" icon="arrow-up-right" className="relative self-start">
        {cta.label}
      </Button>
    </article>
  );
}
