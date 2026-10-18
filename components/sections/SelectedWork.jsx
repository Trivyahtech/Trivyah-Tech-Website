import { work } from "@/lib/content";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProjectCard, ProjectCard } from "./ProjectCard";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="shell py-16 lg:py-20">
      <SectionHeading id="work-title" eyebrow={work.eyebrow} title={work.title} />
      {/* Two projects stack beside the featured card; more fill a 3-column grid. */}
      <div
        className={cn(
          "grid gap-5 pt-14 md:grid-cols-2 lg:grid-rows-[312px_312px]",
          work.projects.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2",
        )}
      >
        <FeaturedProjectCard {...work.featured} className="md:col-span-2 lg:col-span-1 lg:row-span-2" />
        {work.projects.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </section>
  );
}
