import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const screenTone = {
  bright: "bg-[linear-gradient(118.1deg,rgb(255_255_255/0.15)_0%,rgb(255_255_255/0.05)_100%)]",
  dim: "bg-[linear-gradient(118.1deg,rgb(255_255_255/0.1)_0%,transparent_100%)]",
};

// Figma: Component 8 - a phone-shaped post preview.
export function ReelCard({ platform, icon, handle, title, meta, tone, href }) {
  return (
    <a href={href} className="group flex w-60 flex-col rounded-[32px]" aria-label={`${title} - ${meta} on ${platform}`}>
      <div className="relative rounded-panel border border-white/10 bg-linear-to-b from-white/10 to-white/2 p-3 backdrop-blur-md transition-[border-color,box-shadow] duration-300 group-hover:border-white/20">
        <div className="relative h-[400.66px] overflow-hidden rounded-[22.4px] bg-black">
          <div className={cn("absolute inset-0 opacity-60", screenTone[tone])} />
          <span className="absolute top-2 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/20" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-white/15 pr-[17px] pl-[19px] backdrop-blur-[6px] transition-transform duration-300 group-hover:scale-105">
              <Icon name="play" size={20} />
            </span>
          </span>
          <div className="absolute inset-x-0 -bottom-px flex flex-col p-4">
            <span className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-white/15 backdrop-blur-[6px]">
                <Icon name={icon} size={13} />
              </span>
              <span className="text-micro font-medium text-fg/90">{handle}</span>
            </span>
            <span className="pt-2 font-display text-b3 font-semibold text-fg">{title}</span>
            <span className="text-micro text-fg/60">{meta}</span>
          </div>
        </div>
      </div>
      <span className="px-1 pt-3 text-caption text-muted">{platform}</span>
    </a>
  );
}
