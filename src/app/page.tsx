import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Fill in your contact details. Empty values are never rendered as links.
const socialLinks = {
  email: "",
  linkedin: "",
  github: "",
};
const hasContactLinks = Object.values(socialLinks).some(Boolean);

// Add university names and graduation years when ready to publish them.
const education = [
  { degree: "Master of Science", field: "Computer Engineering", university: "", year: "", focus: "AI systems, cryptography, and software architecture" },
  { degree: "Bachelor of Engineering", field: "Computer Engineering", university: "", year: "", focus: "Computer architecture, algorithms, and embedded systems" },
];

const skills = [
  { title: "Backend", desc: "C#, Python, SQL, MongoDB ", icon: "server" },
  { title: "Frontend", desc: "React, TypeScript, Tailwind", icon: "code" },
  { title: "AI & ML", desc: "AI Agents, MCP, RAG, Model Training", icon: "ai" },
  { title: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes", icon: "cloud" },
];

const projects = [
  {
    title: "Filesystem MCP Server",
    desc: "Secure MCP server for reading, listing, and searching files within sandboxed local directories.",
    tag: "AI Tooling / Backend Engineering",
    href: "/projects/filesystem-mcp-server",
    thumb: "/projects/mcp_project.png",
  },
  {
    title: "Data Privacy Platform",
    desc: "Detect sensitive data, control who can access it, and track activity through a full-stack privacy dashboard.",
    tag: "Full Stack / Data Security",
    href: "/projects/data-privacy-management-dashboard",
    thumb: "/projects/privacy_project.png",
  },
  {
    title: "Spinal Fracture Detection",
    desc: "A computer vision project exploring fracture detection and interpretable model predictions.",
    tag: "Machine Learning / Computer Vision",
    href: "/projects/spinal-fracture-detection",
    thumb: "/projects/spinal_project.png",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-grid">
      <Header />
      <section id="home" className="section !pt-14 sm:!pt-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Albert Tadros · Full Stack Engineer</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Building reliable software.<br />
              <span className="text-cyan-300">Exploring applied AI.</span>
            </h1>

            <p className="mt-6 max-w-xl text-slate-300">
              From privacy dashboards to tools for AI agents, I build applications
              that connect useful interfaces with secure, dependable backends.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href={hasContactLinks ? "#contact" : "#about"} className="btn-secondary">
                {hasContactLinks ? "Get in touch" : "About me"}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <span className="badge">Full Stack Web Development</span>
              <span className="badge">AI Agents</span>
              <span className="badge">Cloud & DevOps</span>
            </div>
          </div>
          <div className="relative">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/projects/at_logo_2.png"
                  alt="Albert Tadros personal brand artwork"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />

              </div>
            </div>

          </div>
        </div>
      </section>

      <SectionSeparator />
      <section id="projects" className="section">
        <div className="mb-10">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of projects in full-stack development, AI, and secure systems.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="card card-hover group flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full border-b border-[var(--border)] bg-[#0b1120]">
                <Image
                  src={p.thumb}
                  alt={`${p.title} project preview`}
                  fill
                  className="object-contain p-3"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />

              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-xs font-medium text-slate-400">{p.tag}</p>
                <p className="mt-3 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-cyan-300">
                  Read case study <span aria-hidden>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SectionSeparator />
      <section id="about" className="section">
        <div className="mb-10">
          <h2 className="section-title">Engineering with purpose</h2>
          <p className="section-subtitle">
            The background and tools behind my work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="py-2">
            <h3 className="text-lg font-bold">About Me</h3>
            <p className="mt-4 text-slate-300">
              I’m a full stack engineer with a background in computer engineering
              and an interest in applied AI. My projects span web applications,
              privacy tooling, computer vision, and secure access to local data.
            </p>

            <p className="mt-5 max-w-xl text-slate-400">
              I enjoy working across the stack: building the
              backend, shaping the interface, and understanding how the system behaves as a whole.
            </p>

            <div className="mt-7">
              <a href={hasContactLinks ? "#contact" : "#projects"} className="btn-secondary">
                {hasContactLinks ? "Let’s work together" : "Explore my projects"}
              </a>
            </div>
          </div>
          <div className="py-2">
            <h3 className="text-lg font-bold">My Skills</h3>
            <p className="mt-3 text-slate-300">
              Full-stack fundamentals with modern AI workflows.
            </p>

            <div className="mt-6 grid gap-3">
              {skills.map((s) => (
                <div
                  key={s.title}
                  className="flex items-start gap-4 border-b border-[var(--border)] py-4 last:border-0"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/10 text-lg">
                    <SkillIcon name={s.icon} />
                  </div>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-sm text-slate-300">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />
      <section id="education" className="section">
        <div className="mb-10">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation in computer engineering and advanced systems.
          </p>
        </div>

        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {education.map((item) => (
            <div key={item.degree} className="grid gap-3 py-6 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
              <div>
                <h3 className="text-lg font-semibold">{item.degree}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.field}</p>
                {(item.university || item.year) && <p className="mt-2 text-sm text-slate-400">{[item.university, item.year].filter(Boolean).join(" · ")}</p>}
              </div>
              <p className="text-sm text-slate-400 sm:self-center">{item.focus}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionSeparator />
      {hasContactLinks && (
        <section id="contact" className="section !pb-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 className="section-title">Have a project or role in mind?</h2>
              <p className="mt-4 max-w-xl text-slate-400">Let’s talk about software, applied AI, and what you’re building.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              {socialLinks.email && <a className="btn-primary" href={`mailto:${socialLinks.email}`}>Email me <span aria-hidden>↗</span></a>}
              {socialLinks.linkedin && <a className="btn-secondary" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={18} aria-hidden="true" /> LinkedIn</a>}
              {socialLinks.github && <a className="btn-secondary" href={socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub size={18} aria-hidden="true" /> GitHub</a>}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

function SectionSeparator() {
  return (
    <div className="separator">
      <div className="separator-line" />

    </div>
  );
}

function SkillIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    code: "m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14",
    server: "M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01",
    ai: "M8 8h8v8H8zM9 3v5m6-5v5M9 16v5m6-5v5M3 9h5m-5 6h5m8-6h5m-5 6h5",
    cloud: "M6 18a4 4 0 0 1-1-7.87 7 7 0 0 1 13.5-1.5A4.75 4.75 0 0 1 18 18Z",
  };
  return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#0b1120]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-500/10 text-cyan-300">
            AT
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold">Albert Tadros</div>
            <div className="hidden text-xs text-slate-400 sm:block">Full Stack Engineer · AI & Cloud</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a className="hover:text-cyan-300" href="#home">Home</a>
          <a className="hover:text-cyan-300" href="#about">About</a>
          <a className="hover:text-cyan-300" href="#projects">Projects</a>
          <a className="hover:text-cyan-300" href="#education">Education</a>
          {hasContactLinks && <a className="hover:text-cyan-300" href="#contact">Contact</a>}
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer rounded-lg border border-[var(--border)] px-3 py-2 text-sm">Menu</summary>
          <nav aria-label="Mobile navigation" className="absolute right-0 top-full mt-3 grid w-44 gap-1 rounded-xl border border-[var(--border)] bg-[#111c2e] p-2 shadow-xl">
            {["Home", "Projects", "About", "Education", ...(hasContactLinks ? ["Contact"] : [])].map((item) => <a key={item} className="rounded-lg px-3 py-2 text-sm hover:bg-white/5 hover:text-cyan-300" href={`#${item.toLowerCase()}`}>{item}</a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Albert Tadros. All Rights Reserved.</p>
      </div>
    </footer>
  );
}