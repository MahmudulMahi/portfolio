import ProjectCard from "./projectCard";


export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourname/portfolio",
      live: "https://yourportfolio.com",
      image: "/images/portfolio.png",
    },
    {
      title: "E-commerce Store",
      description: "A full-stack MERN e-commerce app with payment integration.",
      tech: ["React", "Node.js", "MongoDB"],
      github: null, // ❌ No GitHub
      live: "https://mystore.com",
      image: "/images/ecommerce.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12">
          <span className="text-[#64ffda]">03.</span> Some Things I’ve Built
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
