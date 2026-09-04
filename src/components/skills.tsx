import { skills } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Skills" title="Tools I reach for" />

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 text-sm text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
