import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { builtDeployed } from "@/lib/development";
import { DetailSection } from "@/components/layout/DetailSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartLink } from "@/components/ui/SmartLink";

function ShowcaseCard({ image, imageAlt, badges, category, domain, title, description, link }) {
  const LinkIcon = link.external ? ExternalLink : ArrowUpRight;
  const externalProps = link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <li className="overflow-hidden rounded-card border border-white/10 bg-surface/40">
      <div className="relative aspect-[393/224] overflow-hidden">
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 394px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
        {badges && (
          <div className="absolute top-4 left-5 flex gap-2">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/15 bg-black/60 px-3 py-1 text-caption text-fg backdrop-blur-[6px]">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4 text-caption">
          <p className="tracking-[0.1em] text-muted uppercase">{category}</p>
          {domain && <p className="text-muted">{domain}</p>}
        </div>
        <h3 className="mt-2 font-display text-2xl/7 font-semibold text-fg">{title}</h3>
        <p className="mt-2 text-[15px]/[23px] text-muted">{description}</p>

        <SmartLink
          href={link.href}
          {...externalProps}
          className="group mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-b3 text-fg/75 transition-colors hover:text-fg"
        >
          {link.label}
          {link.external && <span className="sr-only"> (opens in a new tab)</span>}
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-full border border-white/10 text-fg transition-colors group-hover:border-white/40 group-hover:bg-white/5"
          >
            <LinkIcon className="size-3.5" />
          </span>
        </SmartLink>
      </div>
    </li>
  );
}

export function BuiltDeployed() {
  return (
    <DetailSection id="built" labelledBy="built-title">
      <SectionHeading
        id="built-title"
        eyebrow={builtDeployed.eyebrow}
        title={builtDeployed.title}
        description={builtDeployed.description}
        size="section"
        className="gap-4"
        descriptionClassName="-mt-1.5 text-b2 leading-6"
      />
      <ul className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {builtDeployed.projects.map((project) => (
          <ShowcaseCard key={project.title} {...project} />
        ))}
      </ul>
    </DetailSection>
  );
}
