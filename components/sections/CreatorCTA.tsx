import Link from "next/link";
import type { ReactNode } from "react";
import { Ornament } from "@/components/ui/Ornament";
import { ScaledStage } from "@/components/ui/ScaledStage";

const COPY = {
  title: "Unlock Your Potential as a Creator with ByteSpace",
  body: "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
};

function Shapes() {
  return (
    <>
      <Ornament shape="lime-spring" x={-118} y={-162} size={385} />
      <Ornament shape="white-spring" x={178} y={5} size={175} rotate={180} />
      <Ornament shape="white-cone" x={-48} y={225} size={188} />
      <Ornament shape="lime-ring" x={20} y={299} size={342} />
      <Ornament shape="lime-cone" x={1080} y={0} size={188} />
      <Ornament shape="white-cylinder" x={1226} y={6} size={370} />
      <Ornament shape="lime-spring" x={1110} y={289} size={330} />
    </>
  );
}

function JoinButton() {
  return (
    <Link href="/signup" className="inline-flex h-[46px] items-center justify-center whitespace-nowrap rounded-full bg-lime px-8 text-lg font-medium text-ink transition hover:brightness-95">
      Join as Creator
    </Link>
  );
}

function At({ x, y, w, children }: { x: number; y: number; w: number; children: ReactNode }) {
  return (
    <div className="absolute text-center" style={{ left: x, top: y, width: w }}>
      {children}
    </div>
  );
}

export function CreatorCTA() {
  return (
    <section aria-labelledby="cta-title" className="bg-grid relative isolate overflow-hidden">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-[1440px] lg:block">
        <ScaledStage width={1440} height={488}>
          <Shapes />
          <At x={365} y={85} w={710}>
            <h2 id="cta-title" className="font-heading text-[44px] leading-[53px] font-semibold text-white">{COPY.title}</h2>
          </At>
          <At x={238} y={231} w={964}>
            <p className="text-lg leading-[29px] text-white">{COPY.body}</p>
          </At>
          <At x={634} y={358} w={172}><JoinButton /></At>
        </ScaledStage>
      </div>

      {/* Tablet / mobile */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-[640px] px-5 pt-16 text-center sm:px-6">
          <h2 className="font-heading text-[clamp(1.75rem,6vw,2.75rem)] leading-[1.2] font-semibold text-white">{COPY.title}</h2>
          <p className="mt-6 text-base leading-[1.6] text-white sm:text-lg">{COPY.body}</p>
          <div className="mt-8"><JoinButton /></div>
        </div>
        <ScaledStage width={1440} height={488} className="mt-6">
          <Shapes />
        </ScaledStage>
      </div>
    </section>
  );
}
