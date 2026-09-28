import Image from "next/image";

export type ShapeName =
  | "lime-spring" | "lime-cylinder" | "lime-ring" | "lime-cone"
  | "white-spring" | "white-cylinder" | "white-cone" | "white-ring";

type OrnamentProps = {
  shape: ShapeName;
  x: number;
  y: number;
  size: number;
  rotate?: number;
  className?: string;
};

/** 3D decorative shape positioned in design-space pixels (use inside ScaledStage). */
export function Ornament({ shape, x, y, size, rotate = 0, className = "" }: OrnamentProps) {
  return (
    <Image
      src={`/images/shapes/${shape}.png`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`pointer-events-none absolute max-w-none select-none ${className}`}
      style={{ left: x, top: y, width: size, height: size, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    />
  );
}
