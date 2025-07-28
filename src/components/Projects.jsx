import React, { forwardRef } from "react";

const projects = [
  {
    img: `${process.env.PUBLIC_URL}/picture_3.jpg`,
    title: "Frontend of MEDICO Hospital Website",
    label: "Web Development",
    desc: "Developed a responsive hospital website with dedicated pages for About, Locations, Treatments, and Specialities using HTML, CSS, and JavaScript. Integrated dynamic forms for lab report downloads, appointment booking, and inquiries to enhance user interaction and accessibility across devices.",
    link: "#"
  },
  {
    img: `${process.env.PUBLIC_URL}/picture_4.jpg`,
    title: "Emergency Dispatch Management System using DSA",
    label: "Data Structures",
    desc: "Designed and simulated a multi-agency emergency dispatch system in Java, utilizing Dijkstra’s algorithm for shortest path routing, PriorityQueue for dispatch prioritization, and HashMap for location tracking—achieving a 15% improvement in response efficiency in test scenarios.",
    link: "#"
  },
  {
    img: `${process.env.PUBLIC_URL}/picture_7.jpg`,
    title: "Automated Drip Irrigation System",
    label: "IoT",
    desc: "Designed and implemented a smart drip irrigation system supporting both manual and automatic control modes for three land types. The system uses moisture sensors, threshold history tracking, and real-time monitoring to activate pumps only when needed, optimizing water usage. It features a user-interactive menu for land and mode selection, LED indicators for status, and support for manual override via button control.",
    link: "https://www.tinkercad.com/things/5rXDQpwx2nt-submission/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard%2Fdesigns%2Fcircuits"
  },
  {
    img: `${process.env.PUBLIC_URL}/picture_8.jpg`,
    title: "Robot Navigation System",
    label: "Embedded Systems",
    desc: "Designed a robot navigation control system that interprets distance, obstacle, and battery inputs using binary logic and a half adder circuit. The system ensures safe movement decisions—restricting motion during obstacle presence or low battery—and classifies travel time based on distance inputs (short, medium, long) using sum and carry outputs to guide robot behavior.",
    link: "#"
  },
  {
    img: `${process.env.PUBLIC_URL}/picture_9.jpg`,
    title: "IoT based Crowd Management System",
    label: "Research-Ongoing",
    desc: "An IoT-based indoor navigation system using BLE 5.3/5.4 and channel sounding to measure crowd density in real-time, guiding individuals to safer exits during emergencies. Aims to reduce panic and improve evacuation efficiency through dynamic crowd distribution.",
    link: "#"
  },
  {
    img: `${process.env.PUBLIC_URL}/picture_10.jpg`,
    title: "Plagiarism Detection Using String Matching Algorithms",
    label: "Case Study",
    desc: "Implemented and compared multiple string matching algorithms (Brute Force, Rabin-Karp, KMP, Boyer-Moore, Aho-Corasick) for detecting plagiarism in text datasets. Evaluated accuracy and execution speed, resulting in a 20% improvement in detection efficiency.",
    link: "#"
  }
];

const Projects = forwardRef(({ id }, ref) => (
  <section id={id} ref={ref} className="section" style={{ backgroundColor: '#2A2A2A', color: '#F4F4F4' }}>
    <div className="container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(proj => (
          <div className="project-card" key={proj.title}>
            <img src={proj.img} alt={proj.title} />
            <h3 className="project-title-large">{proj.title}</h3>
            <div className="project-label">{proj.label}</div>
            <p>{proj.desc}</p>
            <div className="project-btn-wrapper">
              <a href={proj.link} className="btn outline" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

export default Projects;