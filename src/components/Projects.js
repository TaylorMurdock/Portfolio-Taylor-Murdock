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
      description:
        "CruxTrack is the ultimate companion for rock climbers, offering a streamlined way to keep a record of your climbing routes, whether they are conquered challenges, future aspirations, or memorable adventures. In a world of endless climbing opportunities, CruxTrack ensures you never forget your favorite routes or the ones you dream of conquering.",
      skills:
        "Skills: TypeScript, TailWind, React, Node.js, Prisma, PostgreSQL",
    },
    {
      id: 2,
      image: skySense,
      title: "SkySense",
      link: "https://skysense.onrender.com",
      description:
        "Skysense is a weather app that allows users to access weather information for their desired location. Whether you want to check the current weather or plan ahead for the next few days or even weeks, Skysense has you covered. The app utilizes the Weather API provided by OpenWeatherMap to fetch accurate and up-to-date weather data.",
      skills: "Skills: JavaScript, CSS, HTML",
    },
    {
      id: 3,
      image: tasteTally,
      title: "TasteTally",
      link: "https://tastetally-frontend.onrender.com/",
      description:
        "Taste Tally, your ultimate companion for organizing and managing your treasured recipes! This user-friendly recipe app empowers you to create a digital log of your culinary creations, making it effortless to revisit and recreate your favorite dishes. Whether you're a seasoned chef or a passionate home cook, Taste Tally is here to simplify your cooking journey.",
      skills: "Skills: JavaScript, Sass, MongoDB",
    },
  ];
  return (
    <div id="projects">
      <Section
        title="Projects 💻"
        subtitle="Explore a selection of my latest projects, where I've applied my skills and creativity to solve real-world problems. Each project is a testament to my passion for coding and my commitment to delivering high-quality solutions."
      >
        <div id="projects" className="grid gap-10 lg:grid-cols-2">
          {projects.map(({ id, image, title, link, description, skills }) => {
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
                  <p className="mt-2 text-sm text-gray-600">{description}</p>
                  <p className="mt-2 text-sm text-gray-600">{skills}</p>
                </div>
              </a>
            );
          })}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
