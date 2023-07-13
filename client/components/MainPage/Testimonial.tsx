import Image from "next/image";
import { GridPattern } from "../Careers/GridPattern";

export function Testimonial({ children }: any) {
  return (
    <aside
      aria-label={`Testimonial from me`}
      className="relative bg-slate-100 py-16 sm:py-32"
    >
      <div className="text-slate-900/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
      <figure>
        <div className="flex text-slate-900 sm:justify-center"></div>
        <blockquote className="mt-10 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center">
          {children}
        </blockquote>
      </figure>
    </aside>
  );
}
