import React from "react";
import Section from "./common/Section";
import cruxTrack from "../assets/cruxTrack.png";
import skySense from "../assets/skySense.png";
import tasteTally from "../assets/tasteTally.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: cruxTrack,
      title: "CruxTrack",
      link: "https://cruxtrack-frontend.vercel.app/",
    },
    {
      id: 2,
      image: skySense,
      title: "SkySense",
      link: "https://skysense.onrender.com",
    },
    {
      id: 3,
      image: tasteTally,
      title: "TasteTally",
      link: "https://tastetally-frontend.onrender.com/",
    },
  ];
  return (
    <Section
      title="Projects 💻"
      subtitle="Explore a selection of my latest projects, where I've applied my skills and creativity to solve real-world problems. Each project is a testament to my passion for coding and my commitment to delivering high-quality solutions."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {projects.map(({ id, image, title, link }) => {
          return (
            <a href={link} key={id}>
              <div
                key={id}
                className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-36 h-36 md:w-44 md:h-44 object-contain"
                />
                <h3 className="mt-5 text-base">{title}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
