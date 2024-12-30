import React, { FC } from "react";

interface AboutProps {
  profileImage: string;
  description: string[];
  resumeLink: string;
}

const About: FC<AboutProps> = ({ profileImage, description, resumeLink }) => (
  <div className="container">
    <h2 className="section-title load-hidden">About me</h2>
    <div className="row about-wrapper">
      <div className="col-md-6 col-sm-12">
        <div className="about-wrapper__image load-hidden">
          <img
            alt="Profile"
            className="img-fluid rounded shadow-lg"
            height="auto"
            width="300px"
            src={profileImage}
          />
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="about-wrapper__info load-hidden">
          {description.map((text, index) => (
            <p key={index} className="about-wrapper__info-text">
              {text}
            </p>
          ))}
          <span className="d-flex mt-3">
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn cta-btn--resume"
              href={resumeLink}
            >
              View Resume
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default About;
