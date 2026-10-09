import Image from "next/image";

// Star positions from the Figma background frame, in px at 1440×900.
const stars = [
  [801.27, 194.88, 3.73], [235.66, 162.61, 1.72], [1069.22, 404.13, 3.67],
  [514.75, 582.39, 3.11], [179.77, 700.45, 3.75], [453.64, 342.45, 3.38],
  [278.14, 433.55, 3.72], [1272.66, 484.2, 3.92], [952.56, 176.97, 3.31],
  [1129.22, 729.16, 3.02], [465.58, 615.39, 3.7], [539.47, 801.78, 1.27],
  [1012.14, 65.8, 2.48], [684.66, 793.25, 2.58], [1327.67, 215.84, 1.84],
  [352.97, 82.36, 2.41], [238.41, 520.98, 3.56], [1236.42, 461.78, 3.47],
];

export function PageBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent,rgb(0_0_0/0.6))]" />
      <div className="absolute -top-40 left-1/4 size-[640px] rounded-full bg-white/5 blur-[60px]" />
      <div className="absolute top-[300px] -right-40 size-[576px] rounded-full bg-white/4 blur-[60px]" />
      <div className="absolute bottom-0 left-1/3 size-[480px] rounded-full bg-white/3 blur-[60px]" />
      <Image
        src="/textures/noise.svg"
        width={900}
        height={900}
        alt=""
        className="absolute top-0 left-0 opacity-4 mix-blend-overlay"
      />
      {stars.map(([x, y, size]) => (
        <span
          key={`${x}-${y}`}
          className="absolute rounded-full bg-white/30"
          style={{ left: `${(x / 1440) * 100}%`, top: `${(y / 900) * 100}%`, width: size, height: size }}
        />
      ))}
    </div>
  );
}
