import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { number, name, website, client, server, img1 } = project;
  return (
    <div>
      <div className=''>
        <a href={website} class='block overflow-hidden group'>
          <img
            src={img1}
            alt=''
            class=' object-contain w-45 transition duration-500 group-hover:scale-105 '
          />
        </a>
        <h1 className='text-center  text-3xl font-bold text-green-400'>
          {name}
        </h1>
        <div className='grid grid-cols-3 gap-3'>
          <a
            href={client}
            class='relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group'>
            <span class='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]'></span>
            <span class='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8'></span>
            <span class='relative lg:w-full text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900'>
              Github client
            </span>
            <span class='absolute inset-0 border-1 border-white rounded-full'></span>
          </a>
          {/* <a
            class='inline-block rounded-full border border-green-400 py-3 px-7 text-sm font-medium text-white hover:border-yellow-300  hover:text-yellow-300 focus:outline-none focus:ring active:bg-indigo-500'
            href={client}>
            Github client
          </a> */}
          <a
            href={server}
            class='relative inline-flex items-center justify-center overflow-hidden  font-medium tracking-tighter text-white  rounded-full group'>
            <span class='absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56'></span>
            <span class='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
            <span class='relative'> Github server</span>
          </a>
          {/* <a
            class='inline-block  border rounded-full border-yellow-300 py-3 px-7 text-sm font-medium text-white hover:border-green-400  hover:text-green-400 focus:outline-none focus:ring active:bg-indigo-500'
            href={server}>
            Github server
          </a> */}
          {/* <div>
            <Link to={`project/${number}`}>
              <button className='btn btn-primary'>Project details</button>
            </Link>
          </div> */}
          <Link
            to={`project/${number}`}
            class='relative inline-flex items-center justify-start inline-block px-11  py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group'>
            <span class='absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full'></span>
            <span class='relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600'>
              Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
