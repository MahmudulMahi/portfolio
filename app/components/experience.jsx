"use client"; // if you’re using Next.js App Router
import React, { useState } from "react";

const jobs = [
  {
    company: "Upstatement",
    role: "Frontend Developer @ Upstatement",
    duration: "2020 – Present",
    details: [
      "Built and maintained accessible, responsive web apps using React and Next.js",
      "Worked closely with designers and backend engineers to create seamless digital experiences",
      "Led performance optimization, improving Lighthouse scores by 30%",
    ],
  },
  {
    company: "Apple",
    role: "Software Engineer Intern @ Apple",
    duration: "2019 – 2020",
    details: [
      "Collaborated on large-scale internal tools for Apple’s retail systems",
      "Implemented UI components in React and TypeScript",
      "Optimized rendering performance for dashboards used by thousands of employees",
    ],
  },
  {
    company: "Scout Studio",
    role: "Designer & Developer @ Scout Studio",
    duration: "2017 – 2019",
    details: [
      "Designed and developed brand websites for student-led projects",
      "Introduced reusable component libraries with Tailwind CSS",
      "Mentored junior developers in frontend best practices",
    ],
  },
  {
    company: "Starry",
    role: "Web Developer @ Starry",
    duration: "2016 – 2017",
    details: [
      "Created landing pages and product pages with modern UI/UX patterns",
      "Maintained company blog and marketing websites",
      "Improved SEO performance and accessibility compliance",
    ],
  },
  {
    company: "MullenLowe",
    role: "Creative Technologist Co-op @ MullenLowe",
    duration: "July – December 2015",
    details: [
      "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
      "Performed QA tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
      "Clients included JetBlue, Lovesac, U.S. Cellular, and U.S. Department of Defense",
    ],
  },
];

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <section id="experience" className="py-20 bg-[#0a192f] text-[#ccd6f6]">
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-10 flex items-center">
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
