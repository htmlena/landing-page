import { FunctionComponent } from "react";
import Image from "next/image";

export type ProjectsProps = {
  projectData: Array<any>;
};

const Projects: FunctionComponent<ProjectsProps> = ({ projectData }) => {
  const firstThreeProjects = projectData.slice(0, 3);

  return (
    <div className="flex flex-col md:flex-row -mx-4">
      {firstThreeProjects.map((project) => {
        return (
          <div
            key={project.id}
            className="flex flex-col justify-center items-center px-4 w-full min-w-48 max-w-xs mb-6 md:mb-0"
          >
            <div className="w-full min-w-48 max-w-xs h-44 min-h-44">
              <div className="w-full h-full relative">
                <Image
                  className="opacity-60"
                  alt="project illustration"
                  src={project.image}
                  layout="fill"
                />
              </div>
            </div>
            <div className="bg-main-light text-white px-4 py-6">
              <h3 className="text-lg">{project.name}</h3>
              <p className="text-sm pt-4">{project.shortDescription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
