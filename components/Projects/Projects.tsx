import { FunctionComponent } from "react";

export type ProjectsProps = {
  projectData: Array<any>;
};

const Projects: FunctionComponent<ProjectsProps> = ({ projectData }) => {
  const firstThreeProjects = projectData.slice(0, 3);

  return (
    <>
      {firstThreeProjects.map((project) => {
        return (
          <h2 key={project.id} className="text-white">
            {project.name}
          </h2>
        );
      })}
    </>
  );
};

export default Projects;
