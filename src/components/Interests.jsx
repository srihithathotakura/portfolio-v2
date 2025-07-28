import React, { forwardRef } from "react";

const interests = [
  { img: `${process.env.PUBLIC_URL}/picture_5.jpg`, title: "Literature and Story Composition" },
  { img: `${process.env.PUBLIC_URL}/picture_6.jpg`, title: "Crafts and Origami" }
];

const Interests = forwardRef(({ id }, ref) => (
  <section id={id} ref={ref} className="section">
    <div className="container">
      <h2 className="interests-title">Other Interests</h2>
      <div className="interests-circles-grid">
        {interests.map(interest => (
          <div className="interest-circle" key={interest.title}>
            <img src={interest.img} alt={interest.title} />
            <div className="interest-title">{interest.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

export default Interests;