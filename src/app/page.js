"use client";

import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ExCard from "@/components/experience/ExperienceCard";
import HomeTitle from "@/components/home/HomeTitle";
import AboutMe from "@/components/about/AboutMe";

export default function Home() {
  const ref = useRef();

  const exerienceData = [
    {
      title: "Full Stack Developer Volunteer",
      place: "GKI Grand Wisata",
      description:
        "Maintaining and developing the church's website, made an event guest registration web application",
      date: "2023",
    },
    {
      title: "Full Stack Developer Intern",
      place: "ADINS - PT. Adicipta Inovasi Teknologi",
      description:
        "Full stack web development, Managing data with PostgreSQL, Unit Testing and Integration Testing, Research on ElectronJS and Camunda, Agile Methodology",
      date: "2022-2023",
    },
    {
      title: "BINUS University",
      place: "Jakarta",
      description: "Bachelor's Degree, Computer Science",
      date: "2019-2023",
    },
    {
      title: "SMAK 7 Penabur",
      place: "High School Degree",
      description: "",
      date: "2016 - 2019",
    },
  ];

  const start = 0;
  const introDuration = 3;
  const experienceDuration = 1.4;
  const projectDuration = 1;
  const skillsDuration = 1.1;

  const buffer = 1;

  // computed values, with buffer
  const introStart = start + 0;
  const experienceStart = introStart + introDuration + buffer;
  const projectStart = experienceStart + experienceDuration + buffer;
  const skillsStart = projectStart + skillsDuration + buffer;
  const end = skillsStart + skillsDuration;

  const totalDuration = end - start;

  return (
    <main className="w-full ">
      <div className="">
        <Parallax pages={totalDuration} ref={ref}>
          <ParallaxLayer
            offset={introStart}
            factor={1.05}
            className="bg-gradient-to-b from-[#e8e8e8] to-[#7d7d7d]"
          ></ParallaxLayer>

          <ParallaxLayer
            offset={introStart}
            speed={0.4}
            className="flex flex-col justify-end pb-20"
          >
            <HomeTitle />
          </ParallaxLayer>

          <ParallaxLayer
            offset={introStart + 1}
            factor={2.75}
            speed={0.05}
            className="bg-gradient-to-b from-[#7c7c7c] to-[#303030]"
          ></ParallaxLayer>

          <ParallaxLayer
            offset={introStart + 1}
            speed={0.18}
            className="flex flex-col justify-center items-center mb-10"
          >
            <AboutMe />
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: introStart + 2.15, end: introStart + 2.5 }}
            className="flex-center"
            style={{ width: "33%" }}
          >
            <Card
              style={{
                borderRadius: 0,
                width: "100%",
                height: "100%",
                background: `#303030`,
                backgroundPosition: "center",
                backgroundBlendMode: "darken",
                backgroundSize: "cover",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Card>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: introStart + 2.75, end: introStart + 3 }}
            className="flex-center"
            style={{ width: "34%", marginLeft: "33%" }}
          >
            <Card
              style={{
                borderRadius: 0,
                width: "100%",
                height: "100%",
                background: `#1f1e1e`,
                backgroundPosition: "center",
                backgroundBlendMode: "darken",
                backgroundSize: "cover",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Card>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: introStart + 3, end: introStart + 3.5 }}
            className="flex-center"
            style={{ width: "33%", marginLeft: "67%" }}
          >
            <Card
              style={{
                borderRadius: 0,
                width: "100%",
                height: "100%",
                background: `#171616`,
                backgroundPosition: "bottom 50% right 25%",
                backgroundBlendMode: "darken",
                backgroundSize: "cover",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Card>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{
              start: experienceStart + 0.75,
              end: experienceStart + 0.95,
            }}
            speed={0.05}
            className="lg:pt-10"
          >
            <h1 className="text-center text-4xl text-indigo-100 lg:mt-20">
              experience x education
            </h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={experienceStart + 1}
            speed={0.06}
            style={{ zIndex: 5 }}
            className="flex justify-center items-center"
          >
            <section className="flex justify-center p-10 mb-5 mx-2 bg-[#303030] rounded-xl">
              <div className="-my-6">
                {exerienceData.map((data) => {
                  return <ExCard key={data.title} data={data} />;
                })}
              </div>
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{
              start: projectStart - 0.3,
              end: projectStart + projectDuration,
            }}
            className="p-5 mx-auto flex justify-center items-center"
            style={{ maxWidth: "52em", zIndex: -100 }}
          >
            <h1 className="text-2xl lg:text-6xl text-center w-100 text-white">
              projects
            </h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={projectStart + 0.5}
            speed={0.25}
            factor={1}
            className="bg-transparent ml-2 lg:ml-[5rem] xl:ml-[15rem] z-1"
          >
            <div className="w-[25rem]">
              <div className="overflow-hidden hover:brightness-75 transition-all duration-300 rounded-lg">
                <img
                  src="/images/projects/1.png"
                  alt=""
                  className="cursor-pointer lg:p-2 transition-all duration-300 rounded-lg h-[8rem] w-[12rem] md:h-[10rem] md:w-auto xl:h-[15rem] bg-gradient-to-br from-blue-300 to-gray-300"
                />
              </div>
              <p className="mt-2 text-left">Skena Hub</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={projectStart + 0.6}
            speed={0.65}
            factor={1}
            className="bg-transparent ml-44 md:ml-[25rem] lg:ml-[40rem] xl:ml-[55rem] 2xl:ml-[80rem]"
          >
            <div className="w-[25rem]">
              <div className="overflow-hidden hover:brightness-75 transition-all duration-300 rounded-lg">
                <img
                  src="/images/projects/projectG1.png"
                  alt=""
                  className="cursor-pointer lg:p-2  transition-all duration-300 rounded-lg h-[8rem] w-[12rem] md:h-[10rem] xl:h-[15rem] md:w-auto bg-gradient-to-br from-orange-200 to-blue-200"
                />
              </div>
              <p className="mt-2 text-left">Guitar Cave</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={projectStart + 0.75}
            speed={0.35}
            factor={1}
            className="bg-transparent ml-5 md:ml-[2rem] lg:ml-[7rem]"
          >
            <div className="w-[25rem]">
              <div className="overflow-hidden hover:brightness-75 transition-all duration-300 rounded-lg">
                <img
                  src="/images/projects/3.png"
                  alt=""
                  className="cursor-pointer lg:p-2 transition-all duration-300 rounded-lg h-[8rem] w-[12rem] md:h-[10rem] xl:h-[15rem] md:w-auto bg-gradient-to-bl from-yellow-200 to-gray-400"
                />
              </div>
              <p className="mt-2 text-left">SIMUDA Guest Book</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={projectStart + 1}
            speed={0.6}
            factor={1}
            className="bg-transparent ml-36 md:ml-56 lg:ml-[35rem] 2xl:ml-[65rem]"
          >
            <div className="w-[25rem]">
              <div className="overflow-hidden hover:brightness-75 transition-all duration-300 rounded-lg">
                <img
                  src="/images/projects/full.png"
                  alt=""
                  className="cursor-pointer lg:p-2 transition-all duration-300 rounded-lg h-[6rem] w-[12rem] md:h-[10rem] xl:h-[13rem] md:w-auto bg-gradient-to-tr from-orange-300 to-gray-300"
                />
              </div>
              <p className="mt-2 text-left">Angklung Beats</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={skillsStart}
            speed={0.18}
            className="flex flex-col justify-center items-center"
          >
            <h1 className="text-white text-4xl font-outfit font-bold my-10">
              skills
            </h1>
            <section className="p-10">
              <div className="flex flex-col xl:flex-row justify-center items-center gap-5 mx-36">
                <div className=" opacity-50 mt-5  hover:opacity-100 h-full xl:h-[22rem] 2xl:h-[21rem] bg-none w-[20rem] lg:w-1/2 border-b-4 grayscale hover:grayscale-0 hover:border-b-[10px] transition-all duration-500 border-white">
                  <h1 className="text-center text-xl font-outfit font-bold mb-5">
                    Front End
                  </h1>
                  <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5">
                    <img
                      src="/images/stackimg/atom.png"
                      alt=""
                      className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/images/stackimg/nextjs.png"
                      alt=""
                      className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/images/stackimg/tailwind.png"
                      alt=""
                      className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/images/stackimg/angular.png"
                      alt=""
                      className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/images/stackimg/laravel.png"
                      alt=""
                      className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/images/stackimg/html.png"
                      alt=""
                      className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/images/stackimg/css.png"
                      alt=""
                      className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/images/stackimg/javascript.png"
                      alt=""
                      className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/images/stackimg/typescript.png"
                      alt=""
                      className="h-16 hover:scale-110 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="opacity-50 mt-5 hover:opacity-100 h-full xl:h-[22rem] 2xl:h-[21rem] bg-none w-[20rem] lg:w-1/2 border-b-4 grayscale hover:grayscale-0 hover:border-b-[10px] transition-all duration-500 border-white">
                  <h1 className="text-center text-xl font-outfit font-bold mb-5">
                    Back End
                  </h1>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-wrap items-center gap-5">
                      <img
                        src="/images/stackimg/net.png"
                        alt=""
                        className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                      />
                      <img
                        src="/images/stackimg/express.png"
                        alt=""
                        className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-5">
                      <img
                        src="/images/stackimg/laravel.png"
                        alt=""
                        className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                      />
                      <img
                        src="/images/stackimg/nodejs.png"
                        alt=""
                        className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="opacity-50  mt-5 hover:opacity-100 h-full xl:h-[22rem] 2xl:h-[21rem] bg-none w-[20rem] lg:w-1/2 border-b-4 grayscale hover:grayscale-0 hover:border-b-[10px] transition-all duration-500 border-white">
                  <h1 className="text-center text-xl font-outfit font-bold mb-5">
                    Database
                  </h1>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-end items-center gap-5">
                      <img
                        src="/images/stackimg/postgresql.png"
                        alt=""
                        className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                      />
                      <img
                        src="/images/stackimg/mysql.png"
                        alt=""
                        className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-wrap justify-end items-center gap-5">
                      <img
                        src="/images/stackimg/firebase.png"
                        alt=""
                        className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                      />
                      <img
                        src="/images/stackimg/mongodb.png"
                        alt=""
                        className="h-20 hover:scale-110 transition-all duration-300 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full mt-10 xl:mt-32">
                <a
                  href="mailto:alxtim10@gmail.com"
                  className="hover:underlinemb-2 text-center"
                >
                  alxtim10@gmail.com
                </a>
                <div className="flex justify-center items-center gap-5 bg-[#303030] py-2 px-3 rounded-lg w-32 mt-2">
                  <a href="https://www.linkedin.com/in/alxtim/">
                    <img
                      src="/images/footer/linkedin.png"
                      alt=""
                      className="h-8 grayscale hover:grayscale-0 hover:scale-105 transition-all cursor-pointer"
                    />
                  </a>
                  <a href="https://github.com/alxtim10">
                    <img
                      src="/images/footer/github.png"
                      alt=""
                      className="h-9 grayscale hover:grayscale-0 hover:scale-105 transition-all cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </section>
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  );
}
