import Image from "next/image";
import Navber from "./components/navber";
import Hero from "./components/hero";

import Experience from "./components/experience";
import About from "./components/about";

import Skills from "./components/skill";
import GetInTouch from "./components/mail";
import Projects from "./components/card/projects";

export default function Home() {
  return (
    <div className="">
      <Navber></Navber>
      <div className="max-w-5xl  mx-auto  ">
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Skills></Skills>
        <GetInTouch></GetInTouch>
      </div>
    </div>
  );
}
