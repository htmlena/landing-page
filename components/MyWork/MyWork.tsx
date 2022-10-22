import { Fragment, FunctionComponent } from "react";
import Project from "../Project/Project";
import TopSectionContainer from "../TopSectionContainer/TopSectionContainer";

export type MyWorkProps = {
  projectData: Array<any>;
};

const MyWork: FunctionComponent<MyWorkProps> = ({ projectData }) => {
  return (
    <TopSectionContainer>
      <div className="flex flex-col md:flex-row -mx-4 justify-between items-center md:gap-y-10 flex-wrap">
        {projectData.map((project) => {
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
    </TopSectionContainer>
  );
};

export default MyWork;
