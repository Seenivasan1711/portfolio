import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./reveal";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Contact</p>
          <h2 className="mt-3 max-w-xl text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Open to interesting problems and the teams solving them.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-ink transition-colors hover:text-accent sm:text-2xl"
          >
            {profile.email}
            <ArrowUpRight size={20} />
          </a>
        </Reveal>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Seenivasan A. Built with Next.js &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-ink"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-ink"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted transition-colors hover:text-ink"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
