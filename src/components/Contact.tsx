import React, { FC } from "react";

interface ContactProps {
  callToAction: string;
  email: string;
}

const Contact: FC<ContactProps> = ({ callToAction, email }) => (
  <div className="container">
    <h2 className="section-title">Contact</h2>
    <div className="contact-wrapper load-hidden">
      <p className="contact-wrapper__text">{callToAction}</p>
      <a
        rel="noreferrer"
        target="_blank"
        className="cta-btn cta-btn--resume"
        href={`mailto:${email}`}
      >
        Call to Action
      </a>
    </div>
  </div>
);

export default Contact;
