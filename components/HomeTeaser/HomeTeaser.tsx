import { useState } from "react";
import ProjectsData from "../ProjectsData/ProjectsData";
import Projects from "../Projects/Projects";
import Image from "next/image";
import Link from "next/link";
import mainPhoto from "../../public/main-photo.jpg";

const HomeTeaser = () => {
  const [projectData, setProjectData] = useState(ProjectsData);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-14 md:mt-20">
        <div className="md:max-w-[50%]">
          <h1 className="text-3xl">Lenka Shynkarova</h1>
          <p className="mt-6 max-w-md">
            I am a curious frontend developer with over 1 year of commercial
            experience for an e-commerce platform. I&apos;m looking for
            motivating work environment and I always strive to create a great
            web experience, learn something new and contribute to the team
            success.
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
        <div className="w-60 h-auto md:max-w-[50%]">
          <Image
            src={mainPhoto}
            alt="Picture of the author"
            className="w-full rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col mt-14 md:mt-20">
        <div>
          <h2 className="text-3xl">What I did</h2>
        </div>
        <div className="flex flex-row justify-center items-center mt-5 md:mt-7">
          <Projects projectData={projectData} />
        </div>
      </div>
    </>
  );
};

export default HomeTeaser;
