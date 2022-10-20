import { FunctionComponent } from "react";
import Image from "next/image";
import Project from "../Project/Project";

export type ProjectsProps = {
  projectData: Array<any>;
};

const Projects: FunctionComponent<ProjectsProps> = ({ projectData }) => {
  const firstThreeProjects = projectData.slice(0, 3);

  return (
    <div className="flex flex-col md:flex-row -mx-4">
      {firstThreeProjects.map((project) => {
        return (
          <>
            <div className="flex flex-col justify-center items-center px-4 w-full min-w-48 max-w-xs mb-6 md:mb-0">
              <Project
                key={project.id}
                image={project.image}
                name={project.name}
                shortDescription={project.shortDescription}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
