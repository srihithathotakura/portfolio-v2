import React, { forwardRef } from "react";

const Resume = forwardRef(({ id }, ref) => (
  <section id={id} ref={ref} className="section" style={{ backgroundColor: '#2A2A2A', color: '#F4F4F4' }}>
    <div className="container resume-flex">
      <h2 className="resume-title">Resume</h2>
      <div className="resume-center">
        <p className="resume-description">
          View my resume below, or download a copy to keep.
        </p>

        <div className="resume-viewer-wrapper">
          <object
            data={`${process.env.PUBLIC_URL}/resume.pdf#toolbar=0`}
            type="application/pdf"
            aria-label="Srihitha Thotakura Resume"
            className="resume-viewer"
          >
            <p className="resume-fallback-text">
              Your browser couldn't preview the PDF inline.{" "}
              <a
                href={`${process.env.PUBLIC_URL}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to view it directly
              </a>
              .
            </p>
          </object>
        </div>

        <div className="resume-btn-row">
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            className="btn outline resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Full View
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            className="btn resume-btn-primary resume-btn"
            download="Srihitha_Thotakura_Resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
));

export default Resume;
