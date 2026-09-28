import { Star } from "lucide-react";
import { AvatarStack } from "./AvatarStack";

const card = "rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.10)]";

export function TopicCard({ className = "" }: { className?: string }) {
  return (
    <div className={`${card} p-4 ${className}`}>
      <p className="text-base font-medium text-ink">UI/UX Design</p>
      <p className="mt-0.5 text-xs whitespace-nowrap text-muted">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
    </div>
  );
}

export function LearningProgressCard({ className = "" }: { className?: string }) {
  return (
    <div className={`${card} p-4 ${className}`}>
      <p className="text-sm font-medium text-ink">Learning Progress</p>
      <p className="mt-1 font-heading text-[44px] leading-[58px] font-medium text-ink">55%</p>
      <div className="mt-2 h-2 rounded-full bg-surface" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} aria-label="Learning progress">
        <div className="h-full w-[56%] rounded-full bg-lime" />
      </div>
    </div>
  );
}

export function HappyStudentsCard({ className = "" }: { className?: string }) {
  return (
    <div className={`${card} py-4 pr-2.5 pl-4 ${className}`}>
      <p className="text-base font-medium text-ink">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-xs text-body">
        <span className="font-bold">4.5</span> <span className="text-muted">(240)</span>
        <Star className="size-3.5 fill-lime text-lime" aria-hidden="true" />
      </p>
      <AvatarStack count={7} label="2K+" className="mt-2.5" />
    </div>
  );
}

export function RevenueCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-blue p-4 text-white ${className}`}>
      <p className="text-base font-medium">Total Revenue</p>
      <p className="text-[10px] text-white/70">July 1-28</p>
      <p className="mt-1 font-heading text-[28px] leading-9 font-semibold">$120.29</p>
      <div className="mt-2 h-2 rounded-full bg-white/25">
        <div className="h-full w-1/2 rounded-full bg-lime" />
      </div>
    </div>
  );
}

export function YearToDateCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-blue p-4 text-white ${className}`}>
      <p className="text-base font-medium">Year to Date</p>
      <p className="text-[10px] text-white/70">2023</p>
      <p className="mt-1 font-heading text-[24px] leading-8 font-semibold">$1,200.38</p>
      <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[11px] font-bold text-ink">+12$</span>
    </div>
  );
}
