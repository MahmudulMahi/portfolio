import React from "react";
import Image from "next/image"; // If you’re using Next.js
import profilePic from "../public/profile.jpg"; // replace with your image

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0a192f] text-[#ccd6f6]">
      <div className="max-w-5xl mx-auto px-6 md:px-0 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-[#64ffda]">01.</span> About Me
          </h2>

          <p className="text-gray-400 mb-4">
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>

          <p className="text-gray-400 mb-4">
            Fast-forward to today, and I’ve had the privilege of working at{" "}
            <span className="text-[#64ffda]">an advertising agency</span>,{" "}
            <span className="text-[#64ffda]">a start-up</span>,{" "}
            <span className="text-[#64ffda]">a huge corporation</span>, and{" "}
            <span className="text-[#64ffda]">a student-led design studio</span>.
            My main focus these days is building accessible, inclusive products
            and digital experiences at{" "}
            <span className="text-[#64ffda]">Upstatement</span>.
          </p>

          <p className="text-gray-400 mb-6">
            I also recently <span className="text-[#64ffda]">launched a course</span> that covers
            everything you need to build a web app with the Spotify API using
            Node & React.
          </p>

          {/* Tech List */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <ul className="space-y-2">
              <li>▸ JavaScript (ES6+)</li>
              <li>▸ React</li>
              <li>▸ Node.js</li>
            </ul>
            <ul className="space-y-2">
              <li>▸ TypeScript</li>
              <li>▸ Eleventy</li>
              <li>▸ WordPress</li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-64 h-64 mx-auto">
          <div className="absolute top-4 left-4 w-full h-full border-2 border-[#64ffda] rounded-md"></div>
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="relative rounded-md object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
