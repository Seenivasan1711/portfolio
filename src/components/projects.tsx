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

        <div className="grid gap-5 sm:grid-cols-2">
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

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/60 ${
        large ? "sm:p-7" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className={`font-semibold tracking-tight text-ink ${large ? "text-xl" : "text-lg"}`}>
          {project.name}
        </h3>
        {project.links?.[0] && (
          <a
            href={project.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} - ${project.links[0].label}`}
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-colors group-hover:text-accent"
          >
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
