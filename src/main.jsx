import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiMail,
  FiMapPin,
  FiMenu,
  FiServer,
  FiShield,
  FiX,
} from 'react-icons/fi'
import './styles.css'

const githubProject = 'https://github.com/DeviBala02/LunaraWebsite'
const githubProfile = 'https://github.com/DeviBala02'
const email = 'devibalausha@gmail.com'

const skills = [
  ['Java', 'Core Java, OOP, Collections, Java 8/17, Streams, Multithreading'],
  ['Spring Boot', 'REST APIs, Spring Security, Data JPA, Hibernate, Validation'],
  ['Microservices', 'Service-oriented design, API integration, failure handling'],
  ['Databases', 'MySQL, SQL, DB2, IMS, VSAM, QSAM, JDBC'],
  ['Messaging', 'Apache Kafka and event-driven concepts'],
  ['DevOps', 'Git, GitHub, Bitbucket, Jenkins, Maven, Gradle, Docker, Kubernetes'],
  ['Cloud & AI', 'AWS S3, Azure AI, Generative AI'],
  ['Testing', 'JUnit, Mockito, Postman, Swagger / OpenAPI, SonarQube'],
]

const experience = [
  {
    company: 'Tata Consultancy Services',
    role: 'Software Developer · Banking / BFSI',
    period: 'Nov 2024 — Jul 2026',
    project: 'Payment Processing Modernization · Global Payments',
    points: [
      'Engineered and maintained 10+ Java / Spring Boot microservices supporting banking rewards and transaction workflows.',
      'Spearheaded COBOL-to-Java migration work, validating 10,000+ lines of legacy business logic per sprint for functional equivalence.',
      'Implemented core business logic with Spring Data JPA and Hibernate ORM for high-volume transactional data.',
      'Strengthened REST API security using Spring Security with authentication and authorization mechanisms.',
      'Resolved backend production defects using systematic debugging and root-cause analysis.',
      'Worked with GitHub / Bitbucket, Maven / Gradle and Jenkins across collaborative CI/CD workflows.',
      'Containerized applications with Docker and gained hands-on Kubernetes deployment experience.',
      'Processed enterprise datasets across DB2, IMS, VSAM and QSAM, with AWS S3 used for migration artifacts.',
    ],
  },
  {
    company: 'Missile Ingeniator',
    role: 'Front End Developer · Intern',
    period: 'Sep 2022 — Oct 2024',
    project: 'E-learning Web Application · SimplZone',
    points: [
      'Developed responsive interfaces using ReactJS, TypeScript and Tailwind CSS.',
      'Built reusable UI components with consistent responsive behavior.',
      'Translated Figma designs into responsive web interfaces.',
      'Improved usability, responsiveness and visual consistency across screen sizes.',
    ],
  },
]

const certifications = [
  ['Microsoft Certified: Azure AI Engineer Associate', 'Nov 2025 — Nov 2026'],
  ['Microsoft Certified: Power Platform Developer Associate', 'Feb 2026 — Feb 2027'],
]

const awards = [
  ['Technical Excellence Award', 'Mar 2026', 'Recognised for technical expertise and improved team delivery.'],
  ['Star of the Month', 'Dec 2025', 'Recognised for consistent, high-quality code and timely delivery.'],
  ['Star Team Award', 'Aug 2025', 'Part of a high-performance project team.'],
  ['Learning Achievement Award', 'Mar 2025', 'Recognised for continuous learning and technical upskilling.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const ids = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const current = ids.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        return window.scrollY >= el.offsetTop - 180 && window.scrollY < el.offsetTop + el.offsetHeight - 180
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">DB</span>
          <span>Devi Bala V</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((id) => (
            <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={closeMenu}>
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={githubProfile} target="_blank" rel="noreferrer">
          <FiGithub /> GitHub
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> Open to software development opportunities</div>
            <h1>Building reliable <span>Java & Spring Boot</span> systems.</h1>
            <p className="hero-lead">
              Software Developer with nearly 2 years of experience in Java, Spring Boot, REST APIs and microservices,
              with hands-on banking integration and COBOL-to-Java modernization experience.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View my work <FiArrowUpRight /></a>
              <a className="btn secondary" href={`${import.meta.env.BASE_URL}assets/Devi-Bala-V-Resume.pdf`} download>Download resume <FiDownload /></a>
            </div>
            <div className="hero-meta">
              <span><FiMapPin /> Chennai, India</span>
              <a href={`mailto:${email}`}><FiMail /> {email}</a>
            </div>
          </div>

          <div className="hero-visual reveal delay-1">
            <div className="glow" />
            <div className="profile-card">
              <div className="profile-image-wrap">
                <img src={`${import.meta.env.BASE_URL}assets/profile.jpeg`} alt="Devi Bala V" className="profile-image" />
              </div>
              <div className="profile-caption">
                <span>Software Developer</span>
                <strong>Java · Spring Boot · Microservices</strong>
              </div>
            </div>
            <div className="floating-card floating-one"><FiServer /><div><b>10+</b><small>Microservices</small></div></div>
            <div className="floating-card floating-two"><FiCheckCircle /><div><b>10K+</b><small>Legacy lines validated</small></div></div>
          </div>
        </section>

        <section id="about" className="section section-light">
          <div className="section-heading">
            <span className="section-kicker">01 · About</span>
            <h2>Backend-focused, with a modern engineering mindset.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I work across the backend development lifecycle — from understanding business rules and designing APIs
                to implementing persistence, securing services, debugging production issues and supporting deployment.
              </p>
              <p>
                My recent experience has been in banking integrations, where I worked on Spring Boot microservices and
                legacy modernization. I also bring frontend experience from an earlier ReactJS internship, giving me a
                useful end-to-end perspective when collaborating with UI teams.
              </p>
              <div className="mini-stats">
                <div><strong>~2</strong><span>Years experience</span></div>
                <div><strong>9.09</strong><span>CGPA</span></div>
                <div><strong>2</strong><span>Microsoft certifications</span></div>
              </div>
            </div>
            <div className="focus-card">
              <div className="focus-icon"><FiCode /></div>
              <h3>What I bring</h3>
              <ul>
                <li>Clean, maintainable Java code</li>
                <li>RESTful APIs and microservice architecture</li>
                <li>Database-driven business logic</li>
                <li>Production debugging and RCA</li>
                <li>CI/CD and containerization exposure</li>
                <li>Legacy modernization mindset</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section dark-section">
          <div className="section-heading centered">
            <span className="section-kicker">02 · Technical toolkit</span>
            <h2>Technologies I use to build and ship.</h2>
          </div>
          <div className="skills-grid">
            {skills.map(([name, detail]) => (
              <article className="skill-card" key={name}>
                <div className="skill-number">{String(skills.findIndex((s) => s[0] === name) + 1).padStart(2, '0')}</div>
                <h3>{name}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
          <div className="tech-strip">
            {['Java', 'Spring Boot', 'JPA', 'Hibernate', 'Kafka', 'MySQL', 'Git', 'Jenkins', 'Docker', 'Kubernetes', 'AWS S3', 'Azure AI'].map((t) => <span key={t}>{t}</span>)}
          </div>
        </section>

        <section id="experience" className="section section-light">
          <div className="section-heading">
            <span className="section-kicker">03 · Experience</span>
            <h2>Experience that connects enterprise systems with modern development.</h2>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">0{index + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-top">
                    <div>
                      <span className="company">{item.company}</span>
                      <h3>{item.role}</h3>
                    </div>
                    <span className="period"><FiCalendar /> {item.period}</span>
                  </div>
                  <div className="project-label"><FiBriefcase /> {item.project}</div>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section project-section">
          <div className="section-heading centered">
            <span className="section-kicker">04 · Projects</span>
            <h2>Selected work & technical projects.</h2>
          </div>
          <div className="project-grid">
            <article className="project-card featured-project">
              <div className="project-topline"><span>GitHub project</span><FiGithub /></div>
              <h3>Lunara Website</h3>
              <p>
                A React-based web project showcasing modern responsive UI development, component-driven design and
                frontend implementation using technologies from my web development background.
              </p>
              <div className="project-tags"><span>ReactJS</span><span>TypeScript</span><span>Tailwind CSS</span><span>Responsive UI</span></div>
              <a className="project-link" href={githubProject} target="_blank" rel="noreferrer">View repository <FiExternalLink /></a>
            </article>
            <article className="project-card">
              <div className="project-topline"><span>Academic / research</span><FiCode /></div>
              <h3>AI Virtual Mouse & Keyboard</h3>
              <p>
                Computer-vision project exploring eye gesture tracking to translate eye movements into cursor actions
                and mouse clicks, designed with accessibility and affordability in mind.
              </p>
              <div className="project-tags"><span>Python</span><span>OpenCV</span><span>TensorFlow</span><span>Computer Vision</span></div>
              <span className="project-note">Paper: AI Virtual Mouse and Keyboard Using OpenCV</span>
            </article>
            <article className="project-card">
              <div className="project-topline"><span>Professional focus</span><FiShield /></div>
              <h3>COBOL → Java Modernization</h3>
              <p>
                Enterprise modernization work focused on translating and validating legacy business logic into Java / Spring Boot
                services while preserving functional behavior and handling transactional data.
              </p>
              <div className="project-tags"><span>Java</span><span>Spring Boot</span><span>DB2</span><span>Legacy Modernization</span></div>
              <span className="project-note">10,000+ lines validated per sprint</span>
            </article>
          </div>
          <div className="github-banner">
            <div><FiGithub /><div><strong>More code on GitHub</strong><span>Explore my repositories and development work.</span></div></div>
            <a className="btn secondary" href={githubProfile} target="_blank" rel="noreferrer">Open GitHub <FiArrowUpRight /></a>
          </div>
        </section>

        <section className="section section-light credentials-section">
          <div className="credentials-grid">
            <div>
              <span className="section-kicker">05 · Certifications</span>
              <h2>Continuous learning.</h2>
              <div className="credential-list">
                {certifications.map(([title, date]) => <div className="credential" key={title}><FiCheckCircle /><div><strong>{title}</strong><span>{date}</span></div></div>)}
              </div>
            </div>
            <div>
              <span className="section-kicker">Awards</span>
              <h2>Recognition.</h2>
              <div className="award-list">
                {awards.map(([title, date, detail]) => <div className="award" key={title}><span>{date}</span><div><strong>{title}</strong><p>{detail}</p></div></div>)}
              </div>
            </div>
          </div>
          <div className="education-row">
            <div><span>Education</span><strong>B.Tech · Information Technology</strong><small>IFET College of Engineering · 2020 — 2024</small></div>
            <div className="cgpa"><strong>9.09</strong><span>CGPA</span></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <span className="section-kicker">06 · Contact</span>
              <h2>Let’s build something useful.</h2>
              <p>I’m open to software development opportunities where I can contribute with Java, Spring Boot, microservices and strong problem-solving.</p>
            </div>
            <div className="contact-actions">
              <a className="btn primary" href={`mailto:${email}`}>Email me <FiMail /></a>
              <a className="social-link" href={githubProfile} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Devi Bala V</span>
        <span>Java · Spring Boot · Microservices</span>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
