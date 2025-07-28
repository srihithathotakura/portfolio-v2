import React, { forwardRef } from "react";

const interests = [
  "Artificial Intelligence",
  "Web Development",
  "UI/UX Design",
  "Data Structures"
];

const AcademicInterests = forwardRef(({ id }, ref) => (
  <section id={id} ref={ref} className="section">
    <div className="container">
      <h2 className="academic-interests-title">Academic Interests</h2>
      <div className="academic-interests-grid">
        {interests.map(interest => (
          <div className="academic-interest-item" key={interest}>{interest}</div>
        ))}
      </div>
    </div>
  </section>
));

export default AcademicInterests;