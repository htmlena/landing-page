import { FunctionComponent } from "react";

export type ProjectsCardProps = {
  projectData: Array<any>;
};

const ProjectsCard: FunctionComponent<ProjectsCardProps> = ({ projectData }) => {
  const slicedProjectData = projectData.slice(0, 3);

  return (
    <>
      {slicedProjectData.map((project) => {
        return (
          <h2 key={project.id} className="text-white">
            {project.name}
          </h2>
        );
      })}
    </>
  );
};

export default ProjectsCard;
