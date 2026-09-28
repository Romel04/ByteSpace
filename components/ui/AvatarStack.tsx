import Image from "next/image";
import { AVATARS } from "@/lib/data";

type AvatarStackProps = {
  count: number;
  label: string;
  size?: number;
  step?: number;
  className?: string;
};

export function AvatarStack({ count, label, size = 43, step = 27, className = "" }: AvatarStackProps) {
  const avatars = Array.from({ length: count }, (_, i) => AVATARS[i % AVATARS.length]);
  const width = step * count + size;
  return (
    <div className={`relative shrink-0 ${className}`} style={{ width, height: size }} role="img" aria-label={`${label} students`}>
      {avatars.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt=""
          width={size}
          height={size}
          className="absolute top-0 rounded-full border-2 border-white object-cover"
          style={{ left: i * step, width: size, height: size, zIndex: i }}
        />
      ))}
      <span
        className="absolute top-0 grid place-items-center rounded-full bg-lime font-heading text-[13px] font-semibold text-ink"
        style={{ left: count * step, width: size, height: size, zIndex: count }}
      >
        {label}
      </span>
    </div>
  );
}
