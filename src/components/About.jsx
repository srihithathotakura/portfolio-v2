import React, { forwardRef } from 'react';

const About = forwardRef(({ id }, ref) => (
  <section
    ref={ref}
    id={id}
    className="section"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/about-bg.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.95
    }}
  >
    <h2 className="about-title">About Me</h2>
    <div className="about-content">
      <img src={`${process.env.PUBLIC_URL}/picture_2.jpg`} alt="Srihitha" className="about-image" />
      <div className="about-text">
        <p>
          <span className="indent">
            I’m <span className="highlight-name">Srihitha Thotakura</span>,
          </span>
          a third-year Computer Science and Engineering student at Amrita Vishwa Vidyapeetham, Coimbatore.
          With a passion for coding and design, I blend technical skills with creative problem-solving to craft innovative web solutions.
        </p>
        <p>
          <span className="indent">
            My journey in tech began with a curiosity for how things work,
          </span>
          evolving into a deep interest in web development and UI/UX design. I enjoy collaborating with teams, leading projects, and exploring new technologies to build user-friendly applications.
        </p>
        <p>
          <span className="indent">
            Beyond academics, I’m committed to personal growth,
          </span>
          often engaging in workshops, coding challenges, and community initiatives. My goal is to create impactful digital experiences that inspire and connect people.
        </p>
        <div className="skills-box">
          <p>
            <i className="fas fa-phone contact-icon"></i>
            <strong>PHONE:</strong> 9381249923
          </p>
          <p>
            <i className="fas fa-envelope contact-icon"></i>
            <strong>MAIL:</strong> <a href="mailto:srihithathotakura@gmail.com">srihithathotakura@gmail.com</a>
          </p>
          <p>
            <i className="fab fa-github contact-icon"></i>
            <strong>GIT:</strong> <a href="https://github.com/srihithathotakura" target="_blank" rel="noopener noreferrer">https://github.com/srihithathotakura</a>
          </p>
        </div>
      </div>
    </div>
  </section>
));

export default About;