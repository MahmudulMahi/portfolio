import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./globals.css";
import Head from "./head";

export const metadata = {
  title: "Md Mahmudul Islam",
  description: "Welcome to my website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="">
        {/* Social Icons - Left */}
        <div className="fixed bottom-0 left-10 lg:flex flex-col items-center gap-5 hidden ">
          <a
            href="https://github.com/MahmudulMahi"
            target="_blank"
            className=" text-secondary transition-transform duration-300 ease-in-out 
                hover:text-[#64ffda] hover:-translate-y-1"
          >
            <FiGithub className=" " />
          </a>
          <a
            href="https://www.facebook.com/MahmudulMahi.SWE/"
            target="_blank"
            className="text-secondary transition-transform duration-300 ease-in-out 
                hover:text-[#64ffda] hover:-translate-y-1"
          >
            <FaFacebookF className="" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmudulmahi/"
            target="_blank"
            className="text-secondary transition-transform duration-300 ease-in-out 
                hover:text-[#64ffda] hover:-translate-y-1"
          >
            <FaLinkedinIn className=" " />
          </a>

          <div className="w-[1px] h-24 bg-secondary"></div>
        </div>

        {/* Email - Right */}
        <div className="fixed bottom-0 right-10 lg:flex flex-col items-center gap-5 hidden">
          <a
            href="https://mail.google.com/mail/?view=cm&to=mdmahmudulislam00@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary text-xs rotate-90 fixed bottom-52 tracking-widest transition-transform duration-300 ease-in-out 
             hover:text-[#64ffda] hover:-translate-y-2"
          >
            mdmahmudulislam00@gmail.com
          </a>

          <div className="w-[1px] h-24 bg-secondary"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
