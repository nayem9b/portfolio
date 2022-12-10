import React from "react";

import Typewriter from "typewriter-effect";

const Text = () => {
  return (
    <div>
      <h1 className=' lg:text-6xl sm:text-4xl font-bold'>Who am I? </h1>
      <div className='  font-extrabold text-transparent lg:text-8xl sm:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700font-bold'>
        <Typewriter
          options={{
            strings: [
              "MERN Stack Developer",
              "Front End Developer",
              "Web developer",
              "3D Animator",
              "EEE Student",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Text;
