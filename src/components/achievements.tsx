import { Award } from "lucide-react";
import { achievements, education } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Achievements() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Recognition" title="Achievements & education" />

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="flex gap-4 rounded-2xl border border-line bg-surface p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">{a.title}</h3>
                    <p className="text-xs font-medium text-muted">{a.meta}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{a.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Education
              </h3>
              <p className="mt-3 font-semibold text-ink">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
              <p className="text-sm text-muted">{education.location}</p>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-4 text-sm">
                <span className="text-muted">{education.dates}</span>
                <span className="font-medium text-ink">{education.detail}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
