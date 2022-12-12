import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const loaderData = useLoaderData();
  const { name, server, client, details, website, img1, img2, img3 } =
    loaderData;
  return (
    <div>
      <h1 className='text-5xl  text-center'>
        Project: <span className='text-purple-600 text-5xl'>{name}</span>{" "}
      </h1>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mx-7 mt-10'>
        <img src={img1} className='' alt='' />
        <img src={img2} className=' ' alt='' />
        <img src={img3} className=' ' alt='' />
      </div>
      <div className='text-center mx-auto mt-4'>
        <a href={client} target='_blank'>
          <button
            type='button'
            class='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '>
            Client side
          </button>
        </a>
        <a href={server} target='_blank'>
          <button
            type='button'
            class='inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-4'>
            Server Side
          </button>
        </a>
        <a href={website} target='_blank'>
          <button
            type='button'
            class='inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out ml-4'>
            Live website
          </button>
        </a>
      </div>
      <h1>Details:</h1>

      <h1 className='w-1/2 h-1/2'>{details}</h1>
      <Link
        to='/'
        class='relative inline-flex rounded-full items-center justify-start px-6 py-1.5 overflow-hidden font-medium transition-all bg-white  hover:bg-white group'>
        <span class='w-48 h-48 rounded-full rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
        <span class='relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white'>
          Go back
        </span>
      </Link>
      {/* <Link to='/'>
        <button className='btn primary'>Go back</button>
      </Link> */}
    </div>
  );
};

export default ProjectDetails;
