import { Fragment, FunctionComponent } from "react";
import Project from "../Project/Project";

export type ProjectsProps = {
  projectData: Array<any>;
};

const Projects: FunctionComponent<ProjectsProps> = ({ projectData }) => {
  const firstThreeProjects = projectData.slice(0, 3);

  return (
    <div className="flex flex-col md:flex-row -mx-4 md:gap-x-10">
      {firstThreeProjects.map((project) => {
        return (
          <Fragment key={project.id}>
            <div className="flex flex-col justify-center items-center px-4 w-full min-w-48 max-w-xs mb-6 md:mb-0">
              <Project
                image={project.image}
                name={project.name}
                gitHubUrl={project.gitHubUrl}
                shortDescription={project.shortDescription}
              />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Projects;
