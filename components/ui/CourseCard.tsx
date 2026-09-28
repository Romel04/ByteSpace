import Image from "next/image";
import { BarChart3, Star } from "lucide-react";
import type { Course } from "@/lib/data";
import { AvatarStack } from "./AvatarStack";

export function CourseCard({ course, className = "" }: { course: Course; className?: string }) {
  return (
    <article className={`flex min-w-0 flex-col rounded-3xl border border-line bg-white p-4 ${className}`}>
      <div className="relative aspect-[341/195] overflow-hidden rounded-2xl">
        <Image
          src={course.image}
          alt={`${course.title} course cover`}
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
        <ul className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2 text-xs text-body">
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map((t) => (
            <li key={t} className="rounded-full bg-white/55 px-3 py-1.5 backdrop-blur-sm">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-heading text-xl font-semibold text-ink">{course.title}</h3>
          <p className="mt-1 text-xs text-blue">by {course.creator}</p>
        </div>
        <p className="flex shrink-0 items-center gap-1 text-lg text-body">
          {course.rating.toFixed(1)}
          <Star className="size-5 fill-line text-line" aria-hidden="true" />
        </p>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2.5 text-sm text-body">
          <BarChart3 className="size-4" aria-hidden="true" />
          {course.level}
        </span>
        <AvatarStack count={4} label={course.students} size={32} step={19} />
      </div>

      <p className="mt-4 text-xs text-muted">
        <span className="font-heading text-2xl font-semibold text-blue">${course.price}</span>/lifetime
      </p>
    </article>
  );
}
