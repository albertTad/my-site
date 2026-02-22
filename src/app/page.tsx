import Image from "next/image";

const skills = [
  { title: "Frontend", desc: "Next.js, React, TypeScript, Tailwind", icon: "⚡" },
  { title: "Backend", desc: "Node, Python, APIs, SQL/NoSQL", icon: "🧠" },
  { title: "AI & ML", desc: "RAG, agents, embeddings, evals", icon: "🤖" },
  { title: "Cloud & DevOps", desc: "Docker, CI/CD, AWS, observability", icon: "☁️" },
];

const projects = [
  {
    title: "AI-Powered Chatbot",
    desc: "Support assistant with RAG + guardrails + analytics.",
    tag: "NLP • RAG",
    href: "#",
    thumb: "/projects/chatbot.jpg",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack store with payments, admin, and search.",
    tag: "Next.js • APIs",
    href: "#",
    thumb: "/projects/ecommerce.jpg",
  },
  {
    title: "Image Recognition Tool",
    desc: "Classifier pipeline with model serving & monitoring.",
    tag: "Vision • MLOps",
    href: "#",
    thumb: "/projects/vision.jpg",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-grid">
      <Header />

      {/* SECTION 1: HERO (first action) */}
      <section id="home" className="section pt-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Name + title */}
          <div>
            <p className="badge">Available for full-time • NYC/Remote</p>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Alex Johnson
            </h1>
            <p className="mt-3 text-xl font-semibold text-cyan-300">
              Full Stack & AI Engineer
            </p>

            <p className="mt-6 max-w-xl text-slate-300">
              Building intelligent, scalable web applications — from pixel-perfect UI to
              reliable backends, and AI features that ship safely.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#about" className="btn-secondary">
                About Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <span className="badge">Next.js</span>
              <span className="badge">TypeScript</span>
              <span className="badge">Node/Python</span>
              <span className="badge">LLM Apps</span>
              <span className="badge">AWS</span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/hero.jpg"
                  alt="Developer at laptop"
                  fill
                  className="object-cover opacity-90"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-950/20 to-cyan-500/10" />
              </div>
            </div>

            {/* subtle glow */}
            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* SECTION 2: ABOUT + SKILLS (parent section, two boxes aligned horizontally) */}
      <section id="about" className="section">
        <div className="mb-10 text-center">
          <h2 className="section-title">About & Skills</h2>
          <p className="section-subtitle">
            A quick snapshot of who I am and what I build.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* About box */}
          <div className="card p-8">
            <h3 className="text-lg font-bold">About Me</h3>
            <p className="mt-4 text-slate-300">
              I’m a full stack engineer with a focus on AI product engineering. I build
              fast, reliable web apps and integrate LLM features like RAG, tool use, and
              evaluation — with attention to safety, latency, and user experience.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Stat label="Focus" value="AI + Web Products" />
              <Stat label="Strength" value="Shipping end-to-end" />
              <Stat label="Style" value="Clean, scalable UI" />
              <Stat label="Mindset" value="Practical & measurable" />
            </div>

            <div className="mt-7">
              <a href="#contact" className="btn-secondary">
                Let’s work together
              </a>
            </div>
          </div>

          {/* Skills box */}
          <div className="card p-8">
            <h3 className="text-lg font-bold">My Skills</h3>
            <p className="mt-3 text-slate-300">
              Strong full-stack fundamentals with modern AI workflows.
            </p>

            <div className="mt-6 grid gap-3">
              {skills.map((s) => (
                <div
                  key={s.title}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/30 p-4 transition hover:border-cyan-300/25 hover:bg-white/5"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/10 text-lg">
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-sm text-slate-300">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional: small tech row */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge">Postgres</span>
              <span className="badge">Redis</span>
              <span className="badge">OpenAI / OSS LLMs</span>
              <span className="badge">Docker</span>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />
      {/* SECTION 3: EDUCATION */}
      <section id="education" className="section">
        <div className="mb-10 text-center">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation in computer engineering and advanced systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Bachelor's Degree */}
          <div className="card p-8 transition hover:border-cyan-300/25 hover:bg-white/10">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold">
                  Bachelor of Engineering
                </h3>
                <p className="text-cyan-300 font-semibold">
                  Computer Engineering
                </p>
              </div>

              <div className="text-3xl">🎓</div>
            </div>

            <div className="mt-4 text-sm text-slate-300 space-y-2">
              <p>
                Strong foundation in computer architecture, embedded systems,
                algorithms, and software engineering principles.
              </p>
              <p className="text-slate-400">
                Focus: Systems design • Low-level programming • Hardware-software integration
              </p>
            </div>
          </div>

          {/* Master's Degree */}
          <div className="card p-8 transition hover:border-cyan-300/25 hover:bg-white/10">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold">
                  Master of Science
                </h3>
                <p className="text-cyan-300 font-semibold">
                  Computer Engineering
                </p>
              </div>

              <div className="text-3xl">📘</div>
            </div>

            <div className="mt-4 text-sm text-slate-300 space-y-2">
              <p>
                Advanced study in distributed systems, machine learning,
                optimization, and large-scale application architecture.
              </p>
              <p className="text-slate-400">
                Focus: AI systems • Scalable backend architecture • Research-driven engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* SECTION 3: PROJECTS */}
      <section id="projects" className="section">
        <div className="mb-10 text-center">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="card overflow-hidden transition hover:border-cyan-300/25 hover:bg-white/10"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={p.thumb}
                  alt={p.title}
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <span className="badge">{p.tag}</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  View Project <span aria-hidden>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <SectionSeparator />

      {/* SECTION 4: CONTACT */}
      <section id="contact" className="section pb-24">
        <div className="card p-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Let’s Connect!</h2>
          <p className="mt-3 text-slate-300">
            Interested in working together? Let’s get in touch.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="btn-secondary" href="mailto:alex@example.com">
              ✉️ Email Me
            </a>
            <a
              className="btn-secondary"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              in LinkedIn
            </a>
            <a
              className="btn-secondary"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              ⌂ GitHub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SectionSeparator() {
  return (
    <div className="separator">
      <div className="separator-line" />
      <div className="separator-glow" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs font-semibold text-slate-400">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-500/15 text-cyan-300">
            AJ
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold">Alex Johnson</div>
            <div className="text-xs text-slate-400">Full Stack & AI Engineer</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a className="hover:text-cyan-300" href="#home">Home</a>
          <a className="hover:text-cyan-300" href="#about">About</a>
          <a className="hover:text-cyan-300" href="#projects">Projects</a>
          <a className="hover:text-cyan-300" href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Hire Me
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Alex Johnson. All Rights Reserved.</p>
      </div>
    </footer>
  );
}