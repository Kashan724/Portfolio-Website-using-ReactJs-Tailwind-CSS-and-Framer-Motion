import React from 'react';
import { DiJavascript1, DiMongodb, DiSass } from "react-icons/di";
import { FaFacebookF, FaGithub, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiExpress, SiNodedotjs, SiOpenai, SiTailwindcss } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Computer Systems Engineer.", "MERN Stack Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize font-serif">Muhammad Kashan</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a self-taught MERN stack developer with 1 year of dedicated hand-on practice with projects, I'm eager to contribute my skills and passion for programming to meaningful projects. I thrive on tackling new challenges and delivering high-quality work. With a strong foundation in both frontend and backend development, I am equipped to build dynamic and scalable web applications. I am enthusiastic about collaborating with teams to create innovative solutions and continuously enhance my expertise in MERN stack development.
        </p>
      </div>
      <div className="flex flex-col  gap-6 lgl:gap-6 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          
          <span className="bannerIcon">
            <a target='_blank' rel="noreferrer" href='https://github.com/Kashan724/'><FaGithub /></a>
          </span>
        </div>
        <br />
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 ">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4 flex-wrap">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <DiJavascript1/>
            </span>
            <span className="bannerIcon">
              <SiExpress/>
            </span>
            <span className="bannerIcon">
              <DiMongodb/>
            </span>
            <span className="bannerIcon">
              <SiOpenai/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
