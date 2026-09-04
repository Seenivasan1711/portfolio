import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Systems I've designed and shipped end to end"
          description="Independent projects — architected, built, and deployed solo, from data model to production."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <ProjectCard project={project} large />
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectImage({ project }: { project: Project }) {
  if (project.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={project.image} alt={`${project.name} screenshot`} className="h-full w-full object-cover" />;
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/10 via-transparent to-accent/5">
      <span className="text-2xl font-semibold tracking-tight text-accent/40">{project.name}</span>
    </div>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/60">
      {large && (
        <div className="aspect-[16/8] w-full overflow-hidden border-b border-line">
          <ProjectImage project={project} />
        </div>
      )}
      <div className={large ? "flex flex-1 flex-col p-6 sm:p-7" : "flex flex-1 flex-col p-6"}>
        <div className="flex items-start justify-between gap-4">
          <h3 className={`font-semibold tracking-tight text-ink ${large ? "text-xl" : "text-lg"}`}>
            {project.name}
          </h3>
          <div className="flex items-center gap-2">
            {project.status && (
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                {project.status}
              </span>
            )}
            {project.links?.[0] && (
              <a
                href={project.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} - ${project.links[0].label}`}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-colors group-hover:text-accent"
              >
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
        <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.highlights && (
          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-1 flex-wrap content-end gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
