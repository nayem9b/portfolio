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
      <div className='grid grid-cols-3 gap-10 mx-7 mt-10'>
        <img src={img1} className='' alt='' />
        <img src={img2} className=' ' alt='' />
        <img src={img3} className=' ' alt='' />
      </div>
      <div className='text-center mx-auto mt-4'>
        <Link to={client}>
          <button
            type='button'
            class='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '>
            Client side
          </button>
        </Link>
        <Link to={server}>
          <button
            type='button'
            class='inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-4'>
            Server Side
          </button>
        </Link>
        <Link to={website}>
          <button
            type='button'
            class='inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out ml-4'>
            Live website
          </button>
        </Link>
      </div>
      <h1>Details:</h1>

      <h1 className='w-1/2 h-1/2'>{details}</h1>
      <Link to='/'>
        <button className='btn primary'>Go back</button>
      </Link>
    </div>
  );
};

export default ProjectDetails;
