import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "./projects"

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-grid">
      <ProjectHeader />

      <section className="section pt-10">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-cyan-300"
          >
            ← Back to Portfolio
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Left content */}
          <div>
            <span className="badge">{project.category}</span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              {project.shortDescription}
            </p>

            <div className="mt-8 grid gap-6">
              <div className="card p-6">
                <h2 className="text-xl font-bold">Project Type</h2>
                <p className="mt-3 text-slate-300">{project.type}</p>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-bold">Purpose</h2>
                <p className="mt-3 text-slate-300">{project.purpose}</p>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-bold">Key Components</h2>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {project.keyComponents.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-bold">Tech Stack</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar / image */}
          <div className="lg:sticky lg:top-24">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-cyan-500/10" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold">Category</h3>
                <p className="mt-2 text-slate-300">{project.category}</p>

                <div className="mt-6">
                  <Link href="/" className="btn-primary w-full">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-500/15 text-cyan-300">
            AJ
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold">Albert Tadros</div>
            <div className="text-xs text-slate-400">Full Stack & AI Engineer</div>
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
          <Link className="hover:text-cyan-300" href="/#contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}