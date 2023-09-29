import Link from "next/link";
import React from "react";

const HomeTitle = () => {
  return (
    <>
      <div className="flex justify-around items-center font-outfit mx-8 ">
        <h1 className=" text-2xl md:text-4xl lg:pl-9">
          Hi, I&apos;m Alexander
        </h1>
        <div className="w-60 md:w-[15rem] lg:w-[30rem]">
          <p className="text-xl md:text-2xl lg:text-4xl lg:ml-[10rem]">
            <b>Web Alchemist</b>: Crafting Digital Experiences with Code and
            Creativity
          </p>
        </div>
      </div>
      <section className="flex flex-col justify-center items-center md:flex-row md:justify-around pt-10 font-outfit tracking-wider">
        <Link href="/">
          <h1 className="font-semibold text-lg cursor-pointer">
            alexander timotius crespo sitompul
          </h1>
        </Link>
        <div className="flex gap-5">
          <h1
            // onClick={() => scrollToSection(experienceRef)}
            className="cursor-pointer hover:-translate-x-2 hover:translate-y-2 hover:text-gray-400 transition-all duration-300"
          >
            experience
          </h1>
          <Link href="/projects">
            <h1 className="cursor-pointer hover:-translate-x-2 hover:translate-y-2 hover:text-gray-400 transition-all duration-300">
              projects
            </h1>
          </Link>
          <h1
            // onClick={() => scrollToSection(skillsRef)}
            className="cursor-pointer hover:-translate-x-2 hover:translate-y-2 hover:text-gray-400 transition-all duration-300"
          >
            skills
          </h1>
        </div>
      </section>
    </>
  );
};

export default HomeTitle;
