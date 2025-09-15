"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 md:px-10 py-6 flex justify-between items-center">
      <div className="text-[#64ffda] font-bold text-lg">
        <Link href="/">Mahmudul</Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <Link href="#about" className="text-[#64ffda] hover:text-white">
          01. About
        </Link>
        <Link href="#experience" className="text-[#64ffda] hover:text-white">
          02. Experience
        </Link>
        <Link href="#work" className="text-[#64ffda] hover:text-white">
          03. Work
        </Link>
        <Link href="#contact" className="text-[#64ffda] hover:text-white">
          04. Contact
        </Link>
<Link
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-4 px-4 py-2 border border-[#64ffda] rounded text-[#64ffda] font-medium
             relative transition-all duration-300
             hover:-translate-y-1 hover:-translate-x-1
             hover:shadow-[6px_6px_0px_0px_#64ffda]"
>
  Resume
</Link>



      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#64ffda]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a192f] flex flex-col items-center gap-6 py-6 md:hidden">
          <Link
            href="#about"
            className="text-[#64ffda] hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            01. About
          </Link>
          <Link
            href="#experience"
            className="text-[#64ffda] hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            02. Experience
          </Link>
          <Link
            href="#work"
            className="text-[#64ffda] hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            03. Work
          </Link>
          <Link
            href="#contact"
            className="text-[#64ffda] hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            04. Contact
          </Link>
          <Link
            href="/resume.pdf"
            className="border border-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda]/10"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
