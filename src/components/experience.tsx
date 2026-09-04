import { experience } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built things"
          description="Enterprise SaaS platforms across healthcare-compliance and test-automation domains."
        />

        <div className="space-y-10">
          {experience.map((role, i) => (
            <Reveal key={role.company + role.dates} delay={i * 0.08}>
              <div className="grid gap-4 border-l border-line pl-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    {role.title} <span className="text-muted">· {role.company}</span>
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">{role.location}</p>
                </div>
                <p className="text-sm font-medium text-muted sm:text-right">{role.dates}</p>
              </div>
              <ul className="mt-4 space-y-2.5 border-l border-line pl-6">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
