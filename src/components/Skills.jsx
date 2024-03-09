import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Skills = () => {
  const skills = [
    {
      logo: "FaHtml5",
      name: "HTML",
      level: "Intermediate",
      count: "80",
      color: "text-orange-600",
      color1: "text-orange-600",
    },
    {
      logo: "IoLogoCss3",
      name: "CSS",
      level: "Intermediate",
      count: "80",
      color: "text-sky-600",
    },
    {
      logo: "IoLogoJavascript",
      name: "JavaScript",
      level: "Intermediate",
      count: "80",
      color: "text-yellow-400",
    },
    {
      logo: "FaReact",
      name: "React",
      level: "Intermediate",
      count: "80",
      color: "text-cyan-500",
    },
    {
      logo: "FaBootstrap",
      name: "Bootstrap",
      level: "Elementary",
      count: "60",
      color: "text-purple-500",
    },
    {
      logo: "SiTailwindcss",
      name: "Tailwind",
      level: "Elementary",
      count: "60",
      color: "text-cyan-400",
    },
    {
      logo: "FaNodeJs",
      name: "NodeJs,",
      level: "Beginner",
      count: "40",
      color: "text-emerald-500",
    },
    {
      logo: "SiExpress",
      name: "ExpressJs",
      level: "Beginner",
      count: "40",
      color: "text-neutral-300",
    },
    {
      logo: "DiMongodb",
      name: "MongoDB",
      level: "Beginner",
      count: "40",
      color:
        "bg-gradient-to-r from-green-600 to-slate-50 bg-clip-text text-transparent",
    },
    {
      logo: "FaGithub",
      name: "GitHub",
      level: "Elementary",
      count: "60",
      color: "text-green-500",
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Technologies I have worked with
        </p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.logo === "FaHtml5" && <FaHtml5 />}
                  {skill.logo === "IoLogoCss3" && <IoLogoCss3 />}
                  {skill.logo === "IoLogoJavascript" && <IoLogoJavascript />}
                  {skill.logo === "FaReact" && <FaReact />}
                  {skill.logo === "FaBootstrap" && <FaBootstrap />}
                  {skill.logo === "SiTailwindcss" && <SiTailwindcss />}
                  {skill.logo === "FaNodeJs" && <FaNodeJs />}
                  {skill.logo === "SiExpress" && <SiExpress />}
                  {skill.logo === "DiMongodb" && <DiMongodb />}
                  {skill.logo === "FaGithub" && <FaGithub />}
                </div>
              </div>
              <p className={`text-xl mt-3 ${skill.color}`}>{skill.name}</p>
              <p className="text-xl mt-1">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
