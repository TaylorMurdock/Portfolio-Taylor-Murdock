import React from "react";
import { FaArrowDown } from "react-icons/fa";
import avatar from "../assets/goodpic.jpg";

const Hero = () => {
  const social = [];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) {
      downArrow.classList.add("hide-down-arrow");
      console.log("Arrow hidden");
    } else {
      downArrow.classList.remove("hide-down-arrow");
      console.log("Arrow shown");
    }
  });

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold">
        Taylor Murdock
      </h2>
      <h3 className="py-3 text-2xl">Software Engineer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span> as a skilled
        full stack developer, I am driven by a desire to create impactful
        solutions that make a difference. I bring a strong work ethic and a team
        player mentality to every project, drawing on my experience leading
        teams and working independently. My dedication to collaboration,
        integrity, and excellence guides my work, as I strive to exceed
        expectations and consistently deliver high-quality results. Whether
        working with .js or React, I approach each task with curiosity,
        enthusiasm, and a commitment to doing my best work.
      </p>

      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {social.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
      </div>
      <div>
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-72 md:h-72 object-cover object-top rounded-xl"
        />
      </div>
      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
