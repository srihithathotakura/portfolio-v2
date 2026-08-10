import React, { useState, forwardRef } from "react";
import SkillModal from "./SkillModal";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { icon: "fab fa-java", name: "Java", details: "Experienced in OOP and application development. Used for algorithmic problem-solving and academic projects such as the Emergency Dispatch simulation." },
      { icon: "fab fa-python", name: "Python", details: "Used for scripting, data analysis, and machine learning coursework, including building and evaluating classification pipelines." },
      { icon: "fas fa-code", name: "C", details: "Solid understanding of memory management and procedural programming, applied in systems and embedded coursework." },
      { icon: "fab fa-js", name: "JavaScript", details: "Dynamic, interactive front-end development with ES6+, the DOM, and web APIs." }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { icon: "fab fa-react", name: "React", details: "Building interactive UIs with component-based architecture and state management, used across PasswordPal and Autofy." },
      { icon: "fab fa-html5", name: "HTML5", details: "Semantic, accessible markup for modern websites." },
      { icon: "fab fa-css3-alt", name: "CSS3", details: "Responsive layouts with Flexbox/Grid, animations, and custom styling." }
    ]
  },
  {
    category: "Data & Machine Learning",
    skills: [
      { icon: "fas fa-table", name: "Pandas", details: "Used for data cleaning, transformation, and exploratory analysis across classification and regression coursework." },
      { icon: "fas fa-square-root-alt", name: "NumPy", details: "Used for numerical computation and array operations while building ML pipelines." },
      { icon: "fas fa-brain", name: "Scikit-learn", details: "Built and evaluated classification and regression pipelines, including model comparison and hyperparameter tuning." }
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { icon: "fas fa-database", name: "MySQL", details: "Database design, querying, normalization, and data modeling for academic and personal projects." },
      { icon: "fas fa-server", name: "MongoDB", details: "Used as the primary database for Autofy, with real-time aggregation powering dashboard analytics." },
      { icon: "fas fa-lock", name: "REST APIs & OAuth", details: "Built and consumed REST APIs with JWT and Google OAuth authentication across full-stack projects." }
    ]
  },
  {
    category: "Tools & Practices",
    skills: [
      { icon: "fab fa-git-alt", name: "Git & GitHub", details: "Version control and feature-branch workflows across all personal and team projects, with familiarity with Agile-style iterative development." },
      { icon: "fab fa-linux", name: "Linux", details: "Comfortable with shell scripting, file systems, and open-source tooling on Ubuntu and derivatives." }
    ]
  }
];

const Skills = forwardRef(({ id }, ref) => {
  const [modalSkill, setModalSkill] = useState(null);

  const handleOpen = (skill) => setModalSkill(skill);
  const handleClose = () => setModalSkill(null);

  return (
    <section id={id} ref={ref} className="section">
      <div className="container">
        <h2 className="skills-title">Skills</h2>
        {skillCategories.map(group => (
          <div className="skills-category" key={group.category}>
            <h3 className="skills-category-title">{group.category}</h3>
            <div className="skills-grid">
              {group.skills.map(skill => (
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
          </div>
        ))}
        {modalSkill && <SkillModal skill={modalSkill} onClose={handleClose} />}
      </div>
    </section>
  );
});
export default Skills;
