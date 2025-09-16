"use client";

import { useState } from "react";
import ProjectCard from "./projectCard";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Newspaper Website",
      description:
        "Newspaper Website is an online platform for delivering news, articles, and updates in a user-friendly, responsive format, allowing readers to access information quickly and stay informed across devices.",
      tech: ["React.js", "Tailwind CSS", "PHP", "Laravel", "MySQL"],
      github: "",
      live: "https://bengalchannel24.com/",
      image: "/image/bengal.png",
    },
    {
      title: "Multi vendor E-Commerce ",
      description:
        "Multi-Vendor E-Commerce is an online marketplace where multiple sellers can list their products, and customers can browse, compare, and purchase items seamlessly, with secure payments and order management.",
      tech: ["Next.js", "Tailwind CSS", "PHP", "Laravel", "MySQL"],
      github: "",
      live: "https://multivendor-dun.vercel.app/",
      image: "/image/bajjar.png",
    },
    {
      title: " E-Commerce Website ",
      description:
        "E-Commerce Website is an online shopping platform where users can browse products, add to cart, make secure payments, and track orders seamlessly.",
      tech: ["Next.js", "Tailwind CSS", "PHP", "Laravel", "MySQL"],
      github: "",
      live: "https://zanmart.com.bd/",
      image: "/image/zanmart.png",
    },
    {
      title: " Exam Preparation Website ",
      description:
        "Exam Preparation Website is a platform that provides study materials, practice tests, and performance tracking to help students prepare efficiently and improve their exam readiness",
      tech: ["Next.js", "Tailwind CSS", "PHP", "Laravel", "MySQL"],
      github: "",
      live: "https://mocktestbd.com/",
      image: "/image/mocktext.png",
    },
    {
      title: "Blood Donation Project",
      description:
        "Blood Donation Project is an initiative aimed at connecting voluntary blood donors with patients.",
      tech: ["React.js", "Tailwind CSS", "Python", "Django", "MySQL"],
      github: "https://github.com/MahmudulMahi",
      live: "https://blood-donation-frontend-visionarytechsolution.vercel.app/",
      image: "/image/BloodProject.JPG",
    },
    {
      title: "Car Management System",
      description:
        "Car Management System is a web-based platform that helps manage cars, owners, services, and bookings efficiently.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Firebase"],
      github: "https://github.com/MahmudulMahi/car-doctor-clients1",
      live: "https://beautiful-squirrel-0129a6.netlify.app/",
      image: "/image/car.JPG",
    },
    {
      title: "Company website",
      description:
        "Software Company Website is a modern and responsive platform designed to showcase company services, portfolio, and team.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Firebase"],
      github: "https://github.com/MahmudulMahi/-company-website",
      live: "https://www.visionarytechsolution.com/",
      image: "/image/vtsweb.JPG",
    },
    {
      title: "Restaurant Management ",
      description:
        "Restaurant Management System is a digital solution that streamlines restaurant operations by managing menus, orders, reservations, billing, and customer data efficiently, ensuring smooth service and better customer experience.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Firebase"],
      github: "https://github.com/MahmudulMahi/restaurant-client",
      live: "https://bistro-boss-restaurant-c3449.web.app/",
      image: "/image/bossres.JPG",
    },

    // {
    //   title: "Company Portfolio ",
    //   description:
    //     "A professional company portfolio website designed to showcase services, completed projects, team expertise, and client success stories, helping build trust and attract new customers.",
    //   tech: ["React.js", "PHP", "Laravel", "MySQL"],
    //   github: "",
    //   live: "https://www.cyberease.biz/",
    //   image: "/image/cyber.png",
    // },
    {
      title: "E-Commerce website ",
      description:
        "E-Commerce Website is an online shopping platform that allows users to browse products, add them to cart, make secure payments, and track orders with a smooth and responsive user experience.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Firebase"],
      github: "https://github.com/MahmudulMahi/restaurant-client",
      live: "https://bistro-boss-restaurant-c3449.web.app/",
      image: "/image/aggloToys.JPG",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="project" className="py-20 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12">
          <span className="text-[#64ffda]">03.</span> Some Things I’ve Built
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block px-6 py-3 border border-teal-400 text-teal-400 rounded transition-all duration-300
            hover:shadow-[4px_4px_0px_0px_#64ffda] 
            hover:-translate-y-1 hover:-translate-x-1"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
