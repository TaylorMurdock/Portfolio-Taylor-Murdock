import React from "react";
import Section from "./common/Section";
import NodeJSLogo from "../assets/NodeJSLogo.jpg";
import PythonLogo from "../assets/PythonLogo.png";
import SqlLogo from "../assets/sqlLogo.png";
import PrismaLogo from "../assets/PrismaLogo.png";
import PostgresqlLogo from "../assets/PostgresqlLogo.png";
import ReactLogo from "../assets/ReactLogo.png";
import JavascriptLogo from "../assets/JavaScriptLogo.png";
import HtmlLogo from "../assets/HtmlLogo.png";
import CssLogo from "../assets/CssLogo.png";
import TailwindLogo from "../assets/TailwindLogo.png";
import TypescriptLogo from "../assets/TypescriptLogo.jpg";

const Skills = () => {
  const skills = [
    {
      title: "Node.js",
      link: "https://nodejs.org/en/docs",
      image: NodeJSLogo,
    },
    {
      title: "Python",
      link: "https://www.python.org/doc/",
      image: PythonLogo,
    },
    {
      title: "SQL",
      link: "https://www.w3schools.com/sql/sql_quickref.asp",
      image: SqlLogo,
    },
    {
      title: "Prisma",
      link: "https://www.prisma.io/docs",
      image: PrismaLogo,
    },
    {
      title: "Postgresql",
      link: "https://www.postgresql.org/docs/",
      image: PostgresqlLogo,
    },
    {
      title: "React",
      link: "https://react.dev/",
      image: ReactLogo,
    },
    {
      title: "Javascript",
      link: "https://devdocs.io/javascript/",
      image: JavascriptLogo,
    },
    {
      title: "HTML",
      link: "https://www.w3schools.com/html/html_intro.asp",
      image: HtmlLogo,
    },
    {
      title: "CSS",
      link: "https://devdocs.io/css/",
      image: CssLogo,
    },
    {
      title: "Tailwind",
      link: "https://v2.tailwindcss.com/docs",
      image: TailwindLogo,
    },
    {
      title: "Typescript",
      link: "https://www.typescriptlang.org/docs",
      image: TypescriptLogo,
    },
  ];

  return (
    <Section
      title="Skills 🛠"
      subtitle="Here are some of the coding skills I possess, each linked to its respective documentation."
    >
      <div id="skills" className="grid grid-cols-6 gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="text-center">
            <a href={skill.link} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110">
                <img
                  src={skill.image}
                  alt={`${skill.title} logo`}
                  className="w-36 h-36 md:w-44 md:h-44 object-contain"
                />
                <h3 className="mt-5 text-base">{skill.title}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
