"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "project","skill", "contact"];
      let current = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show/Hide navbar based on scroll direction
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setShowNavbar(false);
      } else {
        // scrolling up → show
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur px-6 md:px-10 py-6 flex justify-between items-center transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center bg-[#0c1b2a] ">
        <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer group">
          {/* Shadow Hexagon */}
          {/* <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-[#64ffda] absolute top-0 left-0 transition-all duration-300"
          >
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
            />
          </svg> */}

          {/* Main Hexagon */}
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-teal-300 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
            />
          </svg>

          {/* Letter */}
          <span className="absolute text-2xl font-bold text-teal-300 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
            M
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <Link href="#about" className="text-[#64ffda]">
          01.{" "}
          <span
            className={
              active === "about" ? "text-[#64ffda]" : "text-white"
            }
          >
            About
          </span>
        </Link>
        <Link href="#experience" className="text-[#64ffda]">
          02.{" "}
          <span
            className={
              active === "experience" ? "text-[#64ffda]" : "text-white"
            }
          >
            Experience
          </span>
        </Link>
        <Link href="#project" className="text-[#64ffda]">
          03.{" "}
          <span
            className={
              active === "project" ? "text-[#64ffda]" : "text-white"
            }
          >
            Project
          </span>
        </Link>
        <Link href="#skill" className="text-[#64ffda]">
          04.{" "}
          <span
            className={
              active === "skill" ? "text-[#64ffda]" : "text-white"
            }
          >
            Skill
          </span>
        </Link>
        <Link href="#contact" className="text-[#64ffda]">
          04.{" "}
          <span
            className={
              active === "contact" ? "text-[#64ffda]" : "text-white"
            }
          >
            Contact
          </span>
        </Link>
        <Link
          href="https://drive.google.com/drive/u/0/folders/1KulHyMqwLSFPscnyKJYOYVgnn9Y4RZom"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-2 border border-[#64ffda] rounded-xs text-[#64ffda] font-medium
             relative transition-all duration-300
             hover:shadow-[4px_4px_0px_0px_#64ffda] 
             hover:-translate-y-1 hover:-translate-x-1"
        >
          Resume
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#64ffda] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a192f] flex flex-col  items-start gap-6 py-6 md:hidden text-left pl-2">
        <Link href="#about" className="text-[#64ffda]">
          01.{" "}
          <span
            className={
              active === "about" ? "text-[#64ffda]" : "text-white"
            }
          >
            About
          </span>
        </Link>
        <Link href="#experience" className="text-[#64ffda]">
          02.{" "}
          <span
            className={
              active === "experience" ? "text-[#64ffda]" : "text-white"
            }
          >
            Experience
          </span>
        </Link>
        <Link href="#project" className="text-[#64ffda]">
          03.{" "}
          <span
            className={
              active === "project" ? "text-[#64ffda]" : "text-white"
            }
          >
            Project
          </span>
        </Link>
        <Link href="#skill" className="text-[#64ffda]">
          04.{" "}
          <span
            className={
              active === "skill" ? "text-[#64ffda]" : "text-white"
            }
          >
            Skill
          </span>
        </Link>
        <Link href="#contact" className="text-[#64ffda]">
          04.{" "}
          <span
            className={
              active === "contact" ? "text-[#64ffda]" : "text-white"
            }
          >
            Contact
          </span>
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className=" px-4 py-2 border border-[#64ffda] rounded-xs text-[#64ffda] font-medium
             relative transition-all duration-300
             hover:shadow-[4px_4px_0px_0px_#64ffda] 
             hover:-translate-y-1 hover:-translate-x-1"
        >
          Resume
        </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
