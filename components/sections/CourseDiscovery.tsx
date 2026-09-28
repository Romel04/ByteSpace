"use client";

import { useState } from "react";
import { CATEGORY_CHIPS, COURSES } from "@/lib/data";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CourseDiscovery() {
  const [active, setActive] = useState<string>(CATEGORY_CHIPS[0]);

  return (
    <section id="courses" aria-labelledby="discover-title" className="mx-auto max-w-[1200px] scroll-mt-8 px-5 pt-[72px] sm:px-6 lg:pt-[72px]">
      <SectionHeading
        id="discover-title"
        title="Discover Your Passion, Build Your Skills"
        description="At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      <div role="group" aria-label="Course categories" className="mx-auto mt-14 flex max-w-[1090px] flex-wrap justify-center gap-x-4 gap-y-5">
        {[...CATEGORY_CHIPS, "+ More"].map((chip) => {
          const selected = chip === active;
          return (
            <button
              key={chip}
              type="button"
              aria-pressed={selected}
              onClick={() => chip !== "+ More" && setActive(chip)}
              className={`h-[43px] rounded-full px-5 text-base transition-colors ${
                selected ? "bg-lime font-medium text-ink" : "bg-surface text-body hover:bg-lime/40"
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>

      <ul className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((course) => (
          <li key={course.id} className="min-w-0">
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </section>
  );
}
