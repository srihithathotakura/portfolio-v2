import React, { forwardRef } from "react";

const Education = forwardRef(({ id }, ref) => (
  <section id={id} ref={ref} className="section" style={{ backgroundColor: '#2A2A2A', color: '#F4F4F4' }}>
    <div className="container">
      <h2 className="education-title">Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Bachelor of Technology</h3>
          <p>Amrita Vishwa Vidyapeetham (Deemed University) • COIMBATORE</p>
          <p>Tamil Nadu</p>
          <p>2023 - present</p>
        </div>
        <div className="timeline-item">
          <h3>High School (Class -12)</h3>
          <p>NARAYANA JR COLLEGE • VIJAYAWADA</p>
          <p>Andhra Pradesh</p>
          <p>2021-23</p>
        </div>
        <div className="timeline-item">
          <h3>SSC (Class-10)</h3>
          <p>SIKHARA EM HIGH SCHOOL • VIJAYAWADA</p>
          <p>Andhra Pradesh</p>
          <p>2020-21</p>
        </div>
      </div>
    </div>
  </section>
));

export default Education;