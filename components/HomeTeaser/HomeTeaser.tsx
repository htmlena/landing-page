import { useState } from "react";
import ProjectsData from "../ProjectsData/ProjectsData";
import Projects from "../Projects/Projects";
import Image from "next/image";
import Link from "next/link";
import mainPhoto from "../../public/main-photo.webp";
import TopSectionContainer from "../TopSectionContainer/TopSectionContainer";
import BottomSectionContainer from "../BottomSectionContainer/BottomSectionContainer";

const HomeTeaser = () => {
  const [projectData, setProjectData] = useState(ProjectsData);

  return (
    <>
      <TopSectionContainer>
        <div className="md:max-w-[50%]">
          <h1 className="text-3xl">Lenka Shynkarova</h1>
          <p className="mt-6">
            I am a curious frontend developer with over 1 year of commercial
            experience. I always strive to create a great web experience, learn
            something new and contribute to the team success.
          </p>

          <Link href="/about">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-main-light to-main-dark hover:bg-gradient-to-bl font-medium rounded-md text-sm mt-6 px-10 py-2.5 md:py-3 text-center"
            >
              Learn more
            </button>
          </Link>
        </div>
        <div className="w-auto sm:w-60 h-auto md:max-w-[50%]">
          <Image
            src={mainPhoto}
            alt="Picture of the author"
            className="w-full rounded-md"
          />
        </div>
      </TopSectionContainer>
      <BottomSectionContainer heading="What I did">
        <div className="flex flex-row justify-center items-center mt-5 md:mt-7">
          <Projects projectData={projectData} />
        </div>
        <div className="flex flex-row justify-center md:justify-end">
          <Link href="/work">
            <button className="text-sm text-main-light mt-2 md:mt-6">
              <span className="pb-1 border-b border-main-light solid">
                I want to see more projects ➝
              </span>
            </button>
          </Link>
        </div>
      </BottomSectionContainer>
    </>
  );
};

export default HomeTeaser;
