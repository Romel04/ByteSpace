import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="relative isolate overflow-hidden bg-[#fafafa]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-8%] left-[38%] size-[520px] rounded-full bg-lime/40 blur-[130px]" />
        <div className="absolute top-[28%] right-[-6%] size-[360px] rounded-full bg-lime/35 blur-[120px]" />
        <div className="absolute bottom-[-12%] left-[-8%] size-[520px] rounded-full bg-blue/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-[1204px] px-5 py-20 sm:px-6 lg:pt-[72px] lg:pb-[60px]">
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_580px] lg:gap-16">
          <h2 id="testimonials-title" className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.2] font-semibold text-black lg:mt-[30px] lg:max-w-[480px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-lg leading-[29px] text-body">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-16 grid items-start gap-6 md:grid-cols-3 lg:gap-[42px]">
          {TESTIMONIALS.map((t) => (
            <li key={t.name} className="rounded-3xl bg-white p-6">
              <Image src={t.image} alt={`Portrait of ${t.name}`} width={80} height={80} className="size-20 rounded-full object-cover" />
              <p className="mt-6 font-heading text-xl font-semibold text-black">{t.name}</p>
              <p className="mt-1 text-lg text-blue">{t.role}</p>
              <blockquote className="mt-6 text-lg leading-[29px] text-body">“{t.quote}”</blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
