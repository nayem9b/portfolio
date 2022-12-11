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
            class='h-[250px]  object-contain transition duration-500 group-hover:scale-105 '
          />
        </a>
        <h1 className='text-center m-6 text-3xl font-bold text-green-400'>
          {name}
        </h1>
        <div className='grid grid-cols-2 gap-10'>
          <a
            class='inline-block rounded border border-green-400 px-12 py-3 text-sm font-medium text-white hover:border-yellow-300  hover:text-yellow-300 focus:outline-none focus:ring active:bg-indigo-500'
            href={client}>
            Github client side
          </a>
          <a
            class='inline-block rounded border border-yellow-300 px-12 py-3 text-sm font-medium text-white hover:border-green-400  hover:text-green-400 focus:outline-none focus:ring active:bg-indigo-500'
            href={server}>
            Github server side
          </a>
        </div>
        <div>
          <Link to={`project/${number}`}>
            <button className='btn btn-primary'>Project details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
