/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Typewriter from "typewriter-effect";
import razwan from "../assets/Md Razwan Niam Filtered.png";
import nayem from "../assets/nayem.png";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h1 className="text-white text-[20px] font-bold text-center">
            {title}
          </h1>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <div className="lg:grid grid-cols-2 gap-20">
        <div className="flex flex-col-reverse justify-between">
          <div>
            <motion.div variants={textVariant}>
              <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>
            <h1 className="text-white text-base lg:text-xl leading-relaxed">
              • Full Stack Engineer with{" "}
              <span className="underline decoration-purple-500 underline-offset-4 selection:bg-purple-600">
                2 years of industry experience
              </span>{" "}
              <br />• Strong focus on Backend API integration with {""}
              <span className="underline decoration-purple-500 underline-offset-4 selection:bg-purple-600">
                Node.js, FastAPI {""}
              </span>
              and building {""}
              <span className="underline decoration-purple-500 underline-offset-4 selection:bg-purple-600">
                DevSecOps CI/CD
              </span>{" "}
              pipeline.
              <br />
              • Expertise in Microservices, System Design and Infrastructure
              Automation <br />• From Design, Code, E2E testing and Deployment
              to Infrastructure management, Container orchestration with{" "}
              <span className="underline decoration-purple-500 underline-offset-4 selection:bg-purple-600">
                Kubernetes
              </span>{" "}
              and Observability with{" "}
              <span className="underline decoration-purple-500 underline-offset-4 selection:bg-purple-600">
                Grafana {""}
              </span>
              and{" "}
              <span className="underline decoration-purple-500 underline-offset-4 selection:bg-purple-600">
                ELK {""}
              </span>
              Stack.
            </h1>

            <div className="block lg:hidden">
              <div className="flex gap-3 mt-6 w-full flex-wrap">
                <a
                  href="https://drive.google.com/file/d/1t0xLrT9RUPP_OCjL_f7T3BKv9gLIHGbl/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex group"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-[#915eff] to-[#6d32bb] rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <button className="relative px-4 py-2 bg-gray-900 text-white rounded-lg font-medium text-sm transition-all duration-300 hover:bg-gray-800">
                    Resume
                  </button>
                </a>
                <a
                  href="https://github.com/nayem9b"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex group"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-[#171515] to-[#2a2a2a] rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <button className="relative px-4 py-2 bg-gray-900 text-white rounded-lg font-medium text-sm flex items-center transition-all duration-300 hover:bg-gray-800">
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/razwan-niam/"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex group"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-[#0077b5] to-[#005a8b] rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <button className="relative px-4 py-2 bg-gray-900 text-white rounded-lg font-medium text-sm flex items-center transition-all duration-300 hover:bg-gray-800">
                    LinkedIn
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-3/6 lg:w-5/6 mx-auto">
            <img
              src={nayem}
              alt="Md Razwan Niam"
              className="w-full max-w-sm rounded-full shadow-lg"
            />
          </div>
        </div>
        <div className="mt-20 hidden lg:block">
          <h1 className="text-white font-extrabold text-3xl">Md Razwan Niam</h1>
          <h1 className="text-white font-extrabold text-2xl mt-3">
            Full Stack, Cloud DevOps Engineer
          </h1>
          <h1 className="text-white text-xl mt-5">Experience: 2+ years</h1>
          <h1 className="text-white text-xl">
            Completed B.Sc(Engg) in Electrical and Electronic Engineering
          </h1>
          <h1 className="text-white text-base mt-1">
            Hajee Mohammad Danesh Science & Technology University
          </h1>
          <h1 className="text-white text-base">Dhaka, Bangladesh</h1>
          <div className="flex gap-4 mt-20 w-full lg:w-4/5">
            <a
              href="https://drive.google.com/file/d/1t0xLrT9RUPP_OCjL_f7T3BKv9gLIHGbl/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-[#915eff] to-[#6d32bb] rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <button className="relative px-6 py-3 bg-gray-900 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-800">
                Resume
              </button>
            </a>
            <a
              href="https://github.com/nayem9b"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-[#171515] to-[#2a2a2a] rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <button className="relative px-6 py-3 bg-gray-900 text-white rounded-lg font-medium flex items-center transition-all duration-300 hover:bg-gray-800">
                GitHub
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/razwan-niam/"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-[#0077b5] to-[#005a8b] rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <button className="relative px-6 py-3 bg-gray-900 text-white rounded-lg font-medium flex items-center transition-all duration-300 hover:bg-gray-800">
                LinkedIn
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="  font-extrabold text-transparent lg:text-8xl sm:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700font-bold">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Back End Developer",
              "Front End Developer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div> */}

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
