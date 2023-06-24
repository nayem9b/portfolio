/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { styles } from "../styles";
import Computers from "./canvas/Computers";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="=relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] "></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]"> Razwan Niam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A{" "}
            <span className="text-[#915eff] font-bold text-4xl">
              Full Stack Developer{" "}
            </span>{" "}
            with a jist to create scalable web application
          </p>
          <div className="mt-80">
            <h1 className="text-5xl text-white font-bold">
              Why am I a good fit?
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Scroll to know me
            </p>
          </div>
        </div>
      </div>

      <Computers className="w-4 h-4"></Computers>

      <div className="absolute mt-8 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-indigo-700 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
