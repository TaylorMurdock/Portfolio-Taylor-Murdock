import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-5 text-center"
    >
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <p className="max-w-xl mx-auto mt-3 text-gray-600">
        If you have any questions or would like to get in touch, please feel
        free to contact me.
      </p>
      <div className="mt-5">
        <p className="text-lg">
          Email:{" "}
          <a href="mailto:tjmurd4545@gmail.com" className="text-rose-600">
            tjmurd4545@gmail.com
          </a>
        </p>
        <div className="flex flex-col items-center mt-2">
          {/* Center and stack icons under the phone number */}
          <p className="text-lg">
            Phone:{" "}
            <a href="tel:7067559419" className="text-rose-600">
              706-755-9419
            </a>
          </p>
          <div className="flex mt-2">
            {" "}
            {/* Use flex to display icons side by side */}
            <a
              href="https://www.linkedin.com/in/taylor-murdock/"
              target="_blank"
              rel="noreferrer"
              className="text-rose-600 mr-2"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/TaylorMurdock?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="text-rose-600"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
