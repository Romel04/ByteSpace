"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScaledStageProps = {
  /** Design-space width in px (the Figma frame width). */
  width: number;
  /** Design-space height in px. */
  height: number;
  /** Design-space y offset to crop from the top (px). */
  cropTop?: number;
  children: ReactNode;
  className?: string;
};

/**
 * Lays children out in absolute Figma pixel coordinates and scales the whole
 * stage down to fit its container, so artwork-heavy sections stay faithful to
 * the design at every viewport width.
 */
export function ScaledStage({ width, height, cropTop = 0, children, className = "" }: ScaledStageProps) {
  const outer = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const el = outer.current;
    if (!el) return;
    const update = () => setScale(Math.min(el.clientWidth / width, 1));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  const visibleHeight = height - cropTop;
  return (
    <div
      ref={outer}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: `${width} / ${visibleHeight}` }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width,
          height,
          transform: `translateY(${-cropTop * (scale ?? 1)}px) scale(${scale ?? 1})`,
          visibility: scale === null ? "hidden" : "visible",
        }}
      >
        {children}
      </div>
    </div>
  );
}
