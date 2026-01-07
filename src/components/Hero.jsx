/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { styles } from "../styles";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-10`}
      >
        {/* Left accent element */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#ecf39e] to-[#915eff] shadow-lg shadow-purple-500/50" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#ecf39e] via-[#915eff] to-transparent" />
        </div>

        {/* Main content with glassmorphism */}
        <div className="flex flex-col gap-6 flex-1 relative">
          {/* Glassmorphism background card */}
          <div className="absolute -inset-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10" />

          <div className="relative z-10">
            {/* Name heading */}
            <h1 className={`${styles.heroHeadText} text-white mb-4`}>
              <span className="bg-gradient-to-r from-[#915eff] to-[#ecf39e] bg-clip-text text-transparent">
                Razwan Niam
              </span>
            </h1>

            {/* Short intro */}
            <p className="text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed mb-4">
              Software Engineer with expertise in End-to-End Full Stack (Py+Ts)
              Web Applications and cloud technologies.
              <br />
              <span className="text-white font-medium">
                Dedicated to delivering reliable, cloud-enabled solutions.
              </span>
            </p>

            {/* Skills highlight badges - modern design */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { text: "Kubernetes", color: "#ecf39e" },
                { text: "MERN", color: "#915eff" },
                { text: "DevOps", color: "#00cea8" },
                { text: "Cloud", color: "#56ccf2" },
                { text: "NextJS", color: "#bf61ff" },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="relative group"
                  style={{
                    "--skill-color": skill.color,
                  }}
                >
                  <div
                    className="absolute -inset-px rounded-full blur opacity-0 group-hover:opacity-10 transition duration-300"
                    style={{
                      backgroundColor: skill.color,
                    }}
                  />
                  <span
                    className="relative px-4 py-2 rounded-full text-sm font-semibold  bg-white/5 border transition-all duration-300 hover:bg-white/10"
                    style={{
                      borderColor: `${skill.color}40`,
                      color: skill.color,
                    }}
                  >
                    {skill.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Main title with emphasis */}
            <h2 className="font-medium text-xl lg:text-2xl text-white leading-snug mb-6">
              Software Engineer with expertise in{" "}
              <span className="block mt-2 text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ecf39e] via-[#915eff] to-[#00cea8] bg-clip-text text-transparent">
                Full Stack + Cloud DevOps
              </span>
              <span className="block text-base font-normal text-gray-400 mt-3">
                Passionate about System Design and MLOps.
              </span>
            </h2>

            {/* Call to action button */}
            <a href="#project" className="relative inline-flex group mt-4">
              <div className="absolute -inset-px bg-gradient-to-r from-[#915eff] via-[#ecf39e] to-[#00cea8] rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300" />
              <button className="relative px-8 py-3 bg-gray-900 text-white rounded-full font-bold flex items-center gap-2 hover:bg-gray-800 transition-all duration-300 group-hover:gap-3">
                View My Projects
                <FaArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
