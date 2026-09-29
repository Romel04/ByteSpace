import Image from "next/image";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { COURSES, CREATOR_BENEFITS, STATS } from "@/lib/data";
import { CourseCard } from "@/components/ui/CourseCard";
import {
  HappyStudentsCard,
  LearningProgressCard,
  RevenueCard,
  YearToDateCard,
} from "@/components/ui/FloatingCards";
import { Ornament } from "@/components/ui/Ornament";
import { ScaledStage } from "@/components/ui/ScaledStage";

function At({
  x,
  y,
  w,
  children,
}: {
  x: number;
  y: number;
  w?: number;
  children: ReactNode;
}) {
  return (
    <div className="absolute" style={{ left: x, top: y, width: w }}>
      {children}
    </div>
  );
}

export function GrowthSection() {
  return (
    <section
      id="creators"
      aria-label="Growth and creator tools"
      className="relative isolate mt-20 scroll-mt-8 overflow-hidden bg-[#fafafa] lg:mt-[72px]"
    >
      {/* soft colour blobs from the design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-56 left-[-10%] size-[720px] rounded-full bg-lime/35 blur-[140px]" />
        <div className="absolute top-[12%] -left-64 size-[700px] rounded-full bg-blue/20 blur-[150px]" />
        <div className="absolute -top-72 right-[-15%] size-[700px] rounded-full bg-blue/15 blur-[150px]" />
        <div className="absolute bottom-[-12%] left-[-12%] size-[420px] rounded-full bg-lime/40 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] size-[700px] rounded-full bg-blue/20 blur-[150px]" />
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col gap-20 px-5 py-20 sm:px-6 lg:gap-[72px] lg:py-[120px]">
        {/* Row 1 — learners */}
        <div className="grid items-center gap-12 lg:grid-cols-[574px_1fr] lg:gap-[63px]">
          <div>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.2] font-semibold text-ink">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-10 max-w-[477px] text-lg leading-[1.6] text-body">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="mt-10 flex gap-10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dd className="font-display text-[32px] leading-10 font-bold text-blue">
                    {s.value}
                  </dd>
                  <dt className="text-base text-body">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <ScaledStage
            width={621}
            height={552}
            className="mx-auto max-w-[650px]"
          >
            <At x={0} y={0} w={377}>
              <CourseCard course={COURSES[0]} />
            </At>
            <Image
              src="/images/people/learner-man.png"
              alt="Learner with headphones holding a laptop"
              width={650}
              height={540}
              className="absolute max-w-none"
              style={{ left: 0, top: 12, width: 700, height: 540 }}
            />
            <At x={345} y={213} w={232}>
              <LearningProgressCard />
            </At>
            <Ornament shape="lime-spring" x={406} y={67} size={215} />
          </ScaledStage>
        </div>

        {/* Row 2 — creators */}
        <div className="grid items-center gap-12 lg:grid-cols-[541px_1fr] lg:gap-[79px]">
          <ScaledStage
            width={541}
            height={596}
            className="order-2 mx-auto max-w-[541px] lg:order-1"
          >
            <At x={0} y={44} w={232}>
              <RevenueCard />
            </At>
            <Image
              src="/images/people/creator-woman.png"
              alt="Creator with headphones holding a tablet"
              width={600}
              height={620}
              className="absolute max-w-none z-1"
              style={{ left: 28, top: 0, width: 490, height: 620 }}
            />
            <At x={0} y={194} w={134}>
              <YearToDateCard />
            </At>
            <Ornament shape="lime-spring" x={305} y={114} size={215} />
            <At x={283} y={335} w={258}>
              <HappyStudentsCard />
            </At>
          </ScaledStage>

          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.2] font-semibold text-ink lg:max-w-[391px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-10 max-w-[574px] text-lg leading-[1.6] text-body">
              <strong className="font-bold text-ink">ByteSpace</strong> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-10 flex flex-col gap-4">
              {CREATOR_BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-lg text-ink"
                >
                  <span className="grid size-6 place-items-center rounded-full bg-blue">
                    <Check
                      className="size-3.5 text-white"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
