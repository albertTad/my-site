import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "./projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const nextProject = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <main className="min-h-screen bg-grid">
      <ProjectHeader />
      <article className="section !pt-10">
        <Link href="/#projects" className="text-sm text-slate-400 transition-colors hover:text-cyan-300">← All projects</Link>
        <header className="mt-10 max-w-4xl">
          <p className="eyebrow">Project case study</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">{project.shortDescription}</p>
          {(project.codeUrl || project.demoUrl) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.demoUrl && <a className="btn-primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
              {project.codeUrl && <a className={project.demoUrl ? "btn-secondary" : "btn-primary"} href={project.codeUrl} target="_blank" rel="noopener noreferrer">View code ↗</a>}
            </div>
          )}
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
          <div className="min-w-0">
            <div className="card overflow-hidden p-3 sm:p-6">
              <div className="relative aspect-[16/10]">
                <Image src={`${basePath}${project.image}`} alt={`${project.title} project preview`} fill className="object-contain" sizes="(min-width: 1024px) 66vw, 100vw" priority />
              </div>
            </div>
            <section className="mt-12">
              <p className="eyebrow">01 / Context</p>
              <h2 className="text-2xl font-semibold">The problem</h2>
              <p className="mt-4 text-slate-300">{project.problem}</p>
              <p className="mt-4 text-slate-400">{project.purpose}</p>
            </section>

            {project.contribution && (
              <section className="mt-10 border-t border-[var(--border)] pt-8">
                <h2 className="text-2xl font-semibold">My contribution</h2>
                <p className="mt-4 text-slate-300">{project.contribution}</p>
              </section>
            )}

            <section className="mt-10 border-t border-[var(--border)] pt-8">
              <p className="eyebrow">02 / Approach</p>
              <h2 className="text-2xl font-semibold">Technical decisions</h2>
              <div className="mt-6 space-y-7">
                {project.decisions.map((decision) => (
                  <div key={decision.title}>
                    <h3 className="font-semibold">{decision.title}</h3>
                    <p className="mt-2 text-slate-400">{decision.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 border-t border-[var(--border)] pt-8">
              <p className="eyebrow">03 / Implementation</p>
              <h2 className="text-2xl font-semibold">System components</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-300 marker:text-cyan-300">
                {project.keyComponents.map((item) => <li key={item} className="pl-1">{item}</li>)}
              </ul>
            </section>

            {!!project.screenshots?.length && (
              <section className="mt-10 border-t border-[var(--border)] pt-8">
                <h2 className="text-2xl font-semibold">A closer look</h2>
                <div className="mt-6 space-y-8">
                  {project.screenshots.map((shot) => (
                    <figure key={shot.src}>
                      <div className="card relative aspect-[16/10] overflow-hidden">
                        <Image src={`${basePath}${shot.src}`} alt={shot.alt} fill className="object-contain p-3" sizes="(min-width: 1024px) 66vw, 100vw" />
                      </div>
                      <figcaption className="mt-3 text-sm text-slate-400">{shot.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {!!project.results?.length && (
              <section className="mt-10 border-t border-[var(--border)] pt-8">
                <h2 className="text-2xl font-semibold">Results</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.results.map((result) => (
                    <div key={result.label} className="card p-6">
                      <p className="text-3xl font-semibold text-cyan-300">{result.value}</p>
                      <h3 className="mt-3 font-medium">{result.label}</h3>
                      <p className="mt-2 text-sm text-slate-400">{result.context}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="self-start border-t border-[var(--border)] pt-6 lg:sticky lg:top-28" aria-label="Project overview">
            <h2 className="text-sm font-semibold">Project overview</h2>
            <p className="mt-3 text-sm text-slate-400">{project.type}</p>
            <h3 className="mt-7 text-sm font-semibold">Built with</h3>
            <div className="mt-3 flex flex-wrap gap-2">{project.techStack.map((tech) => <span key={tech} className="badge">{tech}</span>)}</div>
            <Link href="/#projects" className="mt-8 inline-block text-sm text-cyan-300">Explore all projects →</Link>
          </aside>
        </div>

        {nextProject && nextProject.slug !== project.slug && (
          <nav aria-label="Next project" className="mt-16 border-t border-[var(--border)] pt-8">
            <p className="eyebrow">Next case study</p>
            <Link href={`/projects/${nextProject.slug}`} className="text-xl font-semibold transition-colors hover:text-cyan-300">{nextProject.title} →</Link>
          </nav>
        )}
      </article>
    </main>
  );
}

function ProjectHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#0b1120]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-500/10 text-cyan-300">
            AT
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold">Albert Tadros</div>
            <div className="hidden text-xs text-slate-400 sm:block">Full Stack Engineer · AI & Cloud</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link className="hover:text-cyan-300" href="/">
            Home
          </Link>
          <Link className="hover:text-cyan-300" href="/#about">
            About
          </Link>
          <Link className="hover:text-cyan-300" href="/#projects">
            Projects
          </Link>
          <Link className="hover:text-cyan-300" href="/#education">
            Education
          </Link>
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer rounded-lg border border-[var(--border)] px-3 py-2 text-sm">Menu</summary>
          <nav aria-label="Mobile navigation" className="absolute right-0 top-full mt-3 grid w-44 gap-1 rounded-xl border border-[var(--border)] bg-[#111c2e] p-2 shadow-xl">
            {[{ label: "Home", href: "/" }, { label: "Projects", href: "/#projects" }, { label: "About", href: "/#about" }, { label: "Education", href: "/#education" }].map((item) => (
              <Link key={item.label} className="rounded-lg px-3 py-2 text-sm hover:bg-white/5 hover:text-cyan-300" href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}