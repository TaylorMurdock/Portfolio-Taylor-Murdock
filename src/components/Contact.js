import React from "react";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-5 text-center">
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
        <p className="text-lg">
          Phone:{" "}
          <a href="tel:7067559419" className="text-rose-600">
            706-755-9419
          </a>
        </p>
      </div>
      {/* You can add a contact form here if needed */}
    </section>
  );
};

export default Contact;
