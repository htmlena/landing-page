import { FunctionComponent } from "react";
import Image from "next/image";
import ProjectsData from "../ProjectsData/ProjectsData";

export type MyWorkProps = {
  projectData: Array<any>;
};

const MyWork: FunctionComponent<MyWorkProps> = ({projectData}) => {
  return (
    <div className="flex flex-col md:flex-row -mx-4">
      {projectData.map((project) => {
        return (
          <div
            key={project.id}
            className="flex flex-col justify-center items-center px-4 w-full min-w-48 max-w-xs mb-6 md:mb-0"
          >
            <div className="w-full min-w-48 max-w-xs h-44 min-h-44">
              <div className="w-full h-full relative inline-block before:block before:absolute before:inset-2.5 before:border before:border-white before:border-solid">
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

export default MyWork;
