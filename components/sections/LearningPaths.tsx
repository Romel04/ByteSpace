import type { LucideIcon } from "lucide-react";
import { Building2, Camera, Code2, Laptop, Megaphone, PencilRuler } from "lucide-react";
import { LEARNING_PATHS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<(typeof LEARNING_PATHS)[number]["icon"], LucideIcon> = {
  design: PencilRuler,
  development: Code2,
  it: Laptop,
  business: Building2,
  marketing: Megaphone,
  photography: Camera,
};

export function LearningPaths() {
  return (
    <section aria-labelledby="paths-title" className="mx-auto max-w-[1200px] px-5 pt-20 sm:px-6 lg:pt-[72px]">
      <SectionHeading
        id="paths-title"
        title="Explore Diverse Learning Paths at ByteSpace"
        description="At ByteSpace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />
      <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-[41px]">
        {LEARNING_PATHS.map(({ label, icon }) => {
          const Icon = icons[icon];
          return (
            <li key={label}>
              <a href="#courses" className="flex h-[167px] flex-col items-center justify-center gap-4 rounded-3xl border border-line bg-white transition hover:border-blue">
                <span className="grid size-[60px] place-items-center rounded-full bg-lime">
                  <Icon className="size-6 text-ink" aria-hidden="true" />
                </span>
                <span className="text-lg font-medium text-ink">{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
