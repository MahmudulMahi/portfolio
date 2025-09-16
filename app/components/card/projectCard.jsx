import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, tech, github, live, image }) => {
  return (
    <div className="bg-[#112240] rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl">
      {/* Project Image */}
      {image && (
        <div className="h-44 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-[#ccd6f6]">{title}</h3>

        {/* Description */}
        <p
          className="text-gray-400 mt-3 text-sm line-clamp-3 min-h-[60px] "
          title={description}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="h-16">
          {tech && (
            <div className="flex flex-wrap gap-2 mt-4  ">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#0a192f] text-[#64ffda] px-2 py-1 rounded-lg border border-[#64ffda]/30 "
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#64ffda] text-sm"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#64ffda] text-sm"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;
