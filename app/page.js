import Image from "next/image";
import Navber from "./components/navber";
import Hero from "./components/hero";
import About from "./about/page";
import Experience from "./components/experience";

export default function Home() {
  return (
    <div className="">
      <Navber></Navber>
      <div className="max-w-6xl pl-20 mx-auto">
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
      </div>
    </div>
  );
}
