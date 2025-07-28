import React, { forwardRef } from 'react';

const Hero = forwardRef(({ scrollTo, id }, ref) => (
  <section
    ref={ref}
    id={id}
    className="section"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/picture_1.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}
  >
    <ul className="hero-links">
      {['about', 'education', 'skills', 'projects', 'interests', 'resume', 'contact'].map((secid) => (
        <li key={secid}>
          <a
            href={`#${secid}`}
            onClick={e => { e.preventDefault(); scrollTo(secid.replace(/-/g, '')); }}
          >
            {secid.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </a>
        </li>
      ))}
    </ul>
    <div className="hero-content">
      <h1 className="hero-title">I'm Srihitha</h1>
      <p className="hero-text">
        Fueled by code, creativity, and curiosity — with heart and hustle in everything I do.
      </p>
      <a
        href="#contact"
        className="btn hero-btn"
        onClick={e => { e.preventDefault(); scrollTo('contact'); }}
      >
        Get In Touch
      </a>
    </div>
  </section>
));

export default Hero;