import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Terminal,
  Layers,
  Database,
  Globe,
  Cpu,
  ArrowDown,
  GraduationCap,
  Award,
  Briefcase,
  Download,
} from "lucide-react";
import resumeAsset from "../assets/Samiksha_Parit_Resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samiksha Parit — Full Stack Java Developer" },
      {
        name: "description",
        content:
          "Portfolio of Samiksha Parit, a Full Stack Developer skilled in Java, Spring Boot, React.js and MySQL. B.E. Computer Science, Thane.",
      },
      { property: "og:title", content: "Samiksha Parit — Full Stack Java Developer" },
      {
        property: "og:description",
        content:
          "Java · Spring Boot · React.js · MySQL. Projects include DreamJob job portal, an e-commerce app, and an AI diabetic retinopathy detector.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "samikshaparit04902@gmail.com";
const LINKEDIN = "https://linkedin.com/in/samiksha-parit08";
const PHONE = "+91-7039144514";

const socialLinks = [
  { icon: Linkedin, href: LINKEDIN, label: "LinkedIn" },
  { icon: Github, href: "https://github.com/samu0402", label: "GitHub" },
  { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
  { icon: Phone, href: `tel:${PHONE.replace(/[^+\d]/g, "")}`, label: "Phone" },
];

const skillGroups = [
  { title: "Languages", icon: Code2, items: "Java, JavaScript (ES6+), HTML5, CSS3" },
  {
    title: "Frameworks",
    icon: Layers,
    items: "Spring Boot, React.js, Node.js, JPA/Hibernate, Axios",
  },
  { title: "Database", icon: Database, items: "MySQL, SQL" },
  { title: "Backend", icon: Terminal, items: "REST APIs, BCrypt Authentication, MVC" },
  { title: "Tools", icon: Globe, items: "Git, GitHub, VS Code, Postman, Maven" },
  { title: "Practices", icon: Cpu, items: "OOP, Responsive Design, API Integration" },
];

const projects = [
  {
    title: "DreamJob — Full Stack Job Portal",
    period: "Dec 2024 – Jan 2025",
    description:
      "A job portal with separate Applicant and Recruiter dashboards, secure authentication and role-based access, covering the complete SDLC from design to deployment. REST APIs in Spring Boot with MySQL persistence and a responsive React.js frontend with session management.",
    tags: ["Java", "Spring Boot", "React.js", "MySQL"],
  },
  {
    title: "E-Commerce Web Application",
    period: "Dec 2024",
    description:
      "A complete e-commerce platform with product listings, shopping cart, checkout and secure user authentication. Fully responsive, cross-browser UI with rendering bugs resolved for better stability.",
    tags: ["React.js", "JavaScript", "MySQL"],
  },
  {
    title: "Diabetic Retinopathy Detection System",
    period: "Aug 2023 – Apr 2024",
    description:
      "A CNN trained on retinal image datasets to detect diabetic retinopathy, with accuracy improved through image preprocessing and augmentation. Includes a web interface for uploading eye images and receiving real-time AI diagnostic results.",
    tags: ["Deep Learning", "CNN"],
  },
];

const education = [
  {
    title: "Bachelor of Engineering in Computer Science",
    org: "ARMIET College of Engineering, Thane",
    period: "Jan 2021 – May 2024",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    org: "Model College of Science & Commerce, Thane",
    period: "Jun 2018 – Feb 2020",
  },
];

const certifications = [
  {
    title: "Java Full Stack Development",
    org: "Qspider Institute, Thane",
    period: "Feb 2024 – May 2025",
  },
  { title: "Core Java", org: "Bloomzen Infosolution", period: "Jun 2022 – Nov 2022" },
];

function AnimatedBackground() {
  return (
    <div className="mesh-bg" aria-hidden="true">
      <div
        className="mesh-orb animate-orb bg-glow-cyan/50"
        style={{ width: "35vw", height: "35vw", top: "20%", left: "58%", animationDuration: "26s" }}
      />
      <div
        className="mesh-orb animate-orb bg-glow-purple/50"
        style={{
          width: "40vw",
          height: "40vw",
          top: "45%",
          left: "-10%",
          animationDuration: "34s",
          animationDirection: "alternate-reverse",
        }}
      />
      <div
        className="mesh-orb animate-orb bg-primary/40"
        style={{ width: "28vw", height: "28vw", top: "72%", left: "35%", animationDuration: "30s" }}
      />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="rounded-full border border-border bg-secondary/50 px-4 py-2 font-mono text-sm font-semibold tracking-tight text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-secondary hover:text-primary hover:shadow-md hover:shadow-primary/10"
        >
          samiksha.dev
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#projects" className="story-link hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#education" className="story-link hover:text-foreground transition-colors">
            Education
          </a>
          <a href="#certifications" className="story-link hover:text-foreground transition-colors">
            Certifications
          </a>
          <a href="#experience" className="story-link hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#about" className="story-link hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="story-link hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <div className="max-w-3xl animate-fade-up">
        <p className="mb-4 font-mono text-sm font-medium text-accent">Hello, I&apos;m</p>
        <h1 className="font-mono text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Samiksha Parit
        </h1>
        <p className="mt-6 text-xl font-medium text-muted-foreground sm:text-2xl">
          Full Stack Developer — Java · Spring Boot · React.js
        </p>
        <p className="mx-auto mt-4 max-w-xl text-lg font-light leading-relaxed text-muted-foreground">
          B.E. in Computer Science with hands-on experience building scalable web applications
          end-to-end, from REST API design to responsive UI.{" "}
          <span className="text-foreground font-medium">Code. Debug. Ship. Repeat.</span>
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          Thane, Maharashtra, India
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={resumeAsset.url}
            download="Samiksha_Parit_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-secondary-foreground backdrop-blur-sm transition-all hover:bg-secondary"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-border bg-background/50 p-2.5 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-md hover:shadow-primary/10"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center animate-fade-up">
          <p className="font-mono text-sm font-medium text-accent">Tech Stack</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            Technical skills
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, items, icon: Icon }, i) => (
            <div
              key={title}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-secondary p-2.5 text-primary transition-colors group-hover:bg-primary/10">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-sm font-semibold text-foreground">{title}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center animate-fade-up">
          <p className="font-mono text-sm font-medium text-accent">Selected Work</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            Projects I&apos;ve built
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:bg-card hover:shadow-xl hover:shadow-primary/5 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <ExternalLink className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-1 font-mono text-xs text-accent">{project.period}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm sm:p-12 animate-fade-up">
          <p className="font-mono text-sm font-medium text-accent">About Me</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            Building things that matter
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a results-driven Full Stack Developer with a B.E. in Computer Science and
              hands-on experience building scalable web applications end-to-end. I&apos;m proficient
              in Java, Spring Boot, React.js and MySQL, and I&apos;ve delivered production-ready
              applications including a full-stack job portal and an AI-powered medical diagnostic
              tool.
            </p>
            <p>
              I&apos;m certified in Java Full Stack development and comfortable with REST API
              design, responsive UI development and Agile team collaboration. I&apos;m currently
              seeking a software developer role where I can drive impactful, user-centric solutions.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 text-center">
              <p className="font-mono text-3xl font-bold text-primary">3</p>
              <p className="mt-1 text-sm text-muted-foreground">Major projects shipped</p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 text-center">
              <p className="font-mono text-3xl font-bold text-primary">2</p>
              <p className="mt-1 text-sm text-muted-foreground">Java certifications</p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 text-center">
              <p className="font-mono text-3xl font-bold text-primary">3</p>
              <p className="mt-1 text-sm text-muted-foreground">Languages: EN · HI · MR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center animate-fade-up">
          <p className="font-mono text-sm font-medium text-accent">Academic Background</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Education</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((e, i) => (
            <div
              key={e.title}
              className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card hover:shadow-xl hover:shadow-primary/5 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-secondary p-2.5 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{e.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-muted-foreground">{e.org}</p>
              <p className="mt-2 font-mono text-xs text-accent">{e.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center animate-fade-up">
          <p className="font-mono text-sm font-medium text-accent">Credentials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Certifications</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <div
              key={c.title}
              className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card hover:shadow-xl hover:shadow-primary/5 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-secondary p-2.5 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{c.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-muted-foreground">{c.org}</p>
              <p className="mt-2 font-mono text-xs text-accent">{c.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center animate-fade-up">
          <p className="font-mono text-sm font-medium text-accent">Work History</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Experience</h2>
        </div>
        <div className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm sm:p-12 animate-fade-up">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-secondary p-2.5 text-primary">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Data Entry Clerk</h3>
              <p className="text-sm text-muted-foreground">Prodocs Solutions Limited</p>
            </div>
          </div>
          <p className="mt-3 font-mono text-xs text-accent">Sep 2025 – Feb 2026</p>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-muted-foreground">
            <li>
              Entered and maintained large volumes of data across company systems with high data
              integrity and zero error tolerance.
            </li>
            <li>
              Organized and verified records, coordinating with internal teams to resolve
              discrepancies and meet daily targets.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center animate-fade-up">
        <p className="font-mono text-sm font-medium text-accent">Let&apos;s talk</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Have a role or project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          I&apos;m open to software developer opportunities and collaborations. Reach out any time.
        </p>
        <p className="mt-4 font-mono text-sm text-muted-foreground">
          {EMAIL} · {PHONE}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40"
          >
            <Mail className="h-4 w-4" />
            Send an email
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-8 py-3 text-sm font-semibold text-secondary-foreground backdrop-blur-sm transition-all hover:bg-secondary"
          >
            <Linkedin className="h-4 w-4" />
            Connect on LinkedIn
          </a>
          <a
            href={resumeAsset.url}
            download="Samiksha_Parit_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-8 py-3 text-sm font-semibold text-secondary-foreground backdrop-blur-sm transition-all hover:bg-secondary"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Samiksha Parit. Built with passion and caffeine.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
