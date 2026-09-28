import Image from "next/image";
import { useId, type ReactNode } from "react";
import { Search } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Ornament } from "@/components/ui/Ornament";
import { ScaledStage } from "@/components/ui/ScaledStage";
import { HappyStudentsCard, LearningProgressCard, TopicCard } from "@/components/ui/FloatingCards";

const HERO_COPY = {
  title: "Get Access to Hundreds Courses Available",
  subtitle: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

function At({ x, y, w, children }: { x: number; y: number; w?: number; children: ReactNode }) {
  return (
    <div className="absolute" style={{ left: x, top: y, width: w }}>
      {children}
    </div>
  );
}

/** Circle, learner photo, floating cards and 3D shapes — all in Figma pixel coordinates. */
function HeroArt() {
  return (
    <>
      <div className="absolute rounded-full bg-lime" style={{ left: 145, top: 582, width: 1149, height: 1149 }} />
      <Ornament shape="lime-spring" x={-118} y={221} size={385} />
      <Ornament shape="white-spring" x={183} y={477} size={175} rotate={180} />
      <Ornament shape="white-ring" x={18} y={682} size={342} />
      <Ornament shape="lime-cylinder" x={1231} y={221} size={370} />
      <Ornament shape="white-cone" x={1106} y={464} size={188} />
      <Ornament shape="white-spring" x={1127} y={672} size={330} />
      <Image
        src="/images/people/learner-man.png"
        alt="Smiling learner wearing headphones and holding a laptop"
        width={578}
        height={541}
        loading="eager"
        className="absolute max-w-none"
        style={{ left: 431, top: 512, width: 578, height: 541 }}
      />
      <At x={404} y={639} w={208}><TopicCard /></At>
      <At x={842} y={651} w={232}><LearningProgressCard /></At>
      <At x={328} y={837} w={258}><HappyStudentsCard /></At>
    </>
  );
}

function SearchBar({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <form role="search" action="#" className={`flex items-center gap-4 ${className}`}>
      <label htmlFor={id} className="sr-only">Search courses, topics or creators</label>
      <div className="flex h-[52px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5">
        <Search className="size-5 shrink-0 text-muted" aria-hidden="true" />
        <input id={id} type="search" placeholder="Course, topic, creator" className="min-w-0 flex-1 bg-transparent text-lg text-ink placeholder:text-muted focus:outline-none" />
      </div>
      <button type="submit" className="h-[46px] shrink-0 rounded-full bg-lime px-7 text-lg font-medium text-ink transition hover:brightness-95">
        Search
      </button>
    </form>
  );
}

export function Hero() {
  return (
    <section className="bg-grid relative isolate overflow-hidden" aria-label="Introduction">
      <Header />

      {/* Desktop: the full 1440px design, scaled to the viewport */}
      <div className="mx-auto hidden max-w-[1440px] lg:block">
        <ScaledStage width={1440} height={1024}>
          <HeroArt />
          <At x={253} y={169} w={935}>
            <h1 className="text-center font-heading text-[72px] leading-[86px] font-semibold text-white">{HERO_COPY.title}</h1>
          </At>
          <At x={311} y={373} w={819}>
            <p className="text-center text-xl text-white">{HERO_COPY.subtitle}</p>
          </At>
          <At x={430} y={462} w={581}><SearchBar /></At>
        </ScaledStage>
      </div>

      {/* Tablet / mobile: copy flows naturally, artwork scales underneath */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-[640px] px-5 pt-32 text-center text-white sm:px-6 sm:pt-36">
          <h2 className="font-heading text-[clamp(2rem,8vw,3.5rem)] leading-[1.2] font-semibold">{HERO_COPY.title}</h2>
          <p className="mt-5 text-base text-white/90 sm:text-lg">{HERO_COPY.subtitle}</p>
          <SearchBar className="mt-8" />
        </div>
        <ScaledStage width={1440} height={1024} cropTop={480} className="mt-6">
          <HeroArt />
        </ScaledStage>
      </div>
    </section>
  );
}
