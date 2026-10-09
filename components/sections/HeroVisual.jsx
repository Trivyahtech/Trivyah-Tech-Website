import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

// Composition and offsets come straight from the Figma hero visual (448×544).
const bars = [19.19, 31.19, 24.95, 38.39, 28.8, 44.16, 34.55];
const metrics = [
  { value: "4.2K", label: "Users" },
  { value: "$31K", label: "MRR" },
  { value: "0.8%", label: "Churn" },
];

function IconTile({ icon }) {
  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-[20px] bg-white/10 ring-1 ring-white/10">
      <Icon name={icon} size={12} />
    </span>
  );
}

function FloatCard({ className, index, children }) {
  return (
    <div
      className={cn("absolute animate-rise stagger rounded-tile border backdrop-blur-md", className)}
      style={{ "--i": index }}
    >
      {children}
    </div>
  );
}

export function HeroVisual() {
  return (
    <div
      role="img"
      aria-label="Product preview: a Trivyah OS revenue dashboard, an AI assistant, a deploy script and a 99.99% uptime monitor."
      className="relative h-[544px] w-[448px] shrink-0 max-sm:-mb-[152px] max-sm:origin-top max-sm:scale-[0.72]"
    >
      <div className="absolute top-1/2 left-1/2 size-56 -translate-1/2 rounded-full bg-white/7 blur-2xl" />

      {/* Orbit */}
      <div className="absolute top-[272px] left-[224px] size-72 animate-orbit">
        <div className="size-full rotate-[31.23deg] rounded-full border border-dashed border-white/7">
          <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-white/40 shadow-[0_0_10px_2px_rgb(255_255_255/0.4)]" />
        </div>
      </div>

      {/* Design systems chip */}
      <FloatCard
        index={6}
        className="glass-gradient-soft top-[44px] left-[253px] flex items-center gap-2 rounded-xl border-white/8 px-2.5 py-2 shadow-float-sm backdrop-blur-sm"
      >
        <IconTile icon="layers" />
        <span className="flex flex-col">
          <span className="font-display text-[10px]/[12.5px] font-semibold text-fg">Design</span>
          <span className="text-[8px]/[10px] text-muted">systems</span>
        </span>
      </FloatCard>

      {/* deploy.ts */}
      <FloatCard
        index={7}
        className="glass-gradient top-[105px] right-[11px] w-48 overflow-hidden border-white/12 shadow-float"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 px-2.5 py-1.5">
          <span className="size-1.5 rounded-full bg-white/30" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/10" />
          <span className="flex items-center gap-1 pl-1.5 text-[9px]/[13.5px] text-muted">
            <Icon name="terminal" size={9} />
            deploy.ts
          </span>
        </div>
        <div className="flex flex-col gap-[1.5px] p-2.5 text-[9px]/[14.63px]">
          <p className="text-white/60">
            const<span className="text-white/40"> app = </span>
            <span className="text-white/80">build</span>
            <span className="text-white/40">{"({"}</span>
          </p>
          <p className="pl-2.5 text-white/70">
            scale: <span className="text-white">∞</span>,
          </p>
          <p className="pl-2.5 text-white/70">
            ai: <span className="text-white">true</span>,
          </p>
          <p className="pl-2.5 text-white/70">
            ship: <span className="text-white">&quot;fast&quot;</span>,
          </p>
          <p className="text-white/40">{"})"}</p>
          <p className="flex items-center gap-1 text-white/50">
            <Icon name="sparkle-sm" size={8} />
            deployed in 1.2s
          </p>
        </div>
      </FloatCard>

      {/* AI Assistant */}
      <FloatCard
        index={8}
        className="glass-gradient-soft top-[121px] left-[14px] flex w-44 flex-col gap-2.5 border-white/8 p-3 shadow-float backdrop-blur-sm"
      >
        <div className="flex items-center gap-2">
          <IconTile icon="assistant" />
          <span className="font-display text-[11px]/[16.5px] font-semibold text-fg">AI Assistant</span>
          <span className="ml-auto size-1.5 rounded-full bg-white/60" />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="h-1.5 w-full rounded-full bg-white/10" />
          <span className="h-1.5 w-[120px] rounded-full bg-white/10" />
          <span className="h-1.5 w-[90px] rounded-full bg-white/10" />
        </div>
        <div className="flex gap-1">
          {["intent", "entity", "reply"].map((chip) => (
            <span key={chip} className="rounded-[18px] bg-white/5 px-1.5 py-0.5 text-[8px]/3 text-muted ring-1 ring-white/5">
              {chip}
            </span>
          ))}
        </div>
      </FloatCard>

      {/* Uptime */}
      <FloatCard
        index={9}
        className="glass-gradient-soft top-[293px] left-[22px] flex w-40 flex-col gap-1.5 border-white/8 p-3 shadow-float backdrop-blur-sm"
      >
        <div className="flex items-center justify-between pb-0.5">
          <span className="flex items-center gap-1.5 text-[10px]/[15px] font-medium text-muted">
            <Icon name="activity" size={11} />
            Uptime
          </span>
          <span className="font-display text-caption font-bold text-fg">99.99%</span>
        </div>
        <div className="h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[99%] rounded-full bg-white/60" />
        </div>
        <div className="flex justify-between text-[8px]/3 text-muted">
          <span>30d</span>
          <span>0 incidents</span>
        </div>
      </FloatCard>

      {/* Trivyah OS */}
      <FloatCard
        index={10}
        className="glass-gradient top-[266px] left-[224px] w-60 overflow-hidden border-white/12 shadow-float-lg"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-2.5">
          <span className="flex items-center gap-2">
            <IconTile icon="os-mark" />
            <span className="font-display text-caption font-semibold text-fg">Trivyah OS</span>
          </span>
          <span className="flex items-center gap-1 text-[9px]/[13.5px] text-muted">
            <span className="size-1.5 rounded-full bg-white/70" />
            live
          </span>
        </div>
        <div className="flex flex-col gap-2.5 p-3.5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px]/[13.5px] tracking-[0.45px] text-muted uppercase">Revenue</p>
              <p className="font-display text-xl/7 font-bold text-fg">$248K</p>
            </div>
            <span className="flex items-center gap-0.5 rounded-full bg-white/10 px-1.5 py-0.5 text-[9px]/[13.5px] text-fg">
              <Icon name="trend-up" size={10} />
              12.4%
            </span>
          </div>
          <div className="flex h-12 items-end justify-center gap-1">
            {bars.map((h) => (
              <span
                key={h}
                className="w-[26.57px] rounded-t bg-linear-to-t from-white/15 to-white/45"
                style={{ height: h }}
              />
            ))}
          </div>
          <div className="flex gap-1.5">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-1 flex-col items-center rounded-[20px] bg-white/5 p-1.5 ring-1 ring-white/5">
                <span className="font-display text-caption font-semibold text-fg">{m.value}</span>
                <span className="text-[8px]/3 text-muted">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </FloatCard>

      <Icon name="sparkle" size={9} className="absolute top-[458.8px] left-[322.5px]" />
    </div>
  );
}
