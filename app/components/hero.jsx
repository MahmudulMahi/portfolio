import React from "react";

const Hero = () => {
  return (
    <section className="w-full mt-40 ">
      <p className="text-[#64ffda] mb-4">Hi, my name is</p>
      <h1 className="text-5xl font-bold text-[#ccd6f6]">Brittany Chiang.</h1>
      <h2 className="text-5xl font-bold text-gray-500 mt-2">
        I build things for the web.
      </h2>
      <p className="mt-6 text-gray-400 max-w-xl">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <span className="text-[#64ffda]">Upstatement</span>.
      </p>

      <a
        href="#courses"
        className="inline-block mt-10 border border-[#64ffda] px-6 py-3 rounded text-[#64ffda] hover:bg-[#64ffda]/10"
      >
        Check out my course!
      </a>
    </section>
  );
};

export default Hero;
