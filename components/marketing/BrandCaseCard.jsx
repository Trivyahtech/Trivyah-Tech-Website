import Image from "next/image";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { SmartLink } from "@/components/ui/SmartLink";
import { Tag } from "@/components/ui/Tag";

/**
 * Brand case study: hero image, story, service chips, three results and a link out.
 * `overlay` renders badge/title/socials as HTML once clean (un-annotated) images exist;
 * the current crops already carry them, so the title is screen-reader only by default.
 */
export function BrandCaseCard({ image, imageAlt, title, description, tags, metrics, link, overlay }) {
  const external = link.href.startsWith("http");

  return (
    <li className="overflow-hidden rounded-card border border-white/10 bg-surface/40">
      <div className="relative aspect-[602/208] overflow-hidden">
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 604px, 100vw" className="object-cover" />
        {overlay}
      </div>

      <div className="p-6">
        <h3 className="sr-only">{title}</h3>
        <p className="text-[15px]/[23px] text-muted">{description}</p>

        <ul aria-label={`${title} services`} className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} size="xs" tone="light">
              {tag}
            </Tag>
          ))}
        </ul>

        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/8 pt-5">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col-reverse">
              <dt className="mt-0.5 text-[11px]/4 tracking-[0.1em] text-fg/65 uppercase">{metric.label}</dt>
              <dd className="flex items-center gap-1.5 font-display text-[22px]/7 font-bold text-fg">
                {metric.value}
                <TrendingUp aria-hidden="true" className="size-3 text-muted" />
              </dd>
            </div>
          ))}
        </dl>

        <SmartLink
          href={link.href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-b3 text-fg transition-colors duration-200 hover:border-white/40"
        >
          <span>
            {link.label}
            <span className="sr-only">: {title}{external ? " (opens in a new tab)" : ""}</span>
          </span>
          <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </SmartLink>
      </div>
    </li>
  );
}
