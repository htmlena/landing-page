import { Fragment, FunctionComponent } from "react";
import Image from "next/image";

export type ProjectProps = {
  key?: number;
  image: string;
  name: string;
  gitHubUrl: string;
  shortDescription: string;
};

const Project: FunctionComponent<ProjectProps> = ({
  key,
  image,
  name,
  gitHubUrl,
  shortDescription,
}) => {
  return (
    <Fragment key={key}>
      <a rel="noopener" href={gitHubUrl}>
        <div className="w-full min-w-48 max-w-xs h-44 min-h-44 max-h-44 cursor-pointer">
          <div className="w-full h-full relative inline-block before:block before:absolute before:inset-2.5 before:border before:border-white before:border-solid">
            <Image
              className="opacity-60"
              alt="project illustration"
              src={image}
              layout="fill"
            />
          </div>
        </div>
        <div className="bg-main-light text-white px-4 py-6 cursor-pointer">
          <h3 className="text-lg">{name}</h3>
          <p className="text-sm pt-4">{shortDescription}</p>
        </div>
      </a>
    </Fragment>
  );
};

export default Project;
