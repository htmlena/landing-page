import mainPhoto from "../../public/main-photo.jpg";
import htmlSkills from "../../public/html-skills.png";
import cssSkills from "../../public/css-skills.png";
import jsSkills from "../../public/js-skills.png";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-14 md:mt-20">
        <div className="md:max-w-[50%]">
          <h1 className="text-3xl">Lenka Shynkarova</h1>
          <p className="mt-6">
            I am a curious frontend developer with over 1 year of commercial
            experience for an e-commerce platform. I&apos;m looking for
            motivating work environment and I always strive to create a great
            web experience, learn something new and contribute to the team
            success.
          </p>
          <p className="mt-6">
            I want to work on my coding skills and I&apos;m curently focusing on
            expanding my knowledge of accessibility and UX principles.
          </p>
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
          <h2 className="text-3xl">Skills</h2>
        </div>
        <div className="flex flex-row justify-center items-center mt-4 md:mt-6">
          <div className="flex justify-center items-center w-20 h-20 md:w-32 md:h-32 px-2 md:px-4">
            <Image src={htmlSkills} alt="html logo" className="w-full" />
          </div>
          <div className="flex justify-center items-center w-20 h-20 md:w-32 md:h-32 px-2 md:px-4">
            <Image src={cssSkills} alt="css logo" className="w-full" />
          </div>
          <div className="flex justify-center items-center w-20 h-20 md:w-32 md:h-32 px-2 md:px-4">
            <Image src={jsSkills} alt="javascript logo" className="w-full" />
          </div>
        </div>
        <div className="text-center mt-5 md:mt-7">
          <ul>
            <li className="pt-2">
              <span className="font-bold text-main-light">HTML </span>
              (semantics, accessibility best practices),
              <span className="font-bold text-main-light"> CSS </span>
              (responsive and mobile-first design approach with pure CSS,
              preprocessors like
              <span className="font-bold text-main-light"> Less </span> or
              frameworks like
              <span className="font-bold text-main-light"> Tailwind </span> or
              <span className="font-bold text-main-light"> SC</span>).
            </li>
            <li className="pt-2">
              <span className="font-bold text-main-light">Javascript </span>
              (DOM manipulation, promises),{" "}
              <span className="font-bold text-main-light"> Typescript </span>
              and<span className="font-bold text-main-light"> React </span>
              (JSX, virtual DOM, hooks).
            </li>
            <li className="pt-2">
              I know basics of version control tools (
              <span className="font-bold text-main-light">Git</span>) and have
              experience with{" "}
              <span className="font-bold text-main-light"> Github </span>or
              <span className="font-bold text-main-light"> Gitlab</span>.
            </li>
            <li className="pt-2">
              I used <span className="font-bold text-main-light">Next.js</span>{" "}
              for my personal projects. And I learned to use
              <span className="font-bold text-main-light"> Twig </span> at my
              current job.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
