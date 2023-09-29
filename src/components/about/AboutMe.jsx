import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-outfit font-bold my-10">
        about me
      </h1>
      <div className="w-full flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-0 font-outfit">
        <p className="w-80 text-lg text-center lg:text-left">
          Computer Science fresh graduate with a foundation in software
          engineering and one year of hands-on internship experience.
          <br />
          Proficient at collaborating with interdisciplinary teams and
          demonstrating excellent communication skills.
          <br />
          Keen to contribute technical expertise and drive innovation in a
          professional setting.
        </p>
        <div className="relative w-40 h-60 md:h-80 md:w-60">
          <Image
            src="/images/foto.jpg"
            alt="profile"
            layout="fill"
            objectFit="cover"
            className="shadow-xl rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
