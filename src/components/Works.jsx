import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbExternalLink, TbX } from "react-icons/tb";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Tooltip wrapper component
const Tooltip = ({ children, text }) => {
  return (
    <div className="relative inline-flex group/tooltip">
      {children}
      <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none z-50">
        {text}
        <div className="absolute top-full right-3 w-2 h-2 bg-white/10 border-r border-b border-white/20 transform rotate-45" />
      </div>
    </div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  github_link_client,
  github_link_server,
  live_link,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer group">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-1 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/10">
        {/* Hover gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-transparent to-teal-500/0 group-hover:from-purple-500/10 group-hover:to-teal-500/10 transition-all duration-300" />

        <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-xl p-4 lg:p-5">
          {/* Image container */}
          <div className="relative w-full h-[230px] overflow-hidden rounded-xl mb-4">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full group-hover:scale-110 transition-transform duration-500 object-contain"
            />

            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* GitHub links - Modern icon buttons */}
            <div className="absolute inset-0 flex flex-col justify-end items-end p-3 gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              {github_link_client && (
                <Tooltip text="Client Code">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(github_link_client, "_blank");
                    }}
                    className="relative inline-flex group/icon"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-[#915eff] to-[#6d32bb] rounded-full blur opacity-0 group-hover/icon:opacity-100 transition duration-300" />
                    <div className="relative w-12 h-12 bg-gray-900 rounded-full flex justify-center items-center hover:bg-gray-800 transition-all duration-300">
                      <img
                        src={github}
                        alt="client code"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </button>
                </Tooltip>
              )}
              {github_link_server && (
                <Tooltip text="Server Code">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(github_link_server, "_blank");
                    }}
                    className="relative inline-flex group/icon"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-[#00cea8] to-[#00a878] rounded-full blur opacity-0 group-hover/icon:opacity-100 transition duration-300" />
                    <div className="relative w-12 h-12 bg-gray-900 rounded-full flex justify-center items-center hover:bg-gray-800 transition-all duration-300">
                      <img
                        src={github}
                        alt="server code"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </button>
                </Tooltip>
              )}
              <Tooltip text="DevOps Infrastructure">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Link to DevOps infrastructure documentation or repo
                    window.open("https://github.com", "_blank");
                  }}
                  className="relative inline-flex group/icon"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-[#bf61ff] to-[#8b3aff] rounded-full blur opacity-0 group-hover/icon:opacity-100 transition duration-300" />
                  <div className="relative w-12 h-12 bg-gray-900 rounded-full flex justify-center items-center hover:bg-gray-800 transition-all duration-300">
                    <span className="text-lg font-bold text-white">⚙️</span>
                  </div>
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 className="text-white font-bold text-lg lg:text-xl flex-1 line-clamp-2">
                {name}
              </h3>
              {live_link && (
                <a
                  href={live_link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="relative inline-flex group/link flex-shrink-0"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ecf39e] to-[#915eff] rounded-lg blur opacity-0 group-hover/link:opacity-100 transition duration-300" />
                  <div className="relative text-xl text-white bg-gray-900 rounded-lg p-1.5 hover:bg-gray-800 transition-all duration-300">
                    <TbExternalLink />
                  </div>
                </a>
              )}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {description}
            </p>

            {/* Tags with modern styling */}
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/10 ${tag.color} transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BottomSidebar = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project?.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border-t border-white/10 rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#ecf39e] via-[#915eff] to-[#00cea8] bg-clip-text text-transparent">
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Click cards to view details
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <TbX size={28} />
          </button>
        </div>

        <div className="relative w-full h-[300px] md:h-[450px] mb-6 rounded-2xl overflow-hidden border border-white/10">
          <img
            src={images[currentImageIndex]}
            alt={`${project.name} - ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <FaChevronRight size={20} />
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed text-base">
            {project.description}
          </p>

          {project.tags && project.tags.length > 0 && (
            <div>
              <h4 className="font-semibold text-white mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 ${tag.color} transition-all duration-300 hover:border-white/20`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-4">
            {project.github_link_client && (
              <a
                href={project.github_link_client}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex group/btn"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute -inset-px bg-gradient-to-r from-[#915eff] to-[#6d32bb] rounded-lg blur opacity-50 group-hover/btn:opacity-75 transition duration-300" />
                <button className="relative flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <img src={github} alt="GitHub" className="w-5 h-5" />
                  Client Code
                </button>
              </a>
            )}
            {project.github_link_server && (
              <a
                href={project.github_link_server}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex group/btn"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute -inset-px bg-gradient-to-r from-[#00cea8] to-[#00a878] rounded-lg blur opacity-50 group-hover/btn:opacity-75 transition duration-300" />
                <button className="relative flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <img src={github} alt="GitHub" className="w-5 h-5" />
                  Server Code
                </button>
              </a>
            )}
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex group/btn"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute -inset-px bg-gradient-to-r from-[#ecf39e] to-[#56ccf2] rounded-lg blur opacity-50 group-hover/btn:opacity-75 transition duration-300" />
                <button className="relative flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <TbExternalLink className="w-5 h-5" />
                  Live Demo
                </button>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseSidebar = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <h2 className="text-white font-black text-4xl lg:text-7xl text-center ">
        Projects
      </h2>

      <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 md:gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <BottomSidebar
            project={selectedProject}
            onClose={handleCloseSidebar}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "project");
