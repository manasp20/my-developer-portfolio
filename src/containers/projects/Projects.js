import React, {useContext} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {socialMediaLinks, bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">{bigProjects.title}</h1>
      <p className="project-subtitle">{bigProjects.subtitle}</p>

      <div className="repo-cards-div-main">
        {bigProjects.projects.map((project, index) => (
          <div key={index} className="repo-card-div">
            <div className="project-card-image-wrapper">
              <img
                src={project.image.default}
                alt={project.projectName}
                className="project-card-image"
              />
            </div>
            <h3 className="repo-name">{project.projectName}</h3>
            <p className="repo-description">{project.projectDesc}</p>
            {project.footerLink.map((link, i) => (
              <a
                key={i}
                className="project-link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Optional: Keep this if you want a button to GitHub */}
      {/* <Button
        text={"More Projects"}
        className="project-button"
        href={socialMediaLinks.github}
        newTab={true}
      /> */}
    </div>
  );
}
