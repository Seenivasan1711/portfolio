import { stats } from "@/lib/data";
import { Reveal } from "./reveal";

export function Stats() {
  return (
    <section className="border-y border-line py-14">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div>
                <p className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
