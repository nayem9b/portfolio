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
      <div className="lg:grid grid-cols-2">
        <div className="flex flex-col-reverse justify-between">
          <div>
            <motion.div variants={textVariant}>
              <p className={styles.sectionSubText}>Inroduction</p>
              <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <h1 className="text-white  text-base lg:text-xl">
              ● Full Stack Developer with industry{" "}
              <span className="underline decoration-violet-700 underline-offset-4 selection:bg-purple-600">
                experience of 1 year.
              </span>{" "}
              <br />
              ● Love to work in Backend And API intregation <br /> ● On way to
              SDE
              <br />● Will{" "}
              <span className="underline decoration-violet-700 underline-offset-4 selection:bg-purple-600">
                venture Cloud and DevOps
              </span>{" "}
              in 2024. <br />● Worked with venture firm{" "}
              <span className="italic font-bold text-xl underline decoration-violet-700 underline-offset-4 selection:bg-purple-600">
                Capitall
              </span>{" "}
              as a Full Stack Developer <br />
              ● Studying Electrical Engineering Final year <br />● Uses{" "}
              <span className="underline decoration-violet-700 underline-offset-4 selection:bg-purple-600">
                Linux
              </span>{" "}
              and do{" "}
              <span className="underline decoration-violet-700 underline-offset-4 selection:bg-purple-600">
                problem solving on Hacker Rank
              </span>
            </h1>
            <div className="block lg:hidden">
              <div className="grid grid-cols-3 gap-4 mt-6 w-full lg:w-4/5 md:w-3/6 ">
                <a
                  href="https://drive.google.com/file/d/1t0xLrT9RUPP_OCjL_f7T3BKv9gLIHGbl/view?usp=sharing"
                  target="_blank"
                  className=""
                  rel="noreferrer"
                >
                  <div className="relative inline-flex group">
                    <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#6d32bb] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <button
                      className="relative px-3 lg:px-8 py-4 text-base lg:text-lg lg:font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                    >
                      Resume
                    </button>
                  </div>
                </a>
                <a
                  className="inline-flex items-center rounded border-2 border-[#171515] bg-[#171515] px-3 lg:px-8 text-center py-2 text-sm font-medium text-white transition-colors hover:bg-transparent focus:outline-none focus:ring active:opacity-75 ml"
                  href="https://github.com/nayem9b"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <svg
                    class="ml-2 h-5 w-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  class="inline-flex items-center rounded border-2 border-[#0077b5] bg-[#0077b5] px-2 lg:px-8 py-2  lg:py-3 text-sm font-medium text-white transition-colors hover:text-black focus:outline-none focus:ring active:opacity-75"
                  href="https://www.linkedin.com/in/razwan-niam/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                  <svg
                    class="ml-2  w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <img
            src={razwan}
            alt=""
            className="w-full md:w-3/6 lg:w-5/6 rounded-full"
          />
        </div>
        <div className="mt-20 hidden lg:block">
          <h1 className="text-white font-extrabold text-5xl">Md Razwan Niam</h1>
          <h1 className="text-white font-extrabold text-4xl">
            Full Stack Developer
          </h1>
          <h1 className="text-white text-2xl mt-5">Experience: 1 year</h1>
          <h1 className="text-white text-2xl">
            Studies: Electrical and Electronic Engineering
          </h1>
          <h1 className="text-white text-2xl mt-1">
            Hajee Mohammad Danesh Science & Technology University
          </h1>
          <h1 className="text-white text-2xl">Dinajpur, Bangladesh</h1>
          <div className="grid grid-cols-3 gap-4 mt-20 w-full lg:w-4/5">
            <a
              href="https://drive.google.com/file/d/1t0xLrT9RUPP_OCjL_f7T3BKv9gLIHGbl/view?usp=sharing"
              target="_blank"
              className=""
              rel="noreferrer"
            >
              <div className="relative inline-flex group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#6d32bb] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button
                  className="relative px-3 lg:px-8 py-4 text-lg lg:font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Resume
                </button>
              </div>
            </a>
            <a
              className="inline-flex items-center rounded border-2 border-[#171515] bg-[#171515] px-3 lg:px-8 text-center py-2 text-sm font-medium text-white transition-colors hover:bg-transparent focus:outline-none focus:ring active:opacity-75 ml"
              href="https://github.com/nayem9b"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <svg
                class="ml-2 h-5 w-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              class="inline-flex items-center rounded border-2 border-[#0077b5] bg-[#0077b5] px-2 lg:px-8 py-2  lg:py-3 text-sm font-medium text-white transition-colors hover:text-black focus:outline-none focus:ring active:opacity-75"
              href="https://www.linkedin.com/in/razwan-niam/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <svg
                class="ml-2  w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
              </svg>
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
