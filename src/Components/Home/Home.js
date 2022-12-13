import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import Lottie from "lottie-react";
import Text from "../Text/Text";
import pdf from "../../images/Md Razwan Niam resume.pdf";
import developer from "../../images/90497-software-development.json";
import nayem from "../../images/nayem.jpg";
import bookify from "../../images/bookify.png";
import kitchen from "../../images/anonna.png";
import learn from "../../images/learn.png";

import { createContext, useEffect, useState } from "react";
import ProjectCard from "../Project/ProjectCard";
const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://portfolioserver-nayem9b.vercel.app/")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <div class='relative'>
        <div
          class='sticky top-0 h-screen flex flex-col  justify-center bg-black'
          id='home'>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 '>
            <div className='lg:ml-20'>
              <Text></Text>
            </div>

            <div className='grid lg:grid-rows-2 '>
              <h1 className='text-6xl text-green-400 font-semibold'>
                Md Razwan Niam
              </h1>
              <h1 className='text-3xl'>MERN Stack Developer</h1>
              <div className='grid grid-cols-3 gap-4 w-96'>
                <a href={pdf} target='_blank'>
                  <button className='btn glass text-green-400 w-28'>
                    Resume
                  </button>
                </a>
                <a
                  class='inline-flex items-center rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent focus:outline-none focus:ring active:opacity-75'
                  href='https://github.com/nayem9b'
                  target='_blank'
                  rel='noreferrer'>
                  GitHub
                  <svg
                    class='ml-2 h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      fill-rule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clip-rule='evenodd'></path>
                  </svg>
                </a>
                <a
                  class='inline-flex items-center rounded border-2 border-[#0077b5] bg-[#0077b5] px-5 py-3 text-sm font-medium text-white transition-colors hover:text-black focus:outline-none focus:ring active:opacity-75'
                  href='https://www.linkedin.com/in/razwan-niam/'
                  target='_blank'
                  rel='noreferrer'>
                  LinkedIn
                  <svg
                    class='ml-2 h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path fill='none' d='M0 0h24v24H0z' />
                    <path d='M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z' />
                  </svg>
                </a>
              </div>

              <Lottie className='w-1/2' animationData={developer} loop={true} />
            </div>
          </div>
        </div>

        {/* style="background-image:linear-gradient(rgba(135, 80, 156, 0.9),
        rgba(135, 80, 156, 0.9)), url(img/hero-bg.jpg) */}
        <div
          class="bg-[url('https://images.pexels.com/photos/4577548/pexels-photo-4577548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  sticky top-0 h-screen flex flex-col  bg-neutral-800 text-white bg-cover"
          id='about_me'>
          <h1 className='text-center text-5xl lg:mb-20'>About me</h1>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:order-last'>
            <div>
              <h1 className='text-4xl text-center font-bold text-green-400 mb-6'>
                Md Razwan Niam
              </h1>
              <h1 className='text-2xl mx-4 '>
                B.Sc in Electrical and Electronic Engineering(2nd Year)
              </h1>
              <h1 className='text-2xl mx-4 '>
                Hajee Mohammad Danesh Science and Technology University
              </h1>
              <div className='mt-6 items-center justify-center mx-4 '>
                <h1>
                  MERN Stack Developer || Love to work with React.js ||
                  Passionate about Full Stack Development
                </h1>
                <h1 className='text-justify'>
                  An enthusiastic web developer with a thirst of learning new
                  technology. I love to work with React.js and MongoDB. In the
                  meantime I'm learning Mongoose and Next.js for future use
                  case.
                </h1>
              </div>
            </div>
            <div className=' flex items-center justify-center'>
              <div className='avatar'>
                <div className='w-80  rounded-full ring-offset-base-100 ring-offset-3'>
                  <img src={nayem} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-[url('https://images.unsplash.com/photo-1617900879256-45020f3700ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-opacity-5  sticky top-0 h-screen flex flex-col bg-no-repeat   bg-neutral-800 text-white"
          id='skills'>
          <h2 class='  text-5xl mx-auto'>My Skills</h2>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 mt-6 ml-10'>
            {" "}
            <div className=''>
              <h1 className='text-center text-xl mb-6 font-bold text-green-400'>
                Expertise
              </h1>
              <div className='grid grid-cols-3 gap-y-10'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
                  alt='react'
                  width='80'
                  height='80'
                />
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
                  alt='javascript'
                  width='80'
                  height='80'
                />{" "}
                <img
                  src='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
                  alt='tailwind'
                  width='80'
                  height='80'
                />
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
                  alt='bootstrap'
                  width='80'
                  height='80'
                />
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
                  alt='css3'
                  width='80'
                  height='80'
                />
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
                  alt='html5'
                  width='80'
                  height='80'
                />
              </div>
            </div>
            <div className=''>
              <h1 className='text-center  mb-6 text-xl font-bold text-green-400'>
                Comfortable
              </h1>
              <div className='grid grid-cols-3 gap-y-10'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
                  alt='mongodb'
                  width='80'
                  height='80'
                />
                <img
                  src='https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png'
                  alt='express'
                  width='80'
                  height='80'
                />
                <img
                  src='https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
                  alt='firebase'
                  width='80'
                  height='80'
                />
              </div>
            </div>
            <div className=''>
              <h1 className='text-center mb-6 text-xl font-bold text-green-400'>
                Familiar
              </h1>
              <div className='grid grid-cols-3 gap-y-10'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
                  alt='nodejs'
                  width='80'
                  height='80'
                />
                <img
                  src='https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png'
                  alt='JWT'
                  width='80'
                  height='80'
                />
              </div>
            </div>
          </div>
        </div>
        {/* Third page */}
        <div
          class="bg-[url('https://images.unsplash.com/photo-1638184984605-af1f05249a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')]  sticky top-0 h-screen flex flex-col  bg-neutral-800 text-white"
          id='projects'>
          <h1 className='text-center mb-6 text-5xl'>My Projects</h1>
          <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-x-5 lg:mx-8 mx-5'>
            {projects.map((project) => (
              <ProjectCard project={project}></ProjectCard>
            ))}
            {/* <div className=''>
              <a
                href='https://bookify-a39cf.web.app/signin'
                class='block overflow-hidden group'>
                <img
                  src={bookify}
                  alt=''
                  class='h-[250px]  object-contain transition duration-500 group-hover:scale-105 '
                />
              </a>
              <h1 className='text-center m-6 text-3xl font-bold text-green-400'>
                Bookify
              </h1>
              <div className='grid grid-cols-2 gap-10'>
                <a
                  class='inline-block rounded border border-green-400 px-12 py-3 text-sm font-medium text-white hover:border-yellow-300  hover:text-yellow-300 focus:outline-none focus:ring active:bg-indigo-500'
                  href='https://github.com/nayem9b/resale-books'>
                  Github client side
                </a>
                <a
                  class='inline-block rounded border border-yellow-300 px-12 py-3 text-sm font-medium text-white hover:border-green-400  hover:text-green-400 focus:outline-none focus:ring active:bg-indigo-500'
                  href='https://github.com/nayem9b/Resale-books-serverside'>
                  Github server side
                </a>
              </div>
              <div>
                <h1>Features:</h1>
              </div>
            </div>

            <div>
              <a
                href='https://anonna-s-kitchen.web.app/'
                class='block overflow-hidden group'>
                <img
                  src={kitchen}
                  alt=''
                  class='h-[250px]  object-contain transition duration-500 group-hover:scale-105 '
                />
              </a>
              <h1 className='text-center m-6 text-3xl font-bold text-green-400'>
                Anonna's Kitchen
              </h1>
              <div className='grid grid-cols-2 gap-10'>
                <a
                  class='inline-block rounded border border-green-400 px-12 py-3 text-sm font-medium text-white hover:border-yellow-300  hover:text-yellow-300 focus:outline-none focus:ring active:bg-indigo-500'
                  href='https://github.com/nayem9b/Anonna-s-kitchen'>
                  Github client side
                </a>
                <a
                  class='inline-block rounded border border-yellow-300 px-12 py-3 text-sm font-medium text-white hover:border-green-400  hover:text-green-400 focus:outline-none focus:ring active:bg-indigo-500'
                  href='https://github.com/nayem9b/anonna-kitchen-serverside'>
                  Github server side
                </a>
              </div>
              <div>
                <h1>Features:</h1>
              </div>
            </div>
            <div>
              <a
                href='https://web-smasher.web.app/'
                class='block overflow-hidden group'>
                <img
                  src={learn}
                  alt=''
                  class='h-[250px]  object-contain transition duration-500 group-hover:scale-105 '
                />
              </a>
              <h1 className='text-center m-6 text-3xl font-bold text-green-400'>
                Web Smasher
              </h1>
              <div className='grid grid-cols-2 gap-10'>
                <a
                  class='inline-block rounded border border-green-400 px-12 py-3 text-sm font-medium text-white hover:border-yellow-300  hover:text-yellow-300 focus:outline-none focus:ring active:bg-indigo-500'
                  href='https://github.com/nayem9b/Learning-Platform-clientside'>
                  Github client side
                </a>
                <a
                  class='inline-block rounded border border-yellow-300 px-12 py-3 text-sm font-medium text-white hover:border-green-400  hover:text-green-400 focus:outline-none focus:ring active:bg-indigo-500'
                  href='https://github.com/nayem9b/Learning-platform-serverside'>
                  Github server side
                </a>
              </div>
              <div>
                <h1>Features:</h1>
              </div>
            </div> */}
          </div>
        </div>
        <ContactMe></ContactMe>
        {/* <div class='sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white'></div> */}
        {/* <div class='  relative top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white'>
          <h2 class='text-4xl'>The Fourth Title</h2>
          <video
            className='videoTag  object-cover w-full h-full'
            autoPlay
            loop
            muted>
            <source src={motion} type='video/mp4' />
            <div className=' absolute text-white text-2xl'>
              <h1 className=' absolute text-white text-2xl'>
                {" "}
                hello from the other side
              </h1>
            </div>
          </video>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
