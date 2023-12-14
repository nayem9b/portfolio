/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { styles } from "../styles";
import { FaArrowDown } from "react-icons/fa";
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
          <h1 className=" font-medium text-xl text-white-100 lg:text-4xl mt-10">
            A{" "}
            <span className="text-[#915eff] font-bold text-4xl">
              Full Stack Developer{" "}
            </span>{" "}
            with a zest to create scalable web application
          </h1>
          <div className="lg:mt-80 mt-20">
            <h1 className="lg:text-5xl text-4xl text-white font-bold">
              Why am I a good fit?
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 flex`}>
              Scroll to know me{" "}
              <span className="ml-5 mt-2">
                <FaArrowDown />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
