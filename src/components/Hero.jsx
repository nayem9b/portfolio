/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { styles } from "../styles";
import { FaArrowDown } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] "></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#915eff]"> Razwan Niam</span>
          </h1>
          {/* Short Intro Section */}
          <p className="text-lg text-white-100 max-w-xl">
            Hi! I'm Razwan, a passionate developer who loves building scalable, beautiful, and efficient digital products. I thrive at the intersection of code, cloud, and creativity.
          </p>
          {/* Skills Highlight Section */}
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="bg-[#ecf39e] text-[#22223b] px-3 py-1 rounded-full text-sm font-semibold">React</span>
            <span className="bg-[#915eff] text-white px-3 py-1 rounded-full text-sm font-semibold">Node.js</span>
            <span className="bg-[#00cea8] text-white px-3 py-1 rounded-full text-sm font-semibold">DevOps</span>
            <span className="bg-[#bf61ff] text-white px-3 py-1 rounded-full text-sm font-semibold">Cloud</span>
            <span className="bg-[#56ccf2] text-[#22223b] px-3 py-1 rounded-full text-sm font-semibold">MLOps</span>
          </div>
          {/* Main Title Section */}
          <h2 className="font-medium text-xl text-white-100 lg:text-4xl mt-2">
            Software Engineer with expertise in <span className="text-[#ecf39e] font-bold text-4xl">Full Stack + Cloud DevOps.</span>
            <br />
            <span className="text-base font-normal">Passionate about System Design and MLOps.</span>
          </h2>
          {/* Call to Action Section */}
          <a href="#works" className="mt-4 inline-block px-8 py-3 bg-[#915eff] text-white rounded-full font-bold shadow-lg hover:bg-[#7a4fd1] transition-all w-fit">
            View My Projects
          </a>
          {/* Fun Fact & Quote Section */}
          <div className="mt-2 text-white-100 text-base italic">
            <span className="font-semibold text-[#ecf39e]">Fun Fact:</span> I can deploy a full-stack app in under 30 minutes!
          </div>
          <blockquote className="mt-2 text-[#bf61ff] text-sm border-l-4 border-[#915eff] pl-4">
            "Simplicity is the soul of efficiency." – Austin Freeman
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hero;
