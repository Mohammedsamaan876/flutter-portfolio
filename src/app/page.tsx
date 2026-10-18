import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";

const stack = [["Core", "Flutter", "Dart"], ["Firebase", "Firebase", "Firestore", "Firebase Authentication"], ["State Management", "Provider", "Riverpod", "BLoC", "GetX"], ["Networking", "REST APIs"], ["Local Storage", "SQLite", "Hive", "SharedPreferences"], ["Architecture", "Clean Architecture", "MVVM"], ["Development", "Git", "GitHub", "Postman"]];
const process = [["01", "Understand", "Clarify the problem, requirements and users."], ["02", "Design", "Shape a simple, usable mobile interface."], ["03", "Build", "Develop with Flutter and Dart."], ["04", "Integrate", "Connect APIs, Firebase and required services."], ["05", "Improve", "Test, refine and improve the product."]];
const socials = [["GitHub", "https://github.com/Mohammedsamaan876"], ["LinkedIn", "https://www.linkedin.com/in/mohammed-samaan-jushiddi-072a042b9/"]];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="shell hero" aria-labelledby="hero-title">
        <div className="hero-copy reveal">
          <div className="hero-status-pill">
            <span className="hero-status-dot" aria-hidden="true"></span>
            <span>Available for Mobile Projects &amp; Roles</span>
          </div>

          <h1 id="hero-title" className="hero-title">HELLO</h1>

          <p className="hero-name">
            I&apos;m Mohammed <span className="hero-name-highlight">Samaan Jushiddi.</span>
          </p>

          <div className="hero-role-wrapper">
            <span className="hero-role-badge">Flutter Developer</span>
            <span className="hero-role-dot">·</span>
            <span className="hero-role-subtitle">Chief Mobile Architect</span>
          </div>

          <p className="hero-description">
            Building high-performance, polished cross-platform mobile experiences for iOS and Android with Flutter and Dart. Specializing in Clean Architecture, fluid animations, and reliable offline-first systems.
          </p>

          <div className="hero-highlights desktop-highlights">
            <div className="highlight-pill">
              <span className="highlight-icon">📱</span>
              <span>iOS &amp; Android Apps</span>
            </div>
            <div className="highlight-pill">
              <span className="highlight-icon">⚡</span>
              <span>Clean Architecture</span>
            </div>
            <div className="highlight-pill">
              <span className="highlight-icon">🔥</span>
              <span>Firebase &amp; REST APIs</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#work" className="hero-action-primary">
              <span>Explore Work</span>
              <span className="action-arrow" aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className="hero-action-secondary">
              <span>Let&apos;s Talk</span>
              <span className="action-arrow" aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/Mohammedsamaan876"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile"
            >
              <span>GitHub</span>
              <span className="action-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-portrait reveal delay">
          <Image
            src="/images/profile-suit-final.png"
            alt="Mohammed Samaan Jushiddi in a formal suit"
            fill
            priority
            sizes="(max-width: 760px) 92vw, (max-width: 1100px) 52vw, 620px"
          />
        </div>

        {/* Mobile Highlights: positioned directly after the photo on mobile web */}
        <div className="hero-highlights mobile-highlights reveal">
          <div className="highlight-pill">
            <span className="highlight-icon">📱</span>
            <span>iOS &amp; Android Apps</span>
          </div>
          <div className="highlight-pill">
            <span className="highlight-icon">⚡</span>
            <span>Clean Architecture</span>
          </div>
          <div className="highlight-pill">
            <span className="highlight-icon">🔥</span>
            <span>Firebase &amp; REST APIs</span>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-bottom-left">
            <span>FLUTTER · DART</span>
          </div>
          <div className="hero-bottom-center">
            <a href="#about" className="hero-scroll-link">
              <span>Scroll to explore</span>
              <b aria-hidden="true">↓</b>
            </a>
          </div>
          <div className="hero-bottom-right">
            <span>MOBILE ARCHITECTURE</span>
          </div>
        </div>
      </section>
    <section id="about" className="section"><div className="shell"><div className="section-header"><p className="eyebrow">01 / About</p></div><div className="about-grid"><h2>A developer who likes turning ideas into apps.</h2><div><p className="body-copy">I&apos;m Mohammed Samaan Jushiddi, a Flutter Developer focused on building practical cross-platform mobile applications. With a CSE background, I&apos;m continually learning and building with Dart and Flutter.</p><p className="meta-line">Flutter · Dart / CSE</p></div></div></div></section>
    <section id="work" className="section"><div className="shell"><div className="section-header"><p className="eyebrow">02 / Selected work</p><h2>Selected work.</h2><p className="section-intro">A focused selection of work will appear here as each project is ready to share.</p></div><div className="work-note"><strong>Selected work is currently being prepared.</strong><p>Project details, screenshots and links will appear here as the work is ready to share.</p></div></div></section>
    <section id="experience" className="section"><div className="shell"><div className="section-header"><p className="eyebrow">03 / Experience</p><h2>Experience</h2><p className="section-intro">Roles shaped by mobile architecture, AI-assisted marketing, and practical delivery.</p></div><div className="timeline"><article><time>2026</time><div><h3>OMNIMATE AI</h3><p>CMA — Chief Mobile Architect</p></div></article><article><time>2026</time><div><h3>HADI &amp; TAIMUR</h3><p>AI Marketing &amp; Automation Intern</p><small>01 February 2026 — 01 May 2026</small></div><p className="timeline-copy">Campaign research, content planning, AI-powered content generation, audience engagement and automation tasks.</p></article></div></div></section>
    <section id="stack" className="section"><div className="shell"><div className="section-header"><p className="eyebrow">04 / Technical direction</p><h2>Flutter stack</h2><p className="section-intro">A practical toolkit for building maintainable cross-platform mobile products.</p></div><div className="stack-grid">{stack.map(([group, ...items]) => <div key={group}><p>{group}</p>{items.map(item => <span key={item}>{item}</span>)}</div>)}</div></div></section>
    <section className="section"><div className="shell"><div className="section-header"><p className="eyebrow">05 / Process</p><h2>How I build</h2><p className="section-intro">A clear, iterative path from understanding the problem to refining the result.</p></div><div className="process">{process.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="section"><div className="shell journey"><div><p className="eyebrow">06 / Education</p><h2>Learning,<br />building, growing.</h2></div><div><p className="meta-line">2023 — 2027</p><h3>Anjuman Institute of Technology and Management</h3><p>Computer Science &amp; Engineering</p></div></div></section>
    <section id="contact" className="contact"><div className="shell"><div className="section-header"><p className="eyebrow">07 / Contact</p><h2>Let&apos;s build<br />something.</h2><p className="section-intro">Have a mobile product in mind? Let&apos;s start a conversation.</p></div><div className="contact-grid"><a href="mailto:mohammedsamaan21@gmail.com"><span>Email</span>mohammedsamaan21@gmail.com <b>↗</b></a><a href="tel:+919620461876"><span>Phone</span>9620461876 <b>↗</b></a>{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer"><span>{label}</span>{label} <b>↗</b></a>)}</div></div></section>
    <footer className="shell footer"><div><strong>MOHAMMED SAMAAN JUSHIDDI</strong><span>Flutter Developer</span></div><div><a href="mailto:mohammedsamaan21@gmail.com">Email</a><a href="tel:+919620461876">Phone</a>{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}</div><span>© 2026</span></footer>
  </main>
  );
}
