import React, { useState, useEffect } from "react";
import "./App.css";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Layers3,
  Database,
  Terminal,
  ExternalLink,
  Sparkles,
  FileText,
  MoveRight,
} from "lucide-react";

const skills = [
  { name: "HTML & CSS", detail: "Responsive layouts", icon: Code2 },
  { name: "JavaScript", detail: "Core programming", icon: Terminal },
  { name: "React.js", detail: "Component-based UI", icon: Layers3 },
  { name: "Node & Express", detail: "Backend fundamentals", icon: Code2 },
  { name: "MongoDB & SQL", detail: "Database basics", icon: Database },
  { name: "Git & GitHub", detail: "Version control", icon: Github },
];

const projects = [
  {
    number: "01",
    title: "CampusConnect",
    type: "Campus issue reporting platform",
    description:
      "A web application concept for students to report campus issues and track their status.",
    stack: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "https://github.com/jatinmourya5523-gif/Campus-Connect",
    live: "https://campus-connect-4994.onrender.com",
  },
  {
    number: "02",
    title: "Quote Generator",
    type: "JavaScript mini project",
    description:
      "A quote app with copy-to-clipboard functionality and a dark-mode toggle.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jatinmourya5523-gif",
    live: "",
  },
  {
    number: "03",
    title: "React Practice Lab",
    type: "Learning projects",
    description:
      "Small React exercises for practising components, props, state, forms, and interactive UI.",
    stack: ["React", "Vite", "JavaScript"],
    github: "https://github.com/jatinmourya5523-gif",
    live: "",
  },
];

function App() {
  const [entered, setEntered] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);

  useEffect(() => {
    if (!showFlowers) return;

    const timer = setTimeout(() => {
      setEntered(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showFlowers]);

  const startPortfolio = () => {
    setShowFlowers(true);
  };

  const flowers = Array.from({ length: 45 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${3 + Math.random() * 4}s`,
    size: `${12 + Math.random() * 18}px`,
  }));

  return (
    <>
      {!entered && (
        <section
          className={`welcome-screen ${
            showFlowers ? "flower-mode" : ""
          }`}
        >
          <div className="welcome-glow welcome-glow-one" />
          <div className="welcome-glow welcome-glow-two" />

          {!showFlowers ? (
            <div className="welcome-card">
              <div className="welcome-mark">
                JM<span>.</span>
              </div>

              <p className="welcome-kicker">
                <span className="status-dot" /> PERSONAL PORTFOLIO · 2026
              </p>

              <h1>
                Hey, I’m <span>Jatin Mourya</span>
              </h1>

              <p className="welcome-copy">
                A Computer Science student exploring code, creativity, and
                full-stack development.
              </p>

              <button className="enter-button" onClick={startPortfolio}>
                Enter Portfolio <MoveRight size={19} />
              </button>

              <p className="welcome-foot">
                DESIGNED TO BUILD · BUILT TO LEARN
              </p>
            </div>
          ) : (
            <div className="grand-welcome">
              <p className="grand-welcome-small">WELCOME TO</p>

              <h1>
                Jatin <span>Mourya</span>
              </h1>

              <h2>PORTFOLIO</h2>

              <p>Code · Create · Build · Grow</p>

              <div className="flower-shower" aria-hidden="true">
                {flowers.map((flower) => (
                  <span
                    key={flower.id}
                    className="falling-flower"
                    style={{
                      left: flower.left,
                      animationDelay: flower.delay,
                      animationDuration: flower.duration,
                      fontSize: flower.size,
                    }}
                  >
                    🌸
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      <div
        className={`site-shell ${
          entered ? "site-entered" : "site-hidden"
        }`}
      >
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <header className="navbar wrap">
          <a className="brand" href="#home" aria-label="Jatin home">
            <span className="brand-mark">J</span>
            <span>
              jatin<span className="brand-dot">.</span>
            </span>
          </a>

          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-cta" href="#contact">
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </header>

        <main>
          <section className="hero wrap" id="home">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" />
                OPEN TO LEARNING & INTERNSHIP OPPORTUNITIES
              </div>

              <p className="hello">Hello, I'm</p>

              <h1>
                Jatin <span>Mourya</span>
                <i>.</i>
              </h1>

              <h2>
                Computer Science Student
                <br />
                <span>& Aspiring Full-Stack Developer</span>
              </h2>

              <p className="hero-description">
                I enjoy turning ideas into useful web experiences. Currently
                learning, building projects, and strengthening my foundations
                in software development.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowUpRight size={17} />
                </a>

                <a className="button button-quiet" href="#about">
                  More about me <ArrowDown size={16} />
                </a>

                <a
                  className="button button-quiet"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText size={16} /> View Resume
                </a>
              </div>

              <div className="social-row">
                <a
                  href="https://github.com/jatinmourya5523-gif"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/jatin-mourya-79a8793a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} /> LinkedIn
                </a>

                <span className="social-divider" />
                <span className="location-note">Based in India</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="photo-frame">
                <div className="photo-topline">
                  <span>PROFILE / 001</span>
                  <Sparkles size={15} />
                </div>

                <img src="/jatin-photo.jpg" alt="Jatin Mourya" />

                <div className="photo-caption">
                  <span className="caption-dot" />

                  <div>
                    <strong>Jatin Mourya</strong>
                    <small>Building my next chapter</small>
                  </div>

                  <span className="caption-code">JM_01</span>
                </div>
              </div>

              <div className="floating-chip chip-code">
                <Code2 size={16} />
                <span>Build. Learn. Repeat.</span>
              </div>

              <div className="floating-chip chip-stack">
                <span className="mini-pulse" /> React · JavaScript
              </div>

              <div className="visual-index">
                01 <span>/ 04</span>
              </div>
            </div>

            <a className="scroll-hint" href="#about">
              <span className="scroll-line" /> SCROLL TO DISCOVER
            </a>
          </section>

          <section className="section wrap about-section" id="about">
            <div className="section-label">
              <span>01</span> / ABOUT ME
            </div>

            <div className="about-grid">
              <div>
                <h2>
                  Curious mind.
                  <br />
                  <span>Builder mindset.</span>
                </h2>
              </div>

              <div className="about-text">
                <p>
                  I’m a third-year B.Tech Computer Science Engineering student
                  at Future University, Bareilly. I’m exploring full-stack
                  development and software engineering through hands-on
                  practice.
                </p>

                <p>
                  My current focus is to strengthen JavaScript and React,
                  understand backend development, and build projects that solve
                  practical problems.
                </p>

                <div className="about-facts">
                  <div>
                    <strong>2024–2028</strong>
                    <span>B.Tech CSE</span>
                  </div>

                  <div>
                    <strong>Full-Stack</strong>
                    <span>Learning focus</span>
                  </div>

                  <div>
                    <strong>Hands-on</strong>
                    <span>Project approach</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section wrap" id="skills">
            <div className="section-heading">
              <div>
                <div className="section-label">
                  <span>02</span> / TOOLKIT
                </div>

                <h2>
                  Skills I’m <span>growing.</span>
                </h2>
              </div>

              <p>
                My current learning toolkit. I keep improving these skills
                through practice and small projects.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map(({ name, detail, icon: Icon }, i) => (
                <article className="skill-card" key={name}>
                  <div className="skill-card-top">
                    <span className="skill-icon">
                      <Icon size={19} />
                    </span>
                    <span className="skill-number">0{i + 1}</span>
                  </div>

                  <h3>{name}</h3>
                  <p>{detail}</p>

                  <div className="skill-line">
                    <span
                      style={{
                        width: `${[82, 72, 65, 52, 48, 58][i]}%`,
                      }}
                    />
                  </div>
                </article>
              ))}
            </div>

            <p className="skills-note">
              <span className="note-star">✳</span> Skill bars are visual
              placeholders, not test scores. I’m learning and improving
              continuously.
            </p>
          </section>

          <section className="section wrap projects-section" id="projects">
            <div className="section-heading">
              <div>
                <div className="section-label">
                  <span>03</span> / SELECTED WORK
                </div>

                <h2>
                  Things I’ve <span>built.</span>
                </h2>
              </div>

              <p>
                Small steps, real practice. These projects reflect my ongoing
                learning journey.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>

                  <div className="project-main">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tag-row">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={18} />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}

                    <span className="project-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <p className="project-disclaimer">
              Project descriptions should match your actual code and progress.
            </p>
          </section>

          <section className="section wrap education-section" id="education">
            <div className="section-label">
              <span>04</span> / EDUCATION
            </div>

            <div className="education-card">
              <div className="education-icon">
                <Layers3 size={22} />
              </div>

              <div>
                <span className="project-type">2024 — 2028 · EXPECTED</span>
                <h3>B.Tech — Computer Science & Engineering</h3>
                <p>Future University, Bareilly</p>
              </div>

              <span className="education-status">IN PROGRESS</span>
            </div>
          </section>

          <section className="section wrap resume-section" id="resume">
            <div className="section-label">
              <span>05</span> / MY RESUME
            </div>

            <div className="resume-card">
              <div className="resume-icon">
                <FileText size={25} />
              </div>

              <div className="resume-copy">
                <h3>Want a quick overview?</h3>
                <p>
                  View or download my resume for my education, technical skills,
                  and project experience.
                </p>
              </div>

              <a
                className="button button-primary"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={16} /> Open Resume{" "}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="wrap contact-inner">
              <div className="section-label">
                <span>06</span> / CONTACT
              </div>

              <h2>
                Have an opportunity
                <br />
                or an idea? <span>Let’s connect.</span>
              </h2>

              <p>
                I’m open to learning opportunities, collaboration, and
                internships where I can grow as a developer.
              </p>

              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href="mailto:jatinmourya5523@gmail.com"
                >
                  <Mail size={17} /> Email me <ArrowUpRight size={17} />
                </a>

                <a
                  className="button button-quiet"
                  href="https://www.linkedin.com/in/jatin-mourya-79a8793a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="wrap footer">
          <a className="brand" href="#home">
            <span className="brand-mark">J</span>
            <span>
              jatin<span className="brand-dot">.</span>
            </span>
          </a>

          <p>Designed with curiosity. Built with code.</p>
          <span>© {new Date().getFullYear()} Jatin Mourya</span>
        </footer>
      </div>
    </>
  );
}

export default App;