import React from "react";

const Hero = () => {
  return (
    <section className="w-full px-4 md:px-4 lg:px-0 mt-40 ">
      <p className="text-[#64ffda] mb-4">Hi, my name is</p>
      <h1 className="text-5xl font-bold text-[#ccd6f6]">Md Mahmudul Islam</h1>
      <h2 className="text-5xl font-bold text-gray-500 mt-2">
        I build things for the web.
      </h2>
      <p className="mt-6 text-gray-400 max-w-xl">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <span className="text-[#64ffda]">Zan Vision Labs </span>.
      </p>

      <a
        href="https://github.com/MahmudulMahi"
        target="_blank"
        className="inline-block px-3 py-2 mt-10 border border-[#64ffda] rounded-xs text-[#64ffda] font-medium
             relative transition-all duration-300
             hover:shadow-[4px_4px_0px_0px_#64ffda] 
             hover:-translate-y-1 hover:-translate-x-1"
      >
        Visit my github
      </a>
    </section>
  );
};

export default Hero;
