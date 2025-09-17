import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="mt-20 bg-[#0a192f] text-[#ccd6f6] px-4 md:px-4 lg:px-0">
      <div className="w-full mx-auto  flex flex-col-reverse md:flex-row gap-1 items-center">
        {/* Left Content */}
        <div className="md:w-[60%] pt-10 md:pt-0">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-[#64ffda]">01.</span> About Me
          </h2>

          <p className="text-gray-400 mb-4">
            Hello! My name is Mahmudul and I’m a Software Engineer who enjoys
            creating impactful digital experiences for the web.
          </p>

          <p className="text-gray-400 mb-4">
            My journey in web development began with a strong curiosity about
            how the internet works, and over time, I’ve honed my skills by
            building and contributing to real-world projects. I’ve had the
            privilege of working at{" "}
            <span className="text-[#64ffda]">Visionary Tech Solution</span>, and{" "}
            <span className="text-[#64ffda]">Zan Vision Labs</span>, where I
            focused on delivering modern, user-friendly, and scalable web
            applications.
          </p>

          <p className="text-gray-400 mb-6">
        
            I specialize in building modern web applications using the following {" "}
            <span className="text-[#64ffda]">
            technologies. </span> 
         
          </p>

          {/* Tech List */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <ul className="space-y-2">
              <li>▸ JavaScript </li>
              <li>▸ React.js</li>
              <li>▸ Node.js</li>
            </ul>
            <ul className="space-y-2">
              <li>▸ TypeScript</li>
              <li>▸ Next.js</li>
              <li>▸ Php(Laravel)</li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-64 h-64 mx-auto ">
          <div className="absolute top-4 left-4 w-full h-full border-2 border-[#64ffda] rounded-md "></div>
          <Image
            src="/image/mahmudul.jpg"
            alt="Profile Picture"
            width={256}
            height={256}
            className="relative rounded-md object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
