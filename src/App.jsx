import React, { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import AcademicInterests from './components/AcademicInterests';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    academicInterests: useRef(null),
    projects: useRef(null),
    interests: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (id) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-content">
      <Hero ref={sectionRefs.hero} id="hero" scrollTo={scrollToSection} />
      <About ref={sectionRefs.about} id="about" />
      <Education ref={sectionRefs.education} id="education" />
      <Skills ref={sectionRefs.skills} id="skills" />
      <AcademicInterests ref={sectionRefs.academicInterests} id="academic-interests" />
      <Projects ref={sectionRefs.projects} id="projects" />
      <Interests ref={sectionRefs.interests} id="interests" />
      <Resume ref={sectionRefs.resume} id="resume" />
      <Contact ref={sectionRefs.contact} id="contact" />
      <Footer />
    </div>
  );
};

export default App;