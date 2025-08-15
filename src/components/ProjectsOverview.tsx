import "./ProjectsOverview.css";
import { projectsData } from "./projectsData";

const ProjectsOverview = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project, index) => {
        const daysOld = Math.floor(
          (Date.now() - new Date(project.completedDate).getTime()) /
            (1000 * 60 * 60 * 24)
        );

        return (
          <div key={index} className="project-card">
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-days">Completed {daysOld} days ago</p>
            <div className="project-links">
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Website
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsOverview;
