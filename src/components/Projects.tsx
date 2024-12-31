import React, { FC } from "react";

interface Project {
  title: string;
  description: string;
  liveLink: string;
  sourceCodeLink: string;
  image: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => (
  <div className="container">
    <div className="project-wrapper">
      <h2 className="section-title dark-blue-text">Recently Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="project-wrapper__text load-hidden">
              <h3 className="project-wrapper__text-title">{project.title}</h3>
              <div>
                <p className="mb-4">{project.description}</p>
              </div>
              {project.liveLink && (
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href={project.liveLink}
                >
                  See Live
                </a>
              )}
              {project.sourceCodeLink && (
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn text-color-main"
                  href={project.sourceCodeLink}
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="project-wrapper__image load-hidden">
              <a
                rel="noreferrer"
                href={project.liveLink ? project.liveLink : `#${project.title}`}
                target={project.liveLink ? "_blank" : "_self"}
              >
                <div
                  data-tilt
                  data-tilt-max="4"
                  data-tilt-glare="true"
                  data-tilt-max-glare="0.5"
                  className="thumbnail rounded js-tilt"
                >
                  <img
                    alt={project.title}
                    className="img-fluid"
                    src={project.image}
                    height="auto"
                    width="auto"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
