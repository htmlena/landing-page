import { FunctionComponent } from "react";
import Image from "next/image";
import ProjectsData from "../ProjectsData/ProjectsData";
import Project from "../Project/Project";

export type MyWorkProps = {
  projectData: Array<any>;
};

const MyWork: FunctionComponent<MyWorkProps> = ({ projectData }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-14 md:mt-20">
      <div className="flex flex-col md:flex-row -mx-4 justify-between items-center md:gap-y-10 flex-wrap">
        {projectData.map((project) => {
          return (
            <>
              <div className="flex flex-col justify-center items-center px-4 w-full min-w-48 max-w-xs mb-6 md:mb-0">
                <Project
                  key={project.id}
                  image={project.image}
                  name={project.name}
                  gitHubUrl={project.gitHubUrl}
                  shortDescription={project.shortDescription}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
