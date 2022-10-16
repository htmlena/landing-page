import Image from "next/image";
import Link from "next/link";
import mainPhoto from "../../public/main-photo.jpg";

const HomeTeaser = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-14 md:mt-20">
      <div className="md:max-w-[50%]">
        <h1 className="text-3xl">Lenka Shynkarova</h1>
        <p className="mt-6 max-w-md">
          I am a curious frontend developer with over 1 year of commercial
          experience for an e-commerce platform. I'm looking for motivating work
          environment and I always strive to create a great web experience,
          learn something new and contribute to the team success.
        </p>
        <button
          type="button"
          className="bg-main-light mt-6 px-10 py-2 md:py-1.5 rounded-md"
        >
          <Link href="/about">Learn more</Link>
        </button>
      </div>
      <div className="w-60 h-auto md:max-w-[50%]">
        <Image src={mainPhoto} alt="Picture of the author" className="w-full" />
      </div>
    </div>
  );
};

export default HomeTeaser;