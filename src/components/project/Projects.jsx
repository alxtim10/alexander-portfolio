"use client"

import React, { useRef } from "react";
import PagesNavbar from "../../components/navigation/PagesNavbar";
import "./Projects.css";

const Projects = () => {
  const skenaRef = useRef(null);
  const simudaRef = useRef(null);
  const guitarCaveRef = useRef(null);
  const angklungRef = useRef(null);
  const nikeRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <PagesNavbar />

      <div ref={skenaRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            Skena Hub
          </h1>
          <p className="text-lg">Online Fashion E-Commerce Website</p>
          <p className="mb-4">Stack : ReactJS + Vite, Tailwind</p>
          <a
            href="https://skenahub.netlify.app"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img src="/images/projects/projectA1.png" alt="" className="imgCard w-full rounded-xl" />
            <img src="/images/projects/projectA5.png" alt="" className="imgCard w-full rounded-xl" />
            <img src="/images/projects/projectA3.png" alt="" className="imgCard w-full rounded-xl" />
            <img src="/images/projects/projectA4.png" alt="" className="imgCard w-full rounded-xl" />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={guitarCaveRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            Guitar Cave
          </h1>
          <p className="text-lg">Guitar Shop Website</p>
          <p className="mb-4">Stack : NextJS, ExpressJS, Tailwind</p>
          <a
            href="https://guitarcave.netlify.app"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img src="/images/projects/projectG1.png" alt="" className="imgCard w-full rounded-xl" />
            <img src="/images/projects/projectG2.png" alt="" className="imgCard w-full rounded-xl" />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={simudaRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            SIMUDA Guest Book
          </h1>
          <p className="text-lg">Event Guest Registration Web</p>
          <p className="mb-4">Stack : ReactJS + Vite, Tailwind, Firebase</p>
          <a
            href="https://simudaguestbook.netlify.app"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img src="/images/projects/projectS1.png" alt="" className="imgCard w-full rounded-xl" />
            <img src="/images/projects/projectS2.png" alt="" className="imgCard w-full rounded-xl" />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={angklungRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            Angklung Traditional Instrument VST Plugin
          </h1>
          <p className="text-lg">VST Plugin for Digital Audio Workstation</p>
          <p className="mb-4">Stack : JUCE Framework</p>
          <a
            href="https://github.com/alxtim10"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            GitHub
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img src="/images/projects/projectV1.png" alt="" className="imgCard w-full rounded-xl" />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div ref={nikeRef}>
        <div className="pl-5 lg:pl-20">
          <h1 className="border-b border-black text-4xl font-outfit font-bold w-1/2 lg:w-1/4 mb-2">
            Nike Clone
          </h1>
          <p className="text-lg">Personal Nike Clone Web</p>
          <p className="mb-4">Stack : ReactJS + Vite, Tailwind</p>
          <a
            href="https://alxsnikeclone.netlify.app"
            className="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
          >
            Visit
          </a>
        </div>
        <div className="flex justify-center items-center w-full px-5 lg:pl-20 py-10 gap-5">
          <div className="flex flex-col w-full gap-5">
            <img src="/images/projects/projectN1.png" alt="" className="imgCard w-full rounded-xl" />
          </div>
          <div className="hidden lg:block w-full"></div>
        </div>
      </div>

      <div className="hidden lg:block z-10 right-5 xl:right-24 2xl:right-56 fixed top-[30%] h-32">
        <h1 className="ml-[4rem] xl:ml-0 text-2xl xl:text-3xl font-outfit font-bold mb-2">
          projects / personal works
        </h1>
        <h1
          onClick={() => scrollToSection(skenaRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          skena hub
        </h1>
        <h1
          onClick={() => scrollToSection(guitarCaveRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          guitar cave
        </h1>
        <h1
          onClick={() => scrollToSection(simudaRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          simuda guest book
        </h1>
        <h1
          onClick={() => scrollToSection(angklungRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          angklung traditional instrument vst plugin
        </h1>
        <h1
          onClick={() => scrollToSection(nikeRef)}
          className="text-2xl font-outfit font-bold ml-20 cursor-pointer mb-2 hover:translate-x-3 transition duration-300"
        >
          alxnike
        </h1>
      </div>
    </section>
  );
};

export default Projects;
