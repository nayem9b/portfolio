import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div>
      <h1 className=" lg:text-6xl sm:text-4xl font-bold">Hi, Im</h1>
      <div className="  font-extrabold text-transparent lg:text-8xl sm:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700font-bold">
        <Typewriter
          options={{
            strings: [
              "Md Razwan Niam ",
              "Full Stack Developer",
              "Back End Developer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterText;
