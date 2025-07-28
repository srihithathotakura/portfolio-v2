import React, { forwardRef } from "react";

const Resume = forwardRef(({ id }, ref) => (
  <section id={id} ref={ref} className="section" style={{ backgroundColor: '#2A2A2A', color: '#F4F4F4' }}>
    <div className="container resume-flex">
      <h2 className="resume-title">Resume</h2>
      <div className="resume-center">
        <p className="resume-description">
          Download my resume to learn more about my qualifications and experience.
        </p>
        <a href="/resume.pdf" className="btn outline resume-btn" download>
          Download Resume
        </a>
      </div>
    </div>
  </section>
));

export default Resume;