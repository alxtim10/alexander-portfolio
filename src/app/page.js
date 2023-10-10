"use client";

import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ExCard from "@/components/experience/ExperienceCard";
import HomeTitle from "@/components/home/HomeTitle";
import AboutMe from "@/components/about/AboutMe";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const mainRef = useRef();

  const experienceData = [
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
  const introDuration = 4;
  const experienceDuration = 1.4;
  const projectDuration = 1;
  const skillsDuration = 1.12;
  const buffer = 1;

  const introStart = start + 0;
  const experienceStart = introStart + introDuration + buffer;
  const projectStart = experienceStart + experienceDuration + buffer;
  const skillsStart = projectStart + skillsDuration + buffer;
  const end = skillsStart + skillsDuration;

  const totalDuration = end - start;

  return (
    <>
      <main className="w-full ">
        <div className="">
          <Parallax pages={totalDuration} ref={mainRef}>
            <ParallaxLayer
              sticky={{ start: introStart, end: introStart + 1.1 }}
              factor={1.05}
              // className="bg-gradient-to-b from-[#e8e8e8] to-[#7d7d7d]"
              className="bg-[url('/images/test1.png')] z-[-90] bg-cover bg-center"
            ></ParallaxLayer>

            <ParallaxLayer
              offset={introStart}
              speed={0.4}
              className="flex flex-col justify-end pb-20 text-white"
            >
              <HomeTitle
                mainRef={mainRef}
                experienceStart={experienceStart}
                skillsStart={skillsStart}
              />
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: introStart + 1, end: introStart + 3 }}
              factor={2.75}
              speed={0.05}
              // className="bg-gradient-to-b from-[#7c7c7c] to-[#303030]"
              className="bg-[url('/images/test2.png')] z-[-100] bg-cover bg-center"
            ></ParallaxLayer>

            <ParallaxLayer
              offset={introStart + 1}
              speed={0.18}
              className="flex flex-col justify-center items-center mb-10 text-white"
            >
              <AboutMe />
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: introStart + 2.15, end: introStart + 3 }}
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
              sticky={{ start: introStart + 2.75, end: introStart + 3.5 }}
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
              sticky={{ start: introStart + 3, end: introStart + 4 }}
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
              sticky={{ start: introStart + 3, end: experienceStart + 1 }}
              factor={2.75}
              speed={0.05}
              // className="bg-gradient-to-b from-[#7c7c7c] to-[#303030]"
              className="bg-[url('/images/test3.png')] z-[-100] bg-cover bg-center"
            ></ParallaxLayer>

            <ParallaxLayer
              sticky={{
                start: experienceStart + 1,
                end: skillsStart + skillsDuration,
              }}
              factor={2.75}
              speed={0.05}
              // className="bg-gradient-to-b from-[#7c7c7c] to-[#303030]"
              className="bg-[url('/images/test4.png')] z-[-110] bg-cover bg-center"
            ></ParallaxLayer>

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
              <section className="flex justify-center p-10 mb-5 mx-4 bg-[#303030] rounded-xl">
                <div className="-my-6">
                  {experienceData.map((data) => {
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
              style={{ maxWidth: "52em", zIndex: -75 }}
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
                  <Link href="/projects">
                    <div className="relative h-[8rem] w-[15rem] md:h-[10rem] md:w-[18rem] xl:h-[15rem] xl:w-[25rem]">
                      <Image
                        src="/images/projects/1.png"
                        alt="SkenaHub"
                        fill={true}
                        className="cursor-pointer lg:p-2 transition-all duration-300 rounded-lg  bg-gradient-to-br from-blue-300 to-gray-300"
                        priority
                      />
                    </div>
                  </Link>
                </div>
                <p className="mt-2 text-left text-white">Skena Hub</p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={projectStart + 0.6}
              speed={0.25}
              factor={1}
              className="flex justify-end bg-transparent ml-32 md:ml-20 lg:ml-14 xl:-ml-10 2xl:-ml-20"
            >
              <div className="w-[25rem]">
                <div className="overflow-hidden hover:brightness-75 transition-all duration-300 rounded-lg">
                  <Link href="/projects">
                    <div className="relative h-[8rem] w-[15rem] md:h-[10rem] md:w-[18rem] xl:h-[15rem] xl:w-[25rem]">
                      <Image
                        src="/images/projects/projectG1.png"
                        alt="GuitarCave"
                        fill={true}
                        className="cursor-pointer lg:p-2  transition-all duration-300 rounded-lg bg-gradient-to-br from-orange-200 to-blue-200"
                        priority
                      />
                    </div>
                  </Link>
                </div>
                <p className="mt-2 text-left text-white">Guitar Cave</p>
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
                  <Link href="/projects">
                    <div className="relative h-[8rem] w-[15rem] md:h-[10rem] md:w-[18rem] xl:h-[15rem] xl:w-[25rem]">
                      <Image
                        src="/images/projects/3.png"
                        alt="SIMUDAGuestBook"
                        fill={true}
                        className="cursor-pointer lg:p-2 transition-all duration-300 rounded-lg bg-gradient-to-bl from-yellow-200 to-gray-400"
                        priority
                      />
                    </div>
                  </Link>
                </div>
                <p className="mt-2 text-left text-white">SIMUDA Guest Book</p>
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
                  <Link href="/projects">
                    <div className="relative h-[7rem] w-[15rem] md:h-[9rem] md:w-[18rem] xl:h-[12rem] xl:w-[25rem]">
                      <Image
                        src="/images/projects/full.png"
                        alt="AngklungBeats"
                        fill={true}
                        className="cursor-pointer lg:p-2 transition-all duration-300 rounded-lg bg-gradient-to-tr from-orange-300 to-gray-300"
                        priority
                      />
                    </div>
                  </Link>
                </div>
                <p className="mt-2 text-left text-white">Angklung Beats</p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={skillsStart}
              speed={0.18}
              className="flex flex-col justify-center items-center"
            >
              <h1 className="text-white text-4xl font-outfit font-semibold my-10">
                skills
              </h1>
              <section className="p-10">
                <div className="flex flex-col xl:flex-row justify-center items-center gap-5 mx-36">
                  <div className=" opacity-50 mt-5  hover:opacity-100 h-full xl:h-[22rem] 2xl:h-[21rem] bg-none w-[20rem] lg:w-1/2 border-b-4 grayscale hover:grayscale-0 hover:border-b-[10px] transition-all duration-500 border-white">
                    <h1 className="text-white text-center text-xl font-outfit font-bold mb-5">
                      Front End
                    </h1>
                    <div className="flex flex-wrap justify-center items-center gap-5">
                      <figure className="itooltip" title="React">
                        <div className="relative w-20 h-20">
                          <Image
                            src="/images/stackimg/atom.png"
                            alt="react"
                            fill={true}
                            className="hover:scale-110 transition-all duration-300 cursor-pointer"
                            priority
                          />
                        </div>
                      </figure>
                      <figure className="itooltip" title="NextJS">
                        <div className="relative w-20 h-20">
                          <Image
                            src="/images/stackimg/nextjs.png"
                            alt="nextjs"
                            fill={true}
                            className="hover:scale-110 transition-all duration-300 cursor-pointer"
                            priority
                          />
                        </div>
                      </figure>
                      <figure className="itooltip" title="Tailwind CSS">
                        <div className="relative w-20 h-20">
                          <Image
                            src="/images/stackimg/tailwind.png"
                            alt="tailwindcss"
                            fill={true}
                            className="hover:scale-110 transition-all duration-300 cursor-pointer"
                            priority
                          />
                        </div>
                      </figure>
                      <figure className="itooltip" title="Angular">
                        <div className="relative w-20 h-20">
                          <Image
                            src="/images/stackimg/angular.png"
                            alt="angular"
                            fill={true}
                            className="hover:scale-110 transition-all duration-300 cursor-pointer"
                            priority
                          />
                        </div>
                      </figure>
                      <figure className="itooltip" title="HTML">
                        <div className="relative w-20 h-20">
                          <Image
                            src="/images/stackimg/html.png"
                            alt="html"
                            fill={true}
                            className="hover:scale-110 transition-all duration-300 cursor-pointer"
                            priority
                          />
                        </div>
                      </figure>
                      <figure className="itooltip" title="CSS">
                        <div className="relative w-20 h-20">
                          <Image
                            src="/images/stackimg/css.png"
                            alt="css"
                            fill={true}
                            className="hover:scale-110 transition-all duration-300 cursor-pointer"
                            priority
                          />
                        </div>
                      </figure>
                      <figure className="itooltip" title="Javascript">
                        <div className="relative w-20 h-20">
                          <Image
                            src="/images/stackimg/javascript.png"
                            alt="js"
                            fill={true}
                            className="hover:scale-110 transition-all duration-300 cursor-pointer"
                            priority
                          />
                        </div>
                      </figure>
                      <figure className="itooltip" title="Typescript">
                        <div className="relative w-16 h-16">
                          <Image
                            src="/images/stackimg/typescript.png"
                            alt="ts"
                            fill={true}
                            className="hover:scale-110 transition-all duration-300 cursor-pointer"
                            priority
                          />
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div className="opacity-50 mt-5 hover:opacity-100 h-full xl:h-[22rem] 2xl:h-[21rem] bg-none w-[20rem] lg:w-1/2 border-b-4 grayscale hover:grayscale-0 hover:border-b-[10px] transition-all duration-500 border-white">
                    <h1 className="text-white text-center text-xl font-outfit font-bold mb-5">
                      Back End
                    </h1>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-wrap items-center gap-5">
                        <figure className="itooltip" title=".NET Core">
                          <div className="relative w-20 h-20">
                            <Image
                              src="/images/stackimg/net.png"
                              alt="net"
                              fill={true}
                              className="hover:scale-110 transition-all duration-300 cursor-pointer"
                              priority
                            />
                          </div>
                        </figure>
                        <figure className="itooltip" title="ExpressJS">
                          <div className="relative w-20 h-20">
                            <Image
                              src="/images/stackimg/express.png"
                              alt="express"
                              fill={true}
                              className="hover:scale-110 transition-all duration-300 cursor-pointer"
                              priority
                            />
                          </div>
                        </figure>
                      </div>
                      <div className="flex flex-wrap items-center gap-5">
                        <figure className="itooltip" title="Java Springboot">
                          <div className="relative w-20 h-20">
                            <Image
                              src="/images/stackimg/springboot.png"
                              alt="springboot"
                              fill={true}
                              className="hover:scale-110 transition-all duration-300 cursor-pointer"
                              priority
                            />
                          </div>
                        </figure>
                        <figure className="itooltip" title="NodeJS">
                          <div className="relative w-20 h-20">
                            <Image
                              src="/images/stackimg/nodejs.png"
                              alt="nodejs"
                              fill={true}
                              className="hover:scale-110 transition-all duration-300 cursor-pointer"
                              priority
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-50  mt-5 hover:opacity-100 h-full xl:h-[22rem] 2xl:h-[21rem] bg-none w-[20rem] lg:w-1/2 border-b-4 grayscale hover:grayscale-0 hover:border-b-[10px] transition-all duration-500 border-white">
                    <h1 className="text-white text-center text-xl font-outfit font-bold mb-5">
                      Database
                    </h1>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-wrap justify-end items-center gap-5">
                        <figure className="itooltip" title="PostgreSQL">
                          <div className="relative w-20 h-20">
                            <Image
                              src="/images/stackimg/postgresql.png"
                              alt="postgresql"
                              fill={true}
                              className="hover:scale-110 transition-all duration-300 cursor-pointer"
                              priority
                            />
                          </div>
                        </figure>
                        <figure className="itooltip" title="MySQL">
                          <div className="relative w-20 h-20">
                            <Image
                              src="/images/stackimg/mysql.png"
                              alt="mysql"
                              fill={true}
                              className="hover:scale-110 transition-all duration-300 cursor-pointer"
                              priority
                            />
                          </div>
                        </figure>
                      </div>
                      <div className="flex flex-wrap justify-end items-center gap-5">
                        <figure className="itooltip" title="Firebase">
                          <div className="relative w-20 h-20">
                            <Image
                              src="/images/stackimg/firebase.png"
                              alt="firebase"
                              fill={true}
                              className="hover:scale-110 transition-all duration-300 cursor-pointer"
                              priority
                            />
                          </div>
                        </figure>
                        <figure className="itooltip" title="MongoDB">
                          <div className="relative w-20 h-20">
                            <Image
                              src="/images/stackimg/mongodb.png"
                              alt="mongodb"
                              fill={true}
                              className="hover:scale-110 transition-all duration-300 cursor-pointer"
                              priority
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full mt-10 xl:mt-32 pb-6">
                  <a
                    href="mailto:alxtim10@gmail.com"
                    className="hover:underlinemb-2 text-center text-white"
                  >
                    alxtim10@gmail.com
                  </a>
                  <div className="flex justify-center items-center gap-5 bg-[#303030] py-2 px-3 rounded-lg w-32 mt-2">
                    <a href="https://www.linkedin.com/in/alxtim/">
                      <div className="relative w-8 h-8">
                        <Image
                          src="/images/footer/linkedin.png"
                          alt="linkedin"
                          fill={true}
                          className="grayscale hover:grayscale-0 hover:scale-105 transition-all cursor-pointer"
                          priority
                        />
                      </div>
                    </a>
                    <a href="https://github.com/alxtim10">
                      <div className="relative w-9 h-9">
                        <Image
                          src="/images/footer/github.png"
                          alt="github"
                          fill={true}
                          className="grayscale hover:grayscale-0 hover:scale-105 transition-all cursor-pointer"
                          priority
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </section>
            </ParallaxLayer>
          </Parallax>
        </div>
      </main>
    </>
  );
}
