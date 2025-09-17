"use client"; // if you’re using Next.js App Router
import React, { useState } from "react";

const jobs = [
  {
    company: "Zan Vision Labs",
    role: "Frontend Developer @ Zan Vision Labs",
    duration: "2025 – Present",
    details: [
      "Built and maintained accessible, responsive web apps using React and Next.js",
      "Worked closely with designers and backend engineers to create seamless digital experiences",
      "Led performance optimization, improving Lighthouse scores by 30%",
    ],
  },
  {
    company: "Visionary Tech Solutions",
    role: "Jr Frontend Developer @ Visionary Tech Solutions",
    duration: "2023 – 2024",
    details: [
      "Assisted in developing responsive web pages with cross-browser compatibility",
      "Implemented UI components in React and TypeScript",
      "Collaborated with senior developers to enhance code quality and maintainabilit",
    ],
  },
];

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <section id="experience" className="mt-20 bg-[#0a192f] text-[#ccd6f6] px-4 md:px-4 lg:px-0">
      <div className="max-w-5xl mx-auto ">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-10 ">
          <span className="text-[#64ffda] mr-2">02.</span> Where I’ve Worked
          <span className="ml-6 flex-1 h-[1px] bg-gray-700"></span>
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Left Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-l border-gray-700">
            {jobs.map((job) => (
              <button
                key={job.company}
                onClick={() => setSelectedJob(job)}
                className={`px-4 py-2 text-left text-sm transition-colors ${
                  selectedJob.company === job.company
                    ? "text-[#64ffda] bg-[#112240] border-l-2 border-[#64ffda]"
                    : "text-gray-400 hover:text-[#64ffda]"
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Right Details */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold">
              {selectedJob.role.split("@")[0]}{" "}
              <span className="text-[#64ffda]">@ {selectedJob.company}</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {selectedJob.duration}
            </p>

            <ul className="space-y-3 text-gray-400 text-sm">
              {selectedJob.details.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#64ffda]">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
