import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbExternalLink, TbX } from "react-icons/tb";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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
    <div onClick={onClick} className="cursor-pointer">
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] md:w-[300px] lg:w-[370px] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(github_link_client, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-end mt-16 mr-3 card-img_hover">
            <div
              onClick={() => window.open(github_link_server, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <a
              href={live_link}
              target="_blank"
              rel="noreferrer"
              className="text-white ml-3 text-3xl"
            >
              <TbExternalLink />
            </a>
          </div>

          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
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
      className="fixed inset-0 bg-black/70 z-50 flex items-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="w-full bg-tertiary rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-primary transition-colors"
          >
            <TbX size={28} />
          </button>
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-xl overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={`${project.name} - ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
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
                    className={`w-2 h-2 rounded-full ${
                      idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="text-white">
          <p className="mb-4">{project.description}</p>
          
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm ${tag.color} bg-opacity-20`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            {project.github_link_client && (
              <a
                href={project.github_link_client}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={github} alt="GitHub" className="w-5 h-5" />
                Client Code
              </a>
            )}
            {project.github_link_server && (
              <a
                href={project.github_link_server}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={github} alt="GitHub" className="w-5 h-5" />
                Server Code
              </a>
            )}
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <TbExternalLink />
                Live Demo
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
    document.body.style.overflow = 'hidden';
  };

  const handleCloseSidebar = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <h2 className="text-white font-black text-4xl lg:text-7xl text-center ">
        Projects.
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
