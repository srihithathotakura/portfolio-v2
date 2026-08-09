import React, { forwardRef } from "react";

// Featured Projects — most complete, most relevant to software dev roles
const featuredProjects = [
  {
    img: `${process.env.PUBLIC_URL}/passwordpal.jpg`, // TODO: replace with a real PasswordPal screenshot
    title: "PasswordPal — Zero-Knowledge Password Manager",
    label: "Desktop App",
    desc: "A cross-platform desktop password manager built with Tauri, Rust, and React. All encryption (AES-256-GCM, Argon2id) runs locally in Rust — the server only ever stores encrypted blobs. Includes offline-first sync, TOTP multi-factor auth, and breach checking via the HIBP k-Anonymity API.",
    links: [
      { label: "Frontend Repo", href: "https://github.com/USER1043/PasswordPal_Frontend" },
      { label: "Backend Repo", href: "https://github.com/USER1043/PasswordPal_Backend" }
    ]
  },
  {
    img: `${process.env.PUBLIC_URL}/autofy.jpg`, // TODO: replace with a real Autofy screenshot
    title: "Autofy — No-Code Automation Platform for Education",
    label: "Full-Stack / SaaS",
    desc: "A Zapier-style automation builder for schools, letting students and teachers connect apps like Gmail, Calendar, and Drive into drag-and-drop workflows. Built the student module end-to-end — registration, exam scheduling, and workflow builder — with role-based dashboards and Google OAuth.",
    links: [
      { label: "Live Demo", href: "https://autofy-automation-builder-nine.vercel.app/" },
      { label: "GitHub Repo", href: "https://github.com/srihithathotakura/Autofy-Automation-Builder" }
    ]
  },
  {
    img: `${process.env.PUBLIC_URL}/aura.jpg`, // TODO: replace with a real AURA screenshot
    title: "AURA — AI-Powered Fashion E-Commerce App",
    label: "Mobile / Flutter",
    desc: "A cross-platform Flutter app (Android/iOS/Web) with a full shopping flow — browse, bag, checkout — backed by real-time Firestore data. Built the in-app AI chatbot supporting 5 regional languages, and contributed to the animated dark-mode theming.",
    links: [
      { label: "GitHub Repo", href: "https://github.com/srihithathotakura/Product-Catalog" }
    ]
  },
  {
    img: `${process.env.PUBLIC_URL}/picture_4.jpg`,
    title: "Emergency Dispatch Management System",
    label: "Data Structures & Algorithms",
    desc: "Simulated a multi-agency emergency dispatch system in Java using Dijkstra's algorithm for shortest-path routing, a Priority Queue for dispatch prioritization, and a HashMap for location tracking — achieving a 15% improvement in response efficiency in test scenarios.",
    links: []
  }
];

// Other coursework / academic projects — shown as a lighter, secondary list
const otherProjects = [
  {
    title: "Frontend of MEDICO Hospital Website",
    label: "Web Development",
    desc: "A responsive hospital website with dedicated pages for About, Locations, Treatments, and Specialities, including dynamic forms for lab report downloads and appointment booking."
  },
  {
    title: "Automated Drip Irrigation System",
    label: "IoT",
    desc: "A smart drip irrigation system with manual and automatic modes, using moisture sensors and threshold tracking to activate pumps only when needed.",
    href: "https://www.tinkercad.com/things/5rXDQpwx2nt-submission/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard%2Fdesigns%2Fcircuits"
  },
  {
    title: "Robot Navigation System",
    label: "Embedded Systems",
    desc: "A robot navigation control system that interprets distance, obstacle, and battery inputs using binary logic and a half-adder circuit to guide safe movement decisions."
  },
  {
    title: "Plagiarism Detection Using String Matching Algorithms",
    label: "Case Study",
    desc: "Implemented and compared Brute Force, Rabin-Karp, KMP, Boyer-Moore, and Aho-Corasick algorithms for text plagiarism detection, improving detection efficiency by 20%."
  }
];

const Projects = forwardRef(({ id }, ref) => (
  <section id={id} ref={ref} className="section" style={{ backgroundColor: '#2A2A2A', color: '#F4F4F4' }}>
    <div className="container">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-grid">
        {featuredProjects.map(proj => (
          <div className="project-card" key={proj.title}>
            <img src={proj.img} alt={proj.title} />
            <h3 className="project-title-large">{proj.title}</h3>
            <div className="project-label">{proj.label}</div>
            <p>{proj.desc}</p>
            {proj.links.length > 0 && (
              <div className="project-btn-wrapper" style={{ gap: '10px' }}>
                {proj.links.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="btn outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <h2 className="projects-title" style={{ marginTop: '40px' }}>Other Academic Projects</h2>
      <div className="other-projects-list">
        {otherProjects.map(proj => (
          <div className="other-project-item" key={proj.title}>
            <div className="project-label">{proj.label}</div>
            <h4>{proj.title}</h4>
            <p>{proj.desc}</p>
            {proj.href && (
              <a href={proj.href} className="text-link" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
));

export default Projects;
