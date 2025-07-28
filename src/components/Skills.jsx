import React, { useState, forwardRef } from "react";
import SkillModal from "./SkillModal";

const skills = [
  { icon: "fab fa-java", name: "Java", details: "Experienced in OOP, data structures, and application development using Java. Developed multiple academic and personal projects." },
  { icon: "fab fa-python", name: "Python", details: "Proficient in scripting, data analysis, and web development. Used Python for coding challenges, automations, and research." },
  { icon: "fas fa-code", name: "C", details: "Solid understanding of memory management and procedural programming. Academic projects in systems and embedded C." },
  { icon: "fab fa-html5", name: "HTML", details: "Core web markup skills, accessible semantic HTML for modern websites." },
  { icon: "fab fa-css3-alt", name: "CSS", details: "Advanced styling, layouts with Flexbox/Grid, animations, responsive design." },
  { icon: "fab fa-js", name: "JavaScript", details: "Dynamic, interactive front-end development. Experience with ES6+, DOM, and web APIs." },
  { icon: "fab fa-react", name: "ReactJS", details: "Building interactive UIs with React, component-based architecture, and state management." },
  { icon: "devicon-haskell-plain", name: "Haskell", details: "Introductory experience with functional programming and type systems using Haskell in coursework." },
  { icon: "fas fa-database", name: "MySQL", details: "Database design, querying, normalization, and data modeling for projects using MySQL." },
  { icon: "fas fa-object-group", name: "OOP", details: "Applied OOP principles in Java and Python for scalable, maintainable code." },
  { icon: "fas fa-project-diagram", name: "DSA", details: "Well-versed in core data structures, algorithms, and problem-solving (competitive programming and coursework)." },
  { icon: "fas fa-server", name: "DBMS", details: "Studied RDBMS concepts, ER modeling, and implemented academic assignments." },
  { icon: "fab fa-linux", name: "Linux", details: "Familiar with shell scripting, file systems, and open-source tools. Comfortable with Ubuntu and derivatives." },
  { icon: "fas fa-cube", name: "Tinkercad", details: "3D modeling and basic electronic circuit simulation as part of academic explorations." }
];

const Skills = forwardRef(({ id }, ref) => {
  const [modalSkill, setModalSkill] = useState(null);

  const handleOpen = (skill) => setModalSkill(skill);
  const handleClose = () => setModalSkill(null);

  return (
    <section id={id} ref={ref} className="section">
      <div className="container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div
              className="skill-card"
              key={skill.name}
              tabIndex={0}
              onClick={() => handleOpen(skill)}
              onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleOpen(skill)}
            >
              <div className="skill-card-inner">
                <div className="skill-icon"><i className={skill.icon}></i></div>
                <div className="skill-card-title">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
        {modalSkill && <SkillModal skill={modalSkill} onClose={handleClose} />}
      </div>
    </section>
  );
});
export default Skills;