import React, { FC } from "react";

interface FooterProps {
  socialLinks: { platform: string; url: string; iconClass: string }[];
  copyrightText: string;
  authorName: string;
  authorLink: string;
  githubButtons: { url: string; icon: string; label: string }[];
}

const Footer: FC<FooterProps> = ({
  socialLinks,
  copyrightText,
  authorName,
  authorLink,
  githubButtons,
}) => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              rel="noreferrer"
              href={link.url}
              target="_blank"
              aria-label={link.platform}
            >
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>

        <hr />

        <p className="footer__text">
          {copyrightText}{" "}
          <a rel="noreferrer" href={authorLink} target="_blank">
            {authorName}
          </a>
        </p>

        <p className="mt-3 pt-3">
          {githubButtons.map((button, index) => (
            <a
              key={index}
              rel="noreferrer"
              className="github-button"
              href={button.url}
              data-icon={button.icon}
              data-size="large"
              data-show-count="true"
              aria-label={button.label}
            >
              {button.label}
            </a>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
